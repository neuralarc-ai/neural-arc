'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRight } from 'lucide-react';
import JoinWaitlistDialog from '@/components/layout/JoinWaitlistDialog';

const features = [
  {
    icon: '/images/orb/hero-1.svg',
    title: 'Predictive Intelligence Matrix',
    description:
      "ORB identifies early signals of competitor activity by analyzing data from social media, news, job listings, and more. Instead of looking backward, it helps you anticipate what's coming—so you can act before the market shifts.",
  },
  {
    icon: '/images/orb/hero-2.svg',
    title: 'Neural Decision Architecture',
    description:
      "Powered by a proprietary neural framework, ORB connects patterns across disconnected data points—mimicking how strategists think. This isn't just AI. It's cognitive-level insight designed for real business decisions.",
  },
  {
    icon: '/images/orb/hero-3.svg',
    title: 'Real-Time Adaptive Analysis',
    description:
      "ORB's quantum-inspired algorithms learn and evolve as new information emerges. The more data it sees, the sharper its predictions become—giving you an always-on, ever-improving strategic lens.",
  },
  {
    icon: '/images/orb/hero-4.svg',
    title: 'Self-Optimizing Decision Loops',
    description:
      "With advanced computational linguistics, ORB reads between the lines across languages and cultures. It surfaces insights from global competitors by interpreting subtle shifts in tone, message, and sentiment.",
  },
  {
    icon: '/images/orb/hero-5.svg',
    title: 'Intelligence for Every Team',
    description:
      "From product development to marketing, recruiting to investment planning—ORB delivers tailored insights across your business. It transforms competitive intelligence from a silo into a company-wide advantage.",
  },
];

const cardBgColors = [
  '#6B9FBD', // 1st card
  '#CBB4C5', // 2nd card
  '#C6D5DA', // 3rd card
  '#B9B2CF', // 4th card
  '#DEDDE5', // 5th card
];

const OrbHero = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  // Embla for mobile slider
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps',
  });
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="w-full mx-auto py-12 px-4">
      {/* Waitlist Dialog */}
      <JoinWaitlistDialog 
        open={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Image
          src="/images/orb/orb-logo.png"
          alt="NOD by Neural Arc"
          width={300}
          height={140}
          className='object-contain lg:w-[300px] lg:h-[140px] w-[200px] h-[100px]'
          priority
        />
      </div>
      {/* Headline */}
      <h1 className="text-[40px] md:text-5xl xl:text-[82px] text-[#373737] text-center my-8">
        {<span className="font-semibold">{`{`}</span>}
        <span className="font-bold">O</span>
        <span>utlast. </span>
        <span className="font-bold">R</span>
        <span>eimagine. </span>
        <span className="font-bold">B</span>
        <span>uild.</span>
        {<span className="font-semibold">{`}`}</span>}
      </h1>
      {/* Subheadline */}
      <p className="text-center text-lg lg:text-2xl text-[#181A1A] font-light max-w-7xl mx-auto my-8">
      In today&apos;s algorithmic battlefield, survival belongs to those who outthink, not just outmaneuver. NeuralArc&apos;s ORB platform redefines competitive intelligence with a 14.3B parameter neural architecture that doesn&apos;t just monitor the market—it predicts its next move. From strategic foresight to real-time signal processing, ORB delivers intelligence before the opportunity window even opens.
      </p>
      <p className="text-center text-lg lg:text-2xl text-[#181A1A] font-light max-w-7xl mx-auto mb-8">
      Outlast. Reimagine. Build. With ORB, you don&apos;t just watch the competition—you stay three moves ahead.
      </p>
      {/* Cards (Desktop) */}
      <div className="hidden lg:block mt-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-3 gap-10">
          {features.slice(0, 3).map((feature, i) => (
            <div key={feature.title} className="rounded-2xl p-10 flex flex-col items-start h-full min-h-[280px]" style={{ backgroundColor: cardBgColors[i] }}>
              <Image src={feature.icon} alt={feature.title} width={60} height={60} className="mb-8" />
              <h3 className="font-semibold text-2xl mb-4">{feature.title}</h3>
              <p className="text-[#1D221B]/65 text-lg leading-snug">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <div className="grid grid-cols-2 gap-10 w-[66.66%]"> {/* 2/3 width to center the two cards */}
            {features.slice(3).map((feature, i) => (
              <div key={feature.title} className="rounded-2xl p-10 flex flex-col items-start h-full min-h-[280px]" style={{ backgroundColor: cardBgColors[i + 3] }}>
                <Image src={feature.icon} alt={feature.title} width={60} height={60} className="mb-8" />
                <h3 className="font-semibold text-2xl mb-4">{feature.title}</h3>
                <p className="text-[#1D221B]/65 text-lg leading-snug">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Cards (Mobile Slider) */}
      <div className="lg:hidden mt-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="min-w-[90%] pr-4 first:pl-2"
                style={{
                  opacity: idx === currentIndex ? 1 : 0.7,
                  transition: 'all 0.4s ease',
                }}
              >
                <div className="rounded-2xl p-6 flex flex-col items-start shadow-md h-[340px]" style={{ backgroundColor: cardBgColors[idx] }}>
                  <Image src={feature.icon} alt={feature.title} width={56} height={56} className="mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-[#444] text-base leading-snug">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {features.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-[#2F2C28]' : 'w-2 bg-[#D9D8D8]'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Waitlist Button - Updated with onClick handler */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setIsWaitlistOpen(true)}
          className="inline-flex items-center gap-4 px-8 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out"
        >
          Join the Waitlist <ArrowRight className='w-5 h-5'/>
        </button>
      </div>
    </section>
  );
};

export default OrbHero;