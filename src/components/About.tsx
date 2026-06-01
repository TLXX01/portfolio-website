import { motion } from 'framer-motion'
import { skills } from '../data/skills'

interface AboutProps {
  language: 'zh' | 'en'
}

function About({ language }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 md:py-32 relative">
      <div className="container mx-auto max-w-6xl">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {language === 'zh' ? '关于我' : 'About Me'}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{language === 'zh' ? '技能与经验' : 'Skills & Experience'}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {language === 'zh' 
              ? '多年的开发经验，掌握多种技术栈，致力于构建高质量的软件产品。' 
              : 'Years of development experience, proficient in multiple tech stacks, committed to building high-quality software products.'}
          </p>
        </motion.div>

        {/* 两栏布局 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">{language === 'zh' ? '关于我' : 'About'}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {language === 'zh' 
                ? '我是一名充满热情的全栈开发者，拥有丰富的 Web 开发经验。热爱编程，喜欢挑战复杂的技术问题，善于学习新技术并应用到实际项目中。' 
                : 'I am a passionate full-stack developer with extensive web development experience. Love coding, enjoy challenging technical problems, and excel at learning new technologies and applying them to real-world projects.'}
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {language === 'zh' 
                ? '在工作中，我注重代码质量和团队协作，善于沟通和分享知识。我相信技术可以改变世界，致力于用代码创造有价值的产品。' 
                : 'At work, I focus on code quality and team collaboration, excel at communication and knowledge sharing. I believe technology can change the world and am committed to creating valuable products with code.'}
            </p>

            {/* 统计数据 */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                className="text-center p-4 rounded-xl bg-dark-800/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                <div className="text-sm text-gray-500">{language === 'zh' ? '年经验' : 'Years'}</div>
              </motion.div>
              <motion.div
                className="text-center p-4 rounded-xl bg-dark-800/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">50+</div>
                <div className="text-sm text-gray-500">{language === 'zh' ? '项目' : 'Projects'}</div>
              </motion.div>
              <motion.div
                className="text-center p-4 rounded-xl bg-dark-800/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">10+</div>
                <div className="text-sm text-gray-500">{language === 'zh' ? '技术栈' : 'Tech Stacks'}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* 右侧技能栏 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">{language === 'zh' ? '技能掌握' : 'Skills'}</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-purple-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                      style={{ width: `${skill.level}%` }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
