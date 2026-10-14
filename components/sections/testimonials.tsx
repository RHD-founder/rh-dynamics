"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote: "RH Dynamics delivered an exceptional digital platform that transformed our business operations in Assam. Their technical precision and speed helped us increase customer engagement by 40%.",
    author: "Debajit Buragohain",
    position: "Founder",
    company: "Jilikoni",
    metric: "+40% Engagement"
  },
  {
    quote: "Their systems engineering expertise in mobile and web platforms helped us launch a high-performance app our users love. The team is responsive, professional, and understands regional market dynamics.",
    author: "Alok Khataniar",
    position: "Founder",
    company: "Snapbaskiin",
    metric: "High Retention"
  },
  {
    quote: "The patient management and booking architecture they engineered significantly improved our clinical footfall and reduced counter wait times. Attentive to clinical healthcare compliance.",
    author: "Rupen Das",
    position: "Owner",
    company: "Riya Polyclinic",
    metric: "Optimized Wait Times"
  },
  {
    quote: "Their custom ordering and dispatch solution helped us streamline food operations across Guwahati. Reliable systems, robust uptime, and zero software headaches.",
    author: "Mukut Das",
    position: "Owner",
    company: "Mukutda Kitchen",
    metric: "Streamlined Logistics"
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-28 bg-background relative overflow-hidden border-t border-border/50">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/40 text-muted-foreground mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Verified Client Outcomes // Northeast India
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-heading text-foreground tracking-tight"
          >
            Trusted by Regional <br />
            <span className="text-gradient">Industry Leaders</span>
          </motion.h2>
        </div>

        {/* 4-Card Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-2xl glass-card dark:glass-card-dark border border-border/60 hover:border-primary/50 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/50">
                    {testimonial.metric}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-foreground/90 font-light leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-border/40 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-secondary text-foreground flex items-center justify-center font-mono font-bold text-xs border border-border/60">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold font-heading text-foreground leading-tight">
                    {testimonial.author}
                  </h4>
                  <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
