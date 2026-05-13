'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface CarFilterProps {
  onFilterChange: (filters: any) => void
  onSearchChange: (search: string) => void
}

const CarFilter: React.FC<CarFilterProps> = ({ onFilterChange, onSearchChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    brand: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilters = { ...filters, [e.target.name]: e.target.value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
  }

  const clearFilters = () => {
    setFilters({ category: '', price: '', brand: '' })
    onFilterChange({ category: '', price: '', brand: '' })
    onSearchChange('')
    const searchInput = document.getElementById('search-input') as HTMLInputElement
    if (searchInput) searchInput.value = ''
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-xl p-6 mb-8 border border-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search Input */}
        <input
          id="search-input"
          type="text"
          placeholder="🔍 Search cars by name..."
          onChange={handleSearch}
          className="px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white placeholder-gray-500"
        />
        
        {/* Category Filter */}
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white"
        >
          <option value="">All Categories</option>
          <option value="sports">🏎️ Sports Cars</option>
          <option value="luxury">👑 Luxury Sedans</option>
          <option value="suv">🚙 SUVs</option>
          <option value="exotic">⚡ Exotic Cars</option>
        </select>

        {/* Price Filter */}
        <select
          name="price"
          value={filters.price}
          onChange={handleChange}
          className="px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white"
        >
          <option value="">All Prices</option>
          <option value="0-100000">Under $100k</option>
          <option value="100000-200000">$100k - $200k</option>
          <option value="200000-500000">$200k - $500k</option>
          <option value="500000+">$500k+</option>
        </select>

        {/* Brand Filter */}
        <select
          name="brand"
          value={filters.brand}
          onChange={handleChange}
          className="px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white"
        >
          <option value="">All Brands</option>
          <option value="lamborghini">Lamborghini</option>
          <option value="ferrari">Ferrari</option>
          <option value="porsche">Porsche</option>
          <option value="mercedes">Mercedes</option>
          <option value="bmw">BMW</option>
          <option value="audi">Audi</option>
          <option value="rollsroyce">Rolls Royce</option>
          <option value="mclaren">McLaren</option>
        </select>
      </div>

      {/* Clear Filters Button */}
      {(filters.category || filters.price || filters.brand) && (
        <div className="mt-4 text-center">
          <button
            onClick={clearFilters}
            className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
          >
            Clear all filters ✕
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default CarFilter