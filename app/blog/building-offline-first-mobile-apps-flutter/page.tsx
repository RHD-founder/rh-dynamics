import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowLeft, Clock, Calendar, ArrowRight, 
  Smartphone, CheckCircle2, Phone, Zap, 
  WifiOff, Layers, Fingerprint, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Engineering Offline-First Mobile Apps in Assam & Northeast India | Flutter Guide",
  description:
    "How to architect resilient cross-platform Flutter and React Native mobile applications with offline-first SQLite sync and zero data loss for low-connectivity field operations across Assam and Northeast India.",
  keywords: [
    "offline first mobile app flutter assam",
    "mobile app development company in guwahati",
    "android app developers assam",
    "sqlite sync mobile apps northeast india",
    "field sales mobile app development guwahati",
    "rh dynamics mobile engineering"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/blog/building-offline-first-mobile-apps-flutter",
  },
  openGraph: {
    title: "Engineering Offline-First Mobile Apps for Low-Connectivity Operations",
    description:
      "A technical architecture guide on building 60 FPS offline-first mobile apps for enterprise field sales, healthcare workers, and delivery logistics in Assam.",
    url: "https://rhdynamics.in/blog/building-offline-first-mobile-apps-flutter",
    images: ["/opengraph-image"],
  },
};

export default function OfflineFirstMobileAppsPage() {
  return (
    <article className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      
      {/* Schema.org Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Engineering Offline-First Mobile Apps for Low-Connectivity Operations in Assam & Northeast India",
            "description": "How to architect resilient cross-platform mobile apps with offline-first SQLite sync for low-connectivity field operations.",
            "datePublished": "2026-10-08T10:00:00+05:30",
            "dateModified": "2026-10-08T10:00:00+05:30",
            "author": {
              "@type": "Organization",
              "name": "RH Mobile Labs",
              "url": "https://rhdynamics.in"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RHD Softwaresolutions LLP",
              "url": "https://rhdynamics.in",
              "logo": {
                "@type": "ImageObject",
                "url": "https://rhdynamics.in/images/rh-official-logo.jpg"
              }
            },
            "mainEntityOfPage": "https://rhdynamics.in/blog/building-offline-first-mobile-apps-flutter"
          })
        }}
      />

      {/* Header */}
      <header className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border font-bold text-cyan-500 bg-cyan-500/10 border-cyan-500/20">
              Mobile Engineering
            </span>
            <span className="text-xs sm:text-sm font-mono text-muted-foreground flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 6 min read
            </span>
            <span className="text-xs sm:text-sm font-mono text-muted-foreground flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Published October 08, 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-[1.15] mb-6">
            Engineering Offline-First Mobile Apps for Low-Connectivity Operations in Assam &amp; Northeast India
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            In rural healthcare and inter-district trade distribution across Assam, mobile cellular network connectivity frequently drops. Here is how our engineering team builds 60 FPS Flutter applications with resilient local SQLite sync.
          </p>
        </div>
      </header>

      {/* Content Body */}
      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
        <div className="prose prose-invert max-w-none space-y-8 font-light text-muted-foreground leading-relaxed">
          
          <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-foreground">
            <h3 className="font-heading font-bold text-base text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
              <WifiOff className="w-4 h-4" />
              Core Architecture Principles
            </h3>
            <ul className="text-xs sm:text-sm space-y-1.5 list-disc pl-5 font-light text-muted-foreground">
              <li><strong>Local-First Writes</strong>: All user interactions (recording orders, viewing medical reports, saving patient vitals) write immediately to local SQLite / WatermelonDB storage.</li>
              <li><strong>Optimistic UI Updates</strong>: Users never wait for infinite network loading spinners; the UI updates at 60 FPS instantly.</li>
              <li><strong>Resilient Conflict Resolution</strong>: A background sync worker continuously detects network availability and executes bidirectional timestamp reconciliation.</li>
            </ul>
          </div>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-black text-foreground mb-4">
              1. The Pitfalls of "Online-Only" Mobile Apps
            </h2>
            <p className="text-sm sm:text-base mb-4">
              When developing mobile software for enterprises operating between Guwahati, Nagaon, Tezpur, and the tea garden estates of Upper Assam, network coverage is unpredictable. Traditional apps that rely on continuous REST API calls fail abruptly with "Network Timeout" errors, causing field salespeople to lose order drafts and health workers to lose patient intake forms.
            </p>
            <p className="text-sm sm:text-base">
              At RH Dynamics, we treat cellular connectivity as an enhancement, not a prerequisite. Our mobile apps store the entire operational dataset locally with hardware-backed encryption.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-black text-foreground mb-4">
              2. Tech Stack: Flutter, SQLite &amp; WorkManager
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-border/60 bg-secondary/20">
                <strong className="text-foreground font-mono text-xs block mb-1">Flutter (Dart)</strong>
                <p className="text-xs">Compiles to native ARM machine code on Android and iOS for 60 FPS fluidity with identical pixel rendering.</p>
              </div>
              <div className="p-4 rounded-xl border border-border/60 bg-secondary/20">
                <strong className="text-foreground font-mono text-xs block mb-1">SQLite / Drift</strong>
                <p className="text-xs">High-performance relational local database with reactive queries, migration hooks, and millisecond query times.</p>
              </div>
              <div className="p-4 rounded-xl border border-border/60 bg-secondary/20">
                <strong className="text-foreground font-mono text-xs block mb-1">Background Worker</strong>
                <p className="text-xs">Android WorkManager &amp; iOS Background Tasks schedule queue reconciliation silently in the background.</p>
              </div>
            </div>
          </section>

          {/* Inline CTA Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-secondary/40 border border-primary/30 my-8 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Cross-Platform Mobile Engineering
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-foreground mb-3">
              Build Your Enterprise Mobile App With RH Dynamics
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-light max-w-xl mx-auto mb-6">
              From interactive Figma wireframes to full Google Play Store and Apple App Store approval, backed by a local &lt; 2-hour SLA in Guwahati.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="sm" className="bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider h-10 px-6" asChild>
                <Link href="/mobile-app-development-guwahati">
                  <span>Explore Mobile Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="font-mono text-xs uppercase tracking-wider h-10 px-6" asChild>
                <a href="tel:+918638875149">
                  <span>Call Mobile Lead: +91 86388 75149</span>
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
