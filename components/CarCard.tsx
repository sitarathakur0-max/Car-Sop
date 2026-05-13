'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CarCardProps {
  name: string
  price: string
  year: number
  mileage: string
  fuel: string
  image: string
  onCompare?: () => void
}

const CarCard: React.FC<CarCardProps> = ({ name, price, year, mileage, fuel, image, onCompare }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 neon-card cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">
          {year}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-amber-400 text-lg font-semibold mb-3">{price}</p>
        <div className="flex justify-between text-gray-400 text-sm mb-4">
          <span>{mileage}</span>
          <span>{fuel}</span>
        </div>
        <div className="flex gap-2">
          <Link href="/contact" className="flex-1 py-2 bg-gray-800 hover:bg-amber-500 text-white hover:text-black font-semibold rounded-lg transition-all duration-300 text-center">
            Inquire
          </Link>
          {onCompare && (
            <button 
              onClick={onCompare}
              className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all"
            >
              🔄
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default CarCard