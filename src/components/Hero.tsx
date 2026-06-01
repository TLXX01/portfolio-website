import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  language: 'zh' | 'en'
}

const Hero = ({ language }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
  }

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const bounceArrowVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div
        className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.div className="mb-8 flex justify-center" variants={avatarVariants}>
          <motion.div
            className="relative"
            variants={floatVariants}
            animate="animate"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-lg"
              variants={pulseVariants}
              animate="animate"
            />
            <motion.div
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-1"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
                <img
                  src="/images/avatar.gif"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {language === 'zh' ? '欢迎来到我的作品集' : 'Welcome to My Portfolio'}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8"
          variants={itemVariants}
        >
          {language === 'zh' ? '全栈开发工程师-Lucas大轩 | 热爱技术 | 追求卓越' : 'Full Stack Developer - Lucas | Passionate about Tech | Striving for Excellence'}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {language === 'zh' ? '查看项目' : 'View Projects'}
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(168, 85, 247, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {language === 'zh' ? '联系我' : 'Contact Me'}
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center gap-2 text-gray-500"
          variants={itemVariants}
        >
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              variants={bounceArrowVariants}
              animate="animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              ▼
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero