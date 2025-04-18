import AboutHero from '@/components/about/about-hero';
import BusinessEngine from '@/components/about/business-engine';
import Careers from '@/components/about/careers';
import Purpose from '@/components/about/purpose';
import Team from '@/components/about/team';
import Tools from '@/components/about/tools';
import React from 'react'

const About = () => {
  return (
    <main className='max-w-[1920px] mx-auto md:px-8 px-4 grain-texture'>
        <AboutHero />
        <Tools />
        <Purpose />
        <BusinessEngine />
        <Team />
        <Careers />
    </main>
  )
}

export default About;