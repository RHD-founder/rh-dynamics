"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import testimonialsData from "@/data/testimonials.json";

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonials, setTestimonials] = useState(testimonialsData);

  useEffect(() => {
    fetch("/api/review")
      .then((res) => res.json())
      .then((data) => {
        if (data?.reviews && Array.isArray(data.reviews) && data.reviews.length > 0) {
          setTestimonials(data.reviews);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-28 bg-background relative overflow-hidden border-t border-border/50">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl">
        
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
              Verified Client Outcomes // Regional &amp; Global
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <Link href="/review">
              <Button size="sm" className="rounded-full text-xs font-mono uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm px-4">
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                Submit Review
                <ArrowRight className="ml-1.5 h-3 w-3" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id || testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-2xl glass-card dark:glass-card-dark border border-border/60 hover:border-primary/50 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Source Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 shrink-0">
                    {/* Google G Logo */}
                    <div className="p-1 rounded-md bg-secondary/80 border border-border/50 flex items-center justify-center shrink-0" title="Verified Google Review">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.43 7.33 24 12 24z"/>
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.57 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                      </svg>
                    </div>

                    <div className="flex gap-0.5 text-amber-500 shrink-0">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {testimonial.metric && (
                    <span 
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/50 truncate max-w-[120px] inline-block shrink-0 text-right font-medium"
                      title={testimonial.metric}
                    >
                      {testimonial.metric}
                    </span>
                  )}
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
