import type { Metadata } from "next";
import Link from "next/link";
import { 
  Smartphone, ShieldCheck, CheckCircle2, ArrowRight, 
  Phone, Server, Cpu, FileText, Check, ArrowUpRight, 
  Clock, MapPin, Building2, Layers, Sparkles, 
  Code2, Download, Zap, Fingerprint, WifiOff, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mobile App Development Company in Guwahati | Android & iOS Apps Assam",
  description:
    "RH Dynamics is Guwahati's leading mobile app development company. We build high-performance Flutter, React Native, iOS, and Android mobile applications with offline-first sync, biometric security, and full Play Store / App Store publishing.",
  keywords: [
    "mobile app development company in guwahati",
    "android app developers assam",
    "ios app development company guwahati",
    "flutter app development northeast india",
    "react native developers guwahati",
    "custom mobile application development assam",
    "healthcare mobile app development guwahati",
    "ecommerce mobile app assam",
    "rh dynamics mobile app development",
    "best app developers in guwahati"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/mobile-app-development-guwahati",
  },
  openGraph: {
    title: "Mobile App Development Company in Guwahati | Android & iOS Apps",
    description:
      "Engineered for sub-second speed and 60fps fluidity. Custom Flutter, Android, and iOS mobile applications with local engineering support in Guwahati.",
    url: "https://rhdynamics.in/mobile-app-development-guwahati",
    images: ["/opengraph-image"],
  },
};

export default function MobileAppDevelopmentGuwahatiPage() {
  const mobilePillars = [
    {
      title: "60 FPS Native Performance",
      metric: "Sub-Second Fluidity",
      desc: "Butter-smooth animations, instant touch responsiveness, and zero frame drops engineered using Flutter and high-performance React Native frameworks."
    },
    {
      title: "Offline-First Cloud Sync",
      metric: "Zero Data Drop",
      desc: "Field operatives and patients can view records and draft orders with zero connectivity. The app automatically pushes updates the moment network returns."
    },
    {
      title: "Biometric & Enterprise Security",
      metric: "Face ID & TLS Pinning",
      desc: "Hardware-backed keystore integration, fingerprint/Face ID biometric authentication, AES-256 local storage encryption, and tamper detection."
    },
    {
      title: "Turnkey Store Publishing",
      metric: "100% App Approval",
      desc: "Complete navigation of Google Play Console and Apple App Store submission policies, privacy declarations, and continuous version updates."
    }
  ];

  const appVerticals = [
    {
      title: "Healthcare & Patient Portals",
      desc: "Instant lab report viewers, doctor appointment booking, tele-consultation video streams, medicine reminders, and ABHA ID integrations."
    },
    {
      title: "B2B Field Sales & Van Delivery",
      desc: "Route-optimized salesperson order booking, offline customer ledger checks, GPS geo-fencing check-in, and Bluetooth thermal invoice printing."
    },
    {
      title: "E-Commerce & Quick Commerce",
      desc: "Fast catalog discovery, 1-click Razorpay/UPI checkout, live GPS delivery rider tracking, and automated personalized push notifications."
    },
    {
      title: "Enterprise Internal Operations",
      desc: "Warehouse inventory barcode scanning, employee digital attendance, internal approval workflows, and instant management metric dashboards."
    },
    {
      title: "EdTech & Learning Platforms",
      desc: "Encrypted DRM video player streaming, downloadable offline notes, timed quiz engines, student progress analytics, and fee collection."
    },
    {
      title: "Community & Booking Apps",
      desc: "Real-time chat messaging via WebSockets, event ticket generation with QR validation, venue reservation calendars, and member directory profiles."
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Product Wireframes & UI/UX Design",
      desc: "We craft interactive Figma prototypes adhering to modern iOS Human Interface and Google Material Design 3 guidelines."
    },
    {
      step: "02",
      title: "Cross-Platform Mobile Engineering",
      desc: "We write clean, modular Dart (Flutter) or TypeScript (React Native) code with offline database caching and resilient REST/GraphQL APIs."
    },
    {
      step: "03",
      title: "Device Emulation & Performance Profiling",
      desc: "Rigorous testing across budget Android smartphones (Xiaomi, Samsung, Realme) and iPhones to guarantee zero memory leaks or battery drain."
    },
    {
      step: "04",
      title: "App Store & Play Store Deployment",
      desc: "We handle app store certificates, privacy policy declarations, compliance questionnaires, and achieve official public store approval."
    },
    {
      step: "05",
      title: "Lifecycle Maintenance & < 2-Hour SLA",
      desc: "Guaranteed support for OS version updates (Android 15+, iOS 18+), crash monitoring with Sentry, and ongoing feature enhancements."
    }
  ];

  const comparisonMatrix = [
    {
      feature: "Architecture & Framework",
      rh: "Production-grade Flutter & React Native compiling to native ARM machine code with isolated clean architecture.",
      legacy: "Slow WebView wrappers (Cordova/PhoneGap) that feel clunky, lag during scrolling, and get rejected by Apple."
    },
    {
      feature: "Connectivity Resilience",
      rh: "True Offline-First SQLite/WatermelonDB sync: Apps function seamlessly across low-connectivity regions of Assam.",
      legacy: "Blank error screens or infinite loading spinners whenever mobile 4G/5G connection fluctuates."
    },
    {
      feature: "Source Code & IP Ownership",
      rh: "Complete ownership of git repositories, design assets, and backend schemas handed over to your organization.",
      legacy: "Proprietary third-party app builder lock-in with monthly hostage fees and zero access to underlying source code."
    },
    {
      feature: "Security & Data Privacy",
      rh: "DPDP Act 2023 compliant, biometric auth, encrypted local tokens, and SSL certificate pinning.",
      legacy: "Plaintext credentials stored in local storage, vulnerable to extraction and account hijacking."
    },
    {
      feature: "Commercial Terms",
      rh: "Transparent scope milestones: 50% upfront mobilization, 50% upon complete UAT sign-off and store submission.",
      legacy: "Hidden recurring charges, unpredictable scope creep, and unexpected maintenance penalties."
    },
    {
      feature: "Guwahati Engineering Presence",
      rh: "Direct access to our engineering team in Guwahati (near Downtown Hospital) with committed < 2-hour SLA.",
      legacy: "Remote freelance marketplaces with ghosting developers, missed deadlines, and zero accountability."
    }
  ];

  const faqs = [
    {
      q: "Do you build apps for both Android and iOS simultaneously?",
      a: "Yes. By utilizing industry-leading cross-platform technologies like Flutter and React Native, we compile a single, battle-tested codebase into native binaries for both the Google Play Store (Android) and the Apple App Store (iOS), cutting development time and cost in half."
    },
    {
      q: "Can the app function without an active internet connection?",
      a: "Yes. We engineer our applications with an 'offline-first' architecture using local embedded databases (SQLite / Room / Realm). Users can browse catalogs, record data, or draft orders offline. The app automatically reconciles and syncs data with the cloud once connectivity is restored."
    },
    {
      q: "Do you handle the entire Google Play Store and Apple App Store publishing process?",
      a: "Yes. We configure your developer accounts, generate release signing keystores, format promotional screenshots, draft required privacy policies, and submit the builds through the review process until your app is live and downloadable."
    },
    {
      q: "What are your commercial payment milestones for mobile app projects?",
      a: "We adhere to fair, transparent terms: 50% mobilization advance upon kickoff and approval of UI/UX wireframes, and the remaining 50% upon complete User Acceptance Testing (UAT), functional validation, and app store submission."
    },
    {
      q: "Where is your team located for project reviews and support in Guwahati?",
      a: "Our Guwahati engineering office is located in Sarumotoria (near Downtown Hospital, GS Road corridor). Clients are always welcome to visit for in-person sprint reviews, wireframe demonstrations, or technical architecture sessions."
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
                "name": "RH Dynamics Mobile Application Engineering",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "iOS, Android",
                "description": "Mobile App Development Company in Guwahati, Assam engineering Flutter, React Native, Android, and iOS applications with offline-first synchronization.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR",
                  "description": "Custom Scope Pricing upon consultation"
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium mb-6">
            <Smartphone className="w-4 h-4" />
            <span>CROSS-PLATFORM MOBILE ENGINEERING // GUWAHATI &amp; ASSAM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.08] mb-6">
            Mobile App Development Company in Guwahati.{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Android &amp; iOS Apps with 60 FPS Fluidity.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-4xl mb-8 leading-relaxed">
            Move beyond sluggish web wrappers. <strong className="text-foreground font-medium">RH Dynamics</strong> engineers native-feeling Flutter and React Native mobile applications for enterprises, healthcare systems, and consumer startups across Guwahati and Assam. Offline-first data caching, biometric security, and turnkey Play Store / App Store publishing.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-wider h-13 px-8 rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/contact">
                <span>Request App Scope &amp; Wireframe</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider h-13 px-8 rounded-full border-border/80" asChild>
              <a href="tel:+918638875149">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>Call Mobile Lead: +91 86388 75149</span>
              </a>
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-10 border-t border-border/40">
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                60 FPS
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                Fluid Native Touch Response
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                Offline
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                Local Database Sync Ready
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                100%
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                App &amp; Play Store Approval
              </span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-secondary/20 border border-border/40">
              <span className="text-3xl sm:text-4xl font-heading font-black text-foreground block mb-1">
                &lt; 2-Hour
              </span>
              <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                Local Support SLA Guwahati
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
              Engineering Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              Mobile Architecture That Scales Beyond Millions of Downloads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobilePillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-8 sm:p-10 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold">
                    {pillar.metric}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-cyan-500" />
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

      {/* Mobile Verticals */}
      <section className="py-20 sm:py-28 border-b border-border/40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
                Proven Applications
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
                Enterprise &amp; Consumer App Verticals
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md font-light leading-relaxed">
              From mission-critical healthcare diagnostics to high-transaction B2B field sales portals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {appVerticals.map((vert, idx) => (
              <div 
                key={idx}
                className="p-7 sm:p-8 rounded-2xl border border-border/70 bg-card/60 hover:border-cyan-500/50 transition-colors"
              >
                <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-3">
                  {vert.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  {vert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Mobile Lifecycle */}
      <section className="py-20 sm:py-28 border-b border-border/40 bg-secondary/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Delivery Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              Our 5-Step App Development &amp; Release Pipeline
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
              Engineering Benchmark
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              RH Dynamics vs. Freelance &amp; Template Builders
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border/80">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-border/80 bg-secondary/30">
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-muted-foreground w-1/4">
                    Development Standard
                  </th>
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-primary font-bold w-3/8 bg-primary/5">
                    RH Dynamics Mobile Engineering
                  </th>
                  <th className="py-4 px-6 font-mono text-xs uppercase tracking-wider text-muted-foreground w-3/8">
                    Budget Freelancers / Template Builders
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
                        <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
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

      {/* Local Guwahati Footprint */}
      <section className="py-20 sm:py-28 border-b border-border/40 bg-secondary/10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              Guwahati Software Hub
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
              Building Digital Mobility for Assam &amp; Northeast India
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              Visit our Guwahati office near Downtown Hospital for live Figma prototype reviews and app architecture sessions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-mono">
            {[
              "Guwahati Tech Corridor",
              "Sarumotoria Engineering Hub",
              "GS Road Startup Ecosystem",
              "Dispur Corporate Center",
              "Jorhat Digital Enterprises",
              "Dibrugarh Medical Mobility",
              "Silchar Commercial Network",
              "Tezpur Regional Operations"
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
              App Development Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight">
              Frequently Asked Questions (Mobile Apps)
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
            Transparent Milestone Terms
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-5">
            Turn Your Mobile App Vision Into A Published Reality.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience 60fps performance and resilient offline caching. Book a prototype scoping session with our Guwahati mobile engineers today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-wider h-13 px-8 w-full sm:w-auto rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/contact">
                <span>Request Mobile App Scope</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider h-13 px-8 w-full sm:w-auto rounded-full border-border/80" asChild>
              <a href="tel:+918638875149">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>Call Mobile Lead: +91 86388 75149</span>
              </a>
            </Button>
          </div>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-mono text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-500" /> RHD Software Solutions LLP (ACN-1931)
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-500" /> DPIIT Startup India Certified
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-500" /> &lt; 2-Hour Response SLA
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}
