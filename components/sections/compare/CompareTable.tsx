'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface CompareTableProps {
  selectedCars: any[]
  onRemoveCar: (carId: number) => void
  maxCars: number
}

const CompareTable = ({ selectedCars, onRemoveCar, maxCars }: CompareTableProps) => {
  if (selectedCars.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-900/50 rounded-xl border border-gray-800">
        <div className="text-6xl mb-4">🚗</div>
        <h3 className="text-xl font-bold text-white mb-2">No Cars Selected</h3>
        <p className="text-gray-400">Select up to {maxCars} cars from above to compare them side by side</p>
      </div>
    )
  }

  // Find best values for highlighting
  const bestPrice = Math.min(...selectedCars.map(c => c.priceValue))
  const bestSpeed = Math.max(...selectedCars.map(c => parseInt(c.speed)))
  const bestMileage = Math.max(...selectedCars.map(c => parseInt(c.mileage)))

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Comparison Grid */}
        <div className="grid" style={{ gridTemplateColumns: `200px repeat(${selectedCars.length}, 1fr)` }}>
          {/* Header Row */}
          <div className="bg-gray-950 p-4 border border-gray-800 font-bold text-white">Car</div>
          {selectedCars.map((car) => (
            <div key={car.id} className="bg-gray-950 p-4 border border-gray-800 text-center relative group">
              <button
                onClick={() => onRemoveCar(car.id)}
                className="absolute top-2 right-2 w-6 h-6 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition-all"
              >
                ✕
              </button>
              <img src={car.image} alt={car.name} className="w-full h-32 object-cover rounded-lg mb-3" />
              <h3 className="font-bold text-white">{car.name}</h3>
              <p className="text-amber-400 text-sm">{car.price}</p>
            </div>
          ))}

          {/* Price Row */}
          <div className="bg-gray-900 p-4 border border-gray-800 font-medium text-white">Price</div>
          {selectedCars.map((car) => (
            <div key={car.id} className={`bg-gray-900 p-4 border border-gray-800 text-center ${car.priceValue === bestPrice ? 'bg-amber-500/10' : ''}`}>
              <span className={car.priceValue === bestPrice ? 'text-amber-400 font-bold' : 'text-gray-300'}>
                {car.price}
              </span>
              {car.priceValue === bestPrice && <span className="ml-2 text-xs text-amber-400">★ Best</span>}
            </div>
          ))}

          {/* Horsepower Row */}
          <div className="bg-gray-900 p-4 border border-gray-800 font-medium text-white">Horsepower</div>
          {selectedCars.map((car) => (
            <div key={car.id} className="bg-gray-900 p-4 border border-gray-800 text-center text-gray-300">
              {car.horsepower}
            </div>
          ))}

          {/* Top Speed Row */}
          <div className="bg-gray-900 p-4 border border-gray-800 font-medium text-white">Top Speed</div>
          {selectedCars.map((car) => (
            <div key={car.id} className={`bg-gray-900 p-4 border border-gray-800 text-center ${parseInt(car.speed) === bestSpeed ? 'bg-amber-500/10' : ''}`}>
              <span className={parseInt(car.speed) === bestSpeed ? 'text-amber-400 font-bold' : 'text-gray-300'}>
                {car.speed}
              </span>
              {parseInt(car.speed) === bestSpeed && <span className="ml-2 text-xs text-amber-400">★ Best</span>}
            </div>
          ))}

          {/* Acceleration Row */}
          <div className="bg-gray-900 p-4 border border-gray-800 font-medium text-white">0-60 mph</div>
          {selectedCars.map((car) => (
            <div key={car.id} className="bg-gray-900 p-4 border border-gray-800 text-center text-gray-300">
              {car.acceleration}
            </div>
          ))}

          {/* Fuel Type Row */}
          <div className="bg-gray-900 p-4 border border-gray-800 font-medium text-white">Fuel Type</div>
          {selectedCars.map((car) => (
            <div key={car.id} className="bg-gray-900 p-4 border border-gray-800 text-center text-gray-300">
              {car.fuel}
            </div>
          ))}

          {/* Mileage Row */}
          <div className="bg-gray-900 p-4 border border-gray-800 font-medium text-white">Mileage</div>
          {selectedCars.map((car) => (
            <div key={car.id} className={`bg-gray-900 p-4 border border-gray-800 text-center ${parseInt(car.mileage) === bestMileage ? 'bg-amber-500/10' : ''}`}>
              <span className={parseInt(car.mileage) === bestMileage ? 'text-amber-400 font-bold' : 'text-gray-300'}>
                {car.mileage}
              </span>
              {parseInt(car.mileage) === bestMileage && <span className="ml-2 text-xs text-amber-400">★ Best</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompareTable