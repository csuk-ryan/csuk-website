import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | CSUK - C-Section UK',
  description: 'Privacy policy detailing how personal information is collected, used, and shared when visiting csectionuk.com.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-navy mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              This privacy policy details how personal information is collected, used, and shared when visiting www.csectionuk.com.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">1. Information Collected</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Device Information</strong> (automatically collected via browser, IP address, cookies)</li>
                <li><strong>Order Information</strong> (name, billing/shipping address, payment details, contact info)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">2. How Information is Used</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fulfill orders</li>
                <li>Communicate with customers</li>
                <li>Screen for potential fraud</li>
                <li>Improve website functionality</li>
                <li>Provide marketing information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">3. Privacy Protection</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Stored securely in computer system</li>
                <li>Limited access to personal data</li>
                <li>Complies with Guernsey data protection requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">4. Information Sharing</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Uses third-party platforms like Squarespace and Google Analytics</li>
                <li>May share information to comply with legal requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">5. User Rights</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Request personal data copy</li>
                <li>Correct inaccurate information</li>
                <li>Withdraw consent</li>
                <li>Opt out of marketing messages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">6. Contact Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email: info@csectionuk.com</li>
                <li>Data Protection Office in Guernsey available for complaints</li>
              </ul>
            </section>

            <p className="mt-8">
              The policy emphasizes transparency and user control over personal information, with clear mechanisms for managing data privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}