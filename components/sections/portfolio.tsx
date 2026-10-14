"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, ShieldCheck, BarChart3, Network, Zap, Cpu, Check } from "lucide-react";
import Link from "next/link";

const portfolioCategories = [
  {
    title: "Clinical & Healthcare Systems",
    tagline: "Mission-critical hospital ecosystems, patient acquisition funnels, and LIS diagnostic automation across Assam.",
    icon: Activity,
    clients: [
      {
        name: "Cosmomedical Guwahati",
        tag: "Speciality Healthcare",
        description: "Full-stack medical platform with high-conversion surgical booking, dynamic doctor rosters, and automated WhatsApp triage.",
        services: ["Next.js Platform", "WhatsApp Cloud API", "Local SEO Engine", "Performance Marketing"],
        metrics: ["3.2x Surge in Surgical Leads", "< 1.1s Page Load Speed", "#1 Regional Google SERP"]
      },
      {
        name: "Spektra Diagnostics & Multispeciality",
        tag: "Clinical Diagnostics",
        description: "Automated pathology LIS integration with instant WhatsApp PDF delivery, sample barcode tracking, and hyper-local test campaigns.",
        services: ["Pathology LIS", "WhatsApp PDF Dispatch", "Local SEO", "Campaign Automation"],
        metrics: ["< 2 Sec WhatsApp Delivery", "45% Counter Queue Drop", "2.8x Home Collection Growth"]
      },
      {
        name: "Gate Rajdhani Hospital",
        tag: "Multispeciality Inpatient",
        description: "Reputation infrastructure and patient acquisition funnel positioning the hospital at the top of regional search queries for surgical care.",
        services: ["Patient Acquisition", "Reputation Management", "Lead Routing", "Content Systems"],
        metrics: ["180%+ Inpatient Growth", "4.8★ Google Review Rating", "24/7 Lead Routing"]
      }
    ]
  },
  {
    title: "Campus Infrastructure & Custom Cloud ERP",
    tagline: "Enterprise Gigabit optical backbones, server room virtualization, and bespoke regional supply chain automation.",
    icon: Network,
    clients: [
      {
        name: "Army Public School Narengi",
        tag: "Campus Infrastructure",
        description: "Comprehensive campus optical fiber backbone, server virtualization, 40+ high-performance computer lab terminals, and CCTV telemetry.",
        services: ["Optical Fiber Backbone", "Managed Layer-3 Switches", "Enterprise Firewall", "Surveillance Telemetry"],
        metrics: ["100% Gigabit Campus Coverage", "40+ Workstations", "Zero Downtime Topology"]
      },
      {
        name: "Northeast Multi-Branch Supply Chain ERP",
        tag: "Enterprise Cloud Software",
        description: "Custom cloud ERP replacing spreadsheets with real-time multi-branch inventory sync, automated GST billing, and biometric payroll.",
        services: ["PostgreSQL", "Node.js", "Biometric Integration", "GSTN API"],
        metrics: ["₹0 SaaS Seat Fees", "100% Stock Sync Accuracy", "85% Faster Month Closing"]
      }
    ]
  }
];

export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border/50">
      {/* Background elements strictly contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20 z-0" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container px-4 mx-auto relative z-10 max-w-6xl" ref={ref}>
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/30 text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Verified Case Studies // Northeast India
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-foreground tracking-tight mb-4">
            Engineered for <span className="text-gradient">Real-World Scale</span>.
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            From hospital admissions and clinical diagnostics to campus fiber optics and multi-warehouse distribution, explore how our systems power critical operations.
          </p>
        </div>

        {portfolioCategories.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-24 last:mb-0">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIdx * 0.15 }}
              className="mb-10 pb-4 border-b border-border/60 flex flex-col md:flex-row md:items-end justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black font-heading text-foreground tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground font-light max-w-2xl">
                  {category.tagline}
                </p>
              </div>

              <Link 
                href="/projects" 
                className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-primary hover:underline font-bold shrink-0"
              >
                <span>View Full Registry</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* Clients Grid */}
            <div className={`grid grid-cols-1 ${category.clients.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-6`}>
              {category.clients.map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: (categoryIdx * 0.15) + (idx * 0.08) }}
                  className="group relative flex flex-col justify-between rounded-2xl glass-card dark:glass-card-dark border border-border/60 hover:border-primary/50 transition-all duration-300 p-6 md:p-8 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-foreground/80 border border-border/50">
                        {client.tag}
                      </span>
                      <span className="text-[11px] font-mono text-muted-foreground">
                        SPEC // 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-xl md:text-2xl font-black font-heading text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors">
                      {client.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light mb-6">
                      {client.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-2">
                        Technologies & Modules
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {client.services.map((service, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2.5 py-0.5 bg-secondary/50 text-muted-foreground rounded-full border border-border/40 font-mono"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-2">
                      Verified Metrics
                    </span>
                    <ul className="space-y-1.5">
                      {client.metrics.map((metric, i) => (
                        <li key={i} className="flex items-center text-xs font-medium text-foreground/90">
                          <Check className="w-3.5 h-3.5 mr-2 text-primary shrink-0" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Action Link to Full Case Studies */}
        <div className="mt-16 text-center">
          <Link href="/projects">
            <Button size="lg" className="h-12 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
              Explore All 20+ Regional Deployments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}