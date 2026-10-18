"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, MapPin, Phone, Send, Clock, ShieldCheck, 
  CheckCircle2, ArrowRight, ArrowUpRight, 
  Building2, Server, Terminal, Lock, Check,
  MessageSquare, Sparkles, HelpCircle, ChevronRight,
  Video, Globe, Linkedin, Instagram, Facebook, Calendar
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { CalBookingModal } from "@/components/booking/cal-booking-modal";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(60),
  email: z.string().email({ message: "Please enter a valid official email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number (at least 10 digits)." }),
  organization: z.string().optional(),
  timeline: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, { message: "Please provide at least 10 characters detailing your requirements." }).max(1500),
});

type FormValues = z.infer<typeof formSchema>;

const commonServices = [
  {
    id: "RH-HSMS Hospital HIS",
    label: "RH-HSMS Hospital Platform",
    category: "Clinical HIS & ABDM",
    description: "OPD/IPD, Doctor EMR, Pharmacy, Lab LIS, ABDM M1-M3"
  },
  {
    id: "Custom Cloud ERP & Supply Chain",
    label: "Enterprise Cloud ERP",
    category: "Operations & SCM",
    description: "Multi-branch inventory, automated billing, distributed logistics"
  },
  {
    id: "Pathology & Diagnostic LIS",
    label: "Pathology & Diagnostic LIS",
    category: "Laboratory Automation",
    description: "Barcode workflow, analyzer bidirectional sync, WhatsApp PDF"
  },
  {
    id: "Mobile App Development (iOS & Android)",
    label: "Mobile App Development",
    category: "iOS & Android",
    description: "Cross-platform mobile apps, offline-first sync, push notifications"
  },
  {
    id: "Full-Stack Web & Mobile Platform",
    label: "Web & Mobile Platforms",
    category: "Modern Cloud Apps",
    description: "Next.js web apps, iOS/Android cross-platform, local SERP"
  },
  {
    id: "General Technical Consultation",
    label: "General Architecture Audit",
    category: "Systems Engineering",
    description: "Database audit, legacy code migration, SLA support"
  }
];

const timelineOptions = [
  { id: "Immediate (< 30 Days)", label: "Immediate (< 30 Days)", badge: "Priority" },
  { id: "1–3 Months", label: "1–3 Months", badge: "Standard" },
  { id: "Quarterly / Planned", label: "Quarterly / Planned", badge: "Roadmap" }
];

export function ContactClientPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Invisible anti-bot security states
  const [formRenderedAt, setFormRenderedAt] = useState<number>(0);
  const [hpWebsite, setHpWebsite] = useState<string>("");
  const [hpFax, setHpFax] = useState<string>("");

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      timeline: "Immediate (< 30 Days)",
      service: "",
      message: "",
    },
    mode: "onChange",
  });

  const selectedService = form.watch("service");
  const selectedTimeline = form.watch("timeline");
  const messageContent = form.watch("message");

  // Pre-fill service from URL if present and record mount time
  useEffect(() => {
    setFormRenderedAt(Date.now());

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceQuery = params.get("service");
      if (serviceQuery) {
        form.setValue("service", serviceQuery);
      }
    }
  }, [form]);

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          organization: data.organization,
          timeline: data.timeline,
          message: data.message,
          service: data.service,
          // Native anti-bot security fields
          _hp_website: hpWebsite,
          _hp_fax: hpFax,
          _form_rendered_at: formRenderedAt,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      // Success
      setShowSuccessPopup(true);
      form.reset({
        name: "",
        email: "",
        phone: "",
        organization: "",
        timeline: "Immediate (< 30 Days)",
        service: "",
        message: "",
      });
      setHpWebsite("");
      setHpFax("");
      setFormRenderedAt(Date.now());
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Transmission Error",
        description: error.message || "Something went wrong. Please reach our engineering leads directly by phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase border border-border/80 bg-secondary/50 text-foreground/80 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Gateway // Direct Technical Intake &amp; Systems Discovery
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-6 leading-[1.06] text-foreground">
            Direct Technical Discovery. <br className="hidden sm:block" />
            <span className="text-gradient">Zero Agency Middlemen.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl font-normal leading-relaxed">
            Consult directly with our systems engineers and software architects in Guwahati, Assam. We review your facility workflows, database schemas, local statutory requirements, and cost roadmaps within 2 hours.
          </p>
        </div>

        {/* Technical Governance & SLA Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden mb-16 border border-border/70">
          {[
            { label: "01 // Response SLA", value: "< 2 Hours", sub: "Direct engineering review" },
            { label: "02 // Physical Hubs", value: "Guwahati & Golaghat", sub: "Same-day on-site Assam team" },
            { label: "03 // Data Sovereignty", value: "100% Client Owned", sub: "Mutual NDA bound immediately" },
            { label: "04 // Statutory Status", value: "DPIIT & ABDM Ready", sub: "Startup India Recognized (ACN-1931)" }
          ].map((stat, i) => (
            <div key={i} className="bg-card p-5 sm:p-7 flex flex-col justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-3">{stat.label}</span>
              <div>
                <p className="text-xl sm:text-2xl font-black font-heading text-foreground tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-light mt-1">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Balanced Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-24">
          
          {/* Left Column: Direct Channels, Physical Hubs & Protocol */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Technical Lines */}
            <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border/70 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/50">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  Direct Engineering Lines
                </span>
                <span className="text-xs font-mono text-muted-foreground uppercase">
                  IST 08:00 – 21:00
                </span>
              </div>

              <div className="space-y-3">
                <a 
                  href="tel:+918638875149"
                  className="p-3.5 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/50 flex items-center justify-between group hover:border-primary/40 transition-all block"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-muted-foreground block">Primary Systems Architect</span>
                      <strong className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">+91 86388 75149</strong>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>

                <a 
                  href="tel:+919864848781"
                  className="p-3.5 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/50 flex items-center justify-between group hover:border-primary/40 transition-all block"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-muted-foreground block">Clinical Deployments &amp; Technical Support</span>
                      <strong className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">+91 98648 48781</strong>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>

                <a 
                  href="mailto:founder@rhdynamics.in"
                  className="p-3.5 rounded-xl bg-secondary/30 hover:bg-secondary/60 border border-border/50 flex items-center justify-between group hover:border-primary/40 transition-all block"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-muted-foreground block">Office of the Founder</span>
                      <strong className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">founder@rhdynamics.in</strong>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>

                <a 
                  href="https://wa.me/918638875149?text=Hello%20RH%20Dynamics%20team,%20I%20would%20like%20to%20discuss%20a%20software%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between group transition-all block"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-emerald-600/80 dark:text-emerald-400/80 block">Instant Technical WhatsApp</span>
                      <strong className="text-sm font-mono text-emerald-700 dark:text-emerald-300">Message Engineering Team</strong>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                </a>

                {/* Cal.com Live Video Discovery with Hashim Ahmed */}
                <CalBookingModal eventSlug="15min">
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-500/10 via-primary/10 to-blue-500/5 hover:from-blue-500/15 hover:to-primary/15 border border-blue-500/30 flex items-center justify-between group transition-all cursor-pointer shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500 text-white shrink-0 shadow-md shadow-blue-500/20">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">
                            Live Calendar • Cal.com
                          </span>
                          <span className="text-[10px] font-mono bg-blue-500/20 text-blue-600 dark:text-blue-300 px-1.5 py-0.2 rounded font-bold">15-MIN CALL</span>
                        </div>
                        <strong className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">Book 15-Min Meeting (Hashim Ahmed)</strong>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </div>
                </CalBookingModal>

                {/* Official Social Channels Strip */}
                <div className="pt-3 border-t border-border/50">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-bold">
                    Official Social &amp; Registry Channels:
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href="https://www.linkedin.com/company/rhdymanics/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-secondary/40 hover:bg-primary/10 border border-border/60 hover:border-primary/40 text-xs font-mono text-foreground hover:text-primary flex items-center gap-2 transition-all font-semibold"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                    </a>
                    <a
                      href="https://x.com/rhdynamics07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-secondary/40 hover:bg-foreground/10 border border-border/60 hover:border-foreground/40 text-xs font-mono text-foreground hover:text-foreground flex items-center gap-2 transition-all font-semibold"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>X (Twitter)</span>
                      <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                    </a>
                    <a
                      href="https://www.instagram.com/rhdynamics/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-secondary/40 hover:bg-pink-500/10 border border-border/60 hover:border-pink-500/40 text-xs font-mono text-foreground hover:text-pink-500 flex items-center gap-2 transition-all font-semibold"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                      <span>Instagram</span>
                      <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                    </a>
                    <a
                      href="https://www.facebook.com/rhdynamics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-secondary/40 hover:bg-blue-600/10 border border-border/60 hover:border-blue-600/40 text-xs font-mono text-foreground hover:text-blue-600 flex items-center gap-2 transition-all font-semibold"
                    >
                      <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                      <span>Facebook</span>
                      <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Engineering Hubs */}
            <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border/70 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/50">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  On-The-Ground Assam Hubs
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                {/* Main Headquarters (Golaghat) */}
                <div className="p-4 rounded-xl bg-secondary/20 border border-border/40">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-mono font-bold text-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Upper Assam Corporate HQ</span>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">MAIN HQ</span>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Near AGV Bank, Goranga, Golaghat, Assam 785603
                  </p>
                  <span className="text-xs font-mono text-primary mt-2 block font-medium">
                    Corporate Headquarters, Regional Operations &amp; Campus Lab Base
                  </span>
                </div>

                {/* Guwahati Engineering Center */}
                <div className="p-4 rounded-xl bg-secondary/20 border border-border/40">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-mono font-bold text-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Guwahati Engineering Center</span>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground font-semibold">Engineering Lab</span>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Near Downtown Hospital, Urban Villa, Sarumotoria, Guwahati, Assam 781036
                  </p>
                  <span className="text-xs font-mono text-primary mt-2 block font-medium">
                    Same-Day Emergency On-Site SLA in Kamrup Metro
                  </span>
                </div>
              </div>

              {/* Statutory Credentials */}
              <div className="pt-4 mt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-muted-foreground">
                <span>RHD Softwaresolutions LLP</span>
                <span className="text-foreground font-semibold">ACN-1931</span>
              </div>
            </div>

            {/* 3-Step Discovery Protocol */}
            <div className="p-6 sm:p-7 rounded-2xl bg-secondary/20 border border-border/50">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-4">
                The 3-Step Discovery Protocol
              </span>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0">01 //</span>
                  <div className="text-muted-foreground font-light">
                    <strong className="text-foreground font-medium block">Triage &amp; Requirement Review</strong>
                    Direct analysis of your software, network, or clinical scope within 2 hours.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0">02 //</span>
                  <div className="text-muted-foreground font-light">
                    <strong className="text-foreground font-medium block">Architecture Brief &amp; Roadmap</strong>
                    Delivery of technical schema, hardware topology, and clear milestone budget.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0">03 //</span>
                  <div className="text-muted-foreground font-light">
                    <strong className="text-foreground font-medium block">On-Site Strategy Walkthrough</strong>
                    In-person review at your hospital, campus, or facility across Northeast India.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: The Architectural Form Dossier */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 md:p-10 rounded-2xl bg-card border border-border/70 shadow-sm relative">
              
              {/* Form Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-border/60 gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-foreground">
                      SYSTEM DISCOVERY INTAKE DOSSIER
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground font-light block">
                    Direct transmission to senior engineering leadership in Guwahati
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold tracking-wider border border-emerald-500/20 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Gateway Active // Brevo TLS Encrypted
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                  
                  {/* Invisible Honeypot Traps (Defends Brevo SMTP against spam bots) */}
                  <div
                    className="opacity-0 absolute -z-50 pointer-events-none select-none h-0 w-0 overflow-hidden"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <label htmlFor="_hp_website">Leave this field blank</label>
                    <input
                      type="text"
                      id="_hp_website"
                      name="_hp_website"
                      value={hpWebsite}
                      onChange={(e) => setHpWebsite(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <label htmlFor="_hp_fax">Leave this field blank</label>
                    <input
                      type="text"
                      id="_hp_fax"
                      name="_hp_fax"
                      value={hpFax}
                      onChange={(e) => setHpFax(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Section 01: Contact Credentials */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-4">
                      01 // Contact &amp; Organization Credentials
                    </span>

                    <div className="space-y-4">
                      
                      {/* Name & Organization in 2 columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                                Full Name / Representative *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  autoComplete="name"
                                  placeholder="Your Full Name / Designation"
                                  className="h-11 bg-secondary/20 dark:bg-secondary/10 border-border/70 rounded-xl focus-visible:ring-primary text-sm font-sans"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs text-red-500 mt-1 font-mono" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="organization"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                                Organization / Hospital / Entity
                              </FormLabel>
                              <FormControl>
                                <Input
                                  autoComplete="organization"
                                  placeholder="Company, Organization, or Facility Name"
                                  className="h-11 bg-secondary/20 dark:bg-secondary/10 border-border/70 rounded-xl focus-visible:ring-primary text-sm font-sans"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs text-red-500 mt-1 font-mono" />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Email & Phone in 2 columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                                Official Email Address *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  autoComplete="email"
                                  placeholder="you@company.com"
                                  className="h-11 bg-secondary/20 dark:bg-secondary/10 border-border/70 rounded-xl focus-visible:ring-primary text-sm font-sans"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs text-red-500 mt-1 font-mono" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                                Direct Phone / WhatsApp *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  autoComplete="tel"
                                  placeholder="+91 98765 43210"
                                  className="h-11 bg-secondary/20 dark:bg-secondary/10 border-border/70 rounded-xl focus-visible:ring-primary text-sm font-sans"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs text-red-500 mt-1 font-mono" />
                            </FormItem>
                          )}
                        />
                      </div>

                    </div>
                  </div>

                  {/* Section 02: Primary Discipline & Scope */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                        02 // Primary Architecture Focus (Select One)
                      </span>
                      {selectedService && (
                        <button
                          type="button"
                          onClick={() => form.setValue("service", "")}
                          className="text-xs font-mono text-muted-foreground hover:text-foreground underline uppercase tracking-wider"
                        >
                          Clear Selection
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {commonServices.map((srv) => {
                        const isSelected = selectedService === srv.id || selectedService === srv.label;
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => form.setValue("service", srv.id)}
                            className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                              isSelected
                                ? "bg-primary/10 border-primary text-foreground shadow-sm"
                                : "bg-secondary/20 hover:bg-secondary/40 border-border/60 text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <div className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                              isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40"
                            }`}>
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                            <div className="min-w-0">
                              <span className="text-xs font-mono font-bold block text-foreground leading-snug">
                                {srv.label}
                              </span>
                              <span className="text-[11px] text-muted-foreground block font-light truncate mt-0.5">
                                {srv.description}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 03: Deployment Timeline */}
                  <div className="pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-3">
                      03 // Target Deployment Timeline
                    </span>

                    <div className="grid grid-cols-3 gap-2.5">
                      {timelineOptions.map((t) => {
                        const isSelected = selectedTimeline === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => form.setValue("timeline", t.id)}
                            className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all ${
                              isSelected
                                ? "bg-primary/10 border-primary text-foreground font-semibold"
                                : "bg-secondary/20 hover:bg-secondary/40 border-border/60 text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <span className="text-xs font-mono block leading-tight">
                              {t.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 04: Technical Specifications Textarea */}
                  <div className="pt-2">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center justify-between mb-1.5">
                            <FormLabel className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                              04 // Operational Challenge &amp; Technical Scope *
                            </FormLabel>
                            <span className="text-xs font-mono text-muted-foreground">
                              {field.value?.length || 0} / 1500 chars
                            </span>
                          </div>
                          <FormControl>
                            <Textarea
                              placeholder="Detail your operational challenge, current software or database stack, facility bed count / user seats, statutory compliance needs, or target launch date..."
                              className="min-h-[130px] bg-secondary/20 dark:bg-secondary/10 border-border/70 rounded-xl focus-visible:ring-primary text-sm py-3 leading-relaxed font-sans"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500 mt-1 font-mono" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Statutory Confidentiality Assurance */}
                  <div className="p-3.5 rounded-xl bg-secondary/30 border border-border/50 flex items-start gap-3 text-xs text-muted-foreground font-light">
                    <Lock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground font-medium block font-mono text-[11px] mb-0.5">
                        Statutory Non-Disclosure &amp; Data Sovereignty Guarantee
                      </strong>
                      <span>
                        All technical architecture disclosures, database layouts, and operational statistics are protected by our standard mutual NDA. Your data is strictly sovereign and never shared.
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-13 text-xs font-mono uppercase tracking-wider font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all rounded-full flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        <span>Transmitting Dossier via Gateway...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Technical Discovery Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                </form>
              </Form>

            </div>
          </div>

        </div>

        {/* Technical Engagement FAQ */}
        <div className="rounded-3xl bg-secondary/10 border border-border/60 p-8 sm:p-12 mb-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Engineering Governance FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight mt-2 text-foreground">
              Frequently Asked Engagement Questions
            </h2>
            <p className="text-sm text-muted-foreground font-light mt-2">
              Everything you need to know about initiating a technical partnership with RH Dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How quickly will an engineer review our submission?",
                a: "Every submission to this gateway is dispatched directly to senior engineering leadership in Guwahati. You will receive an initial architecture review and scheduling response within 2 hours during standard business hours."
              },
              {
                q: "Do we need an executed NDA before sharing operational workflows?",
                a: "Our standard mutual Non-Disclosure Agreement automatically governs all transmissions via this gateway. If your enterprise or hospital board requires your custom NDA signed first, our legal team will countersign within 4 hours."
              },
              {
                q: "Can RH Dynamics software architects visit our facility in Assam?",
                a: "Yes. For hospitals, colleges, manufacturing hubs, and logistics chains across Assam, Meghalaya, and Northeast India, our team conducts on-site physical audits of your network topology, server racks, and department workflows."
              },
              {
                q: "What are the commercial and milestone payment terms?",
                a: "We believe in zero SaaS license debt. Projects are delivered on milestone-based acceptance: 40% upon architecture and schema signoff, 40% on staging delivery with verified user acceptance testing, and 20% on production go-live."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-primary font-bold">Q{idx + 1} //</span>
                  <h3 className="text-sm font-mono font-bold text-foreground">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-auto p-8 w-[95%] rounded-2xl border border-border/80 bg-background/95 backdrop-blur-xl">
          <DialogHeader className="space-y-4 text-center flex flex-col items-center">
            <div className="rounded-full bg-emerald-500/10 p-4 border border-emerald-500/20 w-fit">
              <CheckCircle2 className="h-10 w-10 text-emerald-500" />
            </div>
            <DialogTitle className="text-2xl font-black font-heading text-foreground">
              Discovery Request Transmitted
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 text-center text-sm text-muted-foreground font-light leading-relaxed mt-2">
            <p>
              Your system requirements and architecture specifications have been dispatched directly to our systems engineering leadership in Guwahati.
            </p>
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 font-mono text-xs text-foreground text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Standard SLA Response:</span>
                <strong className="text-primary">&lt; 2 Hours (Business Day)</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Confirmation Dispatch:</span>
                <strong>Auto-Receipt Dispatched to Email</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Assigned Hub:</span>
                <strong>Upper Assam HQ &amp; Guwahati Center</strong>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Need urgent escalation? Call our primary technical line directly at <strong className="text-foreground font-mono">+91 86388 75149</strong>.
            </p>
          </div>
          
          <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-2 justify-center w-full">
            <a
              href="https://cal.com/hashim-ahmed-p4itsj/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider font-bold shadow-md hover:bg-primary/90 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Lock In Slot on Cal.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto rounded-full h-11 text-xs font-mono uppercase tracking-wider font-bold"
              onClick={() => setShowSuccessPopup(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
