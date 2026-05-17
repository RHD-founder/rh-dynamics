"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "20+", label: "Premium Projects" },
    { value: "Est. 2025", label: "Startup India Recognized" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      {/* Abstract Glowing Orbs for Depth */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/20 dark:bg-primary/10 blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-blue-500/20 dark:bg-blue-600/10 blur-[100px] mix-blend-screen" />

      <div className="container px-4 mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium border border-primary/20 bg-primary/10 text-primary mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Next-Gen Software & IT Solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tight text-foreground"
        >
          Architecting Your <br className="hidden md:block" />
          <span className="text-gradient">Digital Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light"
        >
          From enterprise software and mobile apps to comprehensive IT infrastructure and advanced robotics training. We deliver global standards locally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg" className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm border-border hover:bg-muted transition-transform hover:-translate-y-1">
              Explore Services
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5, type: "spring" }}
                className="text-3xl md:text-5xl font-black mb-2 text-foreground"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <Button variant="ghost" size="icon" className="animate-bounce text-muted-foreground hover:text-primary rounded-full h-12 w-12 bg-background/50 backdrop-blur-sm border border-border">
            <ChevronDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}