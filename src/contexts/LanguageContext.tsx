import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'kn'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    courses: 'Courses',
    pricing: 'Pricing',
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    profile: 'Profile',
    logout: 'Logout',
    students: 'Students',
    content: 'Content',
    analytics: 'Analytics',
    
    // Home page
    heroTitle: 'Master KSEEB Syllabus with Expert Guidance',
    heroSubtitle: 'Personal tuition classes for 8th, 9th & 10th standards following Karnataka State Board curriculum',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Features
    expertTutors: 'Expert Teaching',
    expertTutorsDesc: 'Learn from experienced teacher following KSEEB official curriculum',
    personalizedLearning: 'Personalized Learning',
    personalizedLearningDesc: 'Customized teaching approach for each student',
    flexibleSchedule: 'Flexible Schedule',
    flexibleScheduleDesc: 'Study at your convenient time with recorded sessions',
    
    // Subjects
    mathematics: 'Mathematics',
    science: 'Science',
    socialScience: 'Social Science',
    english: 'English',
    kannada: 'Kannada',
    hindi: 'Hindi',
    
    // Standards
    standard8: '8th Standard',
    standard9: '9th Standard',
    standard10: '10th Standard',
    
    // Common
    selectStandard: 'Select Standard',
    selectSubject: 'Select Subject',
    startLearning: 'Start Learning',
    viewCourse: 'View Course',
    enrollNow: 'Enroll Now',
    price: 'Price',
    month: 'month',
    year: 'year',
    
    // Auth
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    fullName: 'Full Name',
    phoneNumber: 'Phone Number',
    parentPhone: 'Parent Phone',
    address: 'Address',
    standard: 'Standard',
    medium: 'Medium',
    englishMedium: 'English Medium',
    kannadaMedium: 'Kannada Medium',
    
    // Teacher Dashboard
    addContent: 'Add Content',
    manageStudents: 'Manage Students',
    viewAnalytics: 'View Analytics',
    uploadNotes: 'Upload Notes',
    createAssignment: 'Create Assignment',
    scheduleClass: 'Schedule Class',
    
    // Content Management
    contentTitle: 'Content Title',
    contentDescription: 'Content Description',
    uploadFile: 'Upload File',
    selectChapter: 'Select Chapter',
    contentType: 'Content Type',
    videoLesson: 'Video Lesson',
    notes: 'Notes',
    assignment: 'Assignment',
    quiz: 'Quiz',
    
    // KSEEB Chapters
    chapter: 'Chapter',
    
    // Pricing
    basicPlan: 'Basic Plan',
    premiumPlan: 'Premium Plan',
    proPlan: 'Pro Plan',
    monthlyBilling: 'Monthly Billing',
    yearlyBilling: 'Yearly Billing',
    
    // Course details
    courseOverview: 'Course Overview',
    curriculum: 'Curriculum',
    instructor: 'Instructor',
    duration: 'Duration',
    lessons: 'Lessons',
    rating: 'Rating',
  },
  kn: {
    // Navigation
    home: 'ಮುಖ್ಯ ಪುಟ',
    courses: 'ಕೋರ್ಸ್‌ಗಳು',
    pricing: 'ಬೆಲೆ',
    login: 'ಲಾಗಿನ್',
    register: 'ನೋಂದಣಿ',
    dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    profile: 'ಪ್ರೊಫೈಲ್',
    logout: 'ಲಾಗ್ ಔಟ್',
    students: 'ವಿದ್ಯಾರ್ಥಿಗಳು',
    content: 'ವಿಷಯ',
    analytics: 'ವಿಶ್ಲೇಷಣೆ',
    
    // Home page
    heroTitle: 'KSEEB ಪಠ್ಯಕ್ರಮದಲ್ಲಿ ಪರಿಣತ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಪಾರಂಗತರಾಗಿ',
    heroSubtitle: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮವನ್ನು ಅನುಸರಿಸಿ ೮ನೇ, ೯ನೇ ಮತ್ತು ೧೦ನೇ ತರಗತಿಗಳಿಗೆ ವೈಯಕ್ತಿಕ ಟ್ಯೂಷನ್ ತರಗತಿಗಳು',
    getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
    learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    
    // Features
    expertTutors: 'ಪರಿಣತ ಬೋಧನೆ',
    expertTutorsDesc: 'KSEEB ಅಧಿಕೃತ ಪಠ್ಯಕ್ರಮವನ್ನು ಅನುಸರಿಸುವ ಅನುಭವಿ ಶಿಕ್ಷಕರಿಂದ ಕಲಿಯಿರಿ',
    personalizedLearning: 'ವೈಯಕ್ತಿಕ ಕಲಿಕೆ',
    personalizedLearningDesc: 'ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಗೆ ಕಸ್ಟಮೈಸ್ಡ್ ಬೋಧನಾ ವಿಧಾನ',
    flexibleSchedule: 'ಹೊಂದಿಕೊಳ್ಳುವ ವೇಳಾಪಟ್ಟಿ',
    flexibleScheduleDesc: 'ರೆಕಾರ್ಡ್ ಮಾಡಿದ ಸೆಷನ್‌ಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಅನುಕೂಲಕರ ಸಮಯದಲ್ಲಿ ಅಧ್ಯಯನ ಮಾಡಿ',
    
    // Subjects
    mathematics: 'ಗಣಿತ',
    science: 'ವಿಜ್ಞಾನ',
    socialScience: 'ಸಮಾಜ ವಿಜ್ಞಾನ',
    english: 'ಇಂಗ್ಲಿಷ್',
    kannada: 'ಕನ್ನಡ',
    hindi: 'ಹಿಂದಿ',
    
    // Standards
    standard8: '೮ನೇ ತರಗತಿ',
    standard9: '೯ನೇ ತರಗತಿ',
    standard10: '೧೦ನೇ ತರಗತಿ',
    
    // Common
    selectStandard: 'ತರಗತಿ ಆಯ್ಕೆಮಾಡಿ',
    selectSubject: 'ವಿಷಯ ಆಯ್ಕೆಮಾಡಿ',
    startLearning: 'ಕಲಿಕೆ ಪ್ರಾರಂಭಿಸಿ',
    viewCourse: 'ಕೋರ್ಸ್ ನೋಡಿ',
    enrollNow: 'ಈಗಲೇ ದಾಖಲಾಗಿ',
    price: 'ಬೆಲೆ',
    month: 'ತಿಂಗಳು',
    year: 'ವರ್ಷ',
    
    // Auth
    email: 'ಇಮೇಲ್',
    password: 'ಪಾಸ್‌ವರ್ಡ್',
    confirmPassword: 'ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ',
    fullName: 'ಪೂರ್ಣ ಹೆಸರು',
    phoneNumber: 'ಫೋನ್ ಸಂಖ್ಯೆ',
    parentPhone: 'ಪೋಷಕರ ಫೋನ್',
    address: 'ವಿಳಾಸ',
    standard: 'ತರಗತಿ',
    medium: 'ಮಾಧ್ಯಮ',
    englishMedium: 'ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ',
    kannadaMedium: 'ಕನ್ನಡ ಮಾಧ್ಯಮ',
    
    // Teacher Dashboard
    addContent: 'ವಿಷಯ ಸೇರಿಸಿ',
    manageStudents: 'ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ',
    viewAnalytics: 'ವಿಶ್ಲೇಷಣೆ ನೋಡಿ',
    uploadNotes: 'ಟಿಪ್ಪಣಿಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    createAssignment: 'ಕಾರ್ಯ ರಚಿಸಿ',
    scheduleClass: 'ತರಗತಿ ನಿಗದಿಪಡಿಸಿ',
    
    // Content Management
    contentTitle: 'ವಿಷಯದ ಶೀರ್ಷಿಕೆ',
    contentDescription: 'ವಿಷಯದ ವಿವರಣೆ',
    uploadFile: 'ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    selectChapter: 'ಅಧ್ಯಾಯ ಆಯ್ಕೆಮಾಡಿ',
    contentType: 'ವಿಷಯದ ಪ್ರಕಾರ',
    videoLesson: 'ವೀಡಿಯೊ ಪಾಠ',
    notes: 'ಟಿಪ್ಪಣಿಗಳು',
    assignment: 'ಕಾರ್ಯ',
    quiz: 'ಪ್ರಶ್ನೋತ್ತರ',
    
    // KSEEB Chapters
    chapter: 'ಅಧ್ಯಾಯ',
    
    // Pricing
    basicPlan: 'ಮೂಲಭೂತ ಯೋಜನೆ',
    premiumPlan: 'ಪ್ರೀಮಿಯಂ ಯೋಜನೆ',
    proPlan: 'ಪ್ರೊ ಯೋಜನೆ',
    monthlyBilling: 'ಮಾಸಿಕ ಬಿಲ್ಲಿಂಗ್',
    yearlyBilling: 'ವಾರ್ಷಿಕ ಬಿಲ್ಲಿಂಗ್',
    
    // Course details
    courseOverview: 'ಕೋರ್ಸ್ ಅವಲೋಕನ',
    curriculum: 'ಪಠ್ಯಕ್ರಮ',
    instructor: 'ಬೋಧಕ',
    duration: 'ಅವಧಿ',
    lessons: 'ಪಾಠಗಳು',
    rating: 'ರೇಟಿಂಗ್',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}