"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from 'next/dynamic';

// Dynamically import HCaptcha with no SSR
const HCaptcha = dynamic(() => import('@hcaptcha/react-hcaptcha'), {
  ssr: false
});
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Clock, Shield, User, AtSign, MessageCircle, BriefcaseBusiness, Sparkles, Building2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
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
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000),
  hcaptchaToken: z.string().min(1, "Please complete the hCaptcha verification"),
  service: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<any>(null);

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      hcaptchaToken: "",
      service: "",
    },
    mode: 'onChange',
  });

  // Pre-fill service from URL if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const serviceQuery = params.get('service');
      if (serviceQuery) {
        form.setValue('service', serviceQuery);
      }
    }
  }, [form]);

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    if (!data.hcaptchaToken) {
      toast({
        title: "Verification Required",
        description: "Please complete the hCaptcha verification.",
        variant: "destructive",
      });
      return;
    }

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
          phone: data.phone,
          message: data.message,
          service: data.service,
          hcaptchaToken: captchaToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      // Success
      setShowSuccessPopup(true);
      form.reset();
      setCaptchaToken("");
      if (captchaRef.current) {
        captchaRef.current.resetCaptcha();
      }

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
    <div className="min-h-screen bg-background text-foreground pt-28 pb-24 overflow-hidden relative">
      {/* Background patterns and glowing orbs contained strictly to clip horizontal scroll */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20 z-0" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 text-sm tracking-wider uppercase pointer-events-none">
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black font-heading mb-6 tracking-tight">
            Let&apos;s Build <span className="text-gradient">Something Great</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Have a project in mind, need technical solutions, or ready to scale your marketing? Connect with our experts today.
          </p>
        </div>

        {/* Centered Premium Interactive Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card dark:glass-card-dark p-6 md:p-10 rounded-[2.5rem] border border-border/50 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              
              <h2 className="text-3xl font-black font-heading mb-2">Send Message</h2>
              <p className="text-muted-foreground mb-8">We usually reply within 24 hours.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  
                  {/* Service Requested (Only visible if prefilled from routing) */}
                  {form.watch("service") && (
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                              <BriefcaseBusiness className="w-5 h-5 text-primary" />
                            </div>
                            <FormControl>
                              <Input
                                readOnly
                                className="pl-12 h-12 bg-primary/5 border-primary/20 text-primary font-bold rounded-2xl cursor-default focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                                {...field}
                                value={`Service Interest: ${field.value}`}
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      )}
                    />
                  )}

                  {/* Name Input */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <User className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Your Name"
                              className="pl-12 h-12 bg-secondary/30 dark:bg-secondary/10 border-border/50 rounded-2xl focus-visible:ring-primary focus-visible:border-primary/50 text-sm"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-sm text-red-500 mt-1" />
                      </FormItem>
                    )}
                  />

                  {/* Email Input */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <AtSign className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Your Email"
                              className="pl-12 h-12 bg-secondary/30 dark:bg-secondary/10 border-border/50 rounded-2xl focus-visible:ring-primary focus-visible:border-primary/50 text-sm"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-sm text-red-500 mt-1" />
                      </FormItem>
                    )}
                  />

                  {/* Phone Input */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <Phone className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Your Phone Number"
                              className="pl-12 h-12 bg-secondary/30 dark:bg-secondary/10 border-border/50 rounded-2xl focus-visible:ring-primary focus-visible:border-primary/50 text-sm"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-sm text-red-500 mt-1" />
                      </FormItem>
                    )}
                  />

                  {/* Message Input */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <div className="absolute top-3 left-0 flex items-start pl-4 pointer-events-none">
                            <MessageCircle className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your project, goals, or questions in detail..."
                              className="pl-12 min-h-[120px] bg-secondary/30 dark:bg-secondary/10 border-border/50 rounded-2xl focus-visible:ring-primary focus-visible:border-primary/50 text-sm py-3 leading-relaxed"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-sm text-red-500 mt-1" />
                      </FormItem>
                    )}
                  />

                  {/* Privacy Flag */}
                  <div className="flex items-center gap-3 py-2">
                    <Shield className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Your information is protected by our <Link href="/privacy-policy" className="text-primary hover:underline font-semibold">Privacy Policy</Link>.
                    </p>
                  </div>

                  {/* hCaptcha Verification */}
                  <div className="flex flex-col items-center py-3 bg-secondary/10 dark:bg-black/20 rounded-2xl border border-border/50">
                    <HCaptcha
                      sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY || ""}
                      onVerify={(token: string) => {
                        setCaptchaToken(token);
                        form.setValue('hcaptchaToken', token, { shouldValidate: true });
                      }}
                      onExpire={() => {
                        setCaptchaToken('');
                        form.setValue('hcaptchaToken', '', { shouldValidate: true });
                      }}
                      onError={() => {
                        setCaptchaToken('');
                        form.setValue('hcaptchaToken', '', { shouldValidate: true });
                      }}
                      theme="dark"
                      size="normal"
                    />
                    {form.formState.errors.hcaptchaToken && (
                      <p className="text-sm text-red-500 mt-3 font-semibold">
                        {form.formState.errors.hcaptchaToken.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-13 text-base font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all rounded-full flex items-center justify-center gap-3"
                    disabled={isSubmitting || !captchaToken}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                </form>
              </Form>

            </div>
          </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-auto p-8 w-[95%] rounded-3xl border border-emerald-500/20 bg-background/95 backdrop-blur-md">
          <DialogHeader className="space-y-4 text-center flex flex-col items-center">
            <div className="rounded-full bg-emerald-500/10 p-4 border border-emerald-500/20 w-fit">
              <Sparkles className="h-10 w-10 text-emerald-500" />
            </div>
            <DialogTitle className="text-2xl font-black font-heading text-emerald-500">Message Received!</DialogTitle>
          </DialogHeader>
          
          <p className="text-center text-muted-foreground text-lg leading-relaxed mt-4">
            Thank you for reaching out. We have received your request and our leadership team will review and get back to you within 24 hours.
          </p>
          
          <DialogFooter className="mt-8 flex justify-center w-full">
            <Button
              type="button"
              className="bg-emerald-600 hover:bg-emerald-700 w-full rounded-full h-14 text-base font-bold"
              onClick={() => setShowSuccessPopup(false)}
            >
              Back to Site
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
