import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-navy font-bold text-lg">C</span>
              </div>
              <span className="ml-2 text-xl font-bold">CSUK</span>
            </div>
            <p className="text-gray-300 mb-4">
              The #1 C-section education website for women globally. 
              Feel confident, calm & informed about your C-section birth & recovery.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/online-private-education" className="text-gray-300 hover:text-white transition-colors">
                  Private Education
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/positive-birth-stories" className="text-gray-300 hover:text-white transition-colors">
                  Birth Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
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
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} C-Section UK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}