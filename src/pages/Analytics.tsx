import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Users, BookOpen, TrendingUp, Download, Eye, Clock, Award } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'

const Analytics: React.FC = () => {
  const { language, t } = useLanguage()
  const { isTeacher } = useAuth()

  const stats = [
    {
      title: language === 'kn' ? 'ಒಟ್ಟು ವಿದ್ಯಾರ್ಥಿಗಳು' : 'Total Students',
      value: '124',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: language === 'kn' ? 'ಸಕ್ರಿಯ ಕೋರ್ಸ್‌ಗಳು' : 'Active Courses',
      value: '18',
      change: '+5%',
      icon: BookOpen,
      color: 'bg-green-500'
    },
    {
      title: language === 'kn' ? 'ಒಟ್ಟು ವಿಷಯ' : 'Total Content',
      value: '156',
      change: '+23%',
      icon: Eye,
      color: 'bg-purple-500'
    },
    {
      title: language === 'kn' ? 'ಸರಾಸರಿ ಪ್ರಗತಿ' : 'Avg Progress',
      value: '78%',
      change: '+8%',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ]

  const subjectPerformance = [
    { subject: 'Mathematics', students: 45, avgScore: 85, completion: 92 },
    { subject: 'Science', students: 38, avgScore: 78, completion: 88 },
    { subject: 'Social Science', students: 32, avgScore: 82, completion: 85 },
    { subject: 'English', students: 41, avgScore: 79, completion: 90 },
    { subject: 'Kannada', students: 35, avgScore: 88, completion: 94 },
    { subject: 'Hindi', students: 28, avgScore: 76, completion: 87 }
  ]

  const recentActivity = [
    {
      type: 'enrollment',
      student: 'Arjun Kumar',
      action: 'enrolled in Mathematics - 10th Standard',
      time: '2 hours ago'
    },
    {
      type: 'completion',
      student: 'Priya Sharma',
      action: 'completed Chapter 5 - Quadratic Equations',
      time: '4 hours ago'
    },
    {
      type: 'download',
      student: 'Rahul Reddy',
      action: 'downloaded notes for Linear Equations',
      time: '6 hours ago'
    },
    {
      type: 'quiz',
      student: 'Sneha Gowda',
      action: 'scored 95% in Science Quiz - Chapter 3',
      time: '8 hours ago'
    }
  ]

  const monthlyData = [
    { month: 'Jan', students: 98, revenue: 245000, content: 120 },
    { month: 'Feb', students: 105, revenue: 262500, content: 135 },
    { month: 'Mar', students: 112, revenue: 280000, content: 142 },
    { month: 'Apr', students: 118, revenue: 295000, content: 148 },
    { month: 'May', students: 124, revenue: 310000, content: 156 }
  ]

  if (!isTeacher) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">This page is only accessible to teachers.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className={`text-3xl font-bold text-gray-900 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
            {language === 'kn' ? 'ವಿಶ್ಲೇಷಣೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್' : 'Analytics Dashboard'}
          </h1>
          <p className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
            {language === 'kn' ? 'ನಿಮ್ಮ ಟ್ಯೂಷನ್ ತರಗತಿಗಳ ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಅಂಕಿಅಂಶಗಳು' : 'Performance insights and statistics for your tuition classes'}
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
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Subject Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className={`text-xl font-bold text-gray-900 mb-6 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ವಿಷಯ-ವಾರು ಕಾರ್ಯಕ್ಷಮತೆ' : 'Subject-wise Performance'}
            </h2>
            <div className="space-y-4">
              {subjectPerformance.map((subject, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-medium text-gray-900 ${language === 'kn' ? 'font-kannada' : ''}`}>
                      {t(subject.subject.toLowerCase().replace(' ', ''))}
                    </h3>
                    <span className="text-sm text-gray-600">{subject.students} {language === 'kn' ? 'ವಿದ್ಯಾರ್ಥಿಗಳು' : 'students'}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                        {language === 'kn' ? 'ಸರಾಸರಿ ಸ್ಕೋರ್:' : 'Avg Score:'}
                      </span>
                      <span className="font-medium ml-2">{subject.avgScore}%</span>
                    </div>
                    <div>
                      <span className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                        {language === 'kn' ? 'ಪೂರ್ಣಗೊಳಿಸುವಿಕೆ:' : 'Completion:'}
                      </span>
                      <span className="font-medium ml-2">{subject.completion}%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${subject.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className={`text-xl font-bold text-gray-900 mb-6 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ' : 'Recent Activity'}
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'enrollment' ? 'bg-blue-100' :
                    activity.type === 'completion' ? 'bg-green-100' :
                    activity.type === 'download' ? 'bg-purple-100' :
                    'bg-orange-100'
                  }`}>
                    {activity.type === 'enrollment' && <Users className="h-4 w-4 text-blue-600" />}
                    {activity.type === 'completion' && <Award className="h-4 w-4 text-green-600" />}
                    {activity.type === 'download' && <Download className="h-4 w-4 text-purple-600" />}
                    {activity.type === 'quiz' && <BarChart3 className="h-4 w-4 text-orange-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.student}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Monthly Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className={`text-xl font-bold text-gray-900 mb-6 ${language === 'kn' ? 'font-kannada' : ''}`}>
            {language === 'kn' ? 'ಮಾಸಿಕ ಪ್ರವೃತ್ತಿಗಳು' : 'Monthly Trends'}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className={`text-left py-3 px-4 font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ತಿಂಗಳು' : 'Month'}
                  </th>
                  <th className={`text-left py-3 px-4 font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ವಿದ್ಯಾರ್ಥಿಗಳು' : 'Students'}
                  </th>
                  <th className={`text-left py-3 px-4 font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಆದಾಯ' : 'Revenue'}
                  </th>
                  <th className={`text-left py-3 px-4 font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ವಿಷಯ' : 'Content'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((data, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">{data.month}</td>
                    <td className="py-3 px-4">{data.students}</td>
                    <td className="py-3 px-4">₹{data.revenue.toLocaleString()}</td>
                    <td className="py-3 px-4">{data.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Analytics