import type { Metadata } from "next";
import Link from "next/link";
import { 
  Stethoscope, Smartphone, ShieldCheck, CheckCircle2, 
  ArrowRight, Phone, Activity, Database, Users, 
  Calendar, FileText, Check, ArrowUpRight, Clock, 
  MapPin, Building2, MessageSquare, Sparkles, Zap, 
  Search, Pill, Printer, QrCode
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Clinic Management Software in Guwahati & Assam | Doctor EMR & OPD",
  description:
    "RH CORE™ Clinic Suite is Guwahati's leading Clinic Management & Doctor OPD Prescription software. Features fast digital prescriptions, smart waiting token screens, ABDM ABHA QR registration, appointment calendar, and WhatsApp patient reminders.",
  keywords: [
    "clinic management software in guwahati",
    "doctor prescription software assam",
    "opd management system guwahati",
    "doctor emr software assam",
    "polyclinic billing software northeast india",
    "clinic appointment software guwahati",
    "abdm compliant clinic software assam",
    "rh core clinic suite",
    "digital prescription pad software guwahati",
    "patient queue management system assam"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/clinic-management-software-guwahati",
  },
  openGraph: {
    title: "Clinic Management Software in Guwahati | Doctor EMR & OPD Token Suite",
    description:
      "Transform your OPD chamber or polyclinic in Guwahati. 1-click digital prescriptions, waiting room token calling, WhatsApp reminders, and native ABHA scan & share.",
    url: "https://rhdynamics.in/clinic-management-software-guwahati",
    images: ["/opengraph-image"],
  },
};

export default function ClinicManagementSoftwareGuwahatiPage() {
  const clinicPillars = [
    {
      title: "1-Click Digital Prescriptions",
      metric: "< 45s Prescription",
      desc: "Fast autocomplete for thousands of branded & generic formulations, dosage schedules, clinical complaints, and customizable specialty templates."
    },
    {
      title: "Smart Token & Queue Screen",
      metric: "Zero Chamber Chaos",
      desc: "Interactive OPD token calling board for waiting room TV screens with audio chime. Organizes patient flow and eliminates unauthorized door knocks."
    },
    {
      title: "ABDM ABHA 'Scan & Share'",
      metric: "Instant Check-In",
      desc: "Patients scan the clinic's National Health Authority QR code with their ABHA app (Aarogya Setu/Paytm) to transfer demographics directly to reception."
    },
    {
      title: "WhatsApp Reminders & Recalls",
      metric: "40% Less No-Shows",
      desc: "Automated WhatsApp appointment confirmations, digital prescription PDF copies, and follow-up consultation reminders delivered directly to patient phones."
    }
  ];

  const specialtyTemplates = [
    { name: "General Medicine", spec: "Vitals timeline, chronic illness monitoring & multi-drug interaction checks" },
    { name: "Pediatrics & Child Care", spec: "WHO immunization schedule tracker, milestone alerts & weight-based dosing" },
    { name: "Gynecology & Obstetrics", spec: "EDD / LMP calculation wheels, antenatal visit records & ultrasound logs" },
    { name: "Cardiology & Chest", spec: "ECG/echo history attachments, BP graphing & lifestyle guidance printouts" },
    { name: "Orthopedics & Joint Care", spec: "Range-of-motion assessments, pain scores & physiotherapy regimen presets" },
    { name: "Dermatology & Cosmetology", spec: "High-resolution before/after skin photo timelines & compounding recipes" },
    { name: "Dental Clinics", spec: "Interactive tooth quadrant charting, procedure notes & multi-sitting billing" },
    { name: "ENT & Ophthalmology", spec: "Audiometry/refraction charts, vision acuity grids & spectacle Rx printouts" }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Instant Patient Check-In",
      desc: "Receptionist scans patient ABHA QR code or enters mobile number. Generates numbered OPD token slip with barcode and consultation fee receipt."
    },
    {
      step: "02",
      title: "Nurse Vitals Recording",
      desc: "Triage staff records blood pressure, pulse, temperature, SpO2, and weight directly onto the patient's digital intake card."
    },
    {
      step: "03",
      title: "Doctor Chamber Consultation",
      desc: "Doctor reviews previous visits, clicks template checkboxes, types diagnosis, selects prescribed medicines with auto-dosage, and adds lab investigation orders."
    },
    {
      step: "04",
      title: "Digital Prescription & WhatsApp Copy",
      desc: "Doctor prints crisp branded prescription pad on letterhead or plain paper. Simultaneously, a secure PDF copy arrives on patient WhatsApp instantly."
    },
    {
      step: "05",
      title: "Automated Follow-Up Reminder",
      desc: "System schedules automated SMS/WhatsApp recall 24 hours prior to next consultation date, drastically reducing appointment drop-offs."
    }
  ];

  const comparisonMatrix = [
    {
      feature: "Prescription Speed & Legibility",
      rh: "Rapid autocomplete digital prescription pad (< 45s). Printed or WhatsApp PDF. 100% legible to pharmacists.",
      legacy: "Handwritten illegible scripts causing pharmacist dispensing errors and patient confusion."
    },
    {
      feature: "Waiting Room Management",
      rh: "Digital queue display on waiting room TV screens with automated audio token announcement.",
      legacy: "Crowded corridors, patients repeatedly opening doctor doors, and receptionist shouting names."
    },
    {
      feature: "Historical Medical Records",
      rh: "Complete longitudinal patient history with BP graphs, lab trends, and past medications accessible in 1 click.",
      legacy: "Lost paper files, patients forgetting old prescriptions, and repeated redundant diagnostic tests."
    },
    {
      feature: "Government Compliance",
      rh: "Native ABDM M1-M3 integration with ABHA ID generation and Ayushman Bharat health exchange readiness.",
      legacy: "Zero ABDM compliance; cannot connect with national digital health records."
    },
    {
      feature: "Polyclinic Revenue Tracking",
      rh: "Automated doctor consultation fee splits, doctor payout settlements, and daily cash/UPI counter reconciliation.",
      legacy: "Manual paper receipt books prone to leakage, inaccurate end-of-day balances, and billing disputes."
    },
    {
      feature: "Assam Support & Training",
      rh: "Local Guwahati engineering hub with on-site staff training and guaranteed < 2-hour SLA support.",
      legacy: "Generic phone numbers from faraway call centers with nobody available for in-person chamber setup."
    }
  ];

  const faqs = [
    {
      q: "Can this software be used for a solo doctor chamber as well as a multi-speciality polyclinic?",
      a: "Yes. RH CORE™ Clinic Suite is completely modular. A solo doctor can run the system on a single laptop or tablet, while a large polyclinic with 15+ consulting doctors can manage multiple doctor chambers, centralized reception billing, and waiting room display screens simultaneously."
    },
    {
      q: "How fast can a doctor generate a digital prescription during busy OPD hours?",
      a: "With our specialty prescription templates and smart drug autocomplete engine, a complete prescription with diagnosis, medicines, dosage timings (e.g. 1-0-1 after food), and follow-up advice takes less than 45 seconds to generate and print."
    },
    {
      q: "Does the software support ABDM (Ayushman Bharat Digital Mission) ABHA registration?",
      a: "Yes. RH CORE™ is built natively compliant with ABDM M1, M2, and M3 standards. Patients can scan your clinic's ABHA QR code to check in instantly without filling physical paper forms."
    },
    {
      q: "Can prescriptions be printed on our customized doctor letterhead?",
      a: "Yes. You can upload your personalized letterhead design with registration numbers, qualifications, and clinic logo, or you can feed pre-printed letterhead paper into your existing laser/inkjet printer with customizable print margins."
    },
    {
      q: "Do you provide on-site setup and staff training in Guwahati?",
      a: "Yes. Our engineering hub in Sarumotoria (near Downtown Hospital) deploys directly to your clinic for hardware printer configuration, network setup, receptionist and doctor training, backed by our < 2-hour rapid support SLA."
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
                "name": "RH CORE™ Clinic Suite - Doctor EMR & OPD Management Software",
                "applicationCategory": "HealthApplication",
                "operatingSystem": "Web, Cloud, Windows, macOS, Android, iOS",
                "description": "Clinic Management & Doctor OPD Prescription software in Guwahati, Assam with token queue calling, ABHA QR registration, and WhatsApp reminders.",
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-6">
            <Stethoscope className="w-4 h-4" />
            <span>CLINIC EMR &amp; OPD AUTOMATION // GUWAHATI &amp; ASSAM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.08] mb-6">
            Clinic Management Software in Guwahati.{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Doctor EMR &amp; Smart Waiting Queue.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-4xl mb-8 leading-relaxed">
            Eliminate chamber delays, unreadable handwriting, and waiting room chaos. <strong className="text-foreground font-medium">RH CORE™ Clinic Suite</strong> empowers physicians, pediatricians, and multi-speciality polyclinics across Guwahati with 45-second digital prescriptions, audio-visual waiting room token screens, and automated WhatsApp patient reminders.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-wider h-13 px-8 rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/contact">
                <span>Book Doctor Chamber Demo</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider h-13 px-8 rounded-full border-border/80" asChild>
              <a href="tel:+918638875149">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>Call Guwahati Hub: +91 86388 75149</span>
              </a>
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-10 border-t border-border/40">
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                &lt; 45s
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                Digital Prescription Pad
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                Zero
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                Waiting Room Door Knocks
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                ABDM
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                Scan &amp; Share Ready
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                &lt; 2-Hour
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                On-Site Support SLA Guwahati
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
              Purpose-Built Clinical Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              Designed For The High Patient Flow of Assam OPDs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-8 sm:p-10 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold">
                    {pillar.metric}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
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

      {/* Specialty Templates Grid */}
      <section className="py-20 sm:py-28 border-b border-border/40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
                Medical Specialty Customization
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
                Pre-Loaded Examination &amp; Rx Templates
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md font-light leading-relaxed">
              Tailored templates ensure doctors don't waste time typing repetitive medical advice or standard examination forms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyTemplates.map((template, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-border/70 bg-card/60 hover:border-blue-500/50 transition-colors"
              >
                <span className="font-heading font-bold text-base sm:text-lg text-foreground block mb-2">
                  {template.name}
                </span>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  {template.spec}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step OPD Workflow */}
      <section className="py-20 sm:py-28 border-b border-border/40 bg-secondary/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Smooth Patient Flow
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              The 5-Step Frictionless OPD Consultation Pipeline
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
              Performance Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              RH CORE™ Clinic Suite vs. Pen &amp; Paper / Legacy EXEs
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border/80">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-border/80 bg-secondary/30">
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-muted-foreground w-1/4">
                    Clinical Aspect
                  </th>
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-primary font-bold w-3/8 bg-primary/5">
                    RH CORE™ Clinic Suite (Cloud)
                  </th>
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-muted-foreground w-3/8">
                    Handwritten / Stagnant Desktop Software
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
                        <Check className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
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

      {/* Local Guwahati Coverage */}
      <section className="py-20 sm:py-28 border-b border-border/40 bg-secondary/10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Local Engineering Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
              Serving Doctor Clinics Across Guwahati &amp; Assam
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              We provide chamber setup, laser printer integration, digital token TV screen configuration, and staff training.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-mono">
            {[
              "Dispur & Supermarket Belt",
              "GS Road Medical Hub",
              "Ulubari & Paltan Bazar",
              "Zoo Road & Tiniali",
              "Beltola & Survey Point",
              "Six Mile & Khanapara",
              "Chandmari & Silpukhuri",
              "Bharalumukh & Jalukbari"
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
              Doctor Chamber FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              Frequently Asked Questions (Clinic EMR)
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
            Easy Doctor Onboarding
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-5">
            Modernize Your OPD Chamber in Less Than 48 Hours.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience lightning-fast prescription autocomplete and organized waiting room token calling. Schedule a live demonstration at your Guwahati chamber.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-wider h-13 px-8 w-full sm:w-auto rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/contact">
                <span>Request Chamber Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider h-13 px-8 w-full sm:w-auto rounded-full border-border/80" asChild>
              <a href="tel:+918638875149">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>Call Clinic Engineers: +91 86388 75149</span>
              </a>
            </Button>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-mono text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-500" /> RHD Software Solutions LLP (ACN-1931)
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-500" /> DPIIT Startup India Certified
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-500" /> &lt; 2-Hour Response SLA
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}
