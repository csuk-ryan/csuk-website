import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | CSUK - C-Section UK',
  description: 'Legal terms and conditions governed by Guernsey Law between users and The British Birthing Academy Limited trading as c-sectionuk.',
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-navy mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              The document contains legal terms governed by Guernsey Law between the user and The British Birthing Academy Limited (BBA) trading as c-sectionuk.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">1. Course Content Disclaimer</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Courses taught by qualified midwives and antenatal instructors</li>
                <li>Provides general education about pregnancy and childbirth</li>
                <li>Cannot give individual medical advice</li>
                <li>Users must consult healthcare professionals for personal health concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">2. Liability Limitations</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No responsibility for loss, damage, or injury</li>
                <li>Courses are supplemental to hospital/care provider information</li>
                <li>Instructors not held responsible for complications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">3. Refund Policy</h2>
              <p>Refers users to a separate Refund Policy page</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">4. Website Terms of Use</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Temporary website access</li>
                <li>Intellectual property rights</li>
                <li>Limitations on content usage</li>
                <li>Liability exclusions</li>
                <li>Jurisdiction under Guernsey law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">5. Contact Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email: info@csectionuk.com</li>
                <li>Address: Studio 24, 24 Fountains Street, Guernsey</li>
                <li>Company Number: 67948</li>
                <li>Data Protection Number: DPA3336</li>
              </ul>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-8">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Important:</strong> The document emphasizes that users should "consult your medical practitioner before using our products and do not consider our services as a substitute for medical advice."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}