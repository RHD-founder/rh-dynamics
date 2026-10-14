import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RH Dynamics | Top IT & Software Innovators in Guwahati, Assam",
  description:
    "Discover RH Dynamics: Northeast India's pioneering software powerhouse based in Guwahati, Assam. Building cutting-edge software products, hospital systems (HSMS), and enterprise solutions with global engineering standards.",
  keywords: [
    "about rh dynamics",
    "software company guwahati assam",
    "it startup guwahati",
    "startup india software company northeast",
    "tech innovators assam",
    "best tech team guwahati"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/about",
  },
  openGraph: {
    title: "About RH Dynamics | Pioneering Software in Northeast India",
    description:
      "Northeast India's premier software powerhouse based in Guwahati, Assam. Delivering world-class software products, hospital systems, and digital ecosystems.",
    url: "https://rhdynamics.in/about",
    images: ["/opengraph-image"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
