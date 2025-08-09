import Link from 'next/link'
import Image from 'next/image'
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
                href="/private-midwife"
                className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors inline-flex items-center justify-center"
              >
                <PlayCircle className="mr-2" size={20} />
                Speak to a Midwife
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/home/home.webp"
                alt="C-Section UK - Expert guidance for your cesarean birth journey"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}