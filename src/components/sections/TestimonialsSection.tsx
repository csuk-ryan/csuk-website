import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'London, UK',
      rating: 5,
      text: "The C-Section prep course completely transformed my experience.",
      course: 'C-Section Prep Course',
      timeAgo: '2 weeks ago'
    },
    {
      name: 'Emma L.',
      location: 'Manchester, UK', 
      rating: 5,
      text: "This course gave me so much confidence and practical knowledge.",
      course: 'Complete C-Section Bundle',
      timeAgo: '1 month ago'
    },
    {
      name: 'Jessica K.',
      location: 'Birmingham, UK',
      rating: 5, 
      text: "CSUK was a game-changer - I felt so much more in control.",
      course: 'C-Section Prep Course',
      timeAgo: '3 weeks ago'
    },
    {
      name: 'Rachel P.',
      location: 'Edinburgh, UK',
      rating: 5,
      text: "The private session with Midwife Vic was incredible.",
      course: 'Private Education + Course',
      timeAgo: '1 week ago'
    },
    {
      name: 'Amy S.',
      location: 'Cardiff, UK',
      rating: 5,
      text: "I can't recommend CSUK enough - the scar care guidance was amazing.",
      course: 'Complete C-Section Bundle',
      timeAgo: '2 months ago'
    },
    {
      name: 'Kate B.',
      location: 'Glasgow, UK',
      rating: 5,
      text: "My birth was positive thanks to being so well-prepared.",
      course: 'C-Section Prep Course',
      timeAgo: '1 month ago'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What C-Section Mums Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Real reviews from mothers who have transformed their c-section experience with our expert guidance and support.
          </p>
          
          <div className="flex justify-center items-center space-x-6 text-sm">
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-navy">4.9/5</span>
              <span className="text-gray-600 ml-1">(2,847 reviews)</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="text-gray-600">
              <span className="font-semibold text-navy">98%</span> recommend to friends
            </div>
          </div>
        </div>

        {/* Single Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm relative">
            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-navy-light transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-navy-light transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Current Testimonial */}
            <div className="mx-12">
              {/* Header */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-gray-600">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-gray-300 ml-6" />
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center mb-4">
                <div className="flex mr-3">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{testimonials[currentTestimonial].timeAgo}</span>
              </div>

              {/* Review text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg text-center">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Course tag and verification */}
              <div className="flex items-center justify-center space-x-4">
                <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  {testimonials[currentTestimonial].course}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Verified purchase</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-navy' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" />
            Rated Excellent on Trustpilot
          </div>
          <div className="space-y-2">
            <p className="text-gray-600">
              Join <span className="font-semibold text-navy">4,500+</span> mothers who have transformed their c-section experience
            </p>
            <a 
              href="/positive-birth-stories"
              className="text-navy hover:text-navy-light font-medium hover:underline"
            >
              Read more birth stories →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}