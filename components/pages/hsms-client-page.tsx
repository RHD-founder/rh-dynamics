"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Check, Activity, Bed, FileText, 
  FlaskConical, Pill, ShieldCheck, Lock, Stethoscope, 
  ArrowUpRight, Phone, Building2, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const hsmsModules = [
  {
    tag: "01 // PATIENT FLOW",
    title: "OPD, IPD & Real-time Bed Matrix",
    description: "Visual ward and bed occupancy tracking, rapid Admission-Discharge-Transfer (ADT) protocols, digital queue management, and patient vitals telemetry.",
    metrics: ["Interactive bed matrix", "Digital token queue screens", "Zero paper admission slips"]
  },
  {
    tag: "02 // CLINICAL WORKSTATION",
    title: "Doctor EMR & Digital Prescription Pad",
    description: "Single-click digital prescription generation, comprehensive patient medical history timelines, ICD-10 diagnostic coding, and customized clinical examination templates.",
    metrics: ["Fast prescription generator", "Unified patient history timeline", "ICD-10 clinical compliance"]
  },
  {
    tag: "03 // DIAGNOSTIC PIPELINE",
    title: "Pathology LIS & Auto Analyzer Interfacing",
    description: "Bi-directional interfacing with laboratory equipment, barcode sample accessioning, automated critical range alerts, and sub-2-second automated WhatsApp report delivery.",
    metrics: ["Direct analyzer interfacing", "Barcode sample tracking", "Instant WhatsApp PDF reports"]
  },
  {
    tag: "04 // CENTRAL DISPENSARY",
    title: "Hospital Pharmacy & Central Inventory",
    description: "Real-time stock requisition from nursing stations, batch and expiry alert automation, integrated POS billing with barcode scanners, and automated vendor purchase orders.",
    metrics: ["Zero stockout alerts", "Integrated GST billing", "Nursing station requisitions"]
  },
  {
    tag: "05 // NATIONAL STANDARDS",
    title: "ABDM, PMJAY & Insurance Claims",
    description: "Instant ABHA health ID generation, M1-M3 ABDM certification readiness, Ayushman Bharat PMJAY claim filing pipelines, and Atal Amrit Abhiyan compliance.",
    metrics: ["Native ABHA generation", "PMJAY claim workflows", "Cashless TPA insurance portals"]
  },
  {
    tag: "06 // DATA GOVERNANCE",
    title: "Granular Role Hierarchy & Audit Logging",
    description: "Strict role-based access control separating doctors, nurses, pharmacists, and cashiers. Encrypted medical records, nightly cloud snapshots, and local Guwahati engineering support.",
    metrics: ["Role-based access controls", "Daily immutable backups", "Guwahati on-site SLA support"]
  }
];

const hospitalPartners = [
  { name: "Cosmomedical Guwahati", spec: "Speciality Healthcare & Web Infrastructure" },
  { name: "Spektra Diagnostics", spec: "Full LIS & Brand Presence" },
  { name: "Gate Rajdhani Hospital", spec: "Comprehensive Patient Acquisition" },
  { name: "Trinitas Hospital", spec: "Healthcare Strategic Systems" },
  { name: "Hope Diagnostics & Clinic", spec: "Clinical Footfall & Booking" }
];

const comparisonMatrix = [
  {
    factor: "System Architecture",
    rh: "Cloud-native web platform. Accessible securely across tablets, workstations, and mobile devices.",
    legacy: "Outdated desktop EXE binaries tied to single physical office PCs without remote access."
  },
  {
    factor: "Report Delivery",
    rh: "Automated WhatsApp and SMS PDF dispatch delivered to patient mobile devices in < 2 seconds.",
    legacy: "Manual counter paper collection or delayed physical printing queues."
  },
  {
    factor: "Government Schemes",
    rh: "Built-in M1-M3 ABDM protocols, ABHA generation, and Ayushman Bharat PMJAY filing.",
    legacy: "Requires complex third-party connector software or manual re-entry on government portals."
  },
  {
    factor: "On-Site Support",
    rh: "Direct engineering support team stationed in Guwahati with guaranteed rapid response times.",
    legacy: "Distant offshore call centers or third-party resellers with days of downtime latency."
  }
];

export function HsmsClientPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      
      {/* Subtle minimalist background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl">

        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/30 text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Clinical ERP Architecture // ABDM & PMJAY Ready
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8 leading-[1.08]">
            Clinical Precision. <br className="hidden sm:block" />
            <span className="text-gradient">Zero Paper Lag.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-10">
            RH-HSMS is Northeast India&apos;s cloud hospital management system. Unifying admissions, doctor EMR, pathology LIS with instant WhatsApp reports, and Ayushman Bharat billing into one seamless platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link href="/contact?service=RH-HSMS+Hospital+Software">
              <Button size="lg" className="h-14 px-8 text-base font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Schedule Hospital Demonstration
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

        {/* Clinical Performance Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden mb-32 border border-border/60">
          {[
            { label: "Patient Wait Reduction", value: "40%+", sub: "Streamlined digital triage" },
            { label: "Lab Report Delivery", value: "< 2 Sec", sub: "Automated WhatsApp PDF" },
            { label: "Statutory Compliance", value: "ABDM Ready", sub: "ABHA & PMJAY claims" },
            { label: "On-Site Support SLA", value: "< 2 Hours", sub: "Guwahati technical team" }
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

        {/* Clinical Modules Grid */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary">System Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mt-2">
                Unified Clinical & Administrative Modules
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Engineered specifically for the operational, diagnostic, and patient throughput requirements of hospitals and labs across Assam and Northeast India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hsmsModules.map((item, idx) => (
              <div 
                key={idx}
                className="group relative p-8 rounded-2xl glass-card dark:glass-card-dark border border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-muted-foreground block mb-4">
                    {item.tag}
                  </span>
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
              </div>
            ))}
          </div>
        </div>

        {/* Comparison: RH-HSMS Cloud vs Outdated Legacy Systems */}
        <div className="mb-32">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Healthcare Architecture Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mt-2">
              Why Modern Hospitals Switch to RH-HSMS
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Replace fragile, offline desktop software with a secure cloud ecosystem built for multi-branch scalability and statutory compliance.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 overflow-hidden bg-card/40 backdrop-blur-sm">
            <div className="grid grid-cols-12 bg-secondary/40 p-4 md:p-6 border-b border-border/60 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <div className="col-span-4 md:col-span-3">Operational Requirement</div>
              <div className="col-span-8 md:col-span-5 font-bold text-foreground">RH-HSMS Hospital Information System</div>
              <div className="hidden md:block md:col-span-4 text-muted-foreground">Outdated Legacy Desktop Software</div>
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
                    <span className="md:hidden font-semibold block text-red-400 mb-1">Legacy System:</span>
                    {row.legacy}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regional Partners Strip */}
        <div className="mb-32">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Proven Across Regional Healthcare Leaders
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3">
            {hospitalPartners.map((item, idx) => (
              <div 
                key={idx}
                className="px-5 py-3 rounded-xl border border-border/60 bg-secondary/20 backdrop-blur-sm text-xs font-medium text-foreground flex items-center gap-2"
              >
                <Building2 className="w-3.5 h-3.5 text-primary" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Minimalist Call to Action */}
        <div className="rounded-3xl border border-border/80 p-8 md:p-14 bg-gradient-to-b from-secondary/30 to-background text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">
              On-Site & Virtual Demonstrations
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-4">
              Modernize Your Hospital Workflow Today
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
              Schedule a demonstration customized to your hospital&apos;s bed strength, diagnostic departments, and billing structure with our medical tech specialists in Guwahati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact?service=RH-HSMS+Hospital+Software">
                <Button size="lg" className="h-13 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20">
                  Book Live Demonstration
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
