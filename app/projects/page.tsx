import { Metadata } from "next";
import { Portfolio } from "@/components/sections/portfolio";
import { RecentWork } from "@/components/sections/recent-work";

export const metadata: Metadata = {
    title: "Our Projects | RH Dynamics",
    description: "Explore our portfolio of websites, applications, and digital solutions we've developed for businesses across Northeast India.",
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen py-8">
            <div className="container px-4 mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore our portfolio of websites, applications, and digital solutions we've developed for businesses across Northeast India. Each project demonstrates our commitment to creating impactful digital experiences.
                </p>
            </div>

            <RecentWork />
            <Portfolio />
        </div>
    );
} 