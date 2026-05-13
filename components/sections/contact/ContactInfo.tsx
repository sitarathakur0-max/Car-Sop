'use client'

import { motion } from 'framer-motion'

const contactDetails = [
  {
    icon: '📍',
    title: 'Visit Us',
    info: '123 Luxury Avenue, Beverly Hills, CA 90210',
    detail: 'Open Monday - Saturday'
  },
  {
    icon: '📞',
    title: 'Call Us',
    info: '+1 (555) 123-4567',
    detail: '24/7 Customer Support'
  },
  {
    icon: '✉️',
    title: 'Email Us',
    info: 'info@luxeauto.com',
    detail: 'support@luxeauto.com'
  },
  {
    icon: '⏰',
    title: 'Business Hours',
    info: 'Mon - Sat: 9AM - 8PM',
    detail: 'Sunday: Closed'
  },
]

const ContactInfo = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-amber-500 transition-all duration-300 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{detail.icon}</div>
              <h3 className="font-bold text-white mb-2">{detail.title}</h3>
              <p className="text-amber-400 text-sm font-medium">{detail.info}</p>
              <p className="text-gray-500 text-xs mt-1">{detail.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo