import Link from 'next/link'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/logos/favicon.webp"
                  alt="C-Section UK Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="ml-2 text-xl font-bold">C-Section UK</span>
            </div>
            <p className="text-gray-300 mb-4">
              The #1 C-section education website for women globally. 
              Feel confident, calm & informed about your C-section birth & recovery.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://csectionuk.com/courses" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@midwifevic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Courses
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/c-section-prep-course" className="text-gray-300 hover:text-white transition-colors">
                  C-Section Prep Course
                </Link>
              </li>
              <li>
                <Link href="/courses/c-section-course-bundle" className="text-gray-300 hover:text-white transition-colors">
                  Complete C-Section Bundle
                </Link>
              </li>
              <li>
                <Link href="/courses/infant-feeding-course-bundle" className="text-gray-300 hover:text-white transition-colors">
                  Infant Feeding Bundle
                </Link>
              </li>
              <li>
                <Link href="/courses/breastfeeding" className="text-gray-300 hover:text-white transition-colors">
                  Breastfeeding Course
                </Link>
              </li>
              <li>
                <Link href="/courses/bottle-feeding" className="text-gray-300 hover:text-white transition-colors">
                  Bottle Feeding Course
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/private-midwife" className="text-gray-300 hover:text-white transition-colors">
                  Private Midwife
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/press-and-media" className="text-gray-300 hover:text-white transition-colors">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/our-partners" className="text-gray-300 hover:text-white transition-colors">
                  Our Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Policies
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/inclusivity-statement" className="text-gray-300 hover:text-white transition-colors">
                  Inclusivity Statement
                </Link>
              </li>
              <li>
                <Link href="/medical-disclaimer" className="text-gray-300 hover:text-white transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-300 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 mb-2">
            © {new Date().getFullYear()} C-Section UK. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Company No: 67948
          </p>
        </div>
      </div>
    </footer>
  )
}