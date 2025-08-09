'use client'

import { useState } from 'react'
import { Calendar, Clock, User, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react'

interface CalendarSchedulerProps {
  onClose: () => void
  onBookingComplete: (booking: any) => void
}

export default function CalendarScheduler({ onClose, onBookingComplete }: CalendarSchedulerProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [selectedMidwife, setSelectedMidwife] = useState<string>('')
  const [step, setStep] = useState(1) // 1: Date, 2: Time, 3: Midwife, 4: Details

  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    pregnancyWeek: '',
    concerns: '',
    specialRequests: ''
  })

  const midwives = [
    {
      id: 'vic',
      name: 'Midwife Vic',
      title: 'Founder & Practicing Midwife',
      specialties: ['C-section preparation', 'Birth planning', 'Anxiety support'],
      image: '/images/about/profiles/vic.webp',
      nextAvailable: 'Tomorrow'
    },
    {
      id: 'zoe',
      name: 'Midwife Zoe',
      title: 'Infant Feeding Specialist',
      specialties: ['Breastfeeding support', 'Feeding after c-section', 'Combination feeding'],
      image: '/images/about/profiles/Zoe.webp',
      nextAvailable: 'Next week'
    },
    {
      id: 'laura',
      name: 'Midwife Laura',
      title: 'Freelance Midwife',
      specialties: ['Recovery support', 'Evidence-based care', 'Birth trauma'],
      image: '/images/about/profiles/laura.webp',
      nextAvailable: 'This week'
    }
  ]

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '19:00', '19:30', '20:00', '20:30'
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const isDateAvailable = (date: Date | null) => {
    if (!date) return false
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const checkDate = new Date(date)
    checkDate.setHours(0, 0, 0, 0)
    
    // Available if date is today or in the future and not a Sunday
    return checkDate >= today && date.getDay() !== 0
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))
  }

  const prevMonth = () => {
    if (currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear()) {
      return // Don't go to previous month if we're in the current month
    }
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))
  }

  const handleBooking = () => {
    const booking = {
      date: selectedDate,
      time: selectedTime,
      midwife: selectedMidwife,
      details: bookingDetails,
      price: 49.99,
      bookingId: 'CSUK-' + Date.now()
    }
    onBookingComplete(booking)
  }

  const canProceedToNext = () => {
    switch (step) {
      case 1: return selectedDate !== null
      case 2: return selectedTime !== ''
      case 3: return selectedMidwife !== ''
      case 4: return bookingDetails.name && bookingDetails.email
      default: return false
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
        
        {/* Header */}
        <div className="bg-navy text-white p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Book Your Private Session</h2>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              ×
            </button>
          </div>
          <div className="flex items-center mt-4 space-x-8">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className={`flex items-center ${stepNum < 4 ? 'mr-4' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= stepNum ? 'bg-white text-navy' : 'bg-navy-light text-gray-300'
                }`}>
                  {step > stepNum ? <CheckCircle size={16} /> : stepNum}
                </div>
                {stepNum < 4 && <div className={`w-8 h-px ${step > stepNum ? 'bg-white' : 'bg-navy-light'} ml-2`}></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          
          {/* Step 1: Date Selection */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">Choose Your Preferred Date</h3>
              
              <div className="bg-gray-50 rounded-lg p-6">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="p-2 hover:bg-gray-200 rounded-full"
                    disabled={currentDate.getMonth() === new Date().getMonth()}
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <h4 className="text-lg font-semibold">
                    {currentDate.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                  </h4>
                  <button onClick={nextMonth} className="p-2 hover:bg-gray-200 rounded-full">
                    <ArrowRight size={20} />
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-medium text-gray-600 p-2">
                      {day}
                    </div>
                  ))}
                  {getDaysInMonth(currentDate).map((date, index) => (
                    <button
                      key={index}
                      onClick={() => date && isDateAvailable(date) && setSelectedDate(date)}
                      disabled={!date || !isDateAvailable(date)}
                      className={`p-3 text-center rounded-lg transition-colors ${
                        !date ? 'invisible' : 
                        !isDateAvailable(date) ? 'text-gray-300 cursor-not-allowed' :
                        selectedDate && date.getTime() === selectedDate.getTime() ? 
                        'bg-navy text-white' : 'hover:bg-blue-100 text-gray-700'
                      }`}
                    >
                      {date?.getDate()}
                    </button>
                  ))}
                </div>

                <div className="text-sm text-gray-600">
                  <p>• Sessions are available Monday to Saturday</p>
                  <p>• Book up to 2 weeks in advance</p>
                </div>
              </div>

              {selectedDate && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-navy font-medium">Selected: {formatDate(selectedDate)}</p>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Time Selection */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">Choose Your Preferred Time</h3>
              <p className="text-gray-600 mb-6">Selected date: <strong>{selectedDate && formatDate(selectedDate)}</strong></p>
              
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg border text-center transition-colors ${
                      selectedTime === time
                        ? 'bg-navy text-white border-navy'
                        : 'border-gray-300 hover:border-navy hover:bg-blue-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 text-sm text-gray-600">
                <p>• All times are UK timezone</p>
                <p>• Sessions last 60 minutes</p>
                <p>• Zoom link will be sent via email</p>
              </div>
            </div>
          )}

          {/* Step 3: Midwife Selection */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">Choose Your Midwife</h3>
              <p className="text-gray-600 mb-6">
                {selectedDate && formatDate(selectedDate)} at {selectedTime}
              </p>
              
              <div className="space-y-4">
                {midwives.map((midwife) => (
                  <button
                    key={midwife.id}
                    onClick={() => setSelectedMidwife(midwife.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      selectedMidwife === midwife.id
                        ? 'border-navy bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy">{midwife.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{midwife.title}</p>
                        <div className="flex flex-wrap gap-2">
                          {midwife.specialties.map((specialty, index) => (
                            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-600 font-medium">Available</div>
                        <div className="text-xs text-gray-500">{midwife.nextAvailable}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Booking Details */}
          {step === 4 && (
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">Your Details</h3>
              
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Booking Summary</h4>
                <p><strong>Date:</strong> {selectedDate && formatDate(selectedDate)}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Midwife:</strong> {midwives.find(m => m.id === selectedMidwife)?.name}</p>
                <p><strong>Price:</strong> £49.99</p>
              </div>

              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={bookingDetails.name}
                      onChange={(e) => setBookingDetails({...bookingDetails, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={bookingDetails.email}
                      onChange={(e) => setBookingDetails({...bookingDetails, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={bookingDetails.phone}
                      onChange={(e) => setBookingDetails({...bookingDetails, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pregnancy Week (if applicable)</label>
                    <input
                      type="text"
                      value={bookingDetails.pregnancyWeek}
                      onChange={(e) => setBookingDetails({...bookingDetails, pregnancyWeek: e.target.value})}
                      placeholder="e.g., 32 weeks"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Main Concerns or Topics</label>
                  <textarea
                    rows={3}
                    value={bookingDetails.concerns}
                    onChange={(e) => setBookingDetails({...bookingDetails, concerns: e.target.value})}
                    placeholder="What would you like to discuss during your session?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                  <textarea
                    rows={2}
                    value={bookingDetails.specialRequests}
                    onChange={(e) => setBookingDetails({...bookingDetails, specialRequests: e.target.value})}
                    placeholder="Any specific needs or accommodations?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => step > 1 ? setStep(step - 1) : onClose()}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </button>
            
            <button
              onClick={() => step < 4 ? setStep(step + 1) : handleBooking()}
              disabled={!canProceedToNext()}
              className="px-6 py-2 bg-navy text-white rounded-md font-semibold hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 4 ? 'Complete Booking - £49.99' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}