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
    
    // Home page
    heroTitle: 'Master Karnataka State Board Syllabus',
    heroSubtitle: 'Comprehensive online tutoring for 8th, 9th & 10th standards in English and Kannada medium',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Features
    expertTutors: 'Expert Tutors',
    expertTutorsDesc: 'Learn from experienced teachers who understand Karnataka State Board curriculum',
    interactiveLessons: 'Interactive Lessons',
    interactiveLessonsDesc: 'Engaging video lessons with quizzes and assignments',
    flexibleSchedule: 'Flexible Schedule',
    flexibleScheduleDesc: 'Study at your own pace with 24/7 access to course materials',
    
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
    standard: 'Standard',
    medium: 'Medium',
    englishMedium: 'English Medium',
    kannadaMedium: 'Kannada Medium',
    
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
    students: 'Students',
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
    
    // Home page
    heroTitle: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮದಲ್ಲಿ ಪಾರಂಗತರಾಗಿ',
    heroSubtitle: '೮ನೇ, ೯ನೇ ಮತ್ತು ೧೦ನೇ ತರಗತಿಗಳಿಗೆ ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡ ಮಾಧ್ಯಮದಲ್ಲಿ ಸಂಪೂರ್ಣ ಆನ್‌ಲೈನ್ ಬೋಧನೆ',
    getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
    learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    
    // Features
    expertTutors: 'ಪರಿಣತ ಶಿಕ್ಷಕರು',
    expertTutorsDesc: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮವನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡ ಅನುಭವಿ ಶಿಕ್ಷಕರಿಂದ ಕಲಿಯಿರಿ',
    interactiveLessons: 'ಸಂವಾದಾತ್ಮಕ ಪಾಠಗಳು',
    interactiveLessonsDesc: 'ಪ್ರಶ್ನೋತ್ತರ ಮತ್ತು ಕಾರ್ಯಗಳೊಂದಿಗೆ ಆಕರ್ಷಕ ವೀಡಿಯೊ ಪಾಠಗಳು',
    flexibleSchedule: 'ಹೊಂದಿಕೊಳ್ಳುವ ವೇಳಾಪಟ್ಟಿ',
    flexibleScheduleDesc: 'ಕೋರ್ಸ್ ವಸ್ತುಗಳಿಗೆ ೨೪/೭ ಪ್ರವೇಶದೊಂದಿಗೆ ನಿಮ್ಮ ಸ್ವಂತ ವೇಗದಲ್ಲಿ ಅಧ್ಯಯನ ಮಾಡಿ',
    
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
    standard: 'ತರಗತಿ',
    medium: 'ಮಾಧ್ಯಮ',
    englishMedium: 'ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ',
    kannadaMedium: 'ಕನ್ನಡ ಮಾಧ್ಯಮ',
    
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
    students: 'ವಿದ್ಯಾರ್ಥಿಗಳು',
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