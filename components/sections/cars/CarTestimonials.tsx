'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const carTestimonials = [
  { 
    name: 'James Wilson', 
    car: 'Lamborghini Aventador', 
    text: 'The buying process was seamless. The car arrived in perfect condition and the team was incredibly helpful. Highly recommend LuxeAuto!', 
    rating: 5,
    date: 'March 2024'
  },
  { 
    name: 'Emily Parker', 
    car: 'Porsche 911 Turbo S', 
    text: 'Absolutely love my new Porsche! The test drive experience was unforgettable. Professional staff and excellent service.', 
    rating: 5,
    date: 'February 2024'
  },
]

const CarTestimonials = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Customer Reviews" 
          subtitle="What our car buyers say about their experience" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {carTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-black p-6 rounded-xl border border-gray-800 hover:border-amber-400 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-xl">
                  {testimonial.name[0]}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-amber-400 text-sm">Drives: {testimonial.car}</p>
                </div>
              </div>
              <div className="text-amber-400 mb-3">
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="text-gray-300 italic mb-3">"{testimonial.text}"</p>
              <p className="text-gray-500 text-xs">{testimonial.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CarTestimonials