import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    location: "Guwahati, Assam",
    type: "Full-time",
    description: "We're looking for an experienced Full Stack Developer to join our team...",
  },
  {
    title: "Mobile App Developer",
    location: "Guwahati, Assam",
    type: "Full-time",
    description: "Join us in building next-generation mobile applications...",
  },
  // Add more job openings as needed
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of a dynamic team that&apos;s shaping the future of technology in Northeast India.
            We&apos;re always looking for talented individuals to join our mission.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join RH Dynamics?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Briefcase className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Continuous learning and career advancement opportunities
              </p>
            </div>
            <div className="text-center p-6">
              <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible working hours and remote work options
              </p>
            </div>
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Great Location</h3>
              <p className="text-muted-foreground">
                Modern office in the heart of Guwahati
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                    <p className="mt-2 text-muted-foreground">{job.description}</p>
                  </div>
                  <Link href="/careers">
                    <Button>Apply Now</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
