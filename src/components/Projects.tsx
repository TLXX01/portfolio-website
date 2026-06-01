import { motion } from 'framer-motion'
import { projects } from '../data/projects'

interface ProjectsProps {
  language: 'zh' | 'en'
}

function Projects({ language }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 px-4 md:py-32 relative">
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
            {language === 'zh' ? '项目作品' : 'Projects'}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{language === 'zh' ? '精选项目' : 'Featured Projects'}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {language === 'zh' 
              ? '以下是我参与开发的一些代表性项目，展示了我的技术能力和项目经验。' 
              : 'Here are some representative projects I have worked on, demonstrating my technical skills and project experience.'}
          </p>
        </motion.div>

        {/* 项目卡片网格 */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-dark-800/50 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* 项目图片 */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                <motion.a
                  href={project.link}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-900/80 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </motion.a>
              </div>

              {/* 项目信息 */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {language === 'zh' ? project.description : project.descriptionEn}
                </p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-dark-700/50 text-gray-400 text-xs font-medium"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* 悬浮渐变边框 */}
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3)) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
            </motion.div>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-purple-500/50 text-purple-400 font-medium hover:bg-purple-500/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'zh' ? '查看更多项目' : 'View More Projects'}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
