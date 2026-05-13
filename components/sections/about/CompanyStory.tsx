'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const CompanyStory = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Side - Instead of Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden group"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                poster="https://images.unsplash.com/photo-1568605117036-5fe5e7fa0ac7?w=800"
              >
                <source src="/videos/about drive.mp4" type="video/mp4" />
              </video>
              
              {/* Play Button Overlay (Optional) */}
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Video Badge */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-amber-400">
              🎬 Watch Our Story
            </div>
            
            {/* Decorative Border */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-amber-500/30 rounded-xl -z-10"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <span className="text-amber-400 text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Where Luxury Meets <span className="gradient-text">Excellence</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 rounded-full"></div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Founded in 2018, LuxeAuto began with a simple mission: to provide car enthusiasts 
              with access to the world's finest luxury vehicles. What started as a small showroom 
              has grown into a premier destination for exotic car sales, service, and customization.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Our team brings together decades of experience in the automotive industry, 
              combining passion with expertise to deliver an unparalleled customer experience. 
              We believe that buying a luxury car should be as extraordinary as the vehicle itself.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <span className="text-amber-400 text-xl">✓</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Mission</p>
                  <p className="text-gray-400 text-sm">Deliver excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400 text-xl">✓</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Vision</p>
                  <p className="text-gray-400 text-sm">Global luxury leader</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory