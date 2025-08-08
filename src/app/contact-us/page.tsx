'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { Mail, MessageCircle, Phone, AlertTriangle, Instagram, Facebook, ChevronDown, ChevronUp } from 'lucide-react'

const metadata: Metadata = {
  title: 'Contact Us | CSUK - C-Section UK Support & Inquiries',
  description: 'Get in touch with the CSUK team for general inquiries. Find our contact information, social media links, and support resources.',
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqItems = [
    {
      question: 'Can you provide medical advice?',
      answer: 'No, we cannot provide individual medical advice. Our content is educational only. For medical concerns, please consult your healthcare provider.'
    },
    {
      question: 'How do I access my course after purchase?',
      answer: 'After purchase, you\'ll receive login details via email. If you haven\'t received them within 24 hours, please check your spam folder and contact us.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer refunds within our policy terms. Please see our Refund Policy for full details.'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'General Inquiries',
      description: 'Questions about our courses, services, or general support',
      contact: 'Use the form below',
      color: 'text-blue-600'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Press & Media',
      description: 'Media inquiries and collaboration opportunities',
      contact: 'media@csectionuk.com',
      link: 'mailto:media@csectionuk.com',
      color: 'text-green-600'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Private Education',
      description: 'Book one-to-one sessions with our midwives',
      contact: 'Visit Private Education page',
      link: '/online-private-education',
      color: 'text-purple-600'
    }
  ]

  const socialLinks = [
    {
      platform: 'Instagram',
      handle: '@csectionuk',
      url: 'https://instagram.com/csectionuk',
      icon: <Instagram className="h-5 w-5" />
    },
    {
      platform: 'TikTok', 
      handle: '@midwifevic',
      url: 'https://www.tiktok.com/@midwifevic',
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      platform: 'Facebook',
      handle: 'csectionuk1',
      url: 'https://facebook.com/csectionuk1',
      icon: <Facebook className="h-5 w-5" />
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl leading-relaxed">
              We're here to support you on your c-section journey. Reach out to us for 
              general inquiries, course questions, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-amber-50 border-l-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notice</h3>
              <p className="text-amber-700">
                <strong>We cannot respond to personal medical requests or messages.</strong> For any health-related 
                concerns or medical advice, please consult your healthcare provider, midwife, or doctor directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">How Can We Help?</h2>
            <p className="text-lg text-gray-600">
              Choose the best way to reach us based on your inquiry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className={`flex justify-center mb-4 ${method.color}`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{method.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{method.description}</p>
                {method.link ? (
                  <a 
                    href={method.link}
                    className={`${method.color} font-medium hover:underline`}
                  >
                    {method.contact}
                  </a>
                ) : (
                  <span className="text-gray-600 font-medium">{method.contact}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">
              Have a general inquiry? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Thank You!</h3>
              <p className="text-gray-700">
                Thank you for your message! Our team will get back to you as soon as we can.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy transition-colors resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy text-white py-3 px-6 rounded-md font-semibold hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Connect With Us</h2>
            <p className="text-lg text-gray-600">
              Follow us on social media for daily tips, community support, and updates
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow group"
              >
                <div className="flex justify-center mb-3 text-navy group-hover:text-blue-600 transition-colors">
                  {social.icon}
                </div>
                <h3 className="font-semibold text-navy mb-1">{social.platform}</h3>
                <p className="text-gray-600 text-sm">{social.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Before You Contact Us</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-navy pr-4">{item.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                      {index === 2 && (
                        <>
                          {' '}Please see our{' '}
                          <a href="/refund-policy" className="text-navy hover:underline">Refund Policy</a>{' '}
                          for full details.
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}