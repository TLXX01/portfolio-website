import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { blogPosts } from '../data/blog'

interface BlogProps {
  language: 'zh' | 'en'
}

function Blog({ language }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

  return (
    <section id="blog" className="py-20 px-4 md:py-32 relative">
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
            {language === 'zh' ? '博客文章' : 'Blog'}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{language === 'zh' ? '技术博客' : 'Technical Blog'}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {language === 'zh' 
              ? '分享技术心得和学习经验，帮助更多开发者成长。' 
              : 'Sharing technical insights and learning experiences to help more developers grow.'}
          </p>
        </motion.div>

        {/* 博客卡片 */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-dark-800/50 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedPost(post)}
            >
              <div className="p-6">
                {/* 分类标签 */}
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium mb-4">
                  {post.category}
                </span>

                {/* 标题 */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {language === 'zh' ? post.title : post.titleEn}
                </h3>

                {/* 摘要 */}
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {language === 'zh' ? post.excerpt : post.excerptEn}
                </p>

                {/* 日期 */}
                <div className="flex items-center gap-2 text-gray-600 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {post.date}
                </div>
              </div>

              {/* 阅读更多指示 */}
              <div className="px-6 pb-6">
                <motion.div
                  className="flex items-center gap-2 text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  {language === 'zh' ? '阅读更多' : 'Read More'}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </motion.svg>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 文章详情弹窗 */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
            >
              {/* 背景遮罩 */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

              {/* 弹窗内容 */}
              <motion.div
                className="relative bg-dark-800 border border-purple-500/30 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* 头部 */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium mb-2">
                      {selectedPost.category}
                    </span>
                    <h3 className="text-xl font-semibold">
                      {language === 'zh' ? selectedPost.title : selectedPost.titleEn}
                    </h3>
                  </div>
                  <motion.button
                    className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-dark-600 transition-colors"
                    onClick={() => setSelectedPost(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </motion.button>
                </div>

                {/* 内容 */}
                <div className="p-6 overflow-y-auto max-h-[60vh]">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                      {language === 'zh' ? selectedPost.content : selectedPost.contentEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Blog
