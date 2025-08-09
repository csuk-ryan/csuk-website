/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/blog/drive-after-c-section',
        destination: '/blog/should-you-drive-after-c-section',
        permanent: true,
      },
      {
        source: '/blog/practical-tips-to-make-yourc-section-birth-better',
        destination: '/blog/practical-tips-to-make-your-c-section-birth-better',
        permanent: true,
      },
      {
        source: '/scar-care-mini-course',
        destination: '/courses/scar-care-mini-course',
        permanent: true,
      },
      {
        source: '/infant-feeding-course-bundle',
        destination: '/courses/infant-feeding-course-bundle',
        permanent: true,
      },
      {
        source: '/breastfeeding-mini-course',
        destination: '/courses/breastfeeding-for-c-section-mums-course',
        permanent: true,
      },
      {
        source: '/called',
        destination: '/',
        permanent: true,
      },
      {
        source: '/online-midwife',
        destination: '/online-private-education',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig