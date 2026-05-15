// 'use client'

// import { motion } from 'framer-motion'

// const steps = [
//   { 
//     number: '01', 
//     title: 'Car Wash Center', 
//     description: 'Schedule your service online or call us',
//     video: '/videos/service showroom.mp4' // Replace with your video path
//   },
//   { 
//     number: '02', 
//     title: 'Free Inspection', 
//     description: 'Comprehensive vehicle diagnostic',
//     video: '/videos/service inspection.mp4' // Replace with your video path
//   },
//   { 
//     number: '03', 
//     title: 'Recover Your Car', 
//     description: 'Transparent pricing with no hidden fees',
//     video: '/videos/service check.mp4' // Replace with your video path
//   },
//   { 
//     number: '04', 
//     title: 'Service Done', 
//     description: 'Quality work with warranty',
//     video: '/videos/service Tire.mp4' // Replace with your video path
//   },
// ]

// const ServiceProcess = () => {
//   return (
//     <section className="py-20 relative overflow-hidden bg-black">
//       <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-transparent to-transparent"></div>
      
//       <div className="relative z-10 container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
//             How It <span className="gradient-text">Works</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full"></div>
//           <p className="text-gray-400 mt-4">Simple 4-step process to get your car serviced</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="relative group"
//             >
//               {index < steps.length - 1 && (
//                 <div className="hidden lg:block absolute top-32 left-1/2 w-full h-px bg-gradient-to-r from-amber-500/50 to-cyan-500/50"></div>
//               )}
              
//               {/* Video Background Box - Increased Height */}
//               <div className="relative h-[320px] w-full rounded-xl overflow-hidden border border-gray-800 group-hover:border-amber-500 transition-all duration-300">
//                 {/* Background Video */}
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="absolute inset-0 w-full h-full object-cover"
//                 >
//                   <source src={step.video} type="video/mp4" />
//                 </video>
                
//                 {/* Dark Overlay for better text visibility */}
//                 <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                
//                 {/* Content */}
//                 <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
//                   <div className="text-5xl font-bold text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
//                     {step.number}
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm max-w-[200px] mx-auto">{step.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServiceProcess












'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  { 
    number: '01', 
    title: 'Car Wash Center', 
    description: 'Schedule your service online or call us',
    image: '/images/service-showroom.jpg'
  },
  { 
    number: '02', 
    title: 'Free Inspection', 
    description: 'Comprehensive vehicle diagnostic',
    image: '/images/service-inspection.jpg'
  },
  { 
    number: '03', 
    title: 'Recover Your Car', 
    description: 'Transparent pricing with no hidden fees',
    image: '/images/service-check.jpg'
  },
  { 
    number: '04', 
    title: 'Service Done', 
    description: 'Quality work with warranty',
    image: '/images/service-tire.jpg'
  },
]

const ServiceProcess = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-transparent to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            How It <span className="gradient-text">Works</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">Simple 4-step process to get your car serviced</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-32 left-1/2 w-full h-px bg-gradient-to-r from-amber-500/50 to-cyan-500/50"></div>
              )}
              
              {/* Image Background Box */}
              <div className="relative h-[320px] w-full rounded-xl overflow-hidden border border-gray-800 group-hover:border-amber-500 transition-all duration-300">
                {/* Background Image */}
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="text-5xl font-bold text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm max-w-[200px] mx-auto">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess