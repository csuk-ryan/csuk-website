import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Mail, Handshake, Users, Target, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Partners | CSUK - C-Section UK Partnerships & Collaborations',
  description: 'Meet our trusted partners supporting c-section parents. Join our partner program and collaborate with CSUK to expand your reach in maternal health.',
}

const partners = [
  {
    name: 'HLP',
    description: 'Supporting maternal health through evidence-based resources and professional development.',
    website: null,
    category: 'Healthcare Partnership',
    logo: '/images/partners/hlp-logo.webp'
  },
  {
    name: 'MBB',
    description: 'Dedicated to improving birth experiences and maternal outcomes through education and support.',
    website: null,
    category: 'Educational Partnership',
    logo: '/images/partners/mbb-logo.webp'
  },
  {
    name: 'Pregnancy Sickness Support',
    description: 'The UK\'s leading charity providing information and support for women suffering from Nausea and Vomiting in Pregnancy.',
    website: 'www.pregnancysicknesssupport.org.uk',
    category: 'Charity Partnership',
    logo: '/images/partners/pss-logo.webp'
  },
  {
    name: 'Neuronatal',
    description: 'Advancing neonatal care through research, education, and innovative healthcare solutions.',
    website: 'neuronatal.org',
    category: 'Research Partnership',
    logo: '/images/partners/neuronatal-logo.webp'
  }
]

const partnerBenefits = [
  {
    icon: <Users className="h-8 w-8 text-navy" />,
    title: 'Expanded Reach',
    description: 'Access our growing community of c-section parents and healthcare professionals.'
  },
  {
    icon: <Target className="h-8 w-8 text-navy" />,
    title: 'Targeted Audience',
    description: 'Connect with engaged parents actively seeking c-section education and support.'
  },
  {
    icon: <Award className="h-8 w-8 text-navy" />,
    title: 'Quality Association',
    description: 'Partner with a trusted, midwife-led brand in the maternal health space.'
  },
  {
    icon: <Handshake className="h-8 w-8 text-navy" />,
    title: 'Mutual Growth',
    description: 'Collaborate on content, events, and initiatives that benefit both audiences.'
  }
]

const partnershipTypes = [
  {
    type: 'Affiliate Partnership',
    description: 'Earn commission by sharing our courses with your network',
    features: [
      'Competitive commission rates',
      'Marketing materials provided',
      'Dedicated affiliate support',
      'Performance tracking dashboard'
    ],
    cta: 'Join Affiliate Program'
  },
  {
    type: 'Content Collaboration',
    description: 'Work together on educational content and resources',
    features: [
      'Co-created educational materials',
      'Cross-promotional opportunities',
      'Shared expertise and insights',
      'Joint webinars and events'
    ],
    cta: 'Explore Collaboration'
  },
  {
    type: 'Strategic Partnership',
    description: 'Long-term partnerships for mutual growth and impact',
    features: [
      'Customized partnership terms',
      'Joint marketing initiatives',
      'Resource sharing opportunities',
      'Co-branded programs'
    ],
    cta: 'Discuss Partnership'
  }
]

export default function OurPartners() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl leading-relaxed mb-8">
              We're proud to collaborate with organizations that share our mission of supporting 
              c-section parents through education, research, and community building.
            </p>
            <a 
              href="mailto:info@csectionuk.com"
              className="inline-flex items-center bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Trusted Partners</h2>
            <p className="text-lg text-gray-600">
              Organizations we collaborate with to expand our impact and support more families
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                      {partner.category}
                    </span>
                    <h3 className="text-2xl font-bold text-navy mb-3">{partner.name}</h3>
                  </div>
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center ml-4">
                    <span className="text-gray-500 text-xs text-center">{partner.name} Logo</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">{partner.description}</p>
                
                {partner.website && (
                  <a 
                    href={`https://${partner.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-navy hover:text-blue-600 font-medium"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {partner.website}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-gray-600">
              The benefits of joining the CSUK partner network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600">
              Choose the partnership model that best fits your organization
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-navy mb-4">{partnership.type}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{partnership.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {partnership.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="mailto:info@csectionuk.com?subject=Partnership Inquiry"
                  className="block w-full bg-navy text-white text-center py-3 px-6 rounded-md font-semibold hover:bg-navy-light transition-colors"
                >
                  {partnership.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Program Highlight */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Join Our Affiliate Program</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                c-sectionuk are proud to offer a Partners Programme that allows you to share our 
                expert-led courses with your network while earning competitive commissions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Easy Setup</h3>
                    <p className="text-gray-700">Simple onboarding process with dedicated support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Marketing Materials</h3>
                    <p className="text-gray-700">Professional resources to promote our courses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Track Performance</h3>
                    <p className="text-gray-700">Real-time analytics and commission tracking</p>
                  </div>
                </div>
              </div>
              <a 
                href="mailto:info@csectionuk.com?subject=Affiliate Program Inquiry"
                className="inline-flex items-center bg-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors"
              >
                Join Affiliate Program
                <ExternalLink className="h-5 w-5 ml-2" />
              </a>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-navy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Ready to Partner?</h3>
              </div>
              <div className="space-y-4 text-center">
                <p className="text-gray-700">
                  If you'd like to partner with us, we'd love to hear from you.
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-navy mb-2">Get in Touch</h4>
                  <a 
                    href="mailto:info@csectionuk.com"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    info@csectionuk.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to support and empower c-section parents worldwide. 
            Together, we can make a bigger impact.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="mailto:info@csectionuk.com?subject=Partnership Inquiry"
              className="inline-flex items-center bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Start Partnership Discussion
            </a>
            <a 
              href="/contact-us" 
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              General Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}