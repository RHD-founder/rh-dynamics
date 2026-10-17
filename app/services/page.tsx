import type { Metadata } from "next";
import { ServicesClientPage } from "@/components/pages/services-client-page";

export const metadata: Metadata = {
  title: "Services & Capabilities | Custom Software, HSMS & ERP Solutions Guwahati",
  description:
    "Explore RH Dynamics' full capabilities catalogue. Transparent pricing and timelines for ABDM-compliant Hospital Management Systems (RH-HSMS), custom cloud ERPs, web apps, and enterprise SLA maintenance in Assam & Northeast India.",
  keywords: [
    "software development services guwahati",
    "hospital management system pricing",
    "custom erp development assam",
    "web development pricing guwahati",
    "it infrastructure and networking assam",
    "software maintenance sla guwahati",
    "it company in guwahati",
    "best software developers in assam"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/services",
  },
  openGraph: {
    title: "Services & Capabilities | RH Dynamics Guwahati",
    description:
      "Explore RH Dynamics' full capabilities catalogue. Transparent pricing and timelines for HSMS, custom ERPs, and cloud applications in Northeast India.",
    url: "https://rhdynamics.in/services",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Capabilities | RH Dynamics Guwahati",
    description:
      "Explore RH Dynamics' full capabilities catalogue with transparent pricing, module specifications, and SLAs.",
    images: ["/opengraph-image"],
  },
};

export default function ServicesPage() {
  return <ServicesClientPage />;
}
