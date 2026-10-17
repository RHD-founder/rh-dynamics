import fs from "fs";
import crypto from "crypto";

const TARGET_URLS = [
  "https://rhdynamics.in/",
  "https://rhdynamics.in/software-company-guwahati",
  "https://rhdynamics.in/hospital-management-software-assam",
  "https://rhdynamics.in/pathology-lab-software-assam",
  "https://rhdynamics.in/clinic-management-software-guwahati",
  "https://rhdynamics.in/custom-erp-software-assam",
  "https://rhdynamics.in/mobile-app-development-guwahati",
  "https://rhdynamics.in/web-development-guwahati",
  "https://rhdynamics.in/offshore-software-development",
  "https://rhdynamics.in/services",
  "https://rhdynamics.in/hsms",
  "https://rhdynamics.in/custom-software",
  "https://rhdynamics.in/projects",
  "https://rhdynamics.in/projects/healthcare",
  "https://rhdynamics.in/projects/education",
  "https://rhdynamics.in/projects/e-commerce",
  "https://rhdynamics.in/about",
  "https://rhdynamics.in/contact",
  "https://rhdynamics.in/blog",
  "https://rhdynamics.in/blog/pathology-analyzer-interfacing-guide-assam",
  "https://rhdynamics.in/blog/abdm-m1-m2-m3-compliance-checklist-hospitals",
  "https://rhdynamics.in/blog/custom-cloud-erp-vs-tally-assam-wholesalers",
  "https://rhdynamics.in/blog/building-offline-first-mobile-apps-flutter",
  "https://rhdynamics.in/company-policy",
  "https://rhdynamics.in/terms-and-conditions",
  "https://rhdynamics.in/privacy-policy",
  "https://rhdynamics.in/privacy-policy-pdf-app",
  "https://rhdynamics.in/cancellation-and-refunds",
  "https://rhdynamics.in/shipping-policy"
];

async function getAccessToken(creds, scope) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claimSet = {
    iss: creds.client_email,
    scope: scope,
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
    throw new Error("OAuth token error: " + JSON.stringify(data));
  }
  return data.access_token;
}

async function main() {
  console.log("=== RH Dynamics Google Indexing Fast-Track Dispatcher ===");
  const creds = JSON.parse(fs.readFileSync("data/google-service-account.json", "utf8"));
  console.log("Service Account:", creds.client_email);

  let token;
  try {
    token = await getAccessToken(creds, "https://www.googleapis.com/auth/indexing");
    console.log("Acquired Indexing OAuth token successfully.");
  } catch (err) {
    console.error("Failed to authenticate for Google Indexing API:", err.message);
    return;
  }

  const results = [];
  console.log(`Submitting ${TARGET_URLS.length} URLs to Google Indexing API...`);

  for (let i = 0; i < TARGET_URLS.length; i++) {
    const url = TARGET_URLS[i];
    try {
      const response = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: url,
          type: "URL_UPDATED"
        })
      });

      const resData = await response.json();
      const status = response.ok ? "SUBMITTED" : `FAILED_${response.status}`;
      results.push({
        url,
        status,
        statusCode: response.status,
        timestamp: new Date().toISOString(),
        response: resData
      });

      console.log(`[${i + 1}/${TARGET_URLS.length}] ${status}: ${url}`);
    } catch (err) {
      results.push({
        url,
        status: "ERROR",
        error: err.message,
        timestamp: new Date().toISOString()
      });
      console.error(`[${i + 1}/${TARGET_URLS.length}] ERROR on ${url}:`, err.message);
    }

    // Sleep 150ms to respect Google quota
    await new Promise((r) => setTimeout(r, 150));
  }

  fs.writeFileSync("data/indexing-log.json", JSON.stringify(results, null, 2), "utf8");
  console.log("Saved indexing log to data/indexing-log.json");
}

main().catch(console.error);
