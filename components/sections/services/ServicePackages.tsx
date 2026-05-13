'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const packages = [
  {
    name: 'Essential',
    price: '99',
    period: '/month',
    features: ['Oil Change', 'Tire Rotation', 'Basic Inspection', '24/7 Support'],
    popular: false,
  },
  {
    name: 'Premium',
    price: '299',
    period: '/month',
    features: ['All Essential Features', 'Full Service', 'Detailing', 'Priority Support', 'Free Pickup'],
    popular: true,
  },
  {
    name: 'Ultimate',
    price: '599',
    period: '/month',
    features: ['All Premium Features', 'Performance Tuning', 'Ceramic Coating', 'Dedicated Manager', 'Loaner Car'],
    popular: false,
  },
]

const ServicePackages = () => {
  const [billingYearly, setBillingYearly] = useState(false)

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Service <span className="gradient-text">Packages</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full"></div>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className={`text-sm ${!billingYearly ? 'text-amber-400' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setBillingYearly(!billingYearly)}
              className={`w-12 h-6 rounded-full transition-colors duration-300 ${billingYearly ? 'bg-amber-500' : 'bg-gray-700'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${billingYearly ? 'translate-x-6' : 'translate-x-1'}`}></div>
            </button>
            <span className={`text-sm ${billingYearly ? 'text-amber-400' : 'text-gray-400'}`}>
              Yearly <span className="text-green-500 text-xs">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-xl overflow-hidden border transition-all duration-300 ${
                pkg.popular 
                  ? 'border-amber-500 shadow-lg shadow-amber-500/20 scale-105' 
                  : 'border-gray-800'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-4 py-1 rounded-bl-lg">POPULAR</div>
              )}
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-amber-400">${billingYearly ? Math.floor(parseInt(pkg.price) * 12 * 0.8) : pkg.price}</span>
                  <span className="text-gray-400 text-sm">{pkg.period}</span>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="text-amber-400">◆</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`block w-full py-2 text-center rounded-lg font-semibold transition-all ${
                    pkg.popular 
                      ? 'bg-amber-500 hover:bg-amber-600 text-black' 
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicePackages