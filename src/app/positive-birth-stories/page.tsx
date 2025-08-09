'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { Play, Quote, Search, Filter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Positive C-Section Birth Stories | Real Experiences | CSUK',
  description: 'Read and watch inspiring positive C-section birth stories from real mothers. Find hope, encouragement, and confidence for your own cesarean journey.',
}

export default function PositiveBirthStoriesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const stories = [
    {
      name: "Sarah's Story",
      type: 'Planned C-Section',
      description: 'How preparation made all the difference in my positive C-section experience.',
      duration: '12 min read',
      tags: ['first-time', 'planned', 'preparation']
    },
    {
      name: "Emma's Journey",
      type: 'Emergency C-Section',
      description: 'Finding peace and positivity in an unexpected cesarean birth.',
      duration: '8 min read',
      tags: ['emergency', 'unexpected', 'recovery']
    },
    {
      name: "Lisa's Experience",
      type: 'Repeat C-Section',
      description: 'Why my second C-section was even better than my first.',
      duration: '10 min read',
      tags: ['repeat', 'second-baby', 'confidence']
    },
    {
      name: "Maria's Twin Birth",
      type: 'Twin C-Section',
      description: 'Delivering twins via C-section was overwhelming but ultimately beautiful.',
      duration: '15 min read',
      tags: ['twins', 'multiple-birth', 'special']
    },
    {
      name: "Jessica's Healing",
      type: 'C-Section Recovery',
      description: 'My journey to physical and emotional healing after my cesarean.',
      duration: '9 min read',
      tags: ['recovery', 'healing', 'postpartum']
    },
    {
      name: "Anna's Empowerment",
      type: 'Planned C-Section',
      description: 'Choosing a C-section and feeling empowered by my decision.',
      duration: '11 min read',
      tags: ['choice', 'empowerment', 'planned']
    }
  ]

  const categories = ['All', 'Planned C-Section', 'Emergency C-Section', 'Repeat C-Section', 'Twin C-Section', 'C-Section Recovery']

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || story.type === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-neutral to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Positive C-Section Birth Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real stories from real mothers who had positive, empowering C-section experiences. 
              Find inspiration and hope for your own journey.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy text-gray-900 placeholder-gray-500"
                placeholder="Search birth stories by name, experience, or keywords..."
              />
            </div>
            
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Results count */}
            <div className="text-center mt-4 text-gray-600">
              Showing {filteredStories.length} of {stories.length} stories
            </div>
          </div>
        </div>
        <div className="mb-16">
          <div className="bg-navy-light text-white p-8 rounded-2xl mb-12">
            <div className="flex items-start">
              <Quote size={48} className="mr-6 flex-shrink-0 text-white opacity-50" />
              <div>
                <p className="text-xl mb-4 italic">
                  &ldquo;I was terrified of having a C-section, but after finding CSUK and hearing these stories, 
                  I felt so much more confident. My birth was beautiful and empowering.&rdquo;
                </p>
                <p className="font-semibold">- Michelle K., Course Graduate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredStories.length > 0 ? filteredStories.map((story, index) => (
            <div key={index} className="bg-neutral rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="bg-navy text-white text-xs px-3 py-1 rounded-full">
                  {story.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{story.name}</h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{story.duration}</span>
                <button className="text-navy font-semibold hover:text-navy-light transition-colors inline-flex items-center">
                  <Play size={16} className="mr-1" />
                  Read Story
                </button>
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500">
                <Filter className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No stories found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}
                  className="text-navy hover:text-navy-light font-medium"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center bg-gradient-to-r from-navy to-navy-light text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="text-xl mb-8 text-gray-300">
            Had a positive C-section experience? Share your story to inspire and encourage other mothers.
          </p>
          <button className="bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Submit Your Story
          </button>
        </div>
      </div>
    </div>
  )
}