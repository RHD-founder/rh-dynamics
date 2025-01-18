"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const servicePackages = [
    {
        title: "Basic Website",
        price: 15000,
        description:
            "A visually appealing website with essential information and functionalities, including features like contact form, basic SEO, and mobile responsiveness.",
    },
    {
        title: "Standard Website",
        price: 20000,
        description:
            "Builds upon the basic package with added features such as blog integration, appointment booking system, advanced SEO, and social media integration.",
    },
    {
        title: "Premium Website",
        price: 40000,
        description:
            "A comprehensive website solution with advanced features like e-commerce integration, customizable features, a content management system, and marketing automation tools.",
    },
    {
        title: "Medical System (Basic)",
        price: 15000,
        description:
            "A basic medical practice management system for clinics, including patient records management, appointment scheduling, and basic billing.",
    },
    {
        title: "Medical System (Full)",
        price: 40000,
        description:
            "A full-featured medical management system with comprehensive patient management, advanced billing systems, and integration with medical devices.",
    },
    {
        title: "Learning Management System (LMS)",
        price: 150000,
        description:
            "A complete LMS solution for course creation and management, student tracking, certificate generation, and payment gateway integration.",
    },
    {
        title: "ERP System",
        price: 150000,
        description:
            "A comprehensive Enterprise Resource Planning solution for inventory management, HR and payroll, financial accounting, and customizable modules.",
    },
    {
        title: "E-Commerce System",
        price: 100000,
        description:
            "A custom-designed full e-commerce solution with secure payment gateways, custom product pages, order and inventory management, and user/admin dashboards.",
    },
];

const AMCDetails = {
    title: "Annual Maintenance Charges (AMC)",
    description:
        "Includes performance boosts, site monitoring, and bug fixes. Changes not included will be billed separately.",
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-muted/50">
                <div className="container px-4 mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We offer a range of services to help businesses grow and succeed.
                    </p>
                </div>
            </section>

            {/* Service Cards Section */}
            <section className="py-20">
                <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicePackages.map((service, index) => (
                        <Card
                            key={index}
                            className="p-6 transition-transform transform hover:scale-105 shadow-lg border border-gray-200 hover:shadow-xl hover:border-primary"
                        >
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-semibold mb-2 text-primary">
                                    {service.title}
                                </h3>
                                <p className="text-lg font-medium mb-2 text-muted-foreground">
                                    ₹{service.price}
                                </p>
                                <p className="text-muted-foreground">
                                    {service.description}
                                </p>
                                <div className="flex justify-between items-center mt-4">
                                    <Link href="/contact">
                                        <Button className="hover:bg-primary hover:text-white">
                                            Get Quote
                                        </Button>
                                    </Link>
                                    <Badge variant="default">Read More</Badge>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* AMC Details Section */}
            <section className="py-10 bg-muted/20">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">{AMCDetails.title}</h2>
                    <p className="text-lg text-muted-foreground">{AMCDetails.description}</p>
                </div>
            </section>
        </div>
    );
}
