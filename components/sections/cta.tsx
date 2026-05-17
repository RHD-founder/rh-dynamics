"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function CTA() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-24 relative overflow-hidden bg-background" ref={ref}>
            <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20 z-0" />
            
            {/* Immersive Glowing Background Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 0.6, scale: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-primary/20 blur-[120px] mix-blend-screen z-0"
            />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto glass-card dark:glass-card-dark rounded-3xl p-10 md:p-16 text-center border border-border shadow-2xl overflow-hidden relative">
                    
                    {/* Inner Card Glows */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

                    <div className="relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center rounded-full px-4 py-1.5 mb-6 text-sm font-medium border border-primary/20 bg-primary/10 text-primary backdrop-blur-sm"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            Ready to Get Started?
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black font-heading mb-6 tracking-tight text-foreground"
                        >
                            Accelerate Your <span className="text-gradient">Digital Transformation</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl mb-10 text-muted-foreground max-w-2xl mx-auto"
                        >
                            Partner with our experts to build scalable software, setup advanced IT infrastructure, or train your workforce.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                        >
                            <Link href="/contact">
                                <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1">
                                    Schedule a Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>

                            <Link href="/services">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm border-border hover:bg-muted transition-transform hover:-translate-y-1">
                                    Explore Solutions
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm font-medium text-muted-foreground pt-8 border-t border-border/50"
                        >
                            <a href="mailto:support@rh-dynamics.software" className="flex items-center hover:text-primary transition-colors">
                                <Mail className="h-4 w-4 mr-2" />
                                support@rh-dynamics.software
                            </a>
                            <span className="hidden sm:inline text-border">•</span>
                            <a href="tel:+918638875149" className="flex items-center hover:text-primary transition-colors">
                                <Phone className="h-4 w-4 mr-2" />
                                +91 86388 75149
                            </a>
                            <span className="hidden sm:inline text-border">•</span>
                            <a href="tel:+919864848781" className="flex items-center hover:text-primary transition-colors">
                                <Phone className="h-4 w-4 mr-2" />
                                +91 9864848781
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}