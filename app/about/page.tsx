"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Zap, Globe, Target, Building2, Shield, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const values = [
  {
    icon: Rocket,
    title: "Aggressive Innovation",
    description: "We don't follow trends; we set them. Our stack is always modern, fast, and scalable."
  },
  {
    icon: Target,
    title: "Performance Driven",
    description: "Every line of code and every campaign we run is designed to generate measurable ROI."
  },
  {
    icon: Shield,
    title: "Enterprise Integrity",
    description: "Operating with absolute transparency and enterprise-grade security protocols."
  },
  {
    icon: HeartHandshake,
    title: "Client Obsession",
    description: "Your business goals become our technical mandates. We win when you dominate."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 overflow-hidden relative">
      {/* Background ambient glow strictly contained to clip horizontal overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
      </div>

      {/* Hero Section */}
      <section className="container px-4 mx-auto relative z-10 mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Badge variant="outline" className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 text-sm tracking-wider uppercase pointer-events-none">
              RHD Softwaresolutions LLP (ACN-1931)
            </Badge>
            <Badge variant="outline" className="px-4 py-1.5 bg-orange-500/10 text-orange-500 border border-orange-500/20 text-sm tracking-wider uppercase flex items-center gap-2 pointer-events-none">
              <ShieldCheck className="w-4 h-4" /> Startup India Recognized
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight font-heading"
          >
            Architecting <br className="hidden md:block" />
            <span className="text-gradient">Digital Dominance</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            We are a premium digital agency established in Guwahati, Assam. We specialize in engineering high-performance software and executing aggressive marketing strategies that position our clients as undisputed industry leaders.
          </motion.p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="container px-4 mx-auto relative z-10 mb-32">
        <div className="glass-card dark:glass-card-dark rounded-[3rem] p-8 md:p-16 border border-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4" /> Our Origin
              </h2>
              <h3 className="text-4xl md:text-5xl font-black font-heading mb-6 leading-tight">
                Officially Founded <br/> <span className="text-muted-foreground">March 29th, 2025</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Born out of a necessity to bring world-class, premium digital execution to Northeast India. RH Dynamics was established not just to build websites, but to construct robust, high-converting digital ecosystems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a fast-scaling startup, we operate with intense agility. We bypass legacy bureaucracy to deliver cutting-edge technology and data-driven marketing directly to the businesses that need it most.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-background/50 backdrop-blur-md p-8 rounded-3xl border border-border/50 flex flex-col justify-center text-center">
                <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mx-auto mb-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <h4 className="text-4xl font-black font-heading text-foreground mb-2">20+</h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Premium Projects</p>
              </div>
              <div className="bg-background/50 backdrop-blur-md p-8 rounded-3xl border border-border/50 flex flex-col justify-center text-center">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl w-fit mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-4xl font-black font-heading text-foreground mb-2">100%</h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Client Retention</p>
              </div>
              <div className="sm:col-span-2 bg-background/50 backdrop-blur-md p-8 rounded-3xl border border-border/50 flex flex-col justify-center text-center">
                <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl w-fit mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h4 className="text-4xl font-black font-heading text-foreground mb-2">Recognized</h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">By Startup India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">The DNA</h2>
          <h3 className="text-4xl md:text-5xl font-black font-heading">Our Core Values</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card dark:glass-card-dark p-8 rounded-3xl border border-border/50 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="p-4 bg-primary/10 text-primary rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-heading mb-4 text-foreground">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
