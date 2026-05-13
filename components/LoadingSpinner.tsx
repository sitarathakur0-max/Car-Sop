'use client'

import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[-100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full mx-auto mb-4"
        />
        <p className="text-amber-400 text-lg font-bold tracking-wider">LUXEAUTO</p>
      </div>
    </div>
  )
}

export default LoadingSpinner