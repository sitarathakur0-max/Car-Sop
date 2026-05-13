'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const AboutCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-cyan-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Find Your <span className="gradient-text">Dream Car</span> Today
          </h2>
          
          <div className="section-divider mx-auto mb-6"></div>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Explore our collection of premium luxury vehicles and experience the thrill of driving
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cars" className="btn-primary">
              Browse Cars
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCTA