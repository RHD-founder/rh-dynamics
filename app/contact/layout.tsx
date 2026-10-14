import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact RH Dynamics | Software & Web Development in Guwahati, Assam",
  description:
    "Get in touch with RH Dynamics at our Guwahati office near Downtown Hospital, Sarumotoria. Request a demo or consultation for websites, Custom ERP, HSMS software, or mobile applications. Call +91 86388 75149.",
  keywords: [
    "contact rh dynamics",
    "software company contact guwahati",
    "hire web developer guwahati",
    "software development quote assam",
    "it company near downtown hospital guwahati",
    "rh dynamics office address"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/contact",
  },
  openGraph: {
    title: "Contact RH Dynamics | Software Engineers in Guwahati, Assam",
    description:
      "Ready to scale your business? Speak directly with our engineering team in Guwahati, Assam. Call +91 86388 75149.",
    url: "https://rhdynamics.in/contact",
    images: ["/opengraph-image"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
