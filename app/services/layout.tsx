import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development, Custom ERP & HSMS Services",
  description:
    "Explore RH Dynamics services: Custom Software Development, Hospital Management Systems (HSMS), Enterprise ERP solutions, High-Speed Web Applications, and Data-Driven Performance Marketing in Guwahati, Assam & Globally.",
  keywords: [
    "software development services guwahati",
    "hospital management system hsms assam",
    "custom erp development northeast india",
    "web application development assam",
    "mobile app development guwahati",
    "performance marketing agency guwahati",
    "seo services northeast india",
    "campus it infrastructure lab setup",
    "enterprise software development india"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/services",
  },
  openGraph: {
    title: "Software Solutions, Custom ERP & HSMS Services | RH Dynamics",
    description:
      "Enterprise-grade software solutions, Hospital Information Systems, and full-funnel digital dominance designed in Guwahati, Assam for global scale.",
    url: "https://rhdynamics.in/services",
    images: ["/opengraph-image"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
