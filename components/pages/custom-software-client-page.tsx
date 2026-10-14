"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Check, Terminal, Layers, Server, 
  Database, Shield, Cpu, Network, ArrowUpRight,
  GitBranch, Lock, BarChart3, Clock, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";

const architectureModules = [
  {
    tag: "01 // LOGISTICS & INVENTORY",
    title: "Multi-Branch Supply Chain & Warehouse Engine",
    description: "Real-time stock synchronization across distributed distribution hubs in Northeast India. Automated stock replenishment thresholds, batch barcode serialization, and supplier procurement pipelines.",
    metrics: ["Sub-second multi-branch sync", "Zero phantom inventory", "Automated batch PO generation"]
  },
  {
    tag: "02 // FINANCIAL AUTOMATION",
    title: "Automated GST & Multi-Ledger Reconciliation",
    description: "Built-in GST billing engine with automated tax calculation, digital invoice dispatch, profit-center allocation, and real-time executive profit/loss accounting.",
    metrics: ["Direct GSTN compliance", "Automated accounts reconciliation", "Real-time ledger audit trails"]
  },
  {
    tag: "03 // PROCESS ORCHESTRATION",
    title: "Bespoke Operational Workflow Automation",
    description: "Replace disconnected spreadsheets and manual WhatsApp approvals with structured, role-gated digital approval pipelines with complete auditability.",
    metrics: ["Role-based access governance", "Immutable action history", "Zero paperwork latency"]
  },
  {
    tag: "04 // HUMAN CAPITAL",
    title: "Biometric Attendance & Automated Payroll",
    description: "Hardware-level biometric machine integration, automated leave balancing, statutory tax deductions, and one-click salary disbursement slip generation.",
    metrics: ["Biometric hardware sync", "Automated PF/ESI deductions", "Self-service staff portal"]
  },
  {
    tag: "05 // NETWORK ARCHITECTURE",
    title: "Campus Infrastructure & Server Topology",
    description: "Enterprise network design, server room virtualization, and surveillance integration. Battle-tested in large-scale deployments like Army Public School Narengi.",
    metrics: ["Gigabit redundant backbones", "Enterprise firewall security", "Campus-wide coverage"]
  },
  {
    tag: "06 // DATA SOVEREIGNTY",
    title: "Private Dedicated Cloud & Air-Gapped Security",
    description: "Your critical operational data lives on your own dedicated database instance. Automated immutable daily snapshots, zero third-party telemetry, and 99.9% uptime SLA.",
    metrics: ["100% Client data ownership", "End-to-end encrypted storage", "Local Guwahati SLA support"]
  }
];

const comparisonMatrix = [
  {
    factor: "Cost Structure",
    custom: "One-time capital engineering asset. Zero per-seat monthly subscription penalties.",
    offTheShelf: "Escalating per-user monthly SaaS fees that compound permanently as you grow."
  },
  {
    factor: "Process Alignment",
    custom: "100% custom-built to match your exact existing operational and factory workflows.",
    offTheShelf: "Forces your team to abandon your proven workflow to fit rigid generic templates."
  },
  {
    factor: "Data Sovereignty",
    custom: "Full database ownership. Hosted on your own dedicated private cloud or local servers.",
    offTheShelf: "Proprietary data trapped on multi-tenant vendor cloud with costly migration barriers."
  },
  {
    factor: "Support & Engineering",
    custom: "Direct technical access to the senior engineers who built the system. Local in Assam.",
    offTheShelf: "Generic call centers and slow automated ticketing systems that take days to respond."
  }
];

const developmentLifecycle = [
  { step: "01", name: "Workflow Discovery", desc: "We embed with your floor managers and accounts team to map every single document, input, and approval bottleneck." },
  { step: "02", name: "System Architecture", desc: "Design the relational schema, API contracts, role hierarchies, and security boundaries before writing production code." },
  { step: "03", name: "Iterative Sprints", desc: "Weekly deliverable milestones with live staging environments so your operational leadership tests each module in real-time." },
  { step: "04", name: "On-Site Deployment", desc: "Floor-level staff training in Guwahati/Northeast, hardware integration, data migration, and round-the-clock SLA." }
];

export function CustomSoftwareClientPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      
      {/* Subtle minimalist background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 max-w-6xl">

        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-border bg-secondary/30 text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Enterprise Engineering & Cloud ERP // Guwahati, Assam
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-8 leading-[1.08]">
            Software Built Around Your <span className="text-gradient">Exact Workflow</span>.
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-10">
            We architect tailor-made ERP systems, automated supply chain platforms, and custom business portals. Complete code and data sovereignty, zero per-seat licensing penalties.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link href="/contact?service=Custom+ERP+and+Software+Development">
              <Button size="lg" className="h-14 px-8 text-base font-semibold rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Request Architecture Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918638875149">
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-medium rounded-full border-border/80 hover:bg-secondary/40 transition-all">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                +91 86388 75149
              </Button>
            </a>
          </div>
        </div>

        {/* Key Engineering Pillars Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden mb-32 border border-border/60">
          {[
            { label: "Data Ownership", value: "100% Sovereign", sub: "No vendor lock-in" },
            { label: "Per-User SaaS Fees", value: "₹0 Forever", sub: "Scale unlimited seats" },
            { label: "Support Latency", value: "< 2 Hours", sub: "Guwahati-based leads" },
            { label: "Deployment", value: "Dedicated Cloud", sub: "Or on-premise servers" }
          ].map((stat, i) => (
            <div key={i} className="bg-card p-6 md:p-8 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">{stat.label}</span>
              <div>
                <p className="text-2xl md:text-3xl font-black font-heading text-foreground tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary">System Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mt-2">
                Bespoke Operational Modules
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Every component is built specifically to address the regional supply, taxation, and operational realities of enterprises in Northeast India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureModules.map((item, idx) => (
              <div 
                key={idx}
                className="group relative p-8 rounded-2xl glass-card dark:glass-card-dark border border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-muted-foreground block mb-4">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-border/40 space-y-2">
                  {item.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Comparison: Custom Asset vs Generic SaaS */}
        <div className="mb-32">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Strategic Financial Analysis</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mt-2">
              Why Custom Beats Commercial Subscriptions
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Standard SaaS pricing penalizes business expansion. Custom software transforms operational tools into owned proprietary capital.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 overflow-hidden bg-card/40 backdrop-blur-sm">
            <div className="grid grid-cols-12 bg-secondary/40 p-4 md:p-6 border-b border-border/60 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <div className="col-span-4 md:col-span-3">Strategic Dimension</div>
              <div className="col-span-8 md:col-span-5 font-bold text-foreground">RH Dynamics Engineered Solution</div>
              <div className="hidden md:block md:col-span-4 text-muted-foreground">Generic Off-The-Shelf SaaS</div>
            </div>

            <div className="divide-y divide-border/40 text-sm">
              {comparisonMatrix.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 md:p-6 items-start gap-4">
                  <div className="col-span-12 md:col-span-3 font-semibold text-foreground text-xs font-mono uppercase tracking-wide">
                    {row.factor}
                  </div>
                  <div className="col-span-12 md:col-span-5 flex items-start gap-2.5 text-foreground leading-relaxed">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{row.custom}</span>
                  </div>
                  <div className="col-span-12 md:col-span-4 text-muted-foreground leading-relaxed text-xs md:text-sm pl-6 md:pl-0 border-l md:border-l-0 border-border/40">
                    <span className="md:hidden font-semibold block text-red-400 mb-1">Generic SaaS:</span>
                    {row.offTheShelf}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Delivery Protocol</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mt-2">
              Precision Engineering Methodology
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Zero ambiguity. Predictable milestones, weekly deployable progress, and on-site integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {developmentLifecycle.map((stage, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-secondary/15 border border-border/50 relative flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black font-heading text-primary/30 block mb-4">
                    {stage.step}
                  </span>
                  <h3 className="text-lg font-bold font-heading mb-2 text-foreground">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Minimalist Call to Action */}
        <div className="rounded-3xl border border-border/80 p-8 md:p-14 bg-gradient-to-b from-secondary/30 to-background text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-3 block">
              Direct Technical Discovery
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight mb-4">
              Schedule Your Systems Scoping Session
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
              Meet directly with our software architects in Guwahati to review your process bottlenecks, infrastructure specs, and cost roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact?service=Custom+ERP+and+Software+Development">
                <Button size="lg" className="h-13 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20">
                  Book Technical Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="ghost" size="lg" className="h-13 px-8 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground">
                  Review Case Studies
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
