'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import { Clock, Users, Star, CheckCircle, PlayCircle, Download, Shield } from 'lucide-react'

const metadata: Metadata = {
  title: 'C-Section Prep Course | Complete Cesarean Birth Preparation | CSUK',
  description: 'Comprehensive 3-hour course covering everything you need to know about C-section preparation, surgery, and early recovery. Expert-led education for confident cesarean birth.',
}

const TeachableEmbed = () => {
  useEffect(() => {
    // Load Teachable embed script functionality
    const handleCloseModal = (event: any) => {
      event.target.closest('.t-modal')?.classList.remove('open');
      document.body.classList.remove('t-modal-open');
    };

    const handleTeachableBuyButtonClick = (event: any) => {
      const embed = event.target.closest('.teachable-embed-course-2075674');
      const radios = embed?.querySelectorAll('input.teachable-pricing-plan-course-2075674');
      
      radios?.forEach((radio: any) => {
        if (radio.checked) {
          window.location.href = radio.value;
        }
      });
    };

    const handleParentPricingPlanClick = (event: any) => {
      const parentDiv = event.currentTarget.closest('.teachable-embed-course-2075674');
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
    document.querySelectorAll('.teachable-pricing-plan-course-2075674').forEach((radio, index) => {
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

    document.querySelectorAll('.teachable-buy-button-course-2075674').forEach((button) => {
      button.addEventListener('click', handleTeachableBuyButtonClick);
    });

    return () => {
      // Cleanup event listeners
      document.querySelectorAll('.teachable-pricing-plan-course-2075674').forEach((radio) => {
        const divEl = radio.closest('div');
        divEl?.removeEventListener("click", handleParentPricingPlanClick);
      });
      document.querySelectorAll('.teachable-buy-button-course-2075674').forEach((button) => {
        button.removeEventListener('click', handleTeachableBuyButtonClick);
      });
    };
  }, []);

  return (
    <div 
      className="teachable-embed-course-2075674 mx-auto" 
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
        src="https://static-media.hotmart.com/guWwE4qVR9Smjxol8nqc50owjiM=/705x0/https://uploads.teachablecdn.com/attachments/on5Ih8XoRjGQgymiWP5E_prep-teachable.jpg" 
        alt="C-Section Prep Course" 
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
        C-Section Prep Course
      </h1>
      <p style={{
        fontWeight: 400,
        fontSize: '16px',
        fontStyle: 'normal',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        padding: '16px 16px 0px',
        lineHeight: '150%'
      }}>
        Feel empowered, confident and prepared going into your c-section birth.
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
            htmlFor="pricing-plan-4734006" 
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
              className="teachable-pricing-plan-course-2075674" 
              id="pricing-plan-4734006" 
              name="pricing-plan" 
              type="radio" 
              data-plan-type="One-Time Purchase" 
              value="https://courses.csectionuk.com/purchase?product_id=4734006&user_src=embed_buy_button&embed=true" 
              defaultChecked
              style={{ display: 'none' }}
            />
            <span style={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              paddingRight: '8px'
            }}>
              One-Time Purchase
            </span>
          </label>
          <span style={{
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            textAlign: 'end',
            fontWeight: 600
          }}>
            £39.99
          </span>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          margin: '16px'
        }}>
          <button 
            className="teachable-buy-button-course-2075674" 
            type="button" 
            style={{
              border: '1px solid rgb(146, 193, 233)',
              borderRadius: '0px',
              backgroundColor: 'rgb(146, 193, 233)',
              padding: '16px',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              fontStyle: 'normal',
              color: 'rgb(0, 40, 85)',
              cursor: 'pointer'
            }}
          >
            Buy now
          </button>
        </div>
      </form>
    </div>
  );
};

export default function CSectionPrepCoursePage() {
  const modules = [
    {
      title: 'Understanding C-Section Surgery',
      duration: '30 minutes',
      lessons: ['Why C-sections are performed', 'Types of cesarean births', 'Medical terminology explained']
    },
    {
      title: 'Pre-Surgery Preparation',
      duration: '45 minutes', 
      lessons: ['What to do the night before', 'Fasting guidelines', 'Mental preparation techniques']
    },
    {
      title: 'What to Expect During Surgery',
      duration: '40 minutes',
      lessons: ['Step-by-step surgery process', 'Anesthesia options', 'Partner involvement']
    },
    {
      title: 'Pain Management & Recovery',
      duration: '35 minutes',
      lessons: ['Pain relief options', 'First 24 hours', 'Movement and mobility']
    },
    {
      title: 'Going Home & Early Recovery',
      duration: '30 minutes',
      lessons: ['Discharge planning', 'Home care essentials', 'Warning signs to watch for']
    },
    {
      title: 'Partner Support Guide',
      duration: '20 minutes',
      lessons: ['How partners can help', 'Emotional support strategies', 'Practical assistance tips']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'This course completely changed my C-section experience. I felt prepared and confident instead of anxious and scared.',
      rating: 5
    },
    {
      name: 'Emma L.',
      text: 'The recovery section was incredibly helpful. I knew exactly what to expect and how to take care of myself.',
      rating: 5
    },
    {
      name: 'Jessica K.',
      text: 'My partner and I both watched this together. The partner guide section was so valuable for him to understand how to support me.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-neutral to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                C-Section Prep Course
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The complete guide to preparing for your planned or emergency cesarean birth. 
                From pre-surgery preparation to early recovery, gain the confidence you need.
              </p>

              <div className="flex items-center space-x-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-navy" />
                  <span>3 hours content</span>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="mr-2 text-navy" />
                  <span>2,500+ students</span>
                </div>
                <div className="flex items-center">
                  <Star size={20} className="mr-2 text-yellow-500" />
                  <span>4.9/5 rating</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors text-lg">
                  Enroll Now - £49
                </button>
                <button className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors inline-flex items-center justify-center">
                  <PlayCircle className="mr-2" size={20} />
                  Preview Course
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <TeachableEmbed />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Course Curriculum</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={index} className="bg-neutral rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-navy">{module.title}</h3>
                  <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                    {module.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="flex items-center text-gray-700">
                      <PlayCircle size={16} className="mr-3 text-navy flex-shrink-0" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="font-semibold text-navy">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-navy to-navy-light text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Feel Confident About Your C-Section?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join 2,500+ mothers who have transformed their cesarean experience with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Enroll Now - £49
            </button>
            <Link
              href="/courses/c-section-course-bundle"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-navy transition-colors inline-flex items-center justify-center"
            >
              Upgrade to Bundle - Save £31
            </Link>
          </div>
          <p className="text-sm text-gray-300 mt-4">30-day money-back guarantee</p>
        </div>
      </div>
    </div>
  )
}