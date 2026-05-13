'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Robert Johnson',
    role: 'CEO, Tech Corp',
    text: 'Absolutely incredible experience. The team at LuxeAuto made my dream of owning a Ferrari a reality. Professional, transparent, and truly passionate about cars.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/41.jpg'
  },
  {
    name: 'Jennifer Lee',
    role: 'Entrepreneur',
    text: 'Best car buying experience I\'ve ever had. The attention to detail and customer service is unmatched. My new Porsche is perfect!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/28.jpg'
  },
  {
    name: 'David Williams',
    role: 'Professional Racer',
    text: 'I\'ve purchased multiple vehicles from LuxeAuto. Their inventory is top-tier and the maintenance service keeps my cars in pristine condition.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/53.jpg'
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-400 text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Trusted by luxury car enthusiasts worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-amber-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-amber-400 mb-3">
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials