import { motion } from 'framer-motion'

interface ContactProps {
  language: 'zh' | 'en'
}

const Contact = ({ language }: ContactProps) => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {language === 'zh' ? '联系方式' : 'Contact'}
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              href: 'mailto:13330719735@163.com',
              icon: '📧',
              title: language === 'zh' ? '邮箱' : 'Email',
              value: '13330719735@163.com',
              delay: 0,
            },
            {
              href: 'https://github.com/yourusername',
              icon: '🐙',
              title: 'GitHub',
              value: '@yourusername',
              delay: 0.1,
            },
            {
              href: 'https://twitter.com/yourusername',
              icon: '🐦',
              title: language === 'zh' ? '社交媒体' : 'Social',
              value: '@yourusername',
              delay: 0.2,
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {item.value}
              </motion.p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact