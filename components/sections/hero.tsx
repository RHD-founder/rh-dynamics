"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Enterprise Deployments", sub: "Healthcare & Modern Businesses" },
  { value: "ABDM Ready", label: "Ayushman Bharat M1–M3", sub: "Clinical compliance" },
  { value: "< 2 Hours", label: "Response SLA", sub: "Worldwide & In-Person" },
  { value: "Flexible", label: "Delivery Options", sub: "Managed SaaS or Source Code" },
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-background pt-28 pb-20">
      
      {/* Minimalist Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center z-10 relative">
        
        {/* Micro-Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase border border-border bg-secondary/50 text-foreground/80 mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          Software Engineering &amp; Clinical Systems // Guwahati, Assam
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-6 tracking-tight text-foreground leading-[1.06]"
        >
          Systems Engineered for <br className="hidden sm:block" />
          <span className="text-gradient">Critical Operations.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          We engineer clinical healthcare software (RH-HSMS &amp; LIS), custom enterprise software, premium web platforms, and mobile apps with guaranteed rapid SLA worldwide.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
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

          <Link href="/projects" className="text-xs sm:text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground flex items-center gap-1.5 sm:ml-4 font-semibold transition-colors">
            <span>Explore Case Studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* 4-Column High-Signal Metric Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/80 text-left shadow-lg"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-card/90 backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                {stat.label}
              </span>
              <div>
                <p className="text-3xl sm:text-4xl font-black font-heading text-foreground tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground font-normal mt-1">
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