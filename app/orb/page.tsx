import React from 'react';
import OrbHero from '@/components/orb/orb-hero';
import OrbParameters from '@/components/orb/orb-parameters';
import OrbCaseStudies from '@/components/orb/orb-case-studies';
import OrbCaseStudiesMobile from '@/components/orb/orb-case-studies-mobile';
import OrbEngine from '@/components/orb/orb-engine';
import OrbWaitlist from '@/components/orb/orb-waitlist';
import ScrollSection from '@/components/ui/scroll-section';

const Orb = () => {
  return (
    <main className='max-w-[1920px] mx-auto md:px-8 px-4'>
      <ScrollSection>
        <OrbHero />
      </ScrollSection>
      <ScrollSection>
        <OrbParameters />
      </ScrollSection>
      <ScrollSection>
        <OrbCaseStudies />
      </ScrollSection>
      <ScrollSection>
        <OrbCaseStudiesMobile />
      </ScrollSection>
      <ScrollSection>
        <OrbEngine />
      </ScrollSection>
      <ScrollSection>
        <OrbWaitlist />
      </ScrollSection>
    </main>
  )
}

export default Orb;