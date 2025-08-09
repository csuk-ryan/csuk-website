'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown, User } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const coursesDropdown = [
    {
      category: 'Featured Courses',
      items: [
        { name: 'C-Section Prep Course', href: '/courses/c-section-prep-course', description: 'Complete preparation for your cesarean birth' },
        { name: 'Complete C-Section Bundle', href: '/courses/c-section-course-bundle', description: 'Our most comprehensive c-section package' },
        { name: 'Infant Feeding Bundle', href: '/courses/infant-feeding-course-bundle', description: 'Expert feeding guidance with Midwife Zoe' },
      ]
    },
    {
      category: 'Individual Courses',
      items: [
        { name: 'Breastfeeding', href: '/courses/breastfeeding', description: 'Master breastfeeding with confidence' },
        { name: 'Bottle Feeding', href: '/courses/bottle-feeding', description: 'Safe and effective bottle feeding' },
        { name: 'Expressing & Combo', href: '/courses/expressing-combo-feeding', description: 'Flexible feeding options' },
      ]
    }
  ]

  const resourcesDropdown = [
    { name: 'Blog', href: '/blog', description: 'Latest c-section insights and tips' },
    { name: 'Birth Stories', href: '/positive-birth-stories', description: 'Inspiring positive c-section experiences' },
    { name: 'Free C-Section Audio', href: '/resources/free-c-section-audio', description: 'Relaxation & preparation audio content' },
    { name: 'Scar Analyser', href: '/resources/scar-analyser', description: 'Free AI-powered scar assessment tool' },
    { name: 'Recovery Timeline', href: '/resources/recovery-timeline', description: 'Track your healing journey step-by-step' },
    { name: 'Affirmation Generator', href: '/resources/affirmation-generator', description: 'Positive self-talk for your c-section' },
    { name: 'Baby Name Generator', href: '/resources/baby-name-generator', description: 'Find the perfect name for your little one' },
    { name: 'Hospital Bag Checklist', href: '/resources/hospital-bag-checklist', description: 'Personalized packing list for your c-section birth' },
  ]

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Private Midwife', href: '/private-midwife' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact-us' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="ml-2 text-xl font-bold text-navy">C-Section UK</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Home */}
              <Link
                href="/"
                className="text-navy hover:text-navy-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* Courses Dropdown */}
              <div className="relative group">
                <button className="text-navy hover:text-navy-light px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  Courses
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-[480px] bg-white shadow-xl rounded-lg border border-gray-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {coursesDropdown.map((category) => (
                        <div key={category.category}>
                          <h4 className="font-semibold text-navy text-sm mb-4 uppercase tracking-wide">
                            {category.category}
                          </h4>
                          <div className="space-y-3">
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block group/item hover:bg-gray-50 p-2 rounded-md transition-colors"
                              >
                                <div className="text-navy font-medium text-sm group-hover/item:text-blue-600 transition-colors">
                                  {item.name}
                                </div>
                                <div className="text-gray-500 text-xs mt-1 leading-relaxed">
                                  {item.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <a
                          href="/contact-us"
                          className="text-gray-600 hover:text-navy text-sm font-medium transition-colors"
                        >
                          Speak to our team
                        </a>
                        <a
                          href="/private-midwife"
                          className="bg-navy text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-navy-light transition-colors"
                        >
                          Book a private midwife session
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Private Midwife */}
              <Link
                href="/private-midwife"
                className="text-navy hover:text-navy-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Private Midwife
              </Link>

              {/* About */}
              <Link
                href="/about"
                className="text-navy hover:text-navy-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="text-navy hover:text-navy-light px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  Resources
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border border-gray-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-6">
                    <div className="space-y-3">
                      {resourcesDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block group/item hover:bg-gray-50 p-3 rounded-md transition-colors"
                        >
                          <div className="text-navy font-medium text-sm group-hover/item:text-blue-600 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-gray-500 text-xs mt-1 leading-relaxed">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <a
                          href="/contact-us"
                          className="text-gray-600 hover:text-navy text-sm font-medium transition-colors"
                        >
                          Speak to our team
                        </a>
                        <a
                          href="/private-midwife"
                          className="bg-navy text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-navy-light transition-colors"
                        >
                          Book a private midwife session
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <Link
                href="/contact-us"
                className="text-navy hover:text-navy-light px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {/* Divider line */}
              <div className="h-6 w-px bg-gray-300"></div>
              
              <a
                href="https://sso.teachable.com/secure/1583694/identity/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-navy-light px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </a>
              <Link
                href="/courses"
                className="bg-navy text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-navy-light transition-colors"
              >
                View Courses
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy hover:text-navy-light p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-navy hover:text-navy-light block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Courses Section */}
              <div className="px-3 py-2">
                <h3 className="text-navy font-semibold text-base mb-2">Courses</h3>
                {coursesDropdown.map((category) => (
                  <div key={category.category} className="mb-3">
                    <h4 className="text-navy font-medium text-sm mb-1 pl-2">{category.category}</h4>
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-700 hover:text-navy block px-4 py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile Resources Section */}
              <div className="px-3 py-2">
                <h3 className="text-navy font-semibold text-base mb-2">Resources</h3>
                {resourcesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-navy block px-4 py-1 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-4 space-y-2">
                <a
                  href="https://sso.teachable.com/secure/1583694/identity/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:text-navy-light block px-3 py-2 rounded-md text-base font-medium border border-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
                <Link
                  href="/courses"
                  className="bg-navy text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-navy-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View Courses
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}