import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { evaluateBotDefense } from "@/lib/security/bot-defense";
import { getSupabaseAdmin } from "@/lib/supabase/server";

// Form validation schema with security trap attributes
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50).trim(),
  email: z.string().email("Invalid email address").trim().toLowerCase(),
  phone: z.string().min(10, "Phone number must be at least 10 digits").trim(),
  organization: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000).trim(),
  service: z.string().optional(),
  // Invisible security payloads
  _hp_website: z.string().optional(),
  _hp_fax: z.string().optional(),
  _form_rendered_at: z.number().optional(),
});

// Maximum request body size (10KB) to prevent payload flooding
const MAX_REQUEST_SIZE = 10 * 1024;

// Email configuration
const SENDER_EMAIL = process.env.SMTP_FROM || "RH-Dynamics <support@rhdynamics.in>";
const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || "founder@rhdynamics.in";

// Dynamic transporter creation to ensure fresh environment variables on each invocation
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
  // Extract client IP address from proxy headers
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || "127.0.0.1";

  // Check request payload size
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength) > MAX_REQUEST_SIZE) {
    return NextResponse.json(
      { message: "Request payload exceeds allowable limits." },
      { status: 413 }
    );
  }

  try {
    // Parse and validate incoming JSON body
    const body = await request.json().catch(() => ({}));
    const parseResult = formSchema.safeParse(body);

    if (!parseResult.success) {
      const errorMessage = parseResult.error.issues
        .map((issue: { message: string }) => issue.message)
        .join(", ");
      return NextResponse.json(
        { message: `Validation error: ${errorMessage}` },
        { status: 400 }
      );
    }


    const {
      name,
      email,
      phone,
      organization,
      timeline,
      message,
      service,
      _hp_website,
      _hp_fax,
      _form_rendered_at,
    } = parseResult.data;

    // -------------------------------------------------------------------------
    // ANTI-BOT & DEFENSE EVALUATION
    // -------------------------------------------------------------------------
    const botCheck = await evaluateBotDefense({
      name,
      email,
      phone,
      message,
      service,
      honeypotWebsite: _hp_website,
      honeypotFax: _hp_fax,
      renderedAt: _form_rendered_at,
      clientIp,
    });

    // SILENT BLACKHOLING (The Ghost Ban):
    // If a bot trips the honeypot, injection filter, or is in the blocklist,
    // return a fake 200 OK so the bot believes it succeeded, preventing retry loops.
    if (botCheck.isBlackholed) {
      console.info(`[Contact API] Blackholed bot submission from ${clientIp}. Suppressing email dispatch.`);
      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    }

    // LEGITIMATE USER CORRECTION (e.g., DNS MX check or rate limit hit)
    if (!botCheck.isAllowed) {
      return NextResponse.json(
        { message: botCheck.errorMessage || "Unable to process request." },
        { status: botCheck.statusCode || 400 }
      );
    }

    // -------------------------------------------------------------------------
    // 1. SUPABASE LEAD STORAGE (Permanent Cloud CRM Backup)
    // -------------------------------------------------------------------------
    const supabase = getSupabaseAdmin();
    if (supabase) {
      try {
        const { error: sbLeadErr } = await supabase.from("inquiries").insert({
          name,
          email,
          phone,
          organization: organization || null,
          service: service || null,
          timeline: timeline || null,
          message,
          client_ip: clientIp,
          status: "new",
        });
        if (sbLeadErr) {
          console.warn("[Contact API] Supabase lead insertion warning:", sbLeadErr.message);
        } else {
          console.log(`[Contact API] Client inquiry lead permanently saved to Supabase for ${name} (${email})`);
        }
      } catch (sbEx) {
        console.warn("[Contact API] Supabase error:", sbEx);
      }
    }

    // -------------------------------------------------------------------------
    // 2. EMAIL TRANSMISSION (Human verified)
    // -------------------------------------------------------------------------
    const serviceDisplay = service ? `Service Scope: ${service}` : "";
    const orgDisplay = organization ? `Organization: ${organization}` : "";
    const timelineDisplay = timeline ? `Timeline: ${timeline}` : "";

    // Internal notification email to founder
    const mailOptions = {
      from: SENDER_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `Contact Form: Message from ${name}${organization ? ` (${organization})` : ""}${service ? ` [${service}]` : ""}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
${orgDisplay}
${timelineDisplay}
${serviceDisplay}
Client IP: ${clientIp}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
  <h2 style="color: #4f46e5; margin-bottom: 8px;">New Verified Contact Inquiry</h2>
  <p style="margin-bottom: 20px; color: #6b7280; font-size: 14px;">Direct inquiry received via RH Dynamics Gateway.</p>
  
  <div style="background-color: #f9fafb; border-left: 4px solid #4f46e5; padding: 16px; margin-bottom: 20px; border-radius: 4px;">
    <p style="margin: 0 0 8px 0;"><strong style="color: #4f46e5;">Representative:</strong> ${name}</p>
    <p style="margin: 0 0 8px 0;"><strong style="color: #4f46e5;">Email:</strong> <a href="mailto:${email}" style="color: #4338ca; text-decoration: none;">${email}</a></p>
    <p style="margin: 0 0 8px 0;"><strong style="color: #4f46e5;">Phone:</strong> ${phone}</p>
    ${organization ? `<p style="margin: 0 0 8px 0;"><strong style="color: #4f46e5;">Organization / Facility:</strong> ${organization}</p>` : ""}
    ${service ? `<p style="margin: 0 0 8px 0;"><strong style="color: #4f46e5;">Service Scope:</strong> <span style="background-color: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 4px; font-weight: bold;">${service}</span></p>` : ""}
    ${timeline ? `<p style="margin: 0 0 8px 0;"><strong style="color: #4f46e5;">Target Timeline:</strong> ${timeline}</p>` : ""}
    <p style="margin: 0;"><strong style="color: #4f46e5;">Client IP:</strong> ${clientIp}</p>
  </div>
  
  <div style="background-color: #f9fafb; border-left: 4px solid #4f46e5; padding: 16px; margin-bottom: 20px; border-radius: 4px;">
    <p style="margin: 0 0 8px 0;"><strong style="color: #4f46e5;">Operational Challenge / Specifications:</strong></p>
    <p style="white-space: pre-line; color: #374151; line-height: 1.6; margin: 0;">${message}</p>
  </div>
  
  <p style="font-size: 11px; color: #9ca3af; margin-top: 30px; text-align: center; border-top: 1px solid #e5e7eb; pt: 16px;">
    Transmitted securely via RH Dynamics Gateway (Protected by Native Anti-Bot Defense).
  </p>
</div>
      `,
    };

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn("[Contact API] SMTP credentials not set in environment. Simulated successful dispatch in dev mode.");
      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    }

    const transporter = getTransporter();

    // Dispatch email to founder
    try {
      const founderInfo = await transporter.sendMail(mailOptions);
      console.log(`[Contact API] Email notification dispatched successfully to ${ADMIN_EMAIL} for ${email} (MessageID: ${founderInfo.messageId})`);
    } catch (emailError) {
      console.error("[Contact API] Failed to send email to founder:", emailError);
      throw new Error("Failed to send email. Please try again later.");
    }


    // Auto-reply confirmation to client
    const autoReplyMailOptions = {
      from: SENDER_EMAIL,
      to: email,
      subject: "Thank you for contacting RH Dynamics",
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4f46e5;">Thank You for Contacting Us</h2>
  <p style="margin-bottom: 20px; color: #4b5563;">Hello ${name},</p>
  <p style="margin-bottom: 20px; color: #4b5563;">Thank you for reaching out to RH Dynamics. We have received your inquiry and our engineering team will get back to you within 24 business hours.</p>
  
  ${service ? `<div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 15px; margin-bottom: 20px;">
    <p style="margin: 0; color: #166534;">We have noted your interest in <strong>${service}</strong>. A dedicated specialist will be assigned to review your requirements.</p>
  </div>` : ""}

  <div style="background-color: #f9fafb; border-left: 4px solid #4f46e5; padding: 15px; margin-bottom: 20px;">
    <p style="margin: 0; color: #4b5563;"><strong style="color: #4f46e5;">Your submitted inquiry:</strong></p>
    <p style="white-space: pre-line; color: #6b7280; margin-top: 10px;">${message.substring(0, 150)}${message.length > 150 ? "..." : ""}</p>
  </div>
  
  <p style="margin-bottom: 10px; color: #4b5563;">If you need urgent communication, call our team directly at <a href="tel:+918638875149" style="color: #4338ca; text-decoration: none;">+91 86388 75149</a> or <a href="tel:+919864848781" style="color: #4338ca; text-decoration: none;">+91 98648 48781</a>.</p>
  
  <p style="margin-bottom: 10px; color: #4b5563;">Best regards,</p>
  <p style="margin-bottom: 30px; color: #4b5563;"><strong>The RH Dynamics Team</strong></p>
  
  <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
    <p style="font-size: 12px; color: #6b7280; margin: 0;">
      RH Dynamics | Corporate HQ: Near AGV Bank, Goranga, Golaghat, Assam 785603 | Engineering: Guwahati 781036
    </p>
    <p style="font-size: 12px; color: #6b7280; margin-top: 5px;">
      <a href="https://rhdynamics.in" style="color: #4338ca; text-decoration: none;">https://rhdynamics.in</a>
    </p>
  </div>
</div>
      `,
    };

    // Attempt auto-reply (non-blocking for overall success)
    try {
      await transporter.sendMail(autoReplyMailOptions);
      console.log(`[Contact API] Auto-reply confirmation dispatched to ${email}`);
    } catch (autoReplyError) {
      console.warn("[Contact API] Auto-reply email could not be sent:", autoReplyError);
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Internal transmission error:", error);
    return NextResponse.json(
      { message: "An error occurred while sending your message. Please try again later." },
      { status: 500 }
    );
  }
}
