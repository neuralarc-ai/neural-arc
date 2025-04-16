import React from "react";
import Image from "next/image";

const DrivingValue = () => {
  const leftValues = [
    {
      value: "14.3B",
      title: "Parameters",
      subtitle: "analyzed per second",
      borderColor: "border-[#978163]"
    },
    {
      value: "3-5x",
      title: "Faster Insights",
      subtitle: "within first 90 days of implementation",
      borderColor: "border-[#54736C]"
    },
    {
      value: "40+",
      title: "hours saved",
      subtitle: "monthly on manual reporting",
      borderColor: "border-[#5E5E5E]"
    }
  ];

  const rightValues = [
    {
      value: "2.1M",
      title: "Models trained",
      subtitle: "across industry datasets",
      borderColor: "border-[#B6BDAD]"
    },
    {
      value: "72%",
      title: "Lower Infra Cost",
      subtitle: "vs. custom AI stack builds",
      borderColor: "border-[#B6BDAD]"
    },
    {
      value: "9+",
      title: "Verticals Supported",
      subtitle: "from finance to healthcare",
      borderColor: "border-[#54736C]"
    }
  ];

  return (
    <div className="relative mx-auto max-w-[1664px] lg:px-8 px-2 2xl:px-0 lg:py-20 py-10 grain-hero">
      <h2 className="text-3xl lg:text-[60px] text-center font-semibold tracking-tighter">
        Driving Value Across Industries
      </h2>

      {/* Desktop Layout (Above md) */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="flex flex-col gap-8 lg:w-1/6">
          {leftValues.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className={`text-[40px] xl:text-[64px] font-semibold pl-4 ${item.borderColor} border-l-3`}>
                {item.value}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl text-[#6A5D4D] font-semibold">{item.title}</h3>
                <p className="text-sm text-[#A0997B]">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="lg:w-3/6 flex justify-center items-center">
          <Image
            src="/images/illustrations/driving-value.png"
            alt="Driving Value Illustration"
            width={870}
            height={870}
            className="w-auto h-auto"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 lg:w-1/6 items-start 2xl:pl-18">
          {rightValues.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 items-start">
              <div className={`text-[40px] xl:text-[64px] font-semibold pl-4 ${item.borderColor} border-l-3`}>
                {item.value}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl text-[#6A5D4D] font-semibold">{item.title}</h3>
                <p className="text-base text-[#A0997B]">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout (md and below) */}
      <div className="lg:hidden flex flex-col items-center gap-2">
        {/* Center Image */}
        <div className="flex justify-center items-center w-full">
          <Image
            src="/images/illustrations/driving-value-mobile.png"
            alt="Driving Value Illustration"
            width={870}
            height={870}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 gap-8 w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:pl-18">
            {leftValues.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className={`text-[32px] font-semibold pl-4 ${item.borderColor} border-l-3`}>
                  {item.value}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base text-[#6A5D4D] font-semibold min-h-[40px] md:min-h-0 flex items-center">{item.title}</h3>
                  <p className="text-xs text-[#A0997B] min-h-[32px]">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:pl-18">
            {rightValues.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className={`text-[32px] font-semibold pl-4 ${item.borderColor} border-l-3`}>
                  {item.value}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base text-[#6A5D4D] font-semibold min-h-[40px] md:min-h-0 flex items-center">{item.title}</h3>
                  <p className="text-xs text-[#A0997B] min-h-[32px]">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrivingValue; 