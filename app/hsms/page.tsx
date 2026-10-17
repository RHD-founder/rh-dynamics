import type { Metadata } from "next";
import { HsmsClientPage } from "@/components/pages/hsms-client-page";

export const metadata: Metadata = {
  title: "RH CORE™ | Next-Gen Hospital Software (HSMS) & Clinical LIS | v1.0 Live",
  description:
    "RH CORE v1.0 by RH Dynamics is the premier, continuously-updated healthcare operating system. Unifying RH CORE HSMS (Hospital Management) and RH CORE LIS (Laboratory Automation) with ABDM M1-M3, WhatsApp reports, and rapid < 2-hour SLA.",
  keywords: [
    "rh core",
    "rh core hsms",
    "rh core lis",
    "hospital management software guwahati",
    "hospital software assam",
    "laboratory information system lis northeast india",
    "abdm compliant hospital software",
    "pathology lab software with whatsapp reports",
    "ayushman bharat pmjay hospital billing software",
    "hospital software company in guwahati"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/hsms",
  },
  openGraph: {
    title: "RH CORE™ | Next-Gen Hospital Software (HSMS) & Clinical LIS | v1.0 Live",
    description:
      "Transform clinical operations with RH CORE v1.0. Continuously updated healthcare software unifying hospital wards, doctor EMR, pathology LIS, and statutory compliance.",
    url: "https://rhdynamics.in/hsms",
    images: ["/opengraph-image"],
  },
};

export default function HsmsPage() {
  return <HsmsClientPage />;
}
