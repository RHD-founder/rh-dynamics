import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

// Rate limiting - simple in-memory implementation
const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute in milliseconds
const RATE_LIMIT_REQUESTS = 3; // Max 3 requests per minute

interface RateLimitRecord {
  count: number;
  timestamp: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Nodemailer transporter setup with Brevo SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp-relay.brevo.com", // Brevo SMTP server
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    // Never hardcode credentials
    user: process.env.SMTP_USER, // Brevo SMTP login
    pass: process.env.SMTP_PASSWORD, // Brevo SMTP key
  },
});

export async function POST(request: Request) {
  try {
    // Check if SMTP credentials are available
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error(
        "SMTP credentials missing. Please set environment variables."
      );
      return NextResponse.json(
        { message: "Email service is not configured properly" },
        { status: 500 }
      );
    }

    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    // Apply rate limiting
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    // Check if the IP is already rate limited
    if (record) {
      // Check if the rate limit duration has passed
      if (now - record.timestamp < RATE_LIMIT_DURATION) {
        // Increment count
        record.count += 1;

        // Check if too many requests
        if (record.count > RATE_LIMIT_REQUESTS) {
          return NextResponse.json(
            { message: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
      } else {
        // Reset if the duration has passed
        record.count = 1;
        record.timestamp = now;
      }
    } else {
      // First request from this IP
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    // Parse and validate request body
    const body = await request.json();
    const result = formSchema.safeParse(body);

    if (!result.success) {
      const errorMessage = result.error.issues
        .map((issue) => issue.message)
        .join(", ");
      return NextResponse.json(
        { message: `Validation error: ${errorMessage}` },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    // Define email content
    const mailOptions = {
      from: "RH-Dynamics <no-reply@rh-dynamics.software>", // Use verified sender with readable name
      to: "founder@rh-dynamics.software", // Business email
      replyTo: email,
      subject: `Contact Form: Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:

${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
  <p style="margin-bottom: 20px; color: #4b5563;">You have received a new message from your website contact form.</p>
  
  <div style="background-color: #f9fafb; border-left: 4px solid #4f46e5; padding: 15px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><strong style="color: #4f46e5;">Name:</strong> ${name}</p>
    <p style="margin: 0 0 10px 0;"><strong style="color: #4f46e5;">Email:</strong> <a href="mailto:${email}" style="color: #4338ca; text-decoration: none;">${email}</a></p>
  </div>
  
  <div style="background-color: #f9fafb; border-left: 4px solid #4f46e5; padding: 15px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><strong style="color: #4f46e5;">Message:</strong></p>
    <p style="white-space: pre-line; color: #4b5563;">${message}</p>
  </div>
  
  <p style="font-size: 12px; color: #6b7280; margin-top: 30px; text-align: center;">
    This email was sent from your RH Dynamics website contact form.
  </p>
</div>
      `,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      throw new Error("Failed to send email. Please try again later.");
    }

    // Send auto-reply to the user
    const autoReplyMailOptions = {
      from: "RH-Dynamics <no-reply@rh-dynamics.software>", // Use verified sender with readable name
      to: email, // user's email
      subject: "Thank you for contacting RH Dynamics",
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4f46e5;">Thank You for Contacting Us</h2>
  <p style="margin-bottom: 20px; color: #4b5563;">Hello ${name},</p>
  <p style="margin-bottom: 20px; color: #4b5563;">Thank you for reaching out to RH Dynamics. We've received your message and will get back to you as soon as possible, typically within 24 hours during business days.</p>
  
  <div style="background-color: #f9fafb; border-left: 4px solid #4f46e5; padding: 15px; margin-bottom: 20px;">
    <p style="margin: 0; color: #4b5563;"><strong style="color: #4f46e5;">Your message:</strong></p>
    <p style="white-space: pre-line; color: #6b7280; margin-top: 10px;">${message.substring(
      0,
      150
    )}${message.length > 150 ? "..." : ""}</p>
  </div>
  
  <p style="margin-bottom: 10px; color: #4b5563;">If you need immediate assistance, please call us at <a href="tel:+918638875149" style="color: #4338ca; text-decoration: none;">+91 8638875149</a>.</p>
  
  <p style="margin-bottom: 10px; color: #4b5563;">Best regards,</p>
  <p style="margin-bottom: 30px; color: #4b5563;"><strong>The RH Dynamics Team</strong></p>
  
  <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
    <p style="font-size: 12px; color: #6b7280; margin: 0;">
      RH Dynamics | Near Harmoni Apartment, Magzine, Guwahati, Assam, India 781171
    </p>
    <p style="font-size: 12px; color: #6b7280; margin-top: 5px;">
      <a href="https://rh-dynamics.software" style="color: #4338ca; text-decoration: none;">https://rh-dynamics.software</a>
    </p>
  </div>
</div>
      `,
    };

    // Send auto-reply
    try {
      await transporter.sendMail(autoReplyMailOptions);
      console.log("Auto-reply email sent successfully");
    } catch (autoReplyError) {
      console.error("Failed to send auto-reply:", autoReplyError);
      // Continue even if auto-reply fails
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "An error occurred while sending your message" },
      { status: 500 }
    );
  }
}
