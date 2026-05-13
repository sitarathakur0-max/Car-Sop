'use client'

import { motion } from 'framer-motion'

const benefits = [
  { title: 'Certified Technicians', desc: 'Factory-trained and certified experts', stat: '50+' },
  { title: 'Genuine Parts', desc: '100% authentic manufacturer parts', stat: '100%' },
  { title: 'Happy Customers', desc: 'Trusted by luxury car owners', stat: '5,000+' },
  { title: 'Years of Excellence', desc: 'Serving since 2012', stat: '12+' },
]

const ServiceBenefits = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-amber-500 transition-all duration-300 group"
            >
              <div className="text-2xl font-bold text-amber-400 mb-1">{benefit.stat}</div>
              <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceBenefits