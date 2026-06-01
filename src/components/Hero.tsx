import { motion } from 'framer-motion'
// @ts-ignore
import avatar from '../img/tx2.gif'

interface HeroProps {
  language: 'zh' | 'en'
}

function Hero({ language }: HeroProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        ></motion.div>
        <motion.div
          className="absolute w-48 h-48 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        ></motion.div>
      </div>

      {/* 主要内容 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        {/* 头像 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg shadow-purple-500/20">
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </motion.div>
        </motion.div>

        {/* 标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <span className="gradient-text">{language === 'zh' ? '欢迎来到我的作品集' : 'Welcome to My Portfolio'}</span>
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          {language === 'zh' 
            ? '全栈开发者 | 热爱技术 | 持续学习' 
            : 'Full Stack Developer | Tech Enthusiast | Lifelong Learner'}
        </motion.p>

        {/* 简介 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 mb-10 max-w-xl mx-auto"
        >
          {language === 'zh' 
            ? '我是一名充满热情的全栈开发者，专注于构建优雅的 Web 应用。热爱探索新技术，乐于分享知识。' 
            : 'I am a passionate full-stack developer focused on building elegant web applications. Love exploring new technologies and sharing knowledge.'}
        </motion.p>

        {/* 按钮组 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'zh' ? '查看项目' : 'View Projects'}
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-full border border-purple-500/50 text-purple-400 font-semibold hover:bg-purple-500/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'zh' ? '联系我' : 'Contact Me'}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* 滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm">{language === 'zh' ? '向下滚动' : 'Scroll Down'}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
