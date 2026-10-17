import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Healthcare App | RH Dynamics",
    description: "Mobile application for healthcare providers with appointment scheduling developed by RH Dynamics",
};

export default function HealthcarePage() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
            <Link href="/projects" className="inline-flex items-center text-xs sm:text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
            </Link>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-8 text-foreground">
                Healthcare App
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
                <div className="lg:col-span-2">
                    <div className="rounded-2xl overflow-hidden border border-border/80 shadow-xl mb-8 bg-card">
                        <Image
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                            alt="Healthcare App"
                            width={1200}
                            height={675}
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-foreground">Project Overview</h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                        This healthcare application was developed to streamline appointment scheduling and patient
                        management for healthcare providers in Northeast India. The app allows patients to
                        book appointments, view medical records, and communicate with their healthcare providers.
                        For clinic staff, it provides tools to manage appointments, patient information, and send
                        reminders to reduce no-shows.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-foreground">Key Features</h2>
                    <ul className="list-disc pl-6 mb-8 space-y-2.5 text-base text-muted-foreground leading-relaxed">
                        <li>Online appointment booking system</li>
                        <li>Patient portal with medical history access</li>
                        <li>Doctor availability management</li>
                        <li>Automated appointment reminders</li>
                        <li>Secure messaging between patients and providers</li>
                        <li>Cross-platform mobile application (iOS and Android)</li>
                        <li>Staff dashboard with daily schedules</li>
                    </ul>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-foreground">Technical Details</h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                        Developed using React Native to ensure cross-platform compatibility on both iOS and Android devices.
                        The backend is powered by Node.js and MongoDB for flexible data storage and retrieval.
                        The application implements strict security measures to ensure patient data is protected according
                        to healthcare privacy standards.
                    </p>
                </div>

                <div>
                    <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 sm:p-8 mb-6 shadow-lg">
                        <h3 className="text-xl font-heading font-bold mb-6 text-foreground">Project Details</h3>

                        <div className="space-y-5">
                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Client</h4>
                                <p className="text-base font-medium text-foreground">Regional Healthcare Provider</p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Timeline</h4>
                                <p className="text-base font-medium text-foreground">4 months</p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">React Native</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">Node.js</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">MongoDB</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">Express</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">JWT</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Services Provided</h4>
                                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5 leading-relaxed">
                                    <li>Mobile App Development</li>
                                    <li>UI/UX Design</li>
                                    <li>Backend API Development</li>
                                    <li>Database Design</li>
                                    <li>Testing &amp; Deployment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 sm:p-8 shadow-lg">
                        <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Want a Similar Solution?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            If you're a healthcare provider looking for a custom appointment and patient management solution, contact us today for a consultation.
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