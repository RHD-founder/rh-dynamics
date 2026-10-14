"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Regional Deployments", sub: "Assam & Northeast" },
  { value: "ABDM Ready", label: "Ayushman Bharat M1–M3", sub: "Clinical compliance" },
  { value: "99.9%", label: "Infrastructure Uptime", sub: "Enterprise SLA" },
  { value: "₹0 Forever", label: "SaaS Seat Debt", sub: "100% Code ownership" },
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-background pt-28 pb-20">
      
      {/* Minimalist Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 mx-auto text-center z-10 max-w-5xl">
        
        {/* Micro-Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/40 text-muted-foreground mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Systems Engineering & Cloud Infrastructure // Guwahati, Assam
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black mb-6 tracking-tight text-foreground leading-[1.08]"
        >
          Systems Engineered for <br className="hidden sm:block" />
          <span className="text-gradient">Critical Operations.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We architect ABDM-compliant hospital management systems (RH-HSMS), dedicated cloud ERPs, and mission-critical campus optical networks across Assam and Northeast India.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3.5 justify-center items-center mb-16"
        >
          <Link href="/contact">
            <Button size="lg" className="h-13 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
              Schedule Architecture Discovery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          
          <a href="tel:+918638875149">
            <Button variant="outline" size="lg" className="h-13 px-7 text-sm font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
              <Phone className="mr-2 h-4 w-4 text-primary" />
              +91 86388 75149
            </Button>
          </a>

          <Link href="/projects" className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground flex items-center gap-1 sm:ml-2">
            <span>Explore Case Studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* 4-Column High-Signal Metric Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/60 text-left"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-card p-5 sm:p-6 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-3">
                {stat.label}
              </span>
              <div>
                <p className="text-2xl sm:text-3xl font-black font-heading text-foreground tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[11px] text-muted-foreground font-light mt-0.5">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}