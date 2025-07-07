import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Phone, GraduationCap, Globe, Edit, Save, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'

const Profile: React.FC = () => {
  const { language, t } = useLanguage()
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    standard: user?.standard || '',
    medium: user?.medium || 'en'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    // In a real app, this would update the user profile via API
    console.log('Saving profile:', formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({
      fullName: user?.fullName || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      standard: user?.standard || '',
      medium: user?.medium || 'en'
    })
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-primary-100 p-4 rounded-full">
                <User className="h-12 w-12 text-primary-600" />
              </div>
              <div>
                <h1 className={`text-2xl font-bold text-gray-900 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {user?.fullName}
                </h1>
                <p className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {language === 'kn' ? `${user?.standard}ನೇ ತರಗತಿ ವಿದ್ಯಾರ್ಥಿ` : `${user?.standard}th Standard Student`}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isEditing 
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              } ${language === 'kn' ? 'font-kannada' : ''}`}
            >
              {isEditing ? (
                <>
                  <X className="h-4 w-4" />
                  <span>{language === 'kn' ? 'ರದ್ದುಮಾಡಿ' : 'Cancel'}</span>
                </>
              ) : (
                <>
                  <Edit className="h-4 w-4" />
                  <span>{language === 'kn' ? 'ಸಂಪಾದಿಸಿ' : 'Edit Profile'}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className={`text-xl font-bold text-gray-900 mb-6 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' ? 'ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ' : 'Personal Information'}
              </h2>

              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {t('fullName')}
                  </label>
                  {isEditing ? (
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <User className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <User className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{user?.fullName}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {t('email')}
                  </label>
                  {isEditing ? (
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{user?.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {t('phoneNumber')}
                  </label>
                  {isEditing ? (
                    <div className="relative">
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <Phone className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{user?.phoneNumber}</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                      {t('standard')}
                    </label>
                    {isEditing ? (
                      <div className="relative">
                        <select
                          name="standard"
                          value={formData.standard}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${language === 'kn' ? 'font-kannada' : ''}`}
                        >
                          <option value="8">{t('standard8')}</option>
                          <option value="9">{t('standard9')}</option>
                          <option value="10">{t('standard10')}</option>
                        </select>
                        <GraduationCap className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-gray-400" />
                        <span className={`text-gray-900 ${language === 'kn' ? 'font-kannada' : ''}`}>
                          {language === 'kn' ? `${user?.standard}ನೇ ತರಗತಿ` : `${user?.standard}th Standard`}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                      {t('medium')}
                    </label>
                    {isEditing ? (
                      <div className="relative">
                        <select
                          name="medium"
                          value={formData.medium}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${language === 'kn' ? 'font-kannada' : ''}`}
                        >
                          <option value="en">{t('englishMedium')}</option>
                          <option value="kn">{t('kannadaMedium')}</option>
                        </select>
                        <Globe className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Globe className="h-5 w-5 text-gray-400" />
                        <span className={`text-gray-900 ${language === 'kn' ? 'font-kannada' : ''}`}>
                          {user?.medium === 'en' ? t('englishMedium') : t('kannadaMedium')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex space-x-4 pt-4">
                    <button
                      onClick={handleSave}
                      className={`flex items-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors ${language === 'kn' ? 'font-kannada' : ''}`}
                    >
                      <Save className="h-4 w-4" />
                      <span>{language === 'kn' ? 'ಉಳಿಸಿ' : 'Save Changes'}</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className={`px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors ${language === 'kn' ? 'font-kannada' : ''}`}
                    >
                      {language === 'kn' ? 'ರದ್ದುಮಾಡಿ' : 'Cancel'}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Subscription Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 mb-6"
            >
              <h2 className={`text-xl font-bold text-gray-900 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' ? 'ಚಂದಾದಾರಿಕೆ' : 'Subscription'}
              </h2>
              {user?.subscription ? (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                      {language === 'kn' ? 'ಯೋಜನೆ:' : 'Plan:'}
                    </span>
                    <span className="font-semibold text-primary-600 capitalize">
                      {user.subscription.plan}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                      {language === 'kn' ? 'ಮುಕ್ತಾಯ:' : 'Expires:'}
                    </span>
                    <span className="font-semibold">
                      {new Date(user.subscription.expiresAt).toLocaleDateString()}
                    </span>
                  </div>
                  <button className={`w-full mt-4 px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಯೋಜನೆ ಬದಲಾಯಿಸಿ' : 'Change Plan'}
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <p className={`text-gray-600 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಯಾವುದೇ ಸಕ್ರಿಯ ಚಂದಾದಾರಿಕೆ ಇಲ್ಲ' : 'No active subscription'}
                  </p>
                  <button className={`w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಯೋಜನೆ ಆಯ್ಕೆಮಾಡಿ' : 'Choose a Plan'}
                  </button>
                </div>
              )}
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className={`text-xl font-bold text-gray-900 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' ? 'ಕಲಿಕೆಯ ಅಂಕಿಅಂಶಗಳು' : 'Learning Stats'}
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಒಟ್ಟು ಕೋರ್ಸ್‌ಗಳು:' : 'Total Courses:'}
                  </span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಪೂರ್ಣಗೊಳಿಸಿದ ಪಾಠಗಳು:' : 'Completed Lessons:'}
                  </span>
                  <span className="font-semibold">49</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಅಧ್ಯಯನ ಸಮಯ:' : 'Study Time:'}
                  </span>
                  <span className="font-semibold">45h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಸರಾಸರಿ ಸ್ಕೋರ್:' : 'Average Score:'}
                  </span>
                  <span className="font-semibold text-green-600">85%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile