import React from "react";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Market Position Acceleration",
    description: "Gain a significant edge by identifying competitor strategic shifts early, allowing for proactive market positioning.",
    metrics: [
      { value: "75%+", label: "early shift detection" },
      { value: "90%", label: "fewer surprises" }
    ],
  },
  {
    title: "Pricing & Offer Optimization",
    description: "Enhance profitability by dynamically optimizing pricing strategies based on real-time competitive intelligence.",
    metrics: [
      { value: "50-60%", label: "pricing optimization" },
      { value: "75%+", label: "margin erosion reduction" }
    ],
  },
  {
    title: "Product Development Edge",
    description: "Drive innovation and differentiation by understanding competitor product roadmaps and identifying market gaps.",
    metrics: [
      { value: "90%+", label: "differentiation" },
      { value: "3+", label: "months faster to market" }
    ],
  },
  {
    title: "Strategic Research Intel",
    description: "Maximize R&D efficiency and identify novel innovation directions through comprehensive intelligence on competitor research activities.",
    metrics: [
      { value: "80%+", label: "early innovation detection" },
      { value: "40-50%", label: "R&D efficiency gain" }
    ],
  },
  {
    title: "Market Expansion Intel",
    description: "Achieve faster and more successful market entry by understanding competitor positioning and strategic intentions in new territories.",
    metrics: [
      { value: "95%+", label: "threat ID" },
      { value: "70%", label: "higher entry effectiveness" }
    ],
  }
];

const ORBFeatures = () => {
  return (
    <section className="relative mx-auto lg:px-8 px-4 2xl:px-20 py-10 mt-10 hidden xl:block">
      {/* Section Headers */}
      <div className="text-center mb-16">
        <h2 className="text-[#807C65] text-2xl lg:text-5xl mb-4 font-semibold tracking-tight">
          From risk reduction to revenue growth
        </h2>
        <h1 className="text-[#373737] text-3xl lg:text-6xl font-semibold tracking-tight">
          Here is what&apos;s possible when data meets intelligence.
        </h1>
      </div>

      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden md:block">
        {/* First Row - Two Cards */}
        <div className="grid grid-cols-2 gap-8 mb-8 h-[425px]">
          {/* First Card */}
          <div className="p-8 rounded-2xl bg-[#CFD4C9]">
            <div className="flex flex-col h-full">
              <p className="text-[#2F2C28] font-semibold text-[28px] max-w-[608px] tracking-tight leading-normal text-pretty">
                {features[0].description}
              </p>
              <div className="w-full h-[1px] bg-[#717171] opacity-20 my-auto"></div>
              <button className="flex items-center gap-2 bg-[#2F2C28] text-white px-8 py-4 rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit">
                Read story
                <Image src="/icons/arrow.svg" alt="arrow" width={24} height={16} />
              </button>
              <div className="flex justify-between items-end mt-auto">
                <div className="flex gap-8">
                  {features[0].metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[32px] 2xl:text-[40px] font-semibold text-[#55493D] tracking-tight">
                        {metric.value}
                      </span>
                      <span className="text-[#55493D] font-semibold tracking-tight text-xl">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
                <h3 className="xl:text-[40px] 2xl:text-[54px] font-semibold text-[#A2A89C] tracking-tight text-right leading-17">
                  {features[0].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="p-8 rounded-2xl bg-[#CFD2D4]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-[54px] font-semibold tracking-tight leading-17 text-[#637794] opacity-75">
                  {features[1].title}
                </h3>
                <button className="flex flex-shrink-0 items-center gap-2 bg-[#2F2C28] text-white px-8 py-4 rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit">
                Read story
                <Image src="/icons/arrow.svg" alt="arrow" width={24} height={16} />
              </button>
              </div>
              <p className="text-[#080507] text-xl font-semibold tracking-tight mb-8">
                {features[1].description}
              </p>
              <div className="w-full h-[1px] bg-[#717171] opacity-20 mb-8"></div>
              <div className="flex justify-between mt-auto">
                {features[1].metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[40px] font-semibold tracking-tight text-[#637794]">
                      {metric.value}
                    </span>
                    <span className="text-[#637794] font-semibold tracking-tight text-xl">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Three Cards */}
        <div className="grid grid-cols-3 gap-8 ">
          {/* First Card */}
          <div className="p-8 rounded-2xl bg-[#E3D9CF] h-[403px]">
            <div className="flex flex-col h-full">
              <p className="text-[#080507] text-lg font-semibold tracking-tight mb-auto">
                {features[2].description}
              </p>
              <div className="flex justify-between my-auto">
                {features[2].metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[40px] font-semibold tracking-tight text-[#55493D]">
                      {metric.value}
                    </span>
                    <span className="text-[#55493D] font-semibold tracking-tight text-xl">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full h-[1px] bg-[#717171] opacity-20 mb-8"></div>
              <div className="flex justify-between items-end mt-auto">
                <h3 className="text-[32px] 2xl:text-[40px] font-semibold tracking-tight leading-none text-[#C4B3AB]">
                  {features[2].title}
                </h3>
                <button className="flex flex-shrink-0 items-center gap-2 bg-[#2F2C28] text-white px-8 py-4 rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit">
                  Read story
                  <Image src="/icons/arrow.svg" alt="arrow" width={24} height={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="p-8 rounded-2xl bg-[#A8B0B8] h-[403px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between my-auto">
                {features[3].metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[40px] font-semibold tracking-tight text-[#1F1E1D]/45">
                      {metric.value}
                    </span>
                    <span className="text-[#1F1E1D]/45 font-semibold tracking-tight text-xl">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[#4B4949] text-lg font-semibold tracking-tight mt-auto">
                {features[3].description}
              </p>
              <div className="w-full h-[1px] bg-[#717171] opacity-40 my-auto"></div>
              <div className="flex justify-between items-end mt-auto">
                <h3 className="text-[40px] font-semibold tracking-tight leading-none text-[#787878]">
                  {features[3].title}
                </h3>
                <button className="flex flex-shrink-0 items-center gap-2 bg-[#2F2C28] text-white px-8 py-4 rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit">
                  Read story
                  <Image src="/icons/arrow.svg" alt="arrow" width={24} height={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="p-8 rounded-2xl bg-[#B7A694] h-[403px]">
            <div className="flex flex-col h-full">
              <p className="text-[#FFFFFF] text-lg font-semibold tracking-tight my-auto">
                {features[4].description}
              </p>
              <div className="flex justify-between mt-auto">
                {features[4].metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[40px] font-semibold tracking-tight text-[#55493D]">
                      {metric.value}
                    </span>
                    <span className="text-[#55493D] font-semibold tracking-tight text-xl">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full h-[1px] bg-[#717171] opacity-20 my-auto"></div>
              <div className="flex justify-between items-end mt-auto">
                <h3 className="text-[40px] font-semibold tracking-tight leading-none text-[#9B846A]">
                  {features[4].title}
                </h3>
                <button className="flex flex-shrink-0 items-center gap-2 bg-[#2F2C28] text-white px-8 py-4 rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-fit">
                  Read story
                  <Image src="/icons/arrow.svg" alt="arrow" width={24} height={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Carousel */}
      <div className="md:hidden">
        <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="snap-center shrink-0 first:pl-4 last:pr-4 w-[85%]"
              >
                <div className="bg-[#F6F2F2] p-6 rounded-3xl h-full">
                  <h3 className="text-2xl font-light text-[#373737] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#373737] text-sm mb-6">
                    {feature.description}
                  </p>
                  <div className="flex flex-col gap-4">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-2xl font-semibold text-[#373737]">
                          {metric.value}
                        </span>
                        <span className="text-[#373737] text-sm">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full bg-[#2F2C28] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2">
                    Read story
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ORBFeatures;
