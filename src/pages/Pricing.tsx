import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Crown, Zap } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly')
  const { language, t } = useLanguage()
  const { user } = useAuth()

  const plans = [
    {
      name: t('basicPlan'),
      icon: Star,
      monthlyPrice: 999,
      yearlyPrice: 9999,
      description: language === 'kn' ? 'ಮೂಲಭೂತ ಕೋರ್ಸ್‌ಗಳಿಗೆ ಪ್ರವೇಶ' : 'Access to basic courses',
      features: [
        language === 'kn' ? '೧ ವಿಷಯಕ್ಕೆ ಪ್ರವೇಶ' : 'Access to 1 subject',
        language === 'kn' ? 'ವೀಡಿಯೊ ಪಾಠಗಳು' : 'Video lessons',
        language === 'kn' ? 'ಮೂಲಭೂತ ಪ್ರಶ್ನೋತ್ತರ' : 'Basic quizzes',
        language === 'kn' ? 'ಇಮೇಲ್ ಬೆಂಬಲ' : 'Email support'
      ],
      color: 'border-gray-200',
      buttonColor: 'btn-secondary',
      popular: false
    },
    {
      name: t('premiumPlan'),
      icon: Crown,
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      description: language === 'kn' ? 'ಎಲ್ಲಾ ಕೋರ್ಸ್‌ಗಳಿಗೆ ಪ್ರವೇಶ' : 'Access to all courses',
      features: [
        language === 'kn' ? 'ಎಲ್ಲಾ ವಿಷಯಗಳಿಗೆ ಪ್ರವೇಶ' : 'Access to all subjects',
        language === 'kn' ? 'ಸಂವಾದಾತ್ಮಕ ಪಾಠಗಳು' : 'Interactive lessons',
        language === 'kn' ? 'ಮಾಸಿಕ ಮಾಕ್ ಟೆಸ್ಟ್‌ಗಳು' : 'Monthly mock tests',
        language === 'kn' ? '೨೪/೭ ಚಾಟ್ ಬೆಂಬಲ' : '24/7 chat support',
        language === 'kn' ? 'ಪ್ರಗತಿ ಟ್ರ್ಯಾಕಿಂಗ್' : 'Progress tracking',
        language === 'kn' ? 'ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದಾದ ವಸ್ತುಗಳು' : 'Downloadable materials'
      ],
      color: 'border-primary-500 ring-2 ring-primary-500',
      buttonColor: 'btn-primary',
      popular: true
    },
    {
      name: t('proPlan'),
      icon: Zap,
      monthlyPrice: 2999,
      yearlyPrice: 29999,
      description: language === 'kn' ? 'ವೈಯಕ್ತಿಕ ಬೋಧನೆಯೊಂದಿಗೆ' : 'With personal tutoring',
      features: [
        language === 'kn' ? 'ಪ್ರೀಮಿಯಂನ ಎಲ್ಲಾ ವೈಶಿಷ್ಟ್ಯಗಳು' : 'All Premium features',
        language === 'kn' ? '೧-ಆನ್-೧ ಟ್ಯೂಟರಿಂಗ್ ಸೆಷನ್‌ಗಳು' : '1-on-1 tutoring sessions',
        language === 'kn' ? 'ವೈಯಕ್ತಿಕ ಅಧ್ಯಯನ ಯೋಜನೆ' : 'Personalized study plan',
        language === 'kn' ? 'ಆದ್ಯತೆಯ ಬೆಂಬಲ' : 'Priority support',
        language === 'kn' ? 'ಪರೀಕ್ಷಾ ತಯಾರಿ ಸಲಹೆ' : 'Exam preparation guidance',
        language === 'kn' ? 'ಪೋಷಕರ ಪ್ರಗತಿ ವರದಿಗಳು' : 'Parent progress reports'
      ],
      color: 'border-purple-500',
      buttonColor: 'bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200',
      popular: false
    }
  ]

  const handlePayment = (planName: string, price: number) => {
    // This would integrate with Stripe or other payment processor
    alert(`Payment integration would be implemented here for ${planName} - ₹${price.toLocaleString()}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl font-bold text-gray-900 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}
          >
            {language === 'kn' ? 'ನಿಮಗೆ ಸೂಕ್ತವಾದ ಯೋಜನೆ ಆಯ್ಕೆಮಾಡಿ' : 'Choose the Perfect Plan for You'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-xl text-gray-600 max-w-2xl mx-auto ${language === 'kn' ? 'font-kannada' : ''}`}
          >
            {language === 'kn' 
              ? 'ಎಲ್ಲಾ ಯೋಜನೆಗಳು ೩೦ ದಿನಗಳ ಹಣ ವಾಪಸಿ ಗ್ಯಾರಂಟಿಯೊಂದಿಗೆ ಬರುತ್ತವೆ'
              : 'All plans come with a 30-day money-back guarantee'
            }
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              } ${language === 'kn' ? 'font-kannada' : ''}`}
            >
              {t('monthlyBilling')}
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-colors relative ${
                billingCycle === 'yearly'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              } ${language === 'kn' ? 'font-kannada' : ''}`}
            >
              {t('yearlyBilling')}
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {language === 'kn' ? '೨೦% ಉಳಿತಾಯ' : '20% OFF'}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.color} ${
                plan.popular ? 'transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಅತ್ಯಂತ ಜನಪ್ರಿಯ' : 'Most Popular'}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <plan.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {plan.name}
                </h3>
                <p className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {plan.description}
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    ₹{(billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice).toLocaleString()}
                  </span>
                  <span className={`text-gray-600 ml-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    /{billingCycle === 'monthly' ? t('month') : t('year')}
                  </span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className={`text-sm text-green-600 mt-1 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' 
                      ? `ಮಾಸಿಕ ₹${Math.round(plan.yearlyPrice / 12).toLocaleString()}`
                      : `₹${Math.round(plan.yearlyPrice / 12).toLocaleString()} per month`
                    }
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className={`text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePayment(
                  plan.name, 
                  billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
                )}
                className={`w-full ${plan.buttonColor} ${language === 'kn' ? 'font-kannada' : ''}`}
              >
                {user ? (
                  language === 'kn' ? 'ಈಗಲೇ ಆಯ್ಕೆಮಾಡಿ' : 'Choose Plan'
                ) : (
                  language === 'kn' ? 'ಪ್ರಾರಂಭಿಸಿ' : 'Get Started'
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className={`text-2xl font-bold text-gray-900 mb-8 text-center ${language === 'kn' ? 'font-kannada' : ''}`}>
            {language === 'kn' ? 'ಆಗಾಗ್ಗೆ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು' : 'Frequently Asked Questions'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className={`font-semibold text-gray-900 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' ? 'ನಾನು ಯಾವಾಗ ವೇಳೆ ರದ್ದುಗೊಳಿಸಬಹುದು?' : 'Can I cancel anytime?'}
              </h3>
              <p className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' 
                  ? 'ಹೌದು, ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಚಂದಾದಾರಿಕೆಯನ್ನು ರದ್ದುಗೊಳಿಸಬಹುದು.'
                  : 'Yes, you can cancel your subscription at any time with no questions asked.'
                }
              </p>
            </div>
            <div>
              <h3 className={`font-semibold text-gray-900 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' ? 'ಹಣ ವಾಪಸಿ ನೀತಿ ಏನು?' : 'What is the refund policy?'}
              </h3>
              <p className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' 
                  ? 'ನಾವು ೩೦ ದಿನಗಳ ಹಣ ವಾಪಸಿ ಗ್ಯಾರಂಟಿ ನೀಡುತ್ತೇವೆ.'
                  : 'We offer a 30-day money-back guarantee on all plans.'
                }
              </p>
            </div>
            <div>
              <h3 className={`font-semibold text-gray-900 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' ? 'ಯಾವ ಪಾವತಿ ವಿಧಾನಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತೀರಿ?' : 'What payment methods do you accept?'}
              </h3>
              <p className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' 
                  ? 'ನಾವು ಎಲ್ಲಾ ಪ್ರಮುಖ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್‌ಗಳು, ಡೆಬಿಟ್ ಕಾರ್ಡ್‌ಗಳು ಮತ್ತು UPI ಅನ್ನು ಸ್ವೀಕರಿಸುತ್ತೇವೆ.'
                  : 'We accept all major credit cards, debit cards, and UPI payments.'
                }
              </p>
            </div>
            <div>
              <h3 className={`font-semibold text-gray-900 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' ? 'ನಾನು ಯೋಜನೆಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದೇ?' : 'Can I change plans?'}
              </h3>
              <p className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' 
                  ? 'ಹೌದು, ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಯೋಜನೆಯನ್ನು ಅಪ್‌ಗ್ರೇಡ್ ಅಥವಾ ಡೌನ್‌ಗ್ರೇಡ್ ಮಾಡಬಹುದು.'
                  : 'Yes, you can upgrade or downgrade your plan at any time.'
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing