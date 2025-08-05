import { Metadata } from 'next'
import Link from 'next/link'
import { Users, MessageCircle, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'C-Section Community | Support & Stories | CSUK',
  description: 'Join our supportive community of mothers who have experienced or are preparing for C-sections. Share stories, ask questions, and connect with others on similar journeys.',
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-neutral to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Join Our C-Section Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with thousands of mothers who understand your journey. Share experiences, 
              ask questions, and find the support you need in our welcoming community.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8">
            <Users size={48} className="text-navy mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy mb-4">5,000+ Members</h3>
            <p className="text-gray-600">
              Join thousands of mothers sharing their C-section experiences and supporting each other.
            </p>
          </div>
          <div className="text-center p-8">  
            <MessageCircle size={48} className="text-navy mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy mb-4">Expert Moderation</h3>
            <p className="text-gray-600">
              Our community is moderated by qualified healthcare professionals and birth educators.
            </p>
          </div>
          <div className="text-center p-8">
            <Heart size={48} className="text-navy mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy mb-4">Safe Space</h3>
            <p className="text-gray-600">
              A judgment-free environment where every mother&apos;s experience is valued and respected.
            </p>
          </div>
        </div>

        <div className="text-center bg-navy text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join our private Facebook group or access our course community forums.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Facebook Group
            </button>
            <Link
              href="/courses"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition-colors inline-flex items-center justify-center"
            >
              Access Course Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}