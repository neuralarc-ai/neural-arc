import React from 'react'
import CareersHero from '@/components/careers/careers-hero';
import Openings from '@/components/careers/openings';
import Mission from '@/components/careers/mission';
import CareersForm from '@/components/careers/careers-form';

const Careers = () => {
  return (
    <main className='max-w-[1920px] mx-auto md:px-8 px-4 grain-texture'>
      <CareersHero />
      <Openings />
      <Mission />
      <CareersForm />
    </main>
  )
}

export default Careers;