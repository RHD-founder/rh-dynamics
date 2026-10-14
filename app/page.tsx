import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { RecentWork } from "@/components/sections/recent-work";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "RH Dynamics | Systems Engineering, Hospital Software & Cloud ERP Guwahati",
  description:
    "RHD Softwaresolutions LLP (ACN-1931). Startup India recognized engineering firm architecting ABDM hospital management systems (RH-HSMS), custom cloud ERPs, and campus optical networks in Assam and Northeast India.",
  keywords: [
    "rh dynamics",
    "software company guwahati",
    "hospital management software assam",
    "rh-hsms",
    "custom erp development northeast india",
    "campus networking assam",
    "systems engineering guwahati"
  ],
  alternates: {
    canonical: "https://rhdynamics.in",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <RecentWork />
      <Partners />
      <Testimonials />
      <CTA />
    </div>
  );
}