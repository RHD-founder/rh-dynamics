"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, Database, Network, Globe, 
  Smartphone, BriefcaseBusiness, PackageCheck, 
  ArrowRight, ArrowUpRight, Check, Phone, 
  ShieldCheck, Server, Cpu, CheckCircle2, 
  Sparkles, Megaphone, Wrench, Layers, Clock,
  BarChart3, ChevronRight, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Data Definitions (100% Complete Preserved Catalog) ---

interface ServiceOffering {
  title: string;
  price: string;
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
    name: "Healthcare & HSMS",
    icon: Activity,
    tagline: "ABDM-Compliant Clinical Systems & Diagnostic Suites",
    description: "Ayushman Bharat ABDM-compliant Hospital Management Systems (RH-HSMS), LIS pathology suites, and patient acquisition engines built for hospital leaders in Assam and Northeast India.",
    offerings: [
      {
        title: "RH-HSMS Hospital Management System",
        price: "Custom Enterprise",
        timeframe: "4–8 weeks",
        description: "Complete hospital information system powering OPD, IPD, Bed Allocation, OT scheduling, Pharmacy, Billing, and Ayushman Bharat / PMJAY workflows.",
        features: [
          "OPD/IPD & Real-Time Bed Ward Matrix",
          "Integrated Pharmacy Billing & Inventory",
          "ABDM / ABHA Digital Scheme Compliance (M1–M3)",
          "Doctor Prescription Pad & EMR Roster"
        ],
        ideal: "Hospitals, Nursing Homes, and Multi-Speciality Clinics",
        tag: "Flagship Product"
      },
      {
        title: "Diagnostic & Pathology LIS",
        price: "₹85,000+",
        timeframe: "3–5 weeks",
        description: "Laboratory Information System with sample barcode tracking, analyzer interfacing, and instant WhatsApp report dispatch.",
        features: [
          "Automated Analyzer Machine Interfacing",
          "Custom Pathology Test Templates",
          "Instant WhatsApp Report Dispatch (< 2s)",
          "Doctor Referral Commission Tracking & Ledger"
        ],
        ideal: "Diagnostic Centers & Pathology Laboratories",
        tag: "High Demand"
      },
      {
        title: "Clinic & Polyclinic Suite",
        price: "₹45,000+",
        timeframe: "2–4 weeks",
        description: "Streamlined cloud appointment booking, digital prescriptions, patient history, and GST-ready billing for private clinics.",
        features: [
          "Smart Queue & Token Calling System",
          "Digital Prescription Pad with Dosage Autocomplete",
          "Automated SMS & WhatsApp Appointment Reminders",
          "GST Invoicing & Daily Accounts Closing"
        ],
        ideal: "Private Practitioners, Polyclinics & Specialized Doctors",
        tag: "Essential"
      },
      {
        title: "Healthcare Digital Dominance",
        price: "₹25,000/mo+",
        timeframe: "Continuous Growth",
        description: "Full-funnel patient acquisition, medical local SEO, reputation management, and high-conversion surgical appointment funnels.",
        features: [
          "Google Maps Local SEO Dominance (#1 Rank Strategy)",
          "High-Conversion Surgical Booking Funnels",
          "Doctor Brand Authority & Procedure Pages",
          "Automated 5-Star Review & Trust Pipeline"
        ],
        ideal: "Hospitals & Clinics looking to maximize patient footfall",
        tag: "High ROI"
      }
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise ERP & Workflows",
    icon: BriefcaseBusiness,
    tagline: "Custom Supply Chain, Inventory Sync & GST Engines",
    description: "Bespoke Enterprise Resource Planning software replacing spreadsheets and rigid off-the-shelf subscriptions with 100% data sovereignty and zero per-seat fees.",
    offerings: [
      {
        title: "Enterprise Cloud ERP System",
        price: "₹5,00,000+",
        timeframe: "24–36 weeks",
        description: "Comprehensive Enterprise Resource Planning solution to streamline multi-branch distribution, warehouse inventory, and accounts.",
        features: [
          "Multi-Warehouse Real-Time Barcode Stock Sync",
          "Indian GSTN E-Way Bill & Automated Invoicing",
          "Biometric Hardware Sync & Automated Payroll",
          "Executive Real-Time P&L Dashboards"
        ],
        ideal: "Medium to large distributors & enterprises integrating operations",
        tag: "Enterprise Asset"
      },
      {
        title: "Custom CRM & Lead Pipeline",
        price: "₹2,50,000+",
        timeframe: "16–24 weeks",
        description: "Tailored Customer Relationship Management system to enhance sales tracking, deal velocity, and automated client follow-ups.",
        features: [
          "Automated Multi-Channel Lead Capture",
          "Deal Stage Pipeline & Sales Forecasting",
          "WhatsApp Cloud & Email Follow-Up Sequences",
          "Executive Performance & Conversion Analytics"
        ],
        ideal: "Sales-driven organizations and high-ticket B2B service firms",
        tag: "Premium"
      },
      {
        title: "Multi-Branch Supply Chain Suite",
        price: "₹3,50,000+",
        timeframe: "16–20 weeks",
        description: "Engineered specifically for Northeast supply routes, featuring real-time stock sync between central warehouses and regional retail branches.",
        features: [
          "Distributed Hub Inventory Requisitions",
          "Batch Serialization & Expiry Alert Tracking",
          "Automated PO Generation & Supplier Ledgers",
          "Sub-Second Multi-Branch Data Parity"
        ],
        ideal: "Regional wholesale distributors and retail branch networks",
        tag: "High Demand"
      }
    ]
  },
  {
    id: "web",
    name: "Web Solutions & Platforms",
    icon: Globe,
    tagline: "Sub-Second Next.js Architecture & High-Conversion Portals",
    description: "Edge-rendered web platforms built with Next.js and TypeScript. Sub-second load times, structured schema SEO, and direct WhatsApp booking routing.",
    offerings: [
      {
        title: "Flagship Business Website",
        price: "₹35,000+",
        timeframe: "4–6 weeks",
        description: "Professional, ultra-fast business platform designed to establish brand authority and generate qualified client inquiries.",
        features: [
          "Sub-Second Mobile Load Speed (< 1.1s)",
          "5–8 Custom Architectural Pages",
          "Direct WhatsApp & Contact Form Integrations",
          "Structured Local Schema & SEO Fundamentals"
        ],
        ideal: "SMEs & medical firms upgrading their online authority",
        tag: "Essential"
      },
      {
        title: "E-Commerce Web Platform",
        price: "₹75,000+",
        timeframe: "8–12 weeks",
        description: "Comprehensive online store with high-speed catalog browsing, secure Razorpay/Stripe checkout, and automated inventory sync.",
        features: [
          "High-Speed Dynamic Product Catalog & Filters",
          "Integrated Payment Gateways (Razorpay/UPI)",
          "Automated Order & Shipping Notifications",
          "Real-Time Inventory Stock Management"
        ],
        ideal: "Retailers selling products online natively",
        tag: "Premium"
      },
      {
        title: "Custom Web Application",
        price: "₹1,25,000+",
        timeframe: "12–20 weeks",
        description: "Bespoke SaaS and web applications engineered to solve specific operational challenges, client portals, and data workflows.",
        features: [
          "Dedicated Relational PostgreSQL Architecture",
          "Secure JWT & Role-Based Authentication",
          "Operational Process Automation & Webhooks",
          "RESTful & GraphQL API Integrations"
        ],
        ideal: "Businesses requiring custom software without per-seat fees",
        tag: "Enterprise"
      },
      {
        title: "Progressive Web App (PWA)",
        price: "₹85,000+",
        timeframe: "10–14 weeks",
        description: "Modern web applications that function like native mobile apps with offline caching and home screen installation without app store fees.",
        features: [
          "Offline Data Caching & Sync",
          "App-Like Smooth Gesture Experience",
          "Native Push Notifications",
          "Direct Web Installation Without App Store Fees"
        ],
        ideal: "App-like functionality with fast zero-friction user access",
        tag: "Modern Architecture"
      }
    ]
  },
  {
    id: "mobile",
    name: "Mobile Applications",
    icon: Smartphone,
    tagline: "Native iOS, Android & Cross-Platform Engineering",
    description: "High-performance native and cross-platform mobile applications engineered for fluid 60fps responsiveness, offline sync, and app store compliance.",
    offerings: [
      {
        title: "Cross-Platform Mobile App",
        price: "₹95,000+",
        timeframe: "10–14 weeks",
        description: "Cost-effective, high-performance mobile application deployed to both iOS and Android from a unified React Native codebase.",
        features: [
          "Unified Single Codebase Architecture",
          "Native-Like 60fps Responsive UI",
          "Push Notifications & Deep Linking",
          "Complete App Store & Play Store Submissions"
        ],
        ideal: "Companies targeting iOS and Android with balanced capital",
        tag: "Most Popular"
      },
      {
        title: "Native Android App",
        price: "₹1,25,000+",
        timeframe: "12–16 weeks",
        description: "Robust native Android application built with modern Kotlin for optimal performance across the diverse Android device ecosystem in India.",
        features: [
          "Modern Kotlin Architecture & Coroutines",
          "Material 3 Design Standard",
          "Hardware-Level Sensor & Camera Access",
          "Google Play Store Compliance & Publishing"
        ],
        ideal: "Businesses requiring dedicated high-performance Android apps",
        tag: "Native Precision"
      },
      {
        title: "Native iOS App",
        price: "₹1,50,000+",
        timeframe: "12–16 weeks",
        description: "Premium native iOS application engineered in Swift for silky smoothness, Apple design compliance, and seamless Apple ecosystem integration.",
        features: [
          "Swift & SwiftUI Modern Architecture",
          "Strict Apple Human Interface Guidelines",
          "Apple Pay & Biometric FaceID Authentication",
          "App Store Review & Release Guarantee"
        ],
        ideal: "Premium consumer brands and executive mobile tools",
        tag: "Premium"
      },
      {
        title: "E-Commerce Mobile App",
        price: "₹1,95,000+",
        timeframe: "16–20 weeks",
        description: "End-to-end shopping app with lightning-fast catalog search, one-tap UPI checkout, personalized cart notifications, and live delivery telemetry.",
        features: [
          "Ultra-Fast Product Discovery & Filter Engine",
          "Seamless One-Tap UPI Checkout Flow",
          "Live GPS Order & Delivery Telemetry",
          "Automated Re-Engagement Push Alerts"
        ],
        ideal: "Retailers looking to build high-LTV mobile customer loyalty",
        tag: "Enterprise"
      }
    ]
  },
  {
    id: "infrastructure",
    name: "Campus IT & Infrastructure",
    icon: Network,
    tagline: "Optical Fiber Backbones, Server Virtualization & Hardware Labs",
    description: "Turnkey hardware and network infrastructure engineered for schools, universities, and enterprise facilities. Battle-tested at Army Public School Narengi.",
    offerings: [
      {
        title: "Campus Optical Fiber Backbone",
        price: "Custom Scope",
        timeframe: "2–6 weeks",
        description: "Complete design, trenching, splicing, and termination of single-mode and multi-mode optical fiber connecting multiple campus blocks.",
        features: [
          "Redundant Gigabit Optical Fiber Topology",
          "Managed Layer-3 Switching & VLAN Isolation",
          "Enterprise Perimeter Firewall & Bandwidth Control",
          "Campus-Wide Zero-Downtime Wi-Fi Mesh"
        ],
        ideal: "Educational campuses, corporate headquarters, and hospital blocks",
        tag: "Mission Critical"
      },
      {
        title: "Institutional Computer Lab Setup",
        price: "Custom Scope",
        timeframe: "2–4 weeks",
        description: "Turnkey computer laboratory setups including workstations, thin-client virtualization, structured CAT6 cabling, and server configuration.",
        features: [
          "40+ High-Performance Workstation Deployment",
          "Centralized Server Image Virtualization",
          "Structured Rack Layout & UPS Power Redundancy",
          "Local Hardware Spares Inventory & Staff Training"
        ],
        ideal: "Schools, Colleges, Robotics Hubs & Training Centers",
        tag: "Turnkey Setup"
      }
    ]
  },
  {
    id: "bundles",
    name: "Integrated Bundles",
    icon: PackageCheck,
    tagline: "Turnkey Multi-Platform Systems with Capital Efficiency",
    description: "Comprehensive software and digital growth bundles designed to launch your business with maximum velocity and integrated data architecture.",
    offerings: [
      {
        title: "Digital Presence Bundle",
        price: "₹1,25,000+",
        timeframe: "12–16 weeks",
        description: "All-in-one launch ecosystem including high-speed business website, cross-platform mobile app, and local search dominance setup.",
        features: [
          "Flagship Responsive Web Platform",
          "Cross-Platform Mobile App (iOS & Android)",
          "Google Maps & Local Search Authority Engine",
          "Automated WhatsApp Lead Routing Webhook"
        ],
        ideal: "Companies launching a complete digital footprint with unified branding",
        tag: "Best Capital Value"
      },
      {
        title: "Complete E-Commerce Suite",
        price: "₹2,50,000+",
        timeframe: "20–28 weeks",
        description: "Full-scale commerce ecosystem combining high-speed web storefront, consumer mobile apps, backend warehouse sync, and payment gateways.",
        features: [
          "High-Conversion Next.js Web Storefront",
          "Consumer Mobile Apps (iOS & Android)",
          "Multi-Warehouse Inventory & Order System",
          "Automated Marketing & Cart Recovery Automation"
        ],
        ideal: "Direct-to-consumer brands and distributors scaling omnichannel sales",
        tag: "Complete Ecosystem"
      }
    ]
  }
];

const marketingPackages = [
  {
    name: "Essential",
    price: "₹15,000",
    period: "/ month",
    idealFor: "Basic Regional Presence",
    badge: "Foundation",
    isPopular: false,
    features: [
      { name: "Content System", value: "Core Brand Identity" },
      { name: "Ad-Focused Reels", value: "4 Reels / Month (Client Clips)" },
      { name: "Creative Posts", value: "12 Designs / Month" },
      { name: "Professional Shoot", value: "—" },
      { name: "Ads Management", value: "Meta Ads (Facebook & Instagram)" },
      { name: "Lead Strategy", value: "Basic Inbound Lead Campaigns" },
      { name: "WhatsApp Automation", value: "—" },
      { name: "Google Presence", value: "Basic GMB Setup & Verification" },
      { name: "Reporting", value: "Monthly Summary Report" },
      { name: "Support SLA", value: "Standard Business Hours" }
    ]
  },
  {
    name: "Growth",
    price: "₹25,000",
    period: "/ month",
    idealFor: "Scaling Inquiries & Footfall",
    badge: "Most Popular",
    isPopular: true,
    features: [
      { name: "Content System", value: "High-Conversion Content Engine" },
      { name: "Ad-Focused Reels", value: "8 Reels / Month (Incl. 1 Shoot Session)" },
      { name: "Creative Posts", value: "20 Designs / Month" },
      { name: "Professional Shoot", value: "1 On-Site Session / Month" },
      { name: "Ads Management", value: "Meta + Google Search Ads" },
      { name: "Lead Strategy", value: "Optimized Multi-Channel Lead Funnels" },
      { name: "WhatsApp Automation", value: "Automated WhatsApp Lead Routing" },
      { name: "Google Presence", value: "Optimized Local Google Maps Authority" },
      { name: "Reporting", value: "Bi-Weekly Actionable Analytics" },
      { name: "Support SLA", value: "Priority Engineering Lead Access" }
    ]
  },
  {
    name: "Dominance",
    price: "₹60,000",
    period: "/ month",
    idealFor: "Aggressive Market Leadership",
    badge: "Full Scale",
    isPopular: false,
    features: [
      { name: "Content System", value: "Full-Scale Daily Media Production" },
      { name: "Ad-Focused Reels", value: "12 Reels / Month (Weekly Shoots)" },
      { name: "Creative Posts", value: "30 Designs / Month" },
      { name: "Professional Shoot", value: "4 On-Site Sessions / Month (Weekly)" },
      { name: "Ads Management", value: "Advanced Funnels, Lookalikes & Retargeting" },
      { name: "Lead Strategy", value: "Full-Funnel High-Ticket Acquisition" },
      { name: "WhatsApp Automation", value: "Full Automated Booking & Webhooks" },
      { name: "Google Presence", value: "Aggressive Local SERP #1 Dominance" },
      { name: "Reporting", value: "Executive Scaling Metrics Dashboard" },
      { name: "Support SLA", value: "Dedicated 24/7 Priority Manager" }
    ]
  }
];

const maintenancePlans = [
  {
    title: "Essential Maintenance",
    price: "₹5,000",
    period: "/ month",
    description: "Foundational maintenance package ensuring your systems remain secure, operational, and patched with standard monitoring.",
    features: [
      "Security patches & vulnerability updates",
      "Uptime & database performance monitoring",
      "Minor bug fixes & code adjustments (10 hrs/mo)",
      "Automated weekly database backups",
      "Guwahati business hours email support"
    ],
    badge: "Core Stability"
  },
  {
    title: "Premium Support",
    price: "₹12,000",
    period: "/ month",
    description: "Comprehensive support for business-critical software requiring active feature enhancements, daily backups, and priority response.",
    features: [
      "All Essential features included",
      "Minor feature enhancements & tweaks (20 hrs/mo)",
      "Daily automated encrypted database snapshots",
      "Priority response SLA (< 4 hours)",
      "Dedicated staging environment maintenance",
      "Quarterly performance & database optimization"
    ],
    badge: "Recommended",
    isPopular: true
  },
  {
    title: "Enterprise Care",
    price: "₹25,000",
    period: "/ month",
    description: "Complete SLA care package for enterprise ERPs and hospital platforms requiring 24/7 emergency response and dedicated engineering leads.",
    features: [
      "All Premium features included",
      "Dedicated Senior Systems Architect",
      "24/7 Emergency response SLA (< 1 hour)",
      "On-site Assam physical emergency dispatch",
      "Monthly architectural review & scale roadmap",
      "Unlimited critical priority patches"
    ],
    badge: "Mission Critical"
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("healthcare");

  const activeCategory = serviceCategories.find((c) => c.id === activeTab) || serviceCategories[0];

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl">

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/30 text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Capabilities & Pricing Catalogue // Transparent Specifications
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8 leading-[1.08]">
            Transparent Pricing. <br className="hidden sm:block" />
            <span className="text-gradient">Engineered for Predictable Scale.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-10">
            From ABDM-compliant clinical software and custom cloud ERPs to native mobile apps, growth marketing, and enterprise SLAs. Review transparent pricing, deliverables, and timelines.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="#software">
              <Button size="lg" className="h-13 px-8 text-xs font-mono uppercase tracking-wider font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Software & Platforms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#marketing">
              <Button variant="outline" size="lg" className="h-13 px-7 text-xs font-mono uppercase tracking-wider font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
                Marketing Packages
              </Button>
            </Link>
            <Link href="#maintenance">
              <Button variant="ghost" size="lg" className="h-13 px-7 text-xs font-mono uppercase tracking-wider font-medium rounded-full text-muted-foreground hover:text-foreground">
                SLA & Support Plans
              </Button>
            </Link>
          </div>
        </div>

        {/* Governance Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden mb-24 border border-border/60">
          {[
            { label: "Core Categories", value: "6 Disciplines", sub: "Clinical, ERP, Web, Mobile, Hardware" },
            { label: "Code Sovereignty", value: "100% Owned", sub: "Zero vendor lock-in" },
            { label: "SaaS Per-Seat Debt", value: "₹0 Forever", sub: "Unlimited team seats" },
            { label: "Emergency SLA", value: "< 2 Hours", sub: "Local Guwahati engineers" }
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
              Custom Software & Platform Solutions
            </h2>
            <p className="text-muted-foreground mt-3 text-sm font-light">
              Explore dedicated software offerings with transparent pricing estimates, delivery timeframes, and core module deliverables.
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
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
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
                Discuss {activeCategory.name}
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
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-secondary text-foreground/80 border border-border/50">
                        {offering.tag}
                      </span>
                      <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3 text-primary" />
                        {offering.timeframe}
                      </span>
                    </div>

                    <h4 className="text-2xl font-black font-heading text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {offering.title}
                    </h4>

                    {/* Price Callout */}
                    <div className="mb-4 pb-3 border-b border-border/40 flex items-baseline gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Estimate:</span>
                      <span className="text-xl sm:text-2xl font-black font-heading text-foreground tracking-tight">
                        {offering.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed mb-6">
                      {offering.description}
                    </p>

                    {/* Ideal For */}
                    <div className="mb-6 p-3 rounded-xl bg-secondary/30 border border-border/40 text-xs">
                      <strong className="text-foreground font-mono uppercase text-[10px] tracking-wider block mb-0.5">
                        Target Operational Profile:
                      </strong>
                      <span className="text-muted-foreground font-light">{offering.ideal}</span>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-2.5">
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

        {/* --- SECTION 2: Marketing & Growth Packages --- */}
        <section id="marketing" className="mb-32 scroll-mt-28">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Performance Marketing & SEO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mt-2">
              Growth & Patient Acquisition Packages
            </h2>
            <p className="text-muted-foreground mt-3 text-sm font-light">
              Data-driven creative production, on-site video shoots, Google Maps local SERP domination, and automated WhatsApp appointment routing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl glass-card dark:glass-card-dark border transition-all duration-300 p-6 md:p-8 flex flex-col justify-between ${
                  pkg.isPopular
                    ? "border-primary/80 shadow-lg shadow-primary/10 relative"
                    : "border-border/60 hover:border-primary/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-secondary text-foreground/80 border border-border/50">
                      {pkg.badge}
                    </span>
                    {pkg.isPopular && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/15 text-primary font-bold border border-primary/30">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black font-heading text-foreground tracking-tight mb-1">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground font-light mb-6">
                    Ideal For: <strong className="text-foreground font-medium">{pkg.idealFor}</strong>
                  </p>

                  <div className="mb-8 pb-6 border-b border-border/40 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black font-heading text-foreground tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {pkg.period}
                    </span>
                  </div>

                  {/* 10-Point Feature Spec */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start justify-between gap-2 text-xs border-b border-border/20 pb-2">
                        <span className="text-muted-foreground font-mono text-[11px]">{feat.name}</span>
                        <span className="text-foreground font-medium text-right text-xs">{feat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <Link href={`/contact?service=${encodeURIComponent(pkg.name + ' Marketing Package')}`} className="block">
                    <Button 
                      className={`w-full h-11 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                        pkg.isPopular
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:opacity-90"
                          : "border border-border/80 bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      }`}
                    >
                      Select {pkg.name}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: Maintenance & Support SLA --- */}
        <section id="maintenance" className="mb-32 scroll-mt-28">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Guaranteed Uptime & Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mt-2">
              Ongoing Maintenance & Support SLAs
            </h2>
            <p className="text-muted-foreground mt-3 text-sm font-light">
              Ensure continuous security, zero software rot, automated database backups, and emergency on-site engineer dispatch across Assam.
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
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-secondary text-foreground/80 border border-border/50">
                      {plan.badge}
                    </span>
                    {plan.isPopular && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/15 text-primary font-bold border border-primary/30">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black font-heading text-foreground tracking-tight mb-2">
                    {plan.title}
                  </h3>

                  <div className="mb-4 pb-4 border-b border-border/40 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black font-heading text-foreground tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {plan.period}
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
                      Secure {plan.title}
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
              Speak directly with our technical leads in Guwahati. We will audit your existing workflows, database schemas, and hardware setup with zero commercial fluff.
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
