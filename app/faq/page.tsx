'use client'

import { useState } from 'react'
import FAQHero from '@/components/sections/faq/FAQHero'
import CategoryFilter from '@/components/sections/faq/CategoryFilter'
import FAQAccordion from '@/components/sections/faq/FAQAccordion'
import PopularQuestions from '@/components/sections/faq/PopularQuestions'
import ContactSupport from '@/components/sections/faq/ContactSupport'
import ChatSupport from '@/components/ChatSupport'
import BackToTop from '@/components/BackToTop'

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <>
      <main>
        <FAQHero />
        
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <CategoryFilter 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
            <FAQAccordion category={activeCategory} />
          </div>
        </section>
        
        <PopularQuestions />
        <ContactSupport />
      </main>
      <ChatSupport />
      <BackToTop />
    </>
  )
}