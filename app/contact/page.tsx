'use client'

import React, { useEffect } from 'react'
import ContactHero from '@/components/contact/contact-hero'
import Careers from '@/components/contact/careers'
import ContactForm from '@/components/contact/contact-form'

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='max-w-[1920px] mx-auto md:px-8 px-4'>
      <ContactHero />
      <Careers />
      <ContactForm />
    </main>
  )
}

export default Contact;