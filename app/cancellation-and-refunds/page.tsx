import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import type { Metadata } from "next";
import { RefreshCcw, AlertCircle, CheckCircle2, ShieldCheck, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | RHD Softwaresolutions LLP (RH Dynamics)",
  description: "Official cancellation terms, milestone refund policies, bespoke development rules, and SaaS subscription terms of RHD Softwaresolutions LLP.",
};

const SECTIONS = [
  { id: "custom-nature", title: "Nature of Custom Software Engineering" },
  { id: "advance-policy", title: "Advance Sprint Mobilization Non-Refundability" },
  { id: "mid-cancellation", title: "Mid-Project Termination & Asset Transfer" },
  { id: "saas-cancellation", title: "RH CORE™ SaaS Subscription Cancellation" },
  { id: "warranty-remediation", title: "Warranty Remediation in Lieu of Cash Refunds" },
  { id: "contact-appeals", title: "Dispute Escalation & Official Appeals" },
];

export default function CancellationAndRefundsPage() {
  return (
    <LegalPageLayout
      title="Cancellation &amp; Refund Policy"
      subtitle="Clear, transparent commercial parameters regarding milestone sprint payments, bespoke engineering commitments, and cloud SaaS subscription cancellations."
      effectiveDate="October 2026"
      version="v3.1 Standard"
      sections={SECTIONS}
    >
      {/* Section 1 */}
      <section id="custom-nature" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">01.</span> Nature of Custom Software Engineering
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          All digital solutions, custom ERP systems, high-performance web applications, and clinical platforms engineered by <strong>RHD Softwaresolutions LLP</strong> are bespoke, knowledge-intensive services tailored strictly to individual client operational specifications. Unlike off-the-shelf physical merchandise, custom engineering involves the irreversible allocation of senior developer hours, compute infrastructure, and proprietary architecture design.
        </p>
      </section>

      {/* Section 2 */}
      <section id="advance-policy" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">02.</span> Advance Sprint Mobilization Non-Refundability
        </h2>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono mb-4">
          <strong>Mandatory Commercial Rule:</strong> The 50% upfront sprint mobilization fee is strictly non-refundable once architectural work or engineering sprints have commenced.
        </div>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">
          Receipt of the initial milestone secures developer time, provisions staging cloud instances, and prevents our engineering teams from accepting competing project mandates. Consequently, advance payments are non-refundable once an SOW is countersigned.
        </p>
      </section>

      {/* Section 3 */}
      <section id="mid-cancellation" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">03.</span> Mid-Project Termination &amp; Asset Transfer
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          If a Client elects to terminate a project prematurely before Milestone 2 completion:
        </p>
        <ul className="space-y-2.5 text-xs text-muted-foreground font-mono">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>Client is not obligated to pay the final 50% Milestone 2 fee for unperformed work.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>RH Dynamics will package and transfer all codebase commits, database models, and design assets completed up to that point.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>Neither party shall have further financial liability toward the terminated milestone.</span>
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section id="saas-cancellation" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">04.</span> RH CORE™ SaaS Subscription Cancellation
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          For clinical clients subscribing to <strong>RH CORE™ HSMS or LIS</strong> cloud hosting:
        </p>
        <div className="space-y-2 text-xs font-mono text-muted-foreground">
          <p>• You may cancel your subscription at any time prior to the start of the next billing cycle by emailing <a href="mailto:founder@rhdynamics.in" className="text-primary hover:underline">founder@rhdynamics.in</a>.</p>
          <p>• Upon cancellation, access remains active through the end of the paid billing month or annual term.</p>
          <p>• We provide complete, secure database exports (SQL/JSON) of your hospital records within 14 business days of account termination.</p>
          <p>• Partial-month refunds are not issued for already consumed cloud server cycles.</p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="warranty-remediation" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">05.</span> Warranty Remediation in Lieu of Cash Refunds
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
          If a deliverable fails to conform to the agreed SOW, Client remedy is governed by our <strong>30-Day Post-Launch Warranty</strong>. Rather than cash refunds, our engineering team is contractually obligated to debug, refactor, and patch reproducible errors until full compliance with the technical specification is achieved.
        </p>
      </section>

      {/* Section 6 */}
      <section id="contact-appeals" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">06.</span> Dispute Escalation &amp; Official Appeals
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          Any commercial disagreement or billing appeal should be directed in writing to the Designated Partners of RHD Softwaresolutions LLP:
        </p>
        <div className="p-4 rounded-xl bg-secondary/50 border border-border/60 text-xs font-mono space-y-1">
          <span className="text-foreground font-bold block">Commercial Disputes &amp; Executive Resolution:</span>
          <span>Email: <a href="mailto:founder@rhdynamics.in" className="text-primary hover:underline font-bold">founder@rhdynamics.in</a></span><br />
          <span>Executive Phone: +91 86388 75149</span>
        </div>
      </section>
    </LegalPageLayout>
  );
}
