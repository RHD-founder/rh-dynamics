import { NotFoundClient } from "@/components/pages/not-found-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | RH Dynamics",
  description: "The requested route or module does not exist on RH Dynamics. Explore our RH CORE™ clinical software or custom cloud ERP platforms.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
