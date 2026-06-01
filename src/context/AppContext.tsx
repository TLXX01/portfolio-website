import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'dark' | 'light'
type Language = 'zh' | 'en'

interface AppContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    return saved || 'dark'
  })

  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language | null
    return saved || 'zh'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    setThemeState(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
  }

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'zh' ? 'en' : 'zh')
  }

  return (
    <AppContext.Provider value={{
      theme,
      setTheme,
      toggleTheme,
      language,
      setLanguage,
      toggleLanguage
    }}>
      {children}
    </AppContext.Provider>
  )
}