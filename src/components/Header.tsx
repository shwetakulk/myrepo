import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BookOpen, Menu, X, Globe, User, LogOut } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsUserMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <span className={`text-xl font-bold text-gray-900 ${language === 'kn' ? 'font-kannada' : ''}`}>
              {language === 'kn' ? 'ಕರ್ನಾಟಕ ಟ್ಯೂಟರ್' : 'Karnataka Tutor'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}>
              {t('home')}
            </Link>
            <Link to="/courses" className={`text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}>
              {t('courses')}
            </Link>
            <Link to="/pricing" className={`text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}>
              {t('pricing')}
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium"
            >
              <Globe className="h-4 w-4" />
              <span className={language === 'kn' ? 'font-kannada' : ''}>
                {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
              </span>
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600"
                >
                  <User className="h-5 w-5" />
                  <span className={`font-medium ${language === 'kn' ? 'font-kannada' : ''}`}>
                    {user.fullName}
                  </span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/dashboard"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${language === 'kn' ? 'font-kannada' : ''}`}
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      {t('dashboard')}
                    </Link>
                    <Link
                      to="/profile"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${language === 'kn' ? 'font-kannada' : ''}`}
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      {t('profile')}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2 ${language === 'kn' ? 'font-kannada' : ''}`}
                    >
                      <LogOut className="h-4 w-4" />
                      <span>{t('logout')}</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}
                >
                  {t('login')}
                </Link>
                <Link
                  to="/register"
                  className={`btn-primary ${language === 'kn' ? 'font-kannada' : ''}`}
                >
                  {t('register')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                to="/courses"
                className={`text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('courses')}
              </Link>
              <Link
                to="/pricing"
                className={`text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('pricing')}
              </Link>
              
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setLanguage(language === 'en' ? 'kn' : 'en')
                    setIsMenuOpen(false)
                  }}
                  className={`flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}
                >
                  <Globe className="h-4 w-4" />
                  <span>{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
                </button>
              </div>

              {user ? (
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <Link
                    to="/dashboard"
                    className={`text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('dashboard')}
                  </Link>
                  <Link
                    to="/profile"
                    className={`text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('profile')}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}
                  >
                    {t('logout')}
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <Link
                    to="/login"
                    className={`text-gray-700 hover:text-primary-600 font-medium ${language === 'kn' ? 'font-kannada' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('login')}
                  </Link>
                  <Link
                    to="/register"
                    className={`btn-primary inline-block text-center ${language === 'kn' ? 'font-kannada' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('register')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header