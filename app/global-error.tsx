"use client";

import { useEffect, useState } from "react";
import { GlitchModal } from "@/components/ui/glitch-modal";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home, Bug } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.error("[RH Global Error Intercept]:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 font-sans">
        <div className="max-w-lg mx-auto text-center py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-red-500/20 text-red-400 border border-red-500/30 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            Global Framework Exception
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-white">
            Root Interruption Intercepted
          </h1>

          <p className="text-base text-slate-400 mb-8 max-w-md mx-auto">
            A critical glitch occurred at the application shell level. Our telemetry has isolated this event for investigation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              onClick={() => setModalOpen(true)}
              size="lg"
              className="w-full sm:w-auto rounded-full px-6 text-xs font-mono font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white"
            >
              <Bug className="mr-2 h-4 w-4" />
              Report Issue
            </Button>

            <Button
              onClick={() => reset()}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-6 text-xs font-mono font-medium uppercase tracking-wider text-slate-200 border-slate-700 hover:bg-slate-800"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Restart Shell
            </Button>
          </div>
        </div>

        <GlitchModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          error={error}
          resetAction={reset}
        />
      </body>
    </html>
  );
}
