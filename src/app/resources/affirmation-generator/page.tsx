'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { RefreshCw, Heart, Share, Download, Star, MessageCircle } from 'lucide-react'

const metadata: Metadata = {
  title: 'C-Section Affirmation Generator | Positive Self-Talk for Cesarean Birth | CSUK',
  description: 'Generate personalized positive affirmations for your c-section journey. Build confidence, reduce anxiety, and embrace your birth story with empowering self-talk.',
}

const affirmationCategories = {
  preparation: {
    name: 'Pre-Surgery Preparation',
    affirmations: [
      "I trust my body's ability to heal and recover beautifully.",
      "My c-section is a safe and positive way to meet my baby.",
      "I am prepared, informed, and ready for this experience.",
      "My medical team is skilled and will take excellent care of us.",
      "Each moment brings me closer to holding my precious baby.",
      "I choose calm and confidence over fear and worry.",
      "My body knows exactly what to do to bring my baby safely here.",
      "I am strong, capable, and ready for this journey.",
      "This surgery is a celebration of my baby's safe arrival.",
      "I release any guilt and embrace the beauty of my birth story."
    ]
  },
  during: {
    name: 'During Surgery',
    affirmations: [
      "I am safe, my baby is safe, and we are in excellent hands.",
      "Each breath I take brings us closer to our first meeting.",
      "I trust the process and surrender to this moment.",
      "My body is strong and capable of healing quickly.",
      "Soon I will hold my beautiful baby in my arms.",
      "I am surrounded by skilled professionals who care for us.",
      "This moment is the beginning of our amazing journey together.",
      "I breathe in calm and breathe out any tension.",
      "My baby and I are working together beautifully.",
      "This is how my baby chose to enter the world, and it's perfect."
    ]
  },
  recovery: {
    name: 'Recovery & Healing',
    affirmations: [
      "Every day I am getting stronger and healing beautifully.",
      "My scar is a badge of honor showing my strength and love.",
      "I am patient and gentle with myself as I recover.",
      "My body has done something incredible and deserves my kindness.",
      "Each day brings new strength and energy.",
      "I celebrate small victories in my recovery journey.",
      "My incision is healing perfectly as my body knows how to do.",
      "I give myself permission to rest and recover at my own pace.",
      "I am proud of how I brought my baby into this world.",
      "My recovery story is one of strength, courage, and love."
    ]
  },
  selfLove: {
    name: 'Self-Love & Acceptance',
    affirmations: [
      "I am an incredible mother who made the best choice for my baby and me.",
      "My birth story is beautiful, unique, and exactly as it should be.",
      "I release any judgment and embrace my journey with love.",
      "My body is amazing and has given me the greatest gift.",
      "I deserve love, support, and kindness during this time.",
      "I am proud of my strength and the courage I've shown.",
      "My c-section experience is valid and worthy of celebration.",
      "I trust my instincts and know I made the right decisions.",
      "I am exactly the mother my baby needs.",
      "My journey to motherhood is perfect in its own unique way."
    ]
  },
  bonding: {
    name: 'Bonding & Connection',
    affirmations: [
      "My love for my baby grows stronger every single day.",
      "We are bonding beautifully in our own perfect way.",
      "Our connection is deep, natural, and unbreakable.",
      "Every moment with my baby is a precious gift.",
      "I am learning and growing as a mother every day.",
      "Our bond is not defined by how my baby was born.",
      "I provide everything my baby needs with love and care.",
      "We are writing our own beautiful story together.",
      "My baby knows how much they are loved and wanted.",
      "Our relationship is built on love, not on birth experience."
    ]
  }
}

export default function AffirmationGeneratorPage() {
  const [currentAffirmation, setCurrentAffirmation] = useState('')
  const [currentCategory, setCurrentCategory] = useState('')
  const [favoriteAffirmations, setFavoriteAffirmations] = useState<string[]>([])
  const [showFavorites, setShowFavorites] = useState(false)

  const generateRandomAffirmation = (category?: string) => {
    let affirmationPool: string[] = []
    let categoryName = ''

    if (category && affirmationCategories[category as keyof typeof affirmationCategories]) {
      const categoryData = affirmationCategories[category as keyof typeof affirmationCategories]
      affirmationPool = categoryData.affirmations
      categoryName = categoryData.name
    } else {
      // Get random affirmation from all categories
      const allCategories = Object.values(affirmationCategories)
      const randomCategoryIndex = Math.floor(Math.random() * allCategories.length)
      const selectedCategory = allCategories[randomCategoryIndex]
      affirmationPool = selectedCategory.affirmations
      categoryName = selectedCategory.name
    }

    const randomIndex = Math.floor(Math.random() * affirmationPool.length)
    setCurrentAffirmation(affirmationPool[randomIndex])
    setCurrentCategory(categoryName)
  }

  const addToFavorites = () => {
    if (currentAffirmation && !favoriteAffirmations.includes(currentAffirmation)) {
      setFavoriteAffirmations([...favoriteAffirmations, currentAffirmation])
    }
  }

  const removeFromFavorites = (affirmation: string) => {
    setFavoriteAffirmations(favoriteAffirmations.filter(fav => fav !== affirmation))
  }

  const shareAffirmation = async () => {
    if (navigator.share && currentAffirmation) {
      try {
        await navigator.share({
          title: 'C-Section Affirmation',
          text: `"${currentAffirmation}" - From CSUK Affirmation Generator`,
          url: window.location.href,
        })
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(`"${currentAffirmation}" - From CSUK Affirmation Generator`)
      }
    } else if (currentAffirmation) {
      navigator.clipboard.writeText(`"${currentAffirmation}" - From CSUK Affirmation Generator`)
    }
  }

  const downloadFavorites = () => {
    const content = favoriteAffirmations.map((affirmation, index) => 
      `${index + 1}. ${affirmation}`
    ).join('\n\n')
    
    const element = document.createElement('a')
    const file = new Blob([`My C-Section Affirmations\n\n${content}\n\nCreated with CSUK Affirmation Generator`], 
      { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'my-csection-affirmations.txt'
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
            <h1 className="text-5xl font-bold mb-6">C-Section Affirmation Generator</h1>
            <p className="text-xl leading-relaxed mb-8">
              Transform your inner dialogue with powerful, positive affirmations designed specifically 
              for your c-section journey. Build confidence, reduce anxiety, and embrace your birth story.
            </p>
            <div className="inline-flex items-center bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="h-4 w-4 mr-2" />
              Positive Self-Talk for Cesarean Mums
            </div>
          </div>
        </div>
      </section>

      {/* Main Generator Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Selection */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6">Choose Your Focus</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {Object.entries(affirmationCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => generateRandomAffirmation(key)}
                  className="bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors border border-purple-200 hover:border-purple-300"
                >
                  {category.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => generateRandomAffirmation()}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              <RefreshCw className="mr-2" size={20} />
              Generate Random Affirmation
            </button>
          </div>

          {/* Affirmation Display */}
          {currentAffirmation && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center mb-8 border border-purple-200">
              <div className="text-sm text-purple-600 font-medium mb-4 uppercase tracking-wide">
                {currentCategory}
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
                "{currentAffirmation}"
              </blockquote>
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => generateRandomAffirmation()}
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center border border-purple-200"
                >
                  <RefreshCw className="mr-2" size={16} />
                  New Affirmation
                </button>
                <button
                  onClick={addToFavorites}
                  className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors inline-flex items-center"
                  disabled={favoriteAffirmations.includes(currentAffirmation)}
                >
                  <Heart className="mr-2" size={16} />
                  {favoriteAffirmations.includes(currentAffirmation) ? 'Saved' : 'Save to Favorites'}
                </button>
                <button
                  onClick={shareAffirmation}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
                >
                  <Share className="mr-2" size={16} />
                  Share
                </button>
              </div>
            </div>
          )}

          {/* Favorites Section */}
          {favoriteAffirmations.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-navy flex items-center">
                  <Heart className="mr-2 text-pink-600" size={20} />
                  Your Favorite Affirmations ({favoriteAffirmations.length})
                </h3>
                <div className="space-x-3">
                  <button
                    onClick={() => setShowFavorites(!showFavorites)}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    {showFavorites ? 'Hide' : 'Show'} Favorites
                  </button>
                  {favoriteAffirmations.length > 0 && (
                    <button
                      onClick={downloadFavorites}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors inline-flex items-center"
                    >
                      <Download className="mr-2" size={16} />
                      Download
                    </button>
                  )}
                </div>
              </div>

              {showFavorites && (
                <div className="space-y-4">
                  {favoriteAffirmations.map((affirmation, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg flex justify-between items-start">
                      <p className="text-gray-700 italic">"{affirmation}"</p>
                      <button
                        onClick={() => removeFromFavorites(affirmation)}
                        className="text-red-500 hover:text-red-700 ml-4 flex-shrink-0"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Getting Started */}
          {!currentAffirmation && (
            <div className="text-center bg-gray-50 rounded-lg p-12">
              <MessageCircle className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Begin?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Click on a category above or generate a random affirmation to start building your positive self-talk practice. 
                Each affirmation is carefully crafted to support you through your c-section journey.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">How to Use Your Affirmations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get the most from your affirmation practice with these expert tips
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">Daily Practice</h3>
              <p className="text-gray-600 text-sm">
                Repeat your chosen affirmations 3-5 times daily. Morning and evening are particularly powerful times for positive self-talk.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">Feel the Words</h3>
              <p className="text-gray-600 text-sm">
                Don't just say the words - feel them. Take deep breaths and truly connect with the positive message you're giving yourself.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">Stay Consistent</h3>
              <p className="text-gray-600 text-sm">
                Consistency is key. Even 2-3 minutes of daily affirmations can create powerful positive changes in your mindset and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want More Support for Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Combine positive affirmations with expert guidance and comprehensive preparation for the most confident c-section experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/courses/c-section-prep-course"
              className="bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Prep Courses
            </a>
            <a 
              href="/online-private-education"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Book Private Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}