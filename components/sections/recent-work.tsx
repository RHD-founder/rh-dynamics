"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart, Activity, ShieldCheck } from "lucide-react";

const recentWork = [
  {
    title: "Cosmomedical Guwahati",
    category: "Web & Performance",
    description: "Flagship digital ecosystem featuring full-stack web presence and high-conversion patient acquisition strategies.",
    icon: BarChart,
    tech: ["Web Development", "Performance Marketing", "SEO"],
    link: "/projects",
  },
  {
    title: "Spektra Diagnostics",
    category: "Healthcare Dominance",
    description: "Strategic brand positioning and targeted digital campaigns to dominate the local healthcare market.",
    icon: Activity,
    tech: ["Brand Strategy", "Digital Marketing", "Lead Gen"],
    link: "/projects",
  },
  {
    title: "APS Narengi School",
    category: "Campus Infrastructure",
    description: "Enterprise-grade networking, advanced lab architecture, and campus-wide security systems.",
    icon: ShieldCheck,
    tech: ["Lab Setup", "CCTV Security", "Network Architecture"],
    link: "/projects",
  },
];

export function RecentWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20 pointer-events-none" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
          >
            Strategic Partnerships
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-heading mb-6 text-foreground tracking-tight"
          >
            Featured <span className="text-gradient">Case Studies</span>
          </motion.h2>
          
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-lg md:text-xl text-muted-foreground"
          >
            Delivering measurable growth and robust infrastructure for industry leaders without the fluff. Pure results.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {recentWork.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl glass-card dark:glass-card-dark border-border/50 hover:border-primary/50 transition-all duration-500 p-8 md:p-10 flex flex-col h-full hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                  <project.icon className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold text-sm uppercase tracking-wider">{project.category}</span>
              </div>
              
              <h3 className="text-3xl font-black mb-4 text-foreground font-heading">{project.title}</h3>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed flex-grow">{project.description}</p>
              
              <div className="mb-10">
                <h4 className="text-sm font-semibold mb-4 text-foreground tracking-wider uppercase opacity-80">Technologies & Services</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full border border-border/50 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link href={project.link} className="mt-auto">
                <Button variant="outline" className="w-full h-14 glass-card hover:bg-primary hover:text-primary-foreground border-border transition-all rounded-full hover:scale-[1.02] text-base font-semibold group/btn">
                  Read Case Study <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Link href="/projects">
            <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all rounded-full">
              Explore Complete Portfolio
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
