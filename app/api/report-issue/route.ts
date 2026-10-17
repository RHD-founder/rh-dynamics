import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

const reportSchema = z.object({
  pageUrl: z.string().max(500).default("unknown"),
  errorMessage: z.string().max(2000).default("Unknown runtime exception"),
  errorDigest: z.string().max(200).optional(),
  errorStack: z.string().max(10000).optional(),
  userAgent: z.string().max(500).optional(),
  userNote: z.string().max(1000).optional(),
  timestamp: z.string().optional(),
});

const SENDER_EMAIL = process.env.SMTP_FROM || "RH Dynamics Alert <support@rhdynamics.in>";
const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || "founder@rhdynamics.in";

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || "127.0.0.1";

  try {
    const body = await request.json().catch(() => ({}));
    const parseResult = reportSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { message: "Invalid payload format" },
        { status: 400 }
      );
    }

    const reportData = parseResult.data;
    const reportId = `RHD-ERR-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const timestamp = reportData.timestamp || new Date().toISOString();

    const fullRecord = {
      reportId,
      timestamp,
      clientIp,
      ...reportData,
    };

    // 1. Persist to local JSON diagnostic log
    const dataDir = path.join(process.cwd(), "data");
    const reportsFilePath = path.join(dataDir, "error-reports.json");

    try {
      await fs.mkdir(dataDir, { recursive: true });
      let existingReports: Array<typeof fullRecord> = [];
      try {
        const fileContent = await fs.readFile(reportsFilePath, "utf8");
        existingReports = JSON.parse(fileContent);
      } catch {
        existingReports = [];
      }
      existingReports.unshift(fullRecord);
      // Keep last 100 reports
      if (existingReports.length > 100) {
        existingReports = existingReports.slice(0, 100);
      }
      await fs.writeFile(reportsFilePath, JSON.stringify(existingReports, null, 2), "utf8");
    } catch (fsErr) {
      console.error("[Issue Reporter] Failed to save locally:", fsErr);
    }

    // 2. Dispatch email to founders & developers
    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      try {
        const transporter = getTransporter();
        const mailOptions = {
          from: SENDER_EMAIL,
          to: ADMIN_EMAIL,
          replyTo: "support@rhdynamics.in",
          subject: `🚨 [ENGINEERING ALERT] Runtime Glitch on ${reportData.pageUrl} (${reportId})`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #0f172a; color: #f8fafc;">
              <div style="border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 20px;">
                <span style="background-color: #ef4444; color: #ffffff; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Incident Report</span>
                <h2 style="color: #ffffff; margin: 12px 0 4px 0; font-size: 20px;">Runtime Glitch Intercepted</h2>
                <p style="color: #94a3b8; font-size: 12px; margin: 0; font-family: monospace;">ID: ${reportId} | ${new Date(timestamp).toLocaleString()}</p>
              </div>

              <div style="background-color: #1e293b; padding: 16px; border-radius: 8px; margin-bottom: 16px; border-left: 4px solid #ef4444;">
                <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-family: monospace;">Error Message</p>
                <p style="margin: 0; color: #fca5a5; font-size: 15px; font-weight: 600; word-break: break-word;">${reportData.errorMessage}</p>
                ${reportData.errorDigest ? `<p style="margin: 8px 0 0 0; color: #cbd5e1; font-size: 12px; font-family: monospace;">Digest: <code style="background-color: #0f172a; padding: 2px 6px; border-radius: 4px;">${reportData.errorDigest}</code></p>` : ""}
              </div>

              <div style="background-color: #1e293b; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8; width: 120px;">Page URL:</td>
                    <td style="padding: 6px 0; color: #38bdf8; font-family: monospace; word-break: break-all;">${reportData.pageUrl}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8;">Client IP:</td>
                    <td style="padding: 6px 0; color: #f8fafc; font-family: monospace;">${clientIp}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8;">User Agent:</td>
                    <td style="padding: 6px 0; color: #cbd5e1; font-size: 11px; word-break: break-all;">${reportData.userAgent || "Unknown"}</td>
                  </tr>
                  ${reportData.userNote ? `
                  <tr>
                    <td style="padding: 8px 0; color: #f59e0b; font-weight: 600;">User Comment:</td>
                    <td style="padding: 8px 0; color: #fde68a; font-style: italic;">"${reportData.userNote}"</td>
                  </tr>
                  ` : ""}
                </table>
              </div>

              ${reportData.errorStack ? `
              <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 11px; text-transform: uppercase; font-family: monospace;">Stack Trace</p>
                <pre style="background-color: #020617; border: 1px solid #1e293b; color: #cbd5e1; padding: 12px; border-radius: 8px; font-size: 11px; overflow-x: auto; white-space: pre-wrap; font-family: monospace;">${reportData.errorStack}</pre>
              </div>
              ` : ""}

              <div style="border-top: 1px solid #334155; padding-top: 16px; font-size: 11px; color: #64748b; text-align: center;">
                RH Dynamics Cloud Telemetry &amp; Runtime Monitoring System
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (mailErr) {
        console.error("[Issue Reporter] Failed to send email alert:", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      reportId,
      message: "Diagnostic telemetry recorded and sent to engineering.",
    });
  } catch (error) {
    console.error("[Issue Reporter Error]:", error);
    return NextResponse.json(
      { message: "Internal server error logging issue." },
      { status: 500 }
    );
  }
}
