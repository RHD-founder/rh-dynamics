import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { RecentWork } from "@/components/sections/recent-work";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services/>
      <RecentWork />
      <Partners />
      <Testimonials />
    </main>
  );
}