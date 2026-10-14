import dns from "node:dns/promises";
import crypto from "node:crypto";

/**
 * Common legitimate email domains that do not need live DNS MX queries.
 * Fast-path optimization to keep submission times sub-millisecond for normal users.
 */
const TRUSTED_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "yahoo.com",
  "yahoo.co.in",
  "icloud.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "zoho.in",
  "aol.com",
  "mail.com",
  "rhdynamics.in",
]);

/**
 * Disposable/temporary email domains frequently abused by throwaway bots.
 */
const DISPOSABLE_DOMAINS = new Set([
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "tempmail.com",
  "throwawaymail.com",
  "yopmail.com",
  "trashmail.com",
  "getairmail.com",
  "dispostable.com",
  "sharklasers.com",
]);

interface BlocklistEntry {
  strikes: number;
  bannedUntil: number; // Unix timestamp in ms. Infinity for permanent ban.
  reason: string;
  firstSeen: number;
  lastAttempt: number;
}

interface MessageHashEntry {
  timestamp: number;
  ip: string;
}

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

// In-memory registries (singleton per server instance)
const ipBlocklist = new Map<string, BlocklistEntry>();
const rateLimitStore = new Map<string, RateLimitEntry>();
const recentMessageHashes = new Map<string, MessageHashEntry>();

// Configuration constants
const MIN_FILL_TIME_MS = 3000; // 3 seconds minimum to fill form
const MAX_FILL_TIME_MS = 24 * 60 * 60 * 1000; // 24 hours max token validity
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 requests per minute per IP
const HASH_TTL_MS = 15 * 60 * 1000; // 15 minutes duplicate message cache
const PERMANENT_BAN_STRIKES = 3; // 3 severe bot strikes = permanent ban
const BAN_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days initial ban duration

// Cleanup old hashes periodically
setInterval(() => {
  const now = Date.now();
  recentMessageHashes.forEach((entry, hash) => {
    if (now - entry.timestamp > HASH_TTL_MS) {
      recentMessageHashes.delete(hash);
    }
  });
  rateLimitStore.forEach((entry, ip) => {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
      rateLimitStore.delete(ip);
    }
  });
}, 5 * 60 * 1000);


export interface BotDefenseInput {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  honeypotWebsite?: string;
  honeypotFax?: string;
  renderedAt?: number;
  clientIp: string;
}

export interface BotDefenseResult {
  /**
   * If true, proceed with sending the notification email.
   */
  isAllowed: boolean;
  /**
   * If true, silently return 200 OK to the client without sending any email.
   * This is the "ghost ban" / "silent blackhole" for bots.
   */
  isBlackholed: boolean;
  /**
   * Status code to return if not allowed and not blackholed (e.g. 400, 429).
   */
  statusCode?: number;
  /**
   * User-facing error message (if legitimate error).
   */
  errorMessage?: string;
  /**
   * Internal telemetry reason for logs.
   */
  internalReason?: string;
}

/**
 * Check if the email domain has active DNS MX records.
 * Uses fast-path for trusted providers, and times out after 2.5s to prevent latency.
 */
async function verifyEmailDomainMx(email: string): Promise<boolean> {
  const atIndex = email.lastIndexOf("@");
  if (atIndex === -1) return false;
  const domain = email.slice(atIndex + 1).toLowerCase().trim();

  if (!domain || domain.length < 3 || !domain.includes(".")) {
    return false;
  }

  // Check known disposable domains
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return false;
  }

  // Fast-path: trusted legitimate domains
  if (TRUSTED_EMAIL_DOMAINS.has(domain)) {
    return true;
  }

  // Perform DNS MX lookup with a 2500ms timeout
  try {
    const mxPromise = dns.resolveMx(domain);
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("DNS timeout")), 2500)
    );

    const records = await Promise.race([mxPromise, timeoutPromise]);
    return Array.isArray(records) && records.length > 0;
  } catch (error) {
    // If DNS query times out or fails unexpectedly, check if it's an NXDOMAIN
    const err = error as NodeJS.ErrnoException;
    if (err.code === "ENOTFOUND" || err.code === "ENODATA") {
      return false; // Domain conclusively does not exist or has no MX
    }
    // Fail-open on transient network issues so real users are never blocked by DNS glitches
    console.warn(`[BotDefense] DNS MX check inconclusive for ${domain}: ${err.message}`);
    return true;
  }
}

/**
 * Add or escalate an IP in the high-confidence Bot Blocklist.
 */
function recordBotStrike(ip: string, reason: string, immediatePermanent: boolean = false) {
  const now = Date.now();
  const existing = ipBlocklist.get(ip);

  if (!existing) {
    ipBlocklist.set(ip, {
      strikes: 1,
      bannedUntil: immediatePermanent ? Infinity : now + BAN_DURATION_MS,
      reason,
      firstSeen: now,
      lastAttempt: now,
    });
    console.warn(`[BotDefense] Flagged IP ${ip} as bot. Reason: ${reason}`);
    return;
  }

  existing.strikes += 1;
  existing.lastAttempt = now;
  existing.reason = reason;

  if (immediatePermanent || existing.strikes >= PERMANENT_BAN_STRIKES) {
    existing.bannedUntil = Infinity; // Permanent ban
    console.warn(`[BotDefense] IP ${ip} permanently banned after ${existing.strikes} strikes.`);
  } else {
    existing.bannedUntil = now + BAN_DURATION_MS;
  }
}

/**
 * Evaluates an incoming contact form submission across all defense layers.
 */
export async function evaluateBotDefense(
  input: BotDefenseInput
): Promise<BotDefenseResult> {
  const {
    name,
    email,
    message,
    honeypotWebsite,
    honeypotFax,
    renderedAt,
    clientIp,
  } = input;
  const now = Date.now();

  // -------------------------------------------------------------
  // LAYER 0: Active Blocklist Check (Silent Blackhole)
  // -------------------------------------------------------------
  const banRecord = ipBlocklist.get(clientIp);
  if (banRecord) {
    if (now < banRecord.bannedUntil) {
      banRecord.lastAttempt = now;
      console.info(`[BotDefense] Silent blackholing request from banned IP: ${clientIp} (${banRecord.reason})`);
      return {
        isAllowed: false,
        isBlackholed: true,
        internalReason: `IP is on active blocklist: ${banRecord.reason}`,
      };
    } else {
      // Ban has expired
      ipBlocklist.delete(clientIp);
    }
  }

  // -------------------------------------------------------------
  // LAYER 1: Multi-Vector Invisible Honeypots
  // -------------------------------------------------------------
  const hp1Filled = Boolean(honeypotWebsite && honeypotWebsite.trim().length > 0);
  const hp2Filled = Boolean(honeypotFax && honeypotFax.trim().length > 0);

  if (hp1Filled || hp2Filled) {
    // Definitive bot: Humans never see or fill this field
    recordBotStrike(
      clientIp,
      `Honeypot triggered (hp1: ${hp1Filled}, hp2: ${hp2Filled})`,
      true // Immediate permanent ban
    );
    return {
      isAllowed: false,
      isBlackholed: true,
      internalReason: "Honeypot trap triggered",
    };
  }

  // -------------------------------------------------------------
  // LAYER 2: Time-Trap Velocity Check
  // -------------------------------------------------------------
  if (typeof renderedAt === "number" && !isNaN(renderedAt)) {
    const elapsed = now - renderedAt;

    if (elapsed < MIN_FILL_TIME_MS) {
      // Submitted in < 3000ms -> Headless scraper or bot
      recordBotStrike(clientIp, `Submitted too fast (${elapsed}ms)`);
      return {
        isAllowed: false,
        isBlackholed: true,
        internalReason: `Time-trap triggered: ${elapsed}ms`,
      };
    }

    if (elapsed > MAX_FILL_TIME_MS) {
      return {
        isAllowed: false,
        isBlackholed: false,
        statusCode: 400,
        errorMessage: "Form session has expired. Please refresh the page and try again.",
        internalReason: "Form session expired (> 24 hours)",
      };
    }
  }

  // -------------------------------------------------------------
  // LAYER 3: Heuristic Content & Pattern Scoring
  // -------------------------------------------------------------
  const messageLower = message.toLowerCase();

  // 3A: Detect SEO / Forum BBCode or HTML tag injection
  const containsBbCode =
    messageLower.includes("[url=") ||
    messageLower.includes("[link=") ||
    messageLower.includes("[/url]") ||
    messageLower.includes("[b]");
  const containsHtmlMarkup =
    messageLower.includes("<a href=") ||
    messageLower.includes("<script") ||
    messageLower.includes("<iframe");

  if (containsBbCode || containsHtmlMarkup) {
    recordBotStrike(clientIp, "BBCode/HTML injection spam", true);
    return {
      isAllowed: false,
      isBlackholed: true,
      internalReason: "BBCode / HTML injection detected",
    };
  }

  // 3B: Excessive link density check (more than 2 URLs in a message)
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
  const urlMatches = message.match(urlRegex);
  if (urlMatches && urlMatches.length > 2) {
    recordBotStrike(clientIp, `Excessive link count (${urlMatches.length} URLs)`);
    return {
      isAllowed: false,
      isBlackholed: true,
      internalReason: `High link density: ${urlMatches.length} links`,
    };
  }

  // 3C: Duplicate message hash check (anti-bombing loop)
  const contentHash = crypto
    .createHash("sha256")
    .update(`${email.trim().toLowerCase()}:${message.trim().toLowerCase()}`)
    .digest("hex");

  const existingHash = recentMessageHashes.get(contentHash);
  if (existingHash && now - existingHash.timestamp < HASH_TTL_MS) {
    console.info(`[BotDefense] Duplicate message hash detected from ${clientIp}`);
    return {
      isAllowed: false,
      isBlackholed: true,
      internalReason: "Duplicate message loop detected",
    };
  }

  // -------------------------------------------------------------
  // LAYER 4: DNS MX Record Email Verification
  // -------------------------------------------------------------
  const isMxValid = await verifyEmailDomainMx(email);
  if (!isMxValid) {
    return {
      isAllowed: false,
      isBlackholed: false,
      statusCode: 400,
      errorMessage: "Please provide an email address with a valid domain that can receive mail.",
      internalReason: `Invalid email domain or no MX records for ${email}`,
    };
  }

  // -------------------------------------------------------------
  // LAYER 5: IP Rate Limiting (Sliding Window)
  // -------------------------------------------------------------
  let rateRecord = rateLimitStore.get(clientIp);
  if (!rateRecord || now - rateRecord.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateRecord = { count: 1, windowStart: now };
    rateLimitStore.set(clientIp, rateRecord);
  } else {
    rateRecord.count += 1;
    if (rateRecord.count > RATE_LIMIT_MAX_REQUESTS) {
      recordBotStrike(clientIp, "Rate limit exceeded (>3 req/min)");
      return {
        isAllowed: false,
        isBlackholed: false,
        statusCode: 429,
        errorMessage: "Too many requests. Please wait a moment before sending another message.",
        internalReason: `Rate limit hit: ${rateRecord.count} requests in window`,
      };
    }
  }

  // Record this message hash to prevent instant duplicates
  recentMessageHashes.set(contentHash, { timestamp: now, ip: clientIp });

  // All checks passed cleanly!
  return {
    isAllowed: true,
    isBlackholed: false,
  };
}
