'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Car {
  name: string
  price: string
  year: number
  mileage: string
  fuel: string
  engine: string
  horsepower: string
  acceleration: string
  topSpeed: string
  image: string
  category: string
  brand: string
  priceValue: number
}

const allCars: Car[] = [
  { 
    name: 'Lamborghini Aventador', price: '$599,990', year: 2023, mileage: '1,200 mi', 
    fuel: 'V12', engine: '6.5L V12', horsepower: '769 HP', acceleration: '2.9 sec', topSpeed: '217 mph',
    image: '/images/lamborghini.jpg', category: 'exotic', brand: 'lamborghini', priceValue: 599990 
  },
  { 
    name: 'Ferrari SF90 Stradale', price: '$524,815', year: 2023, mileage: '850 mi', 
    fuel: 'Hybrid V8', engine: '4.0L V8 Hybrid', horsepower: '986 HP', acceleration: '2.5 sec', topSpeed: '211 mph',
    image: '/images/ferrari.jpg', category: 'exotic', brand: 'ferrari', priceValue: 524815 
  },
  { 
    name: 'Porsche 911 Turbo S', price: '$203,500', year: 2024, mileage: '50 mi', 
    fuel: 'Flat-6', engine: '3.8L Flat-6', horsepower: '640 HP', acceleration: '2.6 sec', topSpeed: '205 mph',
    image: '/images/porsche.jpg', category: 'sports', brand: 'porsche', priceValue: 203500 
  },
  { 
    name: 'Mercedes-AMG GT', price: '$163,900', year: 2023, mileage: '2,300 mi', 
    fuel: 'V8', engine: '4.0L V8', horsepower: '577 HP', acceleration: '3.1 sec', topSpeed: '195 mph',
    image: '/images/mercedes.jpg', category: 'sports', brand: 'mercedes', priceValue: 163900 
  },
  { 
    name: 'BMW M8 Competition', price: '$130,000', year: 2024, mileage: '100 mi', 
    fuel: 'V8', engine: '4.4L V8', horsepower: '617 HP', acceleration: '3.0 sec', topSpeed: '190 mph',
    image: '/images/bmw.jpg', category: 'luxury', brand: 'bmw', priceValue: 130000 
  },
  { 
    name: 'Audi R8', price: '$158,600', year: 2023, mileage: '1,500 mi', 
    fuel: 'V10', engine: '5.2L V10', horsepower: '602 HP', acceleration: '3.2 sec', topSpeed: '205 mph',
    image: '/images/audi.jpg', category: 'sports', brand: 'audi', priceValue: 158600 
  },
  { 
    name: 'Rolls Royce Phantom', price: '$450,000', year: 2024, mileage: '0 mi', 
    fuel: 'V12', engine: '6.75L V12', horsepower: '563 HP', acceleration: '5.3 sec', topSpeed: '155 mph',
    image: '/images/rolls-royce.jpg', category: 'luxury', brand: 'rollsroyce', priceValue: 450000 
  },
  { 
    name: 'McLaren 720S', price: '$299,000', year: 2023, mileage: '3,200 mi', 
    fuel: 'V8', engine: '4.0L V8', horsepower: '710 HP', acceleration: '2.7 sec', topSpeed: '212 mph',
    image: '/images/mclaren.avif', category: 'exotic', brand: 'mclaren', priceValue: 299000 
  },
]

interface CarGridProps {
  filters: any
  searchTerm: string
}

const CarGrid: React.FC<CarGridProps> = ({ filters, searchTerm }) => {
  const [compareList, setCompareList] = useState<string[]>([])

  const filteredCars = allCars.filter(car => {
    if (filters.category && car.category !== filters.category) return false
    if (filters.brand && car.brand !== filters.brand) return false
    if (filters.price) {
      const [min, max] = filters.price.split('-')
      if (max === '500000+') {
        if (car.priceValue < 500000) return false
      } else {
        if (car.priceValue < parseInt(min) || car.priceValue > parseInt(max)) return false
      }
    }
    if (searchTerm && !car.name.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  const addToCompare = (carName: string) => {
    if (compareList.includes(carName)) {
      setCompareList(compareList.filter(c => c !== carName))
    } else if (compareList.length < 2) {
      setCompareList([...compareList, carName])
    } else {
      alert('You can compare up to 2 cars at a time!')
    }
  }

  return (
    <div>
      {/* Compare Bar */}
      <AnimatePresence>
        {compareList.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 bg-amber-500/10 rounded-lg border border-amber-400/30 flex justify-between items-center flex-wrap gap-3"
          >
            <p className="text-amber-400">
              🔄 Compare: <span className="font-bold">{compareList.join(' vs ')}</span>
            </p>
            <Link 
              href={`/compare?cars=${compareList.join(',')}`}
              className="px-4 py-1 bg-amber-500 hover:bg-amber-600 text-black text-sm font-semibold rounded-lg transition-all"
            >
              Compare Now →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Count */}
      <div className="mb-4 text-gray-400 text-sm">
        Found {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'}
      </div>

      {/* Cars Grid */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400 transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden bg-gray-800">
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
                <p className="text-amber-400 text-lg font-semibold mb-2">{car.price}</p>
                <div className="flex justify-between text-gray-400 text-xs mb-3">
                  <span> {car.mileage}</span>
                  <span> {car.fuel}</span>
                  <span> {car.horsepower}</span>
                </div>
                <div className="flex gap-2">
                  <Link 
                    href="/contact" 
                    className="flex-1 py-2 bg-gray-800 hover:bg-amber-500 text-white hover:text-black font-semibold rounded-lg transition-all duration-300 text-center text-sm"
                  >
                    Inquire
                  </Link>
                  <button 
                    onClick={() => addToCompare(car.name)}
                    className={`px-3 py-2 rounded-lg transition-all text-sm ${
                      compareList.includes(car.name) 
                        ? 'bg-amber-500 text-black' 
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    🔄
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-900 rounded-xl">
          <p className="text-gray-400 text-lg">No cars found matching your criteria.</p>
          <p className="text-gray-500 text-sm mt-2">Try adjusting your filters or search term.</p>
        </div>
      )}
    </div>
  )
}

export default CarGrid