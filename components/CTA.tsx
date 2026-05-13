'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface CTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const CTA: React.FC<CTAProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-linear-to-r from-amber-600/10 to-amber-800/10"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">{description}</p>
        <Link href={buttonLink} className="btn-primary inline-block">
          {buttonText}
        </Link>
      </div>
    </motion.section>
  )
}

export default CTA