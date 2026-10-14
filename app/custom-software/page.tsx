import type { Metadata } from "next";
import { CustomSoftwareClientPage } from "@/components/pages/custom-software-client-page";

export const metadata: Metadata = {
  title: "Custom Software Development & Enterprise ERP Company in Guwahati, Assam",
  description:
    "RH Dynamics builds bespoke Enterprise Resource Planning (ERP), business workflow automation, SaaS platforms, and high-performance web applications in Guwahati, Assam. Tailor-made for manufacturing, logistics, retail & institutions.",
  keywords: [
    "custom software development guwahati",
    "erp software company assam",
    "custom erp development northeast india",
    "enterprise software development company india",
    "business automation software guwahati",
    "bespoke saas development northeast",
    "best software developers in assam",
    "inventory management software guwahati",
    "it consultancy guwahati"
  ],
  alternates: {
    canonical: "https://rhdynamics.in/custom-software",
  },
  openGraph: {
    title: "Custom Software & Enterprise ERP Solutions | RH Dynamics Guwahati",
    description:
      "Replace legacy spreadsheets and disconnected software with a custom cloud ERP tailored to your business operations. Engineered in Guwahati for regional and global enterprises.",
    url: "https://rhdynamics.in/custom-software",
    images: ["/opengraph-image"],
  },
};

export default function CustomSoftwarePage() {
  return <CustomSoftwareClientPage />;
}
