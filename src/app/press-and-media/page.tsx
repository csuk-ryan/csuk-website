import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Mail, Instagram, MessageCircle, Facebook } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Press & Media | CSUK - C-Section UK Media Kit & Resources',
  description: 'Media resources, press releases, and collaboration opportunities with CSUK and Midwife Vic. Featured in leading pregnancy and parenting publications.',
}

const mediaFeatures = [
  {
    publication: 'Hoppy Home',
    description: 'Featured expert content on c-section preparation and recovery',
    logo: '/images/press-media/hoppy-home-logo.webp'
  },
  {
    publication: 'Mama Mio',
    description: 'Ongoing residency providing expert c-section and pregnancy advice',
    logo: '/images/press-media/mama-mio-logo.webp'
  },
  {
    publication: 'The List',
    description: 'Expert commentary on c-section trends and maternal health',
    logo: '/images/press-media/the-list-logo.webp'
  }
]

const partnerships = [
  {
    company: 'Mama Mio Skincare',
    description: 'Ongoing residency partnership providing expert skincare advice for c-section recovery',
    type: 'Ongoing Partnership'
  },
  {
    company: 'John Lewis',
    description: 'Conducting live educational events for expectant parents',
    type: 'Live Events'
  },
  {
    company: 'Komi Talent',
    description: 'Professional representation for media opportunities and collaborations',
    type: 'Talent Management'
  }
]

const socialStats = [
  {
    platform: 'Instagram',
    handle: '@csectionuk',
    description: 'Educational content and community support',
    icon: <Instagram className="h-6 w-6" />
  },
  {
    platform: 'TikTok',
    handle: '@midwifevic',
    description: 'Quick tips and myth-busting content',
    icon: <MessageCircle className="h-6 w-6" />
  },
  {
    platform: 'Facebook',
    handle: 'csectionuk1',
    description: 'Community discussions and support',
    icon: <Facebook className="h-6 w-6" />
  }
]

export default function PressMedia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl leading-relaxed mb-8">
              Discover our media presence, partnerships, and opportunities to collaborate with 
              CSUK and founder Midwife Vic in sharing expert c-section education.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:media@csectionuk.com"
                className="inline-flex items-center bg-white text-navy px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Media Inquiries
              </a>
              <a 
                href="mailto:midwifevic@komi.group"
                className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Midwife Vic Inquiries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Featured In</h2>
            <p className="text-lg text-gray-600">
              CSUK and Midwife Vic have been featured across leading pregnancy and parenting publications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className="h-20 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">{feature.publication}</span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{feature.publication}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Key Partnerships</h2>
            <p className="text-lg text-gray-600">
              Strategic collaborations that extend our reach and impact
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {partnership.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{partnership.company}</h3>
                <p className="text-gray-700 leading-relaxed">{partnership.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Presence */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Social Media Presence</h2>
            <p className="text-lg text-gray-600">
              Connect with our growing community across multiple platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialStats.map((social, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4 text-navy">
                  {social.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{social.platform}</h3>
                <p className="text-blue-600 font-medium mb-3">{social.handle}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{social.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Midwife Vic */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">About Midwife Vic</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Midwife Vic is a practicing midwife and hypnobirthing teacher who founded CSUK 
                  with a mission to transform c-section experiences for parents worldwide.
                </p>
                <p>
                  With extensive experience in maternal health and a passion for evidence-based 
                  education, Midwife Vic has become a trusted voice in the pregnancy and birth community.
                </p>
                <p>
                  Her expertise spans c-section preparation, recovery, and empowering parents with 
                  the knowledge they need for positive birth experiences.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-navy mb-4">Media Expertise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• C-section preparation and recovery</li>
                  <li>• Maternal mental health</li>
                  <li>• Birth planning and education</li>
                  <li>• Postpartum support and care</li>
                  <li>• Pregnancy wellness and safety</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="aspect-square bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Midwife Vic Professional Photo</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-navy mb-2">Victoria (Midwife Vic)</h3>
                <p className="text-blue-600 mb-4">Founder & Lead Midwife</p>
                <p className="text-sm text-gray-600">
                  Represented by Komi Talent for media and collaboration opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always open to partnerships, media opportunities, and collaborations that 
            align with our mission to support c-section parents.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-navy-light rounded-lg p-6">
              <Mail className="h-8 w-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">General Press & Media</h3>
              <a 
                href="mailto:media@csectionuk.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                media@csectionuk.com
              </a>
            </div>
            <div className="bg-navy-light rounded-lg p-6">
              <ExternalLink className="h-8 w-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Midwife Vic Bookings</h3>
              <a 
                href="mailto:midwifevic@komi.group"
                className="text-blue-200 hover:text-white transition-colors"
              >
                midwifevic@komi.group
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}