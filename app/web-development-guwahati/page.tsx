import type { Metadata } from "next";
import Link from "next/link";
import { 
  Globe, Zap, ShieldCheck, CheckCircle2, 
  ArrowRight, Phone, Code2, Smartphone, 
  Layers, Search, Check, ArrowUpRight, 
  Sparkles, Clock, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Web Development Company in Guwahati, Assam | RH Dynamics",
  description:
    "RH Dynamics builds ultra-fast, edge-rendered web applications and websites in Guwahati, Assam. Powered by Next.js, React, and TypeScript with sub-second load times (< 1.1s), built-in local SEO schema, and direct WhatsApp booking routing.",
  keywords: [
    "web development company in guwahati",
    "website design company in assam",
    "best web developers in guwahati",
    "ecommerce website development guwahati",
    "nextjs developers assam",
    "website development cost guwahati",
    "web design agency northeast india",
    "rh dynamics web development"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/web-development-guwahati",
  },
  openGraph: {
    title: "Web Development Company in Guwahati, Assam | RH Dynamics",
    description:
      "Sub-second Next.js and React web applications built in Guwahati for local leaders and global scale.",
    url: "https://rhdynamics.in/web-development-guwahati",
    images: ["/opengraph-image"],
  },
};

export default function WebDevelopmentGuwahatiPage() {
  const performancePillars = [
    {
      title: "Sub-Second Edge Rendering",
      metric: "< 1.1s Load Time",
      desc: "Engineered on modern Next.js and React edge runtimes. 3x faster than traditional WordPress sites, resulting in higher Google ranks and zero bounce loss."
    },
    {
      title: "Engineered for Conversions",
      metric: "Direct WhatsApp Routing",
      desc: "Every button, appointment form, and product catalog routes directly into your team's WhatsApp and CRM with zero lead drop-off."
    },
    {
      title: "Built-In Structured Local SEO",
      metric: "Top Google SERP",
      desc: "Schema.org JSON-LD markup, OpenGraph cards, localized geo-coordinates, and automated sitemaps baked in from day one."
    },
    {
      title: "100% Code Ownership",
      metric: "Zero Proprietary Lock-In",
      desc: "You own the complete git repository, assets, and database schemas. No hostage situations or monthly agency maintenance traps."
    }
  ];

  const webSolutions = [
    {
      title: "Flagship Corporate Web Platforms",
      quote: "Custom Scope Quote",
      timeline: "4–6 Weeks",
      desc: "High-authority custom web platforms for hospitals, colleges, manufacturing firms, and professional consultancies looking to dominate Google in Assam.",
      features: [
        "5–8 Custom architectural pages with bespoke UI/UX",
        "Sub-second mobile speed with 100/100 Lighthouse performance",
        "Interactive appointment / inquiry forms with Brevo SMTP",
        "Local schema markup (Guwahati/Assam GeoCoordinates)"
      ]
    },
    {
      title: "E-Commerce & Digital Storefronts",
      quote: "Custom Scope Quote",
      timeline: "8–12 Weeks",
      desc: "High-speed online shopping platforms with dynamic inventory filters, Razorpay/UPI gateway integration, and automated customer SMS alerts.",
      features: [
        "High-performance product catalog & real-time search",
        "One-tap UPI, Credit Card, and NetBanking checkout",
        "Automated shipping and order dispatch tracking",
        "Admin order management and inventory sync"
      ]
    },
    {
      title: "Custom Web Applications & SaaS",
      quote: "Custom Scope Quote",
      timeline: "12–20 Weeks",
      desc: "Complex browser-based business portals, clinic booking systems, and customer workflow portals with role-based authentication.",
      features: [
        "PostgreSQL relational database architecture",
        "Secure JWT authentication and role-based access control",
        "Automated webhooks and third-party API pipelines",
        "Dedicated cloud deployment on Vercel / AWS / Docker"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Web Development in Guwahati</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/30 text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Next.js &amp; React Engineering // Guwahati, Assam
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8 leading-[1.08] text-foreground">
            Web Development Company in <br className="hidden sm:block" />
            <span className="text-gradient">Guwahati, Assam</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-8">
            Replace slow, insecure WordPress sites with modern, edge-rendered web platforms built on Next.js, React, and TypeScript. RH Dynamics crafts ultra-fast websites engineered to rank #1 on Google and turn regional traffic into confirmed clients.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/contact">
              <Button size="lg" className="h-13 px-8 text-xs font-mono uppercase tracking-wider font-bold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Start Web Project Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918638875149">
              <Button variant="outline" size="lg" className="h-13 px-7 text-xs font-mono uppercase tracking-wider font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                +91 86388 75149
              </Button>
            </a>
          </div>
        </div>

        {/* Performance Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {performancePillars.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl glass-card dark:glass-card-dark border border-border/60">
              <span className="text-xs font-mono text-primary font-bold block mb-1">0{i + 1} //</span>
              <p className="text-xl font-black font-heading text-foreground tracking-tight mb-1">{p.metric}</p>
              <h2 className="text-sm font-bold text-foreground mb-2">{p.title}</h2>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Web Solutions & Pricing Tiers */}
        <section className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Transparent Web Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mt-2">
              Website Solutions Built for Growth
            </h2>
            <p className="text-muted-foreground mt-3 text-sm font-light">
              Clear deliverables, fixed pricing scopes, and zero hidden agency subscription fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webSolutions.map((sol, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-card border border-border/70 hover:border-primary/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-3">
                    <span>Estimate:</span>
                    <span className="flex items-center gap-1 text-primary">
                      <Clock className="w-3 h-3" />
                      {sol.timeline}
                    </span>
                  </div>
                  <h3 className="text-xl font-black font-heading text-foreground mb-1">
                    {sol.title}
                  </h3>
                  <p className="text-sm font-mono font-bold tracking-wider text-primary uppercase mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    {sol.quote}
                  </p>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                    {sol.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {sol.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <Link href={`/contact?service=${encodeURIComponent(sol.title)}`} className="block">
                    <Button variant="outline" className="w-full h-11 rounded-full text-xs font-mono uppercase tracking-wider font-semibold border-border/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <span>Request Scope Quote</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Comparison */}
        <section className="p-8 sm:p-12 rounded-3xl bg-secondary/20 border border-border/70 mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Engineering Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight mt-2 text-foreground">
              Why Next.js Beats Legacy WordPress for Assam Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-card border border-border/50">
              <strong className="text-foreground block text-sm mb-2 font-heading font-bold">Zero Security Hacks</strong>
              <p className="text-muted-foreground font-light font-sans text-xs leading-relaxed">
                WordPress plugins cause 90% of local website hacks and malware crashes. Our Next.js static builds have no vulnerable PHP admin portals to exploit.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border/50">
              <strong className="text-foreground block text-sm mb-2 font-heading font-bold">3x Faster on 4G / 5G</strong>
              <p className="text-muted-foreground font-light font-sans text-xs leading-relaxed">
                Mobile visitors across Assam experience instantaneous sub-second page transitions. High speed directly reduces bounce rates and improves Google search rank.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border/50">
              <strong className="text-foreground block text-sm mb-2 font-heading font-bold">Direct Developer SLA</strong>
              <p className="text-muted-foreground font-light font-sans text-xs leading-relaxed">
                Your website is maintained by senior software engineers in Guwahati near Downtown Hospital. Fast local response times without outsourced tickets.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl border border-border/80 bg-gradient-to-b from-secondary/30 to-background flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase mb-2">
              <MapPin className="w-4 h-4" />
              <span>Guwahati Engineering Center</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-foreground mb-2">
              Ready to Upgrade Your Web Platform?
            </h3>
            <p className="text-muted-foreground text-sm font-light max-w-xl leading-relaxed">
              Connect with our Guwahati web architects for a free live performance audit of your current site and a clear roadmap for digital dominance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-12 px-7 text-xs font-mono uppercase tracking-wider font-bold rounded-full">
                Get Architecture Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918638875149" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full h-12 px-6 text-xs font-mono uppercase tracking-wider font-semibold rounded-full border-border/80">
                Call Direct: +91 86388 75149
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
