'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CompareCTA = () => {
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
            Want to See <span className="gradient-text">More Cars</span>?
          </h2>
          
          <div className="section-divider mx-auto mb-6"></div>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Browse our complete collection of luxury and exotic vehicles
          </p>
          
          <Link href="/cars" className="btn-primary inline-block">
            Browse More Cars
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CompareCTA