import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { captchaToken, name, email, message } = await req.json();

    console.log("Received data:", { captchaToken, name, email, message });

    // Verify reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    console.log("Using secret key:", secretKey);

    const recaptchaResponse = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: secretKey,
          response: captchaToken,
        },
      }
    );

    console.log("reCAPTCHA API response:", recaptchaResponse.data);

    if (!recaptchaResponse.data.success) {
      console.error("reCAPTCHA verification failed:", recaptchaResponse.data);
      const errorResponse = NextResponse.json(
        { success: false, error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
      errorResponse.headers.set("Access-Control-Allow-Origin", "*");
      errorResponse.headers.set(
        "Access-Control-Allow-Methods",
        "POST, OPTIONS"
      );
      errorResponse.headers.set("Access-Control-Allow-Headers", "Content-Type");
      return errorResponse;
    }

    // Send email using Brevo API
    const brevoApiKey = process.env.BREVO_API_KEY;
    console.log("Using Brevo API Key:", brevoApiKey);

    const emailResponse = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "RH-Dynamics", email: "no-reply@rh-dynamics.software" },
        to: [{ email: "sunuahmed540@gmail.com" }],
        subject: "New Message from Contact Form",
        htmlContent: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
      }
    );

    console.log("Email sent successfully:", emailResponse.data);

    const successResponse = NextResponse.json({ success: true });
    successResponse.headers.set("Access-Control-Allow-Origin", "*");
    successResponse.headers.set(
      "Access-Control-Allow-Methods",
      "POST, OPTIONS"
    );
    successResponse.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return successResponse;
  } catch (error) {
    console.error("Error:", error);

    const errorResponse = NextResponse.json(
      {
        success: false,
        error: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
    errorResponse.headers.set("Access-Control-Allow-Origin", "*");
    errorResponse.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    errorResponse.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return errorResponse;
  }
}

// Handle preflight OPTIONS request
export function OPTIONS() {
  const response = NextResponse.json(null, { status: 204 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
