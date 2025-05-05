'use client'

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const engineCards = [
  {
    img: '/images/orb/engine-1.svg',
    title: 'Signal Aggregation Engine',
    description:
      'Gathers competitive signals from digital ecosystems',
    bg: '#4D83A9',
  },
  {
    img: '/images/orb/engine-2.svg',
    title: 'Neural Pattern Recognition Model',
    description:
      'Identifies cross-channel intelligence correlations',
    bg: '#6B9FBD',
  },
  {
    img: '/images/orb/engine-3.svg',
    title: 'Predictive Intelligence Grid',
    description:
      'Translates patterns into actionable competitive moves',
    bg: '#B9B2CF',
  },
  {
    img: '/images/orb/engine-4.svg',
    title: 'Multilingual Semantic Decoder',
    subtitle: 'Understands competitor messaging globally',
    description:
      'Understands competitor messaging globally',
    bg: '#CBB4C5',
  },
  {
    img: '/images/orb/engine-5.svg',
    title: 'Self-Training Neural Core',
    description:
      'Continuously adapts based on new strategic behavior',
    bg: '#D0CEE2',
  },
];

const OrbEngine = () => {
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
    <section className="w-full mx-auto lg:py-24 py-8">
      <div className="text-center mb-12">
        <p className="text-[#638097] text-2xl font-semibold mb-2">From Signal to Strategy</p>
        <h2 className="text-[40px] font-semibold text-[#373737] mb-4">The NOD Engine: Turning Data Into Intelligent Action</h2>
      </div>
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
        {engineCards.map((card) => (
          <div
            key={card.title}
            className="rounded-[32px] flex flex-col items-start p-8 h-full min-h-[420px]"
            style={{ backgroundColor: card.bg }}
          >
            <div className="mb-8 w-full flex justify-center">
              <Image src={card.img} alt={card.title} width={180} height={120} className="object-contain w-full h-full" />
            </div>
            <h3 className="text-[#312E2E]/60 text-2xl font-semibold mb-4 tracking-tight">{card.title}</h3>
            <p className="text-[#312E2E] text-base font-light">{card.description}</p>
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

export default OrbEngine;