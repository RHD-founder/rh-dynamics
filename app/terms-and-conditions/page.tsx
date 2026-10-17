import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import type { Metadata } from "next";
import { FileText, ShieldAlert, CheckCircle2, Scale, DollarSign, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | RHD Softwaresolutions LLP (RH Dynamics)",
  description: "Master Terms of Service, Statement of Work execution, milestone billing, IP ownership, and legal liabilities of RHD Softwaresolutions LLP.",
};

const SECTIONS = [
  { id: "binding-agreement", title: "Binding Legal Agreement & Parties" },
  { id: "deal-structure", title: "Engagement SOW & 50/50 Milestone Terms" },
  { id: "saas-subscriptions", title: "RH CORE™ SaaS Subscription Terms" },
  { id: "intellectual-property", title: "Intellectual Property & Code Ownership" },
  { id: "client-obligations", title: "Client Obligations & Scope Changes" },
  { id: "uat-warranty", title: "User Acceptance Testing & 30-Day Warranty" },
  { id: "sla-support", title: "Service Level Agreement & Escalations" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "governing-law", title: "Governing Law & Legal Jurisdiction" },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Master Terms and Conditions"
      subtitle="The official commercial and legal contract governing all software development, cloud licensing, and technical services provided by RHD Softwaresolutions LLP."
      effectiveDate="October 2026"
      version="v3.1 Standard"
      sections={SECTIONS}
    >
      {/* Section 1 */}
      <section id="binding-agreement" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">01.</span> Binding Legal Agreement &amp; Parties
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          These Terms and Conditions (&quot;Terms&quot;, &quot;Master Agreement&quot;) constitute a legally binding contract entered into between <strong>RHD Softwaresolutions LLP</strong> (&quot;RH Dynamics&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;, LLPIN: ACN-1931) and the corporate client, business entity, healthcare institution, or individual (&quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;) commissioning or accessing our digital platforms and services.
        </p>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">
          By executing a Statement of Work (SOW), issuing a purchase order, authorizing a milestone payment, or accessing RH CORE™ software, you unconditionally agree to be bound by these Terms.
        </p>
      </section>

      {/* Section 2 */}
      <section id="deal-structure" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">02.</span> Engagement SOW &amp; 50/50 Milestone Terms
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          All custom software development, mobile application builds, and enterprise ERP implementations are governed by an agreed Statement of Work (SOW) executed under our standard milestone structure:
        </p>
        <div className="space-y-3 text-xs font-mono">
          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-3">
            <span className="px-2 py-1 rounded bg-primary text-primary-foreground font-bold shrink-0">Milestone 1</span>
            <div>
              <strong className="text-foreground block text-sm font-heading font-bold mb-0.5">50% Advance Mobilization Fee</strong>
              <p className="text-muted-foreground font-light font-sans text-xs">
                Payable upon SOW execution. Authorizes architecture design, staging environment setup, database modeling, and dedicated developer allocation. Work commences strictly after realization of this advance.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-3">
            <span className="px-2 py-1 rounded bg-emerald-600 text-white font-bold shrink-0">Milestone 2</span>
            <div>
              <strong className="text-foreground block text-sm font-heading font-bold mb-0.5">50% Final Settlement &amp; Deployment Sign-Off</strong>
              <p className="text-muted-foreground font-light font-sans text-xs">
                Invoiced upon successful User Acceptance Testing (UAT) sign-off. Settlement of this milestone releases production server credentials, DNS cutover, and repository/source code access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="saas-subscriptions" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">03.</span> RH CORE™ SaaS Subscription Terms
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          For clients operating on the <strong>RH CORE™ HSMS or LIS</strong> cloud subscription model:
        </p>
        <ul className="space-y-2 text-xs font-mono text-muted-foreground">
          <li>• Subscriptions are billed in advance on a monthly or annual renewal schedule.</li>
          <li>• Subscription fees include cloud server hosting, automated daily backups, ABDM compliance updates, and standard maintenance.</li>
          <li>• Non-payment of subscription fees past a 7-day grace period may result in automated read-only suspension of the tenant portal until account regularization.</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section id="intellectual-property" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">04.</span> Intellectual Property &amp; Code Ownership
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          Ownership of deliverables depends on the commissioned solution:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-4 rounded-xl bg-secondary/40 border border-border/60">
            <strong className="text-foreground block text-sm font-heading font-bold mb-1">Custom Bespoke Code</strong>
            <p className="text-muted-foreground font-light">
              Upon 100% financial settlement of all agreed milestones, Client receives full exclusive intellectual property rights and repository ownership for bespoke code generated specifically for their scope.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-secondary/40 border border-border/60">
            <strong className="text-foreground block text-sm font-heading font-bold mb-1">RH CORE™ Core Platform</strong>
            <p className="text-muted-foreground font-light">
              All proprietary algorithms, clinical database schemas, and architectural frameworks powering RH CORE™ remain the exclusive intellectual property of RHD Softwaresolutions LLP.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="client-obligations" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">05.</span> Client Obligations &amp; Scope Changes
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
          Clients agree to provide timely feedback, assets, and third-party API credentials necessary for sprint execution. Any feature requests, workflow changes, or architectural expansions outside the signed SOW will be evaluated under a formal Change Request (CR) with additional cost and timeline estimation.
        </p>
      </section>

      {/* Section 6 */}
      <section id="uat-warranty" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">06.</span> User Acceptance Testing &amp; 30-Day Warranty
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
          Upon staging deployment, Client has a 10-business-day inspection window to verify that all functional requirements conform to the SOW. Following production cutover, RH Dynamics provides an unconditional <strong>30-Day Post-Launch Warranty</strong> to patch any reproducible functional defects at zero additional charge.
        </p>
      </section>

      {/* Section 7 */}
      <section id="sla-support" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">07.</span> Service Level Agreement &amp; Escalations
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
          RH Dynamics commits to an industry-leading <strong>&lt; 2-Hour SLA</strong> for all critical production disruptions. Support is accessible worldwide via direct phone, WhatsApp business escalation, Google Meet, and on-site engineering dispatch across Assam and Northeast India.
        </p>
      </section>

      {/* Section 8 */}
      <section id="liability" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">08.</span> Limitation of Liability
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
          To the maximum extent permitted by applicable Indian law, RHD Softwaresolutions LLP shall not be liable for any indirect, incidental, punitive, or consequential damages (including loss of profits, commercial interruption, or third-party cloud service outages). Our aggregate liability under any contract shall strictly not exceed the total fees paid by the Client to RH Dynamics under the specific SOW in the preceding 3-month period.
        </p>
      </section>

      {/* Section 9 */}
      <section id="governing-law" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">09.</span> Governing Law &amp; Legal Jurisdiction
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          These Terms and all commercial engagements are governed exclusively by the laws of India. Any legal dispute, arbitration, or statutory claim arising from these Terms shall be subject to the exclusive jurisdiction of the competent courts situated in <strong>Guwahati or Golaghat, Assam, India</strong>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
