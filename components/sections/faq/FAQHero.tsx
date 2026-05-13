'use client'

import { motion } from 'framer-motion'

const FAQHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[400px] flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/Faq2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <span className="text-amber-400 text-sm uppercase tracking-wider border border-amber-400/50 px-3 py-1 rounded-full">
              FAQ
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our cars and services
          </p>
        </motion.div>
      </div>
      
    </section>
  )
}

export default FAQHero