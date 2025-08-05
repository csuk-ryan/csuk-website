import Link from 'next/link'
import { Clock, Users, Star } from 'lucide-react'

export default function CoursesPreview() {
  const courses = [
    {
      id: 'c-section-prep-course',
      title: 'C-Section Prep Course',
      description: 'Comprehensive preparation for your planned or emergency cesarean birth. Learn what to expect, how to prepare, and essential recovery tips.',
      duration: '3 hours',
      students: '2,500+',
      rating: 4.9,
      price: '£49',
      highlights: [
        'Pre-surgery preparation',
        'What happens during surgery',
        'Recovery techniques',
        'Partner support guide'
      ]
    },
    {
      id: 'c-section-course-bundle',
      title: 'Complete C-Section Bundle',
      description: 'Our most comprehensive package including prep course, recovery masterclass, and exclusive community access.',
      duration: '6+ hours',
      students: '1,800+',
      rating: 4.9,
      price: '£89',
      originalPrice: '£120',
      highlights: [
        'All prep course content',
        'Advanced recovery strategies',
        'Breastfeeding after C-section',
        'Private community access'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Expert-Led C-Section Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gain confidence and knowledge with our comprehensive courses designed by healthcare professionals 
            who understand the unique aspects of cesarean birth and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-neutral rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">{course.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
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
                    <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                  )}
                  <div className="text-2xl font-bold text-navy">{course.price}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{course.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-navy mb-3">What you&apos;ll learn:</h4>
                <ul className="space-y-2">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/courses/${course.id}`}
                className="block w-full bg-navy text-white text-center py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors"
              >
                Learn More & Enroll
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center text-navy font-semibold hover:text-navy-light transition-colors"
          >
            View All Courses
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}