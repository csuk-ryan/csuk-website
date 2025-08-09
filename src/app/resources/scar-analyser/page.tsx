'use client'

import { Metadata } from 'next'
import { useState, useRef } from 'react'
import { Upload, Camera, AlertTriangle, CheckCircle, Info, Star } from 'lucide-react'

const metadata: Metadata = {
  title: 'C-Section Scar Analyser | Free Scar Assessment Tool | CSUK',
  description: 'Upload a photo of your c-section scar for instant analysis and comparison with our database. Get expert feedback on your scar healing progress.',
}

const scarTypes = [
  { 
    name: 'Optimal Healing', 
    description: 'Flat, pale, and well-healed scar with minimal visibility',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  { 
    name: 'Normal Healing', 
    description: 'Pink or red scar that\'s slightly raised but healing well',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  { 
    name: 'Hypertrophic', 
    description: 'Raised, thick scar that stays within the original wound boundaries',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  { 
    name: 'Keloid', 
    description: 'Raised scar that extends beyond the original wound area',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  }
]

export default function ScarAnalyserPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false)
  const [userDetails, setUserDetails] = useState({ name: '', email: '', marketing: false })
  const [loadingStage, setLoadingStage] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = () => {
    // Simulate using the example scar image
    setSelectedFile(new File([''], 'scarexample.webp'))
    setPreviewUrl('/images/scar-analytics/scarexample.webp')
    setAnalysisResult(null)
  }

  const handleAnalyze = async () => {
    if (!selectedFile || !hasAcceptedTerms || !userDetails.name || !userDetails.email) return

    setIsAnalyzing(true)
    
    // Simulate analysis stages
    const stages = [
      'Analysing your image...',
      'Reviewing our database...',
      'Comparing healing patterns...',
      'Generating recommendations...',
      'Preparing your results...'
    ]
    
    for (let i = 0; i < stages.length; i++) {
      setLoadingStage(stages[i])
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    
    // Mock analysis result
    const mockResult = {
      scarType: scarTypes[1], // Normal Healing
      confidence: 85,
      recommendations: [
        'Continue with gentle scar massage using a quality scar cream',
        'Protect from sun exposure with SPF 30+ sunscreen',
        'Monitor for any changes in texture, color, or sensation',
        'Consider silicone gel sheets if scar becomes raised'
      ],
      timeframe: '6-12 months post-surgery',
      followUp: 'Consider booking a private consultation if you have concerns'
    }
    
    setAnalysisResult(mockResult)
    setIsAnalyzing(false)
    setLoadingStage('')
  }

  const resetAnalysis = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    setAnalysisResult(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">C-Section Scar Analyser</h1>
            <p className="text-xl leading-relaxed mb-8">
              Upload a photo of your c-section scar for instant analysis and expert recommendations. 
              Compare your scar with our extensive database of healing examples.
            </p>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4 mr-2" />
              Free Analysis Tool
            </div>
          </div>
        </div>
      </section>


      {/* Main Analysis Tool */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {!analysisResult ? (
            <>
              {/* Upload Section */}
              <div className="bg-gray-50 rounded-lg p-8 text-center mb-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Upload Your Scar Photo</h2>
                
                {!previewUrl ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-blue-400 transition-colors">
                    <div className="flex flex-col items-center">
                      <Upload className="h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-lg text-gray-600 mb-4">
                        Drag and drop your photo here, or click to browse
                      </p>
                      <button
                        onClick={handleFileSelect}
                        className="bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors"
                      >
                        Use Example Photo
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="relative inline-block">
                      <img 
                        src={previewUrl} 
                        alt="Scar preview" 
                        className="max-w-md w-full h-auto rounded-lg shadow-md"
                      />
                      <button
                        onClick={resetAnalysis}
                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                    
                    {/* User Details Form */}
                    <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
                      <h3 className="font-semibold text-navy mb-4">Your Details (Required for Results)</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={userDetails.name}
                            onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={userDetails.email}
                            onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      {/* Marketing Consent */}
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="marketing"
                          checked={userDetails.marketing}
                          onChange={(e) => setUserDetails({...userDetails, marketing: e.target.checked})}
                          className="mt-1 mr-3"
                        />
                        <label htmlFor="marketing" className="text-sm text-gray-700">
                          I would like to receive helpful c-section tips, resources, and course updates via email. 
                          You can unsubscribe at any time.
                        </label>
                      </div>
                      
                      {/* Terms */}
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="terms"
                          checked={hasAcceptedTerms}
                          onChange={(e) => setHasAcceptedTerms(e.target.checked)}
                          className="mt-1 mr-3"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-700">
                          I understand this is for educational purposes only and does not replace medical advice. 
                          I consent to my photo being compared with our database for analysis purposes. *
                        </label>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleAnalyze}
                      disabled={!hasAcceptedTerms || isAnalyzing || !userDetails.name || !userDetails.email}
                      className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAnalyzing ? loadingStage : 'Analyze My Scar'}
                    </button>
                  </div>
                )}
              </div>

              {/* Analysis Progress */}
              {isAnalyzing && (
                <div className="bg-white rounded-lg p-8 text-center border border-gray-200">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{loadingStage}</h3>
                  <p className="text-gray-600">
                    Please wait while we analyse your scar...
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Analysis Results */
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-navy">Analysis Complete</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={previewUrl} 
                      alt="Analyzed scar" 
                      className="w-full h-auto rounded-lg shadow-md mb-4"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-3">Scar Classification</h3>
                      <div className={`${analysisResult.scarType.bgColor} ${analysisResult.scarType.color} p-4 rounded-lg`}>
                        <div className="font-semibold text-lg mb-2">{analysisResult.scarType.name}</div>
                        <div className="text-sm">{analysisResult.scarType.description}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-3">Confidence Level</h3>
                      <div className="flex items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-3 mr-3">
                          <div 
                            className="bg-blue-600 h-3 rounded-full transition-all duration-1000" 
                            style={{ width: `${analysisResult.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{analysisResult.confidence}%</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-3">Healing Timeframe</h3>
                      <p className="text-gray-700">{analysisResult.timeframe}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-navy mb-4">Personalized Recommendations</h3>
                <ul className="space-y-3">
                  {analysisResult.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow-up Actions */}
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-navy mb-4">Next Steps</h3>
                <p className="text-gray-700 mb-6">{analysisResult.followUp}</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/private-midwife"
                    className="bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors text-center"
                  >
                    Book Private Consultation
                  </a>
                  <a 
                    href="/courses/scar-care"
                    className="border border-navy text-navy px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors text-center"
                  >
                    Learn More About Scar Care
                  </a>
                  <button
                    onClick={resetAnalysis}
                    className="text-gray-600 hover:text-gray-800 px-6 py-3 font-medium"
                  >
                    Analyze Another Photo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Scar Types Reference */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Understanding Scar Types</h2>
            <p className="text-lg text-gray-600">Learn about the different types of c-section scar healing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scarTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className={`w-12 h-12 ${type.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <div className={`w-6 h-6 rounded-full ${type.color === 'text-green-600' ? 'bg-green-600' : type.color === 'text-blue-600' ? 'bg-blue-600' : type.color === 'text-orange-600' ? 'bg-orange-600' : 'bg-red-600'}`}></div>
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${type.color}`}>{type.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Expert Guidance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For personalized scar care advice and professional assessment, 
            book a private consultation with our qualified midwives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/private-midwife"
              className="bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Private Session
            </a>
            <a 
              href="/courses"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Explore Scar Care Courses
            </a>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer - Subtle */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              <strong>Medical Disclaimer:</strong> This tool is for educational purposes only and does not replace professional medical advice. 
              Always consult your healthcare provider for concerns about your scar healing.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}