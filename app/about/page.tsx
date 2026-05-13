'use client'

import AboutHero from '@/components/sections/about/AboutHero'
import CompanyStory from '@/components/sections/about/CompanyStory'
import TeamSection from '@/components/sections/about/TeamSection'
import Achievements from '@/components/sections/about/Achievements'
import Testimonials from '@/components/sections/about/Testimonials'
import AboutCTA from '@/components/sections/about/AboutCTA'
import ChatSupport from '@/components/ChatSupport'
import BackToTop from '@/components/BackToTop'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      
      <main>
        <AboutHero />
        <CompanyStory />
        <Achievements />
        <TeamSection />
        <Testimonials />
        <AboutCTA />
      </main>
      <ChatSupport />
      <BackToTop />
    </>
  )
}