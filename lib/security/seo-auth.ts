import crypto from "node:crypto";

const AUTH_COOKIE_NAME = "rhd_seo_auth_session";

// Secret key for HMAC token signing (falls back safely or uses env)
const SECRET_KEY = (process.env.SEO_AUTH_SECRET || process.env.SMTP_PASSWORD || "rhd-auth-secure-seed-acn1931").trim();

// Retrieve configured PIN strictly from environment variable
function getMasterPin(): string {
  const pin = process.env.SEO_DASHBOARD_PIN?.trim();
  if (!pin) {
    console.warn("[SECURITY ALERT] SEO_DASHBOARD_PIN environment variable is not defined. Authentication is locked.");
    return "";
  }
  return pin;
}

// -------------------------------------------------------------
// Rate Limiting & Anti-Brute-Force Engine
// -------------------------------------------------------------
interface RateLimitRecord {
  attempts: number;
  lockedUntil: number;
  lastAttemptAt: number;
}

const ipRateLimitStore = new Map<string, RateLimitRecord>();
const MAX_IP_ATTEMPTS = 5;
const IP_LOCKOUT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

// Global Circuit Breaker: Prevents distributed botnet IP-spoofing attacks
let globalFailedAttempts = 0;
let globalLockedUntil = 0;
const MAX_GLOBAL_FAILURES = 15;
const GLOBAL_LOCKOUT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

// Periodic garbage collection for in-memory IP store (prevents memory bloat)
function cleanupExpiredRecords(now: number) {
  if (ipRateLimitStore.size > 200) {
    ipRateLimitStore.forEach((record, ip) => {
      if (record.lockedUntil < now && now - record.lastAttemptAt > 60 * 60 * 1000) {
        ipRateLimitStore.delete(ip);
      }
    });
  }
}

export function checkPinRateLimit(ip: string): { 
  allowed: boolean; 
  remainingAttempts: number; 
  retryAfterMin?: number;
  isGlobalLock?: boolean;
} {
  const now = Date.now();
  cleanupExpiredRecords(now);

  // 1. Check Global Circuit Breaker first
  if (globalLockedUntil > now) {
    const retryAfterMin = Math.ceil((globalLockedUntil - now) / 60000);
    return { allowed: false, remainingAttempts: 0, retryAfterMin, isGlobalLock: true };
  } else if (globalLockedUntil <= now && globalFailedAttempts >= MAX_GLOBAL_FAILURES) {
    globalFailedAttempts = 0;
    globalLockedUntil = 0;
  }

  // 2. Check IP-specific rate limit
  const record = ipRateLimitStore.get(ip);
  if (!record) {
    return { allowed: true, remainingAttempts: MAX_IP_ATTEMPTS };
  }

  if (record.lockedUntil > now) {
    const retryAfterMin = Math.ceil((record.lockedUntil - now) / 60000);
    return { allowed: false, remainingAttempts: 0, retryAfterMin };
  }

  // Reset if lockout window has passed
  if (record.lockedUntil <= now && record.attempts >= MAX_IP_ATTEMPTS) {
    ipRateLimitStore.delete(ip);
    return { allowed: true, remainingAttempts: MAX_IP_ATTEMPTS };
  }

  return { allowed: true, remainingAttempts: Math.max(0, MAX_IP_ATTEMPTS - record.attempts) };
}

export function recordFailedPinAttempt(ip: string): { 
  remainingAttempts: number; 
  isLocked: boolean; 
  retryAfterMin?: number;
} {
  const now = Date.now();

  // Increment global failure count
  globalFailedAttempts += 1;
  if (globalFailedAttempts >= MAX_GLOBAL_FAILURES) {
    globalLockedUntil = now + GLOBAL_LOCKOUT_WINDOW_MS;
  }

  // Increment IP failure count
  const record = ipRateLimitStore.get(ip) || { attempts: 0, lockedUntil: 0, lastAttemptAt: now };
  record.attempts += 1;
  record.lastAttemptAt = now;

  if (record.attempts >= MAX_IP_ATTEMPTS) {
    record.lockedUntil = now + IP_LOCKOUT_WINDOW_MS;
    ipRateLimitStore.set(ip, record);
    return { remainingAttempts: 0, isLocked: true, retryAfterMin: 15 };
  }

  ipRateLimitStore.set(ip, record);
  return { remainingAttempts: MAX_IP_ATTEMPTS - record.attempts, isLocked: false };
}

export function resetPinRateLimit(ip: string): void {
  ipRateLimitStore.delete(ip);
  // Reset global counter on successful authorized access
  globalFailedAttempts = Math.max(0, globalFailedAttempts - 1);
}

// -------------------------------------------------------------
// Constant-Time Cryptographic Verification
// -------------------------------------------------------------
export async function verifyMasterPinSecure(candidatePin: string): Promise<boolean> {
  const masterPin = getMasterPin();
  
  // Fail-closed: If environment PIN is not configured, deny all access
  if (!masterPin) {
    return false;
  }

  // Strict input validation: PIN must be between 6 and 64 characters
  if (
    typeof candidatePin !== "string" || 
    candidatePin.length < 6 || 
    candidatePin.length > 64
  ) {
    // Artificial delay to prevent timing discrimination on invalid length
    await new Promise((r) => setTimeout(r, 600));
    return false;
  }

  const candidateBuf = Buffer.from(candidatePin.trim());
  const masterBuf = Buffer.from(masterPin);

  // Equalize buffer lengths to prevent timing attacks via buffer length discrepancy
  if (candidateBuf.length !== masterBuf.length) {
    // Perform dummy comparison against master to consume identical clock cycles
    crypto.timingSafeEqual(masterBuf, masterBuf);
    await new Promise((r) => setTimeout(r, 600));
    return false;
  }

  const isMatch = crypto.timingSafeEqual(candidateBuf, masterBuf);
  if (!isMatch) {
    // Artificial delay on incorrect PIN to starve brute-force scanners
    await new Promise((r) => setTimeout(r, 600));
  }

  return isMatch;
}

// -------------------------------------------------------------
// HMAC-SHA256 Session Token Engine
// -------------------------------------------------------------
export function generateSeoAuthToken(): string {
  const timestamp = Date.now();
  const randomSalt = crypto.randomBytes(16).toString("hex");
  const payload = `rhd_admin_authenticated:${timestamp}:${randomSalt}`;
  const hmac = crypto.createHmac("sha256", SECRET_KEY).update(payload).digest("hex");
  return `${timestamp}.${randomSalt}.${hmac}`;
}

export function verifySeoAuthToken(token: string | null | undefined): boolean {
  if (!token || typeof token !== "string") return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [timestampStr, randomSalt, providedHmac] = parts;
  const timestamp = parseInt(timestampStr, 10);

  if (isNaN(timestamp)) return false;

  // Expire session strictly after 7 days
  const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
  if (Date.now() - timestamp > SEVEN_DAYS_MS) {
    return false;
  }

  // Clock skew protection (reject future tokens > 5 minutes in future)
  if (timestamp > Date.now() + 5 * 60 * 1000) {
    return false;
  }

  const payload = `rhd_admin_authenticated:${timestamp}:${randomSalt}`;
  const expectedHmac = crypto.createHmac("sha256", SECRET_KEY).update(payload).digest("hex");

  const providedBuf = Buffer.from(providedHmac);
  const expectedBuf = Buffer.from(expectedHmac);

  if (providedBuf.length !== expectedBuf.length) return false;
  return crypto.timingSafeEqual(providedBuf, expectedBuf);
}

export { AUTH_COOKIE_NAME };
