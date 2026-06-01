import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })
  const [language, setLanguage] = useState<'zh' | 'en'>(() => {
    const saved = localStorage.getItem('language')
    return saved ? (saved as 'zh' | 'en') : 'zh'
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
  }

  const toggleLanguage = () => {
    const newLang = language === 'zh' ? 'en' : 'zh'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <div className={`min-h-screen bg-dark-900 text-white theme-transition ${isDark ? 'dark' : ''}`}>
      {/* 背景效果 */}
      <div className="fixed inset-0 bg-grid opacity-50"></div>
      <div className="glow-orb w-96 h-96 bg-purple-500 -top-20 -left-20"></div>
      <div className="glow-orb w-80 h-80 bg-pink-500 -bottom-20 -right-20" style={{ animationDelay: '10s' }}></div>
      
      {/* 内容 */}
      <div className="relative z-10">
        <Header 
          isDark={isDark} 
          toggleTheme={toggleTheme} 
          language={language}
          toggleLanguage={toggleLanguage}
        />
        <main>
          <Hero language={language} />
          <About language={language} />
          <Projects language={language} />
          <Blog language={language} />
          <Contact language={language} />
        </main>
        <Footer language={language} />
      </div>
    </div>
  )
}

export default App
