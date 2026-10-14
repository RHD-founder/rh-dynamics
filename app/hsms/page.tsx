import type { Metadata } from "next";
import { HsmsClientPage } from "@/components/pages/hsms-client-page";

export const metadata: Metadata = {
  title: "RH-HSMS | #1 Hospital Management System & Healthcare Software in Assam",
  description:
    "RH-HSMS is Northeast India's premier ABDM-compliant Hospital Information System (HIS). Features OPD/IPD tracking, doctor EMR, pathology LIS with WhatsApp reports, pharmacy inventory, and Ayushman Bharat / PMJAY billing.",
  keywords: [
    "hospital management system guwahati",
    "hospital software assam",
    "best hsms software northeast india",
    "abdm compliant hospital software",
    "clinic management software guwahati",
    "pathology lab software with whatsapp reports",
    "ayushman bharat pmjay hospital billing software",
    "nabh compliant his software india",
    "hospital software company in guwahati"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/hsms",
  },
  openGraph: {
    title: "RH-HSMS | Enterprise Hospital Management Software in Guwahati, Assam",
    description:
      "Transform your healthcare facility with RH-HSMS. Trusted by leading regional hospitals and diagnostics centers in Northeast India. Book a free live demonstration.",
    url: "https://rhdynamics.in/hsms",
    images: ["/opengraph-image"],
  },
};

export default function HsmsPage() {
  return <HsmsClientPage />;
}
