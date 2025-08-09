import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Clock, Users, Star, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Expressing & Combination Feeding Course | Flexible Feeding Options | CSUK',
  description: 'Learn expressing techniques and combination feeding strategies. Perfect for c-section mothers wanting flexibility in their feeding journey.',
}

const courseFeatures = [
  'Breast pump selection and techniques',
  'Expressing schedules and storage',
  'Combination feeding strategies',
  'Maintaining milk supply while expressing',
  'Transitioning between breast and bottle',
  'Managing feeding after c-section surgery'
]

const whatYouLearn = [
  {
    title: 'Expressing Techniques',
    description: 'Master effective expressing methods and choose the right equipment for your needs'
  },
  {
    title: 'Combination Feeding',
    description: 'Learn flexible approaches to combining breast and bottle feeding successfully'
  },
  {
    title: 'Milk Storage & Safety',
    description: 'Understand proper storage methods and safety guidelines for expressed milk'
  },
  {
    title: 'Supply Management',
    description: 'Maintain your milk supply while expressing and combination feeding'
  }
]

export default function ExpressingComboFeedingCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Expressing & Combination Feeding</h1>
              <p className="text-xl leading-relaxed mb-8">
                Flexible feeding options for modern parents. Learn expressing techniques and combination 
                feeding strategies that work for your family and post-c-section recovery.
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
                  className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
                >
                  Get Full Feeding Bundle
                </a>
                <a
                  href="/contact-us"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-block text-center"
                >
                  Ask Questions
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 relative rounded-xl overflow-hidden shadow-lg border-4 border-white/20">
                <Image
                  src="/images/courses/expression/combi-course..webp"
                  alt="Expressing & Combination Feeding Course"
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
              Comprehensive guidance for flexible feeding approaches
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
                <Zap className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy">Get Expert Support</h3>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                This course is part of our comprehensive Infant Feeding Bundle, 
                which includes breastfeeding, bottle feeding, and combination feeding guidance.
              </p>
              <a
                href="/courses/infant-feeding-course-bundle"
                className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors block text-center"
              >
                View Complete Bundle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Master Flexible Feeding</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Learn expressing and combination feeding techniques that give you flexibility and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses/infant-feeding-course-bundle"
              className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Full Feeding Bundle
            </a>
            <a
              href="/private-midwife"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Book Private Session
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}