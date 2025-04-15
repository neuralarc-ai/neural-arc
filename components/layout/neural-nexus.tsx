import React from "react";
import Image from "next/image";

const NeuralNexus = () => {
  return (
    <div className="relative mx-auto lg:pl-8 px-4 2xl:pl-20 py-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter leading-tight text-[#373737]">
            Introducing Neural Nexus - AI Platform
          </h2>
          <h3 className="text-xl lg:text-3xl text-[#978163]">
            Unlock the potential of neural intelligence
          </h3>
          <p className="text-base lg:text-lg text-[#181A1A] max-w-2xl">
            Unlock the potential of neural intelligence tailored for your business. Neural
            Nexus analyzes over 14 billion parameters in real-time, revealing insights
            beyond traditional analytics. Our unique architecture adapts to your
            industry&apos;s patterns, learning from 375,000 decision nodes to uncover
            correlations that human analysts might overlook. With the ability to process
            8.7 million data points per second, we turn complexity into clarity,
            empowering you to anticipate tomorrow&apos;s opportunities.
          </p>
          <button className="flex items-center gap-2 bg-[#2F2C28] text-white px-6 py-3 rounded-full w-fit mt-4 hover:bg-[#1F1C18] transition-colors">
            Join the waitlist
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Right Illustration */}
        <div className="">
          <Image
            src="/images/illustrations/neural-nexus.png"
            alt="Neural Nexus Analytics Dashboard"
            width={800}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NeuralNexus; 