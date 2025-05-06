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
        <section className="py-24 relative overflow-hidden" ref={ref}>
            {/* Enhanced background with rich gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 via-indigo-600/90 to-blue-600/90 z-0" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />

            {/* Decorative shapes with enhanced colors */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={inView ? { opacity: 0.6, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-purple-500/20 z-0"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={inView ? { opacity: 0.5, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-blue-400/20 z-0"
            />

            {/* Additional decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-rose-400/30 blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-amber-400/20 blur-xl"></div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-1.5 mb-6 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                        Ready to Get Started?
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6"
                    >
                        Ready to Transform Your Digital Presence?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl mb-10 text-white/90"
                    >
                        Partner with Northeast India's leading software development company to
                        build innovative solutions that drive your business forward.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/contact">
                            <Button size="lg" variant="secondary" className="group font-medium bg-white text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800">
                                Schedule a Consultation
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>

                        <div className="flex flex-col sm:flex-row gap-6 mt-6 sm:mt-0">
                            <a href="mailto:support@rh-dynamics.software" className="flex items-center text-white/90 hover:text-white transition-colors">
                                <div className="p-2 rounded-full bg-white/10 mr-2">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <span>support@rh-dynamics.software</span>
                            </a>
                            <a href="tel:+918638875149" className="flex items-center text-white/90 hover:text-white transition-colors">
                                <div className="p-2 rounded-full bg-white/10 mr-2">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <span>+91 8638875149</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-12 text-sm text-white/70"
                    >
                        Trusted by leading companies across Northeast India and beyond
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 