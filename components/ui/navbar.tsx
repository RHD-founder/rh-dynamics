"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { 
  Menu, X, ChevronDown, Activity, Database, 
  Network, Globe, ArrowRight, ShieldCheck, Sparkles 
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const solutionsDropdown = [
  {
    title: "RH-HSMS Hospital System",
    description: "ABDM & PMJAY-compliant cloud HIS, bed matrix, EMR, and pharmacy billing.",
    href: "/hsms",
    icon: Activity,
    badge: "Clinical HIS"
  },
  {
    title: "Custom Cloud ERP & Software",
    description: "Bespoke supply chain, multi-branch inventory, GST ledger & biometric payroll.",
    href: "/custom-software",
    icon: Database,
    badge: "Enterprise ERP"
  },
  {
    title: "Campus IT & Infrastructure",
    description: "Gigabit optical fiber backbones, server rooms, computing labs & CCTV security.",
    href: "/services",
    icon: Network,
    badge: "Hardware & Labs"
  },
  {
    title: "Full-Stack Web & Performance",
    description: "High-conversion Next.js platforms, local Google Maps SEO & automated lead funnels.",
    href: "/services",
    icon: Globe,
    badge: "Web & Growth"
  }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [solutionsHovered, setSolutionsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsHovered(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setSolutionsHovered(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setSolutionsHovered(false);
    }, 150);
  };

  const isSolutionsActive = 
    pathname === "/services" || 
    pathname === "/hsms" || 
    pathname === "/custom-software";

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2 sm:py-3" : "py-4 sm:py-5"
      )}>
        <nav className={cn(
          "mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between transition-all duration-300 rounded-full",
          scrolled 
            ? "bg-background/90 dark:bg-zinc-950/90 backdrop-blur-md border border-border/60 shadow-lg py-2.5 mx-3 sm:mx-auto" 
            : "bg-background/40 backdrop-blur-sm border border-border/30 py-3 mx-3 sm:mx-auto"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative">
              <Image
                src={theme === "dark" ? "/dark-logo.png" : "/light-logo.png"}
                alt="RH Dynamics"
                width={34}
                height={34}
                className="rounded-full transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="ml-3 flex flex-col">
              <span className="font-heading font-black text-sm uppercase tracking-[0.16em] text-foreground leading-none">
                RH Dynamics
              </span>
              <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase mt-0.5 hidden sm:block">
                Systems & Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 justify-center relative">
            
            {/* Solutions Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5",
                  isSolutionsActive || solutionsHovered
                    ? "text-foreground bg-secondary font-bold" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 font-medium"
                )}
                aria-expanded={solutionsHovered}
              >
                <span>Solutions</span>
                <ChevronDown className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  solutionsHovered ? "rotate-180 text-primary" : "text-muted-foreground"
                )} />
              </button>

              {/* Desktop Dropdown Popover */}
              <AnimatePresence>
                {solutionsHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[460px] pointer-events-auto"
                  >
                    <div className="rounded-2xl glass-card dark:glass-card-dark border border-border/80 shadow-2xl p-3 bg-background/95 backdrop-blur-xl">
                      <div className="px-3 py-2 border-b border-border/50 mb-2 flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                          Engineered Platforms // Northeast India
                        </span>
                        <span className="text-[10px] font-mono text-primary font-bold">
                          4 Core Stacks
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-1">
                        {solutionsDropdown.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="p-3 rounded-xl hover:bg-secondary/70 transition-colors flex items-start gap-3 group/item border border-transparent hover:border-border/40"
                          >
                            <div className="p-2 rounded-lg bg-secondary text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors shrink-0 mt-0.5">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-0.5">
                                <span className="text-xs font-bold font-heading text-foreground group-hover/item:text-primary transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/50">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-muted-foreground line-clamp-1 font-light">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-2 pt-2 border-t border-border/50 px-2 flex items-center justify-between">
                        <Link 
                          href="/services" 
                          className="text-[11px] font-mono uppercase tracking-wider text-primary hover:underline flex items-center gap-1 font-bold"
                        >
                          <span>Explore All Capabilities</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                        <span className="text-[10px] font-mono text-muted-foreground">
                          Guwahati On-Site SLA
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Case Studies Link */}
            <Link
              href="/projects"
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200",
                pathname === "/projects"
                  ? "text-foreground bg-secondary font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 font-medium"
              )}
            >
              Case Studies
            </Link>

            {/* About Link */}
            <Link
              href="/about"
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200",
                pathname === "/about"
                  ? "text-foreground bg-secondary font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 font-medium"
              )}
            >
              About
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200",
                pathname === "/contact"
                  ? "text-foreground bg-secondary font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 font-medium"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <ThemeToggle />
            <Link href="/contact">
              <Button size="sm" className="rounded-full px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider shadow-sm shadow-primary/20 hover:shadow-primary/30 transition-all">
                Let's Talk
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground rounded-full hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl md:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen pt-28 pb-10 px-6 max-w-lg mx-auto">
              
              <div className="space-y-4 mb-8">
                <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground block mb-2">
                  Architecture & Registry
                </span>

                <Link 
                  href="/" 
                  className={cn(
                    "text-2xl font-heading font-black block transition-colors", 
                    pathname === '/' ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Collapsible Solutions */}
                <div className="border-y border-border/50 py-3">
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="w-full flex items-center justify-between text-2xl font-heading font-black text-foreground"
                  >
                    <span>Solutions & Platforms</span>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform text-muted-foreground",
                      mobileSolutionsOpen ? "rotate-180 text-primary" : ""
                    )} />
                  </button>

                  {mobileSolutionsOpen && (
                    <div className="mt-4 space-y-2 pl-2">
                      {solutionsDropdown.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="p-3 rounded-xl bg-secondary/30 border border-border/40 flex items-center gap-3 block"
                        >
                          <sub.icon className="w-4 h-4 text-primary shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-foreground block font-heading">
                              {sub.title}
                            </span>
                            <span className="text-[10px] text-muted-foreground font-light line-clamp-1">
                              {sub.description}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  href="/projects" 
                  className={cn(
                    "text-2xl font-heading font-black block transition-colors", 
                    pathname === '/projects' ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies & Deployments
                </Link>

                <Link 
                  href="/about" 
                  className={cn(
                    "text-2xl font-heading font-black block transition-colors", 
                    pathname === '/about' ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Organization
                </Link>

                <Link 
                  href="/contact" 
                  className={cn(
                    "text-2xl font-heading font-black block transition-colors", 
                    pathname === '/contact' ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Direct Contact
                </Link>
              </div>

              {/* Mobile Footer Meta */}
              <div className="mt-auto pt-6 border-t border-border/60">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full h-12 rounded-full font-mono text-xs uppercase tracking-wider font-bold mb-4">
                    Schedule Discovery Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>Guwahati // Assam</span>
                  <a href="tel:+918638875149" className="text-primary hover:underline">
                    +91 86388 75149
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
