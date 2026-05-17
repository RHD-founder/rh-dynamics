"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Smartphone, Globe, Code, Server, Database, Zap, Shield, LineChart, ArrowRight, BriefcaseBusiness, PackageCheck, Layers, Megaphone, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// --- Data Definitions ---

const marketingPackages = [
  {
    name: "Essential",
    price: "₹15,000",
    idealFor: "Basic Presence",
    features: [
      { name: "Content System", value: "Core Branding" },
      { name: "Ad-Focused Reels", value: "4 (Client Clips)" },
      { name: "Creative Posts", value: "12 / Month" },
      { name: "Professional Shoot", value: "—" },
      { name: "Ads Management", value: "Meta Ads" },
      { name: "Lead Strategy", value: "Basic Campaigns" },
      { name: "Automation", value: "—" },
      { name: "Google Presence", value: "Basic GMB Setup" },
      { name: "Reporting", value: "—" },
      { name: "Support", value: "Standard" }
    ],
    color: "from-blue-600 to-cyan-500",
    bgAccent: "bg-blue-500/10",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    tag: ""
  },
  {
    name: "Growth",
    price: "₹25,000",
    idealFor: "Scaling Leads",
    features: [
      { name: "Content System", value: "Strong Content Engine" },
      { name: "Ad-Focused Reels", value: "8 (Incl. 1 Shoot)" },
      { name: "Creative Posts", value: "20 / Month" },
      { name: "Professional Shoot", value: "1 Session / Month" },
      { name: "Ads Management", value: "Meta + Google Ads" },
      { name: "Lead Strategy", value: "Optimized Generation" },
      { name: "Automation", value: "WhatsApp Setup" },
      { name: "Google Presence", value: "Optimized GMB" },
      { name: "Reporting", value: "Monthly Insights" },
      { name: "Support", value: "Priority" }
    ],
    color: "from-purple-600 to-pink-500",
    bgAccent: "bg-purple-500/10",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    tag: "Most Popular"
  },
  {
    name: "Dominance",
    price: "₹60,000",
    idealFor: "Rapid Market Growth",
    features: [
      { name: "Content System", value: "Full-Scale Daily System" },
      { name: "Ad-Focused Reels", value: "12 (Weekly Shoots)" },
      { name: "Creative Posts", value: "30 / Month" },
      { name: "Professional Shoot", value: "4 Sessions / Month" },
      { name: "Ads Management", value: "Advanced + Retargeting" },
      { name: "Lead Strategy", value: "Full Funnel System" },
      { name: "Automation", value: "Full Booking System" },
      { name: "Google Presence", value: "Advanced SEO Focus" },
      { name: "Reporting", value: "Advanced Scaling Data" },
      { name: "Support", value: "Dedicated Priority" }
    ],
    color: "from-amber-500 to-orange-500",
    bgAccent: "bg-amber-500/10",
    buttonColor: "bg-amber-600 hover:bg-amber-700",
    tag: "Premium"
  }
];

const serviceCategories = [
    {
        id: "mobile",
        name: "Mobile Apps",
        icon: Smartphone,
        color: "from-indigo-600 to-blue-500",
        bgAccent: "bg-indigo-500/10",
        description: "High-performance native and cross-platform mobile applications for exceptional user experiences.",
        offerings: [
            {
                title: "Native iOS App",
                price: "₹1,50,000+",
                timeframe: "12-16 weeks",
                description: "Premium native iOS applications built with Swift for optimal performance and seamless user experience.",
                features: ["Modern Swift architecture", "Apple design guidelines", "Push notifications", "App Store submission assistance"],
                ideal: "Businesses requiring high-performance iOS apps",
                tag: "Premium"
            },
            {
                title: "Native Android App",
                price: "₹1,25,000+",
                timeframe: "12-16 weeks",
                description: "Robust Android applications built with Kotlin for optimal performance across the diverse Android ecosystem.",
                features: ["Modern Kotlin architecture", "Material Design", "Push notifications", "Play Store submission"],
                ideal: "Businesses requiring high-performance Android apps",
                tag: "Premium"
            },
            {
                title: "Cross-Platform App",
                price: "₹95,000+",
                timeframe: "10-14 weeks",
                description: "Cost-effective app development for both iOS and Android using React Native, delivering near-native performance.",
                features: ["Single codebase", "Native-like performance", "Custom animations", "Dual store submission"],
                ideal: "Targeting both platforms with balanced budget",
                tag: "Most Popular"
            },
            {
                title: "E-Commerce App",
                price: "₹1,95,000+",
                timeframe: "16-20 weeks",
                description: "Comprehensive mobile shopping experience with secure payment processing, product management, and tracking.",
                features: ["Product catalog & filters", "Secure payment gateway", "User registration", "Order tracking"],
                ideal: "Retail businesses creating mobile shopping experiences",
                tag: "Enterprise"
            }
        ]
    },
    {
        id: "web",
        name: "Web Solutions",
        icon: Globe,
        color: "from-emerald-600 to-teal-500",
        bgAccent: "bg-emerald-500/10",
        description: "Responsive, high-performance websites and web applications designed to convert visitors.",
        offerings: [
            {
                title: "Business Website",
                price: "₹35,000+",
                timeframe: "4-6 weeks",
                description: "Professional, responsive business website designed to establish your online presence and generate leads.",
                features: ["Responsive design", "5-7 custom pages", "Lead capture forms", "SEO fundamentals"],
                ideal: "SMEs upgrading their online presence",
                tag: "Essential"
            },
            {
                title: "E-Commerce Website",
                price: "₹75,000+",
                timeframe: "8-12 weeks",
                description: "Comprehensive online store with product management, secure checkout, and payment processing.",
                features: ["Product catalog", "Secure checkout", "Multiple gateways", "Inventory management"],
                ideal: "Retailers selling products online natively",
                tag: "Premium"
            },
            {
                title: "Custom Web App",
                price: "₹1,25,000+",
                timeframe: "12-20 weeks",
                description: "Tailored web applications built to solve specific business challenges or streamline operations.",
                features: ["Custom architecture", "User authentication", "Process automation", "API integrations"],
                ideal: "Businesses with complex functional needs",
                tag: "Enterprise"
            },
            {
                title: "Progressive Web App",
                price: "₹85,000+",
                timeframe: "10-14 weeks",
                description: "Modern web apps that function like native apps with offline capabilities and home screen installation.",
                features: ["Offline support", "App-like experience", "Push notifications", "Hardware access"],
                ideal: "App-like functionality without the app store process",
                tag: "Innovative"
            }
        ]
    },
    {
        id: "enterprise",
        name: "Enterprise",
        icon: BriefcaseBusiness,
        color: "from-purple-600 to-violet-500",
        bgAccent: "bg-purple-500/10",
        description: "Scalable, secure enterprise applications designed to optimize operations and drive growth.",
        offerings: [
            {
                title: "ERP System",
                price: "₹5,00,000+",
                timeframe: "24-36 weeks",
                description: "Comprehensive Enterprise Resource Planning solution to streamline core business processes.",
                features: ["Financial management", "Supply chain module", "HR & payroll", "BI dashboards"],
                ideal: "Medium to large businesses integrating operations",
                tag: "Enterprise"
            },
            {
                title: "CRM Solution",
                price: "₹2,50,000+",
                timeframe: "16-24 weeks",
                description: "Custom Customer Relationship Management system to enhance customer service and sales tracking.",
                features: ["Lead management", "Sales forecasting", "Email marketing", "Performance analytics"],
                ideal: "Sales-driven organizations",
                tag: "Premium"
            }
        ]
    },
    {
        id: "bundles",
        name: "Bundles",
        icon: PackageCheck,
        color: "from-rose-600 to-pink-500",
        bgAccent: "bg-rose-500/10",
        description: "Integrated packages combining multiple services for comprehensive digital transformation.",
        offerings: [
            {
                title: "Digital Presence Bundle",
                price: "₹1,25,000+",
                timeframe: "12-16 weeks",
                description: "Complete package including website, mobile app, and social media setup.",
                features: ["Business website", "Mobile app (iOS & Android)", "Social media setup", "Analytics"],
                ideal: "Establishing a complete digital footprint",
                tag: "Best Value"
            },
            {
                title: "E-Commerce Complete",
                price: "₹2,50,000+",
                timeframe: "20-28 weeks",
                description: "Comprehensive e-commerce package with website, mobile apps, and marketing tools.",
                features: ["E-commerce website", "Native mobile apps", "Inventory system", "Marketing automation"],
                ideal: "Retailers needing a full digital ecosystem",
                tag: "Premium"
            }
        ]
    }
];

const maintenancePlans = [
    {
        title: "Essential Maintenance",
        price: "₹5,000/mo",
        description: "Basic maintenance package ensuring your digital solutions remain operational and secure.",
        features: ["Security updates", "Performance monitoring", "Bug fixes (10 hrs)", "Weekly backups"],
        color: "from-slate-500/20 to-slate-500/5",
        btnColor: "bg-slate-700 hover:bg-slate-600"
    },
    {
        title: "Premium Support",
        price: "₹12,000/mo",
        description: "Comprehensive support package for business-critical applications requiring regular updates.",
        features: ["Essential features +", "Minor enhancements (20 hrs)", "Daily backups", "Priority support"],
        color: "from-primary/20 to-primary/5",
        btnColor: "bg-primary hover:bg-primary/90 text-primary-foreground"
    },
    {
        title: "Enterprise Care",
        price: "₹25,000/mo",
        description: "Complete care package for enterprise solutions with dedicated support and ongoing development.",
        features: ["Premium features +", "Dedicated manager", "24/7 emergency support", "Strategy sessions"],
        color: "from-purple-500/20 to-purple-500/5",
        btnColor: "bg-purple-600 hover:bg-purple-700"
    }
];

// --- Main Component ---

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState("mobile");
    const activeCategory = serviceCategories.find(category => category.id === activeTab) || serviceCategories[0];

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-12 overflow-hidden">
            {/* Dynamic Grid Background */}
            <div className="fixed inset-0 bg-dot-pattern opacity-30 dark:opacity-20 pointer-events-none z-0" />
            
            {/* Soft Ambient Orbs */}
            <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none z-0" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none z-0" />

            {/* --- Hero Section --- */}
            <section className="relative z-10 pt-16 pb-24 text-center container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Badge variant="outline" className="mb-6 px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm text-sm pointer-events-none">
                        Professional Digital Services
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight text-foreground">
                        Scale With <span className="text-gradient">Precision</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        From high-converting marketing campaigns to scalable enterprise software, we provide the complete ecosystem for your digital dominance.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="#marketing">
                            <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all rounded-full">
                                Marketing Packages
                            </Button>
                        </Link>
                        <Link href="#software">
                            <Button size="lg" variant="outline" className="h-14 px-8 text-base glass-card hover:bg-muted transition-all rounded-full">
                                Software Solutions
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* --- Marketing Packages --- */}
            <section id="marketing" className="relative z-10 py-24 border-y border-border/50 bg-muted/20 backdrop-blur-sm">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-purple-500/10 text-purple-500">
                            <Megaphone className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">Marketing & Growth Packages</h2>
                        <p className="text-lg text-muted-foreground">
                            Dominate your market with our data-driven content, ads, and lead generation systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {marketingPackages.map((pkg, idx) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`glass-card dark:glass-card-dark rounded-3xl p-8 relative flex flex-col overflow-hidden ${pkg.tag === 'Premium' ? 'border-amber-500/50 shadow-2xl shadow-amber-500/10 scale-105 z-10' : ''}`}
                            >
                                {/* Glowing Accent */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${pkg.color} opacity-10 blur-[80px] rounded-full pointer-events-none`} />

                                {pkg.tag && (
                                    <div className={`absolute top-0 right-0 py-1.5 px-6 rounded-bl-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${pkg.color}`}>
                                        {pkg.tag}
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold font-heading mb-2">{pkg.name}</h3>
                                    <p className="text-muted-foreground mb-4">Ideal For: <span className="font-semibold text-foreground">{pkg.idealFor}</span></p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-black">{pkg.price}</span>
                                        <span className="text-muted-foreground font-medium">/ month</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-10 flex-grow">
                                    {pkg.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <div>
                                                <span className="text-sm text-muted-foreground block">{feature.name}</span>
                                                <span className="font-medium text-foreground">{feature.value}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link href={`/contact?service=${encodeURIComponent(pkg.name + ' Marketing Package')}`} className="mt-auto">
                                    <Button className={`w-full h-12 text-base font-semibold text-white ${pkg.buttonColor} border-0 rounded-full transition-all hover:scale-[1.02]`}>
                                        Select {pkg.name}
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Software Solutions --- */}
            <section id="software" className="relative z-10 py-24">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-blue-500/10 text-blue-500">
                            <Code className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">Custom Software Solutions</h2>
                        <p className="text-lg text-muted-foreground">
                            Enterprise-grade applications built with modern architectures for unmatched performance.
                        </p>
                    </div>

                    <Tabs defaultValue="mobile" onValueChange={setActiveTab} className="max-w-6xl mx-auto">
                        <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-12 bg-background/50 backdrop-blur-md border border-border p-1.5 rounded-2xl h-auto">
                            {serviceCategories.map((category) => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="py-3 px-4 rounded-xl data-[state=active]:bg-muted data-[state=active]:text-foreground text-muted-foreground transition-all"
                                >
                                    <div className="flex items-center gap-2">
                                        <category.icon className="h-5 w-5" />
                                        <span className="font-medium">{category.name}</span>
                                    </div>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {serviceCategories.map((category) => (
                            <TabsContent key={category.id} value={category.id} className="focus-visible:outline-none">
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className={`mb-10 ${category.bgAccent} border border-border rounded-3xl p-8 md:p-10`}
                                >
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white`}>
                                            <category.icon className="h-10 w-10" />
                                        </div>
                                        <div className="text-center md:text-left">
                                            <h3 className="text-3xl font-bold font-heading mb-2">{category.name}</h3>
                                            <p className="text-lg text-muted-foreground">{category.description}</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {category.offerings.map((offering, idx) => (
                                        <div key={idx} className="glass-card dark:glass-card-dark rounded-3xl p-8 flex flex-col h-full group hover:border-primary/50 transition-colors">
                                            <div className="flex justify-between items-start mb-6">
                                                <div>
                                                    <h4 className="text-2xl font-bold mb-1">{offering.title}</h4>
                                                    <p className="text-primary font-medium">From {offering.price} • {offering.timeframe}</p>
                                                </div>
                                                {offering.tag && (
                                                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                                                        {offering.tag}
                                                    </Badge>
                                                )}
                                            </div>
                                            
                                            <p className="text-muted-foreground mb-8 text-base leading-relaxed">{offering.description}</p>
                                            
                                            <div className="mb-10 flex-grow">
                                                <h5 className="font-semibold text-foreground mb-4">Core Deliverables</h5>
                                                <ul className="space-y-3">
                                                    {offering.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <div className="bg-primary/20 p-1 rounded-full mt-0.5">
                                                                <Check className="w-3 h-3 text-primary" />
                                                            </div>
                                                            <span className="text-muted-foreground">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <Link href={`/contact?service=${encodeURIComponent(offering.title)}`} className="mt-auto">
                                                <Button variant="outline" className="w-full h-12 glass-card text-foreground hover:bg-primary hover:text-primary-foreground border-border transition-all rounded-full hover:scale-[1.02]">
                                                    Request Proposal <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* --- Maintenance & Support --- */}
            <section className="relative z-10 py-24 border-t border-border/50">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">Maintenance & Support</h2>
                        <p className="text-lg text-muted-foreground">
                            Ensure maximum uptime and security for your custom software solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {maintenancePlans.map((plan, idx) => (
                            <div key={idx} className="glass-card dark:glass-card-dark rounded-3xl p-8 relative overflow-hidden flex flex-col group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                                    <div className="text-3xl font-black text-foreground mb-4">{plan.price}</div>
                                    <p className="text-muted-foreground mb-8 min-h-[60px]">{plan.description}</p>
                                    
                                    <ul className="space-y-4 mb-10">
                                        {plan.features.map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                                <Check className="w-5 h-5 text-foreground opacity-50" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={`/contact?service=${encodeURIComponent(plan.title)}`} className="mt-auto block">
                                        <Button className={`w-full h-12 text-white border-0 ${plan.btnColor} rounded-full transition-all hover:scale-[1.02]`}>
                                            Secure Plan
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
