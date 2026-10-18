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

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 relative z-10">
        
        {/* Top Status & Identity Banner */}
        <div className="pb-12 mb-12 border-b border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-white p-0.5 border border-border/50 shadow-sm flex items-center justify-center shrink-0">
                <Image
                  src="/images/rh-official-logo.jpg"
                  alt="RH Dynamics Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-black text-xl uppercase tracking-wider text-foreground">
                RH Dynamics
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-secondary text-foreground/80 border border-border/60 font-semibold">
                LLP ACN-1931
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Startup India
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-normal max-w-2xl leading-relaxed mt-2">
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
                <Link href="/offshore-software-development" className="text-primary hover:underline transition-colors flex items-center justify-between group font-semibold">
                  <span>Offshore Software Dev (US/EU)</span>
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
              <li>
                <a 
                  href="https://cal.com/hashim-ahmed-p4itsj/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Book Meeting (Cal.com)</span>
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

              {/* Official Social Channels */}
              <div className="pt-3 border-t border-border/40">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-bold">
                  Official Channels:
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href="https://www.linkedin.com/company/rhdymanics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="RH Dynamics on LinkedIn"
                    className="p-2 rounded-lg bg-secondary/60 hover:bg-primary/10 text-muted-foreground hover:text-primary border border-border/60 hover:border-primary/30 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com/rhdynamics07"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="RH Dynamics on X"
                    className="p-2 rounded-lg bg-secondary/60 hover:bg-foreground/10 text-muted-foreground hover:text-foreground border border-border/60 hover:border-foreground/30 transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/rhdynamics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="RH Dynamics on Instagram"
                    className="p-2 rounded-lg bg-secondary/60 hover:bg-pink-500/10 text-muted-foreground hover:text-pink-500 border border-border/60 hover:border-pink-500/30 transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/rhdynamics"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="RH Dynamics on Facebook"
                    className="p-2 rounded-lg bg-secondary/60 hover:bg-blue-600/10 text-muted-foreground hover:text-blue-600 border border-border/60 hover:border-blue-600/30 transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/918638875149?text=Hello%20RH%20Dynamics%20team,%20I%20would%20like%20to%20discuss%20a%20software%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with RH Dynamics on WhatsApp"
                    className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 text-[11px] font-mono font-bold transition-all"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} RHD Software Solutions LLP (RH Dynamics). All rights reserved.
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
