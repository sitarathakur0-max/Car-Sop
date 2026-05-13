'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'

const popularCars = [
  { name: 'Tesla Model S Plaid', price: '$89,990', image: '/images/tesla-model.jpg', sold: 245, tag: 'Best Seller' },
  { name: 'Porsche Taycan', price: '$86,700', image: '/images/porsche.jpg', sold: 189, tag: 'Popular' },
  { name: 'Lamborghini Urus', price: '$218,000', image: '/images/lamborghini.jpg', sold: 156, tag: 'Trending' },
]

const PopularCars = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Most Popular Cars"
          subtitle="Our best-selling vehicles this month"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularCars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image 
                src={car.image} 
                alt={car.name} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                    {car.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{car.name}</h3>
                <p className="text-amber-400 text-xl font-semibold">{car.price}</p>
                <p className="text-gray-300 text-sm mb-4">{car.sold}+ sold this month</p>
                <Link 
                  href="/contact" 
                  className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-amber-500 text-white hover:text-black rounded-lg transition-all text-center"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularCars