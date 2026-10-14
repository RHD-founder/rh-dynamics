"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart3, Activity, ShieldCheck, Database, Check } from "lucide-react";

const recentWork = [
  {
    title: "Cosmomedical Guwahati",
    category: "Speciality Healthcare",
    tagline: "Flagship Digital Patient Ecosystem & High-Conversion Booking",
    problem: "Outdated web presence, severe patient drop-offs from slow mobile pages, and zero structured digital lead acquisition.",
    metrics: [
      { value: "3.2x", label: "Qualified Surgical Leads" },
      { value: "< 1.1s", label: "Page Load Speed" }
    ],
    tech: ["Next.js 16", "WhatsApp API", "Local SEO Engine"],
    link: "/projects",
  },
  {
    title: "Army Public School Narengi",
    category: "Campus Infrastructure",
    tagline: "Campus-Wide Optical Fiber Backbone & 40+ Workstation Lab",
    problem: "Fragmented cabling, unstable school block Wi-Fi, outdated lab hardware, and unmonitored security zones.",
    metrics: [
      { value: "100%", label: "Campus Gigabit Coverage" },
      { value: "Zero", label: "Network Downtime" }
    ],
    tech: ["Optical Fiber", "Layer-3 Switches", "CCTV Telemetry"],
    link: "/projects",
  },
  {
    title: "Spektra Diagnostics & Multispeciality",
    category: "Clinical Diagnostics",
    tagline: "Automated Pathology LIS & Instant WhatsApp Report Delivery",
    problem: "Manual sample accessioning, slow physical report collection queues, and stiff competition from diagnostic chains.",
    metrics: [
      { value: "< 2 Sec", label: "WhatsApp Report Dispatch" },
      { value: "45%", label: "Counter Queue Drop" }
    ],
    tech: ["LIS Engine", "WhatsApp Cloud", "Barcode Accessioning"],
    link: "/projects",
  },
  {
    title: "RH-HSMS Hospital Platform",
    category: "Clinical Hospital ERP",
    tagline: "ABDM & PMJAY-Compliant Cloud Hospital Management System",
    problem: "Hospitals trapped on fragile offline desktop EXEs, losing pharmacy billing revenue and failing Ayushman Bharat integration.",
    metrics: [
      { value: "40%+", label: "Patient Wait Reduction" },
      { value: "ABDM M3", label: "Statutory Compliance" }
    ],
    tech: ["PostgreSQL", "ABDM Gateways", "Next.js 16"],
    link: "/hsms",
  },
];

export function RecentWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-28 bg-background relative overflow-hidden border-t border-border/50">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl" ref={ref}>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/40 text-muted-foreground mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Verified Deployments // Case Studies
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black font-heading text-foreground tracking-tight"
            >
              Proven Deployments. <br />
              <span className="text-gradient">Measurable Impact.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-primary hover:underline font-bold"
            >
              <span>Explore All 20+ Case Studies</span>
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* 2x2 Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {recentWork.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group relative rounded-2xl glass-card dark:glass-card-dark border border-border/60 hover:border-primary/50 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-foreground/80 border border-border/50">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    DEPLOYMENT // 0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-black font-heading text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-foreground/80 mb-4 font-heading">
                  {project.tagline}
                </p>

                <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                  {project.problem}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-0.5 bg-secondary/50 text-muted-foreground rounded-full border border-border/40 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-xl font-black font-heading text-foreground block tracking-tight">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium uppercase font-mono">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href={project.link}>
                  <Button variant="outline" size="sm" className="rounded-full text-xs font-mono uppercase tracking-wider border-border/70 hover:bg-secondary">
                    View Specs
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner to Full Case Studies */}
        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" className="h-12 px-8 text-xs font-mono uppercase tracking-wider font-semibold rounded-full shadow-md shadow-primary/20 hover:-translate-y-0.5 transition-all">
              View Complete Architecture Registry
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
