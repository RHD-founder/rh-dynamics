import type { Metadata } from "next";
import { ReviewClientPage } from "@/components/pages/review-client-page";

export const metadata: Metadata = {
  title: "Client Feedback & Review | RH Dynamics",
  description:
    "Direct client feedback portal for RH Dynamics. Share your experience with our software development, clinical platforms, and systems engineering team.",
  robots: {
    index: false, // Keep it unindexed or noindex so competitors don't crawl it, but clients can access directly via link!
    follow: false,
  },
};

export default function ReviewPage() {
  return <ReviewClientPage />;
}
