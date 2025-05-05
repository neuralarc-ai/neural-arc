'use client'

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const features = [
  {
    icon: '/images/nod/neural-decision.svg',
    title: 'Neural Decision Velocity',
    description:
      "Make strategic decisions in seconds, not days. NOD compresses analysis time with real-time, multi-modal synthesis and predictive modeling. It's not just faster—it's smarter by design.",
  },
  {
    icon: '/images/nod/neural-core.svg',
    title: '14.3B Parameter Neural Core',
    description:
      "A superhuman brain for your business. Powered by a 14.3 billion parameter framework, NOD pulls from public and proprietary data sources to simulate complex decisions faster than traditional BI systems can load a dashboard.",
  },
  {
    icon: '/images/nod/api-first.svg',
    title: 'API-First Intelligence',
    description:
      "Connect everything. Rebuild nothing. NOD integrates with your existing tech stack-CRM, ERP, e-commerce, and beyond-using advanced computational linguistics and adaptive APIs to ensure frictionless deployment.",
  },
  {
    icon: '/images/nod/decision-loops.svg',
    title: 'Self-Optimizing Decision Loops',
    description:
      "The more you use it, the smarter it gets. NOD's neural pathway (Navigate -> Optimize -> Disrupt) learns from every decision cycle, refining its models and strategies without manual retraining.",
  },
  {
    icon: '/images/nod/cross-functional.svg',
    title: 'Cross-Functional Intelligence',
    description:
      "Enterprise-wide impact, from finance to fulfillment. From forecasting to customer journey design, NOD amplifies decision-making across every department with precision and foresight.",
  },
];

const cardBgColors = [
  '#9AC0BD', // 1st card
  '#D5DFBC', // 2nd card
  '#BED4B9', // 3rd card
  '#DDDED6', // 4th card
  '#CBE3E0', // 5th card
];

const NodHero = () => {
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
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Image
          src="/images/nod/nod-logo.png"
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
        <span className="font-bold">N</span>
        <span>avigate. </span>
        <span className="font-bold">O</span>
        <span>ptimize. </span>
        <span className="font-bold">D</span>
        <span>isrupt.</span>
        {<span className="font-semibold">{`}`}</span>}
      </h1>
      {/* Subheadline */}
      <p className="text-center text-lg lg:text-2xl text-[#181A1A] font-light max-w-5xl mx-auto my-8">
        In a world overwhelmed by data, advantage belongs to those who decide fast—and smart. NeuralArc&apos;s NOD platform transforms information into instant insight through a 14.3B parameter neural engine that doesn&apos;t just analyze—it thinks. From forecasting to real-time optimization, NOD delivers decisions at the speed of thought.
      </p>
      <p className="text-center text-lg lg:text-2xl text-[#181A1A] font-light max-w-5xl mx-auto mb-8">
        Navigate. Optimize. Disrupt. With NOD, you don&apos;t just react: you lead.
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
    </section>
  );
};

export default NodHero;