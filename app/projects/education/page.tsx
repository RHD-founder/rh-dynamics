import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Educational Platform | RH Dynamics",
    description: "Online learning platform with video streaming and interactive quizzes developed by RH Dynamics",
};

export default function EducationPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Link href="/projects" className="flex items-center text-primary hover:text-primary/80 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>

            <h1 className="text-4xl font-bold mb-6">Educational Platform</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                <div className="lg:col-span-2">
                    <div className="rounded-lg overflow-hidden border mb-6">
                        <Image
                            src="https://btpvofmkuwtbutwggbli.supabase.co/storage/v1/object/public/%20SE-5286761//rcw.jpeg"
                            alt="Educational Platform"
                            width={1200}
                            height={675}
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                    <p className="text-muted-foreground mb-6">
                        This educational platform was developed to provide a comprehensive online learning experience
                        for students across Northeast India, particularly in remote areas with limited access to quality education.
                        The platform includes video lessons, interactive quizzes, progress tracking, and live virtual classroom sessions.
                        It has been designed to work efficiently even with limited internet bandwidth.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                        <li>High-quality video streaming with adaptive quality</li>
                        <li>Interactive quizzes and assessments</li>
                        <li>Progress tracking and performance analytics</li>
                        <li>Live virtual classroom sessions</li>
                        <li>Offline access to downloaded content</li>
                        <li>Discussion forums for student collaboration</li>
                        <li>Admin dashboard for educators to manage content</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
                    <p className="text-muted-foreground mb-6">
                        Built using Next.js for the frontend with server-side rendering for improved performance.
                        The platform uses AWS services for video storage and streaming, ensuring reliable delivery
                        to users regardless of their location. PostgreSQL database handles user data, course content,
                        and progress tracking with efficient querying and data management.
                    </p>
                </div>

                <div>
                    <div className="rounded-lg border p-6 mb-6">
                        <h3 className="text-xl font-bold mb-4">Project Details</h3>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold mb-1">Client</h4>
                                <p className="text-muted-foreground">Regional Educational Institute</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-1">Timeline</h4>
                                <p className="text-muted-foreground">6 months</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-1">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Next.js</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">AWS</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">PostgreSQL</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">WebRTC</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Redis</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold mb-1">Services Provided</h4>
                                <ul className="list-disc pl-6 text-muted-foreground text-sm">
                                    <li>Web Application Development</li>
                                    <li>UI/UX Design</li>
                                    <li>Video Streaming Implementation</li>
                                    <li>Database Architecture</li>
                                    <li>Cloud Infrastructure Setup</li>
                                    <li>Testing & Deployment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border p-6">
                        <h3 className="text-xl font-bold mb-4">Want a Similar Solution?</h3>
                        <p className="text-muted-foreground mb-6">
                            If you're an educational institution looking for a custom online learning platform, contact us today for a consultation.
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