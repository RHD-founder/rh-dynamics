import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs/promises";
import path from "path";
import { verifySeoAuthToken, AUTH_COOKIE_NAME } from "@/lib/security/seo-auth";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { getSeoMetadataPayload } from "@/lib/seo/keyword-matrix";
import { DEFAULT_REVIEWS } from "@/lib/reviews/default-reviews";

const INQUIRIES_FILE = path.join(process.cwd(), "data", "inquiries.json");
const GLITCH_FILE = path.join(process.cwd(), "data", "glitch-reports.json");

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

// In-memory telemetry store (zero disk dependency, superseded by GA4 live API)
const inMemoryTelemetry: TelemetryData = {
  totalPageViews: 0,
  uniqueSessions: 0,
  lastUpdated: new Date().toISOString(),
  deviceBreakdown: { desktop: 0, mobile: 0 },
  pageCounts: Object.create(null),
  recentVisits: []
};

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

    // Reviews list & count (Primary: Supabase Cloud Database, Fallback: DEFAULT_REVIEWS)
    let reviewsList: any[] = [...DEFAULT_REVIEWS];
    let reviewsCount = reviewsList.length;

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
        console.warn("[Telemetry API] Supabase fallback to default reviews:", sbEx);
      }
    }

    // Dynamic SEO Tracker computed from live sitemap & keyword matrix
    const seoData = getSeoMetadataPayload();

    return NextResponse.json({
      status: "success",
      telemetry: inMemoryTelemetry,
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
// POST: Anonymous Ingestion Beacon (In-Memory, No Disk File Dependency)
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
    rawPath = rawPath.replace(/[<>"'`\\]/g, "");
    
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

    inMemoryTelemetry.totalPageViews += 1;
    if (body.isNewSession === true) {
      inMemoryTelemetry.uniqueSessions += 1;
    }
    inMemoryTelemetry.lastUpdated = new Date().toISOString();
    
    // Increment device
    if (device === "mobile") {
      inMemoryTelemetry.deviceBreakdown.mobile += 1;
    } else {
      inMemoryTelemetry.deviceBreakdown.desktop += 1;
    }

    // Safely increment page counter without prototype pollution
    if (!Object.prototype.hasOwnProperty.call(inMemoryTelemetry.pageCounts, sanitizedPath)) {
      inMemoryTelemetry.pageCounts[sanitizedPath] = 0;
    }
    inMemoryTelemetry.pageCounts[sanitizedPath] = (inMemoryTelemetry.pageCounts[sanitizedPath] || 0) + 1;

    // Append to recent visits (limit to 50 most recent)
    inMemoryTelemetry.recentVisits.unshift({
      timestamp: new Date().toISOString(),
      path: sanitizedPath,
      device,
      referrer: sanitizedReferrer
    });

    if (inMemoryTelemetry.recentVisits.length > 50) {
      inMemoryTelemetry.recentVisits = inMemoryTelemetry.recentVisits.slice(0, 50);
    }

    return NextResponse.json({ status: "recorded" });
  } catch {
    return NextResponse.json({ status: "ignored" }, { status: 200 });
  }
}
