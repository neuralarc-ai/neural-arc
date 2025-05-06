'use client'

import React, { useEffect } from 'react'
import CareersHero from '@/components/careers/careers-hero';
import Openings from '@/components/careers/openings';
import Mission from '@/components/careers/mission';
import CareersForm from '@/components/careers/careers-form';

const Careers = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='max-w-[1920px] mx-auto md:px-8 px-4'>
      <CareersHero />
      <Openings />
      <Mission />
      <CareersForm />
    </main>
  )
}

export default Careers;