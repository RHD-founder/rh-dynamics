"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Smartphone, Globe, Code, Server, Database, Zap, Shield, LineChart, ArrowRight, BriefcaseBusiness, PackageCheck, Layers, PanelRight } from "lucide-react";
import Link from "next/link";

// Main service categories with detailed offerings
const serviceCategories = [
    {
        id: "mobile",
        name: "Mobile Development",
        icon: Smartphone,
        color: "from-indigo-600 to-blue-500",
        accentColor: "bg-indigo-500",
        lightColor: "bg-indigo-50",
        textColor: "text-indigo-600",
        borderColor: "border-indigo-200",
        hoverBorderColor: "hover:border-indigo-300",
        description: "High-performance native and cross-platform mobile applications for businesses seeking exceptional user experiences.",
        offerings: [
            {
                title: "Native iOS Application",
                price: "₹1,50,000+",
                timeframe: "12-16 weeks",
                description: "Premium native iOS applications built with Swift for optimal performance and seamless user experience. Includes comprehensive testing across all Apple devices.",
                features: [
                    "Modern Swift-based architecture",
                    "Apple design guidelines compliance",
                    "Push notifications integration",
                    "In-app purchases (if needed)",
                    "App Store submission assistance",
                    "Post-launch support (30 days)"
                ],
                ideal: "Businesses requiring high-performance iOS apps with sophisticated features and animations",
                tag: "Premium"
            },
            {
                title: "Native Android Application",
                price: "₹1,25,000+",
                timeframe: "12-16 weeks",
                description: "Robust Android applications built with Kotlin for optimal performance across the diverse Android ecosystem. Includes comprehensive testing across multiple device types.",
                features: [
                    "Modern Kotlin-based architecture",
                    "Material Design implementation",
                    "Push notifications integration",
                    "In-app purchases (if needed)",
                    "Play Store submission assistance",
                    "Post-launch support (30 days)"
                ],
                ideal: "Businesses requiring high-performance Android apps with sophisticated features",
                tag: "Premium"
            },
            {
                title: "Cross-Platform Application",
                price: "₹95,000+",
                timeframe: "10-14 weeks",
                description: "Cost-effective app development for both iOS and Android using React Native or Flutter, delivering near-native performance with faster time-to-market.",
                features: [
                    "Single codebase for iOS and Android",
                    "Native-like performance and UI",
                    "Push notifications integration",
                    "Custom animations and transitions",
                    "App Store & Play Store submission",
                    "Post-launch support (30 days)"
                ],
                ideal: "Businesses looking to target both platforms with balanced budget and timeline constraints",
                tag: "Most Popular"
            },
            {
                title: "E-Commerce Mobile App",
                price: "₹1,95,000+",
                timeframe: "16-20 weeks",
                description: "Comprehensive mobile shopping experience with secure payment processing, product management, user accounts, and order tracking.",
                features: [
                    "Product catalog with search and filters",
                    "Secure payment gateway integration",
                    "User registration and profiles",
                    "Order tracking and history",
                    "Wishlist and favorites functionality",
                    "Admin dashboard for management"
                ],
                ideal: "Retail businesses looking to create dedicated mobile shopping experiences",
                tag: "Enterprise"
            }
        ]
    },
    {
        id: "web",
        name: "Web Development",
        icon: Globe,
        color: "from-emerald-600 to-teal-500",
        accentColor: "bg-emerald-500",
        lightColor: "bg-emerald-50",
        textColor: "text-emerald-600",
        borderColor: "border-emerald-200",
        hoverBorderColor: "hover:border-emerald-300",
        description: "Responsive, high-performance websites and web applications designed to convert visitors and streamline operations.",
        offerings: [
            {
                title: "Business Website",
                price: "₹35,000+",
                timeframe: "4-6 weeks",
                description: "Professional, responsive business website designed to establish your online presence, showcase services, and generate leads.",
                features: [
                    "Responsive design for all devices",
                    "5-7 custom designed pages",
                    "Contact forms and lead capture",
                    "SEO optimization fundamentals",
                    "Google Analytics integration",
                    "CMS for easy content updates"
                ],
                ideal: "Small to medium businesses establishing or upgrading their online presence",
                tag: "Essential"
            },
            {
                title: "E-Commerce Website",
                price: "₹75,000+",
                timeframe: "8-12 weeks",
                description: "Comprehensive online store with product management, secure checkout, payment processing, and customer account features.",
                features: [
                    "Product catalog with categories",
                    "Secure shopping cart and checkout",
                    "Multiple payment gateway options",
                    "Order tracking and management",
                    "Customer account dashboard",
                    "Inventory management system"
                ],
                ideal: "Retail businesses looking to sell products online with a professional shopping experience",
                tag: "Premium"
            },
            {
                title: "Custom Web Application",
                price: "₹1,25,000+",
                timeframe: "12-20 weeks",
                description: "Tailored web applications built to solve specific business challenges, streamline operations, or deliver unique services to your customers.",
                features: [
                    "Custom database architecture",
                    "User authentication and roles",
                    "Business process automation",
                    "API integrations with other services",
                    "Real-time data processing",
                    "Scalable cloud-based hosting"
                ],
                ideal: "Businesses requiring specific functionality beyond standard website capabilities",
                tag: "Enterprise"
            },
            {
                title: "Progressive Web App (PWA)",
                price: "₹85,000+",
                timeframe: "10-14 weeks",
                description: "Modern web applications that function like native apps, with offline capabilities, home screen installation, and push notifications.",
                features: [
                    "Works offline or on low networks",
                    "App-like experience on devices",
                    "Installable on home screen",
                    "Push notification support",
                    "Background synchronization",
                    "Hardware access capabilities"
                ],
                ideal: "Businesses wanting app-like functionality without the app store process",
                tag: "Innovative"
            }
        ]
    },
    {
        id: "enterprise",
        name: "Enterprise Solutions",
        icon: BriefcaseBusiness,
        color: "from-purple-600 to-violet-500",
        accentColor: "bg-purple-500",
        lightColor: "bg-purple-50",
        textColor: "text-purple-600",
        borderColor: "border-purple-200",
        hoverBorderColor: "hover:border-purple-300",
        description: "Scalable, secure enterprise applications designed to optimize operations and drive business growth.",
        offerings: [
            {
                title: "ERP System",
                price: "₹5,00,000+",
                timeframe: "24-36 weeks",
                description: "Comprehensive Enterprise Resource Planning solution to streamline and integrate core business processes.",
                features: [
                    "Financial management module",
                    "Inventory & supply chain module",
                    "HR & payroll management",
                    "Customer relationship module",
                    "Business intelligence dashboards",
                    "Role-based access control"
                ],
                ideal: "Medium to large businesses seeking to integrate operations across departments",
                tag: "Enterprise"
            },
            {
                title: "CRM Solution",
                price: "₹2,50,000+",
                timeframe: "16-24 weeks",
                description: "Custom Customer Relationship Management system to enhance customer service, sales tracking, and marketing effectiveness.",
                features: [
                    "Contact and lead management",
                    "Sales pipeline and forecasting",
                    "Email marketing integration",
                    "Customer service ticketing",
                    "Performance analytics",
                    "Mobile access for field teams"
                ],
                ideal: "Sales-driven organizations looking to improve customer relationships and conversion rates",
                tag: "Premium"
            },
            {
                title: "Learning Management System",
                price: "₹3,00,000+",
                timeframe: "16-24 weeks",
                description: "Comprehensive eLearning platform for educational institutions or corporate training programs.",
                features: [
                    "Course creation and management",
                    "Student enrollment and tracking",
                    "Assessment and quiz modules",
                    "Discussion forums and messaging",
                    "Certificate generation",
                    "Progress tracking and reporting"
                ],
                ideal: "Educational institutions or corporations with extensive training needs",
                tag: "Specialized"
            },
            {
                title: "Healthcare Management System",
                price: "₹4,00,000+",
                timeframe: "20-32 weeks",
                description: "HIPAA-compliant healthcare management solution for clinics, hospitals, and medical practices.",
                features: [
                    "Patient records management",
                    "Appointment scheduling",
                    "Billing and insurance processing",
                    "Prescription management",
                    "Medical imaging integration",
                    "Analytics and reporting"
                ],
                ideal: "Healthcare providers requiring comprehensive patient and practice management",
                tag: "Specialized"
            }
        ]
    },
    {
        id: "bundles",
        name: "Solution Bundles",
        icon: PackageCheck,
        color: "from-rose-600 to-pink-500",
        accentColor: "bg-rose-500",
        lightColor: "bg-rose-50",
        textColor: "text-rose-600",
        borderColor: "border-rose-200",
        hoverBorderColor: "hover:border-rose-300",
        description: "Integrated packages combining multiple services for comprehensive digital transformation.",
        offerings: [
            {
                title: "Digital Presence Bundle",
                price: "₹1,25,000+",
                timeframe: "12-16 weeks",
                description: "Complete package including website, mobile app, and social media setup for establishing a strong digital presence.",
                features: [
                    "Responsive business website",
                    "Mobile app (iOS & Android)",
                    "Social media profile setup",
                    "Consistent branding across platforms",
                    "Content strategy guidelines",
                    "Analytics integration for all channels"
                ],
                ideal: "Businesses establishing their complete digital footprint from scratch",
                tag: "Best Value"
            },
            {
                title: "E-Commerce Complete Solution",
                price: "₹2,50,000+",
                timeframe: "20-28 weeks",
                description: "Comprehensive e-commerce package with website, mobile apps, inventory management, and marketing tools.",
                features: [
                    "E-commerce website with payment processing",
                    "Native mobile apps for iOS and Android",
                    "Inventory management system",
                    "Customer loyalty program",
                    "Marketing automation setup",
                    "Analytics and sales dashboards"
                ],
                ideal: "Retail businesses looking for a complete online sales ecosystem",
                tag: "Premium"
            },
            {
                title: "Enterprise Transformation Package",
                price: "₹7,50,000+",
                timeframe: "32-48 weeks",
                description: "Complete digital transformation package for enterprises, including ERP, CRM, mobile apps, and integrations.",
                features: [
                    "Custom ERP system",
                    "Integrated CRM solution",
                    "Employee mobile applications",
                    "Customer-facing web portal",
                    "Business intelligence suite",
                    "Legacy system integrations"
                ],
                ideal: "Large enterprises undergoing comprehensive digital transformation",
                tag: "Enterprise"
            },
            {
                title: "SaaS Startup Package",
                price: "₹3,50,000+",
                timeframe: "20-30 weeks",
                description: "Complete package for SaaS startups including web application, mobile apps, subscription management, and analytics.",
                features: [
                    "Cloud-based SaaS platform",
                    "Subscription and billing system",
                    "Mobile applications for key platforms",
                    "Admin dashboard and controls",
                    "User onboarding workflows",
                    "Analytics and customer insights"
                ],
                ideal: "Technology startups launching SaaS products requiring comprehensive platforms",
                tag: "Innovative"
            }
        ]
    }
];

// Maintenance and support plans
const maintenancePlans = [
    {
        title: "Essential Maintenance",
        price: "₹5,000+/month",
        description: "Basic maintenance package ensuring your digital solutions remain operational and secure.",
        features: [
            "Security updates and patches",
            "Performance monitoring",
            "Bug fixes (up to 10 hours/month)",
            "Weekly automated backups",
            "Monthly status reports",
            "Email support (business hours)"
        ]
    },
    {
        title: "Premium Support",
        price: "₹12,000+/month",
        description: "Comprehensive support package for business-critical applications requiring regular updates.",
        features: [
            "All Essential Maintenance features",
            "Minor feature enhancements (up to 20 hours/month)",
            "Daily automated backups",
            "Proactive performance optimization",
            "Monthly consultation calls",
            "Priority email and phone support"
        ]
    },
    {
        title: "Enterprise Care",
        price: "₹25,000+/month",
        description: "Complete care package for enterprise solutions with dedicated support and ongoing development.",
        features: [
            "All Premium Support features",
            "Dedicated support manager",
            "24/7 emergency support",
            "Continuous improvement cycles",
            "Quarterly strategy sessions",
            "User training and documentation"
        ]
    }
];

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState("mobile");

    // Get the active category based on the selected tab
    const activeCategory = serviceCategories.find(category => category.id === activeTab) || serviceCategories[0];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative">
                <div className="relative h-[60vh] md:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${activeCategory.color} opacity-90 z-10`}></div>
                    <Image
                        src="/services-hero.jpg"
                        alt="RH Dynamics Services"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 flex items-center z-20">
                        <div className="container px-4 mx-auto">
                            <div className="max-w-3xl">
                                <Badge className="mb-6 px-4 py-1.5 bg-white/20 text-white border-0 text-sm backdrop-blur-sm">
                                    Professional Software Services
                                </Badge>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Enterprise-Grade Solutions</h1>
                                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
                                    High-quality software development services for businesses that demand excellence and innovation.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="#categories">
                                        <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium px-6">
                                            Explore Services
                                        </Button>
                                    </Link>
                                    <Link href="/contact">
                                        <Button size="lg" variant="outline" className="text-white border-white/80 bg-primary/40 hover:bg-primary/60 hover:border-white font-medium px-6 backdrop-blur-sm">
                                            Request Consultation
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <Badge className="mb-4 px-3 py-1 bg-amber-100 text-amber-700 border-0 text-sm">Our Methodology</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Approach</h2>
                        <p className="text-lg text-muted-foreground">
                            We don't just build software; we craft solutions that empower your business. Our quality-first approach ensures your digital investments deliver long-term value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <Card className="bg-background border-0 shadow-lg hover:shadow-xl transition-all group">
                            <CardHeader className="pb-2">
                                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-all">
                                    <Shield className="h-8 w-8 text-amber-600" />
                                </div>
                                <CardTitle className="text-2xl">Quality Assurance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Rigorous testing methodologies ensure your solutions are robust, secure, and ready for real-world use. We test early and often throughout the development process.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-background border-0 shadow-lg hover:shadow-xl transition-all group">
                            <CardHeader className="pb-2">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-all">
                                    <Zap className="h-8 w-8 text-emerald-600" />
                                </div>
                                <CardTitle className="text-2xl">Agile Development</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Our iterative approach allows for continuous feedback and adaptation, ensuring the final product aligns perfectly with your business requirements and goals.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-background border-0 shadow-lg hover:shadow-xl transition-all group">
                            <CardHeader className="pb-2">
                                <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-all">
                                    <Layers className="h-8 w-8 text-purple-600" />
                                </div>
                                <CardTitle className="text-2xl">Scalable Architecture</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We design solutions that grow with your business, utilizing modern architectures and technologies that provide flexibility and future-proof your investment.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Service Categories */}
            <section id="categories" className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <Badge className={`mb-4 px-3 py-1 ${activeCategory.lightColor} ${activeCategory.textColor} border-0 text-sm`}>Our Services</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Digital Solutions</h2>
                        <p className="text-lg text-muted-foreground">
                            Choose from our extensive range of services designed to meet the specific needs of your business, from mobile applications to enterprise-grade systems.
                        </p>
                    </div>

                    <Tabs defaultValue="mobile" className="mb-10" onValueChange={setActiveTab}>
                        <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 mb-16 bg-muted/50 p-1.5 rounded-xl">
                            {serviceCategories.map((category) => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className={`flex items-center gap-2 py-3 px-4 rounded-lg data-[state=active]:${category.lightColor} data-[state=active]:${category.textColor}`}
                                >
                                    <category.icon className="h-5 w-5" />
                                    <span className="hidden md:inline font-medium">{category.name}</span>
                                    <span className="md:hidden font-medium">{category.name.split(' ')[0]}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {serviceCategories.map((category) => (
                            <TabsContent key={category.id} value={category.id}>
                                <div className={`mb-12 ${category.lightColor} p-6 rounded-xl border ${category.borderColor}`}>
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-4">
                                        <div className={`w-16 h-16 ${category.accentColor} rounded-xl flex items-center justify-center shrink-0`}>
                                            <category.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{category.name}</h3>
                                            <p className="text-muted-foreground text-lg">{category.description}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {category.offerings.map((offering, index) => (
                                        <Card key={index} className={`border ${category.borderColor} ${category.hoverBorderColor} shadow-lg hover:shadow-xl transition-all overflow-hidden group flex flex-col h-full`}>
                                            <div className={`h-2 ${category.accentColor} w-full group-hover:h-3 transition-all`} />
                                            <CardHeader className="pb-2 pt-6 px-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <CardTitle className="text-2xl font-bold">{offering.title}</CardTitle>
                                                    <Badge variant="outline" className={`${category.lightColor} ${category.textColor} border-${category.borderColor} font-medium`}>
                                                        {offering.tag}
                                                    </Badge>
                                                </div>
                                                <CardDescription className={`text-base ${category.textColor} font-medium mt-2`}>
                                                    Starting at {offering.price} • {offering.timeframe}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-6 px-6 flex-grow">
                                                <p className="text-muted-foreground">{offering.description}</p>

                                                <div className="pt-2">
                                                    <h4 className="font-medium text-lg mb-4">Key Features</h4>
                                                    <ul className="space-y-3 pl-1">
                                                        {offering.features.map((feature, idx) => (
                                                            <li key={idx} className="flex items-start gap-3">
                                                                <div className={`${category.lightColor} rounded-full p-1 mt-0.5`}>
                                                                    <Check className={`h-4 w-4 ${category.textColor} shrink-0`} />
                                                                </div>
                                                                <span className="text-base">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className={`pt-3 ${category.lightColor}/50 p-5 rounded-lg`}>
                                                    <h4 className="font-medium mb-2">Ideal For</h4>
                                                    <p className="text-muted-foreground">{offering.ideal}</p>
                                                </div>
                                            </CardContent>
                                            <CardFooter className="flex justify-between border-t pt-6 pb-6 px-6 gap-4 mt-auto">
                                                <Button variant="outline" className={`flex-1 hover:${category.lightColor} hover:${category.textColor}`}>Learn More</Button>
                                                <Link href="/contact" className="flex-1">
                                                    <Button className={`w-full ${category.accentColor} hover:${category.accentColor}/90`}>
                                                        Request Quote
                                                        <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* Maintenance & Support */}
            <section className="py-24 bg-gradient-to-b from-background to-amber-50/30">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <Badge className="mb-4 px-3 py-1 bg-teal-100 text-teal-700 border-0 text-sm">Support Plans</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Maintenance & Support</h2>
                        <p className="text-lg text-muted-foreground">
                            Ensure the continued success of your digital solutions with our comprehensive maintenance and support plans.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {maintenancePlans.map((plan, index, array) => {
                            // Create a gradient of colors from teal to purple across the maintenance plans
                            const colors = [
                                { bg: "bg-teal-500", light: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
                                { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
                                { bg: "bg-indigo-500", light: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" }
                            ];
                            const color = colors[index % colors.length];

                            return (
                                <Card key={index} className={`border ${color.border} hover:border-primary/20 shadow-lg hover:shadow-xl transition-all group overflow-hidden flex flex-col h-full`}>
                                    <div className={`h-1 ${color.bg} w-full group-hover:h-2 transition-all`} />
                                    <CardHeader className="pt-8 px-6">
                                        <CardTitle className="text-2xl">{plan.title}</CardTitle>
                                        <CardDescription className={`text-xl font-medium ${color.text} mt-3`}>
                                            {plan.price}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6 px-6 flex-grow">
                                        <p className="text-muted-foreground">{plan.description}</p>

                                        <div className="pt-2">
                                            <h4 className="font-medium text-lg mb-4">Includes</h4>
                                            <ul className="space-y-3 pl-1">
                                                {plan.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className={`${color.light} rounded-full p-1 mt-0.5`}>
                                                            <Check className={`h-4 w-4 ${color.text} shrink-0`} />
                                                        </div>
                                                        <span className="text-base">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-6 pb-6 px-6 mt-auto">
                                        <Link href="/contact" className="w-full">
                                            <Button className={`w-full ${color.bg} hover:${color.bg}/90`}>Request Details</Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container px-4 mx-auto text-center relative z-10">
                    <Badge className="mb-6 px-4 py-1.5 bg-white/20 text-white border-0 text-sm backdrop-blur-sm inline-block">
                        Let's Work Together
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        Let's discuss how our high-quality digital solutions can help you achieve your business objectives.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90 font-medium px-8 py-6 text-lg">
                            Schedule a Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
