import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restricted Command Center | RH Dynamics",
  description: "Internal administrative terminal for RH Dynamics engineering.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function SeoCommandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
