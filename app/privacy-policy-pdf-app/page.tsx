import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import type { Metadata } from "next";
import { Smartphone, ShieldCheck, HardDrive, Lock, FileCode, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - PDF Manager Pro | RHD Softwaresolutions LLP",
  description: "Official Google Play Data Safety and Privacy Policy for PDF Manager Pro by RHD Softwaresolutions LLP. Local-first architecture with zero external data transmission.",
};

const SECTIONS = [
  { id: "local-first", title: "Local-First Architecture (Zero Data Collection)" },
  { id: "device-permissions", title: "Device Permissions & Internal Storage" },
  { id: "play-safety", title: "Google Play Data Safety Declarations" },
  { id: "libraries", title: "Third-Party Runtime Libraries" },
  { id: "children-privacy", title: "Children's Privacy Protection" },
  { id: "app-security", title: "Local File Security & Sandboxing" },
  { id: "contact-app", title: "Developer Contact & Inquiries" },
];

export default function PrivacyPolicyPdfApp() {
  return (
    <LegalPageLayout
      title="Privacy Policy: PDF Manager Pro"
      subtitle="Official privacy statement and Google Play Data Safety disclosure for PDF Manager Pro, engineered by RHD Softwaresolutions LLP."
      effectiveDate="November 2025"
      version="v1.2 Mobile"
      sections={SECTIONS}
    >
      {/* Section 1 */}
      <section id="local-first" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">01.</span> Local-First Architecture (Zero Data Collection)
        </h2>
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span><strong>100% On-Device Processing:</strong> Your files never leave your physical smartphone.</span>
        </div>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          PDF Manager Pro is engineered with a strict &quot;Local-First&quot; security architecture:
        </p>
        <ul className="space-y-2 text-xs font-mono text-muted-foreground">
          <li>• All PDF manipulation (merging, reordering, splitting) is performed locally on your device&apos;s processor.</li>
          <li>• We <strong>do not upload</strong> your PDF documents to any external cloud server or remote API.</li>
          <li>• We <strong>do not collect</strong>, log, or transmit personal identification information (PII) such as name, email, or device IDs.</li>
          <li>• We <strong>do not use tracking SDKs</strong> or behavioral analytics tools inside the app.</li>
        </ul>
      </section>

      {/* Section 2 */}
      <section id="device-permissions" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">02.</span> Device Permissions &amp; Internal Storage
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          To operate locally, the app requires minimal sandboxed Android permissions:
        </p>
        <div className="space-y-3 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-secondary/40 border border-border/60">
            <strong className="text-foreground block font-bold mb-0.5">Read/Write Storage Permission</strong>
            <span className="text-muted-foreground font-light">
              Required solely to allow you to select PDF files from your storage and save the merged output back to your device.
            </span>
          </div>
          <div className="p-3.5 rounded-xl bg-secondary/40 border border-border/60">
            <strong className="text-foreground block font-bold mb-0.5">Internet Access</strong>
            <span className="text-muted-foreground font-light">
              Standard framework permission bundled by the underlying Expo container. The production app does not transmit any document data over the internet.
            </span>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="play-safety" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">03.</span> Google Play Data Safety Declarations
        </h2>
        <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 text-xs font-mono space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Does the app collect or share user data?</span>
            <span className="text-emerald-500 font-bold">No</span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Is data encrypted in transit?</span>
            <span className="text-foreground font-bold">N/A (No data transmitted)</span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground">
            <span>Data Deletion Mechanism:</span>
            <span className="text-foreground font-bold">N/A (Zero data stored remotely)</span>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="libraries" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">04.</span> Third-Party Runtime Libraries
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
          The app utilizes trusted, vetted open-source libraries that execute purely within the device sandbox:
        </p>
        <ul className="space-y-1.5 text-xs font-mono text-muted-foreground">
          <li>• <strong>React Native:</strong> Core mobile UI framework.</li>
          <li>• <strong>Expo SDK:</strong> Device filesystem abstractions.</li>
          <li>• <strong>pdf-lib:</strong> Client-side binary PDF document manipulation.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="children-privacy" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">05.</span> Children&apos;s Privacy Protection
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">
          PDF Manager Pro does not address anyone under the age of 13 and collects zero personal data from any user regardless of age.
        </p>
      </section>

      {/* Section 6 */}
      <section id="app-security" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">06.</span> Local File Security &amp; Sandboxing
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">
          Your documents remain strictly confined to your phone internal storage and are protected by Android standard application sandboxing.
        </p>
      </section>

      {/* Section 7 */}
      <section id="contact-app" className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
        <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm">07.</span> Developer Contact &amp; Inquiries
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          For technical inquiries regarding PDF Manager Pro:
        </p>
        <div className="p-4 rounded-xl bg-secondary/50 border border-border/60 text-xs font-mono space-y-1">
          <span className="text-foreground font-bold block">Developer Team: RHD Softwaresolutions LLP</span>
          <span>Support Email: <a href="mailto:support@rhdynamics.in" className="text-primary hover:underline font-bold">support@rhdynamics.in</a></span><br />
          <span>Executive Email: <a href="mailto:founder@rhdynamics.in" className="text-primary hover:underline font-bold">founder@rhdynamics.in</a></span>
        </div>
      </section>
    </LegalPageLayout>
  );
}