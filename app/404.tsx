'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 bg-black pt-20">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter">
              <span className="gradient-text">4</span>
              <span className="text-amber-500 animate-glow inline-block">0</span>
              <span className="gradient-text">4</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-transparent mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Page Not Found
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* Animated Car */}
          <motion.div
            animate={{ x: [-40, 40, -40] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="my-8 text-6xl"
          >
            🚗💨
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="/" className="btn-primary inline-block">
              ← Back to Home
            </Link>
            <Link href="/cars" className="btn-outline inline-block">
              Browse Cars →
            </Link>
          </motion.div>

          {/* Suggested Pages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-500 text-sm mb-4">You might be looking for:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Home', 'Cars', 'Services', 'About', 'Contact', 'FAQ', 'Compare'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="px-4 py-2 bg-gray-900 hover:bg-amber-500/20 border border-gray-800 hover:border-amber-400 rounded-lg text-gray-400 hover:text-amber-400 text-sm transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Fun Fact */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-gray-600 text-xs"
          >
            💡 Did you know? Our collection includes over 50 exotic luxury vehicles!
          </motion.p>
        </div>
      </div>
      <Footer />
    </>
  )
}