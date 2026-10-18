import type { Metadata } from "next";
import Link from "next/link";
import { 
  Database, ShieldCheck, CheckCircle2, ArrowRight, 
  Phone, Server, Cpu, FileText, Check, ArrowUpRight, 
  Clock, MapPin, Building2, Layers, BarChart3, 
  Truck, PackageCheck, Receipt, Lock, RefreshCw, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Custom ERP Software Company in Assam | Multi-Branch Cloud ERP Guwahati",
  description:
    "RH Dynamics builds bespoke Cloud ERP software in Assam for wholesale distributors, tea garden estates, pharmaceutical stockists, and multi-branch retail. Real-time warehouse inventory sync, automated Indian GST e-way bills, and supply chain control.",
  keywords: [
    "custom erp software company in assam",
    "cloud erp software guwahati",
    "inventory management software assam",
    "multi branch warehouse software northeast india",
    "gst billing and erp software assam",
    "tea garden management software assam",
    "distribution supply chain software guwahati",
    "fmcg distributor billing software assam",
    "pharmaceutical stockist software northeast india",
    "custom software development company guwahati"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/custom-erp-software-assam",
  },
  openGraph: {
    title: "Custom ERP Software in Assam | Multi-Branch Inventory & GST Automation",
    description:
      "Enterprise Cloud ERP built for Assam's trade, distribution, and manufacturing sectors. Real-time multi-branch stock sync, automated GST e-Invoicing, and dedicated source code ownership.",
    url: "https://rhdynamics.in/custom-erp-software-assam",
    images: ["/opengraph-image"],
  },
};

export default function CustomErpSoftwareAssamPage() {
  const erpPillars = [
    {
      title: "Multi-Branch Stock Synchronization",
      metric: "Real-Time Telemetry",
      desc: "Synchronize central warehouses, regional depots, and retail outlets across Assam with instant stock transfer vouchers, batch tracking, and low-inventory alerts."
    },
    {
      title: "Indian GST & e-Way Bill Engine",
      metric: "100% Tax Compliant",
      desc: "Generate GST e-invoices, QR codes, and e-way bills automatically. Reconcile GSTR-1, GSTR-2B, and GSTR-3B with zero manual bookkeeping discrepancies."
    },
    {
      title: "B2B Distributor & Order Portals",
      metric: "Zero Order Delays",
      desc: "Equip your sales representatives and dealer network with a fast web/mobile ordering portal with live price lists, credit limits, and payment tracking."
    },
    {
      title: "Dedicated Code & DB Ownership",
      metric: "Zero Vendor Lock-in",
      desc: "Unlike generic SaaS with recurring per-user fees that trap your proprietary trade data, we deliver dedicated database clustering and tailored software architecture."
    }
  ];

  const industrySectors = [
    {
      title: "Wholesale & FMCG Distribution",
      desc: "Fast counter billing, route-based delivery dispatch, credit aging ledgers, van sales sync, and scheme/discount automation for high-volume distributors."
    },
    {
      title: "Tea Estates & Processing Factories",
      desc: "Green leaf weighing telemetry, garden dispatch tracking, auction invoicing, worker attendance payroll, and pesticide/fertilizer inventory control."
    },
    {
      title: "Pharmaceutical Stockists & C&F",
      desc: "Mandatory batch-number serialization, automated expiry & breakages management, scheduled drug ledgers, and fast chemist order processing."
    },
    {
      title: "Multi-Store Retail & Supermarkets",
      desc: "Centralized pricing controls, barcode POS counter billing, loyalty point ledgers, unified purchase orders, and inter-branch inventory rebalancing."
    },
    {
      title: "Construction & Infrastructure Supply",
      desc: "Project milestone billing, raw material consumption tracking, subcontractor ledgers, machinery rental schedules, and site expense accounting."
    },
    {
      title: "Agro-Trading & Cold Storages",
      desc: "Commodity storage lot tracking, weight bridge integration, moisture loss calculations, farmer procurement ledgers, and mandi trade reconciliation."
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Supply Chain & Workflow Audit",
      desc: "Our senior software architects analyze your inventory bottlenecks, multi-branch logistics, and accounting pain points on-site in Assam."
    },
    {
      step: "02",
      title: "Custom Scope & Milestone Blueprint",
      desc: "We deliver a transparent, binding Scope of Work (SOW). Transparent commercial milestones: 50% mobilization upfront and 50% upon complete UAT handover."
    },
    {
      step: "03",
      title: "Agile Development & Core Integration",
      desc: "We engineer your bespoke ERP modules, connecting your warehouse barcode scanners, tally historical data imports, and GST API gateways."
    },
    {
      step: "04",
      title: "On-Site Deployment & Staff Training",
      desc: "Our engineering team conducts hands-on warehouse and accounts training across your Guwahati and Assam branches with zero disruption to daily sales."
    },
    {
      step: "05",
      title: "< 2-Hour Ongoing Response SLA",
      desc: "Guaranteed support via direct phone, WhatsApp, and on-site visits to ensure your enterprise operations never face unexpected software downtime."
    }
  ];

  const comparisonMatrix = [
    {
      feature: "Multi-Branch Synchronization",
      rh: "Instant real-time cloud database: All branches, godowns, and billing counters see live stock immediately.",
      legacy: "Offline accounting software requiring daily manual sync, pen-drives, or error-prone third-party plugins."
    },
    {
      feature: "Custom Workflow Flexibility",
      rh: "Engineered around your exact business model, custom pricing rules, and specialized regional trade requirements.",
      legacy: "Rigid one-size-fits-all software that forces your team to adapt business operations around software limits."
    },
    {
      feature: "E-Way Bills & Indian GST",
      rh: "Direct 1-click GST e-invoicing and e-way bill generation with automatic GSTR reconciliation.",
      legacy: "Manual copy-pasting of invoice details into government web portals, wasting hours every business day."
    },
    {
      feature: "Ownership & Cloud Control",
      rh: "Dedicated isolated database clustering, automated nightly immutable backups, and optional source ownership.",
      legacy: "Vulnerable desktop hard drives subject to ransomware, power surges, or monthly recurring per-user penalties."
    },
    {
      feature: "Executive Business Analytics",
      rh: "Interactive real-time dashboards showing gross margins, dead inventory stock, and outstanding credit aging.",
      legacy: "Static black-and-white reports that require tedious manual export and hours of Excel crunching."
    },
    {
      feature: "Support Responsiveness in Assam",
      rh: "Direct engineering access with committed < 2-hour SLA response across Assam via phone, WhatsApp & on-site.",
      legacy: "Automated ticket queues with generic call centers that take 3-5 business days to address urgent billing issues."
    }
  ];

  const faqs = [
    {
      q: "Can you migrate our historical accounting and inventory data from Tally or Excel?",
      a: "Yes. Our data engineering team extracts, cleanses, and maps your existing ledgers, item masters, customer accounts, and opening stock balances from Tally, Busy, Marg, or custom Excel spreadsheets directly into your new custom Cloud ERP."
    },
    {
      q: "How does the commercial milestone structure work for custom ERP development?",
      a: "At RH Dynamics, we operate under transparent commercial terms: 50% upfront mobilization upon project kickoff, and the remaining 50% upon complete User Acceptance Testing (UAT), staff sign-off, and production handover."
    },
    {
      q: "Can the ERP work across multiple godowns and branches in different districts of Assam?",
      a: "Yes. RH CORE™ Cloud ERP is engineered specifically for multi-location enterprises. Your headquarters in Guwahati can oversee live inventory, daily sales, and dispatch tracking across branches in Dibrugarh, Jorhat, Tinsukia, and Silchar seamlessly."
    },
    {
      q: "Does the software generate automated GST e-way bills and e-invoices?",
      a: "Yes. The ERP connects with authorized GST Suvidha Provider (GSP) APIs to generate IRN e-invoices with signed QR codes and dispatch e-way bills in a single click directly from the sales dispatch screen."
    },
    {
      q: "Do you provide on-site training for our warehouse staff and accountants?",
      a: "Yes. We believe software success depends on staff adoption. Our engineering team provides dedicated on-site training for your billing operators, warehouse pickers, and chartered accountants in Assam."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "RH CORE™ Cloud ERP & SCM Platform",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, Cloud, Windows, macOS, Android, iOS",
                "description": "Custom Cloud ERP & Supply Chain Management Software in Assam for multi-branch inventory sync, Indian GST billing, and enterprise trade distribution.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR",
                  "description": "Custom Enterprise Scope Pricing upon consultation"
                },
                "provider": {
                  "@type": "Organization",
                  "name": "RHD Software Solutions LLP",
                  "url": "https://rhdynamics.in",
                  "logo": "https://rhdynamics.in/images/rh-official-logo.jpg",
                  "telephone": "+918638875149"
                }
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

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono font-medium mb-6">
            <Database className="w-4 h-4" />
            <span>ENTERPRISE CLOUD ERP &amp; SCM // ASSAM &amp; NORTHEAST</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.08] mb-6">
            Custom ERP Software in Assam.{" "}
            <span className="bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Multi-Branch Inventory &amp; GST Automation.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-4xl mb-8 leading-relaxed">
            Break free from rigid offline accounting tools and spreadsheets. <strong className="text-foreground font-medium">RH Dynamics</strong> engineers bespoke Cloud ERP systems tailored for Assam's wholesale distributors, tea estates, pharmaceutical stockists, and retail chains. Real-time multi-branch inventory, 1-click GST e-way bills, and local on-site support.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-wider h-13 px-8 rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/contact">
                <span>Request Custom ERP Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider h-13 px-8 rounded-full border-border/80" asChild>
              <a href="tel:+918638875149">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>Call ERP Architects: +91 86388 75149</span>
              </a>
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-10 border-t border-border/40">
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                100%
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                Live Multi-Branch Stock Sync
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                1-Click
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                GST e-Way Bill &amp; e-Invoice
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                50 / 50
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                Transparent Milestones
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                &lt; 2-Hour
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                Response SLA Across Assam
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="py-20 sm:py-28 border-b border-border/40 bg-secondary/10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              High-Performance Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              Engineered for Assam's High-Velocity Trading &amp; Supply Chains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {erpPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-8 sm:p-10 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold">
                    {pillar.metric}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="py-20 sm:py-28 border-b border-border/40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
                Industry-Specific Workflows
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
                Tailored Across Northeast India's Commercial Hubs
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md font-light leading-relaxed">
              We design bespoke operational workflows specifically matched to your sector's regulatory standards and inventory flow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySectors.map((sector, idx) => (
              <div 
                key={idx}
                className="p-7 sm:p-8 rounded-2xl border border-border/70 bg-card/60 hover:border-purple-500/50 transition-colors"
              >
                <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-3">
                  {sector.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Delivery Pipeline */}
      <section className="py-20 sm:py-28 border-b border-border/40 bg-secondary/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Implementation Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              From Process Audit to Production Handover
            </h2>
          </div>

          <div className="space-y-5">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-5 sm:gap-8 p-7 sm:p-8 rounded-2xl border border-border/60 bg-card/40 hover:bg-card/80 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center font-mono font-black text-xl text-primary shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-20 sm:py-28 border-b border-border/40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Technical Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              RH Dynamics Custom ERP vs. Generic Accounting Software
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border/80">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-border/80 bg-secondary/30">
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-muted-foreground w-1/4">
                    Enterprise Parameter
                  </th>
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-primary font-bold w-3/8 bg-primary/5">
                    RH Dynamics Custom Cloud ERP
                  </th>
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-muted-foreground w-3/8">
                    Standard Desktop Accounting Software
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-sm sm:text-base">
                {comparisonMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-5 px-6 font-heading font-bold text-foreground">
                      {item.feature}
                    </td>
                    <td className="py-5 px-6 bg-primary/[0.03] text-foreground font-light">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-purple-500 shrink-0 mt-1" />
                        <span>{item.rh}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-muted-foreground font-light">
                      <span>{item.legacy}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Assam Commercial Coverage */}
      <section className="py-20 sm:py-28 border-b border-border/40 bg-secondary/10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Assam Operational Network
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
              Powering Enterprises Across Industrial Corridors
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              We provide on-site workflow audits, warehouse scanner setup, accountant training, and rapid technical dispatch.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-mono">
            {[
              "Guwahati (Paltan Bazar & Machkhowa)",
              "Beltola & Khanapara Logistics",
              "Upper Assam HQ (Golaghat)",
              "Jorhat Tea & Trading Hub",
              "Dibrugarh & Tinsukia Industrial",
              "Silchar & Barak Trade Belt",
              "Tezpur & Sonitpur Distribution",
              "Bongaigaon Commercial Corridor"
            ].map((loc, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-border/60 bg-card/60 flex items-center justify-center gap-2 text-foreground font-medium">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 border-b border-border/40">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Enterprise Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              Frequently Asked Questions (Custom ERP)
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="p-7 sm:p-8 rounded-2xl border border-border/70 bg-card/40 hover:border-border transition-colors"
              >
                <h3 className="text-lg font-heading font-bold text-foreground mb-3 flex items-center gap-2.5">
                  <span className="text-primary font-mono text-sm sm:text-base">Q{idx + 1}.</span>
                  {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            Transparent Milestone Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-5">
            Take Full Control of Your Enterprise Operations &amp; Supply Chain.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience real-time multi-branch stock visibility and 1-click GST e-invoicing. Book an on-site process consultation with our ERP engineers today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-wider h-13 px-8 w-full sm:w-auto rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/contact">
                <span>Request ERP Architecture Blueprint</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider h-13 px-8 w-full sm:w-auto rounded-full border-border/80" asChild>
              <a href="tel:+918638875149">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>Call ERP Architects: +91 86388 75149</span>
              </a>
            </Button>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-mono text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-purple-500" /> RHD Software Solutions LLP (ACN-1931)
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-purple-500" /> DPIIT Recognized Startup
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-purple-500" /> &lt; 2-Hour Response SLA
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}
