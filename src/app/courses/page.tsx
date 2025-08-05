import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Users, Star, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'C-Section Courses | Expert-Led Birth Education | CSUK',
  description: 'Comprehensive C-section courses designed by healthcare professionals. Learn everything about cesarean birth preparation, recovery, and support. Expert-led education you can trust.',
}

export default function CoursesPage() {
  const courses = [
    {
      id: 'c-section-prep-course',
      title: 'C-Section Prep Course',
      description: 'The complete guide to preparing for your planned or emergency cesarean birth. From pre-surgery preparation to early recovery, this course covers everything you need to know.',
      duration: '3 hours',
      students: '2,500+',
      rating: 4.9,
      price: '£49',
      modules: [
        'Understanding C-Section Surgery',
        'Pre-Surgery Preparation',
        'What to Expect During Surgery',
        'Immediate Recovery Process',
        'Pain Management Strategies',
        'Partner Support Guide'
      ],
      features: [
        'Lifetime access',
        'Mobile-friendly',
        'Expert-led content',
        'Certificate of completion'
      ]
    },
    {
      id: 'c-section-course-bundle',
      title: 'Complete C-Section Bundle',
      description: 'Our most comprehensive package combining preparation, recovery, and ongoing support. Perfect for mothers who want complete confidence throughout their cesarean journey.',
      duration: '6+ hours',
      students: '1,800+',
      rating: 4.9,
      price: '£89',
      originalPrice: '£120',
      modules: [
        'All Prep Course Content',
        'Advanced Recovery Strategies',
        'Breastfeeding After C-Section',
        'Scar Care & Healing',
        'Exercise & Movement',
        'Emotional Recovery',
        'Future Pregnancy Planning'
      ],
      features: [
        'Everything in Prep Course',
        'Private community access',
        'Monthly live Q&A sessions',
        'Email support',
        'Recovery workbook'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-neutral to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Expert-Led C-Section Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gain confidence and knowledge with our comprehensive courses designed by healthcare 
              professionals who understand the unique aspects of cesarean birth and recovery.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {courses.map((course) => (
            <div key={course.id} className="bg-neutral rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-navy mb-3">{course.title}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Star size={16} className="mr-1 text-yellow-500" />
                      {course.rating}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  {course.originalPrice && (
                    <div className="text-lg text-gray-500 line-through">{course.originalPrice}</div>
                  )}
                  <div className="text-3xl font-bold text-navy">{course.price}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-8 text-lg">{course.description}</p>

              <div className="mb-8">
                <h3 className="font-semibold text-navy mb-4 text-lg">Course Modules:</h3>
                <ul className="space-y-3">
                  {course.modules.map((module, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-navy mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-navy mb-4 text-lg">What&apos;s Included:</h3>
                <ul className="space-y-2">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-navy rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/courses/${course.id}`}
                className="block w-full bg-navy text-white text-center py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors text-lg"
              >
                Enroll Now - {course.price}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-navy-light text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Not sure which course is right for you?</h2>
            <p className="text-gray-300 mb-6">
              Book a free 15-minute consultation with one of our experts to find the perfect course for your needs.
            </p>
            <Link
              href="/online-private-education"
              className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}