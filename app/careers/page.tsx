'use client'

import React, { useEffect, useRef } from 'react'
import CareersHero from '@/components/careers/careers-hero';
import Openings from '@/components/careers/openings';
import Mission from '@/components/careers/mission';
import CareersForm from '@/components/careers/careers-form';
import ScrollSection from '@/components/ui/scroll-section';

const Careers = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const formSectionRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  return (
    <main className='max-w-[1920px] mx-auto md:px-8 px-4'>
      <ScrollSection>
        <CareersHero />
      </ScrollSection>
      <ScrollSection>
        <Openings formRef={formSectionRef} />
      </ScrollSection>
      <ScrollSection>
        <Mission />
      </ScrollSection>
      <ScrollSection forwardedRef={formSectionRef}>
        <CareersForm />
      </ScrollSection>
    </main>
  )
}

export default Careers;