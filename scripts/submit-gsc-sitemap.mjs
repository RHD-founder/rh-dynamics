import fs from "fs";
import crypto from "crypto";

async function submitSitemapGSC() {
  const creds = JSON.parse(fs.readFileSync("data/google-service-account.json", "utf8"));
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claimSet = {
    iss: creds.client_email,
    scope: "https://www.googleapis.com/auth/webmasters",
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
  const token = data.access_token;

  const targetSite = encodeURIComponent("sc-domain:rhdynamics.in");
  const sitemapUrl = encodeURIComponent("https://rhdynamics.in/sitemap.xml");

  console.log("Submitting sitemap to Google Search Console via API...");
  const putRes = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${targetSite}/sitemaps/${sitemapUrl}`, {
    method: "PUT",
    headers: { Authorization: "Bearer " + token }
  });

  console.log("GSC Sitemap Submit HTTP Status:", putRes.status, putRes.statusText);

  // Check current sitemaps status
  const listRes = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${targetSite}/sitemaps`, {
    headers: { Authorization: "Bearer " + token }
  });
  const listData = await listRes.json();
  console.log("=== Current Sitemaps in GSC ===");
  console.log(JSON.stringify(listData, null, 2));
}

submitSitemapGSC().catch(console.error);
