import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySeoAuthToken, AUTH_COOKIE_NAME } from "@/lib/security/seo-auth";
import { fetchGSCData } from "@/lib/analytics/gsc-client";

export async function GET() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const isAuthenticated = verifySeoAuthToken(sessionToken);

  if (!isAuthenticated) {
    return NextResponse.json(
      { success: false, message: "Authentication required to access Search Console performance." },
      { status: 401 }
    );
  }

  const gscData = await fetchGSCData();
  return NextResponse.json(gscData);
}
