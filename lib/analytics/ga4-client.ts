import fs from "fs/promises";
import crypto from "crypto";
import path from "path";

export interface GA4AnalyticsPayload {
  success: boolean;
  activeUsers: number;
  cities: Array<{ city: string; activeUsers: number }>;
  pages: Array<{ pageTitle: string; activeUsers: number }>;
  historical30Days?: {
    activeUsers: number;
    screenPageViews: number;
    sessions: number;
  };
  error?: string;
}

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getGoogleOAuthToken(creds: any): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && cachedToken.expiresAt > now + 60) {
    return cachedToken.token;
  }

  const header = { alg: "RS256", typ: "JWT" };
  const claimSet = {
    iss: creds.client_email,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };

  const base64Url = (obj: any) => Buffer.from(JSON.stringify(obj)).toString("base64url");
  const unsignedToken = `${base64Url(header)}.${base64Url(claimSet)}`;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const privateKey = typeof creds.private_key === "string"
    ? creds.private_key.replace(/\\n/g, "\n")
    : creds.private_key;
  const signature = signer.sign(privateKey, "base64url");
  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt
    })
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error_description || "Failed to exchange Google OAuth2 JWT");
  }

  cachedToken = {
    token: data.access_token,
    expiresAt: now + data.expires_in
  };

  return data.access_token;
}

export async function fetchGA4Realtime(): Promise<GA4AnalyticsPayload> {
  const propertyId = process.env.GA_PROPERTY_ID || "470856530";
  try {
    let credsRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON || process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!credsRaw) {
      try {
        credsRaw = await fs.readFile(path.join(process.cwd(), "data", "google-service-account.json"), "utf-8");
      } catch {
        try {
          credsRaw = await fs.readFile(path.join(process.cwd(), "google-service-account.json"), "utf-8");
        } catch {
          // No local file found
        }
      }
    }
    if (!credsRaw) {
      return {
        success: false,
        activeUsers: 0,
        cities: [],
        pages: [],
        error: "Google Service Account credentials not configured."
      };
    }
    const creds = JSON.parse(credsRaw);
    const token = await getGoogleOAuthToken(creds);

    // 1. Fetch Exact Unique Realtime Active Users (matches GA4 Web Dashboard 1-to-1)
    const realtimeTotalPromise = fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runRealtimeReport`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          metrics: [{ name: "activeUsers" }]
        })
      }
    );

    // 2. Fetch Realtime City Breakdown
    const realtimeCitiesPromise = fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runRealtimeReport`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          metrics: [{ name: "activeUsers" }],
          dimensions: [{ name: "city" }]
        })
      }
    );

    // 3. Fetch Realtime Screen Breakdown
    const realtimeScreensPromise = fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runRealtimeReport`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          metrics: [{ name: "activeUsers" }],
          dimensions: [{ name: "unifiedScreenName" }]
        })
      }
    );

    // 4. Fetch 30-Day Totals
    const reportPromise = fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
          metrics: [
            { name: "activeUsers" },
            { name: "screenPageViews" },
            { name: "sessions" }
          ],
          dimensions: [{ name: "pageTitle" }]
        })
      }
    );

    const [totalRes, citiesRes, screensRes, reportRes] = await Promise.all([
      realtimeTotalPromise,
      realtimeCitiesPromise,
      realtimeScreensPromise,
      reportPromise
    ]);

    const totalData = await totalRes.json();
    const citiesData = await citiesRes.json();
    const screensData = await screensRes.json();
    const reportData = await reportRes.json();

    if (!totalRes.ok) {
      return {
        success: false,
        activeUsers: 0,
        cities: [],
        pages: [],
        error: totalData?.error?.message || "Google Analytics Realtime API returned an error"
      };
    }

    // Exact Unique Active Users matching Google Analytics Web UI
    const totalActive = parseInt(totalData.rows?.[0]?.metricValues?.[0]?.value || "0", 10);

    const cities: Array<{ city: string; activeUsers: number }> = [];
    if (Array.isArray(citiesData.rows)) {
      citiesData.rows.forEach((row: any) => {
        const city = row.dimensionValues?.[0]?.value?.trim() || "(not set)";
        const count = parseInt(row.metricValues?.[0]?.value || "0", 10);
        cities.push({ city, activeUsers: count });
      });
    }

    const pages: Array<{ pageTitle: string; activeUsers: number }> = [];
    if (Array.isArray(screensData.rows)) {
      screensData.rows.forEach((row: any) => {
        const pageTitle = row.dimensionValues?.[0]?.value || "/";
        const count = parseInt(row.metricValues?.[0]?.value || "0", 10);
        pages.push({ pageTitle, activeUsers: count });
      });
    }

    let historical30Days = undefined;
    if (reportRes.ok && Array.isArray(reportData.rows)) {
      let totUsers = 0;
      let totViews = 0;
      let totSessions = 0;
      for (const row of reportData.rows) {
        totUsers += parseInt(row.metricValues?.[0]?.value || "0", 10);
        totViews += parseInt(row.metricValues?.[1]?.value || "0", 10);
        totSessions += parseInt(row.metricValues?.[2]?.value || "0", 10);
      }
      historical30Days = {
        activeUsers: totUsers,
        screenPageViews: totViews,
        sessions: totSessions
      };
    }

    return {
      success: true,
      activeUsers: totalActive,
      cities,
      pages,
      historical30Days
    };
  } catch (error: any) {
    return {
      success: false,
      activeUsers: 0,
      cities: [],
      pages: [],
      error: error?.message || "Failed to load GA4 credentials"
    };
  }
}
