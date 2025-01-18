import Image from 'next/image';
import { Building2, Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl font-bold mb-6">About RH Dynamics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Founded in Guwahati, Assam, RH Dynamics has been at the forefront of digital innovation
            in Northeast India. We specialize in creating robust software solutions that help
            businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building2 className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing boundaries with cutting-edge solutions
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                Working together to achieve excellence
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-muted-foreground">
                Delivering excellence in every project
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                Building trust through transparency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/img.jpeg"
                  alt="Hashim Ahmed"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Hashim Ahmed</h3>
              <p className="text-muted-foreground">CEO & Founder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

