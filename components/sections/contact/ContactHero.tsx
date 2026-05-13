'use client'

import { motion } from 'framer-motion'

const ContactHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-[400px] flex items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                >
                    <source src="/videos/contact.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/45"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block mb-4"
                    >
                        <span className="text-amber-400 text-sm uppercase tracking-wider border border-amber-400/50 px-3 py-1 rounded-full">
                            Contact Us
                        </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h1>

                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        We are here to help you find your perfect car. Reach out to us anytime.
                    </p>
                </motion.div>
            </div>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 0.8, repeat: Infinity, duration: 1.5 }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-amber-400 rounded-full mt-2"></div>
                </div>
            </motion.button>
        </section>
    )
}

export default ContactHero