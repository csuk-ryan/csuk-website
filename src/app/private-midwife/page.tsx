'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, Video, Clock, CheckCircle, Shield, Heart, User } from 'lucide-react'
import CalendarScheduler from '@/components/booking/CalendarScheduler'

const features = [
  {
    icon: <User className="h-8 w-8 text-navy" />,
    title: 'Qualified Midwives',
    description: 'All sessions conducted by practicing midwives registered with the Nursing and Midwifery Council.'
  },
  {
    icon: <Heart className="h-8 w-8 text-navy" />,
    title: 'Personalized Support',
    description: 'Tailored education based on your individual stage of pregnancy or recovery and specific concerns.'
  },
  {
    icon: <Shield className="h-8 w-8 text-navy" />,
    title: 'Professional Guidance',
    description: 'Reassurance and expert advice from midwives passionate about positive c-section experiences.'
  }
]

const benefits = [
  'One-to-one c-section education with a practicing Midwife',
  'Personalized support for your unique circumstances',
  '1-hour private session via Zoom',
  'Opportunity to ask specific questions and address concerns',
  'Tailored education based on your pregnancy stage',
  'Professional guidance from NMC registered midwives',
  'Flexible topics based on your individual needs'
]

export default function OnlinePrivateEducationPage() {
  const [showScheduler, setShowScheduler] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)
  const [bookingDetails, setBookingDetails] = useState<any>(null)

  const handleBookingComplete = (booking: any) => {
    setBookingDetails(booking)
    setBookingComplete(true)
    setShowScheduler(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Private Midwife Sessions</h1>
              <p className="text-xl leading-relaxed mb-8">
                One-to-one C-section education with a practicing Midwife via Zoom. 
                Get personalized support tailored to your individual needs and circumstances.
              </p>
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 inline-block">
                <div className="text-3xl font-bold mb-2">£49.99</div>
                <div className="text-lg">Per 1-hour session</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowScheduler(true)}
                  className="bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book Your Session
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors">
                  Select a Midwife
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/private-education/vic2.webp"
                  alt="Professional Midwife Consultation"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Choose Our Private Sessions?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our midwives are passionate about helping women just like you achieve their positive c-section birth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">What's Included</h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              {/* Images */}
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/private-education/vic1.webp" 
                  alt="Midwife Vic during private consultation" 
                  className="rounded-lg w-full h-48 object-cover"
                />
                <img 
                  src="/images/private-education/vic2.webp" 
                  alt="One-to-one midwife session" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple steps to book your personalized c-section education session</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Select a Midwife</h3>
              <p className="text-gray-700 text-sm">Choose from our qualified midwives through the online booking calendar</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Pay Securely</h3>
              <p className="text-gray-700 text-sm">Complete payment via Apple Pay or credit/debit card</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Get Confirmation</h3>
              <p className="text-gray-700 text-sm">Receive confirmation and reminder emails with Zoom link</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Join Your Session</h3>
              <p className="text-gray-700 text-sm">Connect via Zoom for your personalized 1-hour session</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Perfect For</h2>
            <p className="text-lg text-gray-600">Our private sessions are recommended for individuals seeking:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">Specific Information</h3>
              <p className="text-gray-700 text-sm">Individuals seeking specific c-section information tailored to their circumstances</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">Anxiety Support</h3>
              <p className="text-gray-700 text-sm">Those with anxieties or questions about c-section birth and recovery</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">Professional Guidance</h3>
              <p className="text-gray-700 text-sm">Parents wanting professional guidance and reassurance throughout their journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Personalized Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your one-to-one session today and get the personalized c-section education 
            and support you deserve from our qualified midwives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowScheduler(true)}
              className="bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Your Session - £49.99
            </button>
            <a 
              href="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors inline-block"
            >
              Meet Our Midwives
            </a>
          </div>
        </div>
      </section>

      {/* Calendar Scheduler Modal */}
      {showScheduler && (
        <CalendarScheduler
          onClose={() => setShowScheduler(false)}
          onBookingComplete={handleBookingComplete}
        />
      )}

      {/* Booking Confirmation Modal */}
      {bookingComplete && bookingDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Booking Confirmed!</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <p><strong>Booking ID:</strong> {bookingDetails.bookingId}</p>
                <p><strong>Date:</strong> {bookingDetails.date?.toLocaleDateString()}</p>
                <p><strong>Time:</strong> {bookingDetails.time}</p>
                <p><strong>Price:</strong> £{bookingDetails.price}</p>
              </div>
              <p className="text-gray-600 mb-6">
                You'll receive a confirmation email with your Zoom link and session details within the next few minutes.
              </p>
              <div className="space-y-3">
                <button 
                  onClick={() => window.print()}
                  className="w-full bg-navy text-white py-2 px-4 rounded-md font-medium hover:bg-navy-light transition-colors"
                >
                  Print Confirmation
                </button>
                <button 
                  onClick={() => setBookingComplete(false)}
                  className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}