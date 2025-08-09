'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { Baby, Heart, Star, RefreshCw, Filter, Bookmark, Eye, Shuffle } from 'lucide-react'

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
    royal: ['Alexander', 'William', 'George', 'Henry', 'Charles', 'Edward', 'Louis', 'Arthur', 'Frederick', 'Albert'],
    popular2024: ['Noah', 'Liam', 'Oliver', 'James', 'Elijah', 'William', 'Henry', 'Lucas', 'Benjamin', 'Theodore', 'Mateo', 'Levi', 'Sebastian', 'Daniel', 'Jack']
  },
  girls: {
    traditional: ['Elizabeth', 'Charlotte', 'Victoria', 'Catherine', 'Margaret', 'Mary', 'Anne', 'Jane', 'Sarah', 'Emma'],
    modern: ['Aria', 'Luna', 'Mia', 'Isabella', 'Sophia', 'Olivia', 'Ava', 'Emma', 'Charlotte', 'Amelia'],
    unique: ['Seraphina', 'Aurelia', 'Celeste', 'Luna', 'Nova', 'Sage', 'Iris', 'Wren', 'Ivy', 'Jade'],
    nature: ['Rose', 'Lily', 'Ivy', 'Violet', 'Iris', 'Sage', 'Wren', 'River', 'Autumn', 'Summer'],
    royal: ['Elizabeth', 'Charlotte', 'Catherine', 'Margaret', 'Anne', 'Victoria', 'Alexandra', 'Eugenie', 'Beatrice', 'Louise'],
    popular2024: ['Olivia', 'Emma', 'Charlotte', 'Amelia', 'Sophia', 'Isabella', 'Ava', 'Mia', 'Evelyn', 'Harper', 'Luna', 'Camila', 'Gianna', 'Elizabeth', 'Eleanor']
  }
}

const middleNames = {
  boys: ['James', 'Alexander', 'Michael', 'William', 'David', 'Christopher', 'Matthew', 'Anthony', 'Mark', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Jason'],
  girls: ['Rose', 'Marie', 'Anne', 'Grace', 'Elizabeth', 'Jane', 'Louise', 'Catherine', 'Nicole', 'Michelle', 'Jennifer', 'Lisa', 'Karen', 'Nancy', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth']
}

const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris']

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
  'Noah': 'rest, comfort',
  'Liam': 'strong-willed warrior',
  'Oliver': 'olive tree',
  'Elijah': 'my God is Yahweh',
  'Benjamin': 'son of the right hand',
  'Theodore': 'gift of God',
  'Mateo': 'gift of God',
  'Sebastian': 'venerable',
  'Daniel': 'God is my judge',
  'Jack': 'God is gracious',
  'Olivia': 'olive tree',
  'Amelia': 'work',
  'Isabella': 'pledged to God',
  'Ava': 'life',
  'Mia': 'mine',
  'Evelyn': 'wished for child',
  'Harper': 'harp player',
  'Camila': 'young ceremonial attendant',
  'Gianna': 'God is gracious',
  'Eleanor': 'bright, shining one',
  'Catherine': 'pure',
  'Margaret': 'pearl',
  'Anne': 'grace',
  'Jane': 'God is gracious',
  'Sarah': 'princess',
  'Charles': 'free man',
  'Edward': 'wealthy guardian',
  'George': 'farmer',
  'Thomas': 'twin',
  'Arthur': 'bear',
  'Frederick': 'peaceful ruler',
  'Albert': 'noble bright',
  'Phoenix': 'deep red',
  'Sage': 'wise one',
  'Ocean': 'sea',
  'Fox': 'cunning',
  'Storm': 'tempest',
  'Zion': 'highest point',
  'Onyx': 'black gemstone',
  'Forest': 'woods',
  'Stone': 'rock',
  'Clay': 'earth',
  'Reed': 'slender grass',
  'Brooks': 'small stream',
  'Vale': 'valley',
  'Ridge': 'mountain crest',
  'Canyon': 'deep gorge',
  'Cedar': 'evergreen tree',
  'Louis': 'famous warrior',
  'Aurelia': 'golden',
  'Celeste': 'heavenly',
  'Nova': 'new star',
  'Iris': 'rainbow',
  'Wren': 'small bird',
  'Ivy': 'climbing vine',
  'Jade': 'green stone',
  'Lily': 'lily flower',
  'Violet': 'purple flower',
  'Autumn': 'fall season',
  'Summer': 'warm season',
  'Alexandra': 'defender of people',
  'Eugenie': 'well-born',
  'Beatrice': 'bringer of joy',
  'Louise': 'famous warrior',
  'Lucas': 'light',
  'Levi': 'joined',
  'Michael': 'who is like God',
  'Anthony': 'priceless',
  'Christopher': 'bearer of Christ',
  'Matthew': 'gift of God',
  'Ethan': 'strong',
  'Mary': 'beloved'
}

export default function BabyNameGeneratorPage() {
  const [selectedGender, setSelectedGender] = useState<'boys' | 'girls' | 'both'>('both')
  const [selectedStyle, setSelectedStyle] = useState<string>('all')
  const [generatedNames, setGeneratedNames] = useState<string[]>([])
  const [favoriteNames, setFavoriteNames] = useState<string[]>([])
  const [showFavorites, setShowFavorites] = useState(false)
  const [nameCount, setNameCount] = useState(5)
  const [showFullNamePreview, setShowFullNamePreview] = useState(false)
  const [selectedFirstName, setSelectedFirstName] = useState<string>('')
  const [previewMiddleName, setPreviewMiddleName] = useState<string>('')
  const [previewLastName, setPreviewLastName] = useState<string>('')
  const [customMiddleName, setCustomMiddleName] = useState<string>('')
  const [customLastName, setCustomLastName] = useState<string>('')

  const styles = ['all', 'traditional', 'modern', 'unique', 'nature', 'royal', 'popular2024']

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

  const generateFullNamePreview = (firstName: string) => {
    const gender = selectedGender === 'both' ? (Math.random() > 0.5 ? 'boys' : 'girls') : selectedGender
    
    // Use custom names if provided, otherwise generate random ones
    const middleName = customMiddleName.trim() || 
      middleNames[gender === 'boys' ? 'boys' : 'girls'][Math.floor(Math.random() * middleNames[gender === 'boys' ? 'boys' : 'girls'].length)]
    const lastName = customLastName.trim() || 
      lastNames[Math.floor(Math.random() * lastNames.length)]
    
    setSelectedFirstName(firstName)
    setPreviewMiddleName(middleName)
    setPreviewLastName(lastName)
    setShowFullNamePreview(true)
  }

  const shuffleFullName = () => {
    if (selectedFirstName) {
      generateFullNamePreview(selectedFirstName)
    }
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
      <section className="bg-gradient-to-br from-navy to-blue-600 text-white py-20">
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
                      {style === 'popular2024' ? '2024 Popular' : style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Middle and Last Names */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="customMiddleName" className="block text-sm font-medium text-gray-700 mb-3">
                    Middle Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="customMiddleName"
                    value={customMiddleName}
                    onChange={(e) => setCustomMiddleName(e.target.value)}
                    placeholder="Enter a middle name to preview with"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave empty to use random middle names</p>
                </div>
                <div>
                  <label htmlFor="customLastName" className="block text-sm font-medium text-gray-700 mb-3">
                    Last Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="customLastName"
                    value={customLastName}
                    onChange={(e) => setCustomLastName(e.target.value)}
                    placeholder="Enter your family name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave empty to use random last names</p>
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

      {/* Full Name Preview Modal */}
      {showFullNamePreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-navy mb-4 text-center">Full Name Preview</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-center">
              <div className="text-3xl font-bold text-navy mb-2">
                {selectedFirstName} {previewMiddleName} {previewLastName}
              </div>
              <div className="text-sm text-gray-600">
                First: {selectedFirstName} | Middle: {previewMiddleName} | Last: {previewLastName}
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={shuffleFullName}
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                <Shuffle className="mr-2" size={16} />
                Try Different Combo
              </button>
              <button
                onClick={() => addToFavorites(`${selectedFirstName} ${previewMiddleName} ${previewLastName}`)}
                className="bg-pink-600 text-white px-4 py-2 rounded-md font-medium hover:bg-pink-700 transition-colors inline-flex items-center"
              >
                <Heart className="mr-2" size={16} />
                Save Full Name
              </button>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={() => setShowFullNamePreview(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
                    <div className="flex gap-2">
                      <button
                        onClick={() => generateFullNamePreview(name)}
                        className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                        title="Preview full name"
                      >
                        <Eye size={16} />
                      </button>
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
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="capitalize">{selectedStyle === 'all' ? 'Mixed Style' : selectedStyle === 'popular2024' ? '2024 Popular' : selectedStyle}</span>
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