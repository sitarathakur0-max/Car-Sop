'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'

const services = [
  { icon: '🚗', title: 'Car Sales', description: 'Premium new and pre-owned luxury vehicles' },
  { icon: '🔧', title: 'Maintenance', description: 'Expert service by certified technicians' },
  { icon: '✨', title: 'Detailing', description: 'Professional ceramic coating and detailing' },
  { icon: '💰', title: 'Financing', description: 'Flexible financing options available' },
  { icon: '📋', title: 'Test Drives', description: 'Experience the thrill before you buy' },
  { icon: '🚚', title: 'Home Delivery', description: 'Contactless delivery to your doorstep' },
]

const ServicesPreview = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/red car.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 "></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <SectionHeading
          title="Premium Services"
          subtitle="Beyond just car sales – we offer complete automotive care"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-black/50 backdrop-blur-md p-6 rounded-xl text-center border border-gray-700 hover:border-amber-400 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/services" className="btn-outline inline-block">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview