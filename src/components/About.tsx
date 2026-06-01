import { motion } from 'framer-motion'
import { skills } from '../data/skills'

interface AboutProps {
  language: 'zh' | 'en'
}

const About = ({ language }: AboutProps) => {
  const skillsEn = [
    { id: 1, name: 'React', level: 95 },
    { id: 2, name: 'TypeScript', level: 90 },
    { id: 3, name: 'Node.js', level: 85 },
    { id: 4, name: 'Tailwind CSS', level: 95 },
    { id: 5, name: 'Vite', level: 85 },
    { id: 6, name: 'MongoDB', level: 75 }
  ]

  const displaySkills = language === 'zh' ? skills : skillsEn

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: (index: number) => ({
      scaleX: 1,
      transition: {
        delay: index * 0.15 + 0.3,
        duration: 1,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {language === 'zh' ? '关于我' : 'About Me'}
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.p
                className="text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {language === 'zh'
                  ? '你好！我是一名热爱技术的全栈开发工程师，拥有丰富的 React 和 TypeScript 开发经验。'
                  : 'Hello! I am a full-stack developer passionate about technology, with extensive experience in React and TypeScript development.'}
              </motion.p>
              <motion.p
                className="text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {language === 'zh'
                  ? '我热衷于创建美观、响应式且用户体验友好的应用程序。我不断学习新技术，并致力于编写高质量、可维护的代码。'
                  : 'I am passionate about creating beautiful, responsive, and user-friendly applications. I continuously learn new technologies and strive to write high-quality, maintainable code.'}
              </motion.p>
              <motion.p
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                {language === 'zh'
                  ? '在工作之余，我喜欢参与开源项目，学习新的技术趋势，并与其他开发者交流经验。'
                  : 'In my free time, I enjoy contributing to open source projects, learning new technology trends, and sharing experiences with other developers.'}
              </motion.p>
            </motion.div>
          </motion.div>

          <div>
            <motion.h3
              className="text-xl font-semibold mb-6 text-purple-400"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {language === 'zh' ? '技能列表' : 'Skills'}
            </motion.h3>
            <div className="space-y-4">
              {displaySkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex justify-between mb-2">
                    <motion.span
                      className="font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {skill.name}
                    </motion.span>
                    <motion.span
                      className="text-gray-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full origin-left"
                      style={{ width: `${skill.level}%` }}
                      custom={index}
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ scaleY: 1.2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About