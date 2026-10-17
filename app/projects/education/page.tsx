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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
            <Link href="/projects" className="inline-flex items-center text-xs sm:text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
            </Link>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-8 text-foreground">
                Educational Platform
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
                <div className="lg:col-span-2">
                    <div className="rounded-2xl overflow-hidden border border-border/80 shadow-xl mb-8 bg-card">
                        <Image
                            src="https://btpvofmkuwtbutwggbli.supabase.co/storage/v1/object/public/%20SE-5286761//rcw.jpeg"
                            alt="Educational Platform"
                            width={1200}
                            height={675}
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-foreground">Project Overview</h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                        This educational platform was developed to provide a comprehensive online learning experience
                        for students across Northeast India, particularly in remote areas with limited access to quality education.
                        The platform includes video lessons, interactive quizzes, progress tracking, and live virtual classroom sessions.
                        It has been designed to work efficiently even with limited internet bandwidth.
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-foreground">Key Features</h2>
                    <ul className="list-disc pl-6 mb-8 space-y-2.5 text-base text-muted-foreground leading-relaxed">
                        <li>High-quality video streaming with adaptive quality</li>
                        <li>Interactive quizzes and assessments</li>
                        <li>Progress tracking and performance analytics</li>
                        <li>Live virtual classroom sessions</li>
                        <li>Offline access to downloaded content</li>
                        <li>Discussion forums for student collaboration</li>
                        <li>Admin dashboard for educators to manage content</li>
                    </ul>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-foreground">Technical Details</h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                        Built using Next.js for the frontend with server-side rendering for improved performance.
                        The platform uses AWS services for video storage and streaming, ensuring reliable delivery
                        to users regardless of their location. PostgreSQL database handles user data, course content,
                        and progress tracking with efficient querying and data management.
                    </p>
                </div>

                <div>
                    <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 sm:p-8 mb-6 shadow-lg">
                        <h3 className="text-xl font-heading font-bold mb-6 text-foreground">Project Details</h3>

                        <div className="space-y-5">
                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Client</h4>
                                <p className="text-base font-medium text-foreground">Regional Educational Institute</p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Timeline</h4>
                                <p className="text-base font-medium text-foreground">6 months</p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">Next.js</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">AWS</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">PostgreSQL</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">WebRTC</span>
                                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium">Redis</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Services Provided</h4>
                                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5 leading-relaxed">
                                    <li>Web Application Development</li>
                                    <li>UI/UX Design</li>
                                    <li>Video Streaming Implementation</li>
                                    <li>Database Architecture</li>
                                    <li>Cloud Infrastructure Setup</li>
                                    <li>Testing &amp; Deployment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 sm:p-8 shadow-lg">
                        <h3 className="text-xl font-heading font-bold mb-3 text-foreground">Want a Similar Solution?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            If you're an educational institution looking for a custom online learning platform, contact us today for a consultation.
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