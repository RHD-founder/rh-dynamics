import type { Metadata } from "next";
import Link from "next/link";
import { 
  BookOpen, Clock, Calendar, ArrowRight, ArrowUpRight, 
  FlaskConical, Activity, Database, Smartphone, ShieldCheck, 
  Sparkles, CheckCircle2, User, Tag, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights | RH Dynamics Assam",
  description:
    "Technical guides, case studies, and engineering blueprints from RH Dynamics. Deep dives on clinical laboratory LIS analyzer interfacing, hospital ABDM compliance, custom multi-branch cloud ERP, and offline-first mobile apps in Northeast India.",
  keywords: [
    "rh dynamics blog",
    "pathology analyzer interfacing guide",
    "abdm compliance hospital assam",
    "custom erp vs tally assam",
    "offline first mobile app development northeast india",
    "software engineering blog guwahati",
    "rh core lis case studies"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/blog",
  },
  openGraph: {
    title: "Engineering Blog & Technical Insights | RH Dynamics",
    description:
      "Deep dives on healthcare software, diagnostic analyzer interfacing, enterprise cloud ERP, and digital mobility from Guwahati, Assam.",
    url: "https://rhdynamics.in/blog",
    images: ["/opengraph-image"],
  },
};

const blogArticles = [
  {
    slug: "pathology-analyzer-interfacing-guide-assam",
    title: "Complete Guide: How to Interface Sysmex, Mindray & Erba Analyzers with Cloud LIS in Assam (ASTM/HL7 Protocol)",
    excerpt: "Learn how modern diagnostic labs eliminate manual typing errors by connecting hematology and biochemistry analyzers directly to RH CORE™ LIS via bidirectional RS232 and TCP/IP LAN sockets with sub-2s WhatsApp PDF delivery.",
    category: "Healthcare & Diagnostics",
    categoryColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    icon: FlaskConical,
    readTime: "7 min read",
    date: "October 16, 2026",
    author: "RH Diagnostics Architecture Team",
    featured: true
  },
  {
    slug: "abdm-m1-m2-m3-compliance-checklist-hospitals",
    title: "ABDM M1, M2 & M3 Compliance Checklist for Hospitals and Clinics in Northeast India (2026 Guide)",
    excerpt: "A practical guide for medical directors on implementing Ayushman Bharat Digital Mission (ABDM) milestones. Discover how ABHA Scan & Share, unified health record linking, and PMJAY claims function natively in RH CORE™ HSMS.",
    category: "Regulatory & Compliance",
    categoryColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    icon: ShieldCheck,
    readTime: "9 min read",
    date: "October 14, 2026",
    author: "RH Compliance Engineering",
    featured: false
  },
  {
    slug: "custom-cloud-erp-vs-tally-assam-wholesalers",
    title: "Why Multi-Branch Wholesalers & Distributors in Assam Are Migrating from Desktop Accounting to Custom Cloud ERP",
    excerpt: "How high-volume FMCG, tea estate, and pharma distributors in Guwahati, Jorhat, and Dibrugarh solve multi-godown stock discrepancies, automated GST e-way bills, and route-based sales with real-time cloud ERP telemetry.",
    category: "Enterprise Cloud ERP",
    categoryColor: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    icon: Database,
    readTime: "8 min read",
    date: "October 11, 2026",
    author: "RH Systems & SCM Team",
    featured: false
  },
  {
    slug: "building-offline-first-mobile-apps-flutter",
    title: "Engineering Offline-First Mobile Apps for Low-Connectivity Operations in Assam & Northeast India",
    excerpt: "Building resilient cross-platform apps using Flutter and SQLite/WatermelonDB. How field sales agents and rural health workers maintain seamless operations even when cellular network connectivity drops.",
    category: "Mobile Engineering",
    categoryColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    icon: Smartphone,
    readTime: "6 min read",
    date: "October 08, 2026",
    author: "RH Mobile Labs",
    featured: false
  }
];

export default function BlogIndexPage() {
  const featuredArticle = blogArticles.find(a => a.featured) || blogArticles[0];
  const remainingArticles = blogArticles.filter(a => a.slug !== featuredArticle.slug);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      
      {/* Schema.org Blog Index */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "RH Dynamics Engineering Blog",
            "description": "Technical guides, case studies, and software blueprints for healthcare systems, cloud ERP, and mobile engineering.",
            "url": "https://rhdynamics.in/blog",
            "publisher": {
              "@type": "Organization",
              "name": "RHD Softwaresolutions LLP",
              "url": "https://rhdynamics.in",
              "logo": "https://rhdynamics.in/images/rh-official-logo.jpg"
            },
            "blogPost": blogArticles.map(article => ({
              "@type": "BlogPosting",
              "headline": article.title,
              "description": article.excerpt,
              "datePublished": "2026-10-16",
              "url": `https://rhdynamics.in/blog/${article.slug}`,
              "author": {
                "@type": "Organization",
                "name": article.author
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border/60 text-primary text-xs font-mono font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>RH DYNAMICS // ENGINEERING INSIGHTS &amp; CASE STUDIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.08] mb-6">
            Technical Blueprints, System Guides &amp;{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Healthcare Software Case Studies.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-4xl mb-8 leading-relaxed">
            Practical, in-depth architectural guides written by our software engineering team in Guwahati. Discover how to interface diagnostic analyzers, maintain ABDM compliance, synchronize multi-branch ERP warehouses, and deploy 60fps offline-first mobile apps.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono">
            <span className="text-muted-foreground font-medium">Topics:</span>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-medium">
              Pathology LIS Interfacing
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 font-medium">
              ABDM &amp; Hospital EMR
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 font-medium">
              Multi-Branch Cloud ERP
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 font-medium">
              Offline Mobile Apps
            </span>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 sm:py-20 border-b border-border/40 bg-secondary/10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Featured Blueprint
            </span>
            <span className="text-xs sm:text-sm font-mono text-muted-foreground flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-primary" /> Most Read Guide
            </span>
          </div>

          <Link 
            href={`/blog/${featuredArticle.slug}`}
            className="group block p-8 sm:p-12 md:p-14 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border font-bold ${featuredArticle.categoryColor}`}>
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-muted-foreground flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {featuredArticle.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight mb-4 text-foreground group-hover:text-primary transition-colors leading-snug">
                  {featuredArticle.title}
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-4xl">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-3 text-sm font-mono text-primary font-bold group-hover:underline">
                  <span>Read Full Technical Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-20 sm:py-28 border-b border-border/40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Recent Engineering Publications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              Knowledge Base &amp; System Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingArticles.map((article) => {
              const IconComp = article.icon;
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group p-7 sm:p-8 rounded-2xl border border-border/70 bg-card/40 hover:bg-card/80 hover:border-primary/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border font-bold ${article.categoryColor}`}>
                        {article.category}
                      </span>
                      <IconComp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-3">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </span>
                    <span className="text-primary font-bold flex items-center gap-1.5 group-hover:underline">
                      <span>Read</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 sm:py-28 border-b border-border/40 bg-secondary/15">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            Custom Systems Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
            Need Tailored Engineering For Your Healthcare Facility or Business?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Our engineering team in Guwahati designs custom software, interfaces laboratory analyzers, and automates multi-branch distribution with committed &lt; 2-hour SLAs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-wider h-13 px-8 rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all w-full sm:w-auto" asChild>
              <Link href="/contact">
                <span>Book Engineering Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider h-13 px-8 rounded-full border-border/80 w-full sm:w-auto" asChild>
              <a href="tel:+918638875149">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>Call Engineers: +91 86388 75149</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
