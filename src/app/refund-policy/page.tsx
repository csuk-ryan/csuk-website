import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy | CSUK - C-Section UK',
  description: 'CSUK refund policy for courses, bundled products, and online private education sessions.',
}

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-navy mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              c-sectionuk ("CSUK") is a trading name of British Birthing Academy Limited ("BBA"). BBA is a Guernsey registered company. In this Refund Policy we will refer to ourselves as "CSUK" or "us/we/our".
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">1. Individual Products (Courses)</h2>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>14-day full refund from the date of purchase for courses on Teachable Native Gateways.</li>
                <li>Digital download/course purchases have a 14-day refund. Refund requests should follow Teachable's process.</li>
                <li>Refund process follows Teachable's terms of use policy.</li>
                <li>
                  Teachable may refuse refunds for policy abuse, such as:
                  <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                    <li>Consecutive monthly refund requests</li>
                    <li>Repeat purchasing and refunding</li>
                  </ul>
                </li>
                <li>CSUK may refuse refunds if digital downloads have been fully used.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">2. Bundled Products (Courses)</h2>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>Bundled course packages follow the same refund policy as individual courses.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">3. Online Private Education Sessions</h2>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>Cancellations allowed with full refund up to 24 hours before the call.</li>
                <li>
                  No refunds for:
                  <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                    <li>Cancellations within 24 hours of appointment</li>
                    <li>No-show appointments</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">4. General Provisions</h2>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>Clients are responsible for understanding the refund policy.</li>
                <li>CSUK reserves the right to provide refunds at its sole discretion.</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}