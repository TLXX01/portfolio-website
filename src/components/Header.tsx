import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  isDark: boolean
  toggleTheme: () => void
  language: 'zh' | 'en'
  toggleLanguage: () => void
}

const navItems = {
  zh: ['首页', '关于', '项目', '博客', '联系'],
  en: ['Home', 'About', 'Projects', 'Blog', 'Contact'],
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

function Header({ isDark, toggleTheme, language, toggleLanguage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-xl shadow-lg shadow-purple-500/5'
          : 'bg-transparent'
      }`}
    >
      {/* 导航栏背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('hero')
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-xl font-bold text-white">P</span>
            </div>
            <span className="text-xl font-semibold gradient-text">Portfolio</span>
          </motion.a>

          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems[language].map((item, index) => (
              <motion.button
                key={item}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                onClick={() => scrollToSection(['hero', 'about', 'projects', 'blog', 'contact'][index])}
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </nav>

          {/* 右侧按钮组 */}
          <div className="flex items-center gap-4">
            {/* 语言切换 */}
            <motion.button
              className="px-3 py-1.5 rounded-full border border-purple-500/30 text-sm font-medium text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 lang-btn"
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'zh' ? 'EN' : 'CN'}
            </motion.button>

            {/* 主题切换 */}
            <motion.button
              className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </motion.button>

            {/* 移动端菜单按钮 */}
            <button
              className="md:hidden w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mobile-menu-enter"
          >
            <nav className="absolute top-full left-0 right-0 bg-dark-900/98 backdrop-blur-xl border-t border-purple-500/10 py-4 px-6 rounded-b-2xl shadow-2xl shadow-purple-500/5">
              {navItems[language].map((item, index) => (
                <button
                  key={item}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => {
                    scrollToSection(['hero', 'about', 'projects', 'blog', 'contact'][index])
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
