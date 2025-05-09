import AboutHero from '@/components/about/about-hero';
import BusinessEngine from '@/components/about/business-engine';
import Careers from '@/components/about/careers';
import Purpose from '@/components/about/purpose';
import Team from '@/components/about/team';
import Suite from '@/components/layout/suite';
import Products from '@/components/about/products';
import ScrollSection from '@/components/ui/scroll-section';
import React from 'react'

const About = () => {
  return (
    <main className='max-w-[1920px] mx-auto md:px-8 px-4'>
      <ScrollSection>
        <AboutHero />
      </ScrollSection>
      <ScrollSection>
        <Suite />
      </ScrollSection>
      <ScrollSection>
        <Products />
      </ScrollSection>
      <ScrollSection>
        <Purpose />
      </ScrollSection>
      <ScrollSection>
        <BusinessEngine />
      </ScrollSection>
      <ScrollSection>
        <Team />
      </ScrollSection>
      <ScrollSection>
        <Careers />
      </ScrollSection>
    </main>
  )
}

export default About;