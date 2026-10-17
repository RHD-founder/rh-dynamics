"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function VisitorTracker() {
  const pathname = usePathname();
  const lastLoggedPath = useRef<string | null>(null);

  useEffect(() => {
    // Only log if the path changes and it's not an internal API, static asset, or admin command hub
    if (!pathname || pathname === lastLoggedPath.current || pathname.startsWith("/api/") || pathname.startsWith("/seo-command")) {
      return;
    }

    lastLoggedPath.current = pathname;

    // Detect device type
    const isMobile = typeof window !== "undefined" && 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Detect unique session using browser sessionStorage
    let isNewSession = false;
    try {
      if (typeof window !== "undefined" && !sessionStorage.getItem("rhd_active_session")) {
        sessionStorage.setItem("rhd_active_session", "1");
        isNewSession = true;
      }
    } catch {}

    const payload = JSON.stringify({
      path: pathname,
      device: isMobile ? "mobile" : "desktop",
      referrer: typeof document !== "undefined" && document.referrer 
        ? new URL(document.referrer, window.location.href).hostname 
        : "direct",
      isNewSession,
      timestamp: new Date().toISOString()
    });

    try {
      if (typeof navigator !== "undefined" && navigator.sendBeacon) {
        navigator.sendBeacon("/api/telemetry", payload);
      } else {
        fetch("/api/telemetry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true
        }).catch(() => {});
      }
    } catch {
      // Non-blocking telemetry
    }
  }, [pathname]);

  return null;
}
