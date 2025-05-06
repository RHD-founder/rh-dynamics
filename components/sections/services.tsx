"use client";

import { Code, Smartphone, Globe, Server, ShieldCheck, BarChart3, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ServiceColor = "indigo" | "purple" | "blue" | "emerald" | "rose" | "amber";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  color: ServiceColor;
}

interface ColorClasses {
  accent: string;
  icon: string;
  hover: string;
  link: string;
  border: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Enterprise-grade solutions built with cutting-edge technologies to solve your complex business challenges.",
    color: "indigo"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps that deliver exceptional user experiences across iOS and Android platforms.",
    color: "purple"
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive web applications with modern UI/UX that scale seamlessly from startup to enterprise needs.",
    color: "blue"
  },
  {
    icon: Server,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services utilizing AWS, Azure, and Google Cloud platforms.",
    color: "emerald"
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Comprehensive security assessments and solutions to protect your digital assets and customer data.",
    color: "rose"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform your raw data into actionable insights with our advanced analytics and visualization tools.",
    color: "amber"
  },
];

// Function to get color-specific classes
const getColorClasses = (color: ServiceColor): ColorClasses => {
  const colorMap: Record<ServiceColor, ColorClasses> = {
    indigo: {
      accent: "bg-indigo-50/80",
      icon: "text-indigo-600",
      hover: "group-hover:bg-indigo-100",
      link: "text-indigo-600 hover:text-indigo-700",
      border: "border-indigo-100 hover:border-indigo-200",
    },
    purple: {
      accent: "bg-purple-50/80",
      icon: "text-purple-600",
      hover: "group-hover:bg-purple-100",
      link: "text-purple-600 hover:text-purple-700",
      border: "border-purple-100 hover:border-purple-200",
    },
    blue: {
      accent: "bg-blue-50/80",
      icon: "text-blue-600",
      hover: "group-hover:bg-blue-100",
      link: "text-blue-600 hover:text-blue-700",
      border: "border-blue-100 hover:border-blue-200",
    },
    emerald: {
      accent: "bg-emerald-50/80",
      icon: "text-emerald-600",
      hover: "group-hover:bg-emerald-100",
      link: "text-emerald-600 hover:text-emerald-700",
      border: "border-emerald-100 hover:border-emerald-200",
    },
    rose: {
      accent: "bg-rose-50/80",
      icon: "text-rose-600",
      hover: "group-hover:bg-rose-100",
      link: "text-rose-600 hover:text-rose-700",
      border: "border-rose-100 hover:border-rose-200",
    },
    amber: {
      accent: "bg-amber-50/80",
      icon: "text-amber-600",
      hover: "group-hover:bg-amber-100",
      link: "text-amber-600 hover:text-amber-700",
      border: "border-amber-100 hover:border-amber-200",
    }
  };

  return colorMap[color] || colorMap.blue;
};

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Enhanced background pattern with subtle gradient */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-background" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 font-medium mb-2"
          >
            OUR EXPERTISE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold font-heading mb-4 text-indigo-900"
          >
            Comprehensive Digital Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            We offer end-to-end technology solutions that help businesses in Northeast
            India and beyond compete in the global digital landscape.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-xl border ${colorClasses.border} bg-card hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Decorative corner accent with service-specific color */}
                <div className={`absolute -top-2 -right-2 w-12 h-12 ${colorClasses.accent} rounded-bl-xl transform rotate-0 group-hover:rotate-90 transition-transform duration-300`} />

                <div className={`p-3 rounded-lg ${colorClasses.accent} ${colorClasses.hover} inline-flex mb-5 transition-colors duration-300`}>
                  <service.icon className={`h-6 w-6 ${colorClasses.icon}`} />
                </div>

                <h3 className="text-xl font-semibold font-heading mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5">{service.description}</p>

                <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className={`${colorClasses.link} text-sm font-medium hover:underline`}>
                  Learn more →
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="mx-auto bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-100 hover:text-indigo-800"
            >
              View All Services <Lightbulb className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Add this to your globals.css or create a new component
// .bg-grid-pattern {
//   background-image: linear-gradient(to right, #f0f0f0 1px, transparent 1px),
//                     linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
//   background-size: 20px 20px;
// }
