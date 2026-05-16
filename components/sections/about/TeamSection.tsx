'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'John Anderson',
    role: 'CEO & Founder',
    image: '/images/Ceo.jpg',
    bio: '20+ years in luxury automotive'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Sales Director',
    image: '/images/Sales Director.jpg',
    bio: 'Exotic car specialist'
  },
  {
    name: 'Michael Chen',
    role: 'Head Mechanic',
    image: '/images/Head.jpg',
    bio: 'Certified master technician' 
  },
  {
    name: 'Emily Rodriguez',
    role: 'Customer Relations',
    image: '/images/Customer relation.jpg',
    bio: 'Client experience expert'
  },
]

const TeamSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-400 text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Passionate professionals dedicated to your luxury car experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-amber-500 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-amber-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection