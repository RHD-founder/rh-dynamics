import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the website operated by RH Dynamics ("us", "we", or "our").
        </p>
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Use of Service</h2>
        <p>
          RH Dynamics provides digital innovation and software solutions. Our services are intended for businesses and individuals seeking to enhance their digital presence and operations.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of RH Dynamics and its licensors. The Service is protected by copyright, trademark, and other laws of India and foreign countries.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">MSME Registration</h2>
        <p>
          RH Dynamics is a registered Micro, Small, and Medium Enterprise (MSME) in India. Our MSME registration affirms our commitment to the growth of small businesses and adherence to relevant Indian regulations.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Limitation of Liability</h2>
        <p>
          In no event shall RH Dynamics, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at <Link href="mailto:founder@rh-dynamics.software" className="text-blue-600 hover:underline">contact@rhdynamics.com</Link>.
        </p>
      </div>
    </div>
  );
}

