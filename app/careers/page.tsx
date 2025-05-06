import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Heart, Coffee, Award, Lightbulb, Users, Zap, Send } from "lucide-react";
import Link from "next/link";

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    location: "Guwahati, Assam",
    type: "Full-time",
    description: "We're looking for an experienced Full Stack Developer proficient in React, Node.js, and cloud technologies to help build innovative solutions for our clients across various industries.",
    skills: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    title: "Mobile App Developer",
    location: "Guwahati, Assam",
    type: "Full-time",
    description: "Join us in building next-generation mobile applications for iOS and Android platforms. Experience with React Native or Flutter is a plus.",
    skills: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    description: "Design beautiful and functional user interfaces for web and mobile applications. Should have a strong portfolio showcasing previous work.",
    skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"]
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-100 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/careers-team.jpg"
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <Badge className="mb-6 px-4 py-1.5 bg-purple-200 text-purple-700 border-0 text-sm inline-block">Join Our Team</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-900">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Be part of a dynamic team that&apos;s shaping the future of technology in Northeast India.
            We&apos;re always looking for talented individuals to join our mission.
          </p>
          <Button size="lg" className="mt-4 bg-purple-600 hover:bg-purple-700">
            View Open Positions
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-3 py-1 bg-teal-100 text-teal-700 border-0 text-sm">Our Culture</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-900">Our Culture</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              At RH Dynamics, we foster a collaborative, innovative, and inclusive work environment where everyone's ideas are valued.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent z-10"></div>
              <Image
                src="/careers-team.jpg"
                alt="Our team culture"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Grow With Us</h3>
                <p className="text-white/80 max-w-md">
                  Our team consists of passionate individuals who are dedicated to creating impactful
                  software solutions and driving technological advancement in the region.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe in constant learning, growth, and maintaining a healthy work-life balance.
                Our collaborative approach allows us to tackle complex challenges while ensuring
                every team member has the opportunity to contribute and develop their skills.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-pink-100">
                  <div className="bg-pink-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Heart className="h-7 w-7 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-pink-700">Supportive</h3>
                  <p className="text-muted-foreground">Team that feels like family</p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-amber-100">
                  <div className="bg-amber-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Lightbulb className="h-7 w-7 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-amber-700">Innovative</h3>
                  <p className="text-muted-foreground">Creative problem solving</p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-blue-100">
                  <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Coffee className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Balanced</h3>
                  <p className="text-muted-foreground">Work-life harmony</p>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-indigo-100">
                  <div className="bg-indigo-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Zap className="h-7 w-7 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-indigo-700">Dynamic</h3>
                  <p className="text-muted-foreground">Always evolving</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-teal-900">Join a team that values you</h3>
              </div>
              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-4 shrink-0">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-teal-800">Collaborative Teams</h4>
                    <p className="text-sm text-muted-foreground">Work with talented professionals in a supportive environment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-4 shrink-0">
                    <Award className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-teal-800">Recognition</h4>
                    <p className="text-sm text-muted-foreground">Your contributions are valued and celebrated</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-full mr-4 shrink-0">
                    <Briefcase className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-teal-800">Career Growth</h4>
                    <p className="text-sm text-muted-foreground">Clear paths for advancement and skill development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50/30">
        <div className="container px-4 mx-auto">
          <Badge className="mb-4 px-3 py-1 bg-amber-100 text-amber-700 border-0 text-sm block mx-auto w-fit">Why Join Us</Badge>
          <h2 className="text-3xl font-bold text-center mb-6 text-amber-900">Why Join RH Dynamics?</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We offer more than just a job – we provide a career with purpose, growth opportunities, and a supportive environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-amber-100">
              <div className="bg-amber-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Briefcase className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Growth Opportunities</h3>
              <p className="text-muted-foreground">
                Continuous learning, professional development, and clear career advancement paths.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-orange-100">
              <div className="bg-orange-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible working hours, remote work options, and generous time-off policies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-red-100">
              <div className="bg-red-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">Competitive Benefits</h3>
              <p className="text-muted-foreground">
                Attractive compensation, health insurance, and performance-based incentives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50/40 to-blue-50/20">
        <div className="container px-4 mx-auto">
          <Badge className="mb-4 px-3 py-1 bg-indigo-100 text-indigo-700 border-0 text-sm block mx-auto w-fit">Opportunities</Badge>
          <h2 className="text-3xl font-bold text-center mb-6 text-indigo-900">Current Openings</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore our current job opportunities and find the perfect role to match your skills and career aspirations.
          </p>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow border border-indigo-100">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-indigo-900">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-indigo-600" />
                        <span>{job.location}</span>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">{job.type}</Badge>
                    </div>
                    <p className="mb-4 text-muted-foreground">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {job.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="bg-indigo-50/80 border-indigo-200 text-indigo-700">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 shrink-0">
                    <Button className="bg-indigo-600 hover:bg-indigo-700">Apply Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Don't see a perfect match? We're always looking for talented individuals.</p>
            <Link href="/contact">
              <Button variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
