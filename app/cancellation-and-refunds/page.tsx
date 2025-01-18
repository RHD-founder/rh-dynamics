import Link from 'next/link';

export default function CancellationAndRefunds() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cancellation and Refunds Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          At RH Dynamics, we strictly do not cover any return policy. Please note that all sales are final and non-refundable. Any exceptions or agreements outside this policy must be explicitly stated and documented in the agreed-upon contract.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions about our Cancellation and Refunds Policy, please contact us at <Link href="mailto:founder@rh-dynamics.software" className="text-blue-600 hover:underline">founder@rh-dynamics.software</Link>.
        </p>
      </div>
    </div>
  );
}
