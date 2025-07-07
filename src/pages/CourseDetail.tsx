import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Users, Star, BookOpen, Play, CheckCircle, Award } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'

const CourseDetail: React.FC = () => {
  const { id } = useParams()
  const { language, t } = useLanguage()
  const { user } = useAuth()

  // Mock course data - in real app, fetch based on id
  const course = {
    id: '1',
    title: language === 'kn' ? '೮ನೇ ತರಗತಿ ಗಣಿತ - ಸಂಪೂರ್ಣ ಕೋರ್ಸ್' : '8th Standard Mathematics - Complete Course',
    description: language === 'kn' 
      ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮದ ಪ್ರಕಾರ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಂಪೂರ್ಣ ಗಣಿತ ಕೋರ್ಸ್. ಮೂಲಭೂತ ಪರಿಕಲ್ಪನೆಗಳಿಂದ ಪ್ರಾರಂಭಿಸಿ ಸುಧಾರಿತ ಸಮಸ್ಯೆ ಪರಿಹಾರದವರೆಗೆ ಎಲ್ಲವನ್ನೂ ಒಳಗೊಂಡಿದೆ.'
      : 'Complete mathematics course designed according to Karnataka State Board curriculum. Covers everything from basic concepts to advanced problem solving.',
    instructor: 'Dr. Rajesh Kumar',
    instructorBio: language === 'kn' 
      ? '೧೫ ವರ್ಷಗಳ ಅನುಭವ ಹೊಂದಿದ ಗಣಿತ ಪರಿಣತ. ಸಾವಿರಾರು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಯಶಸ್ವಿಯಾಗಿ ಬೋಧನೆ ನೀಡಿದ್ದಾರೆ.'
      : 'Mathematics expert with 15 years of experience. Has successfully taught thousands of students.',
    duration: '6 months',
    lessons: 45,
    students: 1250,
    rating: 4.8,
    price: 2999,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    curriculum: [
      {
        title: language === 'kn' ? 'ಅಧ್ಯಾಯ ೧: ಸಂಖ್ಯೆಗಳು' : 'Chapter 1: Numbers',
        lessons: 8,
        duration: '2 weeks'
      },
      {
        title: language === 'kn' ? 'ಅಧ್ಯಾಯ ೨: ಬೀಜಗಣಿತ' : 'Chapter 2: Algebra',
        lessons: 10,
        duration: '3 weeks'
      },
      {
        title: language === 'kn' ? 'ಅಧ್ಯಾಯ ೩: ಜ್ಯಾಮಿತಿ' : 'Chapter 3: Geometry',
        lessons: 12,
        duration: '3 weeks'
      },
      {
        title: language === 'kn' ? 'ಅಧ್ಯಾಯ ೪: ಮಾಪನ' : 'Chapter 4: Mensuration',
        lessons: 8,
        duration: '2 weeks'
      },
      {
        title: language === 'kn' ? 'ಅಧ್ಯಾಯ ೫: ಡೇಟಾ ನಿರ್ವಹಣೆ' : 'Chapter 5: Data Handling',
        lessons: 7,
        duration: '2 weeks'
      }
    ],
    features: [
      language === 'kn' ? 'ಸಂವಾದಾತ್ಮಕ ವೀಡಿಯೊ ಪಾಠಗಳು' : 'Interactive video lessons',
      language === 'kn' ? 'ಪ್ರಾಯೋಗಿಕ ಅಭ್ಯಾಸ ಸಮಸ್ಯೆಗಳು' : 'Practice problems with solutions',
      language === 'kn' ? 'ಮಾಸಿಕ ಮಾಕ್ ಟೆಸ್ಟ್‌ಗಳು' : 'Monthly mock tests',
      language === 'kn' ? '೨೪/೭ ಸಂದೇಹ ನಿವಾರಣೆ' : '24/7 doubt clearing',
      language === 'kn' ? 'ಪ್ರಗತಿ ಟ್ರ್ಯಾಕಿಂಗ್' : 'Progress tracking',
      language === 'kn' ? 'ಪೂರ್ಣಗೊಳಿಸುವಿಕೆಯ ಪ್ರಮಾಣಪತ್ರ' : 'Certificate of completion'
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}
              >
                {course.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-lg text-gray-600 mb-6 ${language === 'kn' ? 'font-kannada' : ''}`}
              >
                {course.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-6 mb-6"
              >
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-500">({course.students.toLocaleString()} {t('students')})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">{course.lessons} {t('lessons')}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-4 mb-8"
              >
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className={`font-semibold ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಬೋಧಕ:' : 'Instructor:'} {course.instructor}
                  </p>
                  <p className={`text-sm text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {course.instructorBio}
                  </p>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all">
                      <Play className="h-8 w-8 text-primary-600 ml-1" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-primary-600">₹{course.price.toLocaleString()}</span>
                      <span className="text-lg text-gray-500 line-through ml-2">₹{course.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      40% OFF
                    </div>
                  </div>
                  
                  {user ? (
                    <button className={`w-full btn-primary text-lg py-3 ${language === 'kn' ? 'font-kannada' : ''}`}>
                      {t('enrollNow')}
                    </button>
                  ) : (
                    <Link
                      to="/register"
                      className={`w-full btn-primary text-lg py-3 text-center block ${language === 'kn' ? 'font-kannada' : ''}`}
                    >
                      {t('enrollNow')}
                    </Link>
                  )}
                  
                  <p className={`text-center text-sm text-gray-500 mt-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? '೩೦ ದಿನಗಳ ಹಣ ವಾಪಸಿ ಗ್ಯಾರಂಟಿ' : '30-day money-back guarantee'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Features */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl font-bold text-gray-900 mb-8 ${language === 'kn' ? 'font-kannada' : ''}`}>
            {language === 'kn' ? 'ಈ ಕೋರ್ಸ್‌ನಲ್ಲಿ ನೀವು ಪಡೆಯುವುದು' : 'What you\'ll get in this course'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className={`${language === 'kn' ? 'font-kannada' : ''}`}>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl font-bold text-gray-900 mb-8 ${language === 'kn' ? 'font-kannada' : ''}`}>
            {t('curriculum')}
          </h2>
          <div className="space-y-4">
            {course.curriculum.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                      {chapter.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{chapter.lessons} {language === 'kn' ? 'ಪಾಠಗಳು' : 'lessons'}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span className={language === 'kn' ? 'font-kannada' : ''}>{chapter.duration}</span>
                      </span>
                    </div>
                  </div>
                  <Play className="h-6 w-6 text-primary-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail