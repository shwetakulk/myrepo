import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Upload, FileText, Video, BookOpen, Edit, Trash2, Eye } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'

const ContentManagement: React.FC = () => {
  const { language, t } = useLanguage()
  const { isTeacher } = useAuth()
  const [showAddForm, setShowAddForm] = useState(false)
  const [selectedStandard, setSelectedStandard] = useState('all')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    standard: '',
    subject: '',
    chapter: '',
    contentType: 'notes',
    file: null as File | null
  })

  // KSEEB Chapters for each subject and standard
  const kseebChapters = {
    '8': {
      mathematics: [
        'Rational Numbers', 'Linear Equations in One Variable', 'Understanding Quadrilaterals',
        'Practical Geometry', 'Data Handling', 'Squares and Square Roots', 'Cubes and Cube Roots',
        'Comparing Quantities', 'Algebraic Expressions and Identities', 'Mensuration',
        'Exponents and Powers', 'Direct and Inverse Proportions', 'Factorisation',
        'Introduction to Graphs', 'Playing with Numbers'
      ],
      science: [
        'Crop Production and Management', 'Microorganisms: Friend and Foe', 'Synthetic Fibres and Plastics',
        'Materials: Metals and Non-Metals', 'Coal and Petroleum', 'Combustion and Flame',
        'Conservation of Plants and Animals', 'Cell - Structure and Functions', 'Reproduction in Animals',
        'Reaching the Age of Adolescence', 'Force and Pressure', 'Friction', 'Sound',
        'Chemical Effects of Electric Current', 'Some Natural Phenomena', 'Light', 'Stars and the Solar System'
      ],
      socialScience: [
        'How, When and Where', 'From Trade to Territory', 'Ruling the Countryside',
        'Tribals, Dikus and the Vision of a Golden Age', 'When People Rebel',
        'Weavers, Iron Smelters and Factory Owners', 'Civilising the "Native", Educating the Nation',
        'Women, Caste and Reform', 'The Making of the National Movement',
        'India After Independence', 'Resources', 'Land, Soil, Water, Natural Vegetation and Wildlife Resources',
        'Mineral and Power Resources', 'Agriculture', 'Industries', 'Human Resources'
      ]
    },
    '9': {
      mathematics: [
        'Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables',
        'Introduction to Euclid\'s Geometry', 'Lines and Angles', 'Triangles', 'Quadrilaterals',
        'Areas of Parallelograms and Triangles', 'Circles', 'Constructions', 'Heron\'s Formula',
        'Surface Areas and Volumes', 'Statistics', 'Probability'
      ],
      science: [
        'Matter in Our Surroundings', 'Is Matter Around Us Pure', 'Atoms and Molecules',
        'Structure of the Atom', 'The Fundamental Unit of Life', 'Tissues', 'Diversity in Living Organisms',
        'Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound',
        'Why Do We Fall Ill', 'Natural Resources', 'Improvement in Food Resources'
      ]
    },
    '10': {
      mathematics: [
        'Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables',
        'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry',
        'Introduction to Trigonometry', 'Some Applications of Trigonometry', 'Circles',
        'Constructions', 'Areas Related to Circles', 'Surface Areas and Volumes',
        'Statistics', 'Probability'
      ],
      science: [
        'Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals',
        'Carbon and its Compounds', 'Periodic Classification of Elements', 'Life Processes',
        'Control and Coordination', 'How do Organisms Reproduce?', 'Heredity and Evolution',
        'Light - Reflection and Refraction', 'Human Eye and Colourful World',
        'Electricity', 'Magnetic Effects of Electric Current', 'Our Environment',
        'Management of Natural Resources'
      ]
    }
  }

  // Mock content data
  const content = [
    {
      id: '1',
      title: 'Linear Equations - Chapter 2',
      description: 'Complete notes on linear equations with examples',
      standard: '8',
      subject: 'mathematics',
      chapter: 'Linear Equations in One Variable',
      contentType: 'notes',
      uploadDate: '2024-01-15',
      fileSize: '2.5 MB',
      downloads: 45
    },
    {
      id: '2',
      title: 'Photosynthesis Video Lesson',
      description: 'Detailed explanation of photosynthesis process',
      standard: '10',
      subject: 'science',
      chapter: 'Life Processes',
      contentType: 'video',
      uploadDate: '2024-01-10',
      fileSize: '125 MB',
      downloads: 78
    },
    {
      id: '3',
      title: 'Quadrilaterals Assignment',
      description: 'Practice problems on quadrilaterals',
      standard: '8',
      subject: 'mathematics',
      chapter: 'Understanding Quadrilaterals',
      contentType: 'assignment',
      uploadDate: '2024-01-12',
      fileSize: '1.2 MB',
      downloads: 32
    }
  ]

  const subjects = ['mathematics', 'science', 'socialScience', 'english', 'kannada', 'hindi']

  const filteredContent = content.filter(item => {
    const standardMatch = selectedStandard === 'all' || item.standard === selectedStandard
    const subjectMatch = selectedSubject === 'all' || item.subject === selectedSubject
    const typeMatch = selectedType === 'all' || item.contentType === selectedType
    return standardMatch && subjectMatch && typeMatch
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Content upload:', formData)
    setShowAddForm(false)
    setFormData({
      title: '',
      description: '',
      standard: '',
      subject: '',
      chapter: '',
      contentType: 'notes',
      file: null
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] })
    }
  }

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
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className={`text-3xl font-bold text-gray-900 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ವಿಷಯ ನಿರ್ವಹಣೆ' : 'Content Management'}
            </h1>
            <p className={`text-gray-600 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ನಿಮ್ಮ ಬೋಧನಾ ವಸ್ತುಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮತ್ತು ನಿರ್ವಹಿಸಿ' : 'Upload and manage your teaching materials'}
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className={`btn-primary flex items-center space-x-2 ${language === 'kn' ? 'font-kannada' : ''}`}
          >
            <Plus className="h-5 w-5" />
            <span>{t('addContent')}</span>
          </button>
        </motion.div>

        {/* Add Content Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6 mb-8"
          >
            <h2 className={`text-xl font-bold text-gray-900 mb-6 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ಹೊಸ ವಿಷಯ ಸೇರಿಸಿ' : 'Add New Content'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {t('contentTitle')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={language === 'kn' ? 'ವಿಷಯದ ಶೀರ್ಷಿಕೆ ನಮೂದಿಸಿ' : 'Enter content title'}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {t('contentType')}
                  </label>
                  <select
                    value={formData.contentType}
                    onChange={(e) => setFormData({ ...formData, contentType: e.target.value })}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${language === 'kn' ? 'font-kannada' : ''}`}
                  >
                    <option value="notes">{t('notes')}</option>
                    <option value="video">{t('videoLesson')}</option>
                    <option value="assignment">{t('assignment')}</option>
                    <option value="quiz">{t('quiz')}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {t('standard')}
                  </label>
                  <select
                    required
                    value={formData.standard}
                    onChange={(e) => setFormData({ ...formData, standard: e.target.value, chapter: '' })}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${language === 'kn' ? 'font-kannada' : ''}`}
                  >
                    <option value="">{language === 'kn' ? 'ಆಯ್ಕೆಮಾಡಿ' : 'Select'}</option>
                    <option value="8">{t('standard8')}</option>
                    <option value="9">{t('standard9')}</option>
                    <option value="10">{t('standard10')}</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {t('selectSubject')}
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value, chapter: '' })}
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${language === 'kn' ? 'font-kannada' : ''}`}
                  >
                    <option value="">{language === 'kn' ? 'ಆಯ್ಕೆಮಾಡಿ' : 'Select'}</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{t(subject)}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {t('selectChapter')}
                  </label>
                  <select
                    required
                    value={formData.chapter}
                    onChange={(e) => setFormData({ ...formData, chapter: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    disabled={!formData.standard || !formData.subject}
                  >
                    <option value="">{language === 'kn' ? 'ಆಯ್ಕೆಮಾಡಿ' : 'Select'}</option>
                    {formData.standard && formData.subject && kseebChapters[formData.standard as keyof typeof kseebChapters]?.[formData.subject as keyof typeof kseebChapters['8']]?.map((chapter, index) => (
                      <option key={index} value={chapter}>{chapter}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {t('contentDescription')}
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder={language === 'kn' ? 'ವಿಷಯದ ವಿವರಣೆ ನಮೂದಿಸಿ' : 'Enter content description'}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                  {t('uploadFile')}
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.ppt,.pptx,.mp4,.avi,.mov"
                  />
                  <label
                    htmlFor="file-upload"
                    className={`cursor-pointer text-primary-600 hover:text-primary-700 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}
                  >
                    {language === 'kn' ? 'ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ' : 'Choose file'}
                  </label>
                  <p className={`text-sm text-gray-500 mt-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'PDF, DOC, PPT, MP4 ಫೈಲ್‌ಗಳು ಬೆಂಬಲಿತ' : 'PDF, DOC, PPT, MP4 files supported'}
                  </p>
                  {formData.file && (
                    <p className="text-sm text-green-600 mt-2">{formData.file.name}</p>
                  )}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className={`btn-primary ${language === 'kn' ? 'font-kannada' : ''}`}
                >
                  {language === 'kn' ? 'ಅಪ್‌ಲೋಡ್ ಮಾಡಿ' : 'Upload Content'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className={`px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors ${language === 'kn' ? 'font-kannada' : ''}`}
                >
                  {language === 'kn' ? 'ರದ್ದುಮಾಡಿ' : 'Cancel'}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${language === 'kn' ? 'font-kannada' : ''}`}
            >
              <option value="all">{language === 'kn' ? 'ಎಲ್ಲಾ ವಿಷಯಗಳು' : 'All Subjects'}</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{t(subject)}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${language === 'kn' ? 'font-kannada' : ''}`}
            >
              <option value="all">{language === 'kn' ? 'ಎಲ್ಲಾ ಪ್ರಕಾರಗಳು' : 'All Types'}</option>
              <option value="notes">{t('notes')}</option>
              <option value="video">{t('videoLesson')}</option>
              <option value="assignment">{t('assignment')}</option>
              <option value="quiz">{t('quiz')}</option>
            </select>
          </div>
        </motion.div>

        {/* Content List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    {item.contentType === 'video' && <Video className="h-6 w-6 text-primary-600" />}
                    {item.contentType === 'notes' && <FileText className="h-6 w-6 text-primary-600" />}
                    {item.contentType === 'assignment' && <BookOpen className="h-6 w-6 text-primary-600" />}
                    {item.contentType === 'quiz' && <FileText className="h-6 w-6 text-primary-600" />}
                  </div>
                  <div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.contentType === 'video' ? 'bg-red-100 text-red-800' :
                      item.contentType === 'notes' ? 'bg-blue-100 text-blue-800' :
                      item.contentType === 'assignment' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {t(item.contentType)}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-primary-600">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-secondary-600">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {item.title}
              </h3>
              <p className={`text-gray-600 text-sm mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {item.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className={`text-gray-500 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ತರಗತಿ:' : 'Standard:'}
                  </span>
                  <span className={`font-medium ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? `${item.standard}ನೇ ತರಗತಿ` : `${item.standard}th Standard`}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={`text-gray-500 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {language === 'kn' ? 'ವಿಷಯ:' : 'Subject:'}
                  </span>
                  <span className={`font-medium ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {t(item.subject)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={`text-gray-500 ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {t('chapter')}:
                  </span>
                  <span className="font-medium text-xs">{item.chapter}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="text-xs text-gray-500">
                  <div>{item.fileSize}</div>
                  <div>{item.downloads} downloads</div>
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(item.uploadDate).toLocaleDateString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold text-gray-600 mb-2 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ಯಾವುದೇ ವಿಷಯ ಕಂಡುಬಂದಿಲ್ಲ' : 'No content found'}
            </h3>
            <p className={`text-gray-500 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ಹೊಸ ವಿಷಯವನ್ನು ಸೇರಿಸಲು ಮೇಲಿನ ಬಟನ್ ಬಳಸಿ' : 'Use the button above to add new content'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContentManagement