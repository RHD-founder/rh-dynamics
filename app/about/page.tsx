import Image from 'next/image';
import { Building2, Users, Target, Award, Clock, Trophy, BookOpen, Rocket, Code, LineChart, Eye, Heart, Lightbulb, Briefcase, Zap, Shield } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const teamMembers = [
    { name: "Hashim Ahmed", role: "CEO & Founder", image: "/img.jpeg" },
    { name: "Arup Gogoi", role: "CTO", image: "/arup.jpeg" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-background">
        <div className="container px-4 mx-auto">
          <Badge className="mb-6 px-4 py-1.5 bg-purple-100 text-purple-700 border-0 text-sm">About Us</Badge>
          <h1 className="text-4xl font-bold mb-6 text-purple-900">About RH Dynamics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Founded in Guwahati, Assam, RH Dynamics has been at the forefront of digital innovation
            in Northeast India. We specialize in creating robust software solutions that help
            businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/10"></div>
              <Image
                src="/journey.jpg"
                alt="RH Dynamics journey"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="order-1 md:order-2">
              <Badge className="mb-4 px-3 py-1 bg-indigo-100 text-indigo-700 border-0 text-sm">Our Story</Badge>
              <h2 className="text-3xl font-bold mb-6 text-indigo-900">Our Journey</h2>
              <p className="text-muted-foreground mb-4">
                RH Dynamics was established with a vision to transform the technological landscape of Northeast India.
                Starting as a small team of passionate developers, we've grown into a comprehensive software
                development company serving clients across industries.
              </p>
              <p className="text-muted-foreground mb-4">
                Our expertise in cutting-edge technologies and commitment to excellence has allowed us to deliver
                innovative solutions that address complex business challenges.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-indigo-50 p-4 rounded-lg text-center shadow-sm">
                  <Rocket className="h-8 w-8 mx-auto text-indigo-600 mb-2" />
                  <p className="font-bold text-2xl text-indigo-900">5+</p>
                  <p className="text-sm text-indigo-700">Years Experience</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center shadow-sm">
                  <Briefcase className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                  <p className="font-bold text-2xl text-blue-900">50+</p>
                  <p className="text-sm text-blue-700">Projects Completed</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg text-center shadow-sm">
                  <Heart className="h-8 w-8 mx-auto text-emerald-600 mb-2" />
                  <p className="font-bold text-2xl text-emerald-900">20+</p>
                  <p className="text-sm text-emerald-700">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-emerald-50/30">
        <div className="container px-4 mx-auto">
          <Badge className="mx-auto mb-4 px-3 py-1 bg-teal-100 text-teal-700 border-0 text-sm block w-fit">Our Purpose</Badge>
          <h2 className="text-3xl font-bold text-center mb-10 text-teal-900">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-teal-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-teal-700">
                <Zap className="h-6 w-6 mr-3 text-teal-500" />
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses in Northeast India with innovative software solutions that drive
                growth and transformation. We aim to bridge the technological gap and bring world-class
                digital capabilities to organizations of all sizes in the region.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-emerald-700">
                <Eye className="h-6 w-6 mr-3 text-emerald-500" />
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading software development company in Northeast India, recognized for our
                technical excellence, innovative solutions, and commitment to client success. We envision
                creating a tech ecosystem that fosters growth and positions the region as a hub for digital innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-background">
        <div className="container px-4 mx-auto">
          <Badge className="mx-auto mb-4 px-3 py-1 bg-amber-100 text-amber-700 border-0 text-sm block w-fit">What We Stand For</Badge>
          <h2 className="text-3xl font-bold text-center mb-6 text-amber-900">Our Values</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            At RH Dynamics, our core values guide everything we do, from how we develop solutions
            to how we interact with our clients and community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-background rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-amber-100">
              <div className="bg-amber-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-700">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing boundaries with cutting-edge solutions
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-orange-100">
              <div className="bg-orange-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-700">Collaboration</h3>
              <p className="text-muted-foreground">
                Working together to achieve excellence
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-rose-100">
              <div className="bg-rose-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Code className="h-10 w-10 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-rose-700">Quality</h3>
              <p className="text-muted-foreground">
                Delivering excellence in every project
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-lg shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-blue-100">
              <div className="bg-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Integrity</h3>
              <p className="text-muted-foreground">
                Building trust through transparency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-background">
        <div className="container px-4 mx-auto">
          <Badge className="mx-auto mb-4 px-3 py-1 bg-indigo-100 text-indigo-700 border-0 text-sm block w-fit">Our Team</Badge>
          <h2 className="text-3xl font-bold text-center mb-4 text-indigo-900">Leadership Team</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Meet the experts behind RH Dynamics who are driving innovation and excellence in software development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border border-indigo-100">
                <div className="h-48 w-48 rounded-full overflow-hidden mb-6 border-4 border-indigo-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-indigo-900">{member.name}</h3>
                <p className="text-indigo-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
