"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { 
  Menu, X, ChevronDown, Activity, Database, 
  Smartphone, Globe, ArrowRight, ShieldCheck, Sparkles,
  Star, MessageSquare, FlaskConical, Stethoscope
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const servicesDropdown = [
  {
    title: "RH CORE™ Hospital & HSMS",
    description: "Unified HMS & HIS: ABDM M1-M3, bed matrix, clinical EMR & PMJAY claims.",
    href: "/hsms",
    icon: Activity,
    badge: "v1.0 Live"
  },
  {
    title: "Pathology & Diagnostic LIS",
    description: "Analyzer interfacing, barcode accessioning & sub-2s WhatsApp reports.",
    href: "/pathology-lab-software-assam",
    icon: FlaskConical,
    badge: "Diagnostics"
  },
  {
    title: "Doctor EMR & Clinic Suite",
    description: "45s digital prescriptions, waiting room token calling & WhatsApp recalls.",
    href: "/clinic-management-software-guwahati",
    icon: Stethoscope,
    badge: "OPD Suite"
  },
  {
    title: "Custom Cloud ERP & SCM",
    description: "Multi-branch inventory sync, Indian GST e-way billing & distribution.",
    href: "/custom-erp-software-assam",
    icon: Database,
    badge: "Enterprise"
  },
  {
    title: "Mobile App Development",
    description: "Flutter & React Native iOS/Android apps with offline-first SQLite sync.",
    href: "/mobile-app-development-guwahati",
    icon: Smartphone,
    badge: "Mobile Apps"
  },
  {
    title: "High-Performance Web Apps",
    description: "Sub-second Next.js web applications with technical SEO architecture.",
    href: "/web-development-guwahati",
    icon: Globe,
    badge: "Web Systems"
  },
  {
    title: "Offshore Software Engineering",
    description: "Dedicated full-stack pods with US/EU timezone overlap ($25–$45/hr).",
    href: "/offshore-software-development",
    icon: Globe,
    badge: "Global"
  }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
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
    setServicesHovered(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesHovered(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesHovered(false);
    }, 150);
  };

  const isServicesActive = 
    pathname === "/services" || 
    pathname === "/hsms" || 
    pathname === "/custom-software" ||
    pathname === "/pathology-lab-software-assam" ||
    pathname === "/clinic-management-software-guwahati" ||
    pathname === "/custom-erp-software-assam" ||
    pathname === "/mobile-app-development-guwahati" ||
    pathname === "/hospital-management-software-assam" ||
    pathname === "/web-development-guwahati" ||
    pathname === "/software-company-guwahati" ||
    pathname === "/offshore-software-development";

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2 sm:py-3" : "py-4 sm:py-5"
      )}>
        <nav className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 rounded-full",
          scrolled 
            ? "bg-background/90 dark:bg-zinc-950/90 backdrop-blur-md border border-border/60 shadow-lg py-2.5 mx-3 sm:mx-6 lg:mx-auto" 
            : "bg-background/40 backdrop-blur-sm border border-border/30 py-3 mx-3 sm:mx-6 lg:mx-auto"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-white p-0.5 border border-border/60 shadow-sm flex items-center justify-center shrink-0">
              <Image
                src="/images/rh-official-logo.jpg"
                alt="RH Dynamics Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="ml-3 flex flex-col">
              <span className="font-heading font-black text-sm uppercase tracking-[0.16em] text-foreground leading-none">
                RH Dynamics
              </span>
              <span className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase mt-0.5 hidden sm:block">
                Software &amp; Clinical Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5 justify-center relative">
            
            {/* Services Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5",
                  isServicesActive || servicesHovered
                    ? "text-foreground bg-secondary font-bold" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 font-semibold"
                )}
                aria-expanded={servicesHovered}
              >
                <span>Services</span>
                <ChevronDown className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  servicesHovered ? "rotate-180 text-primary" : "text-muted-foreground"
                )} />
              </button>

              {/* Desktop Dropdown Popover */}
              <AnimatePresence>
                {servicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[640px] pointer-events-auto"
                  >
                    <div className="rounded-2xl glass-card dark:glass-card-dark border border-border/80 shadow-2xl p-4 bg-background/95 backdrop-blur-xl">
                      <div className="px-3 py-2 border-b border-border/50 mb-2 flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                          Engineered Software &amp; Platforms
                        </span>
                        <span className="text-xs font-mono text-primary font-bold">
                          DPIIT Recognized (ACN-1931)
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {servicesDropdown.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="p-3 rounded-xl hover:bg-secondary/70 transition-colors flex items-start gap-3 group/item border border-transparent hover:border-border/40"
                          >
                            <div className="p-2 rounded-lg bg-secondary text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors shrink-0 mt-0.5">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1 mb-0.5">
                                <span className="text-sm font-bold font-heading text-foreground group-hover/item:text-primary transition-colors truncate">
                                  {item.title}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-2 font-normal leading-relaxed mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-border/50 px-2 flex items-center justify-between">
                        <Link 
                          href="/services" 
                          className="text-xs font-mono uppercase tracking-wider text-primary hover:underline flex items-center gap-1.5 font-bold"
                        >
                          <span>All Services &amp; Scope</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link 
                          href="/software-company-guwahati"
                          className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Guwahati Engineering Hub &rarr;
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Projects Link */}
            <Link
              href="/projects"
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200",
                pathname === "/projects"
                  ? "text-foreground bg-secondary font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 font-medium"
              )}
            >
              Projects
            </Link>

            {/* Direct Reviews Link */}
            <Link
              href="/review"
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1",
                pathname === "/review"
                  ? "text-foreground bg-secondary font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 font-medium"
              )}
            >
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span>Reviews</span>
            </Link>

            {/* Direct Blog Link */}
            <Link
              href="/blog"
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200",
                pathname?.startsWith("/blog")
                  ? "text-foreground bg-secondary font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 font-medium"
              )}
            >
              Blog
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
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <ThemeToggle />
            <Link href="/contact">
              <Button size="sm" className="rounded-full px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all">
                Contact Us
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
                  Navigation &amp; Stacks
                </span>

                <Link 
                  href="/" 
                  className={cn(
                    "text-xl font-heading font-black block transition-colors", 
                    pathname === '/' ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Collapsible Services */}
                <div className="border-y border-border/50 py-3">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between text-xl font-heading font-black text-foreground"
                  >
                    <span>Services &amp; Software</span>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform text-muted-foreground",
                      mobileServicesOpen ? "rotate-180 text-primary" : ""
                    )} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mt-4 space-y-2 pl-2">
                      {servicesDropdown.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="p-3 rounded-xl bg-secondary/30 border border-border/40 flex items-center gap-3 block"
                        >
                          <sub.icon className="w-4 h-4 text-primary shrink-0" />
                          <div>
                            <span className="text-sm font-bold text-foreground block font-heading">
                              {sub.title}
                            </span>
                            <span className="text-xs text-muted-foreground font-normal line-clamp-1 mt-0.5">
                              {sub.description}
                            </span>
                          </div>
                        </Link>
                      ))}

                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs font-mono uppercase tracking-wider text-primary font-bold block pt-2 pl-1"
                      >
                        &rarr; View All Services &amp; Scope
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  href="/projects" 
                  className={cn(
                    "text-xl font-heading font-black block transition-colors", 
                    pathname === '/projects' ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects &amp; Deployments
                </Link>

                <Link 
                  href="/review" 
                  className={cn(
                    "text-xl font-heading font-black flex items-center gap-2 transition-colors", 
                    pathname === '/review' ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Client Reviews</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold">
                    Feedback
                  </span>
                </Link>

                <Link 
                  href="/blog" 
                  className={cn(
                    "text-xl font-heading font-black block transition-colors", 
                    pathname?.startsWith('/blog') ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Engineering Blog
                </Link>

                <Link 
                  href="/about" 
                  className={cn(
                    "text-xl font-heading font-black block transition-colors", 
                    pathname === '/about' ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Organization
                </Link>

                <Link 
                  href="/contact" 
                  className={cn(
                    "text-xl font-heading font-black block transition-colors", 
                    pathname === '/contact' ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact &amp; Meetings
                </Link>
              </div>

              {/* Mobile Footer Meta */}
              <div className="mt-auto pt-6 border-t border-border/60">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full h-12 rounded-full font-mono text-xs uppercase tracking-wider font-bold mb-4 shadow-md shadow-primary/20">
                    Get in Touch / Request Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>Guwahati &amp; Golaghat</span>
                  <a href="tel:+918638875149" className="text-primary hover:underline font-bold">
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
