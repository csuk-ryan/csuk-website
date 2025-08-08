'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { Baby, Heart, Star, RefreshCw, Filter, Bookmark } from 'lucide-react'

const metadata: Metadata = {
  title: 'Baby Name Generator | Find Perfect Names for Your Little One | CSUK',
  description: 'Discover beautiful baby names with our interactive generator. Find names by origin, meaning, popularity, and style. Perfect for expectant c-section parents.',
}

const nameDatabase = {
  boys: {
    traditional: ['James', 'William', 'Henry', 'Charles', 'Edward', 'George', 'Thomas', 'Arthur', 'Frederick', 'Albert'],
    modern: ['Mason', 'Logan', 'Harper', 'Ethan', 'Alexander', 'Michael', 'Daniel', 'Matthew', 'Anthony', 'Christopher'],
    unique: ['Atlas', 'Phoenix', 'River', 'Sage', 'Ocean', 'Fox', 'Arrow', 'Storm', 'Zion', 'Onyx'],
    nature: ['River', 'Forest', 'Stone', 'Clay', 'Reed', 'Brooks', 'Vale', 'Ridge', 'Canyon', 'Cedar'],
    royal: ['Alexander', 'William', 'George', 'Henry', 'Charles', 'Edward', 'Louis', 'Arthur', 'Frederick', 'Albert']
  },
  girls: {
    traditional: ['Elizabeth', 'Charlotte', 'Victoria', 'Catherine', 'Margaret', 'Mary', 'Anne', 'Jane', 'Sarah', 'Emma'],
    modern: ['Aria', 'Luna', 'Mia', 'Isabella', 'Sophia', 'Olivia', 'Ava', 'Emma', 'Charlotte', 'Amelia'],
    unique: ['Seraphina', 'Aurelia', 'Celeste', 'Luna', 'Nova', 'Sage', 'Iris', 'Wren', 'Ivy', 'Jade'],
    nature: ['Rose', 'Lily', 'Ivy', 'Violet', 'Iris', 'Sage', 'Wren', 'River', 'Autumn', 'Summer'],
    royal: ['Elizabeth', 'Charlotte', 'Catherine', 'Margaret', 'Anne', 'Victoria', 'Alexandra', 'Eugenie', 'Beatrice', 'Louise']
  }
}

const nameMeanings: {[key: string]: string} = {
  'James': 'supplanter, follower',
  'William': 'resolute protector',
  'Elizabeth': 'pledged to God',
  'Charlotte': 'free person',
  'Henry': 'estate ruler',
  'Victoria': 'victory',
  'Luna': 'moon',
  'Aria': 'air, melody',
  'Atlas': 'to bear, endure',
  'Seraphina': 'fiery one',
  'River': 'flowing water',
  'Rose': 'rose flower',
  'Mason': 'stone worker',
  'Sophia': 'wisdom',
  'Alexander': 'defender of people',
  'Emma': 'universal',
  // Add more as needed
}

export default function BabyNameGeneratorPage() {
  const [selectedGender, setSelectedGender] = useState<'boys' | 'girls' | 'both'>('both')
  const [selectedStyle, setSelectedStyle] = useState<string>('all')
  const [generatedNames, setGeneratedNames] = useState<string[]>([])
  const [favoriteNames, setFavoriteNames] = useState<string[]>([])
  const [showFavorites, setShowFavorites] = useState(false)
  const [nameCount, setNameCount] = useState(5)

  const styles = ['all', 'traditional', 'modern', 'unique', 'nature', 'royal']

  const generateNames = () => {
    let availableNames: string[] = []

    if (selectedGender === 'both') {
      // Combine boys and girls names
      if (selectedStyle === 'all') {
        availableNames = [
          ...Object.values(nameDatabase.boys).flat(),
          ...Object.values(nameDatabase.girls).flat()
        ]
      } else {
        availableNames = [
          ...(nameDatabase.boys[selectedStyle as keyof typeof nameDatabase.boys] || []),
          ...(nameDatabase.girls[selectedStyle as keyof typeof nameDatabase.girls] || [])
        ]
      }
    } else {
      // Single gender
      if (selectedStyle === 'all') {
        availableNames = Object.values(nameDatabase[selectedGender]).flat()
      } else {
        availableNames = nameDatabase[selectedGender][selectedStyle as keyof typeof nameDatabase.boys] || []
      }
    }

    // Remove duplicates and shuffle
    const uniqueNames = [...new Set(availableNames)]
    const shuffled = uniqueNames.sort(() => Math.random() - 0.5)
    
    setGeneratedNames(shuffled.slice(0, nameCount))
  }

  const addToFavorites = (name: string) => {
    if (!favoriteNames.includes(name)) {
      setFavoriteNames([...favoriteNames, name])
    }
  }

  const removeFromFavorites = (name: string) => {
    setFavoriteNames(favoriteNames.filter(fav => fav !== name))
  }

  const downloadFavorites = () => {
    const content = favoriteNames.map((name, index) => 
      `${index + 1}. ${name}${nameMeanings[name] ? ` - ${nameMeanings[name]}` : ''}`
    ).join('\n')
    
    const element = document.createElement('a')
    const file = new Blob([`My Favorite Baby Names\n\n${content}\n\nCreated with CSUK Baby Name Generator`], 
      { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'my-favorite-baby-names.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Baby Name Generator</h1>
            <p className="text-xl leading-relaxed mb-8">
              Discover the perfect name for your little one with our curated collection of beautiful names. 
              Explore different styles, origins, and meanings to find the name that feels just right.
            </p>
            <div className="inline-flex items-center bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
              <Baby className="h-4 w-4 mr-2" />
              Perfect for C-Section Parents Planning Ahead
            </div>
          </div>
        </div>
      </section>

      {/* Generator Controls */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center">Customize Your Search</h2>
            
            <div className="space-y-6">
              {/* Gender Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Baby's Gender</label>
                <div className="flex space-x-4">
                  {[
                    { value: 'boys', label: 'Boy Names' },
                    { value: 'girls', label: 'Girl Names' },
                    { value: 'both', label: 'Both' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedGender(option.value as 'boys' | 'girls' | 'both')}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        selectedGender === option.value
                          ? 'bg-pink-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Name Style</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {styles.map((style) => (
                    <button
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`px-4 py-3 rounded-lg font-medium text-sm transition-colors capitalize ${
                        selectedStyle === style
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Names */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Number of Names: {nameCount}
                </label>
                <input
                  type="range"
                  min="3"
                  max="15"
                  value={nameCount}
                  onChange={(e) => setNameCount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Generate Button */}
              <div className="text-center pt-4">
                <button
                  onClick={generateNames}
                  className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all inline-flex items-center"
                >
                  <RefreshCw className="mr-2" size={20} />
                  Generate Names
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generated Names Display */}
      {generatedNames.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">Your Name Suggestions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedNames.map((name, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-navy">{name}</h3>
                      {nameMeanings[name] && (
                        <p className="text-sm text-gray-600 italic">"{nameMeanings[name]}"</p>
                      )}
                    </div>
                    <button
                      onClick={() => addToFavorites(name)}
                      className={`p-2 rounded-full transition-colors ${
                        favoriteNames.includes(name)
                          ? 'bg-pink-100 text-pink-600'
                          : 'bg-gray-100 text-gray-400 hover:bg-pink-100 hover:text-pink-600'
                      }`}
                      disabled={favoriteNames.includes(name)}
                    >
                      <Heart size={16} fill={favoriteNames.includes(name) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="capitalize">{selectedStyle === 'all' ? 'Mixed Style' : selectedStyle}</span>
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-400 mr-1" />
                      <span>Popular</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={generateNames}
                className="bg-white text-pink-600 border-2 border-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center"
              >
                <RefreshCw className="mr-2" size={16} />
                Generate More Names
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Favorites Section */}
      {favoriteNames.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-navy flex items-center">
                  <Bookmark className="mr-2 text-pink-600" size={24} />
                  Your Favorite Names ({favoriteNames.length})
                </h3>
                <div className="space-x-3">
                  <button
                    onClick={() => setShowFavorites(!showFavorites)}
                    className="text-pink-600 hover:text-pink-700 font-medium"
                  >
                    {showFavorites ? 'Hide' : 'Show'} Favorites
                  </button>
                  <button
                    onClick={downloadFavorites}
                    className="bg-pink-600 text-white px-4 py-2 rounded-md font-medium hover:bg-pink-700 transition-colors inline-flex items-center"
                  >
                    <RefreshCw className="mr-2" size={16} />
                    Download List
                  </button>
                </div>
              </div>

              {showFavorites && (
                <div className="grid md:grid-cols-2 gap-4">
                  {favoriteNames.map((name, index) => (
                    <div key={index} className="bg-pink-50 p-4 rounded-lg flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-navy">{name}</h4>
                        {nameMeanings[name] && (
                          <p className="text-sm text-gray-600 italic">"{nameMeanings[name]}"</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromFavorites(name)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Getting Started */}
      {generatedNames.length === 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gray-50 rounded-lg p-12">
              <Baby className="h-16 w-16 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Find the Perfect Name?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Customize your preferences above and click "Generate Names" to discover beautiful names for your little one. 
                You can save your favorites and generate as many combinations as you like!
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Planning Your C-Section Birth?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            While you're choosing the perfect name, make sure you're fully prepared for your c-section journey 
            with our expert-led courses and resources.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/courses/c-section-prep-course"
              className="bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Birth Prep Courses
            </a>
            <a 
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Browse All Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}