import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Mail, Lock, User, Phone, GraduationCap, Globe, MapPin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    parentPhone: '',
    address: '',
    standard: '',
    medium: 'en' as 'en' | 'kn'
  })
  const [error, setError] = useState('')
  const { language, t } = useLanguage()
  const { register, isLoading } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError(language === 'kn' ? 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ' : 'Passwords do not match')
      return
    }

    try {
      await register(formData)
      navigate('/dashboard')
    } catch (err) {
      setError(language === 'kn' ? 'ನೋಂದಣಿ ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.' : 'Registration failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <BookOpen className="h-12 w-12 text-primary-600" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`mt-6 text-center text-3xl font-extrabold text-gray-900 ${language === 'kn' ? 'font-kannada' : ''}`}
        >
          {language === 'kn' ? 'ಟ್ಯೂಷನ್ ತರಗತಿಗಳಿಗೆ ನೋಂದಣಿ' : 'Register for Tuition Classes'}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`mt-2 text-center text-sm text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}
        >
          {language === 'kn' ? 'ಅಥವಾ' : 'Or'}{' '}
          <Link
            to="/login"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            {language === 'kn' ? 'ನಿಮ್ಮ ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ' : 'sign in to your account'}
          </Link>
        </motion.p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className={`bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md ${language === 'kn' ? 'font-kannada' : ''}`}>
                {error}
              </div>
            )}

            <div>
              <label htmlFor="fullName" className={`block text-sm font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {t('fullName')}
              </label>
              <div className="mt-1 relative">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder={language === 'kn' ? 'ವಿದ್ಯಾರ್ಥಿಯ ಪೂರ್ಣ ಹೆಸರು' : 'Student full name'}
                />
                <User className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {t('email')}
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder={language === 'kn' ? 'ಇಮೇಲ್ ವಿಳಾಸ' : 'Email address'}
                />
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="phoneNumber" className={`block text-sm font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {t('phoneNumber')}
                </label>
                <div className="mt-1 relative">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder={language === 'kn' ? 'ವಿದ್ಯಾರ್ಥಿ ಫೋನ್' : 'Student phone'}
                  />
                  <Phone className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
              </div>

              <div>
                <label htmlFor="parentPhone" className={`block text-sm font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {t('parentPhone')}
                </label>
                <div className="mt-1 relative">
                  <input
                    id="parentPhone"
                    name="parentPhone"
                    type="tel"
                    required
                    value={formData.parentPhone}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder={language === 'kn' ? 'ಪೋಷಕರ ಫೋನ್' : 'Parent phone'}
                  />
                  <Phone className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="address" className={`block text-sm font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {t('address')}
              </label>
              <div className="mt-1 relative">
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder={language === 'kn' ? 'ಪೂರ್ಣ ವಿಳಾಸ' : 'Complete address'}
                />
                <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="standard" className={`block text-sm font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {t('standard')}
                </label>
                <div className="mt-1 relative">
                  <select
                    id="standard"
                    name="standard"
                    required
                    value={formData.standard}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${language === 'kn' ? 'font-kannada' : ''}`}
                  >
                    <option value="">{language === 'kn' ? 'ಆಯ್ಕೆಮಾಡಿ' : 'Select'}</option>
                    <option value="8">{t('standard8')}</option>
                    <option value="9">{t('standard9')}</option>
                    <option value="10">{t('standard10')}</option>
                  </select>
                  <GraduationCap className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
              </div>

              <div>
                <label htmlFor="medium" className={`block text-sm font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {t('medium')}
                </label>
                <div className="mt-1 relative">
                  <select
                    id="medium"
                    name="medium"
                    required
                    value={formData.medium}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${language === 'kn' ? 'font-kannada' : ''}`}
                  >
                    <option value="en">{t('englishMedium')}</option>
                    <option value="kn">{t('kannadaMedium')}</option>
                  </select>
                  <Globe className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password" className={`block text-sm font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {t('password')}
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder={language === 'kn' ? 'ಪಾಸ್‌ವರ್ಡ್ ರಚಿಸಿ' : 'Create a password'}
                />
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className={`block text-sm font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {t('confirmPassword')}
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder={language === 'kn' ? 'ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ' : 'Confirm your password'}
                />
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed ${language === 'kn' ? 'font-kannada' : ''}`}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>{language === 'kn' ? 'ನೋಂದಣಿ ಆಗುತ್ತಿದೆ...' : 'Registering...'}</span>
                  </div>
                ) : (
                  language === 'kn' ? 'ಟ್ಯೂಷನ್‌ಗೆ ನೋಂದಣಿ' : 'Register for Tuition'
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 bg-white text-gray-500 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {language === 'kn' ? 'ಅಥವಾ' : 'Or'}
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className={`text-sm text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' 
                  ? 'ಶಿಕ್ಷಕರಾಗಿದ್ದರೆ? teacher@tuition.com ಬಳಸಿ ಲಾಗಿನ್ ಮಾಡಿ'
                  : 'Are you a teacher? Use teacher@tuition.com to login'
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Register