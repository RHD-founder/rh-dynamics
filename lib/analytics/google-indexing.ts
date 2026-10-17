import fs from "fs";
import path from "path";
import crypto from "crypto";

export const TARGET_CORE_URLS = [
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

interface GoogleCredentials {
  client_email: string;
  private_key: string;
}

function getCredentials(): GoogleCredentials | null {
  const filePath = path.join(process.cwd(), "data", "google-service-account.json");
  if (!fs.existsSync(filePath)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

async function getIndexingToken(creds: GoogleCredentials): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claimSet = {
    iss: creds.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };

  const base64Url = (obj: Record<string, unknown>) => Buffer.from(JSON.stringify(obj)).toString("base64url");
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
    throw new Error(data.error_description || "Failed to generate Indexing OAuth token");
  }
  return data.access_token;
}

export async function submitIndexingNotification(url: string, type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED") {
  const creds = getCredentials();
  if (!creds) {
    return { success: false, url, error: "Missing Google Service Account credentials" };
  }

  const token = await getIndexingToken(creds);
  const response = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url, type })
  });

  const data = await response.json();
  return {
    success: response.ok,
    statusCode: response.status,
    url,
    data
  };
}

export async function dispatchAllCoreIndexing() {
  const results = [];
  for (const url of TARGET_CORE_URLS) {
    try {
      const res = await submitIndexingNotification(url);
      results.push(res);
    } catch (err: unknown) {
      results.push({
        success: false,
        url,
        error: err instanceof Error ? err.message : "Submission error"
      });
    }
  }

  // Update audit log
  try {
    const logPath = path.join(process.cwd(), "data", "indexing-log.json");
    fs.writeFileSync(logPath, JSON.stringify(results, null, 2), "utf8");
  } catch (logErr) {
    console.error("Failed to update indexing-log.json:", logErr);
  }

  return results;
}
