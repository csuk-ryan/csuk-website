import { Metadata } from 'next'
import Link from 'next/link'
import { Download, Play, Star, CheckCircle, Clock, Users, Smartphone, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Products | C-Section Resources & Tools | CSUK',
  description: 'Explore our complete range of digital c-section resources: courses, audio guides, checklists, and interactive tools designed to support your cesarean journey.',
}

export default function DigitalProductsPage() {
  const digitalProducts = [
    {
      category: 'Online Courses',
      products: [
        {
          id: 'c-section-prep-course',
          title: 'C-Section Prep Course',
          description: 'Complete preparation guide for your cesarean birth',
          price: '£49',
          type: 'Course',
          duration: '3 hours',
          students: '2,500+',
          rating: 4.9,
          features: ['Lifetime access', 'Mobile-friendly', 'Expert-led', 'Certificate'],
          href: '/courses/c-section-prep-course'
        },
        {
          id: 'c-section-bundle',
          title: 'Complete C-Section Bundle',
          description: 'Our most comprehensive cesarean education package',
          price: '£89',
          originalPrice: '£120',
          type: 'Bundle',
          duration: '6+ hours',
          students: '1,800+',
          rating: 4.9,
          features: ['All courses included', 'Community access', 'Live Q&As', 'Email support'],
          href: '/courses/c-section-course-bundle'
        },
        {
          id: 'feeding-bundle',
          title: 'Infant Feeding Course Bundle',
          description: 'Complete feeding guidance with Midwife Zoe',
          price: '£79',
          type: 'Bundle',
          duration: '4+ hours',
          students: '1,200+',
          rating: 4.9,
          features: ['Breastfeeding course', 'Bottle feeding course', 'Combination feeding', 'Expert support'],
          href: '/courses/infant-feeding-course-bundle'
        }
      ]
    },
    {
      category: 'Audio Resources',
      products: [
        {
          id: 'free-audio',
          title: 'Free C-Section Audio Collection',
          description: 'Relaxation and preparation audio content',
          price: 'Free',
          type: 'Audio',
          duration: '2+ hours',
          downloads: '5,000+',
          rating: 4.8,
          features: ['Instant download', 'MP3 format', 'Mobile-friendly', 'Offline listening'],
          href: '/resources/free-c-section-audio'
        }
      ]
    },
    {
      category: 'Interactive Tools',
      products: [
        {
          id: 'scar-analyser',
          title: 'AI Scar Analyser',
          description: 'Free scar assessment and care recommendations',
          price: 'Free',
          type: 'Tool',
          usage: '10,000+ analyses',
          rating: 4.7,
          features: ['Instant analysis', 'Personalized recommendations', 'Educational content', 'Expert guidance'],
          href: '/resources/scar-analyser'
        },
        {
          id: 'baby-name-generator',
          title: 'Baby Name Generator',
          description: 'Find the perfect name with our smart generator',
          price: 'Free',
          type: 'Tool',
          usage: '25,000+ names generated',
          rating: 4.6,
          features: ['2024 popular names', 'Name meanings', 'Gender options', 'Favorites list'],
          href: '/resources/baby-name-generator'
        },
        {
          id: 'recovery-timeline',
          title: 'Recovery Timeline Tracker',
          description: 'Track your healing journey step-by-step',
          price: 'Free',
          type: 'Tool',
          usage: '8,000+ users',
          rating: 4.8,
          features: ['Weekly milestones', 'Progress tracking', 'Expert tips', 'Personalized content'],
          href: '/resources/recovery-timeline'
        }
      ]
    }
  ]

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      number: '50,000+',
      label: 'Happy Customers',
      description: 'Parents supported worldwide'
    },
    {
      icon: <Download className="h-8 w-8 text-green-600" />,
      number: '100,000+',
      label: 'Downloads',
      description: 'Digital products accessed'
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      number: '4.9/5',
      label: 'Average Rating',
      description: 'Customer satisfaction'
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      number: '80+',
      label: 'Countries',
      description: 'Global reach'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Digital C-Section Products</h1>
            <p className="text-xl leading-relaxed mb-8">
              Comprehensive digital resources designed by healthcare professionals to support every stage of your cesarean journey. 
              From preparation to recovery, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                <Smartphone className="h-4 w-4 mr-2 inline" />
                Mobile Optimized
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                <Download className="h-4 w-4 mr-2 inline" />
                Instant Access
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                <CheckCircle className="h-4 w-4 mr-2 inline" />
                Expert Approved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products by Category */}
      {digitalProducts.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">{category.category}</h2>
              <div className="w-20 h-1 bg-navy mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, productIndex) => (
                <div key={productIndex} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100">
                  <div className="p-6">
                    {/* Product Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="bg-navy text-white px-3 py-1 rounded-full text-xs font-medium">
                          {product.type}
                        </span>
                        {product.price === 'Free' && (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                            Free
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                      )}
                    </div>

                    {/* Product Title & Description */}
                    <h3 className="text-xl font-bold text-navy mb-3">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    {/* Product Stats */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                      {product.duration && (
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {product.duration}
                        </div>
                      )}
                      {product.students && (
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {product.students}
                        </div>
                      )}
                      {product.downloads && (
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {product.downloads}
                        </div>
                      )}
                      {product.usage && (
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {product.usage}
                        </div>
                      )}
                      {product.rating && (
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          {product.rating}
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-navy">{product.price}</div>
                      <Link
                        href={product.href}
                        className="bg-navy text-white px-6 py-2 rounded-md font-semibold hover:bg-navy-light transition-colors"
                      >
                        {product.price === 'Free' ? 'Access Free' : 'Get Started'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Personalized Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            While our digital products provide comprehensive guidance, sometimes you need one-on-one support 
            from a qualified midwife to address your specific concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/private-midwife"
              className="bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Private Session
            </Link>
            <Link
              href="/community"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}