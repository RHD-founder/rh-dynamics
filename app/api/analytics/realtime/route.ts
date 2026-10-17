import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySeoAuthToken, AUTH_COOKIE_NAME } from "@/lib/security/seo-auth";
import { fetchGA4Realtime } from "@/lib/analytics/ga4-client";

export async function GET() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const isAuthenticated = verifySeoAuthToken(sessionToken);

  if (!isAuthenticated) {
    return NextResponse.json(
      { success: false, message: "Authentication required to access live analytics." },
      { status: 401 }
    );
  }

  const gaData = await fetchGA4Realtime();
  return NextResponse.json(gaData);
}
