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
        <div className="container mx-auto px-4 py-12">
            <Link href="/projects" className="flex items-center text-primary hover:text-primary/80 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>

            <h1 className="text-4xl font-bold mb-6">Healthcare App</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                <div className="lg:col-span-2">
                    <div className="rounded-lg overflow-hidden border mb-6">
                        <Image
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                            alt="Healthcare App"
                            width={1200}
                            height={675}
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                    <p className="text-muted-foreground mb-6">
                        This healthcare application was developed to streamline appointment scheduling and patient
                        management for healthcare providers in Northeast India. The app allows patients to
                        book appointments, view medical records, and communicate with their healthcare providers.
                        For clinic staff, it provides tools to manage appointments, patient information, and send
                        reminders to reduce no-shows.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                        <li>Online appointment booking system</li>
                        <li>Patient portal with medical history access</li>
                        <li>Doctor availability management</li>
                        <li>Automated appointment reminders</li>
                        <li>Secure messaging between patients and providers</li>
                        <li>Cross-platform mobile application (iOS and Android)</li>
                        <li>Staff dashboard with daily schedules</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
                    <p className="text-muted-foreground mb-6">
                        Developed using React Native to ensure cross-platform compatibility on both iOS and Android devices.
                        The backend is powered by Node.js and MongoDB for flexible data storage and retrieval.
                        The application implements strict security measures to ensure patient data is protected according
                        to healthcare privacy standards.
                    </p>
                </div>

                <div>
                    <div className="rounded-lg border p-6 mb-6">
                        <h3 className="text-xl font-bold mb-4">Project Details</h3>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold mb-1">Client</h4>
                                <p className="text-muted-foreground">Riya Polyclinic</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-1">Timeline</h4>
                                <p className="text-muted-foreground">4 months</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-1">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">React Native</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Node.js</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">MongoDB</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Express</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">JWT</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-1">Services Provided</h4>
                                <ul className="list-disc pl-6 text-muted-foreground text-sm">
                                    <li>Mobile App Development</li>
                                    <li>UI/UX Design</li>
                                    <li>Backend API Development</li>
                                    <li>Database Design</li>
                                    <li>Testing & Deployment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border p-6">
                        <h3 className="text-xl font-bold mb-4">Want a Similar Solution?</h3>
                        <p className="text-muted-foreground mb-6">
                            If you're a healthcare provider looking for a custom appointment and patient management solution, contact us today for a consultation.
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