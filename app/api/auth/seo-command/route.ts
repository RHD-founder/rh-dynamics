import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { 
  verifyMasterPinSecure, 
  generateSeoAuthToken, 
  verifySeoAuthToken, 
  checkPinRateLimit, 
  recordFailedPinAttempt, 
  resetPinRateLimit, 
  AUTH_COOKIE_NAME 
} from "@/lib/security/seo-auth";

export async function GET() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const isAuthenticated = verifySeoAuthToken(sessionToken);

  return NextResponse.json({ authenticated: isAuthenticated });
}

export async function POST(request: Request) {
  // Prevent payload flooding (> 4KB payload is immediately rejected)
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > 4096) {
    return NextResponse.json(
      { success: false, message: "Payload size limit exceeded." },
      { status: 413 }
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || "127.0.0.1";

  // 1. Check rate limits / brute force protection (Per-IP and Global Circuit Breaker)
  const rateLimit = checkPinRateLimit(clientIp);
  if (!rateLimit.allowed) {
    const reason = rateLimit.isGlobalLock 
      ? `System-wide security lock active due to high invalid traffic. Retry in ${rateLimit.retryAfterMin} minutes.`
      : `Too many failed attempts from your IP. Locked out for security. Try again in ${rateLimit.retryAfterMin} minutes.`;
    return NextResponse.json(
      { success: false, message: reason },
      { status: 429 }
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    
    // Strict type check: PIN must be a string between 6 and 64 characters
    if (typeof body.pin !== "string" || !body.pin.trim()) {
      return NextResponse.json(
        { success: false, message: "Please enter the master access PIN." },
        { status: 400 }
      );
    }

    const pin = body.pin.trim();
    if (pin.length < 6 || pin.length > 64) {
      return NextResponse.json(
        { success: false, message: "Invalid PIN format. Access denied." },
        { status: 401 }
      );
    }

    // 2. Cryptographic Constant-Time Verification with Anti-Timing Delay
    const isValid = await verifyMasterPinSecure(pin);

    if (!isValid) {
      const failed = recordFailedPinAttempt(clientIp);
      if (failed.isLocked) {
        return NextResponse.json(
          { 
            success: false, 
            message: "Too many incorrect attempts. Dashboard access locked for 15 minutes." 
          },
          { status: 429 }
        );
      }

      return NextResponse.json(
        { 
          success: false, 
          message: `Incorrect security PIN. Access denied. (${failed.remainingAttempts} attempts remaining)` 
        },
        { status: 401 }
      );
    }

    // 3. Reset rate limit and issue secure session cookie
    resetPinRateLimit(clientIp);
    const token = generateSeoAuthToken();

    const response = NextResponse.json({
      success: true,
      message: "Authentication successful. Welcome to RH Dynamics Command Center."
    });

    response.cookies.set(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: "Authentication service error." },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: "Session terminated. Dashboard locked."
  });

  response.cookies.delete(AUTH_COOKIE_NAME);
  response.cookies.set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
    expires: new Date(0)
  });

  return response;
}
