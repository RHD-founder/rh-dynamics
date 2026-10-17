import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs/promises";
import path from "path";
import { verifySeoAuthToken, AUTH_COOKIE_NAME } from "@/lib/security/seo-auth";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import sitemap from "@/app/sitemap";

const TELEMETRY_FILE = path.join(process.cwd(), "data", "visitor-telemetry.json");
const INQUIRIES_FILE = path.join(process.cwd(), "data", "inquiries.json");
const GLITCH_FILE = path.join(process.cwd(), "data", "glitch-reports.json");
const REVIEWS_FILE = path.join(process.cwd(), "data", "testimonials.json");
const SEO_TRACKER_FILE = path.join(process.cwd(), "data", "seo-master-tracker.json");

interface TelemetryData {
  totalPageViews: number;
  uniqueSessions: number;
  lastUpdated: string;
  deviceBreakdown: {
    desktop: number;
    mobile: number;
  };
  pageCounts: Record<string, number>;
  recentVisits: Array<{
    timestamp: string;
    path: string;
    device: string;
    referrer: string;
  }>;
}

// In-memory rate limiter for telemetry ingestion (max 30 requests per minute per IP)
const telemetryRateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkTelemetryRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = telemetryRateLimitMap.get(ip);

  if (!record || record.resetAt <= now) {
    telemetryRateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 1000 });
    return true;
  }

  if (record.count >= 30) {
    return false;
  }

  record.count += 1;
  return true;
}

async function getTelemetryData(): Promise<TelemetryData> {
  try {
    const raw = await fs.readFile(TELEMETRY_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {
      totalPageViews: 0,
      uniqueSessions: 0,
      lastUpdated: new Date().toISOString(),
      deviceBreakdown: { desktop: 0, mobile: 0 },
      pageCounts: Object.create(null),
      recentVisits: []
    };
  }
}

// -------------------------------------------------------------
// GET: Protected Intelligence Endpoint (Requires Authenticated PIN Session)
// -------------------------------------------------------------
export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(AUTH_COOKIE_NAME)?.value;
    const isAuthenticated = verifySeoAuthToken(sessionToken);

    if (!isAuthenticated) {
      return NextResponse.json(
        { 
          status: "unauthorized", 
          authenticated: false, 
          message: "Master Security PIN authentication required to access intelligence data." 
        },
        { status: 401 }
      );
    }

    const telemetry = await getTelemetryData();

    // Count inquiries
    let inquiriesCount = 0;
    try {
      const rawInquiries = await fs.readFile(INQUIRIES_FILE, "utf-8");
      const inq = JSON.parse(rawInquiries);
      inquiriesCount = Array.isArray(inq) ? inq.length : 0;
    } catch {}

    // Count glitch incidents
    let glitchCount = 0;
    let recentGlitches: any[] = [];
    try {
      const rawGlitches = await fs.readFile(GLITCH_FILE, "utf-8");
      recentGlitches = JSON.parse(rawGlitches);
      glitchCount = Array.isArray(recentGlitches) ? recentGlitches.length : 0;
    } catch {}

    // Load reviews list & count
    let reviewsCount = 0;
    let reviewsList: any[] = [];
    try {
      const rawReviews = await fs.readFile(REVIEWS_FILE, "utf-8");
      const rev = JSON.parse(rawReviews);
      reviewsList = Array.isArray(rev) ? rev : [];
      reviewsCount = reviewsList.length;
    } catch {}

    // Cloud Database Hydration (Supabase)
    const supabase = getSupabaseAdmin();
    if (supabase) {
      try {
        const { data: sbReviews, count: revCount } = await supabase
          .from("reviews")
          .select("*", { count: "exact" })
          .order("date", { ascending: false });

        if (Array.isArray(sbReviews) && sbReviews.length > 0) {
          reviewsList = sbReviews;
          reviewsCount = revCount ?? sbReviews.length;
        }

        const { count: inqCount } = await supabase
          .from("inquiries")
          .select("*", { count: "exact", head: true });

        if (typeof inqCount === "number" && inqCount > 0) {
          inquiriesCount = inqCount;
        }
      } catch (sbEx) {
        console.warn("[Telemetry API] Supabase fallback to local:", sbEx);
      }
    }

    // Load master SEO tracker
    let seoData: any = null;
    try {
      const rawSeo = await fs.readFile(SEO_TRACKER_FILE, "utf-8");
      seoData = JSON.parse(rawSeo);
      const sitemapUrls = sitemap();
      if (seoData && seoData.stats) {
        seoData.stats.totalPagesIndexed = sitemapUrls.length;
        if (Array.isArray(seoData.pages)) {
          seoData.stats.totalKeywordsTracked = seoData.pages.reduce(
            (acc: number, p: any) => acc + (p.primaryKeyword ? 1 : 0) + (p.secondaryKeywords?.length || 0),
            0
          );
        }
      }
    } catch {}

    return NextResponse.json({
      status: "success",
      telemetry,
      stats: {
        inquiriesCount,
        glitchCount,
        reviewsCount,
        emailDeliveryStatus: "Brevo SMTP Verified Active (founder@rhdynamics.in)"
      },
      reviews: reviewsList,
      recentGlitches: recentGlitches.slice(-5).reverse(),
      seo: seoData
    });
  } catch {
    return NextResponse.json(
      { status: "error", message: "Failed to fetch telemetry metrics" },
      { status: 500 }
    );
  }
}

// -------------------------------------------------------------
// POST: Anonymous Ingestion Beacon (Strictly Sanitized & Rate-Limited)
// -------------------------------------------------------------
const FORBIDDEN_PROPERTY_KEYS = new Set(["__proto__", "constructor", "prototype", "toString", "valueOf"]);

export async function POST(request: Request) {
  // Reject oversized payloads (> 2KB)
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > 2048) {
    return NextResponse.json({ status: "ignored" }, { status: 413 });
  }

  // Rate limit check
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || "127.0.0.1";

  if (!checkTelemetryRateLimit(clientIp)) {
    return NextResponse.json({ status: "rate_limited" }, { status: 429 });
  }

  try {
    const body = await request.json().catch(() => ({}));

    // 1. Sanitize Path (prevent Prototype Pollution, XSS, and Path Traversal)
    let rawPath = typeof body.path === "string" ? body.path.trim().slice(0, 100) : "/";
    // Strip HTML tags and dangerous characters
    rawPath = rawPath.replace(/[<>"'`\\]/g, "");
    
    // Validate path structure: must start with / and only contain standard URL characters
    const isValidPath = /^\/[a-zA-Z0-9\-_./]*$/.test(rawPath);
    const sanitizedPath = (isValidPath && !FORBIDDEN_PROPERTY_KEYS.has(rawPath)) ? rawPath : "/";

    // 2. Validate Device
    const device = body.device === "mobile" ? "mobile" : "desktop";

    // 3. Sanitize Referrer
    let rawReferrer = typeof body.referrer === "string" ? body.referrer.trim().slice(0, 120) : "direct";
    rawReferrer = rawReferrer.replace(/[<>"'`\\]/g, "");
    const sanitizedReferrer = (rawReferrer.startsWith("http://") || rawReferrer.startsWith("https://") || rawReferrer === "direct")
      ? rawReferrer
      : "direct";

    const current = await getTelemetryData();
    
    current.totalPageViews += 1;
    if (body.isNewSession === true) {
      current.uniqueSessions += 1;
    }
    current.lastUpdated = new Date().toISOString();
    
    // Increment device
    if (device === "mobile") {
      current.deviceBreakdown.mobile += 1;
    } else {
      current.deviceBreakdown.desktop += 1;
    }

    // Safely increment page counter without prototype pollution
    if (!Object.prototype.hasOwnProperty.call(current.pageCounts, sanitizedPath)) {
      current.pageCounts[sanitizedPath] = 0;
    }
    current.pageCounts[sanitizedPath] = (current.pageCounts[sanitizedPath] || 0) + 1;

    // Append to recent visits (limit to 50 most recent)
    current.recentVisits.unshift({
      timestamp: new Date().toISOString(),
      path: sanitizedPath,
      device,
      referrer: sanitizedReferrer
    });

    if (current.recentVisits.length > 50) {
      current.recentVisits = current.recentVisits.slice(0, 50);
    }

    await fs.writeFile(TELEMETRY_FILE, JSON.stringify(current, null, 2), "utf-8");

    return NextResponse.json({ status: "recorded" });
  } catch {
    return NextResponse.json({ status: "ignored" }, { status: 200 });
  }
}
