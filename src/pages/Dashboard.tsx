import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Clock, Award, TrendingUp, Play, Calendar } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'

const Dashboard: React.FC = () => {
  const { language, t } = useLanguage()
  const { user } = useAuth()

  const enrolledCourses = [
    {
      id: '1',
      title: language === 'kn' ? '೮ನೇ ತರಗತಿ ಗಣಿತ' : '8th Standard Mathematics',
      progress: 65,
      nextLesson: language === 'kn' ? 'ಅಧ್ಯಾಯ ೩: ಜ್ಯಾಮಿತಿ' : 'Chapter 3: Geometry',
      totalLessons: 45,
      completedLessons: 29,
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      title: language === 'kn' ? '೮ನೇ ತರಗತಿ ವಿಜ್ಞಾನ' : '8th Standard Science',
      progress: 40,
      nextLesson: language === 'kn' ? 'ಅಧ್ಯಾಯ ೨: ಬೆಳಕು' : 'Chapter 2: Light',
      totalLessons: 50,
      completedLessons: 20,
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ]

  const upcomingClasses = [
    {
      subject: language === 'kn' ? 'ಗಣಿತ' : 'Mathematics',
      time: '10:00 AM',
      date: language === 'kn' ? 'ಇಂದು' : 'Today',
      teacher: 'Dr. Rajesh Kumar'
    },
    {
      subject: language === 'kn' ? 'ವಿಜ್ಞಾನ' : 'Science',
      time: '2:00 PM',
      date: language === 'kn' ? 'ನಾಳೆ' : 'Tomorrow',
      teacher: 'Prof. Sunitha Rao'
    }
  ]

  const stats = [
    {
      title: language === 'kn' ? 'ಒಟ್ಟು ಕೋರ್ಸ್‌ಗಳು' : 'Total Courses',
      value: '2',
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: language === 'kn' ? 'ಅಧ್ಯಯನ ಸಮಯ' : 'Study Hours',
      value: '45h',
      icon: Clock,
      color: 'bg-green-500'
    },
    {
      title: language === 'kn' ? 'ಪೂರ್ಣಗೊಳಿಸಿದ ಪಾಠಗಳು' : 'Completed Lessons',
      value: '49',
      icon: Award,
      color: 'bg-purple-500'
    },
    {
      title: language === 'kn' ? 'ಸರಾಸರಿ ಸ್ಕೋರ್' : 'Average Score',
      value: '85%',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className={`text-3xl font-bold text-gray-900 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
            {language === 'kn' ? `ನಮಸ್ಕಾರ, ${user?.fullName}!` : `Welcome back, ${user?.fullName}!`}
          </h1>
          <p className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
            {language === 'kn' ? 'ನಿಮ್ಮ ಕಲಿಕೆಯ ಪ್ರಯಾಣವನ್ನು ಮುಂದುವರಿಸಿ' : 'Continue your learning journey'}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className={`text-sm font-medium text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className={`text-xl font-bold text-gray-900 mb-6 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' ? 'ನಿಮ್ಮ ಕೋರ್ಸ್‌ಗಳು' : 'Your Courses'}
              </h2>
              <div className="space-y-6">
                {enrolledCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className={`font-semibold text-gray-900 mb-1 ${language === 'kn' ? 'font-kannada' : ''}`}>
                        {course.title}
                      </h3>
                      <p className={`text-sm text-gray-600 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                        {language === 'kn' ? 'ಮುಂದಿನ ಪಾಠ:' : 'Next lesson:'} {course.nextLesson}
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          {course.progress}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {course.completedLessons}/{course.totalLessons} {language === 'kn' ? 'ಪಾಠಗಳು ಪೂರ್ಣಗೊಂಡಿವೆ' : 'lessons completed'}
                      </p>
                    </div>
                    <button className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors">
                      <Play className="h-5 w-5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Upcoming Classes */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg shadow-md p-6 mb-6"
            >
              <h2 className={`text-xl font-bold text-gray-900 mb-6 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' ? 'ಮುಂಬರುವ ತರಗತಿಗಳು' : 'Upcoming Classes'}
              </h2>
              <div className="space-y-4">
                {upcomingClasses.map((class_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg"
                  >
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium text-gray-900 ${language === 'kn' ? 'font-kannada' : ''}`}>
                        {class_.subject}
                      </h3>
                      <p className="text-sm text-gray-600">{class_.teacher}</p>
                      <p className="text-xs text-gray-500">
                        {class_.date} at {class_.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className={`text-xl font-bold text-gray-900 mb-6 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'kn' ? 'ತ್ವರಿತ ಕ್ರಿಯೆಗಳು' : 'Quick Actions'}
              </h2>
              <div className="space-y-3">
                <button className={`w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {language === 'kn' ? 'ಹೊಸ ಕೋರ್ಸ್ ಬ್ರೌಸ್ ಮಾಡಿ' : 'Browse New Courses'}
                </button>
                <button className={`w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {language === 'kn' ? 'ಪ್ರಾಕ್ಟಿಸ್ ಟೆಸ್ಟ್ ತೆಗೆದುಕೊಳ್ಳಿ' : 'Take Practice Test'}
                </button>
                <button className={`w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {language === 'kn' ? 'ಸಂದೇಹ ಕೇಳಿ' : 'Ask a Question'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard