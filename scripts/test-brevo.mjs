import nodemailer from "nodemailer";
import fs from "node:fs";
import path from "node:path";

// Load .env.local if present
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
      const [key, ...rest] = trimmed.split("=");
      const val = rest.join("=").trim().replace(/^["']|["']$/g, "");
      if (!process.env[key.trim()]) {
        process.env[key.trim()] = val;
      }
    }
  }
}

const host = process.env.SMTP_HOST || "smtp-relay.brevo.com";
const port = parseInt(process.env.SMTP_PORT || "587", 10);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASSWORD;
const from = process.env.SMTP_FROM || "RH-Dynamics <support@rhdynamics.in>";
const to = process.env.ADMIN_NOTIFICATION_EMAIL || "founder@rhdynamics.in";

console.log("=================================================");
console.log(" BREVO SMTP CONNECTION & DELIVERY DIAGNOSTIC TOOL");
console.log("=================================================");
console.log(`Host:   ${host}:${port}`);
console.log(`User:   ${user ? user.slice(0, 4) + "***" : "(NOT SET)"}`);
console.log(`Pass:   ${pass ? pass.slice(0, 6) + "***" : "(NOT SET)"}`);
console.log(`Sender: ${from}`);
console.log(`Target: ${to}`);
console.log("-------------------------------------------------");

if (!user || !pass) {
  console.error("❌ ERROR: SMTP_USER or SMTP_PASSWORD is not set in .env.local!");
  console.log("\nPlease add your Brevo credentials in .env.local:");
  console.log("  SMTP_USER=your-brevo-login-email");
  console.log("  SMTP_PASSWORD=xsmtpsib-your-smtp-key\n");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
});

console.log("Testing connection and authentication with Brevo...");

try {
  await transporter.verify();
  console.log("✅ SUCCESS: Connected and authenticated with Brevo SMTP!");

  console.log(`\nDispatching test diagnostic email to ${to}...`);
  const info = await transporter.sendMail({
    from,
    to,
    subject: "✅ Test Email: Brevo SMTP Delivery Verified for RH-Dynamics",
    text: "This is a diagnostic verification email confirming that Brevo SMTP is successfully configured and delivering mail for RH-Dynamics.",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #4f46e5;">Brevo SMTP Connected Successfully!</h2>
        <p>This email confirms that your Brevo SMTP configuration for <strong>RH-Dynamics</strong> is working properly.</p>
        <p>Both admin notifications and client auto-replies are now active.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="font-size: 12px; color: #6b7280;">Timestamp: ${new Date().toISOString()}</p>
      </div>
    `,
  });

  console.log("✅ SUCCESS: Test email sent!");
  console.log(`Message ID: ${info.messageId}`);
  console.log("Check your inbox at:", to);
} catch (error) {
  console.error("\n❌ SMTP Error:", error.message);
  if (error.responseCode === 550 || error.message.includes("sender")) {
    console.log("\n💡 TIP: Ensure your sender address (" + from + ") is verified in Brevo:");
    console.log("   Go to Brevo -> Senders, Domains & Dedicated IPs -> Senders, and click 'Add a sender'.");
  } else if (error.responseCode === 535 || error.message.includes("Bad username / password")) {
    console.log("\n💡 TIP: Double-check your SMTP_USER and SMTP_PASSWORD.");
    console.log("   Make sure to generate an SMTP key (starts with xsmtpsib-), NOT an API key.");
  } else if (error.responseCode === 525 || error.message.includes("Unauthorized IP address")) {
    console.log("\n💡 TIP: Brevo blocked this connection because your IP is not whitelisted.");
    console.log("   1. In Brevo, go to 'SMTP & API' -> click the 'Click here' link on the purple banner (or Security -> Authorized IPs).");
    console.log("   2. Add your current public IP address (or disable the IP restriction if deploying to Vercel/cloud).");
  }
}
