import type { Metadata } from "next";
import { ContactClientPage } from "@/components/pages/contact-client-page";

export const metadata: Metadata = {
  title: "Contact RH Dynamics | Software & Systems Engineering Hub Guwahati",
  description:
    "Connect directly with RH Dynamics' senior systems engineers and software architects near Downtown Hospital, Sarumotoria, Guwahati. Fast technical triage within 2 hours for custom software, HSMS, and enterprise ERPs.",
  keywords: [
    "contact rh dynamics",
    "software company near downtown hospital guwahati",
    "it company contact guwahati",
    "hire software developers assam",
    "rh dynamics phone number",
    "software company in guwahati contact",
    "hospital software developers assam"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/contact",
  },
  openGraph: {
    title: "Contact RH Dynamics | Engineering Leads in Guwahati, Assam",
    description:
      "Direct technical consultation for clinical software, enterprise ERPs, and cloud architecture across Assam and Northeast India.",
    url: "https://rhdynamics.in/contact",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact RH Dynamics | Engineering Leads in Guwahati, Assam",
    description:
      "Direct lines to systems architects for clinical software, enterprise ERPs, and infrastructure deployments.",
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  return <ContactClientPage />;
}
