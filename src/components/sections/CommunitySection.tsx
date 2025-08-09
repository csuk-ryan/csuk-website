import Link from 'next/link'
import { Users, MessageCircle, Heart, Star, ArrowRight } from 'lucide-react'

export default function CommunitySection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: '4,500+',
      label: 'C-Section Mums',
      description: 'Active community members'
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      number: '12,000+',
      label: 'Messages Shared',
      description: 'Support & encouragement'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      number: '98%',
      label: 'Feel Supported',
      description: 'Community satisfaction'
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      number: '4.9/5',
      label: 'Community Rating',
      description: 'Member feedback'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Join the C-Section Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with thousands of c-section mums who understand your journey. 
            Share experiences, ask questions, and find the support you need from those who truly get it.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Community Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">What Makes Our Community Special?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">Safe Space to Share</h4>
                  <p className="text-gray-600">A judgment-free environment where you can share your experiences, concerns, and victories with understanding mothers.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">Expert Guidance</h4>
                  <p className="text-gray-600">Regular input from qualified midwives and healthcare professionals to answer questions and provide guidance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">24/7 Support</h4>
                  <p className="text-gray-600">Round-the-clock community support for those late-night questions or moments when you need encouragement.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Ready to Connect?</h3>
              <p className="text-gray-600">Join our supportive community today and never feel alone on your c-section journey.</p>
            </div>
            
            <div className="space-y-4">
              <Link
                href="/community"
                className="w-full bg-navy text-white py-3 px-6 rounded-md font-semibold hover:bg-navy-light transition-colors flex items-center justify-center"
              >
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/positive-birth-stories"
                className="w-full border border-navy text-navy py-3 px-6 rounded-md font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                Read Birth Stories
              </Link>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Follow us on social media</p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://instagram.com/csectionuk" 
                    className="text-gray-400 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://www.tiktok.com/@midwifevic" 
                    className="text-gray-400 hover:text-black transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}