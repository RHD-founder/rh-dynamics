import type { Metadata } from "next";
import Link from "next/link";
import { 
  Globe, Video, ShieldCheck, CheckCircle2, 
  ArrowRight, Clock, Code2, Cpu, Database, 
  Zap, Calendar, Users, Terminal, Check, 
  ArrowUpRight, Sparkles, Building2, Mail, Phone,
  FileCode, Layers, Server, RefreshCw, DollarSign,
  Target, Rocket, Shield, Award, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalBookingModal } from "@/components/booking/cal-booking-modal";

export const metadata: Metadata = {
  title: "Offshore Software Development & Dedicated Engineering Teams | RH Dynamics",
  description:
    "Hire vetted offshore software engineers, full-stack Next.js/React developers, and mobile engineers from RH Dynamics. Seamless US & EU timezone overlap, 100% IP ownership, and transparent rates starting at $25–$45/hr.",
  keywords: [
    "offshore software development",
    "dedicated engineering teams india",
    "hire offshore react developers",
    "hire nextjs developers offshore",
    "software development outsourcing india",
    "offshore flutter developers",
    "bespoke saas engineering offshore",
    "offshore dev team with us timezone overlap",
    "rh dynamics offshore development"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/offshore-software-development",
  },
  openGraph: {
    title: "Offshore Software Development & Dedicated Engineering Teams | RH Dynamics",
    description:
      "Enterprise-grade software engineering for US, European, and global founders. 70% cost reduction, 4+ hours daily timezone overlap, and direct senior engineer communication.",
    url: "https://rhdynamics.in/offshore-software-development",
    images: ["/opengraph-image"],
  },
};

export default function OffshoreSoftwareDevelopmentPage() {
  const globalDifferentiators = [
    {
      icon: Clock,
      title: "Guaranteed Timezone Overlap",
      metric: "4–6 Hours Daily",
      desc: "Synchronized daily standups and live pairing across US Eastern (EST), US Pacific (PST), UK (GMT), and European (CET) business hours."
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency Without Compromise",
      metric: "Save 65%–75%",
      desc: "Top-decile senior engineers at $25–$45/hour compared to $140–$200/hour domestic US/EU contractor rates, with zero overhead."
    },
    {
      icon: Users,
      title: "Direct Senior Engineer Access",
      metric: "Zero Middlemen",
      desc: "No non-technical account managers. You collaborate directly with your dedicated engineers via Slack, GitHub, and Google Meet."
    },
    {
      icon: Shield,
      title: "100% IP & Source Code Ownership",
      metric: "Mutual NDA Bound",
      desc: "Comprehensive IP assignment and mutual NDAs under statutory corporate registration (RHD Software Solutions LLP, ACN-1931). All code lives in your private repository."
    }
  ];

  const engagementModels = [
    {
      icon: Users,
      name: "Dedicated Engineering Pod",
      tagline: "For scaling venture-backed startups and growing SaaS companies",
      rateDisplay: "$3,800 – $6,200",
      rateSubtext: "per dedicated senior engineer / month",
      badge: "Most Popular for SaaS",
      scopePill: "160 Hours / Month Full-Time",
      highlights: [
        "Full-time dedicated senior engineer (160 hrs/mo)",
        "Deep integration into your internal Slack, Jira & GitHub",
        "Continuous CI/CD deployment with automated test coverage",
        "Daily asynchronous standups & weekly video sprint demos",
        "2-week risk-free trial period with zero lock-in"
      ],
      ctaText: "Assemble Dedicated Pod",
      popular: true
    },
    {
      icon: Target,
      name: "Fixed-Scope Product Sprint",
      tagline: "For turnkey MVPs, enterprise customer portals & discrete milestones",
      rateDisplay: "Milestone-Based",
      rateSubtext: "predictable, capped scope & pricing",
      badge: null,
      scopePill: "Turnkey Architecture & MVP",
      highlights: [
        "Strict technical specifications, wireframes & roadmap",
        "Production-ready Next.js, PostgreSQL & cloud architecture",
        "Performance optimization (95+ Google Lighthouse guarantee)",
        "Integrated payment gateways, auth & automated webhooks",
        "30 days post-launch warranty and bug-fix SLA"
      ],
      ctaText: "Scope Your Sprint",
      popular: false
    },
    {
      icon: Zap,
      name: "Hourly Engineering On-Demand",
      tagline: "For targeted code audits, AI agent integration & feature surges",
      rateDisplay: "$30 – $45 / hr",
      rateSubtext: "tracked via transparent Git commit logs",
      badge: null,
      scopePill: "Flexible Velocity Surge",
      highlights: [
        "Pay strictly for tracked Git commits and pairing hours",
        "Transparent time-tracking with detailed commit logs",
        "Specialized architecture review (PostgreSQL, Next.js, Flutter)",
        "Rapid ramp-up within 48 to 72 hours",
        "Scale up or pause whenever your roadmap requires"
      ],
      ctaText: "Start On-Demand",
      popular: false
    }
  ];

  const techStacks = [
    {
      category: "Frontend & Full-Stack",
      icon: Code2,
      technologies: ["Next.js 15/16", "React 19", "TypeScript", "Tailwind CSS", "Server Components", "GraphQL / REST"]
    },
    {
      category: "Backend & Systems",
      icon: Server,
      technologies: ["Node.js", "Python / FastAPI", "PostgreSQL", "Supabase", "Redis", "Docker & Kubernetes"]
    },
    {
      category: "Mobile Engineering",
      icon: Globe,
      technologies: ["Flutter", "React Native", "Offline-First SQLite", "Cross-Platform iOS & Android", "Push Notifications"]
    },
    {
      category: "AI & Cloud Architecture",
      icon: Cpu,
      technologies: ["OpenAI / Anthropic APIs", "Agentic Workflows", "AWS / Cloudflare Edge", "CI/CD Pipelines", "Vercel Enterprise"]
    }
  ];

  const faqs = [
    {
      q: "How does RH Dynamics handle time zone differences with US and European clients?",
      a: "Our offshore engineering pods operate on flexible schedules specifically designed to provide 4 to 6 hours of synchronous working overlap with US Eastern (EST), US Pacific (PST), and Central European (CET) business hours. We run daily standups, live code reviews, and Google Meet syncs during your business day, while executing heavy deep-work cycles during off-hours so you wake up to completed pull requests."
    },
    {
      q: "Who owns the intellectual property (IP) and source code?",
      a: "You retain 100% exclusive ownership of all code, documentation, architectures, and intellectual property. Before any project commences, we execute a comprehensive mutual Non-Disclosure Agreement (NDA) and Intellectual Property Assignment Agreement under RHD Software Solutions LLP (Govt. of India LLP ACN-1931). All commits are pushed directly to your organization's private GitHub or GitLab repositories."
    },
    {
      q: "What is your hourly rate compared to hiring domestically in the US or Europe?",
      a: "Our rates range from $25 to $45 USD per hour depending on technical seniority and specialization. This delivers an approximate 65% to 75% cost reduction compared to equivalent US/EU senior engineers ($130–$200/hr) without any compromise in architectural quality, code cleanliness, or communication fluency."
    },
    {
      q: "How quickly can we assemble and onboard an engineering team?",
      a: "We maintain pre-vetted full-stack Next.js, TypeScript, and mobile engineers on staff. Following an initial 30-minute discovery video call and scope assessment, we can typically deploy dedicated engineers to your codebase within 3 to 5 business days."
    },
    {
      q: "Can we start with a paid trial before committing to a long-term contract?",
      a: "Yes. We offer a 2-week risk-free trial period for dedicated engineering teams. If you are not completely satisfied with code quality, velocity, or communication during the first two weeks, you owe nothing beyond the hours worked."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-36 pb-28 relative overflow-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "@id": "https://rhdynamics.in/offshore-software-development#service",
                "name": "Offshore Software Development & Dedicated Engineering Teams - RH Dynamics",
                "serviceType": "Offshore Software Engineering",
                "provider": {
                  "@type": "Organization",
                  "name": "RH Dynamics",
                  "legalName": "RHD Software Solutions LLP",
                  "url": "https://rhdynamics.in",
                  "email": "support@rhdynamics.in",
                  "telephone": "+918638875149"
                },
                "areaServed": ["United States", "European Union", "United Kingdom", "Netherlands", "Germany", "Poland", "Singapore", "Canada"],
                "description": "Bespoke offshore software engineering, dedicated full-stack Next.js & React developer pods, and mobile app development with US/EU timezone overlap."
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                  }
                }))
              }
            ]
          })
        }}
      />

      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs sm:text-sm font-mono text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Offshore Software Development</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-mono font-medium mb-6 shadow-sm">
            <Globe className="w-4 h-4 animate-pulse text-primary" />
            <span>Global Engineering Pods • 4–6 Hours Daily US &amp; EU Overlap</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight leading-[1.08] text-foreground mb-6">
            Scale Your Product With Top 1% <span className="text-primary">Offshore Engineers</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-10 max-w-3xl">
            Bespoke full-stack engineering, dedicated Next.js developer pods, and mobile applications for ambitious tech founders and enterprises. Senior developers starting at <strong className="text-foreground font-semibold">$25–$45/hr</strong> with synchronous US and European working overlap.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <CalBookingModal eventSlug="15min">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-full shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
                <Calendar className="w-5 h-5 mr-2 text-primary-foreground" />
                Book 15-Min Call (Cal.com)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CalBookingModal>
            <a href="mailto:support@rhdynamics.in?subject=Offshore%20Engineering%20RFP" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full h-14 px-8 text-base font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
                <Mail className="w-4 h-4 mr-2" />
                Request Developer Profiles
              </Button>
            </a>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-8 border-t border-border/60">
            <div>
              <div className="text-2xl sm:text-3xl font-black font-heading text-foreground">4–6 Hours</div>
              <div className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">Daily US/EU Overlap</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-heading text-emerald-500">70% Savings</div>
              <div className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">vs. Domestic Agency Rates</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-heading text-foreground">100% IP</div>
              <div className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">Mutual NDA &amp; Clean Repo</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-heading text-primary">&lt; 72 Hours</div>
              <div className="text-xs sm:text-sm font-mono text-muted-foreground mt-1">Rapid Pod Deployment</div>
            </div>
          </div>
        </div>

        {/* Operational Superiority */}
        <section className="mb-28 scroll-mt-32">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Operational Superiority
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mt-2 text-foreground">
              Built for Modern Product Teams That Move Fast
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light mt-3 leading-relaxed">
              We eliminated the typical friction of offshore outsourcing: no junior bench-fillers, no opaque communication silos, and zero code lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalDifferentiators.map((diff, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-card border border-border/70 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <diff.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-black font-heading text-foreground mb-1">
                    {diff.metric}
                  </div>
                  <h3 className="text-base font-bold font-heading text-foreground mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement Models & Pricing (REDESIGNED: Sleek, Aligned & Premium) */}
        <section className="mb-32 pt-16 sm:pt-20 scroll-mt-36">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Transparent Economics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-foreground leading-[1.12]">
              Flexible Engagement Models Tailored to Your Stage
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light mt-3 leading-relaxed">
              Whether you need a dedicated full-time engineering pod, a milestone-capped MVP, or fractional senior specialists for critical feature surges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
            {engagementModels.map((model, idx) => (
              <div 
                key={idx} 
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between relative transition-all duration-300 ${
                  model.popular 
                    ? "bg-gradient-to-b from-primary/15 via-card to-card border-2 border-primary shadow-2xl shadow-primary/20 ring-1 ring-primary/40 -translate-y-1 lg:-translate-y-3" 
                    : "bg-card/80 backdrop-blur-sm border border-border/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                }`}
              >
                {/* Popular Badge */}
                {model.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap ring-4 ring-background">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{model.badge}</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-border/50">
                      <model.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-semibold border border-border/40">
                      {model.scopePill}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black font-heading text-foreground mb-2">
                    {model.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light mb-6 min-h-[40px] leading-relaxed">
                    {model.tagline}
                  </p>

                  {/* Pricing Container: Fixed Uniform Height Across All 3 Cards */}
                  <div className="h-28 rounded-2xl bg-background/80 border border-border/60 p-5 mb-8 flex flex-col justify-center">
                    <div className="text-2xl sm:text-3xl font-black font-heading text-foreground tracking-tight">
                      {model.rateDisplay}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground mt-1 truncate">
                      {model.rateSubtext}
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-bold mb-3.5 pb-2 border-b border-border/40">
                    What&apos;s Included
                  </div>
                  <ul className="space-y-3 mb-8">
                    {model.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-light leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 border-t border-border/40">
                  <Link href="/contact" className="w-full block">
                    <Button 
                      variant={model.popular ? "default" : "outline"} 
                      className={`w-full h-13 rounded-full font-bold text-sm transition-all ${
                        model.popular 
                          ? "shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5" 
                          : "border-border/80 hover:bg-secondary/60 hover:border-primary/50"
                      }`}
                    >
                      <span>{model.ctaText}</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Production Tech Stacks */}
        <section className="p-8 sm:p-12 md:p-16 rounded-3xl bg-secondary/20 border border-border/70 mb-28 scroll-mt-32">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Engineering Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mt-2 text-foreground">
              Battle-Tested Stacks Engineered for High Concurrency
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light mt-3 leading-relaxed">
              We specialize in modern web performance, type-safe APIs, and reactive mobile ecosystems that scale effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStacks.map((stack, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border/50">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <stack.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-foreground">
                    {stack.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {stack.technologies.map((tech, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Global Client FAQ Section */}
        <section className="mb-28 scroll-mt-32">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mt-2 text-foreground">
              Everything You Need to Know About Hiring Offshore
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-card border border-border/60 hover:border-primary/30 transition-colors flex flex-col justify-start">
                <h3 className="text-lg font-bold font-heading text-foreground mb-3 leading-snug">
                  {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Call Booking Callout */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-secondary/20 to-background flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl shadow-primary/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono font-bold uppercase mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>Direct Founder &amp; Architect Consultation</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-foreground mb-3">
              Ready to Accelerate Your Product Roadmap?
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg font-light max-w-2xl leading-relaxed">
              Book a 15-minute technical walkthrough directly on Cal.com. We will review your product specifications, recommend the optimal tech stack, and share verified engineer profiles within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <CalBookingModal eventSlug="15min">
              <Button size="lg" className="w-full sm:w-auto h-14 px-9 text-base font-semibold rounded-full shadow-xl shadow-primary/30 hover:-translate-y-0.5 transition-all">
                <Calendar className="w-5 h-5 mr-2 text-primary-foreground" />
                Schedule via Cal.com
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CalBookingModal>
            <a href="mailto:support@rhdynamics.in?subject=Offshore%20Software%20Development%20RFP" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full h-14 px-8 text-base font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
                Send RFP via Email
              </Button>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
