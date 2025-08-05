import { Metadata } from 'next'
import { Calendar, Video, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Online Private C-Section Education | One-on-One Support | CSUK',
  description: 'Personalized C-section education with qualified professionals. Get tailored guidance, ask specific questions, and receive support designed for your unique circumstances.',
}

export default function OnlinePrivateEducationPage() {
  const packages = [
    {
      title: 'One-on-One Consultation',
      duration: '60 minutes',
      price: '£120',
      description: 'Personalized session with a qualified C-section specialist to address your specific concerns and questions.',
      features: [
        'Tailored to your circumstances',
        'Ask unlimited questions',
        'Personalized birth plan discussion',
        'Recovery planning',
        'Partner can join',
        'Follow-up email summary'
      ]
    },
    {
      title: 'Couple&apos;s Session',
      duration: '90 minutes', 
      price: '£180',
      description: 'Comprehensive session designed for you and your partner to prepare together for your C-section journey.',
      features: [
        'Partner-focused guidance',
        'Communication strategies',
        'Roles during surgery',
        'Recovery support planning',
        'Emotional preparation',
        'Resource sharing'
      ]
    },
    {
      title: 'Multi-Session Package',
      duration: '3 x 45 minutes',
      price: '£280',
      originalPrice: '£360',
      description: 'Comprehensive support throughout your journey with pre-surgery, post-surgery, and recovery sessions.',
      features: [
        'Pre-surgery preparation',
        'Post-surgery check-in',
        'Recovery optimization',
        'Ongoing email support',
        'Flexible scheduling',
        'Priority booking'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-neutral to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Online Private C-Section Education
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get personalized, one-on-one guidance from qualified C-section specialists. 
              Tailored education that addresses your unique circumstances and concerns.
            </p>
            <div className="inline-flex items-center bg-navy text-white px-6 py-3 rounded-lg">
              <Calendar className="mr-2" size={20} />
              <span>Book your free 15-minute discovery call</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-neutral rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy mb-2">{pkg.title}</h3>
                <div className="flex items-center justify-center text-gray-600 mb-4">
                  <Clock size={16} className="mr-2" />
                  {pkg.duration}
                </div>
                <div className="text-center">
                  {pkg.originalPrice && (
                    <div className="text-lg text-gray-500 line-through">{pkg.originalPrice}</div>
                  )}
                  <div className="text-3xl font-bold text-navy">{pkg.price}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-center">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle size={20} className="text-navy mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-navy text-white py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>

        <div className="bg-navy-light text-white p-12 rounded-2xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Choose Private Education?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Video size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Personalized Experience</div>
                    <div className="text-gray-300 text-sm">Tailored to your specific situation and concerns</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Expert Guidance</div>
                    <div className="text-gray-300 text-sm">Qualified professionals with years of experience</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Flexible Scheduling</div>
                    <div className="text-gray-300 text-sm">Sessions available evenings and weekends</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white text-navy p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Free Discovery Call</h3>
                <p className="text-sm mb-4">
                  Not sure which package is right for you? Book a free 15-minute consultation 
                  to discuss your needs and find the perfect fit.
                </p>
                <button className="bg-navy text-white px-6 py-2 rounded-lg font-semibold hover:bg-navy-light transition-colors">
                  Book Free Call
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Meet Our Specialists</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team consists of qualified midwives, birth educators, and healthcare professionals 
            who specialize in cesarean birth and recovery. Each specialist brings years of experience 
            and a deep understanding of the unique aspects of C-section journeys.
          </p>
          <button className="bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors">
            Learn About Our Team
          </button>
        </div>
      </div>
    </div>
  )
}