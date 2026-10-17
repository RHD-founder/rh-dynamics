"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, ArrowUpRight, Check, 
  Activity, ShieldCheck, Database, 
  Globe, Smartphone, Layers, Phone, Server,
  Cpu, Terminal, Sparkles, CheckCircle2, Lock,
  BarChart3, ChevronRight, FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectCategory = "all" | "healthcare" | "enterprise" | "web-mobile";

interface ProjectCaseStudy {
  id: string;
  category: "healthcare" | "enterprise" | "web-mobile";
  categoryLabel: string;
  index: string;
  title: string;
  location: string;
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  metrics: { value: string; label: string }[];
  deliverables: string[];
  link?: string;
}

const projectsData: ProjectCaseStudy[] = [
  {
    id: "rh-core-hsms",
    category: "healthcare",
    categoryLabel: "Clinical Hospital HIS (v1.0)",
    index: "01",
    title: "RH CORE™ Hospital Information System (HSMS)",
    location: "Regional Healthcare Facilities",
    tagline: "ABDM & PMJAY-Compliant Evergreen Hospital Management Platform",
    problem: "Hospitals operating on fragmented, fragile offline desktop systems, experiencing pharmacy billing leakages and struggling with statutory Ayushman Bharat integration.",
    solution: "Architected an integrated cloud hospital information system covering OPD/IPD workflows, real-time bed matrices, doctor EMR, pharmacy inventory, and direct ABHA token generation.",
    technologies: ["Next.js", "PostgreSQL", "Node.js", "ABDM M1-M3 Gateways", "Encrypted Cloud Backups"],
    metrics: [
      { value: "ABDM Ready", label: "National Health Standards" },
      { value: "Real-Time", label: "Bed Ward Tracking" },
      { value: "Automated", label: "Ayushman PMJAY Billing" }
    ],
    deliverables: [
      "Visual real-time bed & ward matrix",
      "Single-click doctor prescription pad",
      "ABHA creation & PMJAY claims engine",
      "Role-based staff security hierarchies"
    ],
    link: "/hsms"
  },
  {
    id: "rh-core-lis",
    category: "healthcare",
    categoryLabel: "Laboratory Automation (v1.0)",
    index: "02",
    title: "RH CORE™ Diagnostic LIS & Automated Pathology Engine",
    location: "Assam & Northeast Diagnostics",
    tagline: "Automated Laboratory Information System & Instant WhatsApp Report Delivery",
    problem: "Manual sample accessioning, delayed physical report collection queues, and human transcription errors between analyzer machines and printed reports.",
    solution: "Integrated automated pathology LIS with bidirectional analyzer interfacing, barcode accessioning, and instantaneous encrypted PDF report dispatch to patient WhatsApp.",
    technologies: ["LIS Engine", "WhatsApp Cloud API", "Barcode Accessioning", "PostgreSQL"],
    metrics: [
      { value: "< 2 Sec", label: "Automated WhatsApp Delivery" },
      { value: "Zero Loss", label: "Automated Machine Interfacing" },
      { value: "Direct", label: "Doctor Referral Accounting" }
    ],
    deliverables: [
      "Automated test report dispatch via WhatsApp",
      "Sample barcode labeling & accessioning",
      "Doctor referral tracking system",
      "Custom pathology test templates"
    ],
    link: "/pathology-lab-software-assam"
  },
  {
    id: "custom-erp",
    category: "enterprise",
    categoryLabel: "Enterprise Supply Chain ERP",
    index: "03",
    title: "Multi-Branch Enterprise Cloud ERP",
    location: "Regional Distribution & Operations",
    tagline: "Bespoke Enterprise Inventory, GST Ledger & Warehouse Automation",
    problem: "Regional distributors and manufacturing firms losing operational speed to spreadsheet errors, stock mismatches across warehouse branches, and slow manual billing.",
    solution: "Engineered a custom cloud ERP tailored to multi-hub distribution routes, featuring real-time multi-branch stock sync, automated GST invoicing, and staff payroll management.",
    technologies: ["PostgreSQL", "Node.js", "TypeScript", "GSTN API Integration", "Role-Based Governance"],
    metrics: [
      { value: "Sub-Second", label: "Multi-Branch Inventory Sync" },
      { value: "Automated", label: "GST & E-Way Bill Generation" },
      { value: "Real-Time", label: "Executive P&L Analytics" }
    ],
    deliverables: [
      "Multi-warehouse barcode stock sync",
      "Automated e-way bill & GST billing",
      "Role-gated operational approvals",
      "Executive real-time P&L dashboards"
    ],
    link: "/custom-erp-software-assam"
  },
  {
    id: "web-portal",
    category: "web-mobile",
    categoryLabel: "High-Performance Web",
    index: "04",
    title: "High-Speed Enterprise & Clinical Web Platforms",
    location: "Pan-India & Regional Leaders",
    tagline: "Edge-Rendered Web Applications with Direct WhatsApp Routing",
    problem: "Slow legacy websites causing high visitor bounce rates, poor Google rankings, and lost inbound inquiries for high-value services.",
    solution: "Designed and deployed modern Next.js edge platforms with structured local schema, sub-second load times, and direct WhatsApp lead routing.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Business Routing", "Schema.org SEO"],
    metrics: [
      { value: "< 1.1s", label: "Mobile Page Load Speed" },
      { value: "High", label: "Visitor Conversion Velocity" },
      { value: "Top Tier", label: "Google SERP Optimization" }
    ],
    deliverables: [
      "Bespoke responsive web platform",
      "Direct WhatsApp and CRM lead capture",
      "Structured SEO schema architecture",
      "Sub-second edge caching"
    ],
    link: "/web-development-guwahati"
  },
  {
    id: "mobile-suite",
    category: "web-mobile",
    categoryLabel: "Mobile Engineering",
    index: "05",
    title: "Cross-Platform Mobile Applications",
    location: "iOS & Android Ecosystems",
    tagline: "Native-Speed Mobile Applications with Offline Synchronization",
    problem: "Businesses needing dedicated iOS and Android mobile experiences without maintaining separate expensive codebases.",
    solution: "Engineered unified cross-platform mobile applications delivering 60fps responsiveness, push notifications, and offline data sync.",
    technologies: ["React Native", "Flutter", "REST / GraphQL APIs", "Push Services"],
    metrics: [
      { value: "60 FPS", label: "Fluid Responsive UI" },
      { value: "Unified", label: "iOS & Android Codebase" },
      { value: "Offline", label: "Data Caching & Parity" }
    ],
    deliverables: [
      "iOS and Android app store builds",
      "Biometric and push notification integration",
      "Offline data synchronization",
      "App store publishing and maintenance"
    ],
    link: "/mobile-app-development-guwahati"
  }
];

const comparisonMatrix = [
  {
    factor: "Scope of Engineering",
    rhDynamics: "Mission-critical software architectures: clinical HIS, tailored cloud ERPs, and high-performance web/mobile platforms built on modern stacks.",
    genericAgency: "Generic cosmetic templates with zero custom relational database design, backend logic, or scalable API architecture."
  },
  {
    factor: "Deployment Flexibility",
    rhDynamics: "Deploy as high-availability cloud SaaS or host on dedicated enterprise servers with source code availability for enterprise contracts.",
    genericAgency: "Locked inside rigid proprietary subscriptions with punitive export barriers and costly migration traps."
  },
  {
    factor: "Regional Integration Readiness",
    rhDynamics: "Native compliance with ABDM (ABHA M1-M3), PMJAY cashless claims, Indian GSTN APIs, and local statutory formats.",
    genericAgency: "Generic international templates lacking localized Indian compliance, tax schemes, or statutory reporting."
  },
  {
    factor: "Direct Engineering Access & SLA",
    rhDynamics: "Direct access to the software engineers who wrote your code. Rapid < 2 hour response SLA via phone, WhatsApp, video, or in-person consultation.",
    genericAgency: "Offshore ticket queues, junior non-technical account managers, and automated chatbots that take days to respond."
  }
];

export function ProjectsClientPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const categoryCounts = {
    all: projectsData.length,
    healthcare: projectsData.filter((p) => p.category === "healthcare").length,
    enterprise: projectsData.filter((p) => p.category === "enterprise").length,
    "web-mobile": projectsData.filter((p) => p.category === "web-mobile").length
  };

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        {/* Hero Section */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase border border-border bg-secondary/50 text-foreground/80 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Software Architecture Registry // Verified Solutions
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8 leading-[1.06] text-foreground">
            Engineered Systems. <br className="hidden sm:block" />
            <span className="text-gradient">Measurable Outcomes.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl font-normal leading-relaxed mb-10">
            A verified record of clinical healthcare ecosystems, bespoke cloud ERPs, and high-performance web and mobile platforms architected and deployed by RH Dynamics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-base font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Initiate Project Discovery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918638875149">
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                +91 86388 75149
              </Button>
            </a>
          </div>
        </div>

        {/* Aggregate Technical Performance Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden mb-24 border border-border/80 shadow-lg">
          {[
            { label: "Deployment Track Record", value: "20+", sub: "Verified enterprise systems" },
            { label: "Platform Uptime", value: "99.9%", sub: "Guaranteed cloud reliability" },
            { label: "Rapid Response SLA", value: "< 2 Hours", sub: "Global & regional availability" },
            { label: "Delivery Flexibility", value: "SaaS / Private", sub: "Cloud SaaS or dedicated code" }
          ].map((stat, i) => (
            <div key={i} className="bg-card/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-4">{stat.label}</span>
              <div>
                <p className="text-3xl sm:text-4xl font-black font-heading text-foreground tracking-tight">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-normal mt-1">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 border-b border-border/60 pb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Architectures", count: categoryCounts.all },
              { id: "healthcare", label: "Clinical & Healthcare", count: categoryCounts.healthcare },
              { id: "enterprise", label: "Custom ERP & Operations", count: categoryCounts.enterprise },
              { id: "web-mobile", label: "Web & Mobile Platforms", count: categoryCounts["web-mobile"] }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as ProjectCategory)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeCategory === tab.id
                    ? "bg-foreground text-background font-bold shadow-sm"
                    : "bg-secondary/30 text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-border/50"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-xs px-1.5 py-0.2 rounded-full ${
                  activeCategory === tab.id ? "bg-background text-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  0{tab.count}
                </span>
              </button>
            ))}
          </div>
          <span className="text-xs font-mono text-muted-foreground hidden lg:block">
            SHOWING {filteredProjects.length} OF {projectsData.length} SOFTWARE PLATFORMS
          </span>
        </div>

        {/* Projects Architectural Dossiers */}
        <div className="space-y-10 mb-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-2xl glass-card dark:glass-card-dark border border-border/60 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Dossier Header Bar */}
                <div className="bg-secondary/30 px-6 py-3.5 border-b border-border/50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">{project.index} //</span>
                    <span className="text-foreground font-semibold">{project.categoryLabel}</span>
                  </div>
                  <span className="text-muted-foreground">{project.location}</span>
                </div>

                <div className="p-7 sm:p-9 md:p-10">
                  <div className="max-w-4xl mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-black font-heading text-foreground tracking-tight">
                        {project.title}
                      </h3>
                      {project.link && (
                        <Link 
                          href={project.link}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-primary font-bold hover:underline shrink-0"
                        >
                          <span>Explore Platform</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-primary font-medium font-heading">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Problem vs Solution 2-Column Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm leading-relaxed">
                    <div className="p-5 sm:p-6 rounded-xl bg-secondary/20 border border-border/40">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-bold">
                        Operational Challenge
                      </span>
                      <p className="text-muted-foreground font-normal">{project.problem}</p>
                    </div>

                    <div className="p-5 sm:p-6 rounded-xl bg-secondary/30 border border-border/50">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary block mb-2 font-bold">
                        Architectural Solution
                      </span>
                      <p className="text-foreground/90 font-normal">{project.solution}</p>
                    </div>
                  </div>

                  {/* Metrics & Deliverables */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-border/40 items-start">
                    
                    {/* Metrics */}
                    <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <span className="text-2xl sm:text-3xl font-black font-heading text-foreground block tracking-tight">
                            {m.value}
                          </span>
                          <span className="text-xs text-muted-foreground font-mono uppercase font-semibold">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="lg:col-span-8">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-3 font-bold">
                        Core Module Deliverables
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                        {project.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((t) => (
                          <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-foreground/90 border border-border/60 font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Comparison Matrix */}
        <div className="mb-28">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Engineering Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mt-2">
              Why Organizations Choose RH Dynamics
            </h2>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] border border-border/60 rounded-2xl overflow-hidden bg-card">
              <div className="grid grid-cols-12 bg-secondary/40 p-4 border-b border-border/60 text-xs font-mono uppercase tracking-wider">
                <div className="col-span-3 text-muted-foreground font-bold">Engineering Dimension</div>
                <div className="col-span-5 text-primary font-bold">RH Dynamics Architecture</div>
                <div className="col-span-4 text-muted-foreground">Generic Agency / Off-The-Shelf</div>
              </div>

              {comparisonMatrix.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 p-5 border-b border-border/40 text-xs gap-4 items-start">
                  <div className="col-span-3 font-mono font-bold text-foreground">
                    {item.factor}
                  </div>
                  <div className="col-span-5 text-foreground/90 font-light leading-relaxed">
                    {item.rhDynamics}
                  </div>
                  <div className="col-span-4 text-muted-foreground font-light leading-relaxed">
                    {item.genericAgency}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
