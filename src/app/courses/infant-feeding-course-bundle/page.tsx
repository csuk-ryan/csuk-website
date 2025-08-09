'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { CheckCircle, Play, Clock, Star, Heart, Baby, Shield } from 'lucide-react'


const courses = [
  {
    title: 'Breastfeeding for C-Section Mums',
    duration: '45 minutes',
    description: 'Navigate the unique challenges of breastfeeding after a c-section',
    topics: ['Comfortable positioning after surgery', 'Hormonal support post c-section', 'Early feeding establishment', 'Managing pain while feeding']
  },
  {
    title: 'Bottle Feeding for C-Section Mums', 
    duration: '40 minutes',
    description: 'Safe and effective bottle feeding techniques for c-section mothers',
    topics: ['Formula preparation and safety', 'Feeding positions for recovery', 'Establishing feeding routines', 'Partner involvement in feeding']
  },
  {
    title: 'Expressing & Combination Feeding',
    duration: '35 minutes',
    description: 'Master expressing and combination feeding for flexibility and support',
    topics: ['Expressing techniques and timing', 'Combining breast and bottle', 'Maintaining milk supply', 'Managing mixed feeding schedules']
  }
]

const features = [
  {
    icon: <Heart className="h-6 w-6 text-pink-600" />,
    title: 'Midwife-Led Content',
    description: 'Expert guidance from Midwife Zoe, infant feeding specialist'
  },
  {
    icon: <Play className="h-6 w-6 text-navy" />,
    title: 'Flexible Learning',
    description: 'Watch on computer or mobile, rewatch anytime'
  },
  {
    icon: <Clock className="h-6 w-6 text-green-600" />,
    title: '1-Year Access',
    description: 'Full access to all course materials for 12 months'
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: 'C-Section Specific',
    description: 'Addresses unique challenges for c-section mothers'
  }
]

const benefits = [
  'Understand all feeding options available to you',
  'Learn comfortable feeding positions post-surgery',
  'Get expert guidance on hormonal support',
  'Master expressing and combination techniques',
  'Build confidence in your feeding choices',
  'Receive practical, evidence-based advice',
  'Access specialist knowledge for c-section recovery',
  'Join a supportive community of c-section mums'
]

const testimonials = [
  {
    name: 'Emma M.',
    text: 'Midwife Zoe made breastfeeding after my c-section so much easier. The positioning tips were game-changing!'
  },
  {
    name: 'Sarah K.',
    text: 'The combination feeding course gave me the confidence to do what worked best for my family.'
  }
]

const TeachableEmbed = () => {
  useEffect(() => {
    // Load Teachable embed script functionality for infant feeding bundle
    const handleCloseModal = (event: any) => {
      event.target.closest('.t-modal')?.classList.remove('open');
      document.body.classList.remove('t-modal-open');
    };

    const handleTeachableBuyButtonClick = (event: any) => {
      const embed = event.target.closest('.teachable-embed-feeding-bundle');
      const radios = embed?.querySelectorAll('input.teachable-pricing-plan-feeding-bundle');
      
      radios?.forEach((radio: any) => {
        if (radio.checked) {
          window.location.href = radio.value;
        }
      });
    };

    const handleParentPricingPlanClick = (event: any) => {
      const parentDiv = event.currentTarget.closest('.teachable-embed-feeding-bundle');
      const divs = Array.from(parentDiv?.querySelectorAll('div') || []).filter((div: any) => {
        return div.querySelector('label') && div.querySelector('input');
      });

      divs.forEach((div: any) => {
        div.style.borderColor = '#E4E4E4';
      });

      const div = event.currentTarget;
      const radioButton = div.querySelector('input[type="radio"]');
      if (radioButton) {
        radioButton.click();
        div.style.borderColor = '#A7A7A7';
      }
    };

    // Initialize event listeners
    document.querySelectorAll('.teachable-pricing-plan-feeding-bundle').forEach((radio, index) => {
      const label = radio.closest('label');
      const id = radio.getAttribute('id');
      if (id && !id.includes('-index-')) {
        const indexedId = id + '-index-' + index;
        label?.setAttribute('for', indexedId);
        radio.setAttribute('id', indexedId);
      }
      const divEl = label?.closest("div");
      divEl?.addEventListener("click", handleParentPricingPlanClick);
    });

    document.querySelectorAll('.teachable-buy-button-feeding-bundle').forEach((button) => {
      button.addEventListener('click', handleTeachableBuyButtonClick);
    });

    return () => {
      // Cleanup event listeners
      document.querySelectorAll('.teachable-pricing-plan-feeding-bundle').forEach((radio) => {
        const divEl = radio.closest('div');
        divEl?.removeEventListener("click", handleParentPricingPlanClick);
      });
      document.querySelectorAll('.teachable-buy-button-feeding-bundle').forEach((button) => {
        button.removeEventListener('click', handleTeachableBuyButtonClick);
      });
    };
  }, []);

  return (
    <div 
      className="teachable-embed-feeding-bundle mx-auto" 
      style={{
        color: 'rgb(219, 39, 119)',
        width: '488px',
        borderRadius: '8px',
        border: '1px solid rgb(228, 228, 228)',
        backgroundColor: 'rgb(255, 255, 255)',
        paddingBottom: '16px',
        wordBreak: 'break-word'
      }}
    >
      <img 
        src="/images/courses/feeding-bundle/feeding-course-bundle.webp" 
        alt="Infant Feeding Course Bundle" 
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '274.5px',
          borderRadius: '8px 8px 0px 0px'
        }}
      />
      <h1 style={{
        fontWeight: 600,
        fontSize: '32px',
        fontStyle: 'normal',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        padding: '16px 16px 0px'
      }}>
        Infant Feeding Bundle
      </h1>
      <p style={{
        fontWeight: 400,
        fontSize: '16px',
        fontStyle: 'normal',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        padding: '16px 16px 0px',
        lineHeight: '150%'
      }}>
        Complete feeding guide for c-section mums with Midwife Zoe.
      </p>
      <form>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '16px',
          borderRadius: '0px',
          margin: '16px',
          border: '1px solid rgb(167, 167, 167)'
        }}>
          <label 
            htmlFor="pricing-plan-feeding-bundle" 
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              fontStyle: 'normal',
              color: 'rgb(219, 39, 119)',
              maxWidth: 'calc(80%)'
            }}
          >
            <input 
              className="teachable-pricing-plan-feeding-bundle" 
              id="pricing-plan-feeding-bundle" 
              name="pricing-plan" 
              type="radio" 
              value="https://courses.csectionuk.com/purchase?product_id=4734008&user_src=embed_buy_button&embed=true"
              defaultChecked
              style={{ marginRight: '12px' }}
            />
            <span>Feeding Bundle</span>
          </label>
          <span style={{
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 600,
            fontSize: '16px',
            fontStyle: 'normal',
            color: 'rgb(219, 39, 119)'
          }}>
            £79
          </span>
        </div>
        <button 
          className="teachable-buy-button-feeding-bundle" 
          type="button" 
          style={{
            backgroundColor: 'rgb(219, 39, 119)',
            borderRadius: '8px',
            border: 'none',
            color: 'rgb(255, 255, 255)',
            cursor: 'pointer',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '150%',
            margin: '0px 16px 0px',
            padding: '12px 24px',
            textAlign: 'center',
            textDecoration: 'none',
            width: 'calc(100% - 32px)',
            transition: 'background-color 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgb(190, 30, 100)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgb(219, 39, 119)'}
        >
          Get Bundle Now
        </button>
      </form>
    </div>
  )
}

export default function InfantFeedingCourseBundlePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Baby className="h-4 w-4 mr-1" />
                Led by Midwife Zoe
              </div>
              <h1 className="text-5xl font-bold text-navy mb-6">Infant Feeding Course Bundle</h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Comprehensive guide to infant feeding for C-Section mums. 
                Covers all feeding options with specialist guidance for your unique recovery needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button className="bg-pink-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-pink-700 transition-colors">
                  Get Bundle for £79
                </button>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold text-gray-900">Save £10</div>
                  <div>Individual courses: £29.99 each</div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  2+ hours content
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  1-year access
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  MAM sponsored
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-navy mb-2">£79</div>
                <div className="text-lg text-gray-600">Complete Bundle</div>
                <div className="text-sm line-through text-gray-400 mt-1">£89.97 individual price</div>
                <div className="text-sm text-green-600 font-semibold">Save £10</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                  3 comprehensive feeding courses
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                  Specialist c-section guidance
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                  1-year access to all content
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                  Mobile & desktop compatible
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                  Rewatch capabilities
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-xs text-blue-800 font-medium mb-1">SPONSORED BY</div>
                <div className="text-lg font-bold text-blue-900">MAM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Three Specialized Courses</h2>
            <p className="text-lg text-gray-600">Each course addresses the unique challenges of feeding after a c-section</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Baby className="h-5 w-5 text-pink-600" />
                  </div>
                  <div className="text-sm text-gray-500">{course.duration}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-navy mb-3">{course.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900 mb-3">What You'll Learn:</div>
                  {course.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Choose Our Feeding Bundle?</h2>
            <p className="text-lg text-gray-600">Designed specifically for the needs of c-section mothers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Midwife Zoe */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-pink-50 rounded-lg p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Meet Midwife Zoe</h3>
                <p className="text-pink-600 font-medium mb-4">Infant Feeding Specialist</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Qualified midwife with extensive experience in infant feeding, 
                  particularly supporting mothers after c-section births. Passionate about 
                  helping families make informed feeding choices.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">What You'll Achieve</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our specialized bundle addresses the unique challenges c-section mothers face 
                when establishing feeding routines during recovery.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">What Parents Say</h2>
            <p className="text-lg text-gray-600">Real feedback from c-section mums</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 font-medium">{testimonial.name}</span>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachable Embed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-4">Start Your Feeding Journey</h2>
            <p className="text-lg text-gray-600">Get expert feeding guidance from Midwife Zoe</p>
          </div>
          <TeachableEmbed />
        </div>
      </section>

      {/* Related Course */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Complete Your C-Section Education</h2>
            <p className="text-lg text-blue-100 mb-6">
              Pair this feeding bundle with our comprehensive C-Section Course Bundle 
              for complete birth and recovery preparation.
            </p>
            <Link 
              href="/courses/c-section-course-bundle"
              className="inline-block bg-white text-navy px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              View C-Section Course Bundle
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-pink-600 to-pink-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Feeding Journey with Confidence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of c-section mums who have found feeding success with 
            Midwife Zoe's expert guidance and support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get Feeding Bundle - £79
            </button>
            <div className="text-center text-pink-100">
              <div className="text-sm">1-year access included</div>
              <div className="text-sm">Watch on any device</div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link 
              href="/courses" 
              className="text-pink-200 hover:text-white underline"
            >
              Browse all courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}