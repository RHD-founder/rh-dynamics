"use client";

import { Code, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs with cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive and scalable web applications using modern frameworks and best practices.",
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
