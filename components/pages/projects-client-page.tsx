"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, ArrowUpRight, Check, Building2, 
  Activity, ShieldCheck, Network, Database, 
  Layers, ExternalLink, Filter, Phone, Server,
  Cpu, Terminal, Sparkles, CheckCircle2, Lock,
  BarChart3, ChevronRight, FileText, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectCategory = "all" | "healthcare" | "infrastructure" | "software";

interface ProjectCaseStudy {
  id: string;
  category: "healthcare" | "infrastructure" | "software";
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
}

const projectsData: ProjectCaseStudy[] = [
  {
    id: "cosmomedical",
    category: "healthcare",
    categoryLabel: "Clinical Patient Ecosystem",
    index: "01",
    title: "Cosmomedical Guwahati",
    location: "Guwahati, Assam",
    tagline: "Flagship Digital Patient Ecosystem & High-Conversion Surgical Booking Architecture",
    problem: "Outdated web presence, severe patient drop-offs from slow mobile pages, and zero structured digital lead acquisition for high-value surgical procedures.",
    solution: "Engineered a high-performance Next.js medical platform coupled with full-funnel local search optimization, dynamic doctor rosters, and automated WhatsApp appointment routing.",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "WhatsApp Business API", "Local SEO SERP Engine"],
    metrics: [
      { value: "3.2x", label: "Surge in Qualified Surgical Inquiries" },
      { value: "< 1.1s", label: "Mobile Page Load Speed" },
      { value: "#1 Rank", label: "Local Google Maps Visibility" }
    ],
    deliverables: [
      "Custom medical procedures portal",
      "One-tap doctor consultation booking",
      "Dynamic doctor roster & credentials",
      "Automated WhatsApp lead alerts"
    ]
  },
  {
    id: "aps-narengi",
    category: "infrastructure",
    categoryLabel: "Campus Infrastructure & Telemetry",
    index: "02",
    title: "Army Public School Narengi",
    location: "Narengi Cantonment, Assam",
    tagline: "Campus-Wide Optical Fiber Backbone, Modern Computing Labs & CCTV Telemetry",
    problem: "Fragmented network cabling, unstable Wi-Fi across school blocks, outdated IT laboratory hardware, and unmonitored blind spots in security surveillance.",
    solution: "Designed and deployed enterprise Gigabit optical network backbones, complete server room topology, 40+ high-performance lab terminals, and high-resolution CCTV telemetry.",
    technologies: ["Optical Fiber Backbone", "Managed Layer-3 Switches", "Enterprise Firewall", "Surveillance Telemetry", "Hardware Virtualization"],
    metrics: [
      { value: "100%", label: "Campus-Wide Gigabit Coverage" },
      { value: "40+", label: "Advanced Computing Workstations" },
      { value: "Zero Downtime", label: "Redundant Network Topology" }
    ],
    deliverables: [
      "End-to-end fiber optic campus backbone",
      "Virtual computing lab architecture",
      "Enterprise perimeter surveillance setup",
      "On-site maintenance SLA & staff training"
    ]
  },
  {
    id: "spektra-diagnostics",
    category: "healthcare",
    categoryLabel: "Clinical Diagnostics & LIS",
    index: "03",
    title: "Spektra Diagnostics & Multispeciality",
    location: "Assam, Northeast India",
    tagline: "Laboratory Information Management (LIS) & Brand Authority Funnel",
    problem: "Manual patient sample logging, slow physical report collection queues, and stiff competition from multinational diagnostic chains.",
    solution: "Integrated automated pathology LIS with instant WhatsApp PDF delivery, sample barcode accessioning, and hyper-local diagnostic test discovery campaigns.",
    technologies: ["Pathology LIS Engine", "WhatsApp Cloud API", "Barcode Accessioning", "Google Ads Engine"],
    metrics: [
      { value: "< 2 Sec", label: "Automated WhatsApp Lab Delivery" },
      { value: "45%", label: "Reduction in Counter Queues" },
      { value: "2.8x", label: "Home Sample Collection Bookings" }
    ],
    deliverables: [
      "Automated test report dispatch via WhatsApp",
      "Home collection online booking portal",
      "Doctor referral tracking system",
      "Diagnostic package landing pages"
    ]
  },
  {
    id: "rh-hsms",
    category: "software",
    categoryLabel: "Clinical Hospital ERP",
    index: "04",
    title: "RH-HSMS Hospital Platform",
    location: "Regional Hospitals across Northeast",
    tagline: "ABDM & PMJAY-Compliant Cloud Hospital Management System",
    problem: "Hospitals trapped on fragile offline desktop EXEs, losing revenue to unbilled pharmacy items and struggling with mandatory Ayushman Bharat integration.",
    solution: "Developed an all-in-one cloud hospital ERP unifying admissions, bed matrices, doctor EMR, nursing station requisitions, and direct ABHA token generation.",
    technologies: ["Next.js 16", "PostgreSQL", "Node.js", "ABDM M1-M3 Gateways", "Encrypted Cloud Backups"],
    metrics: [
      { value: "40%+", label: "Patient Wait Time Reduction" },
      { value: "100%", label: "Statutory Scheme Compliance" },
      { value: "Zero Lost", label: "Integrated Pharmacy Billing" }
    ],
    deliverables: [
      "Visual real-time bed & ward matrix",
      "Single-click doctor prescription pad",
      "ABHA creation & PMJAY claims engine",
      "Role-based staff security hierarchies"
    ]
  },
  {
    id: "gate-rajdhani",
    category: "healthcare",
    categoryLabel: "Hospital Acquisition Funnel",
    index: "05",
    title: "Gate Rajdhani Hospital",
    location: "Guwahati, Assam",
    tagline: "Comprehensive Inpatient & Outpatient Growth Infrastructure",
    problem: "High emergency capacity but low digital market discovery for multispeciality inpatient admissions and specialty consultations.",
    solution: "Built a reputation management and patient acquisition funnel that positioned the hospital at the top of regional search queries for emergency and surgical care.",
    technologies: ["Brand Strategy", "Medical Content System", "Reputation Management", "Lead Tracking"],
    metrics: [
      { value: "180%+", label: "Inpatient Discovery Growth" },
      { value: "4.8★", label: "Google Review Authority" },
      { value: "24/7", label: "Automated Patient Inquiry Routing" }
    ],
    deliverables: [
      "Multispeciality department landing pages",
      "Automated review collection pipeline",
      "Emergency contact priority routing",
      "Targeted regional health awareness campaigns"
    ]
  },
  {
    id: "custom-erp",
    category: "software",
    categoryLabel: "Enterprise Supply Chain ERP",
    index: "06",
    title: "Multi-Branch Supply Chain & ERP",
    location: "Assam & Northeast Distribution",
    tagline: "Bespoke Enterprise Inventory, GST Ledger & Warehouse Automation",
    problem: "Large regional distributors losing thousands each month to spreadsheet errors, stock mismatches across branches, and slow manual billing.",
    solution: "Engineered a custom cloud ERP tailored to Northeast supply routes, featuring real-time multi-branch stock sync, automated GST invoicing, and biometric payroll.",
    technologies: ["PostgreSQL", "Node.js", "TypeScript", "Biometric Integration", "GSTN API"],
    metrics: [
      { value: "₹0", label: "Per-User Monthly License Fees" },
      { value: "100%", label: "Inventory Accuracy Across Branches" },
      { value: "85%", label: "Faster Monthly Accounts Closing" }
    ],
    deliverables: [
      "Multi-warehouse barcode stock sync",
      "Automated e-way bill & GST billing",
      "Biometric hardware payroll engine",
      "Executive real-time P&L dashboards"
    ]
  }
];

const comparisonMatrix = [
  {
    factor: "Scope of Engineering",
    rhDynamics: "Mission-critical architectures: clinical HIS, campus fiber networks, and tailored cloud ERPs with direct hardware/API integration.",
    genericAgency: "Cosmetic WordPress or Webflow templates with zero relational database design, backend logic, or hardware interfaces."
  },
  {
    factor: "Source Code & Data Sovereignty",
    rhDynamics: "100% Client-Owned. Deployable to your private cloud or on-premise hardware with dedicated isolated PostgreSQL instances.",
    genericAgency: "Locked inside proprietary SaaS subscriptions or obfuscated CMS themes with punitive export and migration penalties."
  },
  {
    factor: "Regional Integration Readiness",
    rhDynamics: "Native compliance with ABDM (ABHA M1-M3), PMJAY cashless claims, Indian GSTN APIs, and physical biometric attendance machines.",
    genericAgency: "Generic US/European plugins lacking localized Indian compliance, tax schemes, or regional hardware protocols."
  },
  {
    factor: "Direct Engineering Access & SLA",
    rhDynamics: "Local technical team based in Guwahati, Assam. Direct access to the systems architects who wrote your code with guaranteed on-site SLA.",
    genericAgency: "Offshore ticket queues, junior non-technical account managers, and automated chatbots that take days to respond."
  },
  {
    factor: "Cost & Capital Lifecycle",
    rhDynamics: "Permanent capital engineering asset. Zero per-user monthly seat tax. Unlimited growth without compounding licensing fees.",
    genericAgency: "Ever-increasing per-seat SaaS subscription penalties that multiply costs annually as your organization expands."
  }
];

export function ProjectsClientPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const categoryCounts = {
    all: projectsData.length,
    healthcare: projectsData.filter((p) => p.category === "healthcare").length,
    infrastructure: projectsData.filter((p) => p.category === "infrastructure").length,
    software: projectsData.filter((p) => p.category === "software").length
  };

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      
      {/* Subtle minimalist background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl">

        {/* Hero Section */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/30 text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            System Engagements // 2024–2026 Architecture Registry
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8 leading-[1.08]">
            Engineered Systems. <br className="hidden sm:block" />
            <span className="text-gradient">Measurable Outcomes.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-10">
            A verified record of clinical healthcare ecosystems, mission-critical campus backbones, and bespoke cloud ERPs architected and deployed across Assam and Northeast India.
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden mb-24 border border-border/60">
          {[
            { label: "Regional Deployments", value: "20+", sub: "Verified in Assam & Northeast" },
            { label: "Infrastructure Uptime", value: "99.9%", sub: "Enterprise SLA guaranteed" },
            { label: "Technical Support SLA", value: "< 2 Hours", sub: "Local Guwahati engineers" },
            { label: "Licensing Debt", value: "₹0 Forever", sub: "100% Client code ownership" }
          ].map((stat, i) => (
            <div key={i} className="bg-card p-6 md:p-8 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">{stat.label}</span>
              <div>
                <p className="text-2xl md:text-3xl font-black font-heading text-foreground tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 border-b border-border/60 pb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Deployments", count: categoryCounts.all },
              { id: "healthcare", label: "Clinical & Healthcare", count: categoryCounts.healthcare },
              { id: "infrastructure", label: "Campus Infrastructure", count: categoryCounts.infrastructure },
              { id: "software", label: "Custom ERP & Software", count: categoryCounts.software }
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
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === tab.id ? "bg-background text-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  0{tab.count}
                </span>
              </button>
            ))}
          </div>
          <span className="text-xs font-mono text-muted-foreground hidden lg:block">
            SHOWING {filteredProjects.length} OF {projectsData.length} VERIFIED ENGAGEMENTS
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
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-foreground tracking-wider">
                      ENGAGEMENT // {project.index}
                    </span>
                    <span className="text-muted-foreground hidden sm:inline">|</span>
                    <span className="text-muted-foreground uppercase tracking-wider hidden sm:inline">
                      {project.categoryLabel}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
                      {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-[10px] uppercase tracking-wider border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live in Production
                    </span>
                  </div>
                </div>

                {/* Dossier Body */}
                <div className="p-6 md:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Scope, Problem, Solution */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h2>

                        <p className="text-sm sm:text-base font-medium text-foreground/80 mb-6 font-heading">
                          {project.tagline}
                        </p>

                        <div className="space-y-4 mb-8 text-sm text-muted-foreground font-light leading-relaxed">
                          <div className="p-4 rounded-xl bg-secondary/20 border border-border/40">
                            <strong className="font-semibold text-foreground text-xs font-mono uppercase tracking-wider block mb-1">
                              Operational Challenge:
                            </strong>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-secondary/20 border border-border/40">
                            <strong className="font-semibold text-foreground text-xs font-mono uppercase tracking-wider block mb-1">
                              Engineered Architecture:
                            </strong>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-3">
                          Systems & Technologies Deployed
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 rounded-full bg-secondary/60 border border-border/60 text-xs font-mono text-foreground/90 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Verified Impact & Deliverables */}
                    <div className="lg:col-span-5 bg-card/60 rounded-xl p-6 md:p-8 border border-border/60 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-6 pb-3 border-b border-border/40">
                          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                            Verified Performance Metrics
                          </span>
                          <BarChart3 className="w-4 h-4 text-primary" />
                        </div>

                        <div className="grid grid-cols-1 gap-4 mb-8">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="border-l-2 border-primary/50 pl-4 py-0.5">
                              <span className="text-2xl sm:text-3xl font-black font-heading text-foreground block tracking-tight">
                                {metric.value}
                              </span>
                              <span className="text-xs text-muted-foreground font-medium">
                                {metric.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-6 border-t border-border/40">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-3">
                            Key Deliverables & Integrations
                          </span>
                          <div className="space-y-2">
                            {project.deliverables.map((item, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                                <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between">
                        <Link 
                          href={`/contact?service=Case+Study+Inquiry:+${encodeURIComponent(project.title)}`}
                          className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-primary hover:underline font-bold group/link"
                        >
                          <span>Explore Similar Architecture</span>
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Comparison: RH Dynamics Engineering vs Generic Agency / Legacy Reseller */}
        <div className="mb-32">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Strategic Delivery Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mt-2">
              Engineering Partner vs Generic Agency
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Why leading hospitals, educational institutions, and regional enterprises in Northeast India engage RH Dynamics for critical digital infrastructure.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 overflow-hidden bg-card/40 backdrop-blur-sm">
            <div className="grid grid-cols-12 bg-secondary/40 p-4 md:p-6 border-b border-border/60 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <div className="col-span-4 md:col-span-3">Engineering Criteria</div>
              <div className="col-span-8 md:col-span-5 font-bold text-foreground">RH Dynamics Engineering Deployment</div>
              <div className="hidden md:block md:col-span-4 text-muted-foreground">Generic Web Agency / Reseller</div>
            </div>

            <div className="divide-y divide-border/40 text-sm">
              {comparisonMatrix.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 md:p-6 items-start gap-4">
                  <div className="col-span-12 md:col-span-3 font-semibold text-foreground text-xs font-mono uppercase tracking-wide">
                    {row.factor}
                  </div>
                  <div className="col-span-12 md:col-span-5 flex items-start gap-2.5 text-foreground leading-relaxed">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{row.rhDynamics}</span>
                  </div>
                  <div className="col-span-12 md:col-span-4 text-muted-foreground leading-relaxed text-xs md:text-sm pl-6 md:pl-0 border-l md:border-l-0 border-border/40">
                    <span className="md:hidden font-semibold block text-red-400 mb-1">Generic Vendor:</span>
                    {row.genericAgency}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verification Guarantee & Regional Standards */}
        <div className="mb-32 p-8 md:p-12 rounded-2xl border border-border/60 bg-secondary/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary border border-primary/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground">Statutory Verification</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                All healthcare software meets national ABDM specifications (M1–M3), while supply chain systems feature native Indian GSTN E-way bill schema compliance.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground">Dedicated Data Sovereignty</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Zero shared multi-tenant multi-vendor risk. Deployments reside on isolated dedicated cloud instances or on-premise hardware rooms with daily snapshot parity.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground">Local Northeast SLA</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Direct on-site engineering assistance in Guwahati and Assam. Zero offshore phone trees; speak directly with the senior engineers who architected your stack.
              </p>
            </div>
          </div>
        </div>

        {/* Minimalist Bottom Call to Action */}
        <div className="rounded-3xl border border-border/80 p-8 md:p-14 bg-gradient-to-b from-secondary/30 to-background text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">
              Direct Technical Discovery
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-4">
              Ready to Engineer Your System?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
              Speak directly with our technical leads in Guwahati to audit your existing workflows, architecture specs, and operational cost roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="h-13 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                  Request Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" size="lg" className="h-13 px-8 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground">
                  Explore Capabilities
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
