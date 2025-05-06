"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Challenge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ChallengesProps {
  title: string;
  description: string;
  challenges: Challenge[];
}

const cardColors = [
  "bg-[#D4D8CF]",
  "bg-[#C8BDB1]",
  "bg-[#DFCFC9]",
  "bg-[#E0DED5]",
];

export default function Challenges({ title, description, challenges }: ChallengesProps) {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });

  return (
    <section className="w-full max-w-[1640px] mx-auto px-4 md:px-8 py-12">
      <h2 className="text-4xl lg:text-6xl font-bold text-center tracking-tight mb-4 text-[#232323] drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]">{title}</h2>
      <p className="text-lg text-center mb-12 text-[#232323] drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)] lg:px-16">{description}</p>
      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-8">
        {challenges.map((challenge, idx) => (
          <div
            key={idx}
            className={`rounded-[8px] p-10 flex flex-col h-[288px] lg:h-[478px] ${cardColors[idx % cardColors.length]} shadow-sm justify-start`}
          >
            {/* Icon: fixed height for alignment */}
            <div className="lg:mb-12 mb-6 flex items-start" style={{ height: '80px' }}>
              <div className="w-[60px] h-[60px] lg:w-20 lg:h-20">{challenge.icon}</div>
            </div>
            {/* Title: fixed height for alignment, clamp to 2 lines */}
            <h3 className="lg:text-2xl text-lg lg:mb-12 mb-6 text-[#343434] drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)] leading-tight max-w-[30%] min-h-[56px] lg:min-h-[64px]">{challenge.title}</h3>
            {/* Description: always starts at same spot */}
            <p className="text-sm lg:text-lg text-[#343434] leading-tight drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]">{challenge.description}</p>
          </div>
        ))}
      </div>
      {/* Mobile Slider */}
      <div className="lg:hidden overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className={`min-w-[85%] rounded-[8px] p-4 flex flex-col h-[288px] ${cardColors[idx % cardColors.length]} shadow-sm mr-2 justify-start`}
            >
              {/* Icon: fixed height for alignment */}
              <div className="mb-4 flex items-start">
                <div className="w-15 h-15">{challenge.icon}</div>
              </div>
              {/* Title: fixed height for alignment, clamp to 2 lines */}
              <h3 className="text-lg font-semibold mb-4 text-[#232323] drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)] leading-tight min-h-[48px] max-w-[30%]">{challenge.title}</h3>
              {/* Description: always starts at same spot */}
              <p className="text-sm text-[#232323] drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 