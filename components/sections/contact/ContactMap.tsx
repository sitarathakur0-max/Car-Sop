'use client'

import { motion } from 'framer-motion'

const ContactMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 h-full"
    >
      <h3 className="text-2xl font-bold text-white mb-4">Find Us</h3>
      <p className="text-gray-400 text-sm mb-4">Visit our showroom in Beverly Hills</p>
      
      <div className="rounded-lg overflow-hidden h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.547248675187!2d-118.400682!3d34.073540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
      
      <div className="mt-4 flex items-center gap-2 text-gray-400 text-xs">
        <span>📍</span>
        <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
      </div>
    </motion.div>
  )
}

export default ContactMap