'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const services = [
  { 
    id: 1,
    title: 'Premium Maintenance', 
    description: 'Expert service by certified technicians using genuine parts',
    price: 'From $199',
    features: ['Oil Change', 'Engine Diagnostic', 'Brake Service', 'Battery Check']
  },
  { 
    id: 2,
    title: 'Ceramic Coating', 
    description: 'Professional nano ceramic coating for ultimate protection',
    price: 'From $1,499',
    features: ['9H Hardness', 'UV Protection', 'Hydrophobic', '5 Year Warranty']
  },
  { 
    id: 3,
    title: 'Performance Tuning', 
    description: 'ECU remapping and performance upgrades',
    price: 'From $799',
    features: ['+50-100 HP', 'Better Throttle', 'Fuel Efficiency', 'Custom Maps']
  },
  { 
    id: 4,
    title: 'PPF Installation', 
    description: 'Paint Protection Film for ultimate paint protection',
    price: 'From $2,999',
    features: ['Self Healing', 'Scratch Resistant', 'UV Protection', '10 Year Warranty']
  },
  { 
    id: 5,
    title: 'Custom Detailing', 
    description: 'Complete interior and exterior detailing',
    price: 'From $399',
    features: ['Paint Correction', 'Interior Deep Clean', 'Engine Bay', 'Headlight Restoration']
  },
  { 
    id: 6,
    title: 'Customization', 
    description: 'Exterior wraps, interior upgrades, and modifications',
    price: 'Call for quote',
    features: ['Vinyl Wraps', 'Custom Interiors', 'Wheel Upgrades', 'Body Kits']
  },
]

const ServiceFeatures = () => {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive automotive solutions tailored for luxury vehicles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setActiveId(service.id)}
              onHoverEnd={() => setActiveId(null)}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-amber-500 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-6">
                {/* Service Number Instead of Icon */}
                <div className="text-4xl font-bold text-amber-400/30 mb-4 group-hover:text-amber-400/60 transition-colors duration-300">
                  {String(service.id).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                <p className="text-amber-400 font-semibold text-lg">{service.price}</p>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeId === service.id ? 'auto' : 0,
                    opacity: activeId === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3"
                >
                  <div className="pt-3 border-t border-gray-700">
                    <p className="text-gray-500 text-xs mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceFeatures