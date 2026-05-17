"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { Menu, X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

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
  }, [pathname]);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}>
        <nav className={cn(
          "mx-auto max-w-4xl px-6 flex items-center justify-between transition-all duration-500 rounded-full",
          scrolled 
            ? "bg-background/95 dark:bg-black/90 backdrop-blur-md border border-border/50 shadow-2xl py-2 px-6 mx-4 md:mx-auto" 
            : "bg-transparent py-3"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center group z-50 shrink-0">
            <div className="relative">
              <Image
                src={theme === "dark" ? "/dark-logo.png" : "/light-logo.png"}
                alt="RH Dynamics"
                width={38}
                height={38}
                className="rounded-full transition-transform duration-500 group-hover:rotate-12"
                priority
              />
            </div>
            <span className="ml-3 font-heading font-black text-sm sm:text-base uppercase tracking-[0.18em] text-foreground hidden sm:block">
              RH Dynamics
            </span>
          </Link>

          {/* Desktop Navigation - Clean Centered Snug Flow */}
          <div className="hidden md:flex items-center gap-1 justify-center">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300",
                    isActive 
                      ? "text-foreground bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions - Right */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <Link href="/contact">
              <Button className="rounded-full px-5 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all">
                Let's Talk
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <ThemeToggle />
            <button
              className="p-2 -mr-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-500",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full pt-32 pb-8 px-6">
          <div className="flex flex-col gap-6">
            <Link 
              href="/" 
              className={cn(
                "text-3xl font-heading font-bold transition-colors", 
                pathname === '/' ? "text-primary" : "text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            {navigation.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-3xl font-heading font-bold transition-colors flex items-center justify-between",
                    isActive ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <ChevronRight className={cn("h-6 w-6", isActive ? "opacity-100" : "opacity-0")} />
                </Link>
              );
            })}
          </div>

          <div className="mt-auto">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg" className="w-full h-14 text-lg rounded-xl shadow-xl shadow-primary/20">
                Start a Project
              </Button>
            </Link>
            <div className="mt-8 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} RH Dynamics. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
