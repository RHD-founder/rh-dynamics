import type { Metadata } from "next";
import Link from "next/link";
import { 
  FlaskConical, Smartphone, ShieldCheck, CheckCircle2, 
  ArrowRight, Phone, Activity, Database, Server, 
  FileText, Check, ArrowUpRight, Clock, MapPin, 
  Building2, MessageSquare, Zap, Cpu, ScanLine, 
  QrCode, AlertTriangle, Users, Layers, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pathology Lab Software in Assam & Diagnostic LIS Guwahati | RH CORE™ LIS",
  description:
    "RH CORE™ LIS is Assam's #1 Cloud Laboratory Information System for pathology & diagnostic centers. Features bidirectional analyzer interfacing (Sysmex, Mindray, Erba, Roche), sub-2s WhatsApp PDF reports, barcode accessioning, and NABL audit trails.",
  keywords: [
    "pathology lab software in assam",
    "diagnostic lis software guwahati",
    "pathology reporting software assam",
    "laboratory information system guwahati",
    "analyzer interfacing software northeast india",
    "blood test reporting software assam",
    "pathology software with whatsapp reports",
    "nabl compliant lab software assam",
    "rh core lis",
    "pathology billing software guwahati",
    "diagnostic lab management system silchar dibrugarh jorhat"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/pathology-lab-software-assam",
  },
  openGraph: {
    title: "Pathology Lab Software in Assam | Automated WhatsApp Reports & Machine Interfacing",
    description:
      "Modernize your diagnostic laboratory with RH CORE™ LIS. Direct ASTM/HL7 analyzer sync, automated WhatsApp PDF dispatch in < 2s, barcode accessioning, and NABL compliance.",
    url: "https://rhdynamics.in/pathology-lab-software-assam",
    images: ["/opengraph-image"],
  },
};

export default function PathologyLabSoftwareAssamPage() {
  const diagnosticPillars = [
    {
      title: "Sub-2s WhatsApp Delivery",
      metric: "< 1.8s Dispatch",
      desc: "QR-verified, tamper-evident PDF test reports sent automatically to the patient's WhatsApp mobile the instant the pathologist digitally approves."
    },
    {
      title: "Bidirectional Machine Interfacing",
      metric: "ASTM & HL7 Ready",
      desc: "Direct integration with Sysmex, Mindray, Erba, Roche, Transasia, Horiba, and Beckman Coulter analyzers. Zero manual report typing errors."
    },
    {
      title: "Sample Barcode Accessioning",
      metric: "100% Traceability",
      desc: "Instant thermal barcode sticker generation upon patient registration. Automated sample routing from phlebotomy counter to technician workstation."
    },
    {
      title: "NABL & Doctor Ledgers",
      metric: "Audit-Ready Logs",
      desc: "Standardized reference ranges by age/gender, delta checks, critical abnormal value alarms, and automated referral doctor commission accounting."
    }
  ];

  const analyzerBrands = [
    { name: "Sysmex", category: "Hematology (XN, XP, KX Series)" },
    { name: "Mindray", category: "Biochemistry & Hematology (BS, BC Series)" },
    { name: "Erba Mannheim", category: "Clinical Chemistry (EM 200, XL Series)" },
    { name: "Roche Cobas", category: "Immunology & Clinical Chemistry" },
    { name: "Transasia / Erba", category: "Coagulation & Urinalysis Systems" },
    { name: "Horiba Medical", category: "Microsemi CRP & Pentra Series" },
    { name: "Beckman Coulter", category: "Access & AU Series Clinical Systems" },
    { name: "Bio-Rad Laboratories", category: "HbA1c D-10 & Variant HPLC Systems" }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Rapid Registration & Barcoding",
      desc: "Reception enters patient details or scans ABHA ID. System prints serialized barcode stickers with test profiles for sample collection vials."
    },
    {
      step: "02",
      title: "Phlebotomy & Sample Ingestion",
      desc: "Phlebotomist draws blood or collects sample, attaches barcode, and clicks 'Sample Collected'. Real-time status syncs across the lab."
    },
    {
      step: "03",
      title: "Automated Analyzer Processing",
      desc: "Analyzer reads barcode, pulls test list via bidirectional ASTM protocol, executes testing, and pushes raw numeric values back into RH CORE™ LIS."
    },
    {
      step: "04",
      title: "Pathologist Review & Digital Signature",
      desc: "Pathologist reviews highlighted flags (critical abnormal values), applies digital signature stamp with 1 click on desktop, tablet, or smartphone."
    },
    {
      step: "05",
      title: "Sub-2s WhatsApp PDF Dispatch",
      desc: "The cloud engine renders an encrypted, hospital/lab letterhead PDF with dynamic verification QR code and transmits it to the patient's WhatsApp."
    }
  ];

  const comparisonMatrix = [
    {
      feature: "Patient Report Delivery",
      rh: "Instant WhatsApp PDF (< 2s) with tamper-proof QR verification. 0 counter crowds.",
      legacy: "Patients must return hours later or queue up at crowded counters to collect paper copies."
    },
    {
      feature: "Analyzer Machine Data Entry",
      rh: "Bidirectional ASTM/HL7 interfacing: Results populate automatically with zero typos.",
      legacy: "Technicians manually retype 40+ numeric parameters per sample, risking fatal errors."
    },
    {
      feature: "Multi-Center / Collection Sync",
      rh: "Unified cloud database: Sync regional collection centers in Dispur, Jorhat, and Silchar in real time.",
      legacy: "Isolated offline computers with manual pen-drive or email transfers between branches."
    },
    {
      feature: "Doctor Referral Ledgers",
      rh: "Automated referral commission calculations, incentive ledgers, and doctor monthly payout reports.",
      legacy: "Manual Excel sheets prone to lost accounting, billing disputes, and human miscalculations."
    },
    {
      feature: "Regulatory & Quality Standard",
      rh: "NABL audit trails, reagent consumption tracking, delta checks, and ABHA/ABDM M1-M3 integration.",
      legacy: "No audit trails, static 2012-era templates, and zero national digital health compliance."
    },
    {
      feature: "Local Engineering Support",
      rh: "Guwahati-based engineering hub with committed < 2-hour response SLA via Phone, WhatsApp & On-site.",
      legacy: "Distant resellers from Delhi or Kolkata with days of phone latency and zero on-site assistance."
    }
  ];

  const faqs = [
    {
      q: "Can RH CORE™ LIS interface with our existing laboratory analyzers?",
      a: "Yes. RH CORE™ LIS supports both unidirectional and bidirectional interfacing via standard RS-232 serial, TCP/IP, ASTM E1381/E1394, and HL7 protocols. We natively connect with Sysmex, Mindray, Erba, Roche, Transasia, Horiba, Beckman Coulter, Bio-Rad, and other major clinical analyzers."
    },
    {
      q: "How does the automated WhatsApp report delivery work?",
      a: "As soon as your authorized pathologist verifies and digitally signs the test results, our cloud engine automatically generates a high-resolution, branded PDF report with an embedded verification QR code. This PDF is dispatched via our official WhatsApp messaging gateway directly to the patient's mobile number in less than 2 seconds."
    },
    {
      q: "Is RH CORE™ LIS suitable for both single labs and multi-branch diagnostic chains?",
      a: "Absolutely. RH CORE™ is built on an enterprise cloud architecture. Whether you run a standalone pathology center in Guwahati or operate multiple sample collection centers across Jorhat, Dibrugarh, Tezpur, and Silchar, all samples, billing, and reports synchronize into a single centralized dashboard in real time."
    },
    {
      q: "Does the software support doctor referral commission accounting?",
      a: "Yes. You can configure custom referral incentive structures per doctor or test category. The system automatically computes referral ledgers, tracks monthly settlement payouts, and generates detailed financial transparency reports."
    },
    {
      q: "What is your support and implementation turnaround in Assam?",
      a: "With our engineering headquarters in Upper Assam and our regional operational hub in Guwahati (near Downtown Hospital), we offer complete on-site setup, staff training, analyzer connectivity testing, and a guaranteed < 2-hour support response SLA."
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
                "name": "RH CORE™ LIS - Pathology Laboratory Information System",
                "applicationCategory": "HealthApplication",
                "operatingSystem": "Web, Cloud, Windows, macOS, Android, iOS",
                "description": "ABDM-compliant Pathology Laboratory Software in Assam with bidirectional analyzer interfacing, barcode accessioning, and automated WhatsApp PDF report delivery.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR",
                  "description": "Custom Enterprise Scope Pricing upon consultation"
                },
                "provider": {
                  "@type": "Organization",
                  "name": "RHD Softwaresolutions LLP",
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-6">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>CLINICAL DIAGNOSTICS &amp; LIS // ASSAM &amp; NORTHEAST</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-6">
            Next-Gen Pathology Lab Software in Assam.{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Automated WhatsApp Reports &amp; Machine Interfacing.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground font-light max-w-3xl mb-8 leading-relaxed">
            Eliminate reception queues, transcription errors, and paper clutter. <strong className="text-foreground font-medium">RH CORE™ LIS</strong> by RH Dynamics seamlessly synchronizes clinical analyzers (Sysmex, Mindray, Erba, Roche), prints barcode accession labels, and delivers encrypted PDF test results straight to patient WhatsApp in under 2 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-wider h-12 px-6" asChild>
              <Link href="/contact">
                <span>Book Live Pathology LIS Demo</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider h-12 px-6 border-border/80" asChild>
              <a href="tel:+918638875149">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>Call Lab Engineers: +91 86388 75149</span>
              </a>
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-10 border-t border-border/40">
            <div>
              <span className="text-2xl sm:text-3xl font-heading font-black text-foreground block">
                &lt; 1.8s
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                WhatsApp PDF Dispatch
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-heading font-black text-foreground block">
                100%
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                Zero Typo Analyzer Sync
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-heading font-black text-foreground block">
                NABL
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                Standard Audit Trails
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-heading font-black text-foreground block">
                &lt; 2-Hour
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                Local On-Site SLA in Assam
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="py-16 sm:py-24 border-b border-border/40 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Enterprise Engineering For Diagnostic Labs
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight">
              Built to Solve The Daily Friction in Pathology Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diagnosticPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold">
                    {pillar.metric}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Workflow Section */}
      <section className="py-16 sm:py-24 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Automated Diagnostic Telemetry
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight">
              From Blood Sample Collection to WhatsApp PDF in 5 Steps
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl font-light">
              Watch how RH CORE™ LIS automates your laboratory pipeline without manual retyping or missing patient contact details.
            </p>
          </div>

          <div className="space-y-4">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 rounded-2xl border border-border/60 bg-card/40 hover:bg-card/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-mono font-black text-lg text-primary shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analyzer Integration Ecosystem */}
      <section className="py-16 sm:py-24 border-b border-border/40 bg-secondary/15">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
                Universal Machine Compatibility
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight">
                Interfaced with Major Clinical Analyzers
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md font-light">
              Our engineering team configures direct RS232 serial and TCP/IP LAN socket listeners on-site at your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {analyzerBrands.map((brand, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl border border-border/70 bg-card/60 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Cpu className="w-4 h-4 text-emerald-500" />
                  <span className="font-heading font-bold text-sm text-foreground">
                    {brand.name}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground block">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3 text-xs font-mono text-muted-foreground">
            <Zap className="w-4 h-4 text-primary shrink-0" />
            <span>Have a specialized or imported analyzer? Our team writes bespoke ASTM/HL7 driver interfaces during on-site deployment.</span>
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Modern Cloud vs Legacy CD/EXE */}
      <section className="py-16 sm:py-24 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Architecture &amp; Value Analysis
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight">
              RH CORE™ LIS Cloud vs. Outdated Desktop EXEs
            </h2>
            <p className="text-sm text-muted-foreground font-light mt-2">
              Why diagnostic centers across Guwahati and Assam are migrating away from legacy offline software.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border/80">
                  <th className="py-3 px-4 font-mono text-xs uppercase tracking-wider text-muted-foreground w-1/4">
                    Capability
                  </th>
                  <th className="py-3 px-4 font-mono text-xs uppercase tracking-wider text-primary font-bold w-3/8 bg-primary/5 rounded-t-lg">
                    RH CORE™ LIS Cloud OS
                  </th>
                  <th className="py-3 px-4 font-mono text-xs uppercase tracking-wider text-muted-foreground w-3/8">
                    Outdated Desktop Software (CDs/EXEs)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-xs sm:text-sm">
                {comparisonMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-4 font-heading font-bold text-foreground">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 bg-primary/[0.03] text-foreground font-light">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item.rh}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground font-light">
                      <span>{item.legacy}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Regional Assam Service Coverage */}
      <section className="py-16 sm:py-24 border-b border-border/40 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Active Regional Presence
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight mb-3">
              Deploying Across Diagnostic Hubs in Assam
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-light">
              We provide rapid on-site setup, local technician training, barcode printer configuration, and analyzer interfacing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
            {[
              "Guwahati (Dispur & Ulubari)",
              "Zoo Road & Chandmari",
              "Dibrugarh & AMCH Belt",
              "Silchar & Barak Valley",
              "Jorhat Medical District",
              "Tezpur Diagnostic Sector",
              "Nagaon & Middle Assam",
              "Tinsukia Commercial Zone"
            ].map((loc, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-border/60 bg-card/60 flex items-center justify-center gap-1.5 text-foreground font-medium">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Laboratory Queries
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight">
              Frequently Asked Questions (LIS &amp; Pathology)
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-border/70 bg-card/40 hover:border-border transition-colors"
              >
                <h3 className="text-base font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary font-mono text-sm">Q{idx + 1}.</span>
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed pl-6">
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
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            Zero Disruption Migration
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight mb-4">
            Transform Your Pathology Center Into An Automated Cloud Lab.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-light max-w-2xl mx-auto mb-8">
            Experience sub-2s WhatsApp PDF delivery and seamless analyzer sync. Book a hands-on demo with our Assam laboratory engineers today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-wider h-12 px-8 w-full sm:w-auto" asChild>
              <Link href="/contact">
                <span>Request Custom Lab Quote</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider h-12 px-8 w-full sm:w-auto border-border/80" asChild>
              <a href="tel:+918638875149">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>Direct Hotline: +91 86388 75149</span>
              </a>
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" /> RHD Softwaresolutions LLP (ACN-1931)
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" /> DPIIT Recognized Startup
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" /> &lt; 2-Hour Response SLA
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}
