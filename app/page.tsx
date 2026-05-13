'use client'

import Hero from '@/components/sections/home/Hero'
import ServicesPreview from '@/components/sections/home/ServicesPreview'
import Testimonials from '@/components/sections/home/Testimonials'
import HomeCTA from '@/components/sections/home/HomeCTA'
import ChatSupport from '@/components/ChatSupport'
import BackToTop from '@/components/BackToTop'
import FeaturedCars from '@/components/sections/home/FeaturedCars'
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCars/>
      <ServicesPreview />
      <Testimonials />
      <HomeCTA />
       <ChatSupport/>
       <BackToTop/>
    </>
  )
}