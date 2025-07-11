import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface User {
  id: string
  email: string
  fullName: string
  standard: string
  medium: 'en' | 'kn'
  phoneNumber: string
  parentPhone?: string
  address?: string
  role: 'student' | 'teacher'
  enrolledCourses?: string[]
  subscription?: {
    plan: string
    expiresAt: string
    paymentStatus: 'active' | 'pending' | 'expired'
  }
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: RegisterData) => Promise<void>
  logout: () => void
  isLoading: boolean
  isTeacher: boolean
}

interface RegisterData {
  email: string
  password: string
  fullName: string
  standard: string
  medium: 'en' | 'kn'
  phoneNumber: string
  parentPhone?: string
  address?: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Check if teacher login
      const isTeacherLogin = email === 'teacher@tuition.com'
      
      const userData: User = isTeacherLogin ? {
        id: 'teacher-1',
        email,
        fullName: 'Rajesh Kumar Sir',
        standard: 'All',
        medium: 'en',
        phoneNumber: '+91 9876543210',
        role: 'teacher'
      } : {
        id: Date.now().toString(),
        email,
        fullName: 'Student Name',
        standard: '10',
        medium: 'en',
        phoneNumber: '+91 9876543210',
        parentPhone: '+91 9876543211',
        address: 'Bangalore, Karnataka',
        role: 'student',
        enrolledCourses: ['math-10', 'science-10'],
        subscription: {
          plan: 'premium',
          expiresAt: '2024-12-31',
          paymentStatus: 'active'
        }
      }
      
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
    } catch (error) {
      throw new Error('Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: RegisterData) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newUser: User = {
        id: Date.now().toString(),
        ...userData,
        role: 'student',
        enrolledCourses: []
      }
      
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
    } catch (error) {
      throw new Error('Registration failed')
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const isTeacher = user?.role === 'teacher'

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading, isTeacher }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}