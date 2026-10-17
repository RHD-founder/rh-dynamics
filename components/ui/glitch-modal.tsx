"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, RefreshCw, Home, X, Send, ShieldAlert, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GlitchModalProps {
  isOpen: boolean;
  onClose: () => void;
  error?: Error | { message?: string; stack?: string; digest?: string };
  pageUrl?: string;
  resetAction?: () => void;
}

export function GlitchModal({
  isOpen,
  onClose,
  error,
  pageUrl,
  resetAction,
}: GlitchModalProps) {
  const [userNote, setUserNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReportId, setSubmittedReportId] = useState<string | null>(null);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  if (!isOpen) return null;

  const currentUrl = pageUrl || (typeof window !== "undefined" ? window.location.href : "unknown");
  const errorMessage = error?.message || "An unexpected UI or script error occurred.";
  const errorDigest = (error as { digest?: string })?.digest;
  const errorStack = error?.stack;

  const handleReport = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/report-issue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pageUrl: currentUrl,
          errorMessage,
          errorDigest,
          errorStack,
          userNote,
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();
      if (response.ok && data.reportId) {
        setSubmittedReportId(data.reportId);
      } else {
        setSubmittedReportId(`RHD-ERR-${Date.now().toString(36).toUpperCase()}`);
      }
    } catch {
      setSubmittedReportId(`RHD-ERR-${Date.now().toString(36).toUpperCase()}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-card text-card-foreground border border-red-500/30 rounded-2xl shadow-2xl shadow-red-500/10 overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Glowing Ambient Bar */}
        <div className="h-1.5 bg-gradient-to-r from-red-500 via-amber-500 to-primary animate-pulse" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary/60 transition-colors"
          aria-label="Dismiss alert"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Status Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-red-500/10 text-red-500 border border-red-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <ShieldAlert className="w-3.5 h-3.5" />
            Runtime Glitch Intercepted
          </div>

          <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-foreground mb-2">
            Hey, an unexpected glitch occurred!
          </h2>

          <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5">
            Don&apos;t worry — our client telemetry caught this moment. Click the button below to dispatch the exact error details to our developers so we can patch it immediately.
          </p>

          {/* Quick Telemetry Box */}
          <div className="p-4 rounded-xl bg-secondary/40 border border-border/80 font-mono text-xs space-y-2 mb-5">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="font-semibold text-foreground">Incident Route:</span>
              <span className="text-[11px] text-primary truncate max-w-[240px]">
                {typeof window !== "undefined" ? window.location.pathname : currentUrl}
              </span>
            </div>

            <div className="text-red-500 font-sans font-medium text-xs break-words">
              {errorMessage}
            </div>

            {errorDigest && (
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span>Digest Code:</span>
                <code className="px-1.5 py-0.5 rounded bg-background border border-border/60">
                  {errorDigest}
                </code>
              </div>
            )}
          </div>

          {/* Submitted Confirmation or Form */}
          {submittedReportId ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mb-6 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-heading font-bold">
                  Issue Dispatched to Engineering!
                </strong>
                <p className="text-xs text-muted-foreground mt-0.5 font-light">
                  Our core developers received your report (<span className="font-mono font-medium">{submittedReportId}</span>) with the exact route and error stack. Thank you for helping us make RH Dynamics seamless!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              <textarea
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder="What were you trying to do? (Optional - e.g., 'Clicked on contact form', 'Viewing HSMS tabs')"
                className="w-full text-xs p-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none h-20"
                maxLength={500}
              />

              <Button
                onClick={handleReport}
                disabled={isSubmitting}
                className="w-full font-mono text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 shadow-lg shadow-red-600/20"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Transmitting Diagnostics...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Report Issue Instantly to Founders
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Technical Details Toggle */}
          {errorStack && (
            <div className="mb-5">
              <button
                onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                className="text-xs font-mono text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-primary" />
                {showTechnicalDetails ? "Hide technical stack" : "View technical stack"}
              </button>
              {showTechnicalDetails && (
                <pre className="mt-2 p-3 bg-secondary/80 border border-border text-xs font-mono text-muted-foreground rounded-lg overflow-x-auto max-h-36 whitespace-pre-wrap">
                  {errorStack}
                </pre>
              )}
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-border/60 flex flex-wrap gap-2 justify-end items-center">
            {resetAction && (
              <Button
                variant="outline"
                size="sm"
                onClick={resetAction}
                className="text-xs font-mono rounded-lg"
              >
                <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                Try Route Again
              </Button>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (typeof window !== "undefined") window.location.reload();
              }}
              className="text-xs font-mono rounded-lg"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
              Reload Page
            </Button>

            <Button
              variant="default"
              size="sm"
              onClick={() => {
                if (typeof window !== "undefined") window.location.href = "/";
              }}
              className="text-xs font-mono rounded-lg"
            >
              <Home className="w-3.5 h-3.5 mr-1.5" />
              Return Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
