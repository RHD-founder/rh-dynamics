"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Layout } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
    {
        title: "Jilikoni",
        description: "Premium Assam tea brand with e-commerce capabilities, serving tea lovers around the world.",
        image: "/images/portfolio/jilikoni.jpg", // You'll need to add this image
        websiteUrl: "https://jilikoni.com/",
        services: ["Web Development", "E-commerce", "Branding"],
        features: [
            "Online ordering system",
            "Product catalog",
            "Secure payment processing",
            "Responsive design"
        ]
    },
    {
        title: "Riya Polyclinic",
        description: "Healthcare website with appointment scheduling system for a multi-specialty clinic.",
        image: "/images/portfolio/riya-polyclinic.jpg", // You'll need to add this image
        websiteUrl: "https://www.riyapolyclinic.com/",
        services: ["Web Development", "Healthcare Solution", "Appointment System"],
        features: [
            "Online appointment booking",
            "Doctor profiles",
            "Service information",
            "Patient portal"
        ]
    },
    {
        title: "Shreeji Tours & Travels",
        description: "Travel agency website showcasing tour packages and travel services across Northeast India.",
        image: "/images/portfolio/shreeji-tours.jpg", // You'll need to add this image
        websiteUrl: "https://www.shreejiitourstravels.in/",
        services: ["Web Development", "Digital Marketing", "SEO"],
        features: [
            "Tour package listings",
            "Booking inquiries",
            "Image galleries",
            "Responsive design"
        ]
    }
];

export function Portfolio() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-24 bg-secondary/30 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-tr-3xl" />

            <div className="container px-4 mx-auto relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-primary font-medium mb-2"
                    >
                        OUR PORTFOLIO
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold font-heading mb-4"
                    >
                        Featured Client Projects
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted-foreground"
                    >
                        Explore a selection of websites and applications we've developed for businesses across Northeast India. Each project demonstrates our commitment to creating impactful digital solutions.
                    </motion.p>
                </div>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="border rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="relative aspect-video overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <Link href={item.websiteUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="secondary" size="sm" className="mr-2">
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            Visit Website
                                        </Button>
                                    </Link>
                                </div>
                                <div className="w-full h-full bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center p-4 text-center">
                                    <div className="flex flex-col items-center">
                                        <Layout className="h-8 w-8 text-primary mb-2" />
                                        <p className="text-lg font-semibold font-heading">{item.title} Website</p>
                                        <p className="text-sm text-muted-foreground mt-1">Visit website to see actual design</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold font-heading mb-2 flex items-center">
                                    {item.title}
                                    <span className="ml-2 text-primary">
                                        <Layout className="h-4 w-4" />
                                    </span>
                                </h3>

                                <p className="text-muted-foreground mb-4">{item.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold mb-2">Services Provided:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.services.map((service) => (
                                            <span
                                                key={service}
                                                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        {item.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-primary mr-2">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="border-t p-4 bg-muted/50">
                                <Link
                                    href={item.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary hover:text-primary/80 flex items-center justify-center"
                                >
                                    Visit {item.title} <ExternalLink className="h-3 w-3 ml-1" />
                                </Link>
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
                    <Button asChild>
                        <Link href="/projects">
                            View All Projects
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
} 