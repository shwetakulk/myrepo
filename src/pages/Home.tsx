import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Users, Clock, Award, Play, Star, CheckCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Home: React.FC = () => {
  const { language, t } = useLanguage()

  const features = [
    {
      icon: Users,
      title: t('expertTutors'),
      description: t('expertTutorsDesc')
    },
    {
      icon: Award,
      title: t('personalizedLearning'),
      description: t('personalizedLearningDesc')
    },
    {
      icon: Clock,
      title: t('flexibleSchedule'),
      description: t('flexibleScheduleDesc')
    }
  ]

  const subjects = [
    { name: t('mathematics'), icon: '📊', color: 'bg-blue-100 text-blue-600' },
    { name: t('science'), icon: '🔬', color: 'bg-green-100 text-green-600' },
    { name: t('socialScience'), icon: '🌍', color: 'bg-purple-100 text-purple-600' },
    { name: t('english'), icon: '📚', color: 'bg-red-100 text-red-600' },
    { name: t('kannada'), icon: '🎭', color: 'bg-orange-100 text-orange-600' },
    { name: t('hindi'), icon: '📖', color: 'bg-pink-100 text-pink-600' }
  ]

  const achievements = [
    { number: '500+', label: language === 'kn' ? 'ವಿದ್ಯಾರ್ಥಿಗಳು' : 'Students Taught' },
    { number: '95%', label: language === 'kn' ? 'ಯಶಸ್ಸಿನ ದರ' : 'Success Rate' },
    { number: '10+', label: language === 'kn' ? 'ವರ್ಷಗಳ ಅನುಭವ' : 'Years Experience' },
    { number: '100%', label: language === 'kn' ? 'KSEEB ಪಠ್ಯಕ್ರಮ' : 'KSEEB Syllabus' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-4xl md:text-6xl font-bold mb-6 ${language === 'kn' ? 'font-kannada' : ''}`}
            >
              {t('heroTitle')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto ${language === 'kn' ? 'font-kannada' : ''}`}
            >
              {t('heroSubtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/courses"
                className={`bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors ${language === 'kn' ? 'font-kannada' : ''}`}
              >
                {t('getStarted')}
              </Link>
              <Link
                to="/pricing"
                className={`border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors ${language === 'kn' ? 'font-kannada' : ''}`}
              >
                {t('learnMore')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {achievement.number}
                </div>
                <div className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ನಮ್ಮ ವಿಶೇಷತೆಗಳು' : 'Why Choose Our Tuition'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KSEEB Syllabus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'KSEEB ಅಧಿಕೃತ ಪಠ್ಯಕ್ರಮ' : 'KSEEB Official Syllabus'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' 
                ? 'ಕರ್ನಾಟಕ ಮಾಧ್ಯಮಿಕ ಶಿಕ್ಷಣ ಪರೀಕ್ಷಾ ಮಂಡಳಿಯ ಅಧಿಕೃತ ಪಠ್ಯಕ್ರಮವನ್ನು ಅನುಸರಿಸಿ ಸಂಪೂರ್ಣ ಕವರೇಜ್'
                : 'Complete coverage following Karnataka Secondary Education Examination Board official curriculum'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  language === 'kn' ? 'ಅಧ್ಯಾಯ-ವಾರು ವಿಸ್ತೃತ ವಿವರಣೆ' : 'Chapter-wise detailed explanation',
                  language === 'kn' ? 'ಪರೀಕ್ಷಾ ಮಾದರಿ ಪ್ರಶ್ನೆಗಳು' : 'Exam pattern questions',
                  language === 'kn' ? 'ಪ್ರಾಯೋಗಿಕ ಅಭ್ಯಾಸ ಸೆಷನ್‌ಗಳು' : 'Practical practice sessions',
                  language === 'kn' ? 'ನಿಯಮಿತ ಮೌಲ್ಯಮಾಪನ ಪರೀಕ್ಷೆಗಳು' : 'Regular assessment tests'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className={`text-lg ${language === 'kn' ? 'font-kannada' : ''}`}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="KSEEB Syllabus"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ವಿಷಯಗಳು' : 'Subjects We Cover'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${subject.color} p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer`}
              >
                <div className="text-3xl mb-3">{subject.icon}</div>
                <h3 className={`font-semibold ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {subject.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ತರಗತಿಗಳು' : 'Standards We Teach'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[8, 9, 10].map((std, index) => (
              <motion.div
                key={std}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{std}</span>
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {language === 'kn' ? `${std}ನೇ ತರಗತಿ` : `${std}th Standard`}
                </h3>
                <p className={`text-gray-600 mb-6 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {language === 'kn' 
                    ? 'ಸಂಪೂರ್ಣ KSEEB ಪಠ್ಯಕ್ರಮ ಮತ್ತು ಪರೀಕ್ಷಾ ತಯಾರಿ'
                    : 'Complete KSEEB curriculum coverage and exam preparation'
                  }
                </p>
                <Link
                  to="/courses"
                  className={`btn-primary ${language === 'kn' ? 'font-kannada' : ''}`}
                >
                  {t('viewCourse')}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ಇಂದೇ ನಮ್ಮ ಟ್ಯೂಷನ್‌ಗೆ ಸೇರಿ' : 'Join Our Tuition Classes Today'}
            </h2>
            <p className={`text-xl mb-8 text-primary-100 max-w-2xl mx-auto ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' 
                ? 'ವೈಯಕ್ತಿಕ ಗಮನ ಮತ್ತು KSEEB ಪಠ್ಯಕ್ರಮದ ಪರಿಣತ ಬೋಧನೆಯೊಂದಿಗೆ ಯಶಸ್ಸು ಸಾಧಿಸಿ'
                : 'Achieve success with personalized attention and expert teaching of KSEEB curriculum'
              }
            </p>
            <Link
              to="/register"
              className={`bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors ${language === 'kn' ? 'font-kannada' : ''}`}
            >
              {t('getStarted')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home