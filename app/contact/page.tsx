'use client'


import ContactHero from '@/components/sections/contact/ContactHero'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactMap from '@/components/sections/contact/ContactMap'
import FAQPreview from '@/components/sections/contact/FAQPreview'
import ContactCTA from '@/components/sections/contact/ContactCTA'
import ChatSupport from '@/components/ChatSupport'
import BackToTop from '@/components/BackToTop'

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactHero />
        <ContactInfo />

        {/* Form and Map Side by Side */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ContactForm />
              <ContactMap />
            </div>
          </div>
        </section>

        <FAQPreview />
        <ContactCTA />
      </main>
      <ChatSupport />
      <BackToTop />
    </>
  )
}