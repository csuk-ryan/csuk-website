import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'London, UK',
      rating: 5,
      text: "The C-Section prep course completely transformed my experience. I went from feeling anxious and uninformed to confident and prepared. The recovery section was invaluable - I knew exactly what to expect and how to take care of myself. Highly recommend to any mum facing a cesarean birth!",
      course: 'C-Section Prep Course',
      timeAgo: '2 weeks ago'
    },
    {
      name: 'Emma L.',
      location: 'Manchester, UK', 
      rating: 5,
      text: "As a first-time mum, I was terrified about my planned c-section. This course gave me so much confidence and practical knowledge. The partner guide was amazing too - my husband felt much more prepared to support me. The best investment I made during my pregnancy!",
      course: 'Complete C-Section Bundle',
      timeAgo: '1 month ago'
    },
    {
      name: 'Jessica K.',
      location: 'Birmingham, UK',
      rating: 5, 
      text: "I had an emergency c-section with my first baby and felt so unprepared. When planning my second, I found CSUK and it was a game-changer. The recovery tips alone were worth every penny. I felt so much more in control this time around.",
      course: 'C-Section Prep Course',
      timeAgo: '3 weeks ago'
    },
    {
      name: 'Rachel P.',
      location: 'Edinburgh, UK',
      rating: 5,
      text: "The private education session with Midwife Vic was incredible. She answered all my specific questions and gave me personalized advice for my situation. Combined with the online course, I felt completely prepared for my c-section. Thank you CSUK!",
      course: 'Private Education + Course',
      timeAgo: '1 week ago'
    },
    {
      name: 'Amy S.',
      location: 'Cardiff, UK',
      rating: 5,
      text: "I can't recommend CSUK enough! The scar care guidance has been amazing - my scar is healing beautifully thanks to their advice. The community aspect is so supportive too. It's wonderful to connect with other c-section mums who understand the journey.",
      course: 'Complete C-Section Bundle',
      timeAgo: '2 months ago'
    },
    {
      name: 'Kate B.',
      location: 'Glasgow, UK',
      rating: 5,
      text: "Having a planned c-section felt overwhelming until I found this course. The step-by-step breakdown of what happens during surgery really helped calm my nerves. My birth was such a positive experience, and I credit much of that to being so well-prepared.",
      course: 'C-Section Prep Course',
      timeAgo: '1 month ago'
    }
  ]

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow relative">
              {/* Google-style header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <Quote className="h-6 w-6 text-gray-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex mr-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{testimonial.timeAgo}</span>
              </div>

              {/* Review text */}
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                "{testimonial.text}"
              </p>

              {/* Course tag */}
              <div className="flex items-center justify-between">
                <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.course}
                </span>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Verified purchase</span>
                </div>
              </div>
            </div>
          ))}
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