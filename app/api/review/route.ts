import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import nodemailer from "nodemailer";
import { z } from "zod";
import { evaluateBotDefense } from "@/lib/security/bot-defense";
import { verifySeoAuthToken, AUTH_COOKIE_NAME } from "@/lib/security/seo-auth";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { DEFAULT_REVIEWS } from "@/lib/reviews/default-reviews";

const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(60).trim(),
  company: z.string().min(2, "Company or organization name is required").max(80).trim(),
  position: z.string().max(60).optional(),
  rating: z.number().min(1).max(5).default(5),
  metric: z.string().max(28, "Outcome badge cannot exceed 28 characters").optional(),
  quote: z.string().min(10, "Review must be at least 10 characters").max(800).trim(),
  // Anti-bot honeypot payloads
  _hp_website: z.string().optional(),
  _hp_fax: z.string().optional(),
  _form_rendered_at: z.number().optional(),
});

const SENDER_EMAIL = process.env.SMTP_FROM || "RH-Dynamics <support@rhdynamics.in>";
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
    const parseResult = reviewSchema.safeParse(body);

    if (!parseResult.success) {
      const errorMessage = parseResult.error.issues
        .map((issue) => issue.message)
        .join(", ");
      return NextResponse.json(
        { message: `Validation error: ${errorMessage}` },
        { status: 400 }
      );
    }

    const {
      name,
      company,
      position,
      rating,
      metric,
      quote,
      _hp_website,
      _hp_fax,
      _form_rendered_at,
    } = parseResult.data;

    // Bot Defense Evaluation
    const botCheck = await evaluateBotDefense({
      name,
      email: "feedback@rhdynamics.in",
      phone: "0000000000",
      message: quote,
      honeypotWebsite: _hp_website,
      honeypotFax: _hp_fax,
      renderedAt: _form_rendered_at,
      clientIp,
    });

    if (botCheck.isBlackholed) {
      console.info(`[Review API] Blackholed bot submission from ${clientIp}.`);
      return NextResponse.json({ message: "Review submitted successfully" }, { status: 200 });
    }

    if (!botCheck.isAllowed) {
      return NextResponse.json(
        { message: botCheck.errorMessage || "Unable to process feedback submission." },
        { status: botCheck.statusCode || 400 }
      );
    }

    const newReview = {
      id: Date.now().toString(),
      quote,
      author: name,
      position: position || "Client",
      company,
      metric: metric || "Verified Project",
      rating,
      verified: true,
      date: new Date().toISOString().split("T")[0],
    };

    // 1. Supabase Cloud Database Insertion (Permanent Storage)
    const supabase = getSupabaseAdmin();
    if (supabase) {
      try {
        const { error: sbErr } = await supabase.from("reviews").insert(newReview);
        if (sbErr) {
          console.warn("[Review API] Supabase insert warning:", sbErr.message);
        } else {
          console.log(`[Review API] Review permanently saved to Supabase table 'reviews' for ${name} (${company})`);
        }
      } catch (sbEx) {
        console.warn("[Review API] Supabase connection error:", sbEx);
      }
    }

    // Email notification to founder
    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      const transporter = getTransporter();
      const mailOptions = {
        from: SENDER_EMAIL,
        to: ADMIN_EMAIL,
        subject: `New Client Feedback Received: ${rating}★ from ${name} (${company})`,
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
  <h2 style="color: #4f46e5;">New Direct Client Feedback Submitted</h2>
  <p>A client has submitted verified feedback through your website:</p>
  <div style="background-color: #f9fafb; border-left: 4px solid #4f46e5; padding: 16px; margin: 20px 0; border-radius: 4px;">
    <p><strong>Client:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Role:</strong> ${position || "N/A"}</p>
    <p><strong>Rating:</strong> ${rating} / 5 Stars</p>
    ${metric ? `<p><strong>Key Highlight:</strong> ${metric}</p>` : ""}
    <p><strong>Testimonial:</strong></p>
    <blockquote style="font-style: italic; color: #374151; margin: 8px 0;">"${quote}"</blockquote>
  </div>
  <p style="font-size: 12px; color: #6b7280;">Transmitted via https://rhdynamics.in/review</p>
</div>
        `,
      };
      await transporter.sendMail(mailOptions).catch((err) => {
        console.warn("[Review API] Notification email failed:", err);
      });
    }

    return NextResponse.json({ message: "Review submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("[Review API] Error handling review submission:", error);
    return NextResponse.json(
      { message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

// -------------------------------------------------------------
// GET: Public list of reviews (Supabase Cloud DB with In-Memory Fallback)
// -------------------------------------------------------------
export async function GET() {
  try {
    // 1. Try Supabase cloud database
    const supabase = getSupabaseAdmin();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("reviews")
          .select("*")
          .eq("verified", true)
          .order("date", { ascending: false });

        if (!error && Array.isArray(data) && data.length > 0) {
          return NextResponse.json({ status: "success", source: "supabase", reviews: data }, { status: 200 });
        }
      } catch (sbEx) {
        console.warn("[Review API] Supabase read error, falling back to default reviews:", sbEx);
      }
    }

    // 2. In-memory fallback
    return NextResponse.json({ status: "success", source: "default", reviews: DEFAULT_REVIEWS }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to read reviews", reviews: DEFAULT_REVIEWS }, { status: 500 });
  }
}

// -------------------------------------------------------------
// DELETE: Protected Review Removal (Supabase Cloud DB)
// -------------------------------------------------------------
export async function DELETE(request: Request) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(AUTH_COOKIE_NAME)?.value;
    const isAuthenticated = verifySeoAuthToken(sessionToken);

    if (!isAuthenticated) {
      return NextResponse.json(
        { message: "Unauthorized. Security PIN authentication required to delete reviews." },
        { status: 401 }
      );
    }

    let reviewId = "";
    try {
      const body = await request.json().catch(() => ({}));
      if (body && body.id) {
        reviewId = String(body.id).trim();
      }
    } catch {}

    if (!reviewId) {
      const url = new URL(request.url);
      reviewId = url.searchParams.get("id")?.trim() || "";
    }

    if (!reviewId) {
      return NextResponse.json(
        { message: "Missing review ID to delete." },
        { status: 400 }
      );
    }

    // 1. Delete from Supabase if connected
    const supabase = getSupabaseAdmin();
    let remainingReviews = DEFAULT_REVIEWS.filter((r) => String(r.id) !== reviewId);

    if (supabase) {
      try {
        const { error: sbDelErr } = await supabase.from("reviews").delete().eq("id", reviewId);
        if (sbDelErr) {
          console.warn("[Review API] Supabase delete warning:", sbDelErr.message);
        } else {
          console.log(`[Review API] Deleted review ${reviewId} from Supabase table 'reviews'`);
        }

        // Fetch remaining
        const { data: refreshed } = await supabase
          .from("reviews")
          .select("*")
          .order("date", { ascending: false });

        if (Array.isArray(refreshed)) {
          remainingReviews = refreshed;
        }
      } catch (sbEx) {
        console.warn("[Review API] Supabase delete error:", sbEx);
      }
    }

    return NextResponse.json({
      status: "success",
      message: "Review successfully deleted.",
      remainingCount: remainingReviews.length,
      reviews: remainingReviews,
    }, { status: 200 });
  } catch (error) {
    console.error("[Review API] Error deleting review:", error);
    return NextResponse.json(
      { message: "Failed to delete review. Internal server error." },
      { status: 500 }
    );
  }
}
