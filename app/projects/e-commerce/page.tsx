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
        <div className="container mx-auto px-4 py-12">
            <Link href="/projects" className="flex items-center text-primary hover:text-primary/80 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>

            <h1 className="text-4xl font-bold mb-6">E-Commerce Platform</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                <div className="lg:col-span-2">
                    <div className="rounded-lg overflow-hidden border mb-6">
                        <Image
                            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop"
                            alt="E-Commerce Platform"
                            width={1200}
                            height={675}
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                    <p className="text-muted-foreground mb-6">
                        This e-commerce platform was designed to provide a seamless shopping experience for customers
                        while giving business owners powerful tools to manage their inventory, track orders, and grow their business.
                        The platform includes real-time inventory management, secure payment processing, and a responsive
                        design that works beautifully on all devices.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                        <li>User-friendly product catalog with advanced filtering</li>
                        <li>Secure payment processing integration</li>
                        <li>Real-time inventory management</li>
                        <li>Customer account management</li>
                        <li>Order tracking and history</li>
                        <li>Responsive design for all devices</li>
                        <li>Admin dashboard with sales analytics</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
                    <p className="text-muted-foreground mb-6">
                        Built using Next.js for the frontend, with TypeScript for type safety. The backend uses
                        Supabase for database, authentication, and storage solutions. Payment processing is handled
                        securely through integration with popular payment gateways.
                    </p>
                </div>

                <div>
                    <div className="rounded-lg border p-6 mb-6">
                        <h3 className="text-xl font-bold mb-4">Project Details</h3>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold mb-1">Client</h4>
                                <p className="text-muted-foreground">Regional Retail Business</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-1">Timeline</h4>
                                <p className="text-muted-foreground">3 months</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-1">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Next.js</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">TypeScript</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Supabase</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Tailwind CSS</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Payment APIs</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-1">Services Provided</h4>
                                <ul className="list-disc pl-6 text-muted-foreground text-sm">
                                    <li>Web Development</li>
                                    <li>UI/UX Design</li>
                                    <li>Database Design</li>
                                    <li>API Integration</li>
                                    <li>Testing & Deployment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border p-6">
                        <h3 className="text-xl font-bold mb-4">Want a Similar Solution?</h3>
                        <p className="text-muted-foreground mb-6">
                            If you're looking for a custom e-commerce solution for your business, contact us today for a consultation.
                        </p>
                        <Button asChild className="w-full">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
} 