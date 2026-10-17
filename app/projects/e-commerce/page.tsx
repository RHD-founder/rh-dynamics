import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "E-Commerce Platform | RH Dynamics",
    description: "A full-stack e-commerce solution with real-time inventory management developed by RH Dynamics",
};

export default function EcommercePage() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
            <Link href="/projects" className="inline-flex items-center text-xs sm:text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
            </Link>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-8 text-foreground">
                E-Commerce Platform
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
                <div className="lg:col-span-2">
                    <div className="rounded-2xl overflow-hidden border border-border/80 shadow-xl mb-8 bg-card">
                        <Image
                            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop"
                            alt="E-Commerce Platform"
                            width={1200}
                            height={675}
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-foreground">Project Overview</h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                        This e-commerce platform was designed to provide a seamless shopping experience for customers
                        while giving business owners powerful tools to manage their inventory, track orders, and grow their business.
                        The platform includes real-time inventory management, secure payment processing, and a responsive
                        design that works beautifully on all devices.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-foreground">Key Features</h2>
                    <ul className="list-disc pl-6 mb-8 space-y-2.5 text-base text-muted-foreground leading-relaxed">
                        <li>User-friendly product catalog with advanced filtering</li>
                        <li>Secure payment processing integration</li>
                        <li>Real-time inventory management</li>
                        <li>Customer account management</li>
                        <li>Order tracking and history</li>
                        <li>Responsive design for all devices</li>
                        <li>Admin dashboard with sales analytics</li>
                    </ul>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-foreground">Technical Details</h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                        Built using Next.js for the frontend, with TypeScript for type safety. The backend uses
                        Supabase for database, authentication, and storage solutions. Payment processing is handled
                        securely through integration with popular payment gateways.
                    </p>
                </div>

                <div>
                    <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 sm:p-8 mb-6 shadow-lg">
                        <h3 className="text-xl font-heading font-bold mb-6 text-foreground">Project Details</h3>

                        <div className="space-y-5">
                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Client</h4>
                                <p className="text-base font-medium text-foreground">Regional Retail Business</p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Timeline</h4>
                                <p className="text-base font-medium text-foreground">3 months</p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">Next.js</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">TypeScript</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">Supabase</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">Tailwind CSS</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">Payment APIs</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Services Provided</h4>
                                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5 leading-relaxed">
                                    <li>Web Development</li>
                                    <li>UI/UX Design</li>
                                    <li>Database Design</li>
                                    <li>API Integration</li>
                                    <li>Testing &amp; Deployment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 sm:p-8 shadow-lg">
                        <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Want a Similar Solution?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            If you're looking for a custom e-commerce solution for your business, contact us today for a consultation.
                        </p>
                        <Button asChild className="w-full h-11 text-sm font-semibold rounded-xl">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
} 