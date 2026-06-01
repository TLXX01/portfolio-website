import { useState, useEffect } from 'react'
import { AppProvider, useApp } from './context/AppContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { language } = useApp()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
      <div className="fixed inset-0 bg-grid"></div>
      <div className="bg-noise"></div>

      <div className="relative z-10">
        <Header />
        <main className={isLoaded ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}>
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

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App