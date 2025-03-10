"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const testimonials = [
  {
    quote: "RH Dynamics delivered an exceptional solution that transformed our business operations.",
    author: "Debajit Buragohain",
    position: "Founder at , Jilikoni",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGohDYAfxK0_A/profile-displayphoto-shrink_800_800/B56ZRUpvB9HQAc-/0/1736587016181?e=1746057600&v=beta&t=ftbcvYYxJKyzc1tIoBqkmFt9ayBMub7v3pq0g8bcG8k",
  },
  {
    quote: "Their expertise in mobile development helped us launch a successful app that our users love.",
    author: "Alok Khataniar",
    position: "Founder, Snapbaskiin",
    image: "https://instagram.fjrh2-1.fna.fbcdn.net/v/t51.2885-19/403024245_317226224433915_6132356926647779091_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fjrh2-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AGHfrUhiM7CmXdBuYzq9zRmmDM8a4Hvs-DVSWAoREvVaGX5sx6TP-1Nbst4auAfB6M&_nc_ohc=JPzm4bjyY_IQ7kNvgE_EKFJ&_nc_gid=205f78fff9f54bbf9e10d0fac56ba813&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBoNXACnFXuySPPRvEzNbVqURSPUVNB7b1WbxAfh2Bt1g&oe=67C4C2BC&_nc_sid=8b3546",
  },
  {
    quote: "Professional team that consistently delivers high-quality solutions on time.",
    author: "Michael Chen",
    position: "CTO, StartupX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-muted-foreground mb-4 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                  priority
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
