'use client'

import { motion } from 'framer-motion'

const categories = [
  { id: 'all', name: 'All', icon: '📌' },
  { id: 'general', name: 'General', icon: 'ℹ️' },
  { id: 'cars', name: 'Cars', icon: '🚗' },
  { id: 'services', name: 'Services', icon: '🔧' },
  { id: 'payments', name: 'Payments', icon: '💰' },
]

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
            activeCategory === category.id
              ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </motion.button>
      ))}
    </div>
  )
}

export default CategoryFilter