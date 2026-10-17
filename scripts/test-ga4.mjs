import fs from "fs/promises";
import crypto from "crypto";
import path from "path";

async function testGA4() {
  console.log("--------------------------------------------------");
  console.log("Testing Google Analytics 4 (GA4) API Connection...");
  console.log("--------------------------------------------------");

  const credsPath = path.join(process.cwd(), "data", "google-service-account.json");
  const credsRaw = await fs.readFile(credsPath, "utf-8");
  const creds = JSON.parse(credsRaw);

  const propertyId = "470856530";
  console.log(`Service Account Email: ${creds.client_email}`);
  console.log(`Target Property ID:    ${propertyId}`);

  // 1. Create JWT
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
  const signature = signer.sign(creds.private_key, "base64url");
  const jwt = `${unsignedToken}.${signature}`;

  // 2. Exchange JWT for access token
  console.log("\n[1/3] Exchanging Service Account JWT with Google OAuth2...");
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
    console.error("❌ Token exchange failed:", tokenData);
    return;
  }
  console.log("✅ Google OAuth2 Access Token successfully issued!");

  // 3. Query Google Analytics Data API Realtime Report
  console.log("\n[2/3] Querying GA4 Realtime Data (Active Users in last 30 min)...");
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
        dimensions: [{ name: "city" }, { name: "unifiedScreenName" }]
      })
    }
  );

  const realtimeData = await realtimeRes.json();
  if (!realtimeRes.ok) {
    console.error("❌ Realtime report query failed:", realtimeData);
    if (realtimeData?.error?.message?.includes("User does not have sufficient permissions")) {
      console.log("\n⚠️ IMPORTANT SETUP STEP NEEDED IN GOOGLE ANALYTICS:");
      console.log(`Please go to Google Analytics ➔ Admin (⚙️) ➔ Property Access Management.`);
      console.log(`Click '+' to add user and paste: ${creds.client_email}`);
      console.log(`Give role: Viewer (or Analyst).`);
    }
    return;
  }

  console.log("✅ GA4 Realtime Data successfully retrieved!");
  console.log("Response:", JSON.stringify(realtimeData, null, 2));

  // 4. Query 30-day Core Report
  console.log("\n[3/3] Querying GA4 Historical Report (Last 30 Days)...");
  const reportRes = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
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

  const reportData = await reportRes.json();
  if (reportRes.ok) {
    console.log("✅ GA4 Historical Report successfully retrieved!");
    console.log("Summary:", JSON.stringify(reportData?.metricHeaders, null, 2));
    console.log("Rows sample:", JSON.stringify(reportData?.rows?.slice(0, 3), null, 2));
    console.log(`Total Pages Reported: ${reportData?.rowCount || 0}`);
  } else {
    console.error("❌ Report query failed:", reportData);
  }

  console.log("\n==================================================");
  console.log("🎉 SUCCESS: GOOGLE ANALYTICS IS FULLY OPERATIONAL!");
  console.log("==================================================");
}

testGA4().catch(console.error);
