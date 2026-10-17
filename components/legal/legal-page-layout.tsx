"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ShieldCheck, FileText, Lock, RefreshCcw, 
  Truck, Smartphone, BookOpen, Building2, 
  Calendar, ArrowRight, Download 
} from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  version: string;
  sections: Section[];
  children: React.ReactNode;
}

const POLICY_LINKS = [
  { href: "/company-policy", label: "Corporate Rule Book", icon: BookOpen },
  { href: "/terms-and-conditions", label: "Terms of Service", icon: FileText },
  { href: "/privacy-policy", label: "Privacy Policy", icon: Lock },
  { href: "/cancellation-and-refunds", label: "Refunds & Cancellations", icon: RefreshCcw },
  { href: "/shipping-policy", label: "Digital Shipping", icon: Truck },
  { href: "/privacy-policy-pdf-app", label: "App Privacy", icon: Smartphone },
];

const PDF_DOWNLOAD_MAP: Record<string, { href: string; filename: string }> = {
  "/company-policy": {
    href: "/docs/RHD-Corporate-Rule-Book.pdf",
    filename: "RHD-Corporate-Rule-Book.pdf",
  },
  "/terms-and-conditions": {
    href: "/docs/RHD-Terms-and-Conditions.pdf",
    filename: "RHD-Terms-and-Conditions.pdf",
  },
  "/privacy-policy": {
    href: "/docs/RHD-Privacy-Policy.pdf",
    filename: "RHD-Privacy-Policy.pdf",
  },
  "/cancellation-and-refunds": {
    href: "/docs/RHD-Cancellation-and-Refund-Policy.pdf",
    filename: "RHD-Cancellation-and-Refund-Policy.pdf",
  },
  "/shipping-policy": {
    href: "/docs/RHD-Digital-Shipping-Policy.pdf",
    filename: "RHD-Digital-Shipping-Policy.pdf",
  },
  "/privacy-policy-pdf-app": {
    href: "/docs/RHD-App-Privacy-Policy.pdf",
    filename: "RHD-App-Privacy-Policy.pdf",
  },
};

export function LegalPageLayout({
  title,
  subtitle,
  effectiveDate,
  version,
  sections,
  children,
}: LegalPageLayoutProps) {
  const pathname = usePathname();
  const currentDoc = PDF_DOWNLOAD_MAP[pathname] || {
    href: "/docs/RHD-Corporate-Rule-Book.pdf",
    filename: "RHD-Corporate-Rule-Book.pdf",
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden py-12 sm:py-20">
      
      {/* Print Stylesheet for High-Fidelity PDF Export */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 15mm 15mm 15mm 15mm;
          }
          body {
            background-color: #ffffff !important;
            color: #0f172a !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          nav, footer, aside, .no-print, button, a[href^="#"] {
            display: none !important;
          }
          #legal-document-content {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
          .print-header {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding-bottom: 12px !important;
            margin-bottom: 24px !important;
            border-bottom: 2px solid #0f172a !important;
          }
          .print-watermark {
            display: block !important;
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            opacity: 0.05 !important;
            width: 480px !important;
            z-index: 0 !important;
            pointer-events: none !important;
          }
          section {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            margin-bottom: 20px !important;
            border: 1px solid #e2e8f0 !important;
            background-color: #f8fafc !important;
            padding: 16px !important;
            border-radius: 8px !important;
          }
        }
      `}</style>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none no-print" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none no-print" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Top Corporate Status Header */}
        <div className="mb-12 pb-10 border-b border-border/60">
          
          {/* Regulatory Badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-secondary border border-border/80 text-foreground flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-primary" />
              RHD Softwaresolutions LLP
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-secondary/60 text-muted-foreground border border-border/50 font-medium">
              ACN-1931
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 font-medium">
              <ShieldCheck className="w-4 h-4" /> DPIIT Startup India
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
              MSME Registered
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-foreground mb-4">
                {title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground font-light max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Official Logo in Top Right Corner & Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-4 shrink-0">
              {/* Logo Frame */}
              <div className="p-2 rounded-2xl bg-white border border-border/60 shadow-lg shadow-black/5 dark:shadow-primary/5">
                <Image
                  src="/images/rh-official-logo.jpg"
                  alt="RH Dynamics Official Logo"
                  width={110}
                  height={110}
                  className="w-24 sm:w-28 h-auto object-contain rounded-xl"
                  priority
                />
              </div>

              {/* Download PDF & Telemetry */}
              <div className="flex flex-col items-start md:items-end gap-2 text-xs sm:text-sm font-mono text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Effective: {effectiveDate}</span>
                </div>
                <div className="text-xs text-muted-foreground/80">
                  Governance: {version}
                </div>

                <a
                  href={currentDoc.href}
                  download={currentDoc.filename}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs font-bold transition-all shadow-md shadow-primary/25 cursor-pointer no-print group"
                  title={`Download Official PDF: ${currentDoc.filename}`}
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Legal Hub Navigation Tabs */}
          <div className="flex items-center gap-2.5 overflow-x-auto pt-6 mt-8 border-t border-border/40 scrollbar-none no-print">
            {POLICY_LINKS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/60"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 2-Column Corporate Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Sticky Left Sidebar: Table of Contents */}
          <aside className="lg:col-span-4 sticky top-24 hidden lg:block no-print">
            <div className="p-6 rounded-2xl border border-border/70 bg-card/50 backdrop-blur-md shadow-sm">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-4">
                Document Sections
              </span>
              <nav className="space-y-2">
                {sections.map((sec, idx) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-xs sm:text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-secondary/60 py-2 px-3 rounded-lg transition-colors group flex items-center justify-between"
                  >
                    <span className="truncate">
                      {idx + 1}. {sec.title}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary shrink-0 ml-1.5" />
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-border/60 text-xs text-muted-foreground font-mono space-y-2.5">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Statutory Compliance</span>
                </div>
                <p className="font-light leading-relaxed">
                  Indian IT Act 2000, DPDP Act 2023 &amp; Indian Contract Act 1872.
                </p>
                <div className="pt-2">
                  <span className="block text-[11px] uppercase text-muted-foreground/70">Support &amp; Inquiries:</span>
                  <a href="mailto:founder@rhdynamics.in" className="text-primary hover:underline font-bold">
                    founder@rhdynamics.in
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Content (With Background Watermark) */}
          <main id="legal-document-content" className="lg:col-span-8 space-y-8 relative">
            
            {/* Centered Subtle Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden print-watermark">
              <div className="sticky top-1/3 transform -translate-y-1/2">
                <Image
                  src="/images/rh-watermark.jpg"
                  alt="RH Dynamics Watermark"
                  width={500}
                  height={500}
                  className="w-[300px] sm:w-[460px] h-auto object-contain opacity-[0.038] dark:opacity-[0.048] mix-blend-multiply dark:mix-blend-screen pointer-events-none"
                />
              </div>
            </div>

            {/* Document Body */}
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground relative z-10">
              {children}
            </div>

            {/* Official Signatory Block */}
            <div className="mt-14 p-7 sm:p-9 rounded-2xl border border-border/80 bg-secondary/30 backdrop-blur-md relative z-10">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-foreground">
                  Official Entity Execution &amp; Corporate Attestation
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm font-mono text-muted-foreground">
                <div className="space-y-1">
                  <strong className="text-foreground block font-bold mb-1.5">Registered Enterprise:</strong>
                  <span>RHD Softwaresolutions LLP</span><br />
                  <span>LLPIN: ACN-1931</span><br />
                  <span>DPIIT Startup India Certified</span><br />
                  <span>MSME Registered Entity</span>
                </div>
                <div className="space-y-1">
                  <strong className="text-foreground block font-bold mb-1.5">Corporate Addresses:</strong>
                  <span>Upper Assam HQ: Goranga, Golaghat, Assam 785603</span><br />
                  <span>Guwahati Hub: Sarumotoria, Guwahati, Assam 781036</span><br />
                  <span className="text-primary font-bold">Email: founder@rhdynamics.in</span>
                </div>
              </div>
            </div>
          </main>

        </div>

      </div>
    </div>
  );
}
