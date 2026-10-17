import { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, Server, Network, Database, 
  Building2, MapPin, CheckCircle2, ArrowRight, 
  ArrowUpRight, Phone, Mail, Award, Lock, Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About RH Dynamics | Systems Engineering & Cloud Infrastructure Guwahati",
  description:
    "Learn about RHD Softwaresolutions LLP (ACN-1931), a Startup India recognized systems engineering and clinical software firm rooted in Guwahati, Assam.",
  keywords: [
    "rh dynamics about",
    "software company guwahati",
    "rhd softwaresolutions llp",
    "systems engineering assam",
    "hospital software developers northeast india"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/about",
  },
};

const corporateMilestones = [
  { label: "Statutory Incorporation", value: "LLP ACN-1931", sub: "Ministry of Corporate Affairs" },
  { label: "Startup Recognition", value: "DPIIT Certified", sub: "Startup India Initiative" },
  { label: "Enterprise Deployments", value: "20+ Platforms", sub: "Healthcare, Web & Business Systems" },
  { label: "Response SLA", value: "< 2 Hours", sub: "Worldwide via Phone, WhatsApp, Video & In-Person" }
];

const engineeringPillars = [
  {
    tag: "01 // FLEXIBLE ARCHITECTURE",
    title: "Dedicated Codebase or Managed SaaS",
    description: "Every organization has unique compliance and operational needs. For enterprise clients requiring complete independence, we deliver full dedicated codebases and isolated databases. For clinics and businesses wanting turnkey simplicity, we provide reliable managed Cloud SaaS.",
    points: ["Enterprise source code options", "Dedicated or managed PostgreSQL", "Zero vendor lock-in"]
  },
  {
    tag: "02 // CAPITAL & SUBSCRIPTION EFFICIENCY",
    title: "Transparent Cloud & Enterprise Models",
    description: "We eliminate hidden fees and predatory pricing. Whether you choose our ready-to-deploy SaaS platforms (HSMS, LIS) or a bespoke enterprise build, you get transparent, predictable pricing without artificial per-seat penalties that restrict your team's growth.",
    points: ["Turnkey SaaS for healthcare & clinics", "Custom enterprise software delivery", "Transparent, scope-based pricing"]
  },
  {
    tag: "03 // LOCALIZED INTEGRATION",
    title: "Deep Statutory Indian Compliance",
    description: "Generic US/European templates cannot handle the ground realities of Indian compliance. Our platforms natively integrate with ABDM (ABHA M1–M3), PMJAY claims, GSTN E-way billing, and biometric machines.",
    points: ["ABHA creation & linking", "GSTN automated ledger sync", "Biometric & diagnostic device APIs"]
  },
  {
    tag: "04 // RAPID SLA",
    title: "< 2-Hour Response Worldwide & In-Person",
    description: "Mission-critical software cannot wait days for automated tickets. Once you are in touch with us, we commit to a response SLA within 2 hours. We are available via direct phone, WhatsApp, website appointment, Google Meet, or in-person across Assam.",
    points: ["Direct senior engineer access", "Phone, WhatsApp & video appointments", "In-person availability across Assam & Northeast"]
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl">

        {/* Hero Section */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/30 text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Organization & Engineering Mandate // Guwahati, Assam
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8 leading-[1.08]">
            Systems Engineered for Longevity. <br className="hidden sm:block" />
            <span className="text-gradient">Rooted in Northeast India.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-10">
            RHD Softwaresolutions LLP was founded to engineer world-class software solutions rooted in Northeast India. We build clinical healthcare systems (HSMS, LIS), custom enterprise software, premium web platforms, and mobile apps with guaranteed rapid SLA.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-secondary border border-border/60 text-foreground font-semibold">
              RHD Softwaresolutions LLP (ACN-1931)
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Startup India Recognized (DPIIT)
            </div>
          </div>
        </div>

        {/* Corporate Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden mb-28 border border-border/60">
          {corporateMilestones.map((milestone, i) => (
            <div key={i} className="bg-card p-6 md:p-8 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">{milestone.label}</span>
              <div>
                <p className="text-2xl md:text-3xl font-black font-heading text-foreground tracking-tight">{milestone.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{milestone.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Origin & Operational Mandate */}
        <div className="rounded-3xl glass-card dark:glass-card-dark border border-border/60 p-8 md:p-14 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-3">
                Origins & Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mb-4">
                Why RH Dynamics Exists
              </h2>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                Officially founded on March 29th, 2025, in Guwahati, Assam, RH Dynamics was created to challenge the status quo of outdated, fragile software and offshore agency neglect in Northeast India and beyond.
              </p>
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 font-mono text-xs text-muted-foreground space-y-2">
                <div className="flex items-center justify-between">
                  <span>Legal Entity:</span>
                  <strong className="text-foreground">RHD Softwaresolutions LLP</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>LLP Identification:</span>
                  <strong className="text-foreground">ACN-1931</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Headquarters:</span>
                  <strong className="text-foreground">Golaghat, Assam (Upper Assam HQ)</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-sm text-muted-foreground font-light leading-relaxed">
              <p>
                For years, healthcare providers, distributed businesses, and modern enterprises in Assam and across India struggled with two poor choices: fragile legacy desktop software prone to crashes and data loss, or generic foreign SaaS that carried high recurring subscriptions without adapting to ground-level Indian workflows.
              </p>
              <p>
                RH Dynamics operates as a direct software engineering partner. We build modern, lightning-fast web applications, mobile platforms, and clinical systems utilizing cutting-edge stacks (Next.js, React, Node.js, PostgreSQL) paired with seamless integrations for diagnostic analyzers, biometric terminals, and compliance APIs.
              </p>
              <p>
                Whether you need dedicated enterprise code sovereignty or a turnkey cloud SaaS deployment, every system is supported directly with a committed response SLA under 2 hours via phone, WhatsApp, video conference, or in-person.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Architectural Engineering Pillars */}
        <div className="mb-28">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Engineering Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mt-2">
              Our Core Architecture Principles
            </h2>
            <p className="text-muted-foreground mt-3 text-sm font-light">
              The non-negotiable technical mandates that guide every line of code, network schema, and clinical module we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl glass-card dark:glass-card-dark border border-border/60 hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-muted-foreground block mb-3">
                    {pillar.tag}
                  </span>
                  <h3 className="text-xl font-bold font-heading mb-3 text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 space-y-2">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Hubs & Infrastructure */}
        <div className="mb-28">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Regional Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mt-2">
              On-the-Ground Engineering Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Golaghat Corporate HQ */}
            <div className="p-8 rounded-2xl border border-border/60 bg-secondary/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary mb-3 font-bold">
                  <MapPin className="w-4 h-4" /> Corporate Headquarters (HQ)
                </div>
                <h3 className="text-2xl font-black font-heading text-foreground mb-3">
                  Golaghat Corporate HQ
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                  Near AGV Bank, Goranga, Golaghat, Assam 785603. Serves as our primary registered corporate headquarters and institutional administration base.
                </p>
              </div>
              <div className="pt-4 border-t border-border/40 font-mono text-xs text-muted-foreground">
                Upper Assam Corporate HQ &amp; Operations
              </div>
            </div>

            {/* Guwahati Engineering Center */}
            <div className="p-8 rounded-2xl border border-border/60 bg-secondary/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary mb-3 font-bold">
                  <MapPin className="w-4 h-4" /> Systems Engineering Hub
                </div>
                <h3 className="text-2xl font-black font-heading text-foreground mb-3">
                  Guwahati Engineering Center
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                  Near Downtown Hospital, Urban Villa, Sarumotoria, Guwahati, Assam 781036. Houses our software engineering teams, clinical product staging, and rapid-response operations.
                </p>
              </div>
              <div className="pt-4 border-t border-border/40 font-mono text-xs text-muted-foreground">
                Rapid &lt; 2hr SLA Worldwide via Phone/WhatsApp/Video &amp; In-Person across Assam
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Discovery CTA */}
        <div className="rounded-3xl border border-border/80 p-8 md:p-14 bg-gradient-to-b from-secondary/30 to-background text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">
              Direct Technical Discovery
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-4">
              Engage Our Systems Team
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
              Speak directly with our technical partners in Guwahati. We will review your existing architecture, database schemas, and hardware setup without commercial fluff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="h-13 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                  Request Technical Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+918638875149">
                <Button variant="ghost" size="lg" className="h-13 px-8 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground">
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  +91 86388 75149
                </Button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
