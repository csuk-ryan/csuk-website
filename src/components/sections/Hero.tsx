import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-neutral to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Feel Confident, Calm & Informed About Your 
              <span className="text-navy-light"> C-Section</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The #1 C-section education website for women globally. 
              Expert-led courses designed to empower you through your cesarean birth and recovery journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors inline-flex items-center justify-center"
              >
                Explore Our Courses
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/positive-birth-stories"
                className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors inline-flex items-center justify-center"
              >
                <PlayCircle className="mr-2" size={20} />
                Watch Birth Stories
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-navy-light rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert-Led Education</h3>
                    <p className="text-gray-300 text-sm">
                      Learn from qualified professionals with years of experience in cesarean births
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Comprehensive Recovery</h3>
                    <p className="text-gray-300 text-sm">
                      Complete guidance for your physical and emotional recovery journey
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-2">Supportive Community</h3>
                    <p className="text-gray-300 text-sm">
                      Connect with other mothers on similar journeys for support and encouragement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}