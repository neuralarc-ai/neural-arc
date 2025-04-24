'use client'

import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";

const features = [
  {
    title: "Market Position Acceleration",
    description: "Gain a significant edge by identifying competitor strategic shifts early, allowing for proactive market positioning.",
    metrics: [
      { value: "75%+", label: "early shift detection" },
      { value: "90%", label: "fewer surprises" }
    ],
    styles: {
      bg: 'bg-[#CFD4C9]',
      title: 'text-[#A2A89C]',
      description: 'text-[#2F2C28]',
      metrics: 'text-[#55493D]'
    }
  },
  {
    title: "Pricing & Offer Optimization",
    description: "Enhance profitability by dynamically optimizing pricing strategies based on real-time competitive intelligence.",
    metrics: [
      { value: "50-60%", label: "pricing optimization" },
      { value: "75%+", label: "margin erosion reduction" }
    ],
    styles: {
      bg: 'bg-[#CFD2D4]',
      title: 'text-[#637794]/75',
      description: 'text-[#080507]',
      metrics: 'text-[#637794]'
    }
  },
  {
    title: "Product Development Edge",
    description: "Drive innovation and differentiation by understanding competitor product roadmaps and identifying market gaps.",
    metrics: [
      { value: "90%+", label: "differentiation" },
      { value: "3+", label: "months faster to market" }
    ],
    styles: {
      bg: 'bg-[#E3D9CF]',
      title: 'text-[#C4B3AB]',
      description: 'text-[#080507]',
      metrics: 'text-[#55493D]'
    }
  },
  {
    title: "Strategic Research Intel",
    description: "Maximize R&D efficiency and identify novel innovation directions through comprehensive intelligence on competitor research activities.",
    metrics: [
      { value: "80%+", label: "early innovation detection" },
      { value: "40-50%", label: "R&D efficiency gain" }
    ],
    styles: {
      bg: 'bg-[#A8B0B8]',
      title: 'text-[#787878]',
      description: 'text-[#4B4949]',
      metrics: 'text-[#1F1E1D]/45'
    }
  },
  {
    title: "Market Expansion Intel",
    description: "Achieve faster and more successful market entry by understanding competitor positioning and strategic intentions in new territories.",
    metrics: [
      { value: "95%+", label: "threat ID" },
      { value: "70%", label: "higher entry effectiveness" }
    ],
    styles: {
      bg: 'bg-[#B7A694]',
      title: 'text-[#9B846A]',
      description: 'text-white',
      metrics: 'text-[#55493D]'
    }
  }
];

const ORBFeaturesMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps'
  });

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
    <section className="w-full mx-auto py-8 lg:hidden">
      <div className="mx-auto">
        {/* Section Headers */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-[#807C65] text-2xl mb-4 font-semibold tracking-tight">
            From risk reduction to revenue growth
          </h2>
          <h1 className="text-[#373737] text-3xl font-semibold tracking-tight">
            Here is what&apos;s possible when data meets intelligence.
          </h1>
        </div>

        {/* Slider Content */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {features.map((item, index) => (
              <div
                key={index}
                className="min-w-[85%] pl-4 first:pl-4"
                style={{
                  opacity: index === currentIndex ? 1 : 0.7,
                  transform: `scale(${index === currentIndex ? 1 : 1})`,
                  transition: 'all 0.4s ease'
                }}
              >
                <div className={`${item.styles.bg} rounded-2xl p-6 h-[378px] flex flex-col`}>
                  <div className="flex-1">
                    <p className={`${item.styles.description} text-base mb-4 leading-5 tracking-tight`}>
                      {item.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {item.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <p className={`${item.styles.metrics} text-2xl font-semibold`}>
                            {metric.value}
                          </p>
                          <p className={`${item.styles.metrics} text-xs opacity-75`}>
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="w-full h-[1px] bg-[#71717133] mb-4"></div>
                    <p className={`${item.styles.title} text-2xl font-semibold leading-none`}>
                      {item.title}
                    </p>
                  </div>
                  <button className="inline-flex w-full justify-center items-center gap-2 px-6 py-3 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out mt-4">
                    Read story
                    <Image src="/icons/arrow.svg" alt="arrow" width={24} height={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {features.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-[#2F2C28]' : 'w-2 bg-[#D9D8D8]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ORBFeaturesMobile; 