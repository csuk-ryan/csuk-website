import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inclusivity Statement | CSUK - C-Section UK',
  description: 'Our commitment to creating an inclusive and welcoming environment for all, regardless of sexual orientation, gender identity, age, race, or disability.',
}

export default function InclusivityStatement() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-navy mb-8">Inclusivity Statement</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">Our Inclusivity Statement</h2>
              <p>
                At CSUK, we are committed to creating an inclusive and welcoming workplace and platform for all. We believe that diversity is a strength and that everyone should be valued and respected, regardless of their sexual orientation, gender identity, expression age, race, or disability. We are dedicated to promoting a culture of inclusivity and acceptance, and we recognise that this requires ongoing education, training, and open communication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">Our Recruitment Policies</h2>
              <p className="mb-4">
                We provide equal employment and representation opportunities for all. We do not discriminate on the basis of sexual orientation, gender identity, expression, age, race, or disability and we strive to create a safe and supportive environment for all employees.
              </p>
              
              <p className="mb-4">We provide a safe and inclusive recruitment process, which includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Using gender-neutral language in job postings and application forms</li>
                <li>Offering applicants the option to specify their preferred pronouns</li>
                <li>Ensuring interviewers and hiring managers receive training on LGBTQ+ inclusion</li>
                <li>Providing a welcoming and respectful interview experience</li>
              </ul>
              
              <p className="mt-6">
                The statement is signed by c-sectionuk, a trading name of British Birthing Academy Limited, a Guernsey registered company.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}