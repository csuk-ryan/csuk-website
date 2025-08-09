import { Metadata } from 'next'
import Image from 'next/image'
import { Users, Heart, BookOpen, Award, TrendingUp, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About CSUK | C-Section UK - Expert-Led C-Section Education',
  description: 'Meet the CSUK team of qualified midwives and specialists dedicated to supporting positive c-section births and recovery. Midwife-led, accessible education for empowered parents.',
}

const teamMembers = [
  {
    name: 'Midwife Vic',
    role: 'Founder & Practicing Midwife',
    description: 'Practicing Midwife and Hypnobirthing teacher passionate about empowering c-section parents.',
    image: '/images/about/profiles/vic.webp'
  },
  {
    name: 'Midwife Zoe',
    role: 'Infant Feeding Specialist',
    description: 'Expert in breastfeeding, bottle feeding, and combination feeding support.',
    image: '/images/about/profiles/Zoe.webp'
  },
  {
    name: 'Midwife Laura',
    role: 'Freelance Midwife & Blogger',
    description: 'Experienced midwife sharing insights through evidence-based content.',
    image: '/images/about/profiles/laura.webp'
  },
  {
    name: 'Hannah',
    role: 'Physiotherapist & Recovery Specialist',
    description: 'Specializing in post-c-section recovery and rehabilitation.',
    image: '/images/about/profiles/hannah.webp'
  },
  {
    name: 'Jacinta',
    role: 'Executive Assistant',
    description: 'Ensuring smooth operations and excellent customer support.',
    image: '/images/about/profiles/jacinta.webp'
  },
  {
    name: 'Steph',
    role: 'Social Media & Web Lead',
    description: 'Managing our digital presence and community engagement.',
    image: '/images/about/profiles/steph.webp'
  },
  {
    name: 'Ryan',
    role: 'SEO & Analytics Lead',
    description: 'Optimizing our reach to support more c-section parents.',
    image: '/images/about/profiles/ryan.webp'
  },
  {
    name: 'Baby Maddy',
    role: 'Team Mascot',
    description: 'Our adorable team mascot bringing smiles to the office.',
    image: '/images/about/profiles/maddy.webp'
  },
  {
    name: 'Sunny the Dog',
    role: 'Canine Team Member',
    description: 'Our four-legged team member providing emotional support.',
    image: '/images/about/profiles/sunny.webp'
  }
]

const values = [
  {
    icon: <Users className="h-8 w-8 text-navy" />,
    title: 'Midwife Led',
    description: 'All our content is created and reviewed by qualified, practicing midwives registered with the Nursing and Midwifery Council.'
  },
  {
    icon: <BookOpen className="h-8 w-8 text-navy" />,
    title: 'Accessible Education',
    description: 'We believe every parent deserves access to expert c-section knowledge, delivered in flexible, digital formats that fit your schedule.'
  },
  {
    icon: <Heart className="h-8 w-8 text-navy" />,
    title: 'Creating Community',
    description: 'Building a supportive network where c-section parents can connect, learn, and feel empowered throughout their journey.'
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">About CSUK</h1>
              <p className="text-xl leading-relaxed">
                We're on a mission to support, care and cater to the ever-growing group of c-section parents 
                who find themselves searching for ways to have a more positive c-section birth and recovery.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-24 w-24 mx-auto mb-4 opacity-80" />
                  <div className="text-lg font-medium opacity-90">Our Team</div>
                  <div className="text-sm opacity-75">Expert Midwives & Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              c-sectionUK provides expert-led digital courses, online support sessions, and professional 
              c-section knowledge to empower parents with confidence, preparation, and community support. 
              We believe every c-section parent deserves access to evidence-based education and positive 
              birth experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do at CSUK
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm text-center hover:shadow-md hover:scale-105 transition-all duration-200">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Meet the CSUK Team</h2>
            <p className="text-lg text-gray-600">
              Our dedicated team of midwives, specialists, and support staff
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-200 relative">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">{member.name}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Press & Media */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Press & Media</h2>
            <p className="text-lg text-gray-600">
              CSUK has been featured by leading parenting and healthcare publications
            </p>
          </div>

          {/* Media Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-navy mb-2">50,000+</div>
              <div className="text-gray-600">Parents Supported</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <TrendingUp className="h-12 w-12 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-navy mb-2">98%</div>
              <div className="text-gray-600">Positive Feedback</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-navy mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Featured In */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-navy mb-6">As Featured In</h3>
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/press-media/logos/hoppy-home.jpeg.webp"
                  alt="Hoppy Home"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/press-media/logos/mama-mio.png.webp"
                  alt="Mama Mio"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/press-media/logos/the+list.jpeg.webp"
                  alt="The List"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Media Kit CTA */}
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
              <Calendar className="h-12 w-12 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-4">Media Enquiries</h3>
              <p className="text-gray-600 mb-6">
                For interviews, expert commentary, or press materials, contact our media team.
              </p>
              <a
                href="/contact-us"
                className="bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors inline-block"
              >
                Contact Media Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your C-Section Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of parents who have found confidence and support through our expert-led courses and community.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="/courses" 
              className="inline-block bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              View Our Courses
            </a>
            <a 
              href="/private-midwife" 
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Book Private Session
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}