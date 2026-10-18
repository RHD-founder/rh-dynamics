import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { RecentWork } from "@/components/sections/recent-work";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "RH Dynamics | Software Company, Hospital Systems (HSMS/LIS) & Cloud ERP Guwahati",
  description:
    "RHD Software Solutions LLP (ACN-1931). Startup India recognized software engineering firm building healthcare management systems (RH-HSMS), clinical LIS, custom enterprise ERPs, and high-performance web & mobile platforms.",
  keywords: [
    "rh dynamics",
    "software company guwahati",
    "hospital management software assam",
    "rh-hsms",
    "laboratory information system lis",
    "custom erp development northeast india",
    "web development guwahati",
    "systems engineering assam"
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