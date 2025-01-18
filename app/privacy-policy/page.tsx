import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          RH Dynamics ("us", "we", or "our") operates as an MSME Registered company. This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of our services.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Information Collection and Use</h2>
        <p>
          While using our services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, email address, phone number, and company details ("Personal Information").
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Log Data</h2>
        <p>
          We collect information that your browser sends whenever you visit our website or use our services ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Data Protection</h2>
        <p>
          As an MSME registered company, we comply with all applicable data protection laws in India. We implement suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Changes To This Privacy Policy</h2>
        <p>
          This Privacy Policy is effective as of {new Date().toLocaleDateString()} and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:privacy@rhdynamics.com" className="text-blue-600 hover:underline">privacy@rhdynamics.com</Link>.
        </p>
      </div>
    </div>
  );
}

