import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, Music, Play, Heart, Volume2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Birthing Playlists On Spotify: Recommendations & Ideas | CSUK Blog',
  description: 'Discover the best birthing playlists on Spotify to create a calming and empowering environment for your c-section birth. Expert recommendations and tips.',
  keywords: 'birthing playlist, spotify, c-section music, birth playlist, calming music, labor music',
}

export default function BirthingPlaylistsBlogPost() {
  const playlists = [
    {
      name: "Calm Birth Vibes",
      genre: "Ambient/Calm",
      songs: "50 songs",
      duration: "3hr 20min",
      description: "Soft, ambient tracks designed to create a peaceful birthing environment"
    },
    {
      name: "Peaceful Birth Journey", 
      genre: "Relaxation",
      songs: "45 songs",
      duration: "2hr 45min",
      description: "Gentle melodies and nature sounds for ultimate relaxation"
    },
    {
      name: "Empowered Birth",
      genre: "Upbeat/Empowering",
      songs: "35 songs", 
      duration: "2hr 10min",
      description: "Uplifting and empowering songs to boost confidence and strength"
    },
    {
      name: "Nature's Birth Symphony",
      genre: "Nature/Acoustic",
      songs: "40 songs",
      duration: "2hr 55min", 
      description: "Acoustic melodies combined with natural soundscapes"
    },
    {
      name: "Smooth Birth Jazz",
      genre: "Jazz",
      songs: "42 songs",
      duration: "3hr 15min",
      description: "Soothing jazz instrumentals for a sophisticated birth experience"
    },
    {
      name: "Classical Birth Serenity",
      genre: "Classical",
      songs: "38 songs",
      duration: "4hr 12min",
      description: "Timeless classical pieces for elegance and tranquility"
    },
    {
      name: "Acoustic Birth Stories",
      genre: "Slow Acoustic", 
      songs: "33 songs",
      duration: "2hr 25min",
      description: "Slow, meaningful acoustic songs with beautiful lyrics"
    },
    {
      name: "Birth Meditation Flow",
      genre: "Meditation",
      songs: "25 songs",
      duration: "2hr 8min", 
      description: "Meditation music designed for deep breathing and focus"
    },
    {
      name: "Hypnobirthing Harmony",
      genre: "Hypnobirthing",
      songs: "30 songs",
      duration: "2hr 30min",
      description: "Specially curated tracks for hypnobirthing techniques"
    },
    {
      name: "Rock Your Birth",
      genre: "Rock & Roll",
      songs: "28 songs",
      duration: "1hr 45min",
      description: "Empowering rock anthems for the strong birthing warrior"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-neutral to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-navy">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-navy">Blog</Link>
              <span>/</span>
              <span className="text-navy">Best Birthing Playlists On Spotify</span>
            </div>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-navy text-white text-xs px-3 py-1 rounded-full">C-Section Preparation</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Birth Planning</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Best Birthing Playlists On Spotify: Recommendations & Ideas
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 18, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>7 min read</span>
              </div>
              <div className="flex items-center">
                <Music className="w-4 h-4 mr-2" />
                <span>Birth Preparation</span>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Music has the incredible power to transform an experience, and childbirth is no exception. 
            Whether you're planning a cesarean birth or preparing for any birthing experience, 
            the right playlist can create a calming, empowering, and positive environment for you and your baby's arrival.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            In this comprehensive guide, we'll explore the best birthing playlists available on Spotify, 
            why music matters during birth, and how to create your own personalized soundtrack for this 
            incredible moment in your life.
          </p>
        </div>

        {/* What is a birthing playlist? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-6 flex items-center">
            <Volume2 className="w-8 h-8 mr-3 text-blue-600" />
            What is a Birthing Playlist?
          </h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <p className="text-gray-700 leading-relaxed">
              A birthing playlist is a carefully curated collection of songs chosen to be played during 
              childbirth and the immediate postpartum period. These playlists aim to create a calming, 
              positive, and supportive environment that can help reduce stress, provide comfort, and 
              enhance the overall birthing experience.
            </p>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            For c-section births, music can be particularly valuable as it provides a familiar and 
            comforting element during what might feel like a more clinical experience. The right music 
            can help you stay centered, connected to the moment, and focused on the incredible journey 
            of meeting your baby.
          </p>
        </section>

        {/* Why Are Birthing Playlists Important? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-6 flex items-center">
            <Heart className="w-8 h-8 mr-3 text-red-500" />
            Why Are Birthing Playlists Important?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-navy mb-2">Reduce Stress & Anxiety</h4>
                <p className="text-gray-600 text-sm">Music releases endorphins and can significantly reduce cortisol levels, helping you feel more relaxed.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-navy mb-2">Create Familiar Environment</h4>
                <p className="text-gray-600 text-sm">Your favorite songs can make the hospital room feel more personal and comforting.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-navy mb-2">Enhance Focus</h4>
                <p className="text-gray-600 text-sm">Music can help you stay present and focused on breathing and relaxation techniques.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-navy mb-2">Support Rhythmic Breathing</h4>
                <p className="text-gray-600 text-sm">The tempo and rhythm can naturally guide your breathing patterns during labor and birth.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-navy mb-2">Positive Associations</h4>
                <p className="text-gray-600 text-sm">Create beautiful, positive memories associated with your baby's birth day.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-navy mb-2">Partner Connection</h4>
                <p className="text-gray-600 text-sm">Shared musical preferences can help your partner feel more involved and connected.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top 10 Birthing Playlists */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-6 flex items-center">
            <Play className="w-8 h-8 mr-3 text-green-600" />
            Top 10 Birthing Playlists on Spotify
          </h2>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            We've carefully curated this list of the most popular and highly-rated birthing playlists 
            available on Spotify. Each offers a unique mood and style to suit different preferences 
            and birthing experiences.
          </p>
          
          <div className="grid gap-6">
            {playlists.map((playlist, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">{playlist.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{playlist.genre}</span>
                      <span>{playlist.songs}</span>
                      <span>{playlist.duration}</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    {index + 1}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{playlist.description}</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors inline-flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Listen on Spotify
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Creating the Perfect Birth Playlist */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-6">Creating Your Personal Birth Playlist</h2>
          
          <div className="bg-navy text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Essential Tips for Building Your Playlist</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-200">Before You Start</h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reflect on your personal music preferences and what makes you feel calm
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Consider the duration - plan for 3-6 hours of music
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Think about different phases: early labor, active labor, and post-birth
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-200">Building Your List</h4>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Include songs with positive lyrics and uplifting messages
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mix tempos - slower for relaxation, moderate for energy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Test your playlist beforehand and adjust as needed
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-900 rounded-lg">
              <h4 className="font-semibold mb-2">💡 Pro Tip for C-Section Parents</h4>
              <p className="text-blue-100 text-sm">
                Ask your medical team about their music policy in the operating room. Many hospitals 
                allow personal playlists during cesarean births, which can help create a more 
                personalized and calming environment.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-navy mb-6">The Perfect Playlist is Personal</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Remember, the ideal birthing playlist is highly personal and should reflect your unique 
              taste, preferences, and what makes you feel most comfortable and empowered. Whether you 
              prefer classical symphonies, modern pop, ambient soundscapes, or rock anthems, the most 
              important thing is that your chosen music brings you joy, peace, and strength.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              For c-section parents, music can be an especially valuable tool for creating connection 
              and maintaining a sense of control during your birth experience. Don't hesitate to 
              discuss your music preferences with your medical team and include your partner in 
              the playlist creation process.
            </p>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-semibold text-navy mb-3">Ready to create your perfect birthing experience?</h3>
              <p className="text-gray-600 mb-4">
                Combine your perfect playlist with comprehensive c-section preparation through our expert-led courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/courses/c-section-prep-course"
                  className="bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors text-center"
                >
                  Explore C-Section Courses
                </Link>
                <Link 
                  href="/online-private-education"
                  className="border border-navy text-navy px-6 py-3 rounded-md font-semibold hover:bg-navy hover:text-white transition-colors text-center"
                >
                  Book Private Session
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/c-section-hospital-bag" className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-navy mb-3">Essential Items for Your C-Section Hospital Bag</h3>
              <p className="text-gray-600 text-sm">Complete packing checklist for your cesarean birth.</p>
            </Link>
            <Link href="/blog/c-section-recovery-timeline" className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-navy mb-3">C-Section Recovery: Week by Week Guide</h3>
              <p className="text-gray-600 text-sm">What to expect during your healing journey.</p>
            </Link>
            <Link href="/blog/partner-support-c-section" className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-navy mb-3">How Partners Can Support During C-Section</h3>
              <p className="text-gray-600 text-sm">Practical ways to help during birth and recovery.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}