import { Metadata } from "next";
import { Portfolio } from "@/components/sections/portfolio";

export const metadata: Metadata = {
    title: "Client Success & Case Studies | RH Dynamics",
    description: "Explore how we drive growth for industry leaders in healthcare, infrastructure, and beyond.",
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen pt-32 bg-background">
            {/* Page Header */}
            <div className="container px-4 mx-auto text-center mb-16 relative z-10">
                <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <span className="text-sm font-semibold tracking-wider uppercase">Strategic Partnerships</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tight">
                    Client <span className="text-gradient">Success Stories</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    We don't just build software or run ads. We architect comprehensive digital ecosystems and execute aggressive growth strategies that position our partners as undisputed market leaders.
                </p>
            </div>

            {/* The new categorized Portfolio section replaces the need for the redundant RecentWork on the same page */}
            <Portfolio />
        </div>
    );
}