'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    question: 'How can I schedule a test drive?',
    answer: 'You can schedule a test drive by filling out our contact form or calling us directly at +1 (555) 123-4567.'
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer flexible financing options tailored to your needs. Contact our finance department for details.'
  },
  {
    question: 'Can I trade in my current vehicle?',
    answer: 'Absolutely! We accept trade-ins and offer competitive valuations for your current vehicle.'
  },
  {
    question: 'Do you provide vehicle delivery?',
    answer: 'Yes, we offer contactless home delivery for all our vehicles within 50 miles.'
  },
]

const FAQPreview = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 text-sm mt-3">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 text-left bg-gray-800/50 hover:bg-gray-800 transition-colors"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <span className="text-amber-400 text-xl">{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-400 text-sm border-t border-gray-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Link href="/faq" className="text-amber-400 hover:text-amber-300 text-sm transition-colors inline-flex items-center gap-1">
              View All FAQs
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQPreview