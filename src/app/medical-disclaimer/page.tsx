import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical Disclaimer | CSUK - C-Section UK',
  description: 'Important medical disclaimer information for CSUK content and resources.',
}

export default function MedicalDisclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-navy mb-8">Medical Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">Important Note</h2>
              <p>
                The contents of the <strong>c-sectionuk</strong> website, such as text, graphics, images and other material ('content') are for information and educational purposes only.
              </p>
              
              <p>
                The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              
              <p>
                Always seek the advice of your doctor, midwife or other qualified healthcare providers with any questions you may have regarding your pregnancy or you or your baby's health. The information on this website is general in nature and not specific to you, the reader or listener, and is not intended as individual medical advice.
              </p>
              
              <p>
                The content provided across <strong>c-sectionuk</strong> resources encourages you to make your own prenatal and postnatal care decisions based on research and in partnership with qualified healthcare professionals.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}