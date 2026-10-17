import fs from "fs/promises";
import crypto from "crypto";
import path from "path";

export interface GSCQueryItem {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface GSCPageItem {
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface GSCSitemapItem {
  path: string;
  lastSubmitted: string;
  lastDownloaded?: string;
  submitted: number;
  indexed: number;
  errors: number;
  warnings: number;
  isPending: boolean;
}

export interface GSCPayload {
  success: boolean;
  performance: {
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  };
  queries: GSCQueryItem[];
  pages: GSCPageItem[];
  sitemaps: GSCSitemapItem[];
  error?: string;
  lastSynced?: string;
}

let cachedGscToken: { token: string; expiresAt: number } | null = null;

async function getGscOAuthToken(creds: any): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cachedGscToken && cachedGscToken.expiresAt > now + 60) {
    return cachedGscToken.token;
  }

  const header = { alg: "RS256", typ: "JWT" };
  const claimSet = {
    iss: creds.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
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
    throw new Error(data.error_description || "Failed to exchange Google OAuth2 JWT for Search Console");
  }

  cachedGscToken = {
    token: data.access_token,
    expiresAt: now + data.expires_in
  };

  return data.access_token;
}

export async function fetchGSCData(): Promise<GSCPayload> {
  try {
    let credsRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON || process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!credsRaw) {
      try {
        credsRaw = await fs.readFile(path.join(process.cwd(), "data", "google-service-account.json"), "utf-8");
      } catch {
        try {
          credsRaw = await fs.readFile(path.join(process.cwd(), "google-service-account.json"), "utf-8");
        } catch {
          // No local file
        }
      }
    }

    if (!credsRaw) {
      return {
        success: false,
        performance: { clicks: 0, impressions: 0, ctr: 0, position: 0 },
        queries: [],
        pages: [],
        sitemaps: [],
        error: "Google Service Account credentials not configured for Search Console."
      };
    }

    const creds = JSON.parse(credsRaw);
    const token = await getGscOAuthToken(creds);

    let targetSite = "sc-domain:rhdynamics.in";
    try {
      const sitesListRes = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const sitesListData = await sitesListRes.json();
      if (Array.isArray(sitesListData.siteEntry) && sitesListData.siteEntry.length > 0) {
        const found = sitesListData.siteEntry.find((s: any) => s.siteUrl?.includes("rhdynamics.in"));
        if (found?.siteUrl) targetSite = found.siteUrl;
      }
    } catch {}

    const siteUrl = encodeURIComponent(targetSite);
    const today = new Date();
    const past = new Date();
    past.setDate(today.getDate() - 28);
    const formatDate = (d: Date) => d.toISOString().split("T")[0];

    // 1. Overall Aggregates
    const aggPromise = fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${siteUrl}/searchAnalytics/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          startDate: formatDate(past),
          endDate: formatDate(today)
        })
      }
    );

    // 2. Real Queries
    const queriesPromise = fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${siteUrl}/searchAnalytics/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          startDate: formatDate(past),
          endDate: formatDate(today),
          dimensions: ["query"],
          rowLimit: 25
        })
      }
    );

    // 3. Real Landing Pages
    const pagesPromise = fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${siteUrl}/searchAnalytics/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          startDate: formatDate(past),
          endDate: formatDate(today),
          dimensions: ["page"],
          rowLimit: 25
        })
      }
    );

    // 4. Submitted Sitemaps
    const sitemapsPromise = fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${siteUrl}/sitemaps`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const [aggRes, queriesRes, pagesRes, sitemapsRes] = await Promise.all([
      aggPromise,
      queriesPromise,
      pagesPromise,
      sitemapsPromise
    ]);

    const aggData = await aggRes.json();
    const queriesData = await queriesRes.json();
    const pagesData = await pagesRes.json();
    const sitemapsData = await sitemapsRes.json();

    if (!aggRes.ok) {
      return {
        success: false,
        performance: { clicks: 0, impressions: 0, ctr: 0, position: 0 },
        queries: [],
        pages: [],
        sitemaps: [],
        error: aggData?.error?.message || "Google Search Console API returned an error"
      };
    }

    const perfRow = aggData?.rows?.[0] || {};
    const performance = {
      clicks: Math.round(perfRow.clicks || 0),
      impressions: Math.round(perfRow.impressions || 0),
      ctr: Number(((perfRow.ctr || 0) * 100).toFixed(1)),
      position: Number((perfRow.position || 0).toFixed(1))
    };

    const queries: GSCQueryItem[] = (queriesData?.rows || []).map((r: any) => ({
      query: r.keys?.[0] || "unknown",
      clicks: Math.round(r.clicks || 0),
      impressions: Math.round(r.impressions || 0),
      ctr: Number(((r.ctr || 0) * 100).toFixed(1)),
      position: Number((r.position || 0).toFixed(1))
    }));

    const pages: GSCPageItem[] = (pagesData?.rows || []).map((r: any) => ({
      page: r.keys?.[0] || "/",
      clicks: Math.round(r.clicks || 0),
      impressions: Math.round(r.impressions || 0),
      ctr: Number(((r.ctr || 0) * 100).toFixed(1)),
      position: Number((r.position || 0).toFixed(1))
    }));

    const sitemaps: GSCSitemapItem[] = (sitemapsData?.sitemap || []).map((s: any) => {
      const content = s.contents?.[0] || {};
      return {
        path: s.path || "",
        lastSubmitted: s.lastSubmitted || "",
        lastDownloaded: s.lastDownloaded || "",
        submitted: parseInt(content.submitted || "0", 10),
        indexed: parseInt(content.indexed || "0", 10),
        errors: parseInt(s.errors || "0", 10),
        warnings: parseInt(s.warnings || "0", 10),
        isPending: Boolean(s.isPending)
      };
    });

    return {
      success: true,
      performance,
      queries,
      pages,
      sitemaps,
      lastSynced: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true })
    };
  } catch (error: any) {
    return {
      success: false,
      performance: { clicks: 0, impressions: 0, ctr: 0, position: 0 },
      queries: [],
      pages: [],
      sitemaps: [],
      error: error?.message || "Failed to load Google Search Console data"
    };
  }
}
