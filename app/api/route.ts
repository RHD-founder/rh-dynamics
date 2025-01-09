import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { captchaToken, name, email, message } = await req.json();

    // Verify reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
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

    if (!recaptchaResponse.data.success) {
      const errorResponse = NextResponse.json(
        { success: false, error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
      errorResponse.headers.set("Access-Control-Allow-Origin", "*");
      return errorResponse;
    }

    // Send email using Brevo API
    const brevoApiKey = process.env.BREVO_API_KEY;

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

    const successResponse = NextResponse.json({ success: true });
    successResponse.headers.set("Access-Control-Allow-Origin", "*");
    return successResponse;
  } catch (error) {
    const errorResponse = NextResponse.json(
      {
        success: false,
        error: "An error occurred while processing your request.",
      },
      { status: 500 }
    );
    errorResponse.headers.set("Access-Control-Allow-Origin", "*");
    return errorResponse;
  }
}

export function OPTIONS() {
  const response = NextResponse.json(null, { status: 204 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
