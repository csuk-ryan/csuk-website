import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Clock, Users, Star, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Breastfeeding Course | Expert Guidance for C-Section Mums | CSUK',
  description: 'Master breastfeeding after your c-section with our expert-led course. Get practical tips, overcome challenges, and build confidence feeding your baby.',
}

const courseFeatures = [
  'Breastfeeding after c-section surgery',
  'Positioning and latching techniques',
  'Managing milk supply',
  'Overcoming common challenges',
  'Pain-free feeding positions',
  'Building confidence and routine'
]

const whatYouLearn = [
  {
    title: 'C-Section Specific Techniques',
    description: 'Learn the best positions and approaches for comfortable breastfeeding after surgery'
  },
  {
    title: 'Milk Supply Management',
    description: 'Understand how to establish and maintain your milk supply effectively'
  },
  {
    title: 'Problem Solving',
    description: 'Get expert guidance on overcoming common breastfeeding challenges'
  },
  {
    title: 'Confidence Building',
    description: 'Build the skills and knowledge to feed your baby with confidence'
  }
]

export default function BreastfeedingCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Breastfeeding Course</h1>
              <p className="text-xl leading-relaxed mb-8">
                Master breastfeeding with confidence. Our expert-led course provides practical guidance 
                specifically for c-section mothers, helping you overcome challenges and build a successful feeding routine.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>2+ hours content</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Expert-led</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  <span>Self-paced</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/courses/infant-feeding-course-bundle"
                  className="bg-white text-pink-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
                >
                  Get Full Feeding Bundle
                </a>
                <a
                  href="/contact-us"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-pink-600 transition-colors inline-block text-center"
                >
                  Ask Questions
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 relative rounded-xl overflow-hidden shadow-lg border-4 border-white/20">
                <Image
                  src="/images/courses/breastfeeding/breastfeeding.webp"
                  alt="Breastfeeding Course"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">What You'll Learn</h2>
            <p className="text-lg text-gray-600">
              Comprehensive breastfeeding education designed specifically for c-section mothers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whatYouLearn.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Course Includes</h2>
              <ul className="space-y-4">
                {courseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-center mb-6">
                <Heart className="h-16 w-16 text-pink-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy">Get Expert Support</h3>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                This course is part of our comprehensive Infant Feeding Bundle, 
                which includes breastfeeding, bottle feeding, and combination feeding guidance.
              </p>
              <a
                href="/courses/infant-feeding-course-bundle"
                className="w-full bg-pink-600 text-white py-3 rounded-md font-semibold hover:bg-pink-700 transition-colors block text-center"
              >
                View Complete Bundle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Breastfeeding Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert guidance and build confidence with breastfeeding after your c-section.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses/infant-feeding-course-bundle"
              className="bg-white text-pink-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Full Feeding Bundle
            </a>
            <a
              href="/private-midwife"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              Book Private Session
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}