export default function PartnershipSection() {
  const partners = [
    {
      name: 'HP Therapy',
      logo: '/images/home/partnership/hptherapy.webp',
      description: 'Physiotherapy Partner'
    },
    {
      name: 'Make Birth Better',
      logo: '/images/home/partnership/makebirthbetter.webp', 
      description: 'Birth Trauma Support'
    },
    {
      name: 'MAM Baby',
      logo: '/images/home/partnership/mam.webp',
      description: 'Baby Products Partner'
    },
    {
      name: 'Neonatal Unit',
      logo: '/images/home/partnership/neruonatal.webp',
      description: 'Specialist Care Partner'
    },
    {
      name: 'Pregnancy Sickness Support',
      logo: '/images/home/partnership/pregnancysicknesssupport.webp',
      description: 'Pregnancy Support'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            In Partnership With
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Working alongside trusted healthcare organizations and parenting communities 
            to provide you with the best c-section education and support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform duration-200"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm mb-3 w-full h-24 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-600 font-medium">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">
            Trusted by healthcare professionals and recommended by leading maternity organizations
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              NHS Recommended
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Midwife Approved
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Evidence Based
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}