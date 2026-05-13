'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    id: 1,
    category: 'general',
    question: 'What types of cars do you offer?',
    answer: 'We offer a wide range of luxury and exotic vehicles including Lamborghini, Ferrari, Porsche, Mercedes-Benz, BMW, Audi, Rolls Royce, and McLaren. Both new and pre-owned vehicles are available.'
  },
  {
    id: 2,
    category: 'general',
    question: 'Where is your showroom located?',
    answer: 'Our main showroom is located at 123 Luxury Avenue, Beverly Hills, CA 90210. We also have a secondary location in Downtown Los Angeles.'
  },
  {
    id: 3,
    category: 'cars',
    question: 'Can I book a test drive online?',
    answer: 'Yes! You can schedule a test drive through our contact form or by calling us directly. We offer both on-site and virtual test drives.'
  },
  {
    id: 4,
    category: 'cars',
    question: 'Do you offer certified pre-owned vehicles?',
    answer: 'Absolutely. All our pre-owned vehicles undergo a rigorous 150-point inspection and come with a comprehensive warranty.'
  },
  {
    id: 5,
    category: 'services',
    question: 'Do you provide car maintenance services?',
    answer: 'Yes, we offer complete maintenance services including oil changes, tire rotations, brake service, engine diagnostics, and performance tuning.'
  },
  {
    id: 6,
    category: 'services',
    question: 'Do you provide car wash and detailing?',
    answer: 'Yes, we offer professional detailing services including ceramic coating, paint protection film, interior deep cleaning, and exterior polishing.'
  },
  {
    id: 7,
    category: 'services',
    question: 'Where is your service center located?',
    answer: 'Our service center is located at the same address as our showroom: 123 Luxury Avenue, Beverly Hills, CA 90210.'
  },
  {
    id: 8,
    category: 'payments',
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer flexible financing options tailored to your needs. We work with multiple lenders to get you the best rates.'
  },
  {
    id: 9,
    category: 'payments',
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, certified checks, credit cards, and financing through our partner lenders.'
  },
  {
    id: 10,
    category: 'payments',
    question: 'Do you offer trade-in options?',
    answer: 'Yes, we accept trade-ins and offer competitive valuations for your current vehicle.'
  },
]

interface FAQAccordionProps {
  category: string
}

const FAQAccordion = ({ category }: FAQAccordionProps) => {
  const [openId, setOpenId] = useState<number | null>(null)

  const filteredFaqs = category === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === category)

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {filteredFaqs.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden"
        >
          <button
            onClick={() => toggleAccordion(faq.id)}
            className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-800/50 transition-colors"
          >
            <span className="text-white font-medium">{faq.question}</span>
            <motion.span
              animate={{ rotate: openId === faq.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-amber-400 text-xl"
            >
              ▼
            </motion.span>
          </button>
          
          <AnimatePresence>
            {openId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-5 pt-0 text-gray-400 text-sm border-t border-gray-800">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      
      {filteredFaqs.length === 0 && (
        <div className="text-center py-12 bg-gray-900/50 rounded-xl">
          <p className="text-gray-400">No questions found in this category.</p>
        </div>
      )}
    </div>
  )
}

export default FAQAccordion