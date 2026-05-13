'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const availableCars = [
  {
    id: 1,
    name: 'Lamborghini Aventador',
    price: '$599,990',
    priceValue: 599990,
    speed: '217 mph',
    fuel: 'V12',
    mileage: '12 mpg',
    image: '/images/lamborghini.jpg',
    horsepower: '769 HP',
    acceleration: '2.9 sec'
  },
  {
    id: 2,
    name: 'Ferrari SF90 Stradale',
    price: '$524,815',
    priceValue: 524815,
    speed: '211 mph',
    fuel: 'Hybrid V8',
    mileage: '18 mpg',
    image: '/images/ferrari.jpg',
    horsepower: '986 HP',
    acceleration: '2.5 sec'
  },
  {
    id: 3,
    name: 'Porsche 911 Turbo S',
    price: '$203,500',
    priceValue: 203500,
    speed: '205 mph',
    fuel: 'Flat-6',
    mileage: '18 mpg',
    image: '/images/porsche.jpg',
    horsepower: '640 HP',
    acceleration: '2.6 sec'
  },
  {
    id: 4,
    name: 'Mercedes-AMG GT',
    price: '$163,900',
    priceValue: 163900,
    speed: '195 mph',
    fuel: 'V8',
    mileage: '16 mpg',
    image: '/images/mercedes.jpg',
    horsepower: '577 HP',
    acceleration: '3.1 sec'
  },
  {
    id: 5,
    name: 'BMW M8 Competition',
    price: '$130,000',
    priceValue: 130000,
    speed: '190 mph',
    fuel: 'V8',
    mileage: '15 mpg',
    image: '/images/bmw.jpg',
    horsepower: '617 HP',
    acceleration: '3.0 sec'
  },
  {
    id: 6,
    name: 'Audi R8',
    price: '$158,600',
    priceValue: 158600,
    speed: '205 mph',
    fuel: 'V10',
    mileage: '14 mpg',
    image: '/images/audi.jpg',
    horsepower: '602 HP',
    acceleration: '3.2 sec'
  },
]

interface CarSelectorProps {
  selectedCars: any[]
  onAddCar: (car: any) => void
  onRemoveCar: (carId: number) => void
  maxCars: number
}

const CarSelector = ({ selectedCars, onAddCar, onRemoveCar, maxCars }: CarSelectorProps) => {
  const isCarSelected = (carId: number) => selectedCars.some(c => c.id === carId)
  const isMaxReached = selectedCars.length >= maxCars

  return (
    <div>
      <div className="mb-6 flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-2xl font-bold text-white">Available Cars</h2>
        <div className="text-sm text-gray-400">
          Selected: {selectedCars.length}/{maxCars} cars
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableCars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`bg-gray-900 rounded-xl overflow-hidden border transition-all duration-300 ${
              isCarSelected(car.id) 
                ? 'border-amber-500 shadow-lg shadow-amber-500/20' 
                : 'border-gray-800 hover:border-gray-600'
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {isCarSelected(car.id) && (
                <div className="absolute top-3 right-3 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">
                  Selected
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-1">{car.name}</h3>
              <p className="text-amber-400 text-lg font-semibold mb-3">{car.price}</p>
              <div className="flex justify-between text-gray-400 text-xs mb-4">
                <span>⚡ {car.horsepower}</span>
                <span>🏁 {car.speed}</span>
                <span>⛽ {car.fuel}</span>
              </div>
              
              {isCarSelected(car.id) ? (
                <button
                  onClick={() => onRemoveCar(car.id)}
                  className="w-full py-2 bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all"
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => onAddCar(car)}
                  disabled={isMaxReached && !isCarSelected(car.id)}
                  className={`w-full py-2 font-semibold rounded-lg transition-all ${
                    isMaxReached && !isCarSelected(car.id)
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-800 hover:bg-amber-500 text-white hover:text-black'
                  }`}
                >
                  {isMaxReached && !isCarSelected(car.id) ? 'Max Cars Selected' : 'Add to Compare'}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CarSelector