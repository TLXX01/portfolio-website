import { useState } from 'react'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/blog'

interface BlogProps {
  language: 'zh' | 'en'
}

const Blog = ({ language }: BlogProps) => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

  const handleBack = () => {
    setSelectedPost(null)
  }

  if (selectedPost) {
    return (
      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.button
            onClick={handleBack}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: -5 }}
          >
            <motion.svg
              className="w-5 h-5"
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </motion.svg>
            <span>{language === 'zh' ? '返回博客列表' : 'Back to Posts'}</span>
          </motion.button>

          <motion.article
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {selectedPost.title[language]}
            </motion.h1>

            <motion.div
              className="flex items-center gap-4 text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span>{selectedPost.date}</span>
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {selectedPost.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="prose prose-lg prose-invert"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {selectedPost.content[language].split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return <motion.h2
                    key={index}
                    className="text-2xl font-bold mt-8 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {paragraph.slice(2)}
                  </motion.h2>
                }
                if (paragraph.startsWith('## ')) {
                  return <motion.h3
                    key={index}
                    className="text-xl font-semibold mt-6 mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {paragraph.slice(3)}
                  </motion.h3>
                }
                if (paragraph.trim()) {
                  return <motion.p
                    key={index}
                    className="text-gray-300 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                }
                return null
              })}
            </motion.div>
          </motion.article>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="py-20 px-4 bg-gradient-to-b from-purple-900/10 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {language === 'zh' ? '我的博客' : 'My Blog'}
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer bg-gray-900/50 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {post.tags.slice(0, 2).map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.h3
                className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ x: 5 }}
              >
                {post.title[language]}
              </motion.h3>

              <motion.p
                className="text-gray-400 text-sm mb-4 line-clamp-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {post.excerpt[language]}
              </motion.p>

              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <span className="text-gray-500 text-sm">{post.date}</span>
                <motion.span
                  className="text-purple-400 text-sm flex items-center gap-1"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {language === 'zh' ? '阅读更多' : 'Read more'}
                  <motion.svg
                    className="w-4 h-4"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.span>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog