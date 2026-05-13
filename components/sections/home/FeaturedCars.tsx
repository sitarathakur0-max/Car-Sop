'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'

const featuredCars = [
  {
    name: 'Lamborghini Aventador',
    price: '$599,990',
    year: 2023,
    mileage: '1,200 mi',
    fuel: 'V12',
    image: '/images/lamborghini.jpg',
  },
  {
    name: 'Ferrari SF90 Stradale',
    price: '$524,815',
    year: 2023,
    mileage: '850 mi',
    fuel: 'Hybrid V8',
    image: '/images/ferrari.jpg',
  },
  {
    name: 'Porsche 911 Turbo S',
    price: '$203,500',
    year: 2024,
    mileage: '50 mi',
    fuel: 'Flat-6',
    image: '/images/porsche.jpg',
  },
  {
    name: 'Mercedes-AMG GT',
    price: '$163,900',
    year: 2023,
    mileage: '2,300 mi',
    fuel: 'V8',
    image: '/images/mercedes.jpg',
  },
]

const FeaturedCars = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Featured Vehicles"
          subtitle="Discover our handpicked selection of premium luxury cars"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 neon-card cursor-pointer"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded z-10">
                  {car.year}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-1">{car.name}</h3>
                <p className="text-amber-400 text-lg font-semibold mb-3">{car.price}</p>
                <div className="flex justify-between text-gray-400 text-sm mb-4">
                  <span>{car.mileage}</span>
                  <span>{car.fuel}</span>
                </div>
                <Link 
                  href="/cars" 
                  className="block w-full py-2 bg-gray-800 hover:bg-amber-500 text-white hover:text-black font-semibold rounded-lg transition-all duration-300 text-center"
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

export default FeaturedCars