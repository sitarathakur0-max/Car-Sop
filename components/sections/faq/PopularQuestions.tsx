'use client'

import { motion } from 'framer-motion'

const popularQuestions = [
  {
    icon: '🚗',
    title: 'Test Drive',
    question: 'How to schedule a test drive?',
    answer: 'Book online or call us to schedule your test drive experience.'
  },
  {
    icon: '💰',
    title: 'Financing',
    question: 'What financing options are available?',
    answer: 'Flexible financing plans with competitive rates.'
  },
  {
    icon: '🔧',
    title: 'Service Center',
    question: 'Where is your service center?',
    answer: 'Located at our main showroom in Beverly Hills.'
  },
  {
    icon: '📦',
    title: 'Delivery',
    question: 'Do you offer home delivery?',
    answer: 'Yes, contactless delivery available within 50 miles.'
  },
]

const PopularQuestions = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Most <span className="gradient-text">Popular</span> Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">Quick answers to our most asked questions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularQuestions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition-all duration-300 text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-lg font-bold text-amber-400 mb-2">{item.title}</h3>
              <p className="text-white font-medium mb-2">{item.question}</p>
              <p className="text-gray-400 text-sm">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularQuestions