"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

// Enhanced card accent colors for more variety and richness
const cardAccents = [
  "from-purple-600/20 to-purple-600/5",
  "from-emerald-600/20 to-emerald-600/5",
  "from-rose-600/20 to-rose-600/5",
  "from-amber-600/20 to-amber-600/5"
];

// Card borders for added dimension
const cardBorders = [
  "border-purple-200",
  "border-emerald-200",
  "border-rose-200",
  "border-amber-200"
];

// Icon background colors for accent
const iconBgColors = [
  "bg-purple-100",
  "bg-emerald-100",
  "bg-rose-100",
  "bg-amber-100"
];

// Initial backgrounds for testimonial cards
const initialBgColors = [
  "bg-purple-50/50",
  "bg-emerald-50/50",
  "bg-rose-50/50",
  "bg-amber-50/50"
];

const testimonials = [
  {
    quote: "RH Dynamics delivered an exceptional solution that transformed our business operations. Their attention to detail and focus on user experience helped us increase customer engagement by 40%.",
    author: "Debajit Buragohain",
    position: "Founder, Jilikoni",
    rating: 5,
    company: "Jilikoni",
  },
  {
    quote: "Their expertise in mobile development helped us launch a successful app that our users love. The team is responsive, professional, and truly understands the local market dynamics.",
    author: "Alok Khataniar",
    position: "Founder, Snapbaskiin",
    rating: 5,
    company: "Snapbaskiin",
  },
  {
    quote: "The website and appointment system they developed has significantly improved our patient experience. Their team was attentive to our specific healthcare needs.",
    author: "Rupen Das",
    position: "Owner, Riya Polyclinic",
    rating: 5,
    company: "Riya Polyclinic",
  },
  {
    quote: "Their e-commerce solution helped us expand our food delivery business across Guwahati. The ordering system is intuitive and our customers love it.",
    author: "Mukut Das",
    position: "Owner, Mukutda Kitchen",
    rating: 5,
    company: "Mukutda Kitchen",
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // State for star animations
  const [sparkleStars, setSparkleStars] = useState<{ [key: string]: number[] }>({});

  // Create random sparkling effect for stars
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        const newSparkles: { [key: string]: number[] } = {};
        testimonials.forEach((testimonial, index) => {
          // Randomly select 1-2 stars to sparkle
          const starCount = Math.floor(Math.random() * 2) + 1;
          const stars = Array.from({ length: starCount }, () => Math.floor(Math.random() * 5));
          newSparkles[testimonial.author] = stars;
        });
        setSparkleStars(newSparkles);
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50/30 to-background relative">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-indigo-100/50 rounded-br-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100/50 rounded-tl-3xl" />

      {/* Additional decorative blobs */}
      <div className="absolute top-1/4 right-10 w-40 h-40 rounded-full bg-purple-400/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-60 h-60 rounded-full bg-emerald-400/5 blur-3xl"></div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-medium mb-2"
          >
            TESTIMONIALS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold font-heading mb-4 text-indigo-900"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Hear directly from businesses across Northeast India who have partnered with us to achieve their digital transformation goals.
          </motion.p>
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
              className={`p-8 rounded-xl border ${cardBorders[index]} ${initialBgColors[index]} hover:bg-gradient-to-br ${cardAccents[index]} shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full`}
            >
              {/* Background accent */}
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${cardAccents[index]} opacity-30`}
              />

              {/* Quote icon */}
              <div className={`absolute -top-5 -left-5 ${iconBgColors[index]} text-white p-2 rounded-full shadow-md`}>
                <Quote className={`h-5 w-5 ${index === 0 ? "text-purple-600" :
                  index === 1 ? "text-emerald-600" :
                    index === 2 ? "text-rose-600" : "text-amber-600"}`} />
              </div>

              {/* Rating stars with color-specific styling */}
              <div className="flex mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="relative">
                    <Star className={`h-5 w-5 ${index === 0 ? "text-purple-400 fill-purple-400" :
                      index === 1 ? "text-emerald-400 fill-emerald-400" :
                        index === 2 ? "text-rose-400 fill-rose-400" :
                          "text-amber-400 fill-amber-400"
                      }`} />
                    {sparkleStars[testimonial.author]?.includes(i) && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute -top-1 -right-1"
                      >
                        <Sparkles className={`h-3 w-3 ${index === 0 ? "text-purple-300" :
                          index === 1 ? "text-emerald-300" :
                            index === 2 ? "text-rose-300" :
                              "text-amber-300"
                          }`} />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic leading-relaxed relative z-10 min-h-[120px] flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t relative z-10 mt-auto">
                <div className={`h-14 w-14 rounded-full ${iconBgColors[index]} flex items-center justify-center shadow-sm`}>
                  <div className={`font-bold text-2xl ${index === 0 ? "text-purple-600" :
                    index === 1 ? "text-emerald-600" :
                      index === 2 ? "text-rose-600" :
                        "text-amber-600"
                    }`}>
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className={`font-semibold font-heading text-lg ${index === 0 ? "text-purple-900" :
                    index === 1 ? "text-emerald-900" :
                      index === 2 ? "text-rose-900" :
                        "text-amber-900"
                    }`}>{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>

              {/* Company accent */}
              <div className="absolute bottom-4 right-4 opacity-10 z-0">
                <div className={`font-black text-4xl ${index === 0 ? "text-purple-900" :
                  index === 1 ? "text-emerald-900" :
                    index === 2 ? "text-rose-900" :
                      "text-amber-900"
                  }`}>{testimonial.company.charAt(0)}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          {/* <a href="https://www.clutch.co" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
            View more client reviews on Clutch →
          </a> */}
        </motion.div>
      </div>
    </section>
  );
}
