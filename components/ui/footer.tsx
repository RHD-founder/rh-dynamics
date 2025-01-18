import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">RH Dynamics</h3>
            <p className="text-muted-foreground">
              Leading software development company in Northeast India, delivering innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-muted-foreground hover:text-foreground">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation-and-refunds" className="text-muted-foreground hover:text-foreground">
                  Cancellation and Refunds
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-muted-foreground hover:text-foreground">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Software Development</li>
              <li className="text-muted-foreground">Mobile Development</li>
              <li className="text-muted-foreground">Web Development</li>
              <li className="text-muted-foreground">IT Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-muted-foreground not-italic">
            <p>Near Harmoni Apartment, Magzine, Guwahati, Assam, India 781171</p>
            <p>Near AGV Bank, Goranga, Golaghat, Assam, India 785603</p>
            <p className="mt-2">
            <a href="mailto:founder@rh-dynamics.software" className="text-blue-600 hover:underline">founder@rh-dynamics.software</a>
          </p>
          <p>
            <a href="tel:+918638875149" className="text-blue-600 hover:underline">+91 8638875149</a>
          </p>
            </address>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/rh-dymanics/" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/rh_dynamics/" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RH Dynamics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
