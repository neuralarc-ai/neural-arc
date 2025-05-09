'use client'

import React, { useEffect } from 'react'
import ContactHero from '@/components/contact/contact-hero'
import Careers from '@/components/contact/careers'
import ContactForm from '@/components/contact/contact-form'
import ScrollSection from '@/components/ui/scroll-section';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='max-w-[1920px] mx-auto md:px-8 px-4'>
      <ScrollSection>
        <ContactHero />
      </ScrollSection>
      <ScrollSection>
        <Careers />
      </ScrollSection>
      <ScrollSection>
        <ContactForm />
      </ScrollSection>
    </main>
  )
}

export default Contact;