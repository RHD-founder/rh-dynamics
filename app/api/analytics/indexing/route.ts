import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";
import { verifySeoAuthToken, AUTH_COOKIE_NAME } from "@/lib/security/seo-auth";
import { dispatchAllCoreIndexing, submitIndexingNotification } from "@/lib/analytics/google-indexing";

export async function GET() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const isAuthenticated = verifySeoAuthToken(sessionToken);

  if (!isAuthenticated) {
    return NextResponse.json(
      { success: false, message: "Authentication required" },
      { status: 401 }
    );
  }

  const logPath = path.join(process.cwd(), "data", "indexing-log.json");
  if (fs.existsSync(logPath)) {
    try {
      const log = JSON.parse(fs.readFileSync(logPath, "utf8"));
      return NextResponse.json({
        success: true,
        total: log.length,
        submitted: log.filter((item: { statusCode?: number; success?: boolean }) => item.statusCode === 200 || item.success).length,
        timestamp: log[0]?.timestamp || null,
        log
      });
    } catch {
      // Fallback
    }
  }

  return NextResponse.json({
    success: true,
    total: 0,
    submitted: 0,
    log: []
  });
}

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const isAuthenticated = verifySeoAuthToken(sessionToken);

  if (!isAuthenticated) {
    return NextResponse.json(
      { success: false, message: "Authentication required" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json().catch(() => ({}));
    if (body.url) {
      const res = await submitIndexingNotification(body.url);
      return NextResponse.json(res);
    }

    // Otherwise dispatch all
    const results = await dispatchAllCoreIndexing();
    return NextResponse.json({
      success: true,
      message: `Dispatched ${results.length} URLs to Google Indexing API`,
      results
    });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : "Indexing trigger failed" },
      { status: 500 }
    );
  }
}
