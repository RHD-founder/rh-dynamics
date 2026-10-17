"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  Send,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Building2,
  UserCheck,
  RotateCcw,
  Lock,
  ArrowRight
} from "lucide-react";

const RATING_DESCRIPTIONS: Record<number, string> = {
  5: "5 Stars — Exceptional (Speed, Code Quality & SLA)",
  4: "4 Stars — Strong Collaboration & Results",
  3: "3 Stars — Satisfactory Delivery",
  2: "2 Stars — Needs Improvement",
  1: "1 Star — Unsatisfactory Experience",
};

const SUGGESTED_BADGES = [
  "99.9% Uptime",
  "< 2-Hour SLA",
  "Zero Wait Times",
  "Fast Rollout",
  "ABDM Compliant",
  "40% Faster Billing",
  "Recommended Partner",
  "Scale-Ready Architecture"
];

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

  const googleReviewUrl =
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ||
    "https://search.google.com/local/writereview?placeid=ChIJV72MeQCLRjcR2fqIFb2i5OY";

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

  const handleResetForm = () => {
    setName("");
    setCompany("");
    setPosition("");
    setMetric("");
    setQuote("");
    setRating(5);
    setSubmitted(false);
    setCopied(false);
    setFormRenderedAt(Date.now());
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
    <div className="min-h-screen bg-background text-foreground pt-28 sm:pt-36 pb-24 relative overflow-hidden">
      {/* Background ambient lighting & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {submitted ? (
          /* =========================================================================
             POST-SUBMISSION STATE: SPACIOUS, CELEBRATORY EXECUTIVE CARD
             ========================================================================= */
          <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-card/90 backdrop-blur-xl border border-border/80 text-center space-y-8 shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-emerald-500/15 text-emerald-500 mx-auto flex items-center justify-center border-2 border-emerald-500/30 shadow-lg shadow-emerald-500/10 animate-in zoom-in-75 duration-300">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 uppercase tracking-wider mb-3">
                ✓ Recorded on rhdynamics.in
              </span>
              <h1 className="text-3xl sm:text-4xl font-black font-heading text-foreground tracking-tight">
                Thank You, {name}!
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base font-light mt-2 max-w-lg mx-auto">
                Your feedback has been saved and will be featured on our verified client showcase.
              </p>
            </div>

            {/* Google Business Profile 1-Click Sync Booster Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-secondary/30 border border-primary/30 text-left space-y-5 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-background border border-border/80 shadow-sm shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.43 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.57 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="font-heading font-bold text-base text-foreground">
                      Post Same Review to Google (5 Seconds)
                    </h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 uppercase font-bold">
                      Already Copied! ✓
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    We saved your review on our site and copied it to your clipboard. Click below, choose your rating, paste (<kbd className="px-1.5 py-0.5 rounded bg-background border border-border text-xs font-mono text-foreground font-bold">Ctrl + V</kbd> or long-press paste on mobile), and hit <strong>Post</strong> on Google!
                  </p>
                </div>
              </div>

              {/* Review Quote Snippet with Copy status */}
              <div className="p-4 rounded-xl bg-background/90 border border-border/70 text-xs sm:text-sm text-foreground/90 italic font-sans flex items-center justify-between gap-4">
                <span className="truncate flex-1">&ldquo;{quote}&rdquo;</span>
                <button
                  type="button"
                  onClick={handleCopyReview}
                  className="shrink-0 text-xs font-mono uppercase px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground border border-border/80 flex items-center gap-1.5 font-bold transition-all shadow-sm"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied! ✓" : "Copy Again"}</span>
                </button>
              </div>

              {/* 1-Click Action to Google */}
              <div className="pt-2">
                <Button
                  onClick={handleOpenGoogle}
                  className="w-full bg-[#4285F4] hover:bg-[#3367D6] text-white font-mono text-xs sm:text-sm uppercase tracking-wider font-bold h-13 rounded-xl gap-2.5 shadow-md hover:shadow-xl transition-all"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.43 7.33 24 12 24z"/>
                    <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.57 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                  <span>Open Google &amp; Paste Review</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-2">
              <Button
                variant="outline"
                onClick={handleResetForm}
                className="text-xs font-mono uppercase tracking-wider rounded-xl gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Submit Another Review
              </Button>
              <Link href="/">
                <Button variant="ghost" className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground">
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          /* =========================================================================
             PRE-SUBMISSION STATE: SPACIOUS 2-COLUMN EXECUTIVE LAYOUT
             ========================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ---------------------------------------------------------------------
               LEFT COLUMN (5 COLS): CONTEXT, SOCIAL PROOF & GOOGLE TRUST BADGE
               --------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-36">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-primary/20 bg-primary/10 text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Client Portal</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-foreground leading-[1.12]">
                  Share Your Story With <span className="text-gradient">RH Dynamics</span>
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  Your feedback shapes our engineering precision, system uptime, and clinical compliance roadmaps. Take 60 seconds to share your experience.
                </p>
              </div>

              {/* Direct Google Review Alternative Card */}
              <div className="p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/70 shadow-sm space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-background border border-border/80 shadow-xs">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.43 7.33 24 12 24z"/>
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.57 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground block">
                        Google Business Profile
                      </span>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs font-mono font-bold text-foreground ml-1.5">5.0 / 5.0</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:text-primary/80 font-bold hover:underline"
                  >
                    <span>Direct Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Prefer reviewing directly on Google Maps? You can click the link above, or fill this form to save your story on our verified wall and auto-copy to Google in 1 tap!
                </p>
              </div>

              {/* 3-Step Flow Reassurance */}
              <div className="p-5 rounded-2xl bg-secondary/30 border border-border/60 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  How This Review Flow Works
                </span>
                <div className="space-y-2.5 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">1</span>
                    <span><strong>Verified Record:</strong> Your review is saved to rhdynamics.in and highlighted in our client testimonials wall.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">2</span>
                    <span><strong>Auto-Clipboard Copy:</strong> Upon submitting, your review text is automatically copied into your clipboard.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">3</span>
                    <span><strong>1-Click Google Boost:</strong> Click once to open our Google Business Profile and paste without re-typing.</span>
                  </div>
                </div>
              </div>

              {/* Verified Client Highlight Preview */}
              <div className="p-5 rounded-2xl bg-card/60 border border-border/50 text-xs space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block">
                  Example Verified Testimonial
                </span>
                <p className="italic text-foreground/85 font-sans leading-relaxed">
                  &ldquo;RH Dynamics delivered an exceptional digital platform that transformed our business operations. Technical precision and speed helped us increase customer engagement by 40%.&rdquo;
                </p>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="font-bold text-foreground block">Debajit Buragohain</span>
                    <span className="text-muted-foreground text-[11px]">Founder, Jilikoni</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary font-mono text-[11px] font-bold">
                    +40% Engagement
                  </span>
                </div>
              </div>

            </div>

            {/* ---------------------------------------------------------------------
               RIGHT COLUMN (7 COLS): SPACIOUS EXECUTIVE FORM CARD
               --------------------------------------------------------------------- */}
            <div className="lg:col-span-7">
              <div className="p-7 sm:p-10 rounded-3xl bg-card/90 backdrop-blur-xl border border-border/80 shadow-2xl relative overflow-hidden">
                
                {/* Form Header */}
                <div className="border-b border-border/60 pb-6 mb-7">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-1">
                    Feedback Studio
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black font-heading text-foreground">
                    Your Review &amp; Ratings
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light mt-1">
                    Please share your experience with our software development, responsiveness, and outcomes.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Honeypot traps (invisible to real humans) */}
                  <div className="opacity-0 absolute -z-50 pointer-events-none select-none h-0 w-0 overflow-hidden" aria-hidden="true">
                    <input type="text" value={hpWebsite} onChange={(e) => setHpWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
                    <input type="text" value={hpFax} onChange={(e) => setHpFax(e.target.value)} tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Section 1: Interactive Rating */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/70 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono uppercase tracking-wider text-foreground font-bold">
                        Overall Rating *
                      </label>
                      <span className="text-xs font-mono font-bold text-amber-500">
                        {rating} / 5 Stars
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 text-muted-foreground hover:scale-115 active:scale-95 transition-all focus:outline-none"
                          aria-label={`${star} star rating`}
                        >
                          <Star
                            className={`w-8 h-8 sm:w-9 sm:h-9 transition-colors ${
                              (hoverRating || rating) >= star
                                ? "fill-amber-400 text-amber-400 drop-shadow-sm"
                                : "text-muted-foreground/30 hover:text-amber-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>

                    <p className="text-xs font-mono text-muted-foreground pt-1">
                      {RATING_DESCRIPTIONS[hoverRating || rating]}
                    </p>
                  </div>

                  {/* Section 2: Reviewer Details */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-medium">
                          Your Full Name *
                        </label>
                        <Input
                          required
                          placeholder="e.g. Dr. Rajesh Sharma"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="h-12 bg-secondary/20 border-border/70 rounded-xl px-4 text-sm focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-medium">
                          Company / Organization *
                        </label>
                        <Input
                          required
                          placeholder="e.g. Medicity Clinics"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="h-12 bg-secondary/20 border-border/70 rounded-xl px-4 text-sm focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-medium">
                          Your Title / Role
                        </label>
                        <Input
                          placeholder="e.g. Medical Director, Founder"
                          value={position}
                          onChange={(e) => setPosition(e.target.value)}
                          className="h-12 bg-secondary/20 border-border/70 rounded-xl px-4 text-sm focus:border-primary"
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-medium">
                            Key Outcome Badge (Optional)
                          </label>
                          <span className={`text-[11px] font-mono ${metric.length > 22 ? "text-amber-500 font-bold" : "text-muted-foreground"}`}>
                            {metric.length}/26
                          </span>
                        </div>
                        <div className="relative">
                          <Input
                            maxLength={26}
                            placeholder="e.g. 99.9% Uptime, Great SLA"
                            value={metric}
                            onChange={(e) => setMetric(e.target.value)}
                            className="h-12 bg-secondary/20 border-border/70 rounded-xl px-4 pr-16 text-sm focus:border-primary"
                          />
                          {metric && (
                            <button
                              type="button"
                              onClick={() => setMetric("")}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground hover:text-foreground bg-secondary px-2 py-0.5 rounded"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Quick-Select Suggested Highlights (Clean Pill Bar) */}
                    <div className="pt-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-muted-foreground">
                          Suggested highlights (click to apply):
                        </span>
                        {metric && (
                          <span className="text-xs font-mono text-emerald-500 font-semibold flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            Badge: {metric}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {SUGGESTED_BADGES.map((badge) => (
                          <button
                            key={badge}
                            type="button"
                            onClick={() => setMetric(badge)}
                            className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${
                              metric === badge
                                ? "bg-primary text-primary-foreground border-primary font-bold shadow-sm"
                                : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary border-border/70"
                            }`}
                          >
                            {badge}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Review Message Textarea */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-medium">
                        Your Review &amp; Experience *
                      </label>
                      <span className="text-[11px] font-mono text-muted-foreground">
                        Be as detailed as you like
                      </span>
                    </div>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Share details about the software built, deployment speed, team responsiveness, technical reliability, or business outcomes achieved..."
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                      className="bg-secondary/20 border-border/70 rounded-2xl p-4 text-sm leading-relaxed focus:border-primary resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="space-y-3 pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-13 text-xs sm:text-sm font-mono uppercase tracking-wider font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5"
                    >
                      {isSubmitting ? "Recording Verified Feedback..." : "Submit Verified Feedback"}
                      <Send className="w-4 h-4 ml-1" />
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-muted-foreground">
                      <Lock className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Direct client verification portal. Encrypted submission.</span>
                    </div>
                  </div>

                </form>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

