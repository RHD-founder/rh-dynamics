import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Zap, CreditCard, Scale, Lock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Rule Book & Company Policy | RHD Software Solutions LLP",
  description: "Official operating framework, deal governance, 50/50 milestone payment structure, code sovereignty, and SLA terms of RHD Software Solutions LLP (RH Dynamics).",
};

const SECTIONS = [
  { id: "corporate-entity", title: "Corporate Entity & Accreditation" },
  { id: "deal-initiation", title: "How Deals Are Initialized" },
  { id: "commercial-terms", title: "Prepaid Milestone & Commercial Structure" },
  { id: "execution-uat", title: "Engineering Sprints & UAT Sign-Off" },
  { id: "code-sovereignty", title: "Code Base Sovereignty & SaaS Models" },
  { id: "sla-commitments", title: "Service Level Agreement (< 2-Hour SLA)" },
  { id: "confidentiality", title: "Client Confidentiality & Mutual NDA" },
  { id: "jurisdiction", title: "Dispute Resolution & Jurisdiction" },
];

export default function CompanyPolicyPage() {
  return (
    <LegalPageLayout
      title="Corporate Rule Book & Operating Policy"
      subtitle="The authoritative governance framework, commercial onboarding protocol, milestone payment terms, and delivery standards of RHD Software Solutions LLP."
      effectiveDate="October 2026"
      version="v3.1 Production"
      sections={SECTIONS}
    >
      {/* Section 1 */}
      <section id="corporate-entity" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">01.</span> Corporate Entity &amp; Accreditation
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          RH Dynamics operates legally and commercially under <strong>RHD Software Solutions LLP</strong>, an incorporated Limited Liability Partnership under the Limited Liability Partnership Act 2008, Ministry of Corporate Affairs, Government of India.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-secondary/50 border border-border/60">
            <span className="text-muted-foreground block text-xs uppercase">Corporate Identity</span>
            <strong className="text-foreground text-sm">LLPIN: ACN-1931</strong>
          </div>
          <div className="p-3.5 rounded-xl bg-secondary/50 border border-border/60">
            <span className="text-muted-foreground block text-xs uppercase">National Accreditation</span>
            <strong className="text-foreground text-sm">DPIIT Startup India Certified</strong>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="deal-initiation" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">02.</span> How Deals Are Initialized (Project Onboarding)
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5">
          To ensure total architectural clarity and prevent scope creep, every commercial engagement at RH Dynamics follows a rigorous 4-step onboarding protocol:
        </p>
        <div className="space-y-3 text-xs font-mono">
          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">1</div>
            <div>
              <strong className="text-foreground block text-sm font-heading font-bold mb-0.5">Discovery &amp; Architectural Audit</strong>
              <p className="text-muted-foreground font-light font-sans text-xs">
                Detailed requirements consultation conducted via Phone, WhatsApp, Google Meet, or in-person at our Guwahati or Upper Assam engineering hubs.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">2</div>
            <div>
              <strong className="text-foreground block text-sm font-heading font-bold mb-0.5">Formal Statement of Work (SOW)</strong>
              <p className="text-muted-foreground font-light font-sans text-xs">
                A binding technical blueprint specifying user stories, database schemas, third-party APIs, UI mockups, and deployment milestones.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">3</div>
            <div>
              <strong className="text-foreground block text-sm font-heading font-bold mb-0.5">Mutual NDA &amp; Master Agreement Execution</strong>
              <p className="text-muted-foreground font-light font-sans text-xs">
                Both parties execute a digital contract safeguarding client trade secrets and defining intellectual property parameters.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">4</div>
            <div>
              <strong className="text-foreground block text-sm font-heading font-bold mb-0.5">Prepaid Sprint Mobilization</strong>
              <p className="text-muted-foreground font-light font-sans text-xs">
                Receipt of the initial 50% mobilization payment authorizes sprint scheduling and senior developer resource locking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="commercial-terms" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">03.</span> Prepaid Milestone &amp; Commercial Structure
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          RH Dynamics enforces a transparent, milestone-driven commercial policy to eliminate speculative invoicing and protect project momentum:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold uppercase text-primary">Milestone 1</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-primary text-primary-foreground font-bold">50% Advance</span>
            </div>
            <strong className="block text-sm font-heading font-bold text-foreground mb-1">
              Sprint Kickoff &amp; Core Architecture
            </strong>
            <p className="text-xs text-muted-foreground font-light">
              Mobilizes software architects, database designers, and UI/UX developers. Covers system setup, backend APIs, and staging containerization.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">Milestone 2</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-600 text-white font-bold">50% Handover</span>
            </div>
            <strong className="block text-sm font-heading font-bold text-foreground mb-1">
              UAT Approval &amp; Production Deployment
            </strong>
            <p className="text-xs text-muted-foreground font-light">
              Invoiced upon successful User Acceptance Testing (UAT) sign-off. Authorizes live DNS cutover, production server provisioning, and code access.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-secondary/40 border border-border/60 text-xs text-muted-foreground space-y-1 font-mono">
          <p className="text-foreground font-semibold">For RH CORE™ SaaS Subscriptions (Hospital &amp; LIS):</p>
          <p className="font-light">
            Billed strictly on a prepaid monthly or annual recurring cycle. Cloud hosting, security updates, and regulatory patches are included.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="execution-uat" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">04.</span> Engineering Sprints &amp; UAT Sign-Off
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          All engineering cycles adhere to Agile sprints with scheduled staging previews. Before any project transitions to production:
        </p>
        <ul className="space-y-2.5 text-xs text-muted-foreground font-mono">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Staging Sandbox:</strong> Clients are provided an authenticated staging environment to verify all workflows, roles, and edge cases.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Formal UAT Sign-Off:</strong> Client conducts acceptance testing within 10 business days of staging handover. Any deviations from the agreed SOW are patched immediately.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>30-Day Post-Launch Warranty:</strong> Every custom deployment includes 30 days of comprehensive zero-cost bug fixing and stability monitoring.</span>
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="code-sovereignty" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">05.</span> Code Base Sovereignty &amp; SaaS Models
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          RH Dynamics provides flexibility based on enterprise strategy:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-secondary/30 border border-border/70">
            <strong className="text-foreground block text-sm font-heading font-bold mb-1">
              Dedicated Custom Code Sovereignty
            </strong>
            <p className="text-muted-foreground font-light font-sans">
              For bespoke software, clients receive full IP transfer, Docker containers, database schemas, and private repository ownership upon final payment settlement.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-secondary/30 border border-border/70">
            <strong className="text-foreground block text-sm font-heading font-bold mb-1">
              RH CORE™ Managed Cloud SaaS
            </strong>
            <p className="text-muted-foreground font-light font-sans">
              For clinical centers choosing our managed hospital software (HSMS/LIS), software is licensed as a fully managed cloud service with 99.9% uptime and zero maintenance burden.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="sla-commitments" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">06.</span> Service Level Agreement (&lt; 2-Hour SLA)
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          We maintain an uncompromised <strong>&lt; 2-Hour SLA</strong> for all critical production incidents. Our SLA applies to clients worldwide, across India, and across all districts of Assam:
        </p>
        <div className="p-4 rounded-xl bg-secondary/40 border border-border/70 text-xs font-mono space-y-2">
          <div className="flex items-center justify-between text-foreground">
            <span>Critical Severity (Outage, Billing Halt):</span>
            <span className="text-emerald-500 font-bold">&lt; 2-Hour Triage &amp; Mobilization</span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Medium Severity (Non-Blocking Feature Glitch):</span>
            <span>&lt; 6-Hour Resolution Sprint</span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Dispatch Channels:</span>
            <span>Direct Phone, Dedicated WhatsApp, Meet, or In-Person Hubs</span>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="confidentiality" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">07.</span> Client Confidentiality &amp; Mutual NDA
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          We practice strict competitor confidentiality. We will never share your technical architectures, proprietary business logic, client patient databases, or trade secrets with competitors or unauthorized parties. Case studies are published only under explicit client consent or in anonymized formats.
        </p>
      </section>

      {/* Section 8 */}
      <section id="jurisdiction" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">08.</span> Dispute Resolution &amp; Jurisdiction
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          This operating policy and all commercial contracts are governed by and construed in accordance with the laws of the Republic of India. In the event of any dispute, parties agree to first pursue amicable mediation. If unresolved, disputes shall be subject to the exclusive jurisdiction of the competent courts in Guwahati or Golaghat, Assam, India.
        </p>
        <div className="pt-2">
          <Link href="/terms-and-conditions" className="text-xs font-mono text-primary hover:underline flex items-center gap-1 font-bold">
            <span>Review Full Master Terms of Service</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </LegalPageLayout>
  );
}
