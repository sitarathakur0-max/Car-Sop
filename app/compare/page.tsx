'use client'

import { useState } from 'react'
import CompareHero from '@/components/sections/compare/CompareHero'
import CarSelector from '@/components/sections/compare/CarSelector'
import CompareTable from '@/components/sections/compare/CompareTable'
import CompareCTA from '@/components/sections/compare/CompareCTA'
import ChatSupport from '@/components/ChatSupport'
import BackToTop from '@/components/BackToTop'

export default function ComparePage() {
  const [selectedCars, setSelectedCars] = useState<any[]>([])
  const MAX_CARS = 2

  const handleAddCar = (car: any) => {
    if (selectedCars.length < MAX_CARS && !selectedCars.some(c => c.id === car.id)) {
      setSelectedCars([...selectedCars, car])
    } else if (selectedCars.some(c => c.id === car.id)) {
      alert('This car is already in comparison')
    } else {
      alert(`You can compare up to ${MAX_CARS} cars at a time`)
    }
  }

  const handleRemoveCar = (carId: number) => {
    setSelectedCars(selectedCars.filter(c => c.id !== carId))
  }

  return (
    <>
    
      <main>
        <CompareHero />
        
        {/* Car Selection Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <CarSelector 
              selectedCars={selectedCars}
              onAddCar={handleAddCar}
              onRemoveCar={handleRemoveCar}
              maxCars={MAX_CARS}
            />
          </div>
        </section>

        {/* Compare Section */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Comparison</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full"></div>
              <p className="text-gray-400 mt-3">Side by side comparison of selected vehicles</p>
            </div>
            
            <CompareTable 
              selectedCars={selectedCars}
              onRemoveCar={handleRemoveCar}
              maxCars={MAX_CARS}
            />
          </div>
        </section>

        <CompareCTA />
      </main>
    
      <ChatSupport />
      <BackToTop />
    </>
  )
}