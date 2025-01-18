import Link from 'next/link';

export default function ShippingPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          RH Dynamics is primarily a digital services provider. As such, most of our products and services are delivered electronically and  the following policy applies:
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Digital Deliveries</h2>
        <p>
          For our digital products and services, delivery is typically instantaneous or as per the agreed-upon project timeline. You will receive access or download instructions via email once your purchase is complete.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">International Clients</h2>
        <p>
          For our international clients, all services and products are delivered digitally unless explicitly stated otherwise in our agreement.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions about our Shipping Policy, please contact us at <Link href="mailto:founder@rh-dynamics.software" className="text-blue-600 hover:underline">founder@rh-dynamics.software</Link>.
        </p>
      </div>
    </div>
  );
}

