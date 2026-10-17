"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, Activity, Bed, FileText, 
  FlaskConical, Pill, ShieldCheck, Lock, Stethoscope, 
  ArrowUpRight, Phone, Building2, CheckCircle2, Sparkles,
  Zap, RefreshCw, Smartphone, Layers, Clock, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductModule {
  suite: "hsms" | "lis" | "core";
  tag: string;
  title: string;
  description: string;
  metrics: string[];
  icon: any;
  version: string;
}

const productModules: ProductModule[] = [
  {
    suite: "hsms",
    tag: "RH CORE HSMS // INPATIENT & WARDS",
    title: "Interactive Ward & Real-Time Bed Matrix",
    description: "Visual ward and bed grid with instant status color-coding (Occupied, Cleaning, Available, ICU). Streamlined Admission-Discharge-Transfer (ADT) protocols, digital queue management, and nurse-station vitals tracking.",
    metrics: ["Real-time bed occupancy grid", "Digital token calling screens", "Zero paper admission slips"],
    icon: Bed,
    version: "v1.0"
  },
  {
    suite: "hsms",
    tag: "RH CORE HSMS // CLINICAL EMR",
    title: "Doctor EMR & Instant Digital Prescription Pad",
    description: "Lightning-fast digital prescription generation with diagnosis autocomplete, past consultation timeline, ICD-10 medical coding, and customizable doctor specialty examination templates.",
    metrics: ["1-click digital prescriptions", "Unified clinical patient history", "ICD-10 diagnostic standard"],
    icon: Stethoscope,
    version: "v1.0"
  },
  {
    suite: "lis",
    tag: "RH CORE LIS // DIAGNOSTICS & PATHOLOGY",
    title: "Automated Pathology LIS & Analyzer Interfacing",
    description: "Bidirectional ASTM/HL7 interfacing with laboratory machines (biochemistry, hematology, immunology). Eliminates manual data entry errors with sample barcode accessioning and automatic abnormal value alarms.",
    metrics: ["Direct machine ASTM/HL7 sync", "Barcode accession tracking", "Critical range visual flags"],
    icon: FlaskConical,
    version: "v1.0"
  },
  {
    suite: "lis",
    tag: "RH CORE LIS // PATIENT COMMUNICATION",
    title: "Instant < 2-Second WhatsApp PDF Delivery",
    description: "As soon as the pathologist digitally signs off on a test panel, RH CORE renders an encrypted, QR-verified PDF and dispatches it directly to the patient's WhatsApp mobile number automatically.",
    metrics: ["< 1.8s automated dispatch", "QR-verified digital stamp", "40% reduction in counter queues"],
    icon: Smartphone,
    version: "v1.0"
  },
  {
    suite: "hsms",
    tag: "RH CORE HSMS // PHARMACY POS",
    title: "Hospital Pharmacy & Central Inventory Control",
    description: "Real-time stock requisition directly from doctor prescription pads. Batch serialization, automated expiry warnings, barcode scanning POS billing, and automatic low-stock supplier reorders.",
    metrics: ["Automated expiry alerts", "Zero lost billing leakages", "Instant nursing requisition sync"],
    icon: Pill,
    version: "v1.0"
  },
  {
    suite: "core",
    tag: "RH CORE // STATUTORY COMPLIANCE",
    title: "ABDM (Ayushman Bharat) & PMJAY Claims Suite",
    description: "Built natively for Indian compliance. Instant ABHA ID generation (Scan & Share), ABDM M1–M3 clinical record linking, PMJAY package auto-matching, and Atal Amrit Abhiyan state scheme ledgers.",
    metrics: ["Native ABHA ID creation", "PMJAY claim pre-auth engine", "Cashless TPA insurance portals"],
    icon: ShieldCheck,
    version: "v1.0"
  }
];

const versionChangelog = [
  {
    ver: "v1.0.4 (Current Live Production)",
    date: "Current Release",
    badge: "Stable Release",
    features: [
      "Sub-2s WhatsApp PDF delivery with dynamic QR verification stamp",
      "Native ABDM M1–M3 ABHA v2 creation and scan-and-share queue tokens",
      "Visual IPD bed matrix with color-coded nurse shift handover telemetry",
      "Continuous zero-downtime cloud update pipeline (Zero reception counter disruptions)"
    ]
  },
  {
    ver: "Continuous Cloud Pipeline",
    date: "Evergreen Architecture",
    badge: "Auto-Updated",
    features: [
      "No 2012-era CD installations or stagnant offline binaries",
      "Automatic weekly performance optimizations and regulatory compliance patches",
      "Isolated database clustering with automated immutable nightly backups",
      "Dedicated response SLA < 2 Hours worldwide via Phone, WhatsApp & In-Person"
    ]
  }
];

const comparisonMatrix = [
  {
    factor: "Software Updates & Longevity",
    rh: "Evergreen Cloud System: Continuous silent updates with new features, regulatory compliance, and speed patches.",
    legacy: "Outdated Desktop EXEs: Stagnant 10-year-old software installed from CDs with zero modern feature updates."
  },
  {
    factor: "Patient Report Delivery",
    rh: "Sub-2s Automated WhatsApp Dispatch: Encrypted PDF delivered directly to patient mobile phones.",
    legacy: "Manual Physical Printing: Patients crowd reception desks or wait hours for paper reports to be stamped."
  },
  {
    factor: "National Scheme Compliance",
    rh: "Native ABDM M1–M3 & PMJAY: Instant ABHA card creation and automatic insurance claim reconciliation.",
    legacy: "No Native Compliance: Staff forced into manual double-entry on government web portals."
  },
  {
    factor: "Support & Engineering SLA",
    rh: "Committed < 2-Hour Response SLA: Available worldwide via direct phone, WhatsApp, video call, or on-site in Assam.",
    legacy: "Distant Resellers: Unresponsive third-party vendors with days or weeks of downtime latency."
  }
];

const clinicalEnvironments = [
  { name: "Multi-Speciality Hospitals", spec: "50-200+ Bed Inpatient Wards" },
  { name: "Diagnostic & Pathology Labs", spec: "Bidirectional Analyzer LIS" },
  { name: "Polyclinics & Outpatient Centers", spec: "Doctor EMR & Instant Appointments" },
  { name: "Daycare & Surgical Centers", spec: "NABH / ABDM Standardized Records" },
  { name: "Regional Clinics & Dispensaries", spec: "Cloud SaaS & WhatsApp Triage" }
];

export function HsmsClientPage() {
  const [activeTab, setActiveTab] = useState<"all" | "hsms" | "lis">("all");

  const filteredModules = productModules.filter(m => {
    if (activeTab === "all") return true;
    if (activeTab === "hsms") return m.suite === "hsms" || m.suite === "core";
    if (activeTab === "lis") return m.suite === "lis" || m.suite === "core";
    return true;
  });

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      
      {/* Subtle minimalist background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          
          {/* App Store / Version Pill */}
          <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase border border-border bg-secondary/50 text-foreground/80 mb-8 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-foreground font-bold">RH CORE™ v1.0 Live</span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="hidden sm:inline">Healthcare Operating System</span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="text-primary font-bold">Continuous Cloud Updates</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8 leading-[1.06] text-foreground">
            RH CORE™ <br className="hidden sm:block" />
            <span className="text-gradient">Next-Gen Hospital &amp; LIS</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl font-normal leading-relaxed mb-10">
            While conventional hospital and pathology software in the market remains trapped in outdated 2010 desktop binaries, <strong>RH CORE</strong> is engineered as an evergreen, continuously-updated clinical platform. Unifying <strong>RH CORE HSMS</strong> (Hospital Management) and <strong>RH CORE LIS</strong> (Laboratory Automation) with native ABDM M1–M3, automated WhatsApp reports, and a committed &lt; 2-hour SLA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link href="/contact?service=RH+CORE+Hospital+Suite">
              <Button size="lg" className="h-14 px-8 text-base font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Request RH CORE v1.0 Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918638875149">
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                Healthcare Lead: +91 86388 75149
              </Button>
            </a>
          </div>
        </div>

        {/* App Store Style Product Specs Card */}
        <div className="p-6 sm:p-8 rounded-3xl border border-border/80 bg-gradient-to-b from-secondary/30 via-secondary/10 to-background mb-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-border/50">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">Product Information</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-bold">Production Live</span>
              </div>
              <h2 className="text-2xl font-black font-heading text-foreground">
                RH CORE™ v1.0.4 Release Specifications
              </h2>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-xl bg-card border border-border text-center">
                <span className="text-muted-foreground block text-xs">CURRENT VERSION</span>
                <strong className="text-foreground text-sm">v1.0.4</strong>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-card border border-border text-center">
                <span className="text-muted-foreground block text-xs">DEPLOYMENT</span>
                <strong className="text-foreground text-sm">Cloud SaaS / On-Prem</strong>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-card border border-border text-center">
                <span className="text-muted-foreground block text-xs">SUPPORT SLA</span>
                <strong className="text-foreground text-sm">&lt; 2 Hours</strong>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {versionChangelog.map((entry, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-heading text-foreground flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    {entry.ver}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-secondary text-primary border border-border/50">
                    {entry.badge}
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {entry.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Suite Switcher Filter Tabs */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                Platform Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mt-2">
                Explore RH CORE Suites
              </h2>
            </div>
            
            {/* Interactive Filter Pills */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-secondary/40 border border-border/60 self-start md:self-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "all"
                    ? "bg-primary text-primary-foreground font-bold shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Modules (6)
              </button>
              <button
                onClick={() => setActiveTab("hsms")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "hsms"
                    ? "bg-primary text-primary-foreground font-bold shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                RH CORE HSMS
              </button>
              <button
                onClick={() => setActiveTab("lis")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === "lis"
                    ? "bg-primary text-primary-foreground font-bold shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                RH CORE LIS
              </button>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
            <AnimatePresence mode="popLayout">
              {filteredModules.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="group relative p-8 rounded-2xl glass-card dark:glass-card-dark border border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground">
                          {item.tag}
                        </span>
                        <div className="p-2 rounded-xl bg-secondary text-primary group-hover:scale-105 transition-transform">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border/40 space-y-2">
                      {item.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Comparison: RH CORE vs Outdated Traditional Healthcare Software */}
        <div className="mb-28">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Engineering Paradigm
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mt-2">
              Why Traditional Hospital &amp; LIS Software is Outdated
            </h2>
            <p className="text-muted-foreground mt-3 text-sm font-light">
              Most software in Assam and India was coded in the 2000s as fragile desktop binaries that crash and never receive updates. See why modern clinical teams upgrade to RH CORE.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 overflow-hidden bg-card/40 backdrop-blur-sm">
            <div className="grid grid-cols-12 bg-secondary/40 p-4 md:p-6 border-b border-border/60 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <div className="col-span-4 md:col-span-3">Operational Dimension</div>
              <div className="col-span-8 md:col-span-5 font-bold text-foreground flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>RH CORE™ v1.0 (Evergreen Cloud OS)</span>
              </div>
              <div className="hidden md:block md:col-span-4 text-muted-foreground">
                Outdated Traditional Desktop Software
              </div>
            </div>

            <div className="divide-y divide-border/40 text-sm">
              {comparisonMatrix.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 md:p-6 items-start gap-4">
                  <div className="col-span-12 md:col-span-3 font-semibold text-foreground text-xs font-mono uppercase tracking-wide">
                    {row.factor}
                  </div>
                  <div className="col-span-12 md:col-span-5 flex items-start gap-2.5 text-foreground leading-relaxed">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{row.rh}</span>
                  </div>
                  <div className="col-span-12 md:col-span-4 text-muted-foreground leading-relaxed text-xs md:text-sm pl-6 md:pl-0 border-l md:border-l-0 border-border/40">
                    <span className="md:hidden font-semibold block text-red-400 mb-1">Traditional Market Software:</span>
                    {row.legacy}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clinical Environments Strip */}
        <div className="mb-28">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Engineered For Clinical Environments
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3">
            {clinicalEnvironments.map((item, idx) => (
              <div 
                key={idx}
                className="px-5 py-3 rounded-xl border border-border/60 bg-secondary/20 backdrop-blur-sm text-xs font-medium text-foreground flex items-center gap-2"
              >
                <Building2 className="w-3.5 h-3.5 text-primary" />
                <span>{item.name}</span>
                <span className="text-xs text-muted-foreground font-mono">({item.spec})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="rounded-3xl border border-border/80 p-8 md:p-14 bg-gradient-to-b from-secondary/30 to-background text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">
              On-Site &amp; Virtual Demonstrations
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-4">
              Experience RH CORE™ v1.0 Live
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
              Schedule a demonstration tailored to your hospital bed capacity, doctor specialties, or pathology analyzer setup with our healthcare engineering partners in Guwahati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact?service=RH+CORE+Hospital+Suite">
                <Button size="lg" className="h-13 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20">
                  Book Live v1.0 Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" size="lg" className="h-13 px-8 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground">
                  View All Technical Services
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
