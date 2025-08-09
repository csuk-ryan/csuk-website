import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'C-Section Blog | Expert Tips & Advice | CSUK',
  description: 'Expert articles, tips, and advice about C-section preparation, recovery, and support. Stay informed with the latest insights from healthcare professionals.',
}

export default function BlogPage() {
  const categories = [
    'C-Section Preparation',
    'Recovery Tips',
    'Emotional Support',
    'Partner Guidance',
    'Breastfeeding',
    'Exercise & Movement'
  ]

  const featuredPosts = [
    {
      title: '10 Essential Items for Your C-Section Hospital Bag',
      excerpt: 'Make sure you&apos;re fully prepared for your hospital stay with this comprehensive packing checklist.',
      category: 'C-Section Preparation',
      readTime: '5 min read',
      date: 'Dec 15, 2024'
    },
    {
      title: 'Understanding C-Section Recovery: Week by Week Guide',
      excerpt: 'A detailed timeline of what to expect during your C-section recovery journey.',
      category: 'Recovery Tips', 
      readTime: '8 min read',
      date: 'Dec 10, 2024'
    },
    {
      title: 'How Partners Can Support During C-Section Recovery',
      excerpt: 'Practical ways partners can help during the recovery period and beyond.',
      category: 'Partner Guidance',
      readTime: '6 min read', 
      date: 'Dec 5, 2024'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-neutral to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              C-Section Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert articles, tips, and advice to support you through your C-section journey. 
              Written by qualified healthcare professionals and experienced mothers.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg text-gray-800 focus:border-navy focus:outline-none text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/blog/category/${category.toLowerCase().replace(/ /g, '-')}`}
                className="bg-neutral text-navy px-4 py-2 rounded-full hover:bg-navy hover:text-white transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-neutral rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <span className="bg-navy text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Link
                  href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="text-navy font-semibold hover:text-navy-light transition-colors inline-flex items-center"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center bg-navy-light text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-gray-300">
            Subscribe to our newsletter for the latest C-section tips, stories, and course updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-navy flex-1 border-2 border-white bg-white"
            />
            <button className="bg-white text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}