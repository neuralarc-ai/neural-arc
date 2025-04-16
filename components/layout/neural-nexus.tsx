import React from "react";
import Image from "next/image";

const NeuralNexus = () => {
  return (
    <div className="relative mx-auto lg:px-8 px-4 2xl:px-20 py-10 lg:mt-20 mt-10 grain-hero">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl xl:text-5xl font-semibold tracking-tighter leading-tight text-[#373737] text-pretty text-center lg:text-start">
            Introducing Neural Nexus - AI Platform
          </h2>
          <h3 className="text-xl xl:text-3xl text-[#978163] text-center lg:text-start">
            Unlock the potential of neural intelligence
          </h3>
          <div className="flex lg:hidden items-center justify-center">
            <Image
              src="/images/illustrations/neural-nexus.png"
              alt="Neural Nexus Analytics Dashboard"
              width={400}
              height={400}
              className="w-auto h-auto object-contain"
            />
          </div>
          <p className="text-base xl:text-lg text-[#181A1A] max-w-2xl text-balance font-light text-center lg:text-start">
            Unlock the potential of neural intelligence tailored for your
            business. Neural Nexus analyzes over 14 billion parameters in
            real-time, revealing insights beyond traditional analytics. Our
            unique architecture adapts to your industry&apos;s patterns,
            learning from 375,000 decision nodes to uncover correlations that
            human analysts might overlook. With the ability to process 8.7
            million data points per second, we turn complexity into clarity,
            empowering you to anticipate tomorrow&apos;s opportunities.
          </p>
          <button className="flex items-center gap-2 bg-[#2F2C28] text-white px-8 py-5 rounded-full w-fit 2xl:mt-10 mt-4 transition-all hover:bg-[#2F2C28] hover:shadow-[0_5px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out self-center lg:self-start">
            Join the waitlist
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:flex items-center justify-center w-1/2">
          <Image
            src="/images/illustrations/neural-nexus.png"
            alt="Neural Nexus Analytics Dashboard"
            width={800}
            height={800}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NeuralNexus;
