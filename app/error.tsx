"use client";

import { useEffect, useState } from "react";
import { GlitchModal } from "@/components/ui/glitch-modal";
import { Button } from "@/components/ui/button";
import { AlertOctagon, RefreshCw, Home, ShieldAlert, Bug } from "lucide-react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Automatically log incident to console and open the report modal
    console.error("[RH Incident Boundary] Intercepted runtime error:", error);
    setModalOpen(true);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden bg-background text-foreground">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative z-10 py-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border border-red-500/30 bg-red-500/10 text-red-500 mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <AlertOctagon className="w-3.5 h-3.5" />
          Diagnostic Alert // Route Interrupted
        </div>

        <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight mb-4 text-foreground">
          Runtime <span className="text-red-500">Glitch</span> Intercepted
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-6 max-w-md mx-auto">
          An unexpected glitch prevented this view from rendering normally. Our engineering telemetry has captured the trace.
        </p>

        {error.digest && (
          <div className="inline-block px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/80 text-xs font-mono text-muted-foreground mb-8">
            Incident Digest: <span className="text-foreground font-bold">{error.digest}</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            onClick={() => setModalOpen(true)}
            size="lg"
            className="w-full sm:w-auto rounded-full px-6 text-xs font-mono font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20"
          >
            <Bug className="mr-2 h-4 w-4" />
            Report Issue to Developers
          </Button>

          <Button
            onClick={() => reset()}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full px-6 text-xs font-mono font-medium uppercase tracking-wider border-border/80"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Route Again
          </Button>

          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto rounded-full px-6 text-xs font-mono font-medium uppercase tracking-wider"
            >
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>

      <GlitchModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        error={error}
        resetAction={reset}
      />
    </div>
  );
}
