import { Metadata } from 'next'
import { Play, Download, Clock, Users, Star, Headphones } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free C-Section Audio Resources | Relaxation & Preparation | CSUK',
  description: 'Access free audio resources for c-section preparation, relaxation, and recovery. Expert-guided meditations, affirmations, and educational content.',
}

export default function FreeCsectionAudioPage() {
  const audioResources = [
    {
      title: 'C-Section Preparation Meditation',
      description: 'A gentle 15-minute guided meditation to help you feel calm and prepared for your cesarean birth.',
      duration: '15:24',
      category: 'Preparation',
      downloads: '2,847',
      rating: 4.9,
    },
    {
      title: 'Positive Birth Affirmations',
      description: 'Empowering affirmations specifically created for c-section mothers to build confidence and reduce anxiety.',
      duration: '12:18',
      category: 'Affirmations',
      downloads: '1,923',
      rating: 4.8,
    },
    {
      title: 'Recovery Relaxation Session',
      description: 'Soothing audio to support your healing journey during the early days of c-section recovery.',
      duration: '18:45',
      category: 'Recovery',
      downloads: '1,654',
      rating: 4.9,
    },
    {
      title: 'Sleep & Rest Audio for New Mums',
      description: 'Peaceful soundscapes and gentle guidance to help you rest between feeds and caring for your baby.',
      duration: '22:30',
      category: 'Rest',
      downloads: '3,102',
      rating: 4.7,
    },
    {
      title: 'Partner Support Guidance',
      description: 'Audio guide for partners on how to provide the best support during c-section birth and recovery.',
      duration: '16:42',
      category: 'Partners',
      downloads: '987',
      rating: 4.6,
    },
    {
      title: 'Bonding & First Moments',
      description: 'Gentle guidance for those precious first moments of skin-to-skin contact and initial bonding.',
      duration: '11:15',
      category: 'Bonding',
      downloads: '2,456',
      rating: 4.8,
    }
  ]

  const categories = ['All', 'Preparation', 'Affirmations', 'Recovery', 'Rest', 'Partners', 'Bonding']

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Free C-Section Audio Resources</h1>
            <p className="text-xl leading-relaxed mb-8">
              Discover our collection of free audio content designed to support you through 
              every stage of your c-section journey - from preparation to recovery.
            </p>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Headphones className="h-4 w-4 mr-2" />
              Expert-Created Audio Content
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-navy hover:text-white transition-colors border border-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audioResources.map((audio, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {audio.category}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{audio.duration}</span>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-semibold text-navy mb-3">{audio.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{audio.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{audio.downloads} downloads</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span>{audio.rating}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-navy text-white py-2 px-4 rounded-md font-medium hover:bg-navy-light transition-colors inline-flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    Listen
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md font-medium hover:bg-gray-200 transition-colors inline-flex items-center justify-center">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Audio Resources?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Audio content offers a flexible way to access expert guidance whenever you need it most
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Hands-Free Learning</h3>
              <p className="text-gray-600">
                Listen while resting, preparing, or during those quiet moments before baby arrives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Perfect Timing</h3>
              <p className="text-gray-600">
                Short, focused sessions that fit into your schedule, whenever you need support most.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                All content created by qualified midwives and healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="text-center mb-6">
              <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-navy mb-4">How to Download & Use</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
                <h4 className="font-semibold text-navy mb-2">Click Listen or Download</h4>
                <p className="text-gray-600 text-sm">Choose to stream online or download for offline listening</p>
              </div>
              
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
                <h4 className="font-semibold text-navy mb-2">Find a Quiet Space</h4>
                <p className="text-gray-600 text-sm">Use headphones for the best experience and minimal distractions</p>
              </div>
              
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
                <h4 className="font-semibold text-navy mb-2">Listen & Relax</h4>
                <p className="text-gray-600 text-sm">Allow yourself to fully engage with the content and guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want More Comprehensive Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            These free resources are just the beginning. Explore our full courses for 
            complete c-section preparation and support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/courses"
              className="bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Courses
            </a>
            <a 
              href="/online-private-education"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Book Private Session
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}