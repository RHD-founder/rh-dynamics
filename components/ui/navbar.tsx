"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center">
          <Image
            src={theme === "dark" ? "/dark-logo.png" : "/light-logo.png"} // Use client-side logic to switch logo
            alt="Logo"
            width={50} // Adjust the width
            height={50} // Adjust the height
            className="mr-2 rounded-full"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
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
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="/contact">Get Started</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
