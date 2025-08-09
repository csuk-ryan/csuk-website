'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { CheckCircle, Play, Download, Clock, Star, Users, Shield } from 'lucide-react'

const courses = [
  {
    title: 'C-Section Prep Course',
    description: 'Everything you need to know to prepare for your c-section birth',
    topics: ['Understanding the procedure', 'Anaesthetic options', 'What to expect', 'Mental preparation']
  },
  {
    title: 'C-Section Birth Course', 
    description: 'Navigate your birth day with confidence and knowledge',
    topics: ['Day of surgery', 'Theatre procedures', 'Partner support', 'Immediate recovery']
  },
  {
    title: 'C-Section Recovery Course',
    description: 'Optimize your recovery for the best possible outcome',
    topics: ['Physical healing', 'Scar care basics', 'Emotional wellbeing', 'Long-term recovery']
  }
]

const features = [
  {
    icon: <Play className="h-6 w-6 text-navy" />,
    title: 'Online Video Courses',
    description: 'Watch anytime, anywhere on any device'
  },
  {
    icon: <Clock className="h-6 w-6 text-navy" />,
    title: 'Lifetime Access',
    description: 'Rewatch as many times as you need'
  },
  {
    icon: <Download className="h-6 w-6 text-navy" />,
    title: 'Downloadable Resources',
    description: 'Birth plan templates, hospital bag lists, and more'
  },
  {
    icon: <Shield className="h-6 w-6 text-navy" />,
    title: 'Expert-Led Content',
    description: 'Created by qualified midwives and specialists'
  }
]

const benefits = [
  'Reduce anxiety around c-section birth',
  'Increase confidence and birth knowledge', 
  'Understand medical procedures step-by-step',
  'Get practical guidance for recovery',
  'Access emotional support strategies',
  'Receive expert midwife-led education',
  'Download helpful resources and templates',
  'Enjoy guided relaxation audios'
]

const TeachableEmbed = () => {
  useEffect(() => {
    // Load Teachable embed script functionality for course bundle
    const handleCloseModal = (event: any) => {
      event.target.closest('.t-modal')?.classList.remove('open');
      document.body.classList.remove('t-modal-open');
    };

    const handleTeachableBuyButtonClick = (event: any) => {
      const embed = event.target.closest('.teachable-embed-course-bundle');
      const radios = embed?.querySelectorAll('input.teachable-pricing-plan-course-bundle');
      
      radios?.forEach((radio: any) => {
        if (radio.checked) {
          window.location.href = radio.value;
        }
      });
    };

    const handleParentPricingPlanClick = (event: any) => {
      const parentDiv = event.currentTarget.closest('.teachable-embed-course-bundle');
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
    document.querySelectorAll('.teachable-pricing-plan-course-bundle').forEach((radio, index) => {
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

    document.querySelectorAll('.teachable-buy-button-course-bundle').forEach((button) => {
      button.addEventListener('click', handleTeachableBuyButtonClick);
    });

    return () => {
      // Cleanup event listeners
      document.querySelectorAll('.teachable-pricing-plan-course-bundle').forEach((radio) => {
        const divEl = radio.closest('div');
        divEl?.removeEventListener("click", handleParentPricingPlanClick);
      });
      document.querySelectorAll('.teachable-buy-button-course-bundle').forEach((button) => {
        button.removeEventListener('click', handleTeachableBuyButtonClick);
      });
    };
  }, []);

  return (
    <div 
      className="teachable-embed-course-bundle mx-auto" 
      style={{
        color: 'rgb(0, 40, 85)',
        width: '488px',
        borderRadius: '8px',
        border: '1px solid rgb(228, 228, 228)',
        backgroundColor: 'rgb(255, 255, 255)',
        paddingBottom: '16px',
        wordBreak: 'break-word'
      }}
    >
      <img 
        src="/images/courses/csuk-bundle/bundle.webp" 
        alt="C-Section Course Bundle" 
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
        C-Section Course Bundle
      </h1>
      <p style={{
        fontWeight: 400,
        fontSize: '16px',
        fontStyle: 'normal',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        padding: '16px 16px 0px',
        lineHeight: '150%'
      }}>
        Complete c-section education covering prep, birth, and recovery.
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
            htmlFor="pricing-plan-bundle" 
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              fontStyle: 'normal',
              color: 'rgb(0, 40, 85)',
              maxWidth: 'calc(80%)'
            }}
          >
            <input 
              className="teachable-pricing-plan-course-bundle" 
              id="pricing-plan-bundle" 
              name="pricing-plan" 
              type="radio" 
              value="https://courses.csectionuk.com/purchase?product_id=4734007&user_src=embed_buy_button&embed=true"
              defaultChecked
              style={{ marginRight: '12px' }}
            />
            <span>Complete Bundle</span>
          </label>
          <span style={{
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 600,
            fontSize: '16px',
            fontStyle: 'normal',
            color: 'rgb(0, 40, 85)'
          }}>
            £99
          </span>
        </div>
        <button 
          className="teachable-buy-button-course-bundle" 
          type="button" 
          style={{
            backgroundColor: 'rgb(0, 40, 85)',
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
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 50, 95)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 40, 85)'}
        >
          Get Bundle Now
        </button>
      </form>
    </div>
  )
}

export default function CSectionCourseBundlePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4 mr-1" />
                Most Popular Bundle
              </div>
              <h1 className="text-5xl font-bold mb-6">C-Section Course Bundle</h1>
              <p className="text-xl leading-relaxed mb-8">
                Complete c-section education covering prep, birth, and recovery. 
                Three comprehensive courses designed for people feeling anxious about c-section birth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Get Bundle for £99
                </button>
                <div className="text-center sm:text-left">
                  <div className="text-sm opacity-75">Individual courses: £39.99 each</div>
                  <div className="font-semibold">Save over £20 with bundle</div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold mb-2">£99</div>
                <div className="text-lg opacity-75">Complete Bundle</div>
                <div className="text-sm line-through opacity-60 mt-2">£119.97 individual price</div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  3 comprehensive online courses
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  Lifetime access to all content
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  Downloadable resources & templates
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  Bonus: £5 off Scar Care Mini Course
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">What's Included</h2>
            <p className="text-lg text-gray-600">Three comprehensive courses covering every aspect of your c-section journey</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{course.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{course.description}</p>
                </div>
                
                <div className="space-y-2">
                  {course.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Course Features</h2>
            <p className="text-lg text-gray-600">Everything you need for a confident c-section experience</p>
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

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">What You'll Achieve</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our comprehensive bundle is designed to transform your c-section experience from 
                anxious to empowered, providing you with the knowledge and confidence you need.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8">
              <div className="text-center mb-6">
                <Users className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">Join Thousands of Confident Parents</h3>
                <p className="text-gray-600">Who have transformed their c-section experience</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Sister Barnes</span>
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  "Extremely thorough and concise... would benefit every parent considering a C-Section."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Offer */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Limited Time Bonus
            </div>
            <h2 className="text-2xl font-bold text-navy mb-4">Exclusive Bundle Bonus</h2>
            <p className="text-lg text-gray-700 mb-6">
              Get an additional <strong>£5 off our Scar Care Mini Course</strong> at checkout when you purchase this bundle.
            </p>
            <div className="text-sm text-gray-600">
              Perfect complement to complete your c-section education journey
            </div>
          </div>
        </div>
      </section>

      {/* Teachable Embed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-4">Get Your Bundle Now</h2>
            <p className="text-lg text-gray-600">Join thousands of parents who feel confident about their c-section birth</p>
          </div>
          <TeachableEmbed />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Feel Confident About Your C-Section?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of parents who have transformed their c-section experience with our 
            comprehensive, expert-led course bundle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get Complete Bundle - £99
            </button>
            <div className="text-center">
              <div className="text-sm opacity-75">30-day money-back guarantee</div>
              <div className="text-sm opacity-75">Lifetime access included</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/courses" 
              className="text-blue-200 hover:text-white underline"
            >
              View individual courses instead
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}