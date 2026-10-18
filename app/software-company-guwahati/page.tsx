import type { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, MapPin, ShieldCheck, CheckCircle2, 
  ArrowRight, Phone, Mail, Server, Database, 
  Cpu, Code2, Network, Clock, Check, Terminal,
  Lock, ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Leading Software Company in Guwahati, Assam | RH Dynamics",
  description:
    "RH Dynamics (RHD Software Solutions LLP, ACN-1931) is a premier systems engineering & software development company in Guwahati, Assam. Bespoke cloud ERPs, ABDM-compliant HSMS hospital software, and high-performance web applications with on-site SLAs.",
  keywords: [
    "software company in guwahati",
    "best software company in assam",
    "software development company guwahati",
    "it company in guwahati",
    "software company near downtown hospital guwahati",
    "custom software development northeast india",
    "erp software developers assam",
    "rh dynamics guwahati"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/software-company-guwahati",
  },
  openGraph: {
    title: "Software Company in Guwahati, Assam | RH Dynamics",
    description:
      "Enterprise systems engineering, custom cloud ERPs, and healthcare platforms rooted in Guwahati with local on-site SLA support.",
    url: "https://rhdynamics.in/software-company-guwahati",
    images: ["/opengraph-image"],
  },
};

export default function SoftwareCompanyGuwahatiPage() {
  const localDifferentiators = [
    {
      title: "Committed Response SLA",
      metric: "< 2 Hours",
      desc: "Rapid turnaround worldwide via direct phone, WhatsApp, video call, and on-site visits across Guwahati and Assam."
    },
    {
      title: "Flexible Enterprise & SaaS Delivery",
      metric: "Hybrid Options",
      desc: "Dedicated source code and database ownership for enterprise builds, or turnkey Cloud SaaS for clinical and hospital operations."
    },
    {
      title: "Statutory DPIIT Startup India Certified",
      metric: "LLP ACN-1931",
      desc: "Legally registered under Ministry of Corporate Affairs (RoC-Guwahati) and DPIIT recognized under the Startup India initiative."
    },
    {
      title: "Mission-Critical Regional Deployments",
      metric: "20+ Implementations",
      desc: "Powering hospital clinical workflows, diagnostic laboratories, multi-branch supply chain ERPs, and modern web platforms."
    }
  ];

  const engineeringCapabilities = [
    {
      category: "Healthcare & Clinical Systems",
      title: "RH-HSMS Hospital Management Platform",
      points: [
        "ABDM (Ayushman Bharat Digital Mission) M1–M3 compliance",
        "OPD/IPD management & real-time visual bed ward matrix",
        "Pathology LIS with automated 2-second WhatsApp report dispatch",
        "Integrated Ayushman Bharat PMJAY & cashless insurance billing"
      ],
      link: "/hsms"
    },
    {
      category: "Enterprise Operations & ERP",
      title: "Custom Cloud ERP & Supply Chain Engines",
      points: [
        "Multi-branch warehouse inventory synchronization",
        "Automated Indian GST e-way billing & tax ledger reconciliation",
        "Biometric hardware attendance sync & automated payroll",
        "Role-based executive analytics & transparent scope pricing"
      ],
      link: "/custom-software"
    },
    {
      category: "Web & Mobile Engineering",
      title: "Sub-Second Web & Mobile Applications",
      points: [
        "Modern edge-rendered Next.js, React, and TypeScript stacks",
        "Cross-platform iOS and Android mobile applications (Flutter / React Native)",
        "Structured Schema.org JSON-LD local SEO baked into every page",
        "Integrated payment gateways (Razorpay, UPI) & automated lead webhooks"
      ],
      link: "/services"
    },
    {
      category: "Dedicated API & Cloud Architecture",
      title: "Cloud Infrastructure & Diagnostic Integrations",
      points: [
        "Dedicated PostgreSQL & isolated cloud database architectures",
        "WhatsApp Business Cloud API webhooks & notification queues",
        "Laboratory analyzer bidirectional ASTM/HL7 interfaces",
        "Committed < 2-hour SLA response worldwide via Phone, WhatsApp & Video"
      ],
      link: "/contact"
    }
  ];

  const faqs = [
    {
      q: "Which is the best software development company in Guwahati, Assam?",
      a: "RH Dynamics (RHD Software Solutions LLP, ACN-1931) is recognized as a premier software development and systems engineering company in Guwahati, Assam. Located near Downtown Hospital, Sarumotoria, we engineer custom cloud ERPs, ABDM-compliant hospital software (RH-HSMS), and sub-second web and mobile applications."
    },
    {
      q: "What software services does RH Dynamics offer in Guwahati?",
      a: "RH Dynamics provides full-stack custom software development, healthcare and hospital management systems (RH-HSMS), pathology laboratory LIS with automated WhatsApp report delivery, custom ERP and inventory automation, Next.js web applications, and iOS/Android mobile apps with offline-first SQLite sync."
    },
    {
      q: "Can businesses in Assam visit RH Dynamics' engineering office?",
      a: "Yes. Our engineering center is located at Urban Villa, near Downtown Hospital, Sarumotoria, Guwahati, Assam 781036. Clients can visit in-person for architectural whiteboarding, software demos, and technical scoping sessions."
    },
    {
      q: "What is your support SLA and response turnaround in Assam?",
      a: "We provide a committed < 2-hour SLA response worldwide via direct developer phone, WhatsApp, and Google Meet, as well as on-site emergency support dispatch throughout Guwahati and Assam."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "RH Dynamics Enterprise Systems & Software",
                "operatingSystem": "Cloud-Native, Web, Mobile (iOS/Android)",
                "applicationCategory": "BusinessApplication",
                "description": "Bespoke systems engineering, custom cloud ERPs, ABDM-compliant hospital software, and high-performance web applications built in Guwahati, Assam.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR",
                  "description": "Custom enterprise scope upon consultation"
                },
                "provider": {
                  "@type": "Organization",
                  "name": "RHD Software Solutions LLP",
                  "url": "https://rhdynamics.in",
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

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm font-mono text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Software Company in Guwahati</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/30 text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Guwahati Engineering Hub // DPIIT Recognized (ACN-1931)
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8 leading-[1.08] text-foreground">
            Leading Software Company in <br className="hidden sm:block" />
            <span className="text-gradient">Guwahati, Assam</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-8">
            RH Dynamics (RHD Software Solutions LLP) engineers enterprise software, bespoke cloud ERPs, and ABDM-compliant clinical platforms for organizations in Assam, Northeast India, and worldwide. We deliver high-reliability software with both turnkey Cloud SaaS and dedicated enterprise codebase options, supported by a committed &lt; 2-hour SLA.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/contact">
              <Button size="lg" className="h-13 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Schedule Engineering Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918638875149">
              <Button variant="outline" size="lg" className="h-13 px-7 text-sm font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                +91 86388 75149
              </Button>
            </a>
          </div>
        </div>

        {/* Stat Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {localDifferentiators.map((diff, i) => (
            <div key={i} className="p-7 sm:p-8 rounded-2xl glass-card dark:glass-card-dark border border-border/60">
              <span className="text-xs font-mono text-primary font-bold block mb-2">0{i + 1} //</span>
              <p className="text-2xl sm:text-3xl font-black font-heading text-foreground tracking-tight mb-2">{diff.metric}</p>
              <h2 className="text-base font-bold text-foreground mb-2">{diff.title}</h2>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">{diff.desc}</p>
            </div>
          ))}
        </div>

        {/* Core Capabilities */}
        <section className="mb-28">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Engineering Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mt-2">
              What We Build for Assam &amp; Northeast Enterprises
            </h2>
            <p className="text-muted-foreground mt-3 text-base sm:text-lg font-light leading-relaxed">
              We do not sell rigid third-party software licenses. We architect custom solutions aligned with your exact operational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringCapabilities.map((cap, idx) => (
              <div key={idx} className="p-8 sm:p-10 rounded-2xl bg-card border border-border/70 hover:border-primary/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-secondary text-foreground/80 border border-border/50 block w-fit mb-4 font-semibold">
                    {cap.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-foreground mb-4">
                    {cap.title}
                  </h3>
                  <div className="space-y-3 mb-8">
                    {cap.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-5 border-t border-border/40">
                  <Link href={cap.link} className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-primary hover:underline font-bold">
                    <span>Explore Specifications &amp; Live Deployments</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Guwahati Businesses Choose RH Dynamics */}
        <section className="p-8 sm:p-12 md:p-16 rounded-3xl bg-secondary/20 border border-border/70 mb-24">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Local Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mt-2 text-foreground">
              Why Northeast India Organizations Partner With RH Dynamics
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light mt-3 leading-relaxed">
              Most software agencies in India outsource development or leave clients stranded when issues occur. We maintain direct engineering offices in Guwahati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-card border border-border/50">
              <strong className="text-foreground block text-lg mb-2 font-heading font-bold">Physical Engineering Hub</strong>
              <p className="text-muted-foreground font-light text-sm sm:text-base leading-relaxed">
                Our lab is located near Downtown Hospital, Sarumotoria, Guwahati. You can meet our engineers in person, walk through database schemas, and inspect staging servers.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-card border border-border/50">
              <strong className="text-foreground block text-lg mb-2 font-heading font-bold">ABDM &amp; Local Scheme Ready</strong>
              <p className="text-muted-foreground font-light text-sm sm:text-base leading-relaxed">
                Native compliance with National Health Authority mandates (ABDM), ABHA ID creation, and regional government insurance schemes like PMJAY and Atal Amrit Abhiyan.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-card border border-border/50">
              <strong className="text-foreground block text-lg mb-2 font-heading font-bold">Direct Developer Access</strong>
              <p className="text-muted-foreground font-light text-sm sm:text-base leading-relaxed">
                Zero non-technical account managers. Every communication channel connects directly to the senior software engineers who write and maintain your code.
              </p>
            </div>
          </div>
        </section>

        {/* Local FAQ Section */}
        <section className="mb-24">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mt-2 text-foreground">
              Software Engineering In Guwahati: Queries &amp; Answers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-card border border-border/60">
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">
                  {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Office Location & Contact Card */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl border border-border/80 bg-gradient-to-b from-secondary/30 to-background flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase mb-3">
              <MapPin className="w-4 h-4" />
              <span>Guwahati Engineering Center</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-foreground mb-3">
              Visit Our Guwahati Lab
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg font-light max-w-2xl leading-relaxed">
              Near Downtown Hospital, Urban Villa, Sarumotoria, Guwahati, Assam 781036. Available Monday through Saturday for technical audits and discovery sessions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-13 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Book In-Person Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918638875149" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full h-13 px-7 text-sm font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
                Call Direct: +91 86388 75149
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
