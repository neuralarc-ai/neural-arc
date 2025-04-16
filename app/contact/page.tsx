import React from 'react'
import ContactHero from '@/components/contact/contact-hero'
import Careers from '@/components/contact/careers'

const Contact = () => {
  return (
    <main className='max-w-[1920px] mx-auto md:px-8 px-4'>
        <ContactHero />
        <Careers />
    </main>
  )
}

export default Contact;