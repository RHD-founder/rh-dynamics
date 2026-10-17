"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Star, ShieldCheck, CheckCircle2, ArrowRight, Send, MessageSquare, Copy, Check, ExternalLink } from "lucide-react";

export function ReviewClientPage() {
  const { toast } = useToast();
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [metric, setMetric] = useState("");
  const [quote, setQuote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const googleReviewUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "https://search.google.com/local/writereview?placeid=ChIJV72MeQCLRjcR2fqIFb2i5OY";

  // Anti-bot states
  const [hpWebsite, setHpWebsite] = useState("");
  const [hpFax, setHpFax] = useState("");
  const [formRenderedAt, setFormRenderedAt] = useState<number>(0);

  useEffect(() => {
    setFormRenderedAt(Date.now());
  }, []);

  const copyToClipboard = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {
        fallbackCopyTextToClipboard(text);
      });
    } else {
      fallbackCopyTextToClipboard(text);
    }
    setCopied(true);
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    } catch (err) {
      console.error("Fallback copy failed:", err);
    }
  };

  const handleCopyReview = () => {
    copyToClipboard(quote);
    toast({
      title: "Copied to Clipboard!",
      description: "Your review text is copied and ready to paste on Google.",
    });
  };

  const handleOpenGoogle = () => {
    copyToClipboard(quote);
    window.open(googleReviewUrl, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !company.trim() || !quote.trim()) {
      toast({
        title: "Missing Fields",
        description: "Please provide your name, company, and review message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          position: position.trim() || "Client",
          rating,
          metric: metric.trim() || "Verified Partner",
          quote: quote.trim(),
          _hp_website: hpWebsite,
          _hp_fax: hpFax,
          _form_rendered_at: formRenderedAt,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit feedback.");
      }

      setSubmitted(true);
      copyToClipboard(quote.trim());
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      toast({
        title: "Feedback Recorded",
        description: "Thank you for your review! Your words are saved and copied to your clipboard.",
      });
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="container px-4 mx-auto relative z-10 max-w-2xl">
        
        {submitted ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border/70 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider mb-3">
                ✓ Recorded on rhdynamics.in
              </span>
              <h1 className="text-2xl sm:text-3xl font-black font-heading text-foreground">
                Thank You, {name}!
              </h1>
              <p className="text-muted-foreground text-xs sm:text-sm font-light mt-1.5 max-w-md mx-auto">
                Your feedback has been successfully recorded on the RH Dynamics platform.
              </p>
            </div>

            {/* Google Business Profile 1-Click Sync Booster Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-secondary/30 border border-primary/30 text-left space-y-4 relative overflow-hidden">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-background border border-border/80 shadow-sm shrink-0">
                  {/* Google 4-Color Logo */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.43 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.57 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-heading font-bold text-sm text-foreground">
                      Post Same Review to Google (5 Seconds)
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase font-bold">
                      Already Copied! ✓
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    We saved your review on our site and copied it to your clipboard. Click below, choose your rating, paste (<kbd className="px-1.5 py-0.5 rounded bg-background border border-border text-[10px] font-mono text-foreground font-bold">Ctrl + V</kbd> or long-press paste on mobile), and hit <strong>Post</strong> on Google!
                  </p>
                </div>
              </div>

              {/* Review Quote Snippet with Copy status */}
              <div className="p-3.5 rounded-xl bg-background/80 border border-border/60 text-xs text-foreground/80 italic font-sans flex items-center justify-between gap-3">
                <span className="truncate max-w-[340px]">&ldquo;{quote}&rdquo;</span>
                <button
                  type="button"
                  onClick={handleCopyReview}
                  className="shrink-0 text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-secondary hover:bg-secondary/80 text-foreground border border-border/80 flex items-center gap-1 font-bold transition-all"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? "Copied! ✓" : "Copy Again"}</span>
                </button>
              </div>

              {/* 1-Click Action to Google */}
              <div className="pt-1">
                <Button
                  onClick={handleOpenGoogle}
                  className="w-full bg-[#4285F4] hover:bg-[#3367D6] text-white font-mono text-xs uppercase tracking-wider font-bold h-12 rounded-xl gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.43 7.33 24 12 24z"/>
                    <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.57 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                  <span>Open Google &amp; Paste Review</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/">
                <Button variant="ghost" className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground">
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border/70 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/40 text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Client Experience // Direct Feedback Portal
            </div>

            <h1 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mb-3 text-foreground">
              Share Your Experience With <span className="text-gradient">RH Dynamics</span>
            </h1>

            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
              Please take 60 seconds to share your feedback on our software, engineering response, and collaboration.
            </p>

            {/* 1-Step Workflow reassurance */}
            <div className="flex items-center gap-3 p-3.5 mb-8 rounded-2xl bg-secondary/30 border border-border/60">
              <div className="p-2 rounded-xl bg-background border border-border/80 shadow-sm shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xs">
                <span className="text-foreground font-semibold font-mono block">One-Time Review Submission</span>
                <span className="text-muted-foreground block text-[11px] mt-0.5">
                  Submitting here securely saves your review in our system and lets you post to our Google Business Profile in 1 click without re-typing.
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot traps */}
              <div className="opacity-0 absolute -z-50 pointer-events-none select-none h-0 w-0 overflow-hidden" aria-hidden="true">
                <input type="text" value={hpWebsite} onChange={(e) => setHpWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
                <input type="text" value={hpFax} onChange={(e) => setHpFax(e.target.value)} tabIndex={-1} autoComplete="off" />
              </div>

              {/* Star Rating Selector */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-bold">
                  Overall Rating *
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 text-muted-foreground hover:scale-110 transition-transform focus:outline-none"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          (hoverRating || rating) >= star
                            ? "fill-amber-400 text-amber-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-3 text-xs font-mono font-bold text-foreground">
                    {rating} of 5 Stars
                  </span>
                </div>
              </div>

              {/* Name & Company in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Your Full Name *
                  </label>
                  <Input
                    required
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 bg-secondary/20 border-border/70 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Company / Organization *
                  </label>
                  <Input
                    required
                    placeholder="Your Organization or Facility Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="h-11 bg-secondary/20 border-border/70 rounded-xl"
                  />
                </div>
              </div>

              {/* Position & Metric in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Your Title / Role
                  </label>
                  <Input
                    placeholder="Director, Founder, or Department Head"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="h-11 bg-secondary/20 border-border/70 rounded-xl"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block">
                      Key Outcome Badge (Optional)
                    </label>
                    <span className={`text-[10px] font-mono ${metric.length > 22 ? "text-amber-500 font-bold" : "text-muted-foreground"}`}>
                      {metric.length} / 26 max
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Input
                        maxLength={26}
                        placeholder="e.g. 99.9% Uptime, Great SLA"
                        value={metric}
                        onChange={(e) => setMetric(e.target.value)}
                        className="h-11 bg-secondary/20 border-border/70 rounded-xl pr-16"
                      />
                      {metric && (
                        <button
                          type="button"
                          onClick={() => setMetric("")}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-muted-foreground hover:text-foreground bg-secondary px-2 py-0.5 rounded"
                        >
                          Clear
                        </button>
                      )}
                    </div>

                    {/* Quick-Select Suggested Outcome Pills */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-muted-foreground">
                          Suggested highlights:
                        </span>
                        {metric && (
                          <span className="text-[10px] font-mono text-emerald-400">
                            Card Preview: <span className="px-1.5 py-0.5 rounded bg-secondary text-foreground font-semibold">{metric}</span>
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "99.9% Uptime",
                          "< 2-Hour SLA",
                          "Zero Wait Times",
                          "Fast Rollout",
                          "ABDM Compliant",
                          "40% Faster Billing",
                          "Recommended"
                        ].map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => setMetric(tag)}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-all ${
                              metric === tag
                                ? "bg-primary text-primary-foreground border-primary font-bold shadow-sm"
                                : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary border-border/60"
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1.5">
                  Your Review &amp; Experience *
                </label>
                <Textarea
                  required
                  rows={4}
                  placeholder="Share details about the software built, deployment speed, team responsiveness, or business outcomes achieved..."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="bg-secondary/20 border-border/70 rounded-xl leading-relaxed"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-xs font-mono uppercase tracking-wider font-bold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting Feedback..." : "Submit Verified Feedback"}
                <Send className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
