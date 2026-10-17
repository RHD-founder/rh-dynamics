import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowLeft, Clock, Calendar, ArrowRight, 
  ShieldCheck, CheckCircle2, Phone, Zap, 
  Building2, FileText, Check, HeartPulse
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ABDM M1, M2 & M3 Compliance Checklist for Hospitals in Assam | 2026 Guide",
  description:
    "Comprehensive guide on Ayushman Bharat Digital Mission (ABDM) M1-M3 milestones for hospitals and polyclinics in Northeast India. Learn how ABHA Scan & Share, Health Information Provider (HIP), and PMJAY claims function in RH CORE™ HSMS.",
  keywords: [
    "abdm compliance checklist assam",
    "ayushman bharat hospital software northeast india",
    "abha scan and share software guwahati",
    "hip hiu abdm integration hospital",
    "pmjay claims software assam",
    "rh core hsms"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/blog/abdm-m1-m2-m3-compliance-checklist-hospitals",
  },
  openGraph: {
    title: "ABDM M1, M2 & M3 Compliance Checklist for Hospitals in Assam",
    description:
      "A practical regulatory roadmap for medical superintendents and hospital directors implementing National Health Authority ABDM mandates in Northeast India.",
    url: "https://rhdynamics.in/blog/abdm-m1-m2-m3-compliance-checklist-hospitals",
    images: ["/opengraph-image"],
  },
};

export default function AbdmComplianceChecklistPage() {
  return (
    <article className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      
      {/* Schema.org Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "ABDM M1, M2 & M3 Compliance Checklist for Hospitals and Clinics in Northeast India (2026 Guide)",
            "description": "Comprehensive guide on Ayushman Bharat Digital Mission (ABDM) M1-M3 milestones for hospitals and polyclinics in Northeast India.",
            "datePublished": "2026-10-14T10:00:00+05:30",
            "dateModified": "2026-10-14T10:00:00+05:30",
            "author": {
              "@type": "Organization",
              "name": "RH Compliance Engineering",
              "url": "https://rhdynamics.in"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RHD Softwaresolutions LLP",
              "url": "https://rhdynamics.in",
              "logo": {
                "@type": "ImageObject",
                "url": "https://rhdynamics.in/images/rh-official-logo.jpg"
              }
            },
            "mainEntityOfPage": "https://rhdynamics.in/blog/abdm-m1-m2-m3-compliance-checklist-hospitals"
          })
        }}
      />

      {/* Header */}
      <header className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border font-bold text-blue-500 bg-blue-500/10 border-blue-500/20">
              Regulatory &amp; Compliance
            </span>
            <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 9 min read
            </span>
            <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Published October 14, 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-[1.15] mb-6">
            ABDM M1, M2 &amp; M3 Compliance Checklist for Hospitals and Clinics in Northeast India
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            With the National Health Authority (NHA) expanding Ayushman Bharat digital requirements across Assam, hospital administrators must upgrade legacy software. Here is the operational checklist for M1, M2, and M3 readiness.
          </p>
        </div>
      </header>

      {/* Content Body */}
      <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
        <div className="prose prose-invert max-w-none space-y-8 font-light text-muted-foreground leading-relaxed">
          
          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 text-foreground">
            <h3 className="font-heading font-bold text-base text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Executive Summary for Hospital Administrators
            </h3>
            <ul className="text-xs sm:text-sm space-y-1.5 list-disc pl-5 font-light text-muted-foreground">
              <li>M1: Milestone 1 involves instant ABHA Number and ABHA Address creation via Aadhaar/Mobile OTP and Scan &amp; Share counter tokens.</li>
              <li>M2: Health Information Provider (HIP) — digital sharing of diagnostic reports, discharge summaries, and prescriptions via encrypted gateway.</li>
              <li>M3: Health Information User (HIU) — viewing patient consent-approved longitudinal medical records from previous external hospitals.</li>
            </ul>
          </div>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-black text-foreground mb-4">
              1. Understanding the Three ABDM Milestones
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Hospitals across Assam empanelled under Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) and Atal Amrit Abhiyan are increasingly required to transition from paper registers to certified digital health systems. The National Health Authority categorizes this transition into three structured stages:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-border/70 bg-card/40">
                <h4 className="font-heading font-bold text-base text-foreground mb-1">
                  Milestone 1 (M1): ABHA Creation &amp; Scan-and-Share Check-In
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  At the reception desk, the patient displays their ABHA QR code using Aarogya Setu or ABHA App. The reception scanner reads the code, pre-fills the hospital intake form, and issues an instant queue token without manual typing.
                </p>
                <div className="text-[11px] font-mono text-blue-500">
                  Feature in RH CORE™: Native ABHA v2 API, Scan &amp; Share queue screen, and Aadhaar biometric token generation.
                </div>
              </div>

              <div className="p-5 rounded-xl border border-border/70 bg-card/40">
                <h4 className="font-heading font-bold text-base text-foreground mb-1">
                  Milestone 2 (M2): Health Information Provider (HIP)
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  When a doctor writes a digital prescription or a pathologist validates a blood test, the record is cryptographically signed and linked to the patient's ABHA account through the ABDM Health Data Exchange.
                </p>
                <div className="text-[11px] font-mono text-blue-500">
                  Feature in RH CORE™: Automatic FHIR standard conversion of diagnostic PDFs, OPD prescriptions, and IPD discharge cards.
                </div>
              </div>

              <div className="p-5 rounded-xl border border-border/70 bg-card/40">
                <h4 className="font-heading font-bold text-base text-foreground mb-1">
                  Milestone 3 (M3): Health Information User (HIU)
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  Allows consulting doctors in your hospital to request consent-driven access to a patient's past medical history from any accredited hospital or diagnostic lab in India.
                </p>
                <div className="text-[11px] font-mono text-blue-500">
                  Feature in RH CORE™: Instant Doctor EMR consent request window with visual timeline of prior treatments and allergy logs.
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-black text-foreground mb-4">
              2. Hospital Implementation Checklist
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              {[
                "Register your facility in the National Health Facility Registry (HFR).",
                "Ensure consulting physicians are enrolled in the Healthcare Professionals Registry (HPR).",
                "Deploy an ABDM-compliant hospital operating system like RH CORE™ HSMS.",
                "Install barcode / 2D QR scanners at outpatient registration counters.",
                "Train reception staff on the 30-second ABHA Scan & Share check-in protocol.",
                "Configure automated FHIR bundle generation for pathology test panels and pharmacy slips."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg border border-border/50 bg-secondary/20">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Inline CTA Card */}
          <div className="p-8 rounded-3xl bg-secondary/40 border border-primary/30 my-8 text-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              National Health Authority Compliance
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-foreground mb-3">
              Upgrade Your Hospital to RH CORE™ HSMS (v1.0 Live)
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-light max-w-xl mx-auto mb-6">
              Complete ABDM M1-M3 integration, real-time bed ward matrix, doctor EMR, and sub-2s WhatsApp reports with a guaranteed &lt; 2-hour SLA across Assam.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="sm" className="bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider h-10 px-6" asChild>
                <Link href="/hsms">
                  <span>View RH CORE™ HSMS Features</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="font-mono text-xs uppercase tracking-wider h-10 px-6" asChild>
                <a href="tel:+918638875149">
                  <span>Call Hospital Team: +91 86388 75149</span>
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
