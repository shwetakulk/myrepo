import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Search, Filter, Phone, Mail, GraduationCap, MapPin, Calendar, TrendingUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'

const Students: React.FC = () => {
  const { language, t } = useLanguage()
  const { isTeacher } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStandard, setSelectedStandard] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Mock student data
  const students = [
    {
      id: '1',
      name: 'Arjun Kumar',
      email: 'arjun@email.com',
      phone: '+91 9876543210',
      parentPhone: '+91 9876543211',
      standard: '10',
      medium: 'en',
      address: 'Jayanagar, Bangalore',
      enrolledDate: '2024-01-15',
      status: 'active',
      progress: 85,
      subjects: ['Mathematics', 'Science', 'English'],
      lastActive: '2024-01-20'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      email: 'priya@email.com',
      phone: '+91 9876543212',
      parentPhone: '+91 9876543213',
      standard: '9',
      medium: 'kn',
      address: 'Malleshwaram, Bangalore',
      enrolledDate: '2024-01-10',
      status: 'active',
      progress: 92,
      subjects: ['Mathematics', 'Science', 'Kannada'],
      lastActive: '2024-01-19'
    },
    {
      id: '3',
      name: 'Rahul Reddy',
      email: 'rahul@email.com',
      phone: '+91 9876543214',
      parentPhone: '+91 9876543215',
      standard: '8',
      medium: 'en',
      address: 'Koramangala, Bangalore',
      enrolledDate: '2024-01-05',
      status: 'pending',
      progress: 0,
      subjects: ['Mathematics', 'Science'],
      lastActive: '2024-01-18'
    },
    {
      id: '4',
      name: 'Sneha Gowda',
      email: 'sneha@email.com',
      phone: '+91 9876543216',
      parentPhone: '+91 9876543217',
      standard: '10',
      medium: 'kn',
      address: 'Rajajinagar, Bangalore',
      enrolledDate: '2023-12-20',
      status: 'active',
      progress: 78,
      subjects: ['Mathematics', 'Science', 'Social Science'],
      lastActive: '2024-01-21'
    }
  ]

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStandard = selectedStandard === 'all' || student.standard === selectedStandard
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus
    
    return matchesSearch && matchesStandard && matchesStatus
  })

  const stats = [
    {
      title: language === 'kn' ? 'ಒಟ್ಟು ವಿದ್ಯಾರ್ಥಿಗಳು' : 'Total Students',
      value: students.length.toString(),
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: language === 'kn' ? 'ಸಕ್ರಿಯ ವಿದ್ಯಾರ್ಥಿಗಳು' : 'Active Students',
      value: students.filter(s => s.status === 'active').length.toString(),
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: language === 'kn' ? 'ಸರಾಸರಿ ಪ್ರಗತಿ' : 'Average Progress',
      value: Math.round(students.reduce((acc, s) => acc + s.progress, 0) / students.length) + '%',
      icon: GraduationCap,
      color: 'bg-purple-500'
    }
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
            {t('manageStudents')}
          </h1>
          <p className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
            {language === 'kn' ? 'ನಿಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರಗತಿ ಮತ್ತು ಮಾಹಿತಿಯನ್ನು ನಿರ್ವಹಿಸಿ' : 'Manage your students progress and information'}
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder={language === 'kn' ? 'ವಿದ್ಯಾರ್ಥಿ ಹುಡುಕಿ...' : 'Search students...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedStandard}
              onChange={(e) => setSelectedStandard(e.target.value)}
              className={`w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${language === 'kn' ? 'font-kannada' : ''}`}
            >
              <option value="all">{language === 'kn' ? 'ಎಲ್ಲಾ ತರಗತಿಗಳು' : 'All Standards'}</option>
              <option value="8">{t('standard8')}</option>
              <option value="9">{t('standard9')}</option>
              <option value="10">{t('standard10')}</option>
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className={`w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${language === 'kn' ? 'font-kannada' : ''}`}
            >
              <option value="all">{language === 'kn' ? 'ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು' : 'All Status'}</option>
              <option value="active">{language === 'kn' ? 'ಸಕ್ರಿಯ' : 'Active'}</option>
              <option value="pending">{language === 'kn' ? 'ಬಾಕಿ' : 'Pending'}</option>
            </select>
          </div>
        </motion.div>

        {/* Students List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredStudents.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className={`text-lg font-semibold text-gray-900 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {student.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`text-sm text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                      {language === 'kn' ? `${student.standard}ನೇ ತರಗತಿ` : `${student.standard}th Standard`}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className={`text-sm text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
                      {student.medium === 'en' ? t('englishMedium') : t('kannadaMedium')}
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  student.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {student.status === 'active' 
                    ? (language === 'kn' ? 'ಸಕ್ರಿಯ' : 'Active')
                    : (language === 'kn' ? 'ಬಾಕಿ' : 'Pending')
                  }
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>{student.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{student.phone}</span>
                  <span className="text-gray-400">•</span>
                  <span className={`text-xs ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಪೋಷಕರು:' : 'Parent:'} {student.parentPhone}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{student.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span className={language === 'kn' ? 'font-kannada' : ''}>
                    {language === 'kn' ? 'ಸೇರಿದ ದಿನಾಂಕ:' : 'Enrolled:'} {new Date(student.enrolledDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium text-gray-700 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ಒಟ್ಟಾರೆ ಪ್ರಗತಿ' : 'Overall Progress'}
                  </span>
                  <span className="text-sm font-medium text-gray-900">{student.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <p className={`text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {language === 'kn' ? 'ನೋಂದಾಯಿತ ವಿಷಯಗಳು:' : 'Enrolled Subjects:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {student.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className={`text-xs text-gray-500 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {language === 'kn' ? 'ಕೊನೆಯ ಚಟುವಟಿಕೆ:' : 'Last active:'} {new Date(student.lastActive).toLocaleDateString()}
                </span>
                <div className="flex space-x-2">
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    {language === 'kn' ? 'ವೀಕ್ಷಿಸಿ' : 'View'}
                  </button>
                  <button className="text-secondary-600 hover:text-secondary-700 text-sm font-medium">
                    {language === 'kn' ? 'ಸಂಪರ್ಕಿಸಿ' : 'Contact'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold text-gray-600 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ಯಾವುದೇ ವಿದ್ಯಾರ್ಥಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ' : 'No students found'}
            </h3>
            <p className={`text-gray-500 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ವಿಭಿನ್ನ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ' : 'Try different filters or search terms'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Students