import fs from "fs";
import crypto from "crypto";

async function run() {
  const creds = JSON.parse(fs.readFileSync("data/google-service-account.json", "utf8"));
  console.log("Service account email:", creds.client_email);

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claimSet = {
    iss: creds.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };

  const base64Url = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");
  const unsignedToken = base64Url(header) + "." + base64Url(claimSet);
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const signature = signer.sign(creds.private_key, "base64url");
  const jwt = unsignedToken + "." + signature;

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
    console.error("Auth error:", data);
    return;
  }
  const token = data.access_token;
  console.log("Authenticated successfully with Google Search Console!");

  // List verified sites
  const sitesRes = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
    headers: { Authorization: "Bearer " + token }
  });
  const sites = await sitesRes.json();
  console.log("=== Verified Sites in GSC ===");
  console.log(JSON.stringify(sites, null, 2));

  const targetSite = encodeURIComponent("sc-domain:rhdynamics.in");
  const today = new Date().toISOString().split("T")[0];
  const pastDate = new Date(Date.now() - 30 * 86400000).toISOString().split("T")[0];

  // Fetch sitemaps
  const sitemapsRes = await fetch("https://www.googleapis.com/webmasters/v3/sites/" + targetSite + "/sitemaps", {
    headers: { Authorization: "Bearer " + token }
  });
  const sitemaps = await sitemapsRes.json();
  console.log("=== Sitemaps Status ===");
  console.log(JSON.stringify(sitemaps, null, 2));

  // Overall totals
  const totalRes = await fetch("https://www.googleapis.com/webmasters/v3/sites/" + targetSite + "/searchAnalytics/query", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify({
      startDate: pastDate,
      endDate: today
    })
  });
  const total = await totalRes.json();
  console.log("=== 30-Day Total Performance ===");
  console.log(JSON.stringify(total, null, 2));

  // Fetch pages
  const pagesRes = await fetch("https://www.googleapis.com/webmasters/v3/sites/" + targetSite + "/searchAnalytics/query", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify({
      startDate: pastDate,
      endDate: today,
      dimensions: ["page"],
      rowLimit: 50
    })
  });
  const pages = await pagesRes.json();
  console.log("=== Ranked Pages in GSC ===");
  console.log(JSON.stringify(pages, null, 2));

  // Fetch queries
  const queriesRes = await fetch("https://www.googleapis.com/webmasters/v3/sites/" + targetSite + "/searchAnalytics/query", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify({
      startDate: pastDate,
      endDate: today,
      dimensions: ["query"],
      rowLimit: 50
    })
  });
  const queries = await queriesRes.json();
  console.log("=== Ranked Queries in GSC ===");
  console.log(JSON.stringify(queries, null, 2));
}

run().catch(console.error);
