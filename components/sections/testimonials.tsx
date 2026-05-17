"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "RH Dynamics delivered an exceptional solution that transformed our business operations. Their attention to detail and focus on user experience helped us increase customer engagement by 40%.",
    author: "Debajit Buragohain",
    position: "Founder",
    rating: 5,
    company: "Jilikoni",
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500",
    bgIcon: "bg-purple-500/10"
  },
  {
    quote: "Their expertise in mobile development helped us launch a successful app that our users love. The team is responsive, professional, and truly understands the local market dynamics.",
    author: "Alok Khataniar",
    position: "Founder",
    rating: 5,
    company: "Snapbaskiin",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-500",
    bgIcon: "bg-emerald-500/10"
  },
  {
    quote: "The website and appointment system they developed has significantly improved our patient experience. Their team was attentive to our specific healthcare needs.",
    author: "Rupen Das",
    position: "Owner",
    rating: 5,
    company: "Riya Polyclinic",
    color: "from-rose-500/20 to-rose-500/5",
    iconColor: "text-rose-500",
    bgIcon: "bg-rose-500/10"
  },
  {
    quote: "Their e-commerce solution helped us expand our food delivery business across Guwahati. The ordering system is intuitive and our customers love it.",
    author: "Mukut Das",
    position: "Owner",
    rating: 5,
    company: "Mukutda Kitchen",
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-500",
    bgIcon: "bg-amber-500/10"
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Replaced broken solid elements with massive soft background glows */}
      <div className="absolute top-1/4 left-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground mb-6"
          >
            Client Success Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground"
          >
            What Our <span className="text-gradient">Partners Say</span>
          </motion.h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card dark:glass-card-dark rounded-3xl p-8 relative overflow-hidden flex flex-col h-full group"
            >
              {/* Card Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Quote Icon */}
              <div className={`absolute -top-4 -left-4 ${testimonial.bgIcon} p-4 rounded-full backdrop-blur-md`}>
                <Quote className={`h-6 w-6 ${testimonial.iconColor}`} />
              </div>

              {/* Rating Stars */}
              <div className="flex mb-6 mt-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${testimonial.iconColor} fill-current`} />
                ))}
              </div>

              {/* Quote Text - Fixed Contrast */}
              <p className="text-foreground/90 font-medium mb-8 italic leading-relaxed relative z-10 min-h-[140px] flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/50 relative z-10 mt-auto">
                <div className={`h-12 w-12 rounded-full ${testimonial.bgIcon} flex items-center justify-center`}>
                  <div className={`font-bold text-xl ${testimonial.iconColor}`}>
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
