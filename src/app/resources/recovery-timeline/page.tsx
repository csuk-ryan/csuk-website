'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { Calendar, Clock, CheckCircle, AlertTriangle, Heart, Activity, Baby, TrendingUp } from 'lucide-react'

const metadata: Metadata = {
  title: 'C-Section Recovery Timeline Builder | Track Your Healing Journey | CSUK',
  description: 'Create your personalized c-section recovery timeline. Track healing milestones, set recovery goals, and get expert guidance for each stage of your journey.',
}

const recoveryMilestones = [
  {
    period: 'First 24 Hours',
    timeframe: 'Day 0-1',
    icon: <Clock className="h-6 w-6" />,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    milestones: [
      'Stay in bed with gradual movement encouraged',
      'Begin deep breathing exercises',
      'Start breastfeeding if desired',
      'Monitor incision site',
      'Pain management with prescribed medication'
    ],
    goals: [
      'Get out of bed with assistance',
      'Take first few steps',
      'Pass urine independently'
    ]
  },
  {
    period: 'Days 1-3',
    timeframe: 'Hospital Stay',
    icon: <Heart className="h-6 w-6" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    milestones: [
      'Increase mobility gradually',
      'Begin gentle walking',
      'Catheter removal (usually day 1-2)',
      'Start eating solid foods',
      'Monitor for signs of infection'
    ],
    goals: [
      'Walk to bathroom independently',
      'Shower with assistance',
      'Establish feeding routine'
    ]
  },
  {
    period: 'Week 1',
    timeframe: 'At Home',
    icon: <Activity className="h-6 w-6" />,
    color: 'text-yellow-600', 
    bgColor: 'bg-yellow-100',
    milestones: [
      'Gentle daily walks',
      'Rest and recovery focus',
      'Incision care routine',
      'Managing pain and discomfort',
      'Establishing sleep patterns'
    ],
    goals: [
      'Walk for 10-15 minutes daily',
      'Manage stairs if needed',
      'Independent personal care'
    ]
  },
  {
    period: 'Weeks 2-6', 
    timeframe: 'Early Recovery',
    icon: <TrendingUp className="h-6 w-6" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    milestones: [
      'Increase activity levels gradually',
      'Six-week medical check-up',
      'Begin gentle core exercises',
      'Resume some normal activities',
      'Monitor emotional wellbeing'
    ],
    goals: [
      'Walk for 30+ minutes',
      'Lift objects under 10lbs',
      'Drive if comfortable (check insurance)'
    ]
  },
  {
    period: 'Weeks 6-12',
    timeframe: 'Active Recovery', 
    icon: <CheckCircle className="h-6 w-6" />,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    milestones: [
      'Clearance for exercise (usually 6-8 weeks)',
      'Resume sexual activity if desired',
      'Return to work (if applicable)', 
      'Begin strength training',
      'Focus on scar care'
    ],
    goals: [
      'Return to pre-pregnancy activities',
      'Build core strength',
      'Achieve full mobility'
    ]
  },
  {
    period: '3+ Months',
    timeframe: 'Full Recovery',
    icon: <Baby className="h-6 w-6" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    milestones: [
      'Full recovery expected',
      'Unrestricted activity levels',
      'Scar fully healed',
      'Consider future pregnancies',
      'Focus on long-term health'
    ],
    goals: [
      'Complete physical recovery',
      'Resume all activities',
      'Plan future family goals'
    ]
  }
]

export default function RecoveryTimelinePage() {
  const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null)
  const [personalizedDate, setPersonalizedDate] = useState('')
  const [completedMilestones, setCompletedMilestones] = useState<{[key: string]: boolean}>({})

  const handleMilestoneToggle = (periodIndex: number, milestoneIndex: number) => {
    const key = `${periodIndex}-${milestoneIndex}`
    setCompletedMilestones(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const calculateDate = (daysToAdd: number) => {
    if (!personalizedDate) return ''
    const surgeryDate = new Date(personalizedDate)
    const targetDate = new Date(surgeryDate)
    targetDate.setDate(surgeryDate.getDate() + daysToAdd)
    return targetDate.toLocaleDateString()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">C-Section Recovery Timeline Builder</h1>
            <p className="text-xl leading-relaxed mb-8">
              Create your personalized recovery journey with milestone tracking, expert guidance, 
              and goal setting for each stage of your c-section healing process.
            </p>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Calendar className="h-4 w-4 mr-2" />
              Personalized Recovery Planning
            </div>
          </div>
        </div>
      </section>

      {/* Date Input Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">Set Your Surgery Date</h2>
            <p className="text-gray-600 mb-6">
              Enter your c-section date to create a personalized timeline with specific target dates
            </p>
            <div className="flex justify-center items-center space-x-4">
              <input
                type="date"
                value={personalizedDate}
                onChange={(e) => setPersonalizedDate(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
              />
              {personalizedDate && (
                <div className="text-green-600 font-medium">
                  ✓ Timeline personalized
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Your Recovery Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Track your progress through each stage of recovery with expert-guided milestones and goals
            </p>
          </div>

          <div className="space-y-8">
            {recoveryMilestones.map((period, periodIndex) => (
              <div key={periodIndex} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setSelectedPeriod(selectedPeriod === periodIndex ? null : periodIndex)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`${period.bgColor} ${period.color} p-3 rounded-full`}>
                        {period.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy">{period.period}</h3>
                        <p className="text-gray-600">{period.timeframe}</p>
                        {personalizedDate && (
                          <p className="text-sm text-blue-600 font-medium">
                            Target: {periodIndex === 0 ? calculateDate(0) : 
                                   periodIndex === 1 ? `${calculateDate(1)} - ${calculateDate(3)}` :
                                   periodIndex === 2 ? `${calculateDate(4)} - ${calculateDate(7)}` :
                                   periodIndex === 3 ? `${calculateDate(14)} - ${calculateDate(42)}` :
                                   periodIndex === 4 ? `${calculateDate(42)} - ${calculateDate(84)}` :
                                   `${calculateDate(90)}+`}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className={`transform transition-transform ${selectedPeriod === periodIndex ? 'rotate-180' : ''}`}>
                      ⌄
                    </div>
                  </div>
                </div>

                {selectedPeriod === periodIndex && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      {/* Milestones */}
                      <div>
                        <h4 className="font-semibold text-navy mb-4 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Recovery Milestones
                        </h4>
                        <div className="space-y-3">
                          {period.milestones.map((milestone, milestoneIndex) => (
                            <label key={milestoneIndex} className="flex items-start cursor-pointer">
                              <input
                                type="checkbox"
                                checked={completedMilestones[`${periodIndex}-${milestoneIndex}`] || false}
                                onChange={() => handleMilestoneToggle(periodIndex, milestoneIndex)}
                                className="mt-1 mr-3 text-navy focus:ring-navy"
                              />
                              <span className={`text-gray-700 ${completedMilestones[`${periodIndex}-${milestoneIndex}`] ? 'line-through text-gray-400' : ''}`}>
                                {milestone}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Goals */}
                      <div>
                        <h4 className="font-semibold text-navy mb-4 flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          Goals to Achieve
                        </h4>
                        <div className="space-y-2">
                          {period.goals.map((goal, goalIndex) => (
                            <div key={goalIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{goal}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Medical Notice</h3>
              <p className="text-amber-700">
                <strong>This timeline is for educational purposes only and should not replace professional medical advice.</strong> 
                Every woman's recovery is different. Always follow your healthcare provider's specific instructions and attend all follow-up appointments. 
                Contact your medical team immediately if you experience concerning symptoms such as fever, heavy bleeding, or signs of infection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Personalized Recovery Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert guidance tailored to your specific recovery journey with our qualified midwives and recovery specialists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/online-private-education"
              className="bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Recovery Consultation
            </a>
            <a 
              href="/courses/c-section-recovery"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Explore Recovery Course
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}