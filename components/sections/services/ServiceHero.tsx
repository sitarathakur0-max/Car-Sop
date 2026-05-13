
'use client'

import { motion } from 'framer-motion'

const ServiceHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[500px] flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/car services.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg bg-gradient-to-b from-black/60 to-black/55 "></div>
      </div>

      {/* Animated Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <span className="text-amber-400 text-sm uppercase tracking-wider border border-amber-400/50 px-3 py-1 rounded-full">
                🛠️ Premium Automotive Services
              </span>
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-4">
            Expert <span className="gradient-text">Car Care</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive automotive solutions for luxury vehicle owners
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceHero