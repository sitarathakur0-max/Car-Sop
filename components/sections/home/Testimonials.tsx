'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'CEO, Tech Corp',
    text: 'Absolutely incredible experience. The team at LuxeAuto made my dream of owning a Ferrari a reality. Professional, transparent, and truly passionate about cars.',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Entrepreneur',
    text: 'Best car buying experience I\'ve ever had. The attention to detail and customer service is unmatched. My new Porsche is perfect!',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    role: 'Professional Racer',
    text: 'I\'ve purchased multiple vehicles from LuxeAuto. Their inventory is top-tier and the maintenance service keeps my cars in pristine condition.',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by luxury car enthusiasts worldwide"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 neon-card"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-xl">
                  {testimonial.name[0]}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
              <div className="mt-4 text-amber-400">
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials