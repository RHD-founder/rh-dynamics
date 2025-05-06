"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "10+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background gradient with richer colors */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-indigo-600/15 to-blue-600/10"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Background pattern with updated color */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Add colorful geometric shapes in background */}
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/10 to-purple-600/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 rounded-full bg-gradient-to-tl from-amber-400/10 to-amber-600/5 blur-3xl"></div>

      <div className="container px-4 mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4 font-semibold tracking-wide bg-gradient-to-r from-indigo-600 via-primary to-purple-600 text-transparent bg-clip-text"
        >
          NORTHEAST INDIA'S PREMIER SOFTWARE AGENCY
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight"
        >
          Transforming <span className="text-rose-600">Ideas</span> Into <br />
          <span className="text-indigo-600">Powerful</span> Digital Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          At RH Dynamics, we combine regional expertise with global standards to
          deliver exceptional software that drives your business forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4 justify-center mb-12"
        >
          <Link href="/contact">
            <Button size="lg" className="group bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline" size="lg" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800">
              View Our Work
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5, type: "spring" }}
                className={`text-4xl font-bold mb-1 ${index === 0 ? "text-rose-600" :
                  index === 1 ? "text-indigo-600" :
                    "text-blue-600"
                  }`}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <Button variant="ghost" size="icon" className="animate-bounce text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">
            <ChevronDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}