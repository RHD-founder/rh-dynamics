"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Activity, Database, Network, Globe, 
  ArrowRight, CheckCircle2, ArrowUpRight,
  ShieldCheck, Server, Cpu
} from "lucide-react";

const capabilities = [
  {
    tag: "01 // CLINICAL PLATFORMS",
    title: "RH-HSMS Hospital Information System",
    description: "Ayushman Bharat ABDM (M1–M3) compliant cloud hospital platform. Unifies inpatient bed matrices, doctor EMR pads, nursing requisitions, and automated pharmacy billing.",
    href: "/hsms",
    cta: "Explore RH-HSMS Platform",
    icon: Activity,
    specs: ["ABDM ABHA M1–M3 Gateways", "Zero Lost Pharmacy Billing", "WhatsApp LIS Delivery"]
  },
  {
    tag: "02 // ENTERPRISE SOFTWARE",
    title: "Custom Cloud ERP & Supply Chain",
    description: "Bespoke software engineered around your exact operational workflows. Real-time multi-branch inventory sync, Indian GSTN tax ledgers, and biometric hardware payroll.",
    href: "/custom-software",
    cta: "Review ERP Architecture",
    icon: Database,
    specs: ["100% Client Code & DB Ownership", "₹0 Per-User Monthly Fees", "Automated E-Way Billing"]
  },
  {
    tag: "03 // CAMPUS NETWORKING",
    title: "Enterprise Optical Fiber & Hardware Labs",
    description: "Design and deployment of campus Gigabit fiber optic backbones, server rooms, virtualization topology, and 40+ workstation computing labs with CCTV telemetry.",
    href: "/projects",
    cta: "View Campus Deployments",
    icon: Network,
    specs: ["Redundant Layer-3 Switching", "Enterprise Perimeter Firewalls", "On-Site Hardware Spares"]
  },
  {
    tag: "04 // DIGITAL ECOSYSTEMS",
    title: "Flagship Web Platforms & Search Dominance",
    description: "Next.js edge-rendered patient and customer acquisition platforms coupled with automated WhatsApp Business routing and aggressive local Google Maps SERP rankings.",
    href: "/projects",
    cta: "Inspect Web Case Studies",
    icon: Globe,
    specs: ["< 1.1s Mobile LCP Performance", "WhatsApp Cloud API Webhooks", "Dominant Regional SERP Rank"]
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="services" className="py-28 relative overflow-hidden bg-background border-t border-border/50">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl" ref={ref}>
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/40 text-muted-foreground mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Core Capabilities // Engineering Registry
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-heading mb-4 text-foreground tracking-tight"
          >
            Four Disciplines. <br />
            <span className="text-gradient">Zero Outsourced Fluff.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed"
          >
            From clinical hospital wards and distributed supply chains to campus optical fiber and high-performance web platforms, explore our engineering disciplines.
          </motion.p>
        </div>

        {/* 2x2 Bento Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.tag}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + idx * 0.1 }}
              className="group relative rounded-2xl glass-card dark:glass-card-dark border border-border/60 hover:border-primary/50 transition-all duration-300 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-muted-foreground">
                    {cap.tag}
                  </span>
                  <div className="p-2.5 rounded-xl bg-secondary text-primary border border-border/50 group-hover:scale-105 transition-transform">
                    <cap.icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-black font-heading text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {cap.title}
                </h3>

                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-border/40 space-y-2 mb-6">
                  {cap.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={cap.href}
                  className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-primary hover:underline font-bold group/link"
                >
                  <span>{cap.cta}</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="h-12 px-8 text-xs font-mono uppercase tracking-wider font-semibold rounded-full shadow-md shadow-primary/20 hover:-translate-y-0.5 transition-all">
              Request Technical Capabilities Briefing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
