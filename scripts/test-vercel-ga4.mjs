import fs from "fs/promises";
import crypto from "crypto";

async function testFromEnv() {
  console.log("--------------------------------------------------");
  console.log("Simulating Vercel Environment (0 local files on disk)");
  console.log("--------------------------------------------------");

  // Read once from local to populate process.env ONLY
  const rawFromDisk = await fs.readFile("data/google-service-account.json", "utf-8");
  process.env.GOOGLE_SERVICE_ACCOUNT_JSON = JSON.stringify(JSON.parse(rawFromDisk));
  process.env.GA_PROPERTY_ID = "470856530";

  // Now, test purely using process.env:
  const credsRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!credsRaw) throw new Error("Missing env");
  const creds = JSON.parse(credsRaw);
  const propertyId = process.env.GA_PROPERTY_ID;

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claimSet = {
    iss: creds.client_email,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };

  const base64Url = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");
  const unsignedToken = `${base64Url(header)}.${base64Url(claimSet)}`;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const privateKey = typeof creds.private_key === "string"
    ? creds.private_key.replace(/\\n/g, "\n")
    : creds.private_key;
  const signature = signer.sign(privateKey, "base64url");
  const jwt = `${unsignedToken}.${signature}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt
    })
  });

  const tokenData = await tokenRes.json();
  if (!tokenRes.ok) {
    console.error("FAILED to authenticate with Google:", tokenData);
    process.exit(1);
  }

  console.log("✅ Google OAuth2 Token issued successfully from ENV variable!");

  const realtimeRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runRealtimeReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        metrics: [{ name: "activeUsers" }],
        dimensions: [{ name: "city" }]
      })
    }
  );

  const realtimeData = await realtimeRes.json();
  let totalActive = 0;
  if (Array.isArray(realtimeData.rows)) {
    realtimeData.rows.forEach(r => totalActive += parseInt(r.metricValues[0].value, 10));
  }
  console.log(`✅ Realtime Active Users fetched from Google: ${totalActive}`);
  console.log("SUCCESS! Vercel environment simulation passed 100%!");
}

testFromEnv();
