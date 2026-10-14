import Link from "next/link";
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
              Systems engineering, ABDM-compliant clinical platforms, and campus infrastructure delivered with local on-site SLA across Assam and Northeast India.
            </p>
          </div>

          {/* Telemetry Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/60 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-foreground font-medium">All Systems Operational</span>
            <span className="text-muted-foreground hidden sm:inline">| Northeast Gateway</span>
          </div>
        </div>

        {/* 4 Column Architecture Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Col 1: Solutions */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-4">
              Solutions & Stacks
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/hsms" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>RH-HSMS Hospital HIS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/custom-software" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Enterprise Cloud ERP</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Campus Fiber & Hardware</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Next.js Web Platforms</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Performance SEO & SERP</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Case Studies */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-4">
              Verified Deployments
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Cosmomedical Guwahati</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>APS Narengi Campus</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Spektra Diagnostics LIS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Gate Rajdhani Hospital</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group">
                  <span>Multi-Branch Logistics ERP</span>
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
                <span>100% Code Sovereignty</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Zero SaaS Per-Seat Fees</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>ABDM M1–M3 Verified</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Local Guwahati SLA Support</span>
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
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy-policy-pdf-app" className="hover:text-foreground transition-colors">
              App Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/cancellation-and-refunds" className="hover:text-foreground transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
