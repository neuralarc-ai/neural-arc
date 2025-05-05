import React from 'react'
import NodHero from '@/components/nod/nod-hero';
import Parameters from '@/components/nod/parameters';
import NodCaseStudies from '@/components/nod/nod-case-studies';
import NodCaseStudiesMobile from '@/components/nod/nod-case-studies-mobile';
import NodEngine from '@/components/nod/nod-engine';
import NodWaitlist from '@/components/nod/nod-waitlist';

const NOD = () => {
  return (
    <main className='max-w-[1920px] mx-auto md:px-8 px-4 grain-texture'>
        <NodHero />
        <Parameters />
        <NodCaseStudies />
        <NodCaseStudiesMobile />
        <NodEngine />
        <NodWaitlist />
    </main>
  )
}

export default NOD;