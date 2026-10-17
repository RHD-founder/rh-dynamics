import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, Twitter, Linkedin, Instagram, 
  Mail, Phone, MapPin, ShieldCheck, Server, 
  CheckCircle2, ArrowUpRight 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/60 text-foreground relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10 max-w-6xl">
        
        {/* Top Status & Identity Banner */}
        <div className="pb-12 mb-12 border-b border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-0.5 border border-border/50 shadow-sm flex items-center justify-center shrink-0">
                <Image
                  src="/images/rh-official-logo.jpg"
                  alt="RH Dynamics Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-black text-xl uppercase tracking-wider text-foreground">
                RH Dynamics
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-secondary text-muted-foreground border border-border/50">
                LLP ACN-1931
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                <ShieldCheck className="w-3 h-3" /> Startup India
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground font-light max-w-xl">
              Cloud software engineering, ABDM-compliant clinical platforms (RH CORE™), and enterprise ERP solutions delivered with a &lt; 2-hour SLA worldwide.
            </p>
          </div>

          {/* Telemetry Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/60 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-foreground font-medium">All Systems Operational</span>
            <span className="text-muted-foreground hidden sm:inline">| Cloud Engine Active</span>
          </div>
        </div>

        {/* 4 Column Architecture Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Col 1: Solutions */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-4">
              Regional Solutions
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/pathology-lab-software-assam" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Pathology Lab Software Assam</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/clinic-management-software-guwahati" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Clinic Software Guwahati</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/custom-erp-software-assam" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Custom ERP Software Assam</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/mobile-app-development-guwahati" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Mobile App Dev Guwahati</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/hospital-management-software-assam" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Hospital Software Assam</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/software-company-guwahati" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Software Company Guwahati</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Software Platforms */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-4">
              Software Systems
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/hsms" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>RH CORE™ Hospital (v1.0)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/pathology-lab-software-assam" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>RH CORE™ Diagnostic LIS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/clinic-management-software-guwahati" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Doctor EMR &amp; Clinic Suite</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/custom-erp-software-assam" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Multi-Branch Cloud ERP</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/mobile-app-development-guwahati" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>iOS &amp; Android Mobile Apps</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/web-development-guwahati" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Next.js Web Applications</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>All Services &amp; Scope</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Engineering Standards */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-4">
              Engineering Standards
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li className="text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Dedicated Code &amp; SaaS Options</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Transparent Scope Pricing</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>ABDM M1–M3 Ready</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>&lt; 2-Hour SLA Worldwide</span>
              </li>
              <li className="pt-2">
                <Link href="/blog" className="text-foreground hover:text-primary transition-colors flex items-center justify-between group font-medium">
                  <span>Engineering Blog &amp; Guides</span>
                  <ArrowUpRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/review" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Submit Client Review</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a 
                  href="https://search.google.com/local/writereview?placeid=ChIJV72MeQCLRjcR2fqIFb2i5OY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-amber-500 font-bold">★ 5.0</span>
                    <span>Google Business Reviews</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li className="pt-1">
                <Link href="/about" className="text-primary hover:underline font-bold flex items-center gap-1">
                  <span>About Our Organization</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Hubs & Contact */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-4">
              Regional Presence
            </span>
            <div className="space-y-3 text-xs text-muted-foreground font-light">
              <div>
                <strong className="text-foreground font-medium block font-mono text-[11px] mb-0.5">
                  Upper Assam Corporate HQ:
                </strong>
                <span>Near AGV Bank, Goranga, Golaghat, Assam 785603</span>
              </div>

              <div>
                <strong className="text-foreground font-medium block font-mono text-[11px] mb-0.5">
                  Guwahati Engineering Hub:
                </strong>
                <span>Near Downtown Hospital, Urban Villa, Sarumotoria, Guwahati, Assam 781036</span>
              </div>

              <div className="pt-2 border-t border-border/40 space-y-1 font-mono text-xs">
                <a href="tel:+918638875149" className="block text-foreground hover:text-primary transition-colors">
                  +91 86388 75149
                </a>
                <a href="mailto:founder@rhdynamics.in" className="block text-foreground hover:text-primary transition-colors">
                  founder@rhdynamics.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} RHD Softwaresolutions LLP (RH Dynamics). All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link href="/company-policy" className="text-primary hover:underline font-bold transition-colors">
              Rule Book (Policy)
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cancellation-and-refunds" className="hover:text-foreground transition-colors">
              Refunds
            </Link>
            <Link href="/shipping-policy" className="hover:text-foreground transition-colors">
              Digital Delivery
            </Link>
            <Link href="/privacy-policy-pdf-app" className="hover:text-foreground transition-colors">
              App Privacy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
