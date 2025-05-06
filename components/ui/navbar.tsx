"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", color: "indigo" },
  { name: "About", href: "/about", color: "purple" },
  { name: "Services", href: "/services", color: "blue" },
  { name: "Careers", href: "/careers", color: "rose" },
  { name: "Contact", href: "/contact", color: "emerald" },
];

// Map for color-specific classes
const colorMap = {
  indigo: {
    hover: "hover:text-indigo-600 dark:hover:text-indigo-400",
    active: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-900/10",
  },
  purple: {
    hover: "hover:text-purple-600 dark:hover:text-purple-400",
    active: "text-purple-600 dark:text-purple-400",
    border: "border-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/10",
  },
  blue: {
    hover: "hover:text-blue-600 dark:hover:text-blue-400",
    active: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/10",
  },
  rose: {
    hover: "hover:text-rose-600 dark:hover:text-rose-400",
    active: "text-rose-600 dark:text-rose-400",
    border: "border-rose-500",
    bg: "bg-rose-50 dark:bg-rose-900/10",
  },
  emerald: {
    hover: "hover:text-emerald-600 dark:hover:text-emerald-400",
    active: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/10",
  },
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Prevent body scroll when mobile menu is open
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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm"
      )}>
        <div className="absolute inset-0 border-b border-gray-200 dark:border-gray-800"></div>

        {/* Subtle gradient accent at the top of navbar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"></div>

        <nav className="container mx-auto px-4 flex items-center justify-between py-4 relative">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src={theme === "dark" ? "/dark-logo.png" : "/light-logo.png"}
                alt="Logo"
                width={50}
                height={50}
                className="mr-2 rounded-full transition-transform group-hover:scale-105"
                priority
              />
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const itemColors = colorMap[item.color as keyof typeof colorMap] || colorMap.indigo;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-2 py-1 transition-colors font-medium",
                    isActive
                      ? itemColors.active
                      : cn("text-muted-foreground", itemColors.hover)
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className={cn(
                      "absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full transform origin-left",
                      itemColors.border
                    )}></span>
                  )}
                </Link>
              );
            })}
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-sm"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Separate from header, fixed positioning */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
            <div className="flex flex-col space-y-5">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const itemColors = colorMap[item.color as keyof typeof colorMap] || colorMap.indigo;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block py-4 px-4 rounded-lg text-center text-lg font-medium",
                      isActive
                        ? cn(itemColors.active, itemColors.bg)
                        : cn("text-muted-foreground", itemColors.hover)
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-6">
                <Button
                  asChild
                  className="w-full py-6 mt-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-lg"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
              <div className="pt-4 flex justify-center">
                <ThemeToggle />
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-center text-muted-foreground">
                &copy; {new Date().getFullYear()} RH Dynamics
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
