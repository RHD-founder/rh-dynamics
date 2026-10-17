import readline from "readline";
import fs from "fs/promises";
import crypto from "crypto";
import path from "path";

const PROPERTY_ID = process.env.GA_PROPERTY_ID || "470856530";
const CREDS_PATH = path.join(process.cwd(), "data", "google-service-account.json");

let cachedToken = null;

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && cachedToken.expiresAt > now + 60) {
    return cachedToken.token;
  }

  let credsRaw;
  try {
    credsRaw = await fs.readFile(path.join(process.cwd(), "data", "google-service-account.json"), "utf-8");
  } catch {
    credsRaw = await fs.readFile(path.join(process.cwd(), "google-service-account.json"), "utf-8");
  }
  const creds = JSON.parse(credsRaw);

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
    throw new Error(data.error_description || "OAuth2 Token exchange failed");
  }

  cachedToken = {
    token: data.access_token,
    expiresAt: now + data.expires_in
  };

  return data.access_token;
}

async function runRealtimeQuery() {
  const token = await getAccessToken();
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runRealtimeReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        metrics: [{ name: "activeUsers" }],
        dimensions: [{ name: "city" }, { name: "unifiedScreenName" }]
      })
    }
  );

  return await res.json();
}

async function runHistoricalReport(startDate = "30daysAgo", endDate = "today") {
  const token = await getAccessToken();
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: "activeUsers" },
          { name: "screenPageViews" },
          { name: "sessions" }
        ],
        dimensions: [{ name: "pageTitle" }]
      })
    }
  );

  return await res.json();
}

// MCP JSON-RPC Server
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

function sendResponse(id, result) {
  process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, result }) + "\n");
}

function sendError(id, code, message) {
  process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } }) + "\n");
}

rl.on("line", async (line) => {
  if (!line.trim()) return;
  try {
    const msg = JSON.parse(line);
    const { id, method, params } = msg;

    if (method === "initialize") {
      sendResponse(id, {
        protocolVersion: "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: { name: "rhd-google-analytics-mcp", version: "1.0.0" }
      });
    } else if (method === "notifications/initialized") {
      // no response needed
    } else if (method === "tools/list") {
      sendResponse(id, {
        tools: [
          {
            name: "ga4_realtime_traffic",
            description: "Fetches live active visitors on rhdynamics.in within the last 30 minutes, broken down by city and page.",
            inputSchema: { type: "object", properties: {} }
          },
          {
            name: "ga4_30day_report",
            description: "Fetches 30-day website visitors, total page views, and sessions recorded by Google Analytics.",
            inputSchema: {
              type: "object",
              properties: {
                startDate: { type: "string", description: "Start date (e.g. '30daysAgo', '7daysAgo', '2026-10-01')" },
                endDate: { type: "string", description: "End date (e.g. 'today')" }
              }
            }
          }
        ]
      });
    } else if (method === "tools/call") {
      const toolName = params?.name;
      if (toolName === "ga4_realtime_traffic") {
        const data = await runRealtimeQuery();
        sendResponse(id, {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }]
        });
      } else if (toolName === "ga4_30day_report") {
        const startDate = params?.arguments?.startDate || "30daysAgo";
        const endDate = params?.arguments?.endDate || "today";
        const data = await runHistoricalReport(startDate, endDate);
        sendResponse(id, {
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }]
        });
      } else {
        sendError(id, -32601, `Unknown tool: ${toolName}`);
      }
    } else {
      sendError(id, -32601, `Method not supported: ${method}`);
    }
  } catch (err) {
    // ignore or log
  }
});
