import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Clock, Users, Star, Baby } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bottle Feeding Course | Safe & Effective Feeding for C-Section Mums | CSUK',
  description: 'Learn safe and effective bottle feeding techniques. Perfect for c-section mothers choosing formula feeding or combination feeding approaches.',
}

const courseFeatures = [
  'Safe bottle preparation and sterilization',
  'Choosing the right formula and equipment',
  'Feeding schedules and routines',
  'Responsive bottle feeding techniques',
  'Managing feeding in the early days post-surgery',
  'Transitioning between breast and bottle'
]

const whatYouLearn = [
  {
    title: 'Safe Preparation',
    description: 'Learn proper sterilization and formula preparation techniques for your baby\'s safety'
  },
  {
    title: 'Equipment Selection',
    description: 'Choose the right bottles, teats, and formula for your baby\'s needs'
  },
  {
    title: 'Feeding Techniques',
    description: 'Master responsive bottle feeding to create bonding moments with your baby'
  },
  {
    title: 'Post-Surgery Comfort',
    description: 'Learn comfortable positions for bottle feeding after your c-section'
  }
]

export default function BottleFeedingCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Bottle Feeding Course</h1>
              <p className="text-xl leading-relaxed mb-8">
                Safe and effective bottle feeding guidance. Learn everything you need to know about 
                formula feeding, equipment selection, and creating positive feeding experiences for you and your baby.
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
                  className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
                >
                  Get Full Feeding Bundle
                </a>
                <a
                  href="/contact-us"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block text-center"
                >
                  Ask Questions
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 relative rounded-xl overflow-hidden shadow-lg border-4 border-white/20">
                <Image
                  src="/images/courses/bottlefeeding/bottle-course.webp"
                  alt="Bottle Feeding Course"
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
              Comprehensive bottle feeding education for confident and safe feeding
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
                <Baby className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy">Get Expert Support</h3>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                This course is part of our comprehensive Infant Feeding Bundle, 
                which includes breastfeeding, bottle feeding, and combination feeding guidance.
              </p>
              <a
                href="/courses/infant-feeding-course-bundle"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors block text-center"
              >
                View Complete Bundle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Master Bottle Feeding</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Learn safe, effective bottle feeding techniques and create positive feeding experiences with your baby.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses/infant-feeding-course-bundle"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Full Feeding Bundle
            </a>
            <a
              href="/private-midwife"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Book Private Session
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}