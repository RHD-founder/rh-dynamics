import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import type { Metadata } from "next";
import { Truck, Cloud, Code2, Globe2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Shipping & Electronic Delivery Policy | RHD Software Solutions LLP",
  description: "Electronic delivery protocols, cloud software deployments, repository handovers, and digital shipping timelines of RHD Software Solutions LLP.",
};

const SECTIONS = [
  { id: "digital-mandate", title: "Pure Digital & Electronic Delivery" },
  { id: "delivery-methods", title: "Deployment Protocols & Delivery Channels" },
  { id: "delivery-timelines", title: "Sprint Timelines & Milestone Handover" },
  { id: "international-delivery", title: "Worldwide & Cross-Border Delivery" },
  { id: "confirmation-signoff", title: "Proof of Delivery & Handover Sign-Off" },
];

export default function ShippingPolicyPage() {
  return (
    <LegalPageLayout
      title="Digital Delivery &amp; Shipping Policy"
      subtitle="How RHD Software Solutions LLP delivers bespoke software architectures, cloud environments, and digital platform licenses electronically."
      effectiveDate="October 2026"
      version="v3.1 Standard"
      sections={SECTIONS}
    >
      {/* Section 1 */}
      <section id="digital-mandate" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">01.</span> Pure Digital &amp; Electronic Delivery
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          <strong>RHD Software Solutions LLP</strong> is an enterprise software engineering and cloud solutions company. All software platforms, clinical management systems, mobile applications, APIs, and digital deliverables are manufactured and transferred <strong>100% electronically</strong>. We do not dispatch physical optical media, CDs, or boxed merchandise.
        </p>
      </section>

      {/* Section 2 */}
      <section id="delivery-methods" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">02.</span> Deployment Protocols &amp; Delivery Channels
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          Depending on the commissioned architecture, delivery is completed through one or more of the following electronic channels:
        </p>
        <div className="space-y-3 text-xs font-mono">
          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-3">
            <Cloud className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground block text-sm font-heading font-bold mb-0.5">Cloud Production Cutover</strong>
              <p className="text-muted-foreground font-light font-sans text-xs">
                Deployment of web services, microservices, and databases directly to client-owned or managed cloud servers (AWS, Google Cloud, Vercel, or DigitalOcean) with SSL certificates and DNS cutover.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-3">
            <Code2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground block text-sm font-heading font-bold mb-0.5">Source Code Repository Handover</strong>
              <p className="text-muted-foreground font-light font-sans text-xs">
                Transfer of private Git repository ownership (GitHub, GitLab, or Bitbucket), Docker container manifests, and environment configuration templates upon Milestone 2 settlement.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 flex items-start gap-3">
            <Globe2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground block text-sm font-heading font-bold mb-0.5">SaaS Tenant Credential Provisioning</strong>
              <p className="text-muted-foreground font-light font-sans text-xs">
                Instant electronic issuance of administrative login credentials, tenant URLs, and staff onboarding access for RH CORE™ hospital platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="delivery-timelines" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">03.</span> Sprint Timelines &amp; Milestone Handover
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
          Delivery timelines are established contractually in the agreed Statement of Work (SOW). Standard sprint milestones range from 2 to 8 weeks depending on scope complexity. For RH CORE™ cloud instances, tenant setup is delivered within <strong>24 to 48 hours</strong> following onboarding execution.
        </p>
      </section>

      {/* Section 4 */}
      <section id="international-delivery" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">04.</span> Worldwide &amp; Cross-Border Delivery
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
          Our electronic delivery channels operate globally with zero shipping charges, import tariffs, or courier delays. All software artifacts and cloud environments are accessible securely from anywhere in India and internationally.
        </p>
      </section>

      {/* Section 5 */}
      <section id="confirmation-signoff" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">05.</span> Proof of Delivery &amp; Handover Sign-Off
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          Proof of delivery is established electronically via:
        </p>
        <ul className="space-y-2 text-xs font-mono text-muted-foreground">
          <li>• Client confirmation of UAT staging sign-off via email or digital contract signature.</li>
          <li>• Timestamped Git commit transfer logs and repository invitation acceptance.</li>
          <li>• Verified live status of production domains and DNS propagation.</li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}
