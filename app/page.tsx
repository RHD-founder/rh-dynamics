import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { RecentWork } from "@/components/sections/recent-work";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Portfolio } from "@/components/sections/portfolio";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <RecentWork />
      <Portfolio />
      <Partners />
      <Testimonials />
      <CTA />
    </div>
  );
}