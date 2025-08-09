import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Clock, Users, Star, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'C-Section Recovery Course | Complete Post-Surgery Healing Guide | CSUK',
  description: 'Comprehensive c-section recovery guidance. Learn about healing, pain management, scar care, and getting back to normal activities safely.',
}

const courseFeatures = [
  'Post-surgery healing timeline and expectations',
  'Pain management and medication guidance',
  'Scar care and healing techniques',
  'Safe return to exercise and activities',
  'Emotional recovery and mental health support',
  'When to seek medical help'
]

const whatYouLearn = [
  {
    title: 'Healing Timeline',
    description: 'Understand the stages of c-section recovery and what to expect at each phase'
  },
  {
    title: 'Pain Management',
    description: 'Learn effective pain management strategies and when to use different medications'
  },
  {
    title: 'Scar Care',
    description: 'Comprehensive scar care techniques for optimal healing and reduced complications'
  },
  {
    title: 'Activity Guidelines',
    description: 'Safe return to daily activities, exercise, and lifting guidelines post-surgery'
  }
]

export default function RecoveryCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">C-Section Recovery Course</h1>
              <p className="text-xl leading-relaxed mb-8">
                Complete recovery guidance for your post-surgery journey. Learn about healing, 
                pain management, scar care, and safely returning to your normal activities.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>3+ hours content</span>
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
                  href="/courses/c-section-course-bundle"
                  className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
                >
                  Get Complete Bundle
                </a>
                <a
                  href="/contact-us"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block text-center"
                >
                  Ask Questions
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 relative rounded-xl overflow-hidden shadow-lg border-4 border-white/20">
                <Image
                  src="/images/courses/recovery/recovery.webp"
                  alt="C-Section Recovery Course"
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
              Complete recovery guidance for healing and returning to normal activities
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
                <Heart className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy">Get Expert Support</h3>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                This course is part of our comprehensive C-Section Bundle, 
                which includes preparation, birth, and recovery guidance.
              </p>
              <a
                href="/courses/c-section-course-bundle"
                className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors block text-center"
              >
                View Complete Bundle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Master Your C-Section Recovery</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert guidance on healing, pain management, and safely returning to your normal activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses/c-section-course-bundle"
              className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Complete Bundle
            </a>
            <a
              href="/private-midwife"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Book Private Session
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}