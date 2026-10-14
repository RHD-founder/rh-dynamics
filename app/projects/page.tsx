import { Metadata } from "next";
import { ProjectsClientPage } from "@/components/pages/projects-client-page";

export const metadata: Metadata = {
  title: "Case Studies & Verified Deployments | RH Dynamics Guwahati",
  description:
    "Explore verified hospital management systems, campus networking architectures, and enterprise cloud ERPs delivered across Assam and Northeast India by RH Dynamics.",
  keywords: [
    "rh dynamics portfolio",
    "software case studies guwahati",
    "healthcare web development assam",
    "hospital management software projects",
    "campus networking projects assam",
    "enterprise software case studies northeast india"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/projects",
  },
  openGraph: {
    title: "Case Studies & Client Deployments | RH Dynamics",
    description:
      "Proven engineering impact across healthcare, education, and enterprise infrastructure in Assam and Northeast India.",
    url: "https://rhdynamics.in/projects",
    images: ["/opengraph-image"],
  },
};

export default function ProjectsPage() {
  return <ProjectsClientPage />;
}