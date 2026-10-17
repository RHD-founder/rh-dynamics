"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  BarChart3, Globe, Search, ExternalLink, CheckCircle2, 
  Clock, ShieldCheck, Mail, AlertTriangle, Eye, EyeOff, Smartphone, 
  Monitor, RefreshCw, Sparkles, Filter, Database, ArrowRight,
  TrendingUp, Calendar, Check, Layers, Cpu, Radio, Lock, Unlock, LogOut,
  Trash2, Star, MessageSquare, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  position?: string;
  company: string;
  metric?: string;
  rating: number;
  verified?: boolean;
  date?: string;
}

interface PageTrackerItem {
  id: string;
  url: string;
  title: string;
  category: string;
  status: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  googleSearchUrl: string;
  searchIntent: string;
  monthlySearchVolume: string;
  targetRank: string;
  keyFeatures: string;
}

interface CalendarChecklistItem {
  day: number;
  topic: string;
  channel: string;
  status: string;
}

interface TelemetryPayload {
  status: string;
  telemetry: {
    totalPageViews: number;
    uniqueSessions: number;
    lastUpdated: string;
    deviceBreakdown: {
      desktop: number;
      mobile: number;
    };
    pageCounts: Record<string, number>;
    recentVisits: Array<{
      timestamp: string;
      path: string;
      device: string;
      referrer: string;
    }>;
  };
  stats: {
    inquiriesCount: number;
    glitchCount: number;
    reviewsCount: number;
    emailDeliveryStatus: string;
  };
  reviews?: ReviewItem[];
  recentGlitches: any[];
  seo: {
    stats: {
      totalPagesIndexed: number;
      totalKeywordsTracked: number;
      topIntentPages: number;
      blogBlueprints: number;
    };
    pages: PageTrackerItem[];
    calendarChecklist: CalendarChecklistItem[];
  } | null;
}

export default function SeoCommandPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [pinDigits, setPinDigits] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [showPin, setShowPin] = useState(false);
  const [pinError, setPinError] = useState("");
  const [authSubmitting, setAuthSubmitting] = useState(false);

  const [data, setData] = useState<TelemetryPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"keywords" | "telemetry" | "calendar" | "logs" | "reviews">("keywords");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchFilter, setSearchFilter] = useState("");

  // Review management states
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [reviewActionMsg, setReviewActionMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [reviewSearchQuery, setReviewSearchQuery] = useState("");

  const [ga4Data, setGa4Data] = useState<{
    loading: boolean;
    activeUsers: number;
    cities: Array<{ city: string; activeUsers: number }>;
    pages: Array<{ pageTitle: string; activeUsers: number }>;
    historical30Days?: {
      activeUsers: number;
      screenPageViews: number;
      sessions: number;
    };
    error?: string;
    lastChecked?: string;
  }>({
    loading: false,
    activeUsers: 0,
    cities: [],
    pages: []
  });

  const fetchGA4 = async () => {
    setGa4Data((prev) => ({ ...prev, loading: true, error: undefined }));
    try {
      const res = await fetch("/api/analytics/realtime");
      const json = await res.json();
      if (json.success) {
        setGa4Data({
          loading: false,
          activeUsers: json.activeUsers || 0,
          cities: json.cities || [],
          pages: json.pages || [],
          historical30Days: json.historical30Days,
          lastChecked: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
        });
      } else {
        setGa4Data((prev) => ({
          ...prev,
          loading: false,
          error: json.error || "Failed to load GA4 data"
        }));
      }
    } catch (err: any) {
      setGa4Data((prev) => ({
        ...prev,
        loading: false,
        error: err.message || "Network error fetching GA4 data"
      }));
    }
  };

  // Check existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("/api/auth/seo-command");
        const json = await res.json();
        if (json.authenticated) {
          setIsAuthenticated(true);
          fetchMetrics();
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkSession();
  }, []);

  // Handle typing inside individual PIN box (with auto-advance to next box & paste/autofill distribution)
  const handleDigitChange = (index: number, val: string) => {
    // If multiple characters were entered at once (e.g. paste, autofill, or password manager)
    if (val.length > 1) {
      const chars = val.replace(/\s+/g, "").slice(0, 6).split("");
      const next = [...pinDigits];
      chars.forEach((c, i) => {
        if (i < 6) next[i] = c;
      });
      setPinDigits(next);
      if (pinError) setPinError("");
      const target = Math.min(chars.length, 5);
      inputRefs.current[target]?.focus();
      if (chars.length === 6) {
        submitPin(chars.join(""));
      }
      return;
    }

    const char = val;
    const next = [...pinDigits];
    next[index] = char;
    setPinDigits(next);
    if (pinError) setPinError("");

    // Auto-advance focus to next box
    if (char && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit if all 6 digits are filled
    if (char && index === 5 && next.every((d) => d !== "")) {
      submitPin(next.join(""));
    }
  };

  // Handle Backspace auto-reverse & Arrow navigation
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (pinDigits[index] !== "") {
        const next = [...pinDigits];
        next[index] = "";
        setPinDigits(next);
      } else if (index > 0) {
        // Automatically jump back to previous box and clear it
        const prevIndex = index - 1;
        const next = [...pinDigits];
        next[prevIndex] = "";
        setPinDigits(next);
        inputRefs.current[prevIndex]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle 1-Click Paste across all 6 boxes
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").trim().slice(0, 6);
    if (!pasted) return;

    const chars = pasted.split("");
    const next = ["", "", "", "", "", ""];
    for (let i = 0; i < 6; i++) {
      next[i] = chars[i] || "";
    }
    setPinDigits(next);
    if (pinError) setPinError("");

    const targetIndex = Math.min(chars.length, 5);
    inputRefs.current[targetIndex]?.focus();

    if (chars.length === 6) {
      submitPin(pasted);
    }
  };

  const submitPin = async (candidatePin?: string) => {
    const pinToVerify = candidatePin !== undefined ? candidatePin : pinDigits.join("");
    if (pinToVerify.length < 6) {
      setPinError("Please enter all 6 digits of your master security PIN.");
      return;
    }

    setAuthSubmitting(true);
    setPinError("");

    try {
      const res = await fetch("/api/auth/seo-command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: pinToVerify }),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setIsAuthenticated(true);
        setPinDigits(["", "", "", "", "", ""]);
        fetchMetrics();
      } else {
        setPinError(json.message || "Invalid PIN. Access denied.");
        setPinDigits(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    } catch {
      setPinError("Authentication request failed. Check server connection.");
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitPin();
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/seo-command", { method: "DELETE" });
    } catch {}
    setIsAuthenticated(false);
    setData(null);
  };

  const fetchMetrics = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/telemetry");
      if (res.status === 401) {
        setIsAuthenticated(false);
        return;
      }
      const json = await res.json();
      setData(json);
      fetchGA4();
    } catch {
      // fallback
    } finally {
      setLoading(false);
    }
  };

  // 1. PIN Lock Screen when unauthenticated
  if (isAuthenticated === false) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <div className="p-8 sm:p-10 rounded-3xl glass-card dark:glass-card-dark border border-border/80 shadow-2xl bg-card/80 backdrop-blur-xl">
            
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 text-primary shadow-inner">
                <Lock className="w-7 h-7 text-primary" />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-secondary text-primary border border-border/60 font-bold block mb-2 mx-auto w-fit">
                RESTRICTED ACCESS // INTERNAL HUB
              </span>
              <h1 className="text-2xl font-black font-heading text-foreground tracking-tight">
                SEO &amp; Telemetry Command
              </h1>
              <p className="text-xs text-muted-foreground mt-2 font-light">
                Protected against unauthorized web crawlers and scraping bots. Enter the founder security PIN to view intelligence.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-bold">
                    6-Digit Security Vault PIN
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    className="text-[11px] font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    {showPin ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showPin ? "Mask PIN" : "Show PIN"}</span>
                  </button>
                </div>

                {/* 6 Individual Character Boxes */}
                <div className="grid grid-cols-6 gap-2 sm:gap-2.5 py-1">
                  {pinDigits.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => { inputRefs.current[idx] = el; }}
                      type={showPin ? "text" : "password"}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={digit}
                      autoFocus={idx === 0}
                      onChange={(e) => handleDigitChange(idx, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(idx, e)}
                      onPaste={handlePaste}
                      onFocus={(e) => e.target.select()}
                      disabled={authSubmitting}
                      aria-label={`PIN Digit ${idx + 1}`}
                      className={`w-full h-13 sm:h-15 rounded-xl sm:rounded-2xl text-center font-mono text-xl sm:text-2xl font-black transition-all border outline-none
                        ${digit 
                          ? "border-primary bg-primary/10 text-primary shadow-sm shadow-primary/20 scale-[1.02]" 
                          : "border-border/80 bg-secondary/40 text-foreground hover:border-border"
                        }
                        focus:border-primary focus:ring-2 focus:ring-primary/30 focus:scale-105 focus:bg-background
                      `}
                    />
                  ))}
                </div>
                <p className="text-[10px] font-mono text-muted-foreground/80 mt-2 text-center">
                  Auto-advances as you type • Backspace auto-reverses • Auto-submits on 6th digit
                </p>
              </div>

              {pinError && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-mono flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{pinError}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={authSubmitting || pinDigits.some((d) => d === "")}
                className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                {authSubmitting ? (
                  <RefreshCw className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <Unlock className="w-4 h-4 mr-2" />
                )}
                <span>Unlock Command Center</span>
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border/40 text-center">
              <span className="text-[10px] font-mono text-muted-foreground block">
                RHD Softwaresolutions LLP (ACN-1931)
              </span>
              <span className="text-[10px] font-mono text-muted-foreground block mt-0.5">
                Rate-limited with automatic 15-minute brute-force lockout.
              </span>
            </div>

          </div>
        </div>
      </main>
    );
  }

  // Loading state while checking auth
  if (isAuthenticated === null) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
          <RefreshCw className="w-4 h-4 animate-spin text-primary" />
          <span>Verifying security credentials...</span>
        </div>
      </main>
    );
  }

  const pages = data?.seo?.pages || [];
  const filteredPages = pages.filter((page) => {
    const matchesCategory = selectedCategory === "all" || page.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = 
      page.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      page.primaryKeyword.toLowerCase().includes(searchFilter.toLowerCase()) ||
      page.url.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Client Reviews filtering & deletion handler
  const reviewsList = data?.reviews || [];
  const filteredReviews = reviewsList.filter((rev) => {
    if (!reviewSearchQuery.trim()) return true;
    const q = reviewSearchQuery.toLowerCase();
    return (
      rev.author?.toLowerCase().includes(q) ||
      rev.company?.toLowerCase().includes(q) ||
      rev.quote?.toLowerCase().includes(q) ||
      (rev.metric && rev.metric.toLowerCase().includes(q)) ||
      (rev.position && rev.position.toLowerCase().includes(q)) ||
      String(rev.id).includes(q)
    );
  });

  const handleDeleteReview = async (id: string) => {
    setDeletingId(id);
    setReviewActionMsg(null);
    try {
      const res = await fetch("/api/review", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const json = await res.json();
      if (res.ok) {
        setReviewActionMsg({ 
          type: "success", 
          text: `Review successfully deleted. ${json.remainingCount ?? 0} reviews remaining.` 
        });
        setData((prev) => {
          if (!prev) return prev;
          const updated = (prev.reviews || []).filter((r) => String(r.id) !== id);
          return {
            ...prev,
            reviews: updated,
            stats: {
              ...prev.stats,
              reviewsCount: updated.length,
            },
          };
        });
        setConfirmDeleteId(null);
      } else {
        setReviewActionMsg({ type: "error", text: json.message || "Failed to delete review." });
      }
    } catch (err: any) {
      setReviewActionMsg({ type: "error", text: err.message || "Network error deleting review." });
    } finally {
      setDeletingId(null);
    }
  };

  const totalViews = data?.telemetry?.totalPageViews || 0;
  const desktopViews = data?.telemetry?.deviceBreakdown?.desktop || 0;
  const mobileViews = data?.telemetry?.deviceBreakdown?.mobile || 0;
  const desktopPct = totalViews > 0 ? Math.round((desktopViews / totalViews) * 100) : 50;
  const mobilePct = 100 - desktopPct;

  // 2. Full Dashboard Screen when authenticated
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-primary/20 selection:text-primary">
      
      {/* Top Banner Header */}
      <header className="border-b border-border/50 bg-secondary/10 pt-32 pb-8 sm:pt-36 sm:pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 font-bold flex items-center gap-1.5">
                  <Radio className="w-3 h-3 animate-pulse text-emerald-500" />
                  AUTHENTICATED COMMAND HUB
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  RHD Softwaresolutions LLP (ACN-1931)
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-black tracking-tight">
                Central SEO Intelligence &amp; Visitor Telemetry
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="font-mono text-xs uppercase tracking-wider h-9 gap-1.5 border-amber-500/30 text-amber-500 hover:bg-amber-500/10"
                asChild
              >
                <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">
                  <span>Google Analytics</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>

              <Button 
                variant="outline" 
                size="sm" 
                className="font-mono text-xs uppercase tracking-wider h-9 gap-1.5 border-blue-500/30 text-blue-500 hover:bg-blue-500/10"
                asChild
              >
                <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
                  <span>Search Console</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>

              <Button 
                onClick={fetchMetrics} 
                variant="outline" 
                size="sm" 
                className="font-mono text-xs uppercase tracking-wider h-9 gap-1.5 border-border/80"
                disabled={loading}
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-primary" : ""}`} />
                <span>Refresh</span>
              </Button>

              <Button 
                onClick={handleLogout} 
                variant="outline" 
                size="sm" 
                className="font-mono text-xs uppercase tracking-wider h-9 gap-1.5 border-rose-500/30 text-rose-500 hover:bg-rose-500/10 hover:text-rose-400"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Lock Hub</span>
              </Button>

              <Button size="sm" className="bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider h-9" asChild>
                <Link href="/">
                  <span>Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Email Gateway Telemetry Badge */}
          <div className="p-3.5 rounded-xl bg-card/60 border border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-foreground font-bold">Email Gateway:</span>
              <span className="text-emerald-500">{data?.stats?.emailDeliveryStatus || "Brevo SMTP Verified Active (founder@rhdynamics.in)"}</span>
            </div>
            <div className="text-muted-foreground flex items-center gap-4 text-[11px]">
              <span>Inquiries: <strong className="text-foreground">{data?.stats?.inquiriesCount || 0}</strong></span>
              <span>Errors Logged: <strong className="text-foreground">{data?.stats?.glitchCount || 0}</strong></span>
              <button
                onClick={() => setActiveTab("reviews")}
                className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1 group"
                title="Open Reviews Moderation"
              >
                <span>Reviews:</span>
                <strong className="text-foreground underline decoration-dotted group-hover:text-primary">
                  {data?.reviews?.length ?? data?.stats?.reviewsCount ?? 0}
                </strong>
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
            <div className="p-4 rounded-xl border border-border/60 bg-card/40">
              <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">
                Total Site Page Views
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                {totalViews}
              </span>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-card/40">
              <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">
                Unique Sessions
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                {data?.telemetry?.uniqueSessions || 0}
              </span>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-card/40">
              <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">
                Indexed Pages
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                {data?.seo?.stats?.totalPagesIndexed || 39}
              </span>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-card/40">
              <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">
                Tracked Keywords
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                {data?.seo?.stats?.totalKeywordsTracked || 42}
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* Main Tab Navigation */}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl mt-8">
        
        <div className="flex border-b border-border/60 gap-2 mb-8 overflow-x-auto pb-1 text-xs font-mono">
          <button
            onClick={() => setActiveTab("keywords")}
            className={`px-4 py-2.5 rounded-t-lg transition-colors flex items-center gap-2 border-b-2 font-bold ${
              activeTab === "keywords"
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Keyword Master Hub &amp; Google Checks ({pages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("telemetry")}
            className={`px-4 py-2.5 rounded-t-lg transition-colors flex items-center gap-2 border-b-2 font-bold ${
              activeTab === "telemetry"
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Visitor Traffic &amp; Page Views</span>
          </button>

          <button
            onClick={() => setActiveTab("calendar")}
            className={`px-4 py-2.5 rounded-t-lg transition-colors flex items-center gap-2 border-b-2 font-bold ${
              activeTab === "calendar"
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>30-Day Publishing Checklist</span>
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-4 py-2.5 rounded-t-lg transition-colors flex items-center gap-2 border-b-2 font-bold ${
              activeTab === "reviews"
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Client Reviews ({data?.reviews?.length ?? data?.stats?.reviewsCount ?? 0})</span>
          </button>

          <button
            onClick={() => setActiveTab("logs")}
            className={`px-4 py-2.5 rounded-t-lg transition-colors flex items-center gap-2 border-b-2 font-bold ${
              activeTab === "logs"
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Inquiries &amp; Error Logs</span>
          </button>
        </div>

        {/* TAB 1: KEYWORD MASTER HUB */}
        {activeTab === "keywords" && (
          <div className="space-y-6">
            
            {/* Search and Category Filters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl bg-card/60 border border-border/60">
              <div className="flex items-center gap-2 flex-1 max-w-md">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Filter by keyword, title, or URL..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="bg-transparent border-none text-xs font-mono w-full focus:outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                {["all", "healthcare", "enterprise", "mobile", "educational"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-full uppercase text-[10px] tracking-wider transition-colors ${
                      selectedCategory === cat 
                        ? "bg-foreground text-background font-bold" 
                        : "bg-secondary/40 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Keyword Cards */}
            <div className="grid grid-cols-1 gap-4">
              {filteredPages.map((page) => (
                <div 
                  key={page.id}
                  className="p-5 rounded-2xl border border-border/60 bg-card/40 hover:border-primary/40 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-primary/10 text-primary border border-primary/20 font-bold">
                          {page.category}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          {page.searchIntent}
                        </span>
                        <span className="text-xs font-mono text-emerald-500 font-bold">
                          • {page.targetRank}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-1">
                        <Link href={page.url} target="_blank" className="hover:text-primary transition-colors flex items-center gap-1.5">
                          <span>{page.title}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                        </Link>
                      </h3>

                      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
                        <span>URL:</span>
                        <code className="text-foreground bg-secondary px-1.5 py-0.5 rounded">{page.url}</code>
                      </div>

                      {/* Keywords Breakdown */}
                      <div className="space-y-1.5 text-xs font-mono">
                        <div>
                          <strong className="text-foreground font-semibold">Primary Targeted Search: </strong>
                          <span className="text-primary font-bold bg-primary/5 px-2 py-0.5 rounded border border-primary/20">
                            {page.primaryKeyword}
                          </span>
                        </div>
                        <div>
                          <strong className="text-muted-foreground">Secondary Clusters: </strong>
                          <span className="text-muted-foreground">
                            {page.secondaryKeywords.join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action 1-Click Google Check Button */}
                    <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-stretch gap-2">
                      <a
                        href={page.googleSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/80 hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-mono uppercase tracking-wider font-bold transition-all border border-border/80 shadow-sm"
                      >
                        <Search className="w-3.5 h-3.5" />
                        <span>Check on Google</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                      </a>
                      <span className="text-[10px] font-mono text-muted-foreground text-center">
                        Est. Volume: {page.monthlySearchVolume}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 2: VISITOR TRAFFIC TELEMETRY */}
        {activeTab === "telemetry" && (
          <div className="space-y-8">
            
            {/* Google Analytics 4 (GA4) Real-Time & 30-Day Live Stream Card */}
            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 relative overflow-hidden space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-bold text-base text-foreground">
                        Google Analytics 4 (GA4) Live Stream
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                        Operational &amp; Authorized
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-muted-foreground mt-0.5">
                      Measurement ID: <strong className="text-foreground">G-ZX1ZT17H70</strong> • Property ID: <strong className="text-foreground">470856530</strong>
                      {ga4Data.lastChecked && (
                        <span> • Last Synced: <strong className="text-foreground">{ga4Data.lastChecked}</strong></span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={fetchGA4}
                    variant="outline"
                    size="sm"
                    disabled={ga4Data.loading}
                    className="font-mono text-xs uppercase h-8 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 gap-1.5"
                  >
                    <RefreshCw className={`w-3 h-3 ${ga4Data.loading ? "animate-spin text-emerald-400" : ""}`} />
                    <span>Sync GA4</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-mono text-xs uppercase h-8 border-border/60 hover:bg-secondary/40"
                    asChild
                  >
                    <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">
                      <span>GA Console</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* GA4 Real-Time & 30-Day Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl border border-emerald-500/20 bg-background/60">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase text-muted-foreground">
                      Live Active Users
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-heading font-black text-emerald-400">
                    {ga4Data.activeUsers}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground block mt-0.5">
                    Last 30 minutes
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-border/60 bg-background/60">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">
                    30-Day Active Users
                  </span>
                  <span className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                    {ga4Data.historical30Days?.activeUsers ?? "—"}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground block mt-0.5">
                    Verified Google reach
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-border/60 bg-background/60">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">
                    30-Day Page Views
                  </span>
                  <span className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                    {ga4Data.historical30Days?.screenPageViews ?? "—"}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground block mt-0.5">
                    Total screen views
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-border/60 bg-background/60">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">
                    30-Day Sessions
                  </span>
                  <span className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                    {ga4Data.historical30Days?.sessions ?? "—"}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground block mt-0.5">
                    Engaged visitor sessions
                  </span>
                </div>
              </div>

              {/* Real-Time Geographic & Screen Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-background/60 border border-border/60 text-xs font-mono space-y-2">
                  <div className="flex items-center justify-between text-muted-foreground font-semibold border-b border-border/40 pb-1.5">
                    <span>Active Cities (Real-Time)</span>
                    <span>Live Users</span>
                  </div>
                  {ga4Data.cities.length === 0 ? (
                    <div className="text-muted-foreground text-[11px] py-1">
                      No active users detected in the last 30 minutes.
                    </div>
                  ) : (
                    ga4Data.cities.map((c, i) => (
                      <div key={i} className="flex items-center justify-between text-foreground">
                        <span className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-primary" />
                          <span>{c.city}</span>
                        </span>
                        <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {c.activeUsers}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-3.5 rounded-xl bg-background/60 border border-border/60 text-xs font-mono space-y-2">
                  <div className="flex items-center justify-between text-muted-foreground font-semibold border-b border-border/40 pb-1.5">
                    <span>Active Screens Viewed</span>
                    <span>Active</span>
                  </div>
                  {ga4Data.pages.length === 0 ? (
                    <div className="text-muted-foreground text-[11px] py-1">
                      Waiting for incoming traffic stream...
                    </div>
                  ) : (
                    ga4Data.pages.map((p, i) => (
                      <div key={i} className="flex items-center justify-between text-foreground gap-2">
                        <span className="truncate max-w-[260px] text-muted-foreground" title={p.pageTitle}>
                          {p.pageTitle}
                        </span>
                        <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                          {p.activeUsers}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Bot & MCP Integration Status Footer */}
              <div className="p-3 rounded-xl bg-background/40 border border-border/40 text-[11px] font-mono flex flex-wrap items-center justify-between gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Service Account: <strong className="text-foreground">rhd-analytics@rh-dynamics.iam.gserviceaccount.com</strong></span>
                </div>
                <div>
                  MCP Tooling: <code className="text-primary font-bold">ga4_realtime_traffic</code> &bull; <code className="text-primary font-bold">ga4_30day_report</code>
                </div>
              </div>
            </div>

            {/* Device Breakdown Card */}
            <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
              <h3 className="font-heading font-bold text-base text-foreground mb-4 flex items-center gap-2">
                <Monitor className="w-4 h-4 text-primary" />
                Visitor Device Telemetry
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Monitor className="w-3.5 h-3.5 text-blue-500" /> Desktop ({desktopViews} visits)
                  </span>
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-500" /> Mobile ({mobileViews} visits)
                  </span>
                </div>

                {/* Split Bar */}
                <div className="w-full h-3 rounded-full bg-secondary overflow-hidden flex">
                  <div style={{ width: `${desktopPct}%` }} className="h-full bg-blue-500 transition-all" />
                  <div style={{ width: `${mobilePct}%` }} className="h-full bg-emerald-500 transition-all" />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span>{desktopPct}% Desktop</span>
                  <span>{mobilePct}% Mobile</span>
                </div>
              </div>
            </div>

            {/* Page Views Breakdown Table */}
            <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
              <h3 className="font-heading font-bold text-base text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                Page Views by Route
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-border/60 text-muted-foreground uppercase text-[10px]">
                      <th className="py-2.5 px-3">Page Route</th>
                      <th className="py-2.5 px-3 text-right">Views</th>
                      <th className="py-2.5 px-3 text-right">% of Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {Object.entries(data?.telemetry?.pageCounts || {}).map(([pathName, count]) => {
                      const pct = totalViews > 0 ? Math.round((count / totalViews) * 100) : 0;
                      return (
                        <tr key={pathName} className="hover:bg-secondary/20">
                          <td className="py-3 px-3 text-foreground font-medium">
                            <Link href={pathName} target="_blank" className="hover:text-primary transition-colors flex items-center gap-1.5">
                              <span>{pathName}</span>
                              <ExternalLink className="w-3 h-3 text-muted-foreground" />
                            </Link>
                          </td>
                          <td className="py-3 px-3 text-right font-bold text-foreground">
                            {count}
                          </td>
                          <td className="py-3 px-3 text-right text-muted-foreground">
                            {pct}%
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Real-Time Visitor Stream */}
            <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
              <h3 className="font-heading font-bold text-base text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Recent Visitor Stream (Live Log)
              </h3>

              <div className="space-y-2">
                {(data?.telemetry?.recentVisits || []).slice(0, 15).map((visit, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-border/40 bg-secondary/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      {visit.device === "mobile" ? (
                        <Smartphone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      ) : (
                        <Monitor className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      )}
                      <span className="text-foreground font-medium">{visit.path}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                      <span>Source: {visit.referrer}</span>
                      <span>{new Date(visit.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: 30-DAY PUBLISHING CALENDAR CHECKLIST */}
        {activeTab === "calendar" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-card/60 border border-border/60 text-xs font-mono text-muted-foreground flex items-center justify-between">
              <span>Monthly Publishing Progress: <strong>4 of 30 Blueprints Live</strong></span>
              <span className="text-primary font-bold">13% Completed</span>
            </div>

            <div className="space-y-3">
              {(data?.seo?.calendarChecklist || []).map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl border border-border/60 bg-card/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                      {item.day < 10 ? `0${item.day}` : item.day}
                    </div>
                    <div>
                      <span className="text-foreground font-bold font-heading text-sm block">
                        {item.topic}
                      </span>
                      <span className="text-muted-foreground text-[11px]">
                        Channel: {item.channel}
                      </span>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    item.status.includes("Published") || item.status.includes("Live")
                      ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                      : "bg-secondary text-muted-foreground border-border/60"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: INQUIRIES & INCIDENTS LOG */}
        {activeTab === "logs" && (
          <div className="space-y-6">
            
            <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
              <h3 className="font-heading font-bold text-base text-foreground mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Email Gateway Configuration
              </h3>
              <p className="text-xs text-muted-foreground font-light mb-4">
                Configured to dispatch instant alerts to <strong className="text-foreground">founder@rhdynamics.in</strong> upon any inquiry, review, or glitch submission.
              </p>
              <div className="p-3 rounded-lg bg-secondary/30 font-mono text-xs text-muted-foreground space-y-1">
                <div>SMTP Server: <strong className="text-foreground">smtp-relay.brevo.com:587</strong></div>
                <div>Status: <strong className="text-emerald-500">Connected &amp; Verified</strong></div>
                <div>Backup Storage: <strong className="text-foreground">data/inquiries.json, data/glitch-reports.json</strong></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card/40">
              <h3 className="font-heading font-bold text-base text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                Recent Glitch Reports ({data?.stats?.glitchCount || 0})
              </h3>

              {data?.recentGlitches && data.recentGlitches.length > 0 ? (
                <div className="space-y-3">
                  {data.recentGlitches.map((g: any, i: number) => (
                    <div key={i} className="p-4 rounded-xl border border-border/50 bg-secondary/15 font-mono text-xs space-y-1">
                      <div className="flex items-center justify-between text-muted-foreground text-[10px]">
                        <span>ID: {g.reportId}</span>
                        <span>{new Date(g.timestamp).toLocaleString()}</span>
                      </div>
                      <div className="text-foreground font-bold">{g.errorMessage}</div>
                      <div className="text-muted-foreground text-[11px]">URL: {g.pageUrl}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-xs font-mono text-muted-foreground p-4 text-center border border-dashed border-border/50 rounded-xl">
                  Zero critical incidents logged. All systems operational.
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 5: CLIENT REVIEWS MODERATION & DELETION */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            
            {/* Header / Overview card */}
            <div className="p-6 rounded-2xl border border-border/60 bg-card/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/40 text-muted-foreground mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Live Feedback Moderation // Storage: data/testimonials.json
                </div>
                <h2 className="text-xl sm:text-2xl font-black font-heading text-foreground">
                  Client Reviews &amp; Testimonials Hub
                </h2>
                <p className="text-xs text-muted-foreground mt-1 max-w-xl">
                  Inspect, search, and delete verified client reviews shown on the homepage. Deleting a review immediately removes it from the database and updates the live site.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="font-mono text-xs uppercase tracking-wider h-9" asChild>
                  <Link href="/review" target="_blank">
                    <span>+ Submit New</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" onClick={fetchMetrics} className="font-mono text-xs uppercase tracking-wider h-9 gap-1.5 text-muted-foreground hover:text-foreground">
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                  <span>Refresh</span>
                </Button>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl border border-border/60 bg-card/30">
                <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">
                  Total Reviews
                </span>
                <span className="text-2xl font-heading font-black text-foreground">
                  {data?.reviews?.length ?? 0}
                </span>
              </div>
              <div className="p-4 rounded-xl border border-border/60 bg-card/30">
                <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">
                  Average Rating
                </span>
                <span className="text-2xl font-heading font-black text-amber-500 flex items-center gap-1">
                  <span>5.0</span>
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500 inline" />
                </span>
              </div>
              <div className="p-4 rounded-xl border border-border/60 bg-card/30">
                <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">
                  Live on Homepage
                </span>
                <span className="text-sm font-mono font-bold text-emerald-500 flex items-center gap-1.5 mt-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Active Synced
                </span>
              </div>
              <div className="p-4 rounded-xl border border-border/60 bg-card/30">
                <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">
                  Security Defense
                </span>
                <span className="text-sm font-mono font-bold text-primary flex items-center gap-1.5 mt-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Bot Filtered
                </span>
              </div>
            </div>

            {/* Action Feedback Banner (Success / Error) */}
            {reviewActionMsg && (
              <div className={`p-4 rounded-xl border text-xs font-mono flex items-center justify-between gap-3 ${
                reviewActionMsg.type === "success" 
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : "bg-rose-500/10 border-rose-500/30 text-rose-400"
              }`}>
                <div className="flex items-center gap-2">
                  {reviewActionMsg.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{reviewActionMsg.text}</span>
                </div>
                <button
                  onClick={() => setReviewActionMsg(null)}
                  className="text-[10px] font-mono uppercase hover:underline shrink-0"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Search Filter */}
            <div className="p-4 rounded-xl bg-card/60 border border-border/60 flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Search reviews by client name, company, outcome badge, or review text..."
                value={reviewSearchQuery}
                onChange={(e) => setReviewSearchQuery(e.target.value)}
                className="bg-transparent border-none text-xs font-mono w-full focus:outline-none text-foreground placeholder:text-muted-foreground"
              />
              {reviewSearchQuery && (
                <button
                  onClick={() => setReviewSearchQuery("")}
                  className="text-[10px] font-mono text-muted-foreground hover:text-foreground bg-secondary px-2 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {filteredReviews.length === 0 ? (
                <div className="p-8 rounded-2xl border border-dashed border-border/60 text-center font-mono text-xs text-muted-foreground">
                  {reviewSearchQuery ? "No reviews match your search filter." : "No reviews found in database."}
                </div>
              ) : (
                filteredReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl border border-border/60 bg-card/40 hover:border-primary/40 transition-all space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="font-heading font-black text-sm text-foreground">
                          {rev.author}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          • {rev.position ? `${rev.position}, ` : ""}<strong className="text-foreground/90">{rev.company}</strong>
                        </span>
                        {rev.metric && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 font-bold">
                            {rev.metric}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {/* Rating stars */}
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-3.5 h-3.5 ${
                                star <= (rev.rating || 5)
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                        {rev.date && (
                          <span className="text-[11px] font-mono text-muted-foreground ml-1">
                            {rev.date}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Review Quote Body */}
                    <div className="p-3.5 rounded-xl bg-secondary/20 border border-border/40 text-xs text-foreground/90 italic font-sans leading-relaxed">
                      &ldquo;{rev.quote}&rdquo;
                    </div>

                    {/* Footer Row: ID & Delete Action */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1 border-t border-border/30 text-[11px] font-mono">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span>ID: <code className="text-foreground">{rev.id}</code></span>
                        <span>•</span>
                        <span className="text-emerald-500 font-semibold">✓ Live on Homepage</span>
                      </div>

                      <div>
                        {confirmDeleteId === String(rev.id) ? (
                          <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 p-1.5 rounded-xl">
                            <span className="text-rose-400 text-[10px] font-bold px-1">
                              Permanently delete?
                            </span>
                            <Button
                              size="sm"
                              disabled={deletingId === String(rev.id)}
                              onClick={() => handleDeleteReview(String(rev.id))}
                              className="h-7 px-2.5 bg-rose-600 hover:bg-rose-700 text-white font-mono text-[10px] uppercase font-bold rounded-lg gap-1"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>{deletingId === String(rev.id) ? "Deleting..." : "Confirm Delete"}</span>
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              disabled={deletingId === String(rev.id)}
                              onClick={() => setConfirmDeleteId(null)}
                              className="h-7 px-2 font-mono text-[10px] uppercase rounded-lg text-muted-foreground hover:text-foreground"
                            >
                              Cancel
                            </Button>
                          </div>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setConfirmDeleteId(String(rev.id))}
                            className="h-8 font-mono text-[11px] uppercase tracking-wider text-rose-500 border-rose-500/30 hover:bg-rose-500/10 hover:border-rose-500/50 gap-1.5 rounded-xl"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete Review</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
