'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ServiceCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background - Aapki CSS ke colors se match */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-cyan-600/10"></div>
      
      {/* Neon Border Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading with Gradient Text */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready for <span className="gradient-text">Premium Service</span>?
          </h2>
          
          {/* Section Divider */}
          <div className="section-divider mx-auto mb-6"></div>
          
          {/* Description */}
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Book your appointment today and experience the difference of luxury car care
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Service
            </Link>
            <Link href="/contact" className="btn-outline">
              Get Free Quote
            </Link>
          </div>
          
          {/* Contact Info with Neon Text */}
          <p className="text-gray-400 text-sm mt-6">
             Or call us: <span className="neon-text-cyan">+1 (555) 123-4567</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceCTA