"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, Globe, LayoutTemplate,
  Target, TrendingUp, Megaphone,
  ShieldAlert, Bot, GraduationCap,
  Network, Server, Video
} from "lucide-react";

type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  color: string;
  items: {
    title: string;
    icon: React.ElementType;
    desc: string;
  }[];
};

const categories: ServiceCategory[] = [
  {
    id: "software",
    title: "Software Solutions",
    description: "Enterprise-grade digital products tailored for your business.",
    color: "from-blue-500 to-cyan-500",
    items: [
      { title: "Web Applications", icon: Globe, desc: "Scalable, high-performance web apps." },
      { title: "Mobile Apps", icon: Smartphone, desc: "Native & cross-platform mobile solutions." },
      { title: "Custom Platforms", icon: LayoutTemplate, desc: "Bespoke SaaS and internal tools." }
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Data-driven strategies to scale your brand visibility.",
    color: "from-purple-500 to-pink-500",
    items: [
      { title: "Performance Marketing", icon: Target, desc: "High ROI paid advertising campaigns." },
      { title: "SEO & Analytics", icon: TrendingUp, desc: "Search optimization and data insights." },
      { title: "Brand Strategy", icon: Megaphone, desc: "Comprehensive digital branding." }
    ]
  },
  {
    id: "training",
    title: "Training & Education",
    description: "Empowering the next generation with advanced tech skills.",
    color: "from-emerald-500 to-teal-500",
    items: [
      { title: "Cyber Security", icon: ShieldAlert, desc: "Workshops and corporate training." },
      { title: "Robotics & AI", icon: Bot, desc: "School integrations and ATL Services." },
      { title: "Skill Development", icon: GraduationCap, desc: "Advanced technical certifications." }
    ]
  },
  {
    id: "infrastructure",
    title: "IT Infrastructure",
    description: "Robust hardware and network setups for modern institutions.",
    color: "from-orange-500 to-amber-500",
    items: [
      { title: "Networking & Comm", icon: Network, desc: "Enterprise network architecture." },
      { title: "Lab Setup", icon: Server, desc: "Complete computer & tech lab installations." },
      { title: "CCTV & Security", icon: Video, desc: "Smart surveillance systems." }
    ]
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 dark:opacity-20" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground mb-6"
          >
            Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-heading mb-6 text-foreground"
          >
            End-to-End Technology <br />
            <span className="text-gradient">Ecosystem</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From deploying scalable cloud software to installing robust physical IT infrastructure, we are your single-source technology partner.
          </motion.p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className="glass-card dark:glass-card-dark rounded-3xl p-8 relative overflow-hidden group"
            >
              {/* Category Glow Effect */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${category.color} rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />

              <h3 className="text-3xl font-bold font-heading mb-3 text-foreground">{category.title}</h3>
              <p className="text-muted-foreground mb-8 text-lg">{category.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col">
                    <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h4 className="text-base font-semibold mb-2 text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-base shadow-lg transition-transform hover:-translate-y-1">
              Discuss Your Requirements
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
