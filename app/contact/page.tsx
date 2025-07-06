"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, AlertTriangle, Send, Clock, Building, MessageCircle, AtSign, User, Shield, Smartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      // Success
      setShowSuccessPopup(true);
      form.reset();

    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error Sending Message",
        description: error.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[50vh] md:h-[40vh] lg:h-[50vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-blue-600/70 z-10"></div>
          <Image
            src="/contact-hero.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container px-4 mx-auto">
              <div className="max-w-2xl">
                <Badge className="mb-6 px-4 py-1.5 bg-white/20 text-white border-0 text-sm backdrop-blur-sm">
                  Get In Touch
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let&apos;s Connect</h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl">
                  Have a project in mind or need technical solutions?
                  Our team of experts is ready to help turn your ideas into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <Badge className="mb-4 px-3 py-1 bg-indigo-100 text-indigo-700 border-0 text-sm">Contact Us</Badge>
                  <h2 className="text-2xl font-bold mb-3 text-indigo-900">Contact Information</h2>
                  <div className="h-1 w-16 bg-indigo-500 mb-6"></div>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us directly or fill out the form and we&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card className="border-0 shadow-sm hover:shadow-md transition-all overflow-hidden">
                    <div className="flex">
                      <div className="bg-blue-500 w-2"></div>
                      <CardContent className="p-6 w-full">
                        <div className="flex items-start">
                          <div className="bg-blue-50 p-3 rounded-full mr-4 shrink-0">
                            <Mail className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-1 text-blue-900">Email Us</h3>
                            <a href="mailto:founder@rh-dynamics.software" className="text-muted-foreground hover:text-blue-600 transition-colors">
                              founder@rh-dynamics.software
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>

                  <Card className="border-0 shadow-sm hover:shadow-md transition-all overflow-hidden">
                    <div className="flex">
                      <div className="bg-emerald-500 w-2"></div>
                      <CardContent className="p-6 w-full">
                        <div className="flex items-start">
                          <div className="bg-emerald-50 p-3 rounded-full mr-4 shrink-0">
                            <Phone className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-1 text-emerald-900">Call Us</h3>
                            <a href="tel:+919864848781" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                              +91 9864848781
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>

                  <Card className="border-0 shadow-sm hover:shadow-md transition-all overflow-hidden">
                    <div className="flex">
                      <div className="bg-purple-500 w-2"></div>
                      <CardContent className="p-6 w-full">
                        <div className="flex items-start">
                          <div className="bg-purple-50 p-3 rounded-full mr-4 shrink-0">
                            <MapPin className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-1 text-purple-900">Visit Us</h3>
                            <p className="text-muted-foreground">Near Harmoni Apartment, Magzine,<br />Guwahati, Assam, India 781171</p>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>

                  <Card className="border-0 shadow-sm hover:shadow-md transition-all overflow-hidden">
                    <div className="flex">
                      <div className="bg-amber-500 w-2"></div>
                      <CardContent className="p-6 w-full">
                        <div className="flex items-start">
                          <div className="bg-amber-50 p-3 rounded-full mr-4 shrink-0">
                            <Clock className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-1 text-amber-900">Business Hours</h3>
                            <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="lg:col-span-3 shadow-lg border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-indigo-600 to-blue-500 w-full"></div>
                <CardHeader className="pt-8 pb-4">
                  <CardTitle className="text-2xl text-indigo-900">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <User className="h-5 w-5 text-indigo-400" />
                              </div>
                              <FormControl>
                                <Input
                                  placeholder="Your Name"
                                  className="pl-10 bg-muted/30 border-indigo-100 focus:border-indigo-300"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage className="text-xs text-red-500 mt-1" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <AtSign className="h-5 w-5 text-indigo-400" />
                              </div>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="Your Email"
                                  className="pl-10 bg-muted/30 border-indigo-100 focus:border-indigo-300"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage className="text-xs text-red-500 mt-1" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <div className="relative">
                              <div className="absolute top-3 left-0 flex items-start pl-3 pointer-events-none">
                                <MessageCircle className="h-5 w-5 text-indigo-400" />
                              </div>
                              <FormControl>
                                <Textarea
                                  placeholder="Your Message"
                                  className="pl-10 bg-muted/30 border-indigo-100 focus:border-indigo-300 min-h-[150px]"
                                  {...field}
                                />
                              </FormControl>
                            </div>
                            <FormMessage className="text-xs text-red-500 mt-1" />
                          </FormItem>
                        )}
                      />

                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-indigo-600" />
                        <p className="text-sm text-muted-foreground">
                          Your information is protected by our <Link href="/privacy-policy" className="text-indigo-600 underline underline-offset-4 hover:text-indigo-700">Privacy Policy</Link>
                        </p>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </div>
                        )}
                      </Button>

                      {/* Trust indicators and response time expectations */}
                      <div className="mt-6 pt-6 border-t border-indigo-100 dark:border-indigo-800/30">
                        <div className="flex items-center justify-center mb-4">
                          <div className="h-1 w-10 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full mx-2"></div>
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">What to expect</span>
                          <div className="h-1 w-10 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full mx-2"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                          <div className="p-3 rounded-lg bg-indigo-50/50 dark:bg-indigo-900/10">
                            <div className="flex justify-center mb-2">
                              <div className="p-1.5 rounded-full bg-indigo-100 dark:bg-indigo-800/30">
                                <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-xs text-indigo-900 dark:text-indigo-300 font-medium">Response within 24 hours</p>
                          </div>

                          <div className="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-900/10">
                            <div className="flex justify-center mb-2">
                              <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-800/30">
                                <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-xs text-blue-900 dark:text-blue-300 font-medium">Secure communication</p>
                          </div>

                          <div className="p-3 rounded-lg bg-purple-50/50 dark:bg-purple-900/10">
                            <div className="flex justify-center mb-2">
                              <div className="p-1.5 rounded-full bg-purple-100 dark:bg-purple-800/30">
                                <svg className="h-4 w-4 text-purple-600 dark:text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-xs text-purple-900 dark:text-purple-300 font-medium">Free consultation</p>
                          </div>
                        </div>

                        <div className="text-center mt-4">
                          <p className="text-xs text-muted-foreground">
                            We're available during business hours to answer your inquiries.
                            For immediate assistance, please call <a href="tel:+919864848781" className="text-indigo-600 dark:text-indigo-400 font-medium">+91 9864848781</a>
                          </p>
                        </div>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900/20 dark:to-gray-900/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4 dark:bg-indigo-900/30 dark:text-indigo-400">Our Locations</div>
              <h2 className="text-3xl font-bold mb-3 text-indigo-900 dark:text-indigo-100">Find Us</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit our office in Guwahati to discuss your project requirements in person. We're conveniently located and always happy to meet with clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 dark:border-indigo-900/30 bg-white dark:bg-gray-800">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-200/80 to-blue-200/20 dark:from-indigo-600/20 dark:to-blue-700/10 rounded-bl-2xl z-10"></div>

                <div className="relative h-[350px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent z-10 pointer-events-none"></div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.6834937349814!2d91.82196707592636!3d26.14258579748702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b3862e61be7%3A0xb2e781a61e3407f3!2sHarmony%20Apartment!5e0!3m2!1sen!2sin!4v1719429845301!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>

                <div className="p-8 bg-white dark:bg-gray-800 relative z-20">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="font-medium text-xl flex items-center gap-2 mb-3 text-indigo-900 dark:text-indigo-300">
                        <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                          <Building className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        Guwahati Office
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Near Harmoni Apartment, Magzine,<br />Guwahati, Assam, India 781171
                      </p>
                    </div>

                    <div className="mt-4 md:mt-0 flex md:flex-col gap-4 justify-start">
                      <a
                        href="https://maps.google.com/?q=Harmoni+Apartment+Guwahati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-sm font-medium transition-all shadow-sm hover:shadow-md"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>

                      <a
                        href="tel:+919864848781"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 text-emerald-700 hover:bg-gradient-to-r hover:from-emerald-100 hover:to-blue-100 hover:text-emerald-800 text-sm font-medium transition-all dark:from-emerald-900/20 dark:to-blue-900/20 dark:border-emerald-800/30 dark:text-emerald-400"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Office
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                We also provide remote consultations for clients outside Guwahati.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-purple-50 px-4 py-3 rounded-lg flex items-center shadow-sm dark:bg-purple-900/20">
                  <div className="p-2 rounded-full bg-purple-100 mr-3 dark:bg-purple-800/50">
                    <Smartphone className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm text-purple-800 dark:text-purple-300">Virtual Meetings</span>
                </div>

                <div className="bg-rose-50 px-4 py-3 rounded-lg flex items-center shadow-sm dark:bg-rose-900/20">
                  <div className="p-2 rounded-full bg-rose-100 mr-3 dark:bg-rose-800/50">
                    <Mail className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                  </div>
                  <span className="text-sm text-rose-800 dark:text-rose-300">Email Support</span>
                </div>

                <div className="bg-amber-50 px-4 py-3 rounded-lg flex items-center shadow-sm dark:bg-amber-900/20">
                  <div className="p-2 rounded-full bg-amber-100 mr-3 dark:bg-amber-800/50">
                    <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span className="text-sm text-amber-800 dark:text-amber-300">24/7 Availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <DialogContent className="sm:max-w-[90%] md:max-w-md max-h-[90vh] overflow-auto p-4 sm:p-6 w-[95%] sm:w-auto rounded-xl">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-center text-xl text-emerald-700">Message Sent Successfully!</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center my-3 sm:my-4">
            <div className="rounded-full bg-emerald-100 p-2 sm:p-3">
              <div className="rounded-full bg-emerald-200 p-2 sm:p-3">
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="text-center text-sm sm:text-base text-muted-foreground px-2">
            Thank you for reaching out! We've received your message and will get back to you as soon as possible.
          </div>
          <DialogFooter className="sm:justify-center mt-4">
            <Button
              type="button"
              variant="default"
              className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto"
              onClick={() => setShowSuccessPopup(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
