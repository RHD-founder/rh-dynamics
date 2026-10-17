import type { Metadata } from "next";
import Link from "next/link";
import { 
  Activity, ShieldCheck, CheckCircle2, 
  ArrowRight, Phone, HeartPulse, Stethoscope, 
  Database, Server, FileText, Check, ArrowUpRight, 
  Clock, MapPin, Building2, MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ABDM Hospital Management Software in Assam | RH-HSMS",
  description:
    "RH-HSMS is Northeast India's premier ABDM-compliant Hospital Management Information System (HIS). Powering OPD/IPD tracking, doctor EMR, pathology LIS with automated WhatsApp reports, pharmacy inventory, and Ayushman Bharat PMJAY billing in Assam.",
  keywords: [
    "hospital management software assam",
    "hospital management system guwahati",
    "clinic management software northeast india",
    "abdm compliant hospital software",
    "pathology lab software with whatsapp reports",
    "ayushman bharat pmjay hospital billing software",
    "best hsms software assam",
    "hospital software company in guwahati",
    "rh-hsms"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/hospital-management-software-assam",
  },
  openGraph: {
    title: "ABDM Hospital Management Software in Assam | RH-HSMS",
    description:
      "Enterprise clinical hospital management software designed for medical facilities in Assam and Northeast India. Book a free on-site demo.",
    url: "https://rhdynamics.in/hospital-management-software-assam",
    images: ["/opengraph-image"],
  },
};

export default function HospitalManagementSoftwareAssamPage() {
  const clinicalPillars = [
    {
      title: "ABDM Digital Health Certified",
      metric: "M1, M2 & M3 Ready",
      desc: "Instant ABHA ID creation, digital health record linking, and compliance with National Health Authority mandates for Indian hospitals."
    },
    {
      title: "Real-Time OPD/IPD Bed Matrix",
      metric: "Zero Admission Delay",
      desc: "Visual ward and bed grid, emergency triage tracking, automated discharge summaries, and integrated nursing station workflows."
    },
    {
      title: "Instant Pathology WhatsApp LIS",
      metric: "< 2s Report Dispatch",
      desc: "Analyzer bidirectional interfacing, customizable diagnostic templates, and automated encrypted PDF report dispatch to patient WhatsApp."
    },
    {
      title: "Rapid Clinical Response SLA",
      metric: "< 2 Hour SLA",
      desc: "Committed engineering support available via direct phone, WhatsApp, video consultation, and on-site dispatch across Assam."
    }
  ];

  const coreClinicalModules = [
    {
      title: "Outpatient & Inpatient (OPD / IPD) Core",
      desc: "Complete patient lifecycle orchestration from token calling and UHID registration to ward allocation and bed matrices.",
      features: [
        "Smart digital queue management & doctor token calling",
        "Visual IPD bed occupancy grid with status alerts",
        "Clinical doctor EMR with fast prescription autocomplete",
        "Digital discharge summaries with ICD-10 medical coding"
      ]
    },
    {
      title: "Pathology & Diagnostic Laboratory (LIS)",
      desc: "End-to-end laboratory automation eliminating manual report typing errors and delayed patient communications.",
      features: [
        "Sample barcode label generation & accessioning",
        "Bidirectional analyzer machine interfacing",
        "Automated PDF report dispatch directly to WhatsApp",
        "Doctor referral commission ledgers & tracking"
      ]
    },
    {
      title: "Pharmacy & Medical Inventory Engine",
      desc: "Real-time stock synchronization directly connected to clinical prescriptions and hospital billing counters.",
      features: [
        "Batch serialization with automatic expiry alert warnings",
        "Integrated GST-compliant POS billing at pharmacy counter",
        "Real-time OPD/IPD medicine requisition sync",
        "Automated low-stock supplier re-order notifications"
      ]
    },
    {
      title: "Ayushman Bharat & Cashless TPA Billing",
      desc: "Streamlined government scheme processing eliminating billing disputes and claim rejections.",
      features: [
        "Ayushman Bharat (PMJAY) package code auto-matching",
        "Atal Amrit Abhiyan state scheme filing and pre-auth ledger",
        "Corporate TPA insurance pre-authorization and claims tracking",
        "Unified multi-counter hospital billing with daily reconciliation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Hospital Management Software Assam</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/30 text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Clinical Health IT // ABDM &amp; PMJAY Compliant (Assam)
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8 leading-[1.08] text-foreground">
            ABDM Hospital Management Software in <br className="hidden sm:block" />
            <span className="text-gradient">Assam &amp; Northeast India</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-8">
            RH-HSMS is an enterprise clinical and laboratory platform available as both turnkey Cloud SaaS and dedicated enterprise deployments. Eliminate paperwork latency, automate Ayushman Bharat billing, and streamline pathology WhatsApp reports with guaranteed &lt; 2-hour SLA support.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/contact?service=RH-HSMS+Hospital+HIS">
              <Button size="lg" className="h-13 px-8 text-xs font-mono uppercase tracking-wider font-bold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Request On-Site Hospital Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918638875149">
              <Button variant="outline" size="lg" className="h-13 px-7 text-xs font-mono uppercase tracking-wider font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                +91 86388 75149
              </Button>
            </a>
          </div>
        </div>

        {/* Clinical Metric Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {clinicalPillars.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl glass-card dark:glass-card-dark border border-border/60">
              <span className="text-xs font-mono text-primary font-bold block mb-1">0{i + 1} //</span>
              <p className="text-xl font-black font-heading text-foreground tracking-tight mb-1">{p.metric}</p>
              <h2 className="text-sm font-bold text-foreground mb-2">{p.title}</h2>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Core Modules Grid */}
        <section className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Complete Hospital Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight mt-2">
              Integrated Modules Built for Healthcare Scale
            </h2>
            <p className="text-muted-foreground mt-3 text-sm font-light">
              Designed from real field deployments in polyclinics, nursing homes, and multi-specialty hospitals in Guwahati and Upper Assam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreClinicalModules.map((mod, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-card border border-border/70 hover:border-primary/50 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-foreground mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    {mod.desc}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {mod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-foreground/90 font-medium">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <Link href="/hsms" className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline font-bold">
                    <span>View Full Clinical Technical Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Assam Medical Facilities Choose RH-HSMS */}
        <section className="p-8 sm:p-12 rounded-3xl bg-secondary/20 border border-border/70 mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Healthcare Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight mt-2 text-foreground">
              Cloud HSMS vs Legacy Offline Hospital Software
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-card border border-border/50">
              <strong className="text-foreground block text-sm mb-2 font-heading font-bold">Zero Data Loss &amp; Auto Backups</strong>
              <p className="text-muted-foreground font-light font-sans text-xs leading-relaxed">
                Legacy offline software crashes when hard drives fail. RH-HSMS provides encrypted, automated daily snapshots on dedicated cloud instances.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border/50">
              <strong className="text-foreground block text-sm mb-2 font-heading font-bold">Ayushman Bharat Compliance</strong>
              <p className="text-muted-foreground font-light font-sans text-xs leading-relaxed">
                National Health Authority ABDM protocols are built directly into the system, ensuring seamless accreditation and patient trust.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border/50">
              <strong className="text-foreground block text-sm mb-2 font-heading font-bold">On-Site Staff Training SLA</strong>
              <p className="text-muted-foreground font-light font-sans text-xs leading-relaxed">
                Our technicians provide floor-level nursing and billing staff training in Assamese, Hindi, and English with same-day emergency on-site assistance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl border border-border/80 bg-gradient-to-b from-secondary/30 to-background flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase mb-2">
              <MapPin className="w-4 h-4" />
              <span>Guwahati &amp; Golaghat Clinical Engineering Hubs</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-foreground mb-2">
              Schedule a Live Hospital Demonstration
            </h3>
            <p className="text-muted-foreground text-sm font-light max-w-xl leading-relaxed">
              Our clinical architects will demonstrate RH-HSMS live at your hospital in Guwahati, Jorhat, Golaghat, Dibrugarh, or across Northeast India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/contact?service=RH-HSMS+Hospital+HIS" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-12 px-7 text-xs font-mono uppercase tracking-wider font-bold rounded-full">
                Book Hospital Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918638875149" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full h-12 px-6 text-xs font-mono uppercase tracking-wider font-semibold rounded-full border-border/80">
                Call Direct: +91 86388 75149
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
