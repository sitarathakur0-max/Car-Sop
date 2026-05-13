'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const achievements = [
  { label: 'Cars Sold', value: 500, suffix: '+', icon: '🚗' },
  { label: 'Happy Clients', value: 300, suffix: '+', icon: '😊' },
  { label: 'Years Experience', value: 5, suffix: '+', icon: '🏆' },
  { label: 'Luxury Brands', value: 15, suffix: '+', icon: '⭐' },
]

const Counter = ({ target, label, suffix, icon }: { target: number; label: string; suffix: string; icon: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-amber-500 transition-all duration-300 group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">{count}{suffix}</div>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  )
}

const Achievements = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-400 text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            By the <span className="gradient-text">Numbers</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            The numbers that speak for our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <Counter
              key={index}
              target={item.value}
              label={item.label}
              suffix={item.suffix}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements