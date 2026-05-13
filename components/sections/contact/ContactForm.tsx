'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-800"
    >
      <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
      <p className="text-gray-400 text-sm mb-6">Fill out the form and we'll get back to you soon.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us about your dream car..."
            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white transition-colors resize-none"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all transform hover:scale-105"
        >
          Send Message
        </button>
        
        {submitted && (
          <p className="text-green-500 text-center text-sm mt-3">
            ✓ Message sent successfully!
          </p>
        )}
      </form>
    </motion.div>
  )
}

export default ContactForm