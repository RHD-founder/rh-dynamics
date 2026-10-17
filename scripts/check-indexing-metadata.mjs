import fs from "fs";
import crypto from "crypto";

async function checkMetadata(urls) {
  const creds = JSON.parse(fs.readFileSync("data/google-service-account.json", "utf8"));
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claimSet = {
    iss: creds.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
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

  console.log("=== Google Indexing Notification Receipts ===");
  for (const url of urls) {
    const metaRes = await fetch(`https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${encodeURIComponent(url)}`, {
      headers: { Authorization: "Bearer " + token }
    });
    const metaData = await metaRes.json();
    console.log(`URL: ${url}`);
    console.log(JSON.stringify(metaData, null, 2));
    console.log("-----------------------------------------");
  }
}

checkMetadata([
  "https://rhdynamics.in/",
  "https://rhdynamics.in/offshore-software-development",
  "https://rhdynamics.in/software-company-guwahati",
  "https://rhdynamics.in/hospital-management-software-assam"
]).catch(console.error);
