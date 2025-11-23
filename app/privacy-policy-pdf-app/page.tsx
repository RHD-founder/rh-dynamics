import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl font-sans text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy for PDF Manager Pro</h1>

            <div className="prose max-w-none space-y-6">
                <p className="text-sm text-gray-500 font-medium">Effective Date: November 23, 2025</p>

                <p>
                    This Privacy Policy governs the manner in which <strong>PDF Manager Pro</strong> (the "App") collects, uses, maintains, and discloses information collected from users (each, a "User") of the App. This policy applies to the App and all products and services offered by <strong>RH Dynamics</strong>.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">1. No Data Collection (Local Processing Only)</h2>
                    <p className="mb-4">Our App is built with a "Local-First" architecture. This means:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>All PDF processing happens directly on your device.</li>
                        <li>We <strong>do not</strong> upload your files to any external server for merging or reordering.</li>
                        <li>We <strong>do not</strong> collect, store, or transmit any personal identification information (PII) such as your name, email address, phone number, or location.</li>
                        <li>We <strong>do not</strong> track your usage behavior or analytics.</li>
                    </ul>
                    <p className="mt-4">
                        Your documents remain strictly private and never leave your phone's internal storage unless you explicitly choose to share the final output via another app (e.g., email or WhatsApp).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">2. Device Permissions We Request</h2>
                    <p className="mb-4">To function correctly, the App requires the following permissions on your Android device. These permissions are used solely for the local functionality of the app.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Read/Write External Storage:</strong> This is required to allow you to select PDF files from your device storage and to save the final merged PDF file back to your device.</li>
                        <li><strong>Internet Access:</strong> While the app functions offline, this standard permission is included by the underlying Expo framework for development updates. The production app does not use the internet to transmit your file data.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">3. Data Safety Section (Google Play)</h2>
                    <p className="mb-4">For the purposes of the Google Play Data Safety form, you can declare the following:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Does your app collect or share any of the required user data types?</strong> ➝ No.</li>
                        <li><strong>Is data encrypted in transit?</strong> ➝ Not Applicable (since no data is transmitted).</li>
                        <li><strong>Do you provide a way for users to request that their data be deleted?</strong> ➝ Not Applicable (since we do not collect any data to delete).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">4. Third-Party Libraries</h2>
                    <p className="mb-4">The App uses trusted open-source libraries to function. These libraries run locally on your device and are subject to their own licenses, but they do not collect user data on our behalf.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Expo SDK:</strong> For accessing device file systems.</li>
                        <li><strong>pdf-lib:</strong> For manipulating PDF documents.</li>
                        <li><strong>React Native:</strong> The framework used to build the app.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">5. Children's Privacy</h2>
                    <p>
                        Our App does not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. Since our App does not collect data at all, it is safe for users of all ages.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">6. Changes to This Privacy Policy</h2>
                    <p>
                        RH Dynamics has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to check this page frequently for any changes to stay informed.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">7. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this App, please contact us at:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <p className="font-bold text-lg mb-2">RH Dynamics</p>
                        <ul className="space-y-2">
                            <li>
                                <span className="font-semibold">Email:</span> <a href="mailto:founder@rh-dynamics.software" className="text-blue-600 hover:underline">founder@rh-dynamics.software</a>
                            </li>
                            <li>
                                <span className="font-semibold">Website:</span> <a href="https://rh-dynamics.software" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://rh-dynamics.software</a>
                            </li>
                            <li>
                                <span className="font-semibold">Address:</span> Magazine, Guwahati, Assam, India, 781017
                            </li>
                        </ul>
                    </div>
                </section>

                <p className="text-sm text-gray-400 mt-8 pt-4 border-t border-gray-100">
                    This document was last updated on November 23, 2025.
                </p>
            </div>
        </div>
    );
}