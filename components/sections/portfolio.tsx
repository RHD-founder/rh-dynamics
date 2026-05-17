"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, ShieldCheck, BarChart, Network, Zap } from "lucide-react";
import Link from "next/link";

const portfolioCategories = [
    {
        title: "Healthcare Digital Dominance",
        description: "Transforming regional healthcare providers through aggressive performance marketing and brand positioning.",
        icon: Activity,
        clients: [
            {
                name: "Cosmomedical Guwahati",
                description: "Complete digital transformation including custom web architecture and full-funnel patient acquisition campaigns.",
                services: ["Web Development", "Performance Marketing", "SEO", "Brand Strategy"],
                metrics: ["Flagship Web Presence", "High-Volume Lead Generation"],
            },
            {
                name: "Spektra Diagnostics & Multispeciality",
                description: "Strategic digital marketing campaigns driving targeted local awareness and diagnostic bookings.",
                services: ["Digital Marketing", "Social Media Strategy", "Local SEO"],
                metrics: ["Market Penetration", "Brand Awareness"],
            },
            {
                name: "Gate Rajdhani Hospital",
                description: "Premium healthcare marketing optimizing hospital visibility and patient trust across digital channels.",
                services: ["Performance Marketing", "Content Strategy", "Reputation Management"],
                metrics: ["Omnichannel Growth", "Patient Trust Building"],
            },
            {
                name: "Trinitas Hospital",
                description: "End-to-end digital branding and marketing execution for specialized medical services.",
                services: ["Brand Strategy", "Digital Marketing", "Lead Generation"],
                metrics: ["Specialized Targeting", "Brand Positioning"],
            },
            {
                name: "Hope Diagnostics & Clinic",
                description: "Data-driven marketing initiatives to increase clinical footfall and patient retention.",
                services: ["Local SEO", "Performance Marketing", "Patient Acquisition"],
                metrics: ["Footfall Optimization", "ROI Focused"],
            }
        ]
    },
    {
        title: "Enterprise Infrastructure & Security",
        description: "Robust architectural setups, networking, and surveillance systems for large-scale campuses.",
        icon: Network,
        clients: [
            {
                name: "APS Narengi School",
                description: "Comprehensive campus infrastructure modernization including advanced computing labs and enterprise-grade security.",
                services: ["Lab Setup & Architecture", "CCTV Security Systems", "Network Infrastructure"],
                metrics: ["Campus-Wide Coverage", "Enterprise Security"],
            }
        ]
    }
];

export function Portfolio() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background elements strictly contained to clip horizontal overflow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20 z-0" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0" />
            </div>

            <div className="container px-4 mx-auto relative z-10" ref={ref}>
                
                {portfolioCategories.map((category, categoryIdx) => (
                    <div key={categoryIdx} className="mb-32 last:mb-0">
                        {/* Category Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIdx * 0.2 }}
                            className="max-w-4xl mb-16"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-3xl bg-primary/10 text-primary border border-primary/20">
                                    <category.icon className="w-10 h-10" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black font-heading text-foreground tracking-tight">{category.title}</h2>
                            </div>
                            <p className="text-xl text-muted-foreground ml-[5.5rem] leading-relaxed">
                                {category.description}
                            </p>
                        </motion.div>

                        {/* Clients Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ml-0 lg:ml-[5.5rem]">
                            {category.clients.map((client, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: (categoryIdx * 0.2) + (idx * 0.1) }}
                                    className="group relative overflow-hidden flex flex-col h-full rounded-3xl glass-card dark:glass-card-dark border-border/50 hover:border-primary/50 transition-all duration-500 p-8 md:p-10 hover:-translate-y-1"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                    <h3 className="text-8xl font-black font-heading text-primary/5 absolute -bottom-4 -right-4 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                                        0{idx + 1}
                                    </h3>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <h3 className="text-3xl font-black font-heading text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
                                            {client.name}
                                        </h3>
                                        
                                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed flex-grow">
                                            {client.description}
                                        </p>

                                        <div className="mb-10">
                                            <h4 className="text-xs font-bold mb-4 text-foreground tracking-widest uppercase opacity-60 flex items-center">
                                                <Zap className="w-3 h-3 mr-2" /> Services Delivered
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {client.services.map((service, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs px-4 py-2 bg-secondary/50 text-secondary-foreground border border-border/50 rounded-full font-medium"
                                                    >
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-8 border-t border-border/50">
                                            <h4 className="text-xs font-bold mb-4 text-foreground tracking-widest uppercase opacity-60 flex items-center">
                                                <BarChart className="w-3 h-3 mr-2" /> Impact Metrics
                                            </h4>
                                            <ul className="space-y-3">
                                                {client.metrics.map((metric, i) => (
                                                    <li key={i} className="flex items-center text-base font-semibold text-foreground">
                                                        <ArrowRight className="w-4 h-4 mr-3 text-primary" />
                                                        {metric}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-24 text-center bg-muted/20 p-12 md:p-20 rounded-[3rem] border border-border/50 backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-blue-500/10 pointer-events-none" />
                    <h3 className="text-3xl md:text-5xl font-black font-heading mb-6 tracking-tight relative z-10">Ready to be our next <br/>success story?</h3>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 relative z-10">
                        Whether you need a flagship web application, aggressive performance marketing, or robust IT infrastructure, we have the expertise to scale your operations.
                    </p>
                    <Link href="/contact" className="relative z-10 inline-block">
                        <Button size="lg" className="h-16 px-10 text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all rounded-full group">
                            Request a Strategy Call <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}