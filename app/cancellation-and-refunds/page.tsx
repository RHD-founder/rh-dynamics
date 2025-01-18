import Link from 'next/link';

export default function CancellationAndRefunds() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cancellation and Refunds Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          At RH Dynamics, we strive to ensure your satisfaction with our digital innovation and software solutions. This policy outlines our approach to cancellations and refunds.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Digital Services</h2>
        <p>
          For our digital services and custom software solutions:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Cancellations are accepted within 48 hours of placing an order, provided work has not commenced.</li>
          <li>For ongoing projects, cancellation terms will be as per the individual contract agreements.</li>
          <li>Refunds for incomplete work will be assessed on a case-by-case basis, considering the amount of work already performed.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Digital Products</h2>
        <p>
          For any downloadable digital products:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Refunds are available within 14 days of purchase if the product is unused and undownloaded.</li>
          <li>Once a digital product is downloaded, refunds are not available unless the product is defective.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Physical Products</h2>
        <p>
          In the rare event we ship physical products:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Returns are accepted within 30 days of delivery for unopened, unused items.</li>
          <li>Refunds will be processed within 14 days of receiving the returned item.</li>
          <li>Shipping costs for returns are the responsibility of the customer unless the item is defective.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4">How to Request a Cancellation or Refund</h2>
        <p>
          To request a cancellation or refund, please contact our support team at <Link href="mailto:support@rhdynamics.com" className="text-blue-600 hover:underline">support@rhdynamics.com</Link> with your order details and reason for the request.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Exceptions</h2>
        <p>
          We reserve the right to make exceptions to this policy on a case-by-case basis. Any exceptions will be at the sole discretion of RH Dynamics management.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions about our Cancellation and Refunds Policy, please contact us at <Link href="mailto:founder@rh-dynamics.software" className="text-blue-600 hover:underline">support@rhdynamics.com</Link>.
        </p>
      </div>
    </div>
  );
}
