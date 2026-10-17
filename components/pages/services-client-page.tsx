"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, Database, Globe, 
  Smartphone, BriefcaseBusiness, PackageCheck, 
  ArrowRight, ArrowUpRight, Check, Phone, 
  ShieldCheck, Server, Cpu, CheckCircle2, 
  Sparkles, Wrench, Layers, Clock,
  BarChart3, ChevronRight, Lock, MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceOffering {
  title: string;
  scopeType: string;
  timeframe: string;
  description: string;
  features: string[];
  ideal: string;
  tag: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  offerings: ServiceOffering[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "healthcare",
    name: "Healthcare & Clinical Software",
    icon: Activity,
    tagline: "ABDM-Compliant Clinical HIS, LIS & Healthcare Platforms",
    description: "Ayushman Bharat ABDM-compliant Hospital Management Systems (RH-HSMS), laboratory information systems, and patient booking portals designed for medical facilities in Assam, Northeast India, and pan-India.",
    offerings: [
      {
        title: "RH-HSMS Hospital Management System",
        scopeType: "Cloud SaaS / Dedicated Enterprise",
        timeframe: "4–8 weeks",
        description: "Comprehensive hospital information system powering OPD, IPD, Bed Ward Allocation, Doctor EMR, Pharmacy Billing, and Ayushman Bharat / PMJAY workflows.",
        features: [
          "OPD/IPD Management & Real-Time Bed Ward Matrix",
          "Integrated Pharmacy Billing & Stock Reconciliation",
          "ABDM / ABHA Digital Scheme Compliance (M1–M3)",
          "Doctor Prescription Workstation & Electronic Medical Records"
        ],
        ideal: "Hospitals, Nursing Homes, and Multi-Speciality Clinics",
        tag: "Flagship Software"
      },
      {
        title: "Diagnostic & Pathology LIS",
        scopeType: "Cloud SaaS / Standalone LIS",
        timeframe: "3–5 weeks",
        description: "Laboratory Information System with sample barcode accessioning, analyzer bidirectional interfacing, and automated WhatsApp report delivery.",
        features: [
          "Automated Analyzer Machine Interfacing",
          "Custom Pathology Test Templates & Range Verification",
          "Instant Encrypted WhatsApp Report Delivery (< 2s)",
          "Doctor Referral Commission Tracking & Accounts Ledger"
        ],
        ideal: "Diagnostic Centers & Standalone Pathology Laboratories",
        tag: "High Demand"
      },
      {
        title: "Clinic & Polyclinic Practice Suite",
        scopeType: "Cloud SaaS Subscription",
        timeframe: "2–4 weeks",
        description: "Streamlined cloud appointment booking, digital prescriptions, patient history, and GST-ready billing for private clinics and polyclinics.",
        features: [
          "Smart Digital Queue & Token Calling System",
          "Digital Prescription Pad with Dosage Autocomplete",
          "Automated SMS & WhatsApp Appointment Reminders",
          "GST Invoicing & Daily Accounts Closing"
        ],
        ideal: "Private Practitioners, Polyclinics & Specialized Doctors",
        tag: "Essential"
      },
      {
        title: "Healthcare Patient Growth Platform",
        scopeType: "Tailored Growth Architecture",
        timeframe: "Continuous Scale",
        description: "Full-funnel patient acquisition, medical SEO, reputation management, and high-conversion appointment booking funnels.",
        features: [
          "Google Maps & Search Engine Authority Strategy",
          "High-Conversion Procedure & Consultation Booking Funnels",
          "Doctor Brand Authority & Department Pages",
          "Direct WhatsApp Inbound Lead Routing"
        ],
        ideal: "Hospitals & Clinics looking to maximize patient footfall",
        tag: "Growth Focus"
      }
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise ERP & Workflows",
    icon: BriefcaseBusiness,
    tagline: "Custom Supply Chain, Inventory Sync & GST Engines",
    description: "Bespoke Enterprise Resource Planning software tailored to your company's exact operational workflows, warehouse routes, and accounting structures.",
    offerings: [
      {
        title: "Enterprise Cloud ERP System",
        scopeType: "Custom Enterprise Architecture",
        timeframe: "16–28 weeks",
        description: "Full-scale Enterprise Resource Planning solution to streamline multi-branch distribution, warehouse inventory, and accounts.",
        features: [
          "Multi-Warehouse Real-Time Barcode Stock Sync",
          "Indian GSTN E-Way Bill & Automated Invoicing",
          "Biometric Hardware Sync & Automated Staff Payroll",
          "Executive Real-Time P&L Dashboards"
        ],
        ideal: "Medium to large distributors & enterprises integrating operations",
        tag: "Enterprise Asset"
      },
      {
        title: "Multi-Branch Supply Chain Suite",
        scopeType: "Tailored SCM Solution",
        timeframe: "12–18 weeks",
        description: "Engineered for regional and national supply routes, featuring real-time stock sync between central warehouses and regional retail branches.",
        features: [
          "Distributed Hub Inventory Requisitions",
          "Batch Serialization & Expiry Alert Tracking",
          "Automated PO Generation & Supplier Ledgers",
          "Sub-Second Multi-Branch Data Parity"
        ],
        ideal: "Wholesale distributors, manufacturing firms, and retail networks",
        tag: "High Efficiency"
      },
      {
        title: "Custom CRM & Lead Pipeline",
        scopeType: "Custom Business Portal",
        timeframe: "10–16 weeks",
        description: "Tailored Customer Relationship Management system to enhance sales tracking, deal velocity, and automated client follow-ups.",
        features: [
          "Automated Multi-Channel Lead Capture",
          "Deal Stage Pipeline & Sales Forecasting",
          "WhatsApp Cloud & Email Follow-Up Sequences",
          "Executive Performance & Conversion Analytics"
        ],
        ideal: "Sales-driven organizations and high-ticket B2B service firms",
        tag: "Operational Scale"
      }
    ]
  },
  {
    id: "web",
    name: "Web Platforms & Portals",
    icon: Globe,
    tagline: "Sub-Second Next.js Architecture & High-Conversion Platforms",
    description: "Edge-rendered web platforms built with Next.js, React, and TypeScript. Sub-second load times, structured schema SEO, and direct WhatsApp booking routing.",
    offerings: [
      {
        title: "Flagship Corporate Web Platform",
        scopeType: "Full-Stack Web Engineering",
        timeframe: "4–6 weeks",
        description: "Professional, ultra-fast business platform designed to establish brand authority, rank on Google, and convert qualified client inquiries.",
        features: [
          "Sub-Second Mobile Load Speed (< 1.1s)",
          "Bespoke Responsive UI/UX Architecture",
          "Direct WhatsApp & Contact Form Integrations",
          "Structured Local Schema & SEO Fundamentals"
        ],
        ideal: "Enterprises, medical institutions, and professional firms",
        tag: "Core Authority"
      },
      {
        title: "E-Commerce & Digital Storefront",
        scopeType: "Commerce Architecture",
        timeframe: "8–12 weeks",
        description: "Comprehensive online store with high-speed catalog browsing, secure Razorpay/Stripe checkout, and automated inventory sync.",
        features: [
          "High-Speed Dynamic Product Catalog & Real-Time Filters",
          "Integrated Payment Gateways (Razorpay / UPI / NetBanking)",
          "Automated Order & Shipping Notifications",
          "Real-Time Inventory Stock Management"
        ],
        ideal: "Retailers selling products online natively",
        tag: "E-Commerce"
      },
      {
        title: "Custom Web Application & SaaS",
        scopeType: "Cloud Application Engineering",
        timeframe: "12–20 weeks",
        description: "Bespoke SaaS and web applications engineered to solve specific operational challenges, client portals, and data workflows.",
        features: [
          "Dedicated Relational PostgreSQL Architecture",
          "Secure JWT & Role-Based Authentication",
          "Operational Process Automation & Webhooks",
          "RESTful & GraphQL API Integrations"
        ],
        ideal: "Businesses requiring specialized workflow automation",
        tag: "Cloud Native"
      }
    ]
  },
  {
    id: "mobile",
    name: "Mobile Applications",
    icon: Smartphone,
    tagline: "Cross-Platform & Native Mobile Engineering",
    description: "High-performance native and cross-platform mobile applications engineered for fluid 60fps responsiveness, offline sync, and app store compliance.",
    offerings: [
      {
        title: "Cross-Platform Mobile App",
        scopeType: "Unified iOS & Android",
        timeframe: "10–14 weeks",
        description: "Cost-effective, high-performance mobile application deployed to both iOS and Android from a unified modern codebase.",
        features: [
          "Unified Single Codebase Architecture",
          "Native 60fps Fluid UI Experience",
          "Push Notifications & Deep Linking",
          "Complete App Store & Play Store Submissions"
        ],
        ideal: "Companies targeting iOS and Android with maximum velocity",
        tag: "High Adoption"
      },
      {
        title: "Native Android App",
        scopeType: "Native Kotlin Engineering",
        timeframe: "12–16 weeks",
        description: "Robust native Android application built with modern Kotlin for optimal performance across the diverse Android device ecosystem.",
        features: [
          "Modern Kotlin Architecture & Coroutines",
          "Material 3 Design Standards",
          "Hardware-Level Sensor & Camera Access",
          "Google Play Store Compliance & Publishing"
        ],
        ideal: "Businesses requiring specialized native Android capabilities",
        tag: "Native Precision"
      },
      {
        title: "Native iOS App",
        scopeType: "Native Swift Engineering",
        timeframe: "12–16 weeks",
        description: "Premium native iOS application engineered in Swift for silky smoothness, Apple design compliance, and seamless Apple ecosystem integration.",
        features: [
          "Swift & SwiftUI Modern Architecture",
          "Strict Apple Human Interface Guidelines",
          "Biometric FaceID / TouchID Authentication",
          "App Store Review & Release Guarantee"
        ],
        ideal: "Premium consumer brands and executive mobile tools",
        tag: "iOS Native"
      }
    ]
  }
];

const maintenancePlans = [
  {
    title: "Essential SLA Support",
    scopeType: "Standard Engineering SLA",
    description: "Foundational maintenance ensuring your software remains secure, patched, and operational with continuous monitoring.",
    features: [
      "Security patches & vulnerability updates",
      "Uptime & database performance monitoring",
      "Minor bug fixes & code adjustments",
      "Automated weekly encrypted database backups",
      "Email & direct engineering ticket support"
    ],
    badge: "Core Stability"
  },
  {
    title: "Priority SLA Support",
    scopeType: "Active Feature & Staging Care",
    description: "Comprehensive support for business-critical software requiring active enhancements, daily backups, and priority response.",
    features: [
      "All Essential features included",
      "Active feature enhancements & UI adjustments",
      "Daily automated encrypted database snapshots",
      "Rapid response SLA (< 2 hours)",
      "Dedicated staging environment maintenance",
      "Quarterly performance & database optimization"
    ],
    badge: "Recommended",
    isPopular: true
  },
  {
    title: "Enterprise Mission-Critical SLA",
    scopeType: "24/7 Dedicated Architecture Lead",
    description: "Complete SLA care package for enterprise ERPs and hospital platforms requiring emergency response and dedicated engineering leads.",
    features: [
      "All Priority features included",
      "Dedicated Senior Systems Architect",
      "Rapid emergency response SLA (< 1 hour)",
      "On-site and video consultation availability",
      "Monthly architectural review & scale roadmap",
      "Unlimited critical priority patches"
    ],
    badge: "Mission Critical"
  }
];

export function ServicesClientPage() {
  const [activeTab, setActiveTab] = useState("healthcare");

  const activeCategory = serviceCategories.find((c) => c.id === activeTab) || serviceCategories[0];

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase border border-border bg-secondary/50 text-foreground/80 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Software Capabilities &amp; Architecture Catalogue
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8 leading-[1.06] text-foreground">
            Software Built for Scale. <br className="hidden sm:block" />
            <span className="text-gradient">Engineered Without Compromise.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl font-normal leading-relaxed mb-10">
            From ABDM-compliant clinical software (RH-HSMS) and custom cloud ERPs to native mobile apps and high-speed web platforms. Review our capabilities, module deliverables, and response SLAs.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="#software">
              <Button size="lg" className="h-13 px-8 text-xs font-mono uppercase tracking-wider font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Explore Software Modules
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#maintenance">
              <Button variant="outline" size="lg" className="h-13 px-7 text-xs font-mono uppercase tracking-wider font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
                SLA &amp; Support Plans
              </Button>
            </Link>
          </div>
        </div>

        {/* Governance Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden mb-24 border border-border/60">
          {[
            { label: "Response SLA", value: "< 2 Hours", sub: "Global & regional support" },
            { label: "Deployment Models", value: "SaaS / Dedicated", sub: "Cloud SaaS or private enterprise" },
            { label: "Direct Channels", value: "Phone & Video", sub: "WhatsApp, Meet, In-Person" },
            { label: "Statutory Status", value: "DPIIT Certified", sub: "Startup India Recognized" }
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

        {/* --- SECTION 1: Software & Platform Solutions --- */}
        <section id="software" className="mb-32 scroll-mt-28">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Engineering Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mt-2">
              Software Solutions &amp; Platforms
            </h2>
            <p className="text-muted-foreground mt-3 text-sm font-light">
              Explore dedicated software offerings with module specifications, delivery timeframes, and flexible deployment models.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-border/60 pb-6">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${
                    activeTab === cat.id
                      ? "bg-foreground text-background font-bold shadow-sm"
                      : "bg-secondary/30 text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-border/50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                  <span className={`text-xs px-1.5 py-0.2 rounded-full ${
                    activeTab === cat.id ? "bg-background text-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    0{cat.offerings.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Header Banner */}
          <div className="p-6 md:p-8 rounded-2xl bg-secondary/20 border border-border/60 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-bold mb-1">
                <span>Domain Focus // {activeCategory.name}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                {activeCategory.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-light mt-1 max-w-2xl">
                {activeCategory.description}
              </p>
            </div>
            <Link href={`/contact?service=${encodeURIComponent(activeCategory.name + ' Consultation')}`}>
              <Button size="sm" variant="outline" className="rounded-full text-xs font-mono uppercase tracking-wider border-border/70 shrink-0">
                Inquire for {activeCategory.name}
                <ArrowRight className="ml-1.5 h-3 w-3" />
              </Button>
            </Link>
          </div>

          {/* Active Category Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {activeCategory.offerings.map((offering, idx) => (
                <motion.div
                  key={offering.title}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  className="rounded-2xl glass-card dark:glass-card-dark border border-border/60 hover:border-primary/50 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between"
                >
                  <div>
                    {/* Offering Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-secondary text-foreground font-semibold border border-border/60">
                        {offering.tag}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {offering.timeframe}
                      </span>
                    </div>

                    <h4 className="text-2xl font-black font-heading text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {offering.title}
                    </h4>

                    {/* Scope Callout */}
                    <div className="mb-4 pb-3 border-b border-border/40 flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">Model:</span>
                      <span className="text-xs font-mono text-foreground font-semibold">
                        {offering.scopeType}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground font-normal leading-relaxed mb-6">
                      {offering.description}
                    </p>

                    {/* Ideal For */}
                    <div className="mb-6 p-4 rounded-xl bg-secondary/30 border border-border/40 text-xs sm:text-sm">
                      <strong className="text-foreground font-mono uppercase text-xs tracking-wider block mb-1">
                        Target Operational Profile:
                      </strong>
                      <span className="text-muted-foreground font-normal">{offering.ideal}</span>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="mb-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold block mb-3">
                        Core Architecture Deliverables
                      </span>
                      <div className="space-y-2">
                        {offering.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-border/40">
                    <Link href={`/contact?service=${encodeURIComponent(offering.title)}`} className="block">
                      <Button variant="outline" className="w-full h-11 rounded-full text-xs font-mono uppercase tracking-wider font-semibold border-border/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                        <span>Request Architecture Proposal</span>
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* --- SECTION 2: Maintenance & Support SLA --- */}
        <section id="maintenance" className="mb-32 scroll-mt-28">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Guaranteed Uptime &amp; Rapid SLA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mt-2">
              Ongoing Maintenance &amp; Support SLAs
            </h2>
            <p className="text-muted-foreground mt-3 text-sm font-light">
              Continuous security monitoring, zero software rot, automated database backups, and rapid engineering response via phone, WhatsApp, or video call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenancePlans.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-2xl glass-card dark:glass-card-dark border transition-all duration-300 p-6 md:p-8 flex flex-col justify-between ${
                  plan.isPopular
                    ? "border-primary/80 shadow-lg shadow-primary/10"
                    : "border-border/60 hover:border-primary/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-secondary text-foreground/80 border border-border/50">
                      {plan.badge}
                    </span>
                    {plan.isPopular && (
                      <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/15 text-primary font-bold border border-primary/30">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black font-heading text-foreground tracking-tight mb-2">
                    {plan.title}
                  </h3>

                  <div className="mb-4 pb-4 border-b border-border/40">
                    <span className="text-xs font-mono text-primary font-bold block">
                      {plan.scopeType}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <Link href={`/contact?service=${encodeURIComponent(plan.title)}`} className="block">
                    <Button 
                      variant="outline"
                      className="w-full h-11 rounded-full text-xs font-mono uppercase tracking-wider font-semibold border-border/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                      Inquire for {plan.title}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Minimalist Discovery CTA */}
        <div className="rounded-3xl border border-border/80 p-8 md:p-14 bg-gradient-to-b from-secondary/30 to-background text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">
              Direct Technical Discovery
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-4">
              Need a Custom Architecture Proposal?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
              Speak directly with our technical leads. We are available via phone call, WhatsApp, Google Meet, or in-person consultation to audit your workflows and formulate a precise roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="h-13 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                  Request Strategy Session
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
