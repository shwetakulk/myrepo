import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Clock, Users, Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Courses: React.FC = () => {
  const { language, t } = useLanguage()
  const [selectedStandard, setSelectedStandard] = useState('all')
  const [selectedMedium, setSelectedMedium] = useState('all')

  const courses = [
    {
      id: '1',
      title: language === 'kn' ? '೮ನೇ ತರಗತಿ ಗಣಿತ' : '8th Standard Mathematics',
      standard: '8',
      subject: 'mathematics',
      medium: 'en',
      instructor: 'Dr. Rajesh Kumar',
      duration: '6 months',
      lessons: 45,
      students: 1250,
      rating: 4.8,
      price: 2999,
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: language === 'kn' ? '೯ನೇ ತರಗತಿ ವಿಜ್ಞಾನ' : '9th Standard Science',
      standard: '9',
      subject: 'science',
      medium: 'kn',
      instructor: 'Prof. Sunitha Rao',
      duration: '8 months',
      lessons: 60,
      students: 980,
      rating: 4.9,
      price: 3499,
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      title: language === 'kn' ? '೧೦ನೇ ತರಗತಿ ಸಮಾಜ ವಿಜ್ಞಾನ' : '10th Standard Social Science',
      standard: '10',
      subject: 'socialScience',
      medium: 'en',
      instructor: 'Mr. Prakash Sharma',
      duration: '10 months',
      lessons: 75,
      students: 1500,
      rating: 4.7,
      price: 3999,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      title: language === 'kn' ? '೮ನೇ ತರಗತಿ ಕನ್ನಡ' : '8th Standard Kannada',
      standard: '8',
      subject: 'kannada',
      medium: 'kn',
      instructor: 'Smt. Lakshmi Devi',
      duration: '6 months',
      lessons: 40,
      students: 800,
      rating: 4.6,
      price: 2499,
      image: 'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '5',
      title: language === 'kn' ? '೯ನೇ ತರಗತಿ ಇಂಗ್ಲಿಷ್' : '9th Standard English',
      standard: '9',
      subject: 'english',
      medium: 'en',
      instructor: 'Ms. Priya Nair',
      duration: '8 months',
      lessons: 50,
      students: 1100,
      rating: 4.8,
      price: 2999,
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '6',
      title: language === 'kn' ? '೧೦ನೇ ತರಗತಿ ಗಣಿತ' : '10th Standard Mathematics',
      standard: '10',
      subject: 'mathematics',
      medium: 'kn',
      instructor: 'Dr. Manjunath Gowda',
      duration: '10 months',
      lessons: 80,
      students: 1800,
      rating: 4.9,
      price: 4499,
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  const filteredCourses = courses.filter(course => {
    const standardMatch = selectedStandard === 'all' || course.standard === selectedStandard
    const mediumMatch = selectedMedium === 'all' || course.medium === selectedMedium
    return standardMatch && mediumMatch
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold text-gray-900 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
            {t('courses')}
          </h1>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${language === 'kn' ? 'font-kannada' : ''}`}>
            {language === 'kn' 
              ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮಕ್ಕೆ ವಿಶೇಷವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಕೋರ್ಸ್‌ಗಳು'
              : 'Courses specially designed for Karnataka State Board curriculum'
            }
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {t('selectStandard')}
              </label>
              <select
                value={selectedStandard}
                onChange={(e) => setSelectedStandard(e.target.value)}
                className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${language === 'kn' ? 'font-kannada' : ''}`}
              >
                <option value="all">{language === 'kn' ? 'ಎಲ್ಲಾ ತರಗತಿಗಳು' : 'All Standards'}</option>
                <option value="8">{t('standard8')}</option>
                <option value="9">{t('standard9')}</option>
                <option value="10">{t('standard10')}</option>
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {t('medium')}
              </label>
              <select
                value={selectedMedium}
                onChange={(e) => setSelectedMedium(e.target.value)}
                className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${language === 'kn' ? 'font-kannada' : ''}`}
              >
                <option value="all">{language === 'kn' ? 'ಎಲ್ಲಾ ಮಾಧ್ಯಮಗಳು' : 'All Mediums'}</option>
                <option value="en">{t('englishMedium')}</option>
                <option value="kn">{t('kannadaMedium')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                  {course.medium === 'en' ? 'EN' : 'ಕನ್ನಡ'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {course.title}
                </h3>
                
                <p className={`text-gray-600 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {language === 'kn' ? 'ಬೋಧಕ:' : 'Instructor:'} {course.instructor}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span className={language === 'kn' ? 'font-kannada' : ''}>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} {language === 'kn' ? 'ಪಾಠಗಳು' : 'lessons'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">
                    ₹{course.price.toLocaleString()}
                    <span className={`text-sm text-gray-500 font-normal ${language === 'kn' ? 'font-kannada' : ''}`}>
                      /{t('year')}
                    </span>
                  </div>
                  <Link
                    to={`/course/${course.id}`}
                    className={`btn-primary ${language === 'kn' ? 'font-kannada' : ''}`}
                  >
                    {t('viewCourse')}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold text-gray-600 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ಯಾವುದೇ ಕೋರ್ಸ್‌ಗಳು ಕಂಡುಬಂದಿಲ್ಲ' : 'No courses found'}
            </h3>
            <p className={`text-gray-500 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ದಯವಿಟ್ಟು ವಿಭಿನ್ನ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ' : 'Please try different filters'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses