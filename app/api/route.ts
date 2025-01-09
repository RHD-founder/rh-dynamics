import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("API route hit"); // Log to check if the route is hit

    const { captchaToken, name, email, message } = await req.json();
    console.log("Received data:", { captchaToken, name, email, message });

    // Verify reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    console.log("Using secret key:", secretKey);

    // More code...

    const successResponse = NextResponse.json({ success: true });
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
    return errorResponse;
  }
}
