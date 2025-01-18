import Link from 'next/link';

export default function ShippingPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          RH Dynamics is primarily a digital services provider. As such, most of our products and services are delivered electronically. However, for any physical products or materials that may be shipped, the following policy applies:
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Digital Deliveries</h2>
        <p>
          For our digital products and services, delivery is typically instantaneous or as per the agreed-upon project timeline. You will receive access or download instructions via email once your purchase is complete.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Physical Shipments</h2>
        <p>
          In the rare event that we need to ship physical items:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>We ship within India only.</li>
          <li>Standard shipping typically takes 5-7 business days.</li>
          <li>Express shipping options may be available upon request.</li>
          <li>Shipping costs, if any, will be calculated at checkout.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Tracking</h2>
        <p>
          For physical shipments, a tracking number will be provided via email once your item has been dispatched.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">International Clients</h2>
        <p>
          For our international clients, all services and products are delivered digitally unless explicitly stated otherwise in our agreement.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions about our Shipping Policy, please contact us at <Link href="mailto:support@rhdynamics.com" className="text-blue-600 hover:underline">support@rhdynamics.com</Link>.
        </p>
      </div>
    </div>
  );
}

