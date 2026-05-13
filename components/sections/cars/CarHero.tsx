'use client'

import { motion } from 'framer-motion'

const CarHero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden min-h-[500px] flex items-center justify-center">
      {/* Video Background with Poster Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/bmw.jpg"   // ✅ Poster image yahan se lega
          className="w-full h-full object-cover"
        >
          <source 
            src="/videos/car look.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Premium <span className="gradient-text">Collection</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the finest luxury and exotic cars from around the world. 
            Each vehicle is handpicked for perfection.
          </p>
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-sm text-amber-400 rounded-full text-sm border border-amber-400/30">
               Sports Cars
            </span>
            <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-sm text-amber-400 rounded-full text-sm border border-amber-400/30">
               Luxury Sedans
            </span>
            <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-sm text-amber-400 rounded-full text-sm border border-amber-400/30">
               SUVs
            </span>
            <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-sm text-amber-400 rounded-full text-sm border border-amber-400/30">
              Exotic
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CarHero