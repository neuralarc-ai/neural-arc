import React from 'react'
import NodHero from '@/components/nod/nod-hero';
import Parameters from '@/components/nod/parameters';
import NodCaseStudies from '@/components/nod/nod-case-studies';
import NodCaseStudiesMobile from '@/components/nod/nod-case-studies-mobile';
import NodEngine from '@/components/nod/nod-engine';
import NodWaitlist from '@/components/nod/nod-waitlist';
import ScrollSection from '@/components/ui/scroll-section';

const NOD = () => {
  return (
    <main className='max-w-[1920px] mx-auto md:px-8 px-4'>
      <ScrollSection>
        <NodHero />
      </ScrollSection>
      <ScrollSection>
        <Parameters />
      </ScrollSection>
      <ScrollSection>
        <NodCaseStudies />
      </ScrollSection>
      <ScrollSection>
        <NodCaseStudiesMobile />
      </ScrollSection>
      <ScrollSection>
        <NodEngine />
      </ScrollSection>
      <ScrollSection>
        <NodWaitlist />
      </ScrollSection>
    </main>
  )
}

export default NOD;