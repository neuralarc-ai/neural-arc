'use client'

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const engineCards = [
  {
    img: '/images/nod/engine-1.png',
    title: 'Unified Data Ingestion',
    subtitle: 'Integrate Anything. From Anywhere.',
    description:
      'Seamlessly connect structured and unstructured sources APIs, apps, databases, and flat files into a single, normalized intelligence layer. No manual prep. No data silos.',
    bg: '#71908D',
  },
  {
    img: '/images/nod/engine-2.svg',
    title: 'Contextual Intelligence Modeling',
    subtitle: 'Industry-Tuned, Outcome-Focused',
    description:
      'Our verticalized neural models analyze your data in real time using advanced pattern recognition, correlation mapping, and behavioral inference built for specificity, not generality.',
    bg: '#8DA5A3',
  },
  {
    img: '/images/nod/engine-3.svg',
    title: 'Action-Oriented Insight Delivery',
    subtitle: 'Precision Insights, Right on Time',
    description:
      'Interactive dashboards, embedded AI suggestions, and real-time alerts surface what matters most directly into your team’s workflow via Slack, email, or native tools.',
    bg: '#A7BEAB',
  },
  {
    img: '/images/nod/engine-4.svg',
    title: 'Continuous Learning Engine',
    subtitle: 'Every Result Makes the System Smarter',
    description:
      'Post-action telemetry flows back into the models, refining performance through autonomous reinforcement cycles—ensuring NODD evolves with your business.',
    bg: '#C0C8B6',
  },
];

const NodEngine = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps',
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full mx-auto py-16">
      <div className="text-center mb-12">
        <p className="text-[#978163]/70 text-2xl font-semibold mb-2">From Signal to Strategy</p>
        <h2 className="text-[40px] font-semibold text-[#373737] mb-4">The NOD Engine: Turning Data Into Intelligent Action</h2>
        <p className="text-[#8B785E] text-lg mx-auto">Every decision starts with data—but NOD transforms it into strategic advantage. Here&apos;s how our platform delivers value across every layer of your business.</p>
      </div>
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
        {engineCards.map((card) => (
          <div
            key={card.title}
            className="rounded-[32px] flex flex-col items-start p-8 h-full min-h-[420px]"
            style={{ backgroundColor: card.bg }}
          >
            <div className="mb-8 w-full flex justify-center">
              <Image src={card.img} alt={card.title} width={180} height={120} className="object-contain w-full h-full" />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-4 tracking-tight">{card.title}</h3>
            {card.subtitle && <p className="text-white/80 text-lg font-medium mb-2">{card.subtitle}</p>}
            <p className="text-[#E4E4E4] text-base font-light">{card.description}</p>
          </div>
        ))}
      </div>
      {/* Mobile Slider */}
      <div className="md:hidden mt-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {engineCards.map((card, idx) => (
              <div
                key={card.title}
                className="min-w-[90%] pr-4 first:pl-2"
                style={{ opacity: idx === currentIndex ? 1 : 0.7, transition: 'all 0.4s ease' }}
              >
                <div
                  className="rounded-[32px] flex flex-col items-start p-6 h-[420px]"
                  style={{ backgroundColor: card.bg }}
                >
                  <div className="mb-6 w-full flex justify-center">
                    <Image src={card.img} alt={card.title} width={160} height={80} className="object-contain" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">{card.title}</h3>
                  {card.subtitle && <p className="text-white/80 text-base font-medium mb-2">{card.subtitle}</p>}
                  <p className="text-white/80 text-sm font-light">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {engineCards.map((_, idx) => (
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

export default NodEngine;