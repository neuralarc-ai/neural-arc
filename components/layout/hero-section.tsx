import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative w-full max-h-[499px] md:max-h-[1300px] px-8 py-6 mx-auto lg:rounded-[32px] rounded-[16px] bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center -mt-3 grain-hero overflow-hidden">
        {/* Top Left Illustration */}
        <div className="absolute top-[60px] lg:-top-20 xl:top-[60px] hidden xl:block -ml-8">
          <Image
            src="/images/hero/top-left.svg"
            alt="Decorative illustration"
            width={120}
            height={120}
            className="w-auto h-auto object-contain"
          />
        </div>

        {/* Top Right Illustration */}
        <div className="absolute top-[60px] lg:top-[20px] xl:top-[60px] right-[160px] lg:right-[60px] xl:right-[160px] hidden xl:block -mr-8">
          <Image
            src="/images/hero/top-right.svg"
            alt="Decorative illustration"
            width={120}
            height={120}
            className="w-auto h-auto object-contain"
          />
        </div>

        <div className="xl:mt-37 lg:mt-20 mt-5">
          <h1 className="text-3xl lg:text-7xl font-semibold text-white max-w-full md:max-w-md lg:max-w-3xl mx-auto text-center text-shadow-[0_0_40px_rgba(255,255,255,0.35)] leading-tight">
            The{" "}
            <span className="cognitive-engine-gradient">Cognitive Engine</span>{" "}
            for Business Evolution
          </h1>
          <p className="text-sm lg:text-lg text-white lg:max-w-3xl md:max-w-md max-w-full mx-auto text-center mt-2 text-balance">
            Where Neural Networks Become Neural Paths Transcending the limits of
            traditional analytics through neural intelligence.
          </p>
        </div>
        <div className="w-full mx-auto flex justify-center items-center mt-10 z-50">
          <Image
            src="/images/hero/hero-illustration.png"
            alt="hero"
            width={500}
            height={1200}
            className="z-50 xl:w-auto xl:h-auto lg:w-[300px] w-[200px] object-contain hidden sm:block"
          />
          <Image
            src="/images/hero/hero-illustration-mobile.png"
            alt="hero"
            width={600}
            height={1200}
            className="z-50 w-[150px] object-contain block sm:hidden"
          />
        </div>

        {/* Bottom Left Illustration */}
        <div className="absolute bottom-40 -left-14 lg:left-[-60px] xl:left-[50px] 2xl:left-[200px] hidden xl:block">
          <Image
            src="/images/hero/bottom-left.svg"
            alt="Decorative illustration"
            width={120}
            height={120}
            className="w-auto h-auto object-contain"
          />
        </div>

        {/* Bottom Right Illustration */}
        <div className="absolute bottom-30 right-[150px] 2xl:right-[300px] hidden xl:block opacity-80">
          <Image
            src="/images/hero/bottom-right.svg"
            alt="Decorative illustration"
            width={120}
            height={120}
            className="w-auto h-auto object-contain"
          />
        </div>

        {/* Right Bottom Illustration */}
        <div className="absolute -bottom-20 lg:-bottom-16 right-0 hidden xl:block -mr-8">
          <Image
            src="/images/hero/right.svg"
            alt="Decorative illustration"
            width={150}
            height={120}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>

      {/* Products Overview Section */}
      <div className="relative mx-auto xl:-mt-[300px] lg:-mt-[200px] md:-mt-[150px] -mt-[40px] max-w-[1664px] lg:px-8 px-4 2xl:px-0 z-50">
        <div className="bg-white rounded-[8px] lg:rounded-[24px] p-8 grain-hero">
          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 relative">
            {/* Lawbit */}
            <div className="flex flex-col gap-4 2xl:p-10 md:p-8">
              <Image
                src="/icons/lawbit.svg"
                alt="Lawbit"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <h3 className="text-[32px] lg:text-[40px] font-semibold text-[#0C0C0C]">
                Lawbit
              </h3>
              <div className="flex flex-col">
                <p className="text-2xl text-[#343434] mb-4 font-semibold xl:min-h-[72px]">
                  AI for Legal Intelligence
                </p>
                <p className="text-sm lg:text-lg text-[#343434]">
                LawBit simplifies contract creation and analysis with AI-powered accuracy. Effortlessly draft, review, and optimize legal documents in seconds.
                </p>
              </div>
            </div>

            {/* Rovyk */}
            <div className="flex flex-col gap-4 2xl:p-10 md:p-8 lg:border-l lg:border-[#0000000A]">
              <Image
                src="/icons/rovyk.svg"
                alt="Rovyk"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <h3 className="text-[32px] lg:text-[40px] font-semibold text-[#0C0C0C]">
                Rovyk
              </h3>
              <div className="flex flex-col">
                <p className="text-2xl text-[#343434] mb-4 font-semibold xl:min-h-[72px]">
                  AI Powerhouse
                </p>
                <p className="text-sm lg:text-lg text-[#343434]">
                Rovyk lets you seamlessly switch between top AI models—all in one place, effortlessly, making your workflow smoother and more efficient.
                </p>
              </div>
            </div>

            {/* Kashew */}
            <div className="flex flex-col gap-4 2xl:p-10 md:p-8 xl:border-l xl:border-[#0000000A]">
              <Image
                src="/icons/kashew.svg"
                alt="Kashew"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <h3 className="text-[32px] lg:text-[40px] font-semibold text-[#0C0C0C]">
                Kashew
              </h3>
              <div className="flex flex-col">
                <p className="text-2xl text-[#343434] mb-4 font-semibold xl:min-h-[72px]">
                  AI for Invoicing
                </p>
                <p className="text-sm lg:text-lg text-[#343434]">
                Kashew generates professional invoices instantly with AI precision, streamlining your billing process effortlessly.
                </p>
              </div>
            </div>

            {/* Spider */}
            <div className="flex flex-col gap-4 2xl:p-10 md:p-8 lg:border-l lg:border-[#0000000A]">
              <Image
                src="/icons/spider.svg"
                alt="Spider"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <h3 className="text-[32px] lg:text-[40px] font-semibold text-[#0C0C0C]">
                Spider
              </h3>
              <div className="flex flex-col">
                <p className="text-2xl text-[#343434] mb-4 font-semibold xl:min-h-[72px]">
                  AI Pitch Deck Analyzer
                </p>
                <p className="text-sm lg:text-lg text-[#343434]">
                Spider offers insights on structure, content, and design, boosting your chances of success. Simplify your pitch prep and wow investors with data-driven recommendations that enhance your storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Text Section */}
      <div className="relative mx-auto max-w-[1664px] -mt-[40px] z-[5] lg:px-8 px-4 2xl:px-0 grain-navbar">
        <div className="bottom-text-gradient xl:rounded-b-[24px] rounded-b-[8px] pt-16 pb-4 mx-auto flex items-center justify-center">
          <p className="text-sm lg:text-lg text-center text-white px-4">
            Neural tools with significant impact, designed for individual
            focus while maintaining seamless interconnectivity, enhancing
            collective intelligence with every deployment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;