import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import type { Metadata } from "next";
import { Lock, ShieldCheck, Database, EyeOff, Server, FileCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | RHD Software Solutions LLP (RH Dynamics)",
  description: "Comprehensive privacy policy and data protection framework under the Digital Personal Data Protection (DPDP) Act 2023 and Indian IT Act 2000.",
};

const SECTIONS = [
  { id: "overview", title: "Overview & Regulatory Mandate" },
  { id: "data-collected", title: "Information We Collect" },
  { id: "data-usage", title: "How We Utilize Your Data" },
  { id: "zero-resale", title: "Zero Data Resale & Brokering Guarantee" },
  { id: "encryption", title: "Data Security & Encryption Architecture" },
  { id: "healthcare-privacy", title: "Healthcare Data & Clinical Security" },
  { id: "sub-processors", title: "Authorized Cloud Sub-Processors" },
  { id: "user-rights", title: "Data Principal Rights & Erasure" },
  { id: "grievance", title: "Grievance Redressal & DPO Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Corporate Privacy Policy"
      subtitle="How RHD Software Solutions LLP safeguards, processes, and protects your personal and commercial data under Indian and international privacy standards."
      effectiveDate="October 2026"
      version="v3.1 Compliance"
      sections={SECTIONS}
    >
      {/* Section 1 */}
      <section id="overview" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">01.</span> Overview &amp; Regulatory Mandate
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          This Privacy Policy governs the processing of personal and corporate data by <strong>RHD Software Solutions LLP</strong> (operating as RH Dynamics, LLPIN: ACN-1931). We are committed to adhering strictly to the <strong>Digital Personal Data Protection (DPDP) Act 2023</strong>, the <strong>Information Technology Act, 2000</strong>, and applicable international data privacy standards.
        </p>
      </section>

      {/* Section 2 */}
      <section id="data-collected" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">02.</span> Information We Collect
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          We only collect data necessary to provide software engineering, clinical systems, and enterprise consultation:
        </p>
        <div className="space-y-3 text-xs font-mono">
          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60">
            <strong className="text-foreground block text-sm font-heading font-bold mb-1">
              Direct Contact &amp; Inquiry Information
            </strong>
            <p className="text-muted-foreground font-light font-sans text-xs">
              Name, corporate email address, contact phone number, company/organization name, and project scope submitted via our contact or audit request forms.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60">
            <strong className="text-foreground block text-sm font-heading font-bold mb-1">
              Client Feedback &amp; Verification Data
            </strong>
            <p className="text-muted-foreground font-light font-sans text-xs">
              Testimonials, client reviews, ratings, and performance metrics voluntarily provided via our client review portal (<code className="text-primary">/review</code>).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-secondary/30 border border-border/60">
            <strong className="text-foreground block text-sm font-heading font-bold mb-1">
              Automated Telemetry &amp; Error Incident Traces
            </strong>
            <p className="text-muted-foreground font-light font-sans text-xs">
              IP addresses, browser client agents, device resolution, and JavaScript error stacks captured when a client reports a glitch or encounters a runtime exception to facilitate immediate patch mobilization.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="data-usage" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">03.</span> How We Utilize Your Data
        </h2>
        <ul className="space-y-2 text-xs text-muted-foreground font-mono">
          <li>• To execute Statements of Work (SOW) and deploy customized enterprise software architectures.</li>
          <li>• To fulfill our &lt; 2-hour technical support and emergency incident resolution SLA commitments.</li>
          <li>• To generate invoices, commercial contracts, and verify payment milestone reconciliations.</li>
          <li>• To safeguard platform security, prevent distributed denial of service (DDoS), and block malicious web bots.</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section id="zero-resale" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase mb-2">
          <EyeOff className="w-4 h-4" /> Core Guarantee
        </div>
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-3">
          Zero Data Resale &amp; Brokering Guarantee
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">
          RHD Software Solutions LLP has never sold, rented, leased, or brokered personal or enterprise data to third-party advertising networks, data brokers, or external commercial entities. Your data is used exclusively to facilitate your direct relationship with RH Dynamics.
        </p>
      </section>

      {/* Section 5 */}
      <section id="encryption" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">05.</span> Data Security &amp; Encryption Architecture
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          All client communications, API transactions, and stored artifacts are guarded by defense-in-depth protocols:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-4 rounded-xl bg-secondary/40 border border-border/60">
            <strong className="text-foreground block text-sm font-heading font-bold mb-1">In-Transit Encryption</strong>
            <p className="text-muted-foreground font-light">TLS 1.3 / HTTPS encryption across all client endpoints and REST APIs.</p>
          </div>
          <div className="p-4 rounded-xl bg-secondary/40 border border-border/60">
            <strong className="text-foreground block text-sm font-heading font-bold mb-1">At-Rest Protection</strong>
            <p className="text-muted-foreground font-light">AES-256 cryptographic standards across managed cloud databases.</p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="healthcare-privacy" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">06.</span> Healthcare Data &amp; Clinical Security
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
          For healthcare centers deploying our <strong>RH CORE™ HSMS and LIS</strong> systems, patient demographic records, diagnostic reports, and medical histories reside in strictly isolated client database partitions conforming to ABDM (Ayushman Bharat Digital Mission) guidelines. RH Dynamics engineers access clinical databases solely upon authorized hospital administrative sign-off for debugging or database schema migration.
        </p>
      </section>

      {/* Section 7 */}
      <section id="sub-processors" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">07.</span> Authorized Cloud Sub-Processors
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          We engage reputable infrastructure providers governed by rigorous data processing agreements:
        </p>
        <ul className="space-y-2 text-xs font-mono text-muted-foreground">
          <li>• <strong>Vercel &amp; AWS:</strong> Global edge delivery, serverless computing, and enterprise hosting.</li>
          <li>• <strong>Supabase / PostgreSQL:</strong> Secure relational database infrastructure.</li>
          <li>• <strong>Brevo (Sendinblue):</strong> Transactional email dispatch for client notifications and emergency error alerts.</li>
        </ul>
      </section>

      {/* Section 8 */}
      <section id="user-rights" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">08.</span> Data Principal Rights &amp; Erasure
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
          Under the DPDP Act 2023, you have the right to request access to personal data held by us, request correction of inaccurate records, or request complete erasure of your information, subject to mandatory statutory tax and accounting retention requirements.
        </p>
      </section>

      {/* Section 9 */}
      <section id="grievance" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">09.</span> Grievance Redressal &amp; DPO Contact
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          For any data protection inquiries, privacy questions, or statutory grievance notices:
        </p>
        <div className="p-4 rounded-xl bg-secondary/50 border border-border/60 text-xs font-mono space-y-1">
          <span className="text-foreground font-bold block">Grievance Officer, RHD Software Solutions LLP:</span>
          <span>Email: <a href="mailto:founder@rhdynamics.in" className="text-primary hover:underline font-bold">founder@rhdynamics.in</a></span><br />
          <span>General Support: <a href="mailto:support@rhdynamics.in" className="text-primary hover:underline font-bold">support@rhdynamics.in</a></span><br />
          <span>Postal: Near AGV Bank, Goranga, Golaghat, Assam 785603</span>
        </div>
      </section>
    </LegalPageLayout>
  );
}
