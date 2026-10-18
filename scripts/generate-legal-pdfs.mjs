import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

const imgBuffer = fs.readFileSync("public/images/rh-official-logo.jpg");
const base64Logo = "data:image/jpeg;base64," + imgBuffer.toString("base64");

function createLegalDoc(title, subtitle, effectiveDate, version, sections) {
  const doc = new jsPDF({ format: "a4", unit: "mm" });
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;

  function addHeaderAndFooter(pageNum, totalPages) {
    // Top Letterhead
    doc.addImage(base64Logo, "JPEG", 164, 10, 28, 28);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text("RHD Software Solutions LLP", margin, 16);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105); // slate-600
    doc.text("LLPIN: ACN-1931 | DPIIT Startup India Certified | MSME Registered", margin, 21);
    doc.text("Corporate HQ: Goranga, Golaghat, Assam 785603 | Guwahati Hub: Sarumotoria, Guwahati", margin, 25);
    doc.text("Official Registry: founder@rhdynamics.in | Website: https://rhdynamics.in", margin, 29);

    // Header divider line
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.4);
    doc.line(margin, 34, pageWidth - margin, 34);

    // Footer
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 14, pageWidth - margin, pageHeight - 14);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text("RHD Software Solutions LLP (RH Dynamics) | Official Statutory Document", margin, pageHeight - 9);
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin - 18, pageHeight - 9);
  }

  let y = 44;

  // Title Block
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42);
  doc.text(title, margin, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  const subtitleLines = doc.splitTextToSize(subtitle, contentWidth);
  doc.text(subtitleLines, margin, y);
  y += subtitleLines.length * 4.5 + 3;

  // Metadata Box
  doc.setFillColor(248, 250, 252); // slate-50
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.roundedRect(margin, y, contentWidth, 10, 2, 2, "FD");

  doc.setFontSize(7.5);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 41, 59);
  doc.text(`Effective: ${effectiveDate}`, margin + 4, y + 6.5);
  doc.text(`Governance: ${version}`, margin + 50, y + 6.5);
  doc.text("Jurisdiction: Guwahati / Golaghat, Assam", margin + 105, y + 6.5);
  y += 16;

  // Sections
  sections.forEach((sec, idx) => {
    // Check if new page needed
    if (y > pageHeight - 45) {
      doc.addPage();
      y = 44;
    }

    // Section Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(`${String(idx + 1).padStart(2, "0")}. ${sec.title}`, margin, y);
    y += 5.5;

    // Section Content
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);

    const paragraphs = sec.content.split("\n\n");
    paragraphs.forEach((para) => {
      if (y > pageHeight - 25) {
        doc.addPage();
        y = 44;
      }

      if (para.startsWith("•") || para.startsWith("-")) {
        const lines = doc.splitTextToSize(para, contentWidth - 4);
        doc.text(lines, margin + 4, y);
        y += lines.length * 4.2 + 2;
      } else {
        const lines = doc.splitTextToSize(para, contentWidth);
        doc.text(lines, margin, y);
        y += lines.length * 4.2 + 3;
      }
    });

    y += 4;
  });

  // Official Signatory Block on last page
  if (y > pageHeight - 55) {
    doc.addPage();
    y = 44;
  }

  y += 6;
  doc.setFillColor(241, 245, 249);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, y, contentWidth, 32, 2, 2, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Official Entity Execution & Corporate Attestation", margin + 5, y + 6);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text("For & on behalf of: RHD Software Solutions LLP (LLPIN: ACN-1931)", margin + 5, y + 12);
  doc.text("Designated Corporate Officers & Founders | Recognized under DPIIT Startup India", margin + 5, y + 16);
  doc.text("Registered HQ: Near AGV Bank, Goranga, Golaghat, Assam 785603", margin + 5, y + 20);
  doc.text("Contact: founder@rhdynamics.in | +91 86388 75149", margin + 5, y + 24);

  // Apply header & footer with correct total page count
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    addHeaderAndFooter(i, totalPages);
  }

  return doc;
}

// 1. Corporate Rule Book
const ruleBookSections = [
  {
    title: "Corporate Identity & Accreditation",
    content: "RH Dynamics operates legally and commercially under RHD Software Solutions LLP, incorporated under the Limited Liability Partnership Act 2008, Ministry of Corporate Affairs, Government of India.\n\n• LLPIN: ACN-1931\n• National Accreditation: Recognized under Startup India (DPIIT Certificate)\n• MSME Category: Registered Micro, Small & Medium Enterprise"
  },
  {
    title: "How Deals Are Initialized (Project Onboarding Protocol)",
    content: "To guarantee total architectural clarity and eliminate speculative scope creep, every commercial engagement follows our 4-step onboarding protocol:\n\n1. Discovery & Architectural Audit: Comprehensive technical consultation via Phone, WhatsApp, Google Meet, or in-person at our Guwahati or Upper Assam hubs.\n2. Formal Statement of Work (SOW): A legally binding technical blueprint specifying user stories, database schemas, third-party APIs, and deployment milestones.\n3. Mutual NDA & Contract Execution: Both parties execute non-disclosure and intellectual property agreements.\n4. Prepaid Sprint Mobilization: Work commences strictly upon receipt of the agreed 50% upfront sprint mobilization fee."
  },
  {
    title: "Prepaid Milestone & Commercial Structure",
    content: "RH Dynamics strictly enforces a milestone-driven commercial structure:\n\n• Milestone 1 (50% Advance): Mobilizes software architects, database designers, and full-stack developers. Covers environment containerization, core APIs, and UI engineering.\n• Milestone 2 (50% Final Settlement): Invoiced upon formal User Acceptance Testing (UAT) sign-off. Authorizes live DNS cutover, cloud provisioning, and private repository ownership.\n\nFor RH CORE™ SaaS Subscriptions (Hospital HSMS & LIS): Billed in advance on a recurring monthly or annual basis. Cloud hosting, security updates, and ABDM patches are included."
  },
  {
    title: "Engineering Sprints & UAT Sign-Off",
    content: "All engineering adheres to Agile two-week sprint reviews. Clients are provided an authenticated staging environment for testing.\n\n• Formal UAT Sign-Off: Client has 10 business days to test and confirm functional compliance against the SOW.\n• 30-Day Post-Launch Warranty: Every custom deployment includes 30 days of unconditional, zero-cost bug remediation for reproducible errors."
  },
  {
    title: "Code Base Sovereignty & Cloud SaaS Models",
    content: "• Custom Software Sovereignty: For bespoke software, clients receive complete IP ownership, Docker manifests, and private GitHub repository transfers upon final milestone settlement.\n• RH CORE™ Cloud SaaS: For healthcare centers choosing our managed hospital software (HSMS/LIS), platforms are licensed as fully managed cloud services with 99.9% uptime."
  },
  {
    title: "Service Level Agreement (< 2-Hour SLA)",
    content: "We commit to an uncompromised < 2-Hour SLA for critical production incidents. Our SLA applies to clients worldwide, across India, and across all districts of Assam.\n\n• Critical Severity: < 2-Hour triage and developer mobilization.\n• Dispatch Channels: Direct Phone, dedicated WhatsApp business escalation, Google Meet, or in-person engineering dispatch across Assam."
  },
  {
    title: "Client Confidentiality & Mutual NDA",
    content: "We enforce strict competitor confidentiality. We will never share client technical architectures, proprietary business logic, patient databases, or trade secrets with competitors or unauthorized parties."
  },
  {
    title: "Dispute Resolution & Jurisdiction",
    content: "This operating policy and all commercial contracts are governed by the laws of India. Any unresolved legal dispute shall be subject to the exclusive jurisdiction of the competent courts in Guwahati or Golaghat, Assam, India."
  }
];

// 2. Terms and Conditions
const termsSections = [
  {
    title: "Binding Legal Agreement & Parties",
    content: "These Terms and Conditions constitute a legally binding agreement between RHD Software Solutions LLP (LLPIN: ACN-1931) and the commissioned Client. By executing a Statement of Work (SOW), issuing a purchase order, or authorizing payment, Client agrees to these Terms."
  },
  {
    title: "Engagement SOW & 50/50 Milestone Terms",
    content: "All custom software projects are executed under an agreed Statement of Work (SOW) structured with 50% upfront sprint mobilization and 50% upon successful UAT sign-off prior to production deployment."
  },
  {
    title: "RH CORE™ SaaS Subscription Terms",
    content: "Clinical subscriptions for RH CORE™ HSMS and LIS are billed prepaid monthly or annually. Non-payment past a 7-day grace period may trigger temporary read-only access until account regularization."
  },
  {
    title: "Intellectual Property & Code Ownership",
    content: "For bespoke custom projects, Client receives 100% full IP transfer and private repository ownership upon final milestone settlement. Proprietary frameworks powering RH CORE™ remain the exclusive property of RHD Software Solutions LLP."
  },
  {
    title: "User Acceptance Testing & 30-Day Warranty",
    content: "Clients receive a 10-business-day staging inspection window. Post-launch, RH Dynamics provides 30 days of unconditional defect remediation for any deviations from the SOW."
  },
  {
    title: "Service Level Agreement (< 2-Hour SLA)",
    content: "RH Dynamics commits to a < 2-hour SLA for critical production interruptions via direct phone, WhatsApp business escalation, Google Meet, and on-site support across Assam."
  },
  {
    title: "Limitation of Liability & Governing Jurisdiction",
    content: "RHD Software Solutions LLP liability shall not exceed the total fees paid under the specific SOW in the preceding 3-month period. Exclusive jurisdiction resides in the courts of Guwahati or Golaghat, Assam, India."
  }
];

// 3. Privacy Policy
const privacySections = [
  {
    title: "Overview & Regulatory Mandate",
    content: "RHD Software Solutions LLP (LLPIN: ACN-1931) operates in strict compliance with the Digital Personal Data Protection (DPDP) Act 2023 and the Information Technology Act 2000."
  },
  {
    title: "Information We Collect",
    content: "We collect only data necessary to deliver enterprise software services:\n\n• Direct Contact Information: Name, corporate email, phone, company name, and project scope submitted via inquiry forms.\n• Review Data: Testimonials and performance metrics voluntarily provided via our review portal (/review).\n• Automated Error Telemetry: Browser agent, IP, and JavaScript error stacks captured when an incident occurs to facilitate immediate patch mobilization."
  },
  {
    title: "Zero Data Resale Guarantee",
    content: "RHD Software Solutions LLP has never sold, rented, or brokered client personal or commercial data to third-party advertisers or data brokers. Your data is used exclusively to deliver commissioned software."
  },
  {
    title: "Data Security & Healthcare Privacy",
    content: "All transactions utilize TLS 1.3 in-transit and AES-256 at-rest encryption. Clinical patient records within RH CORE™ HSMS and LIS are segregated into isolated client tenant databases compliant with ABDM standards."
  },
  {
    title: "Grievance Officer Contact",
    content: "For privacy inquiries or statutory requests under the DPDP Act 2023:\n\nGrievance Officer: founder@rhdynamics.in\nRegistered Address: Near AGV Bank, Goranga, Golaghat, Assam 785603"
  }
];

// 4. Cancellation and Refunds
const refundSections = [
  {
    title: "Nature of Custom Software Engineering",
    content: "Custom software engineering involves the dedicated allocation of senior developer hours and compute infrastructure. Unlike retail goods, engineering sprints represent irreversible labor commitments."
  },
  {
    title: "Advance Sprint Mobilization Non-Refundability",
    content: "The 50% upfront sprint mobilization payment is strictly non-refundable once engineering sprints have commenced."
  },
  {
    title: "Mid-Project Termination & Asset Handover",
    content: "If a Client cancels before Milestone 2 completion, the final 50% payment is waived, and all code and assets completed under Milestone 1 are transferred to the Client."
  },
  {
    title: "RH CORE™ SaaS Subscription Cancellations",
    content: "Clients may cancel cloud SaaS subscriptions anytime prior to the start of the next renewal cycle with zero penalties. Complete database backups (SQL/JSON) are provided within 14 business days."
  },
  {
    title: "Warranty Remediation over Cash Refunds",
    content: "Under our 30-Day Post-Launch Warranty, reproducible defects are repaired at zero additional charge in lieu of monetary refunds."
  }
];

// 5. Digital Shipping Policy
const shippingSections = [
  {
    title: "Pure Digital & Electronic Delivery",
    content: "All software platforms, clinical management systems, mobile applications, APIs, and digital deliverables by RHD Software Solutions LLP are delivered 100% electronically. No physical media or courier parcels are dispatched."
  },
  {
    title: "Deployment Channels & Protocols",
    content: "Delivery is executed via:\n\n• Cloud Production Cutover: Deployment to AWS, Google Cloud, or Vercel with DNS cutover.\n• Git Repository Handover: Transfer of private GitHub/GitLab repositories upon Milestone 2 settlement.\n• Instant SaaS Tenant Provisioning: Electronic issuance of tenant login credentials within 24 to 48 hours."
  },
  {
    title: "Worldwide Delivery",
    content: "Electronic deliveries operate worldwide with zero shipping charges, import taxes, or geographical delays."
  }
];

// 6. PDF Manager Pro App Privacy
const appPrivacySections = [
  {
    title: "Local-First Architecture (Zero Data Collection)",
    content: "PDF Manager Pro processes all files locally on your device processor. Documents are never uploaded to any remote server or third-party cloud. Zero PII or telemetry data is collected."
  },
  {
    title: "Device Permissions & Google Play Safety",
    content: "• Storage Permission: Used strictly to select and save PDF files on the device.\n• Data Safety: Does not collect or share any user data. Zero tracking SDKs."
  },
  {
    title: "Developer Contact",
    content: "Engineered by RHD Software Solutions LLP.\nSupport Contact: founder@rhdynamics.in | support@rhdynamics.in"
  }
];

// Generate all 6 official PDFs
console.log("Generating official legal PDF documents...");

const docs = [
  {
    filename: "RHD-Corporate-Rule-Book.pdf",
    title: "Corporate Rule Book & Operating Policy",
    subtitle: "Official operating framework, 50/50 milestone payment terms, and delivery standards of RHD Software Solutions LLP.",
    effectiveDate: "October 2026",
    version: "v3.1 Production",
    sections: ruleBookSections
  },
  {
    filename: "RHD-Terms-and-Conditions.pdf",
    title: "Master Terms and Conditions",
    subtitle: "Commercial contract governing software development, cloud licensing, and technical services.",
    effectiveDate: "October 2026",
    version: "v3.1 Standard",
    sections: termsSections
  },
  {
    filename: "RHD-Privacy-Policy.pdf",
    title: "Corporate Privacy Policy",
    subtitle: "Data protection framework compliant with the Digital Personal Data Protection (DPDP) Act 2023.",
    effectiveDate: "October 2026",
    version: "v3.1 Compliance",
    sections: privacySections
  },
  {
    filename: "RHD-Cancellation-and-Refund-Policy.pdf",
    title: "Cancellation & Refund Policy",
    subtitle: "Commercial terms regarding milestone sprint payments, bespoke engineering, and SaaS subscriptions.",
    effectiveDate: "October 2026",
    version: "v3.1 Standard",
    sections: refundSections
  },
  {
    filename: "RHD-Digital-Shipping-Policy.pdf",
    title: "Digital Delivery & Shipping Policy",
    subtitle: "Electronic delivery protocols, cloud software deployments, and repository handovers.",
    effectiveDate: "October 2026",
    version: "v3.1 Standard",
    sections: shippingSections
  },
  {
    filename: "RHD-App-Privacy-Policy.pdf",
    title: "Privacy Policy: PDF Manager Pro",
    subtitle: "Google Play Data Safety disclosure for PDF Manager Pro by RHD Software Solutions LLP.",
    effectiveDate: "November 2025",
    version: "v1.2 Mobile",
    sections: appPrivacySections
  }
];

docs.forEach((docItem) => {
  const doc = createLegalDoc(
    docItem.title,
    docItem.subtitle,
    docItem.effectiveDate,
    docItem.version,
    docItem.sections
  );
  const filePath = path.join("public", "docs", docItem.filename);
  doc.save(filePath);
  console.log(`✓ Generated ${docItem.filename}`);
});

console.log("All 6 official legal PDFs generated in public/docs/ successfully!");
