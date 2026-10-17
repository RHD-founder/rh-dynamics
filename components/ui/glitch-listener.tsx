"use client";

import { useEffect, useState } from "react";
import { GlitchModal } from "@/components/ui/glitch-modal";

export function GlitchListener() {
  const [glitchState, setGlitchState] = useState<{
    isOpen: boolean;
    error?: Error | { message?: string; stack?: string };
    pageUrl?: string;
  }>({
    isOpen: false,
  });

  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      // Ignore routine browser extension noise or resize observer loops
      if (
        event.message?.includes("ResizeObserver loop") ||
        event.message?.includes("Script error.") ||
        event.filename?.includes("chrome-extension://") ||
        event.filename?.includes("moz-extension://")
      ) {
        return;
      }

      console.error("[RH Telemetry] Global error caught:", event.error || event.message);

      setGlitchState({
        isOpen: true,
        error: event.error || {
          message: event.message,
          stack: event.filename ? `${event.filename}:${event.lineno}:${event.colno}` : undefined,
        },
        pageUrl: window.location.href,
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message =
        reason instanceof Error
          ? reason.message
          : typeof reason === "string"
          ? reason
          : "Unhandled asynchronous promise rejection";

      console.error("[RH Telemetry] Unhandled promise rejection:", reason);

      setGlitchState({
        isOpen: true,
        error: reason instanceof Error ? reason : { message },
        pageUrl: window.location.href,
      });
    };

    window.addEventListener("error", handleGlobalError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleGlobalError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  return (
    <GlitchModal
      isOpen={glitchState.isOpen}
      onClose={() => setGlitchState((prev) => ({ ...prev, isOpen: false }))}
      error={glitchState.error}
      pageUrl={glitchState.pageUrl}
      resetAction={() => {
        setGlitchState({ isOpen: false });
        if (typeof window !== "undefined") window.location.reload();
      }}
    />
  );
}
