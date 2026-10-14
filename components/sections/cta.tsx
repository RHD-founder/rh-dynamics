"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden bg-background border-t border-border/50" ref={ref}>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-5xl">
        <div className="rounded-3xl border border-border/80 p-8 sm:p-14 md:p-16 text-center bg-gradient-to-b from-secondary/30 via-secondary/10 to-background relative overflow-hidden">
          
          <div className="max-w-2xl mx-auto">
            
            {/* Micro Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/50 text-muted-foreground mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Direct Technical Discovery // Guwahati, Assam
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black font-heading mb-4 tracking-tight text-foreground"
            >
              Ready to Engineer Your <br />
              <span className="text-gradient">Operational System?</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-8 max-w-xl mx-auto"
            >
              Consult directly with our technical partners in Guwahati. We will audit your existing workflows, database schemas, and hardware setup with zero commercial fluff.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3.5 justify-center items-center mb-10"
            >
              <Link href="/contact">
                <Button size="lg" className="h-13 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                  Request Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/projects">
                <Button variant="ghost" size="lg" className="h-13 px-8 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground">
                  Explore Case Studies
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Contact Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-border/40 flex flex-wrap justify-center items-center gap-6 text-xs font-mono text-muted-foreground"
            >
              <a href="mailto:founder@rhdynamics.in" className="hover:text-foreground transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" />
                founder@rhdynamics.in
              </a>
              <span className="text-border hidden sm:inline">•</span>
              <a href="tel:+918638875149" className="hover:text-foreground transition-colors flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-primary" />
                +91 86388 75149
              </a>
              <span className="text-border hidden sm:inline">•</span>
              <span>Guwahati & Golaghat, Assam</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}