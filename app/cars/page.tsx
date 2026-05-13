'use client'

import { useState } from 'react'

import CarHero from '@/components/sections/cars/CarHero'
import CarFilter from '@/components/sections/cars/CarFilter'
import CarGrid from '@/components/sections/cars/CarGrid'
import PopularCars from '@/components/sections/cars/PopularCars'
import CarTestimonials from '@/components/sections/cars/CarTestimonials'
import ChatSupport from '@/components/ChatSupport'
import BackToTop from '@/components/BackToTop'

export default function CarsPage() {
  const [filters, setFilters] = useState({ category: '', price: '', brand: '' })
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      
      <main>
        <CarHero />
        <section className="py-12">
          <div className="container mx-auto px-4">
            <CarFilter onFilterChange={setFilters} onSearchChange={setSearchTerm} />
            <CarGrid filters={filters} searchTerm={searchTerm} />
          </div>
        </section>
        <PopularCars />
        <CarTestimonials />
      </main>
      <ChatSupport />
      <BackToTop />
    </>
  )
}