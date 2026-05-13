'use client'
import ServiceHero from '@/components/sections/services/ServiceHero'
import ServiceFeatures from '@/components/sections/services/ServiceFeatures'
import ServiceProcess from '@/components/sections/services/ServiceProcess'
import ServicePackages from '@/components/sections/services/ServicePackages'
import ServiceBenefits from '@/components/sections/services/ServiceBenefits'
import ServiceCTA from '@/components/sections/services/ServiceCTA'
import ChatSupport from '@/components/ChatSupport'
import BackToTop from '@/components/BackToTop'

export default function ServicesPage() {
  return (
    <>
      <main>
        <ServiceHero />
        <ServiceFeatures />
        <ServiceProcess />
        <ServicePackages />
        <ServiceBenefits />
        <ServiceCTA />
      </main>
      <ChatSupport />
      <BackToTop />
    </>
  )
}