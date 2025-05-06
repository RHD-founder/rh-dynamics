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

  return (
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
          className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const itemColors = colorMap[item.color as keyof typeof colorMap] || colorMap.indigo;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md",
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
            <Button
              asChild
              className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <div className="pt-2 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
