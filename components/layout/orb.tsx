import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

const ORB = () => {
  return (
    <section className="relative mx-auto lg:px-8 px-4 2xl:px-20 py-10 lg:mt-20 mt-10">
      <div className="flex flex-col items-center text-center">
        {/* ORB Logo */}
        <Image
          src="/images/orb/orb.svg"
          alt="ORB Logo"
          width={100}
          height={100}
          className="2xl:w-[120px] 2xl:h-[130px] w-[70px] h-[70px] object-contain mb-6"
        />

        {/* ORB Title */}
        <h2 className="text-[#3E4F4C] text-3xl font-semibold mb-2">
          ORB
        </h2>

        {/* Acronym */}
        <h1 className="text-[#373737] text-2xl lg:text-5xl font-normal mb-2">
          <span className="font-bold">O</span>utlast. <span className="font-bold">R</span>eimagine. <span className="font-bold">B</span>uild.
        </h1>

        {/* Subtitle */}
        <h3 className="text-[#638097] text-base font-semibold lg:text-3xl mb-6">
          Introducing Intelligence Circuit
        </h3>

        {/* Description */}
        <p className="text-[#181A1A] text-base lg:text-2xl px-4 font-light mb-12">
          ORB is a next-gen AI platform that transforms competitive intelligence from passive monitoring to strategic insight. Unlike static tools, ORB offers a dynamic, real-time view of the market. Its intelligence engine tracks thousands of signals to uncover hidden patterns and shifts, enabling leaders to make confident, informed decisions with a complete competitive picture.
        </p>

        {/* Illustrations - Desktop and Mobile */}
        <div className="w-full mb-12">
          <Image
            src="/images/orb/orb-illustration-web.png"
            alt="ORB Analytics Dashboard"
            width={1200}
            height={400}
            className="hidden lg:block w-full h-auto object-contain"
          />
          <Image
            src="/images/orb/orb-illustration-mobile.png"
            alt="ORB Analytics Dashboard"
            width={400}
            height={400}
            className="lg:hidden w-full h-auto object-contain"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="flex items-center gap-4 bg-[#2F2C28] text-white px-8 py-5 rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-full md:w-auto">
            Join the waitlist
            <ArrowRightIcon className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-4 justify-center bg-[#C1BBB4] text-[#2F2C28] px-8 py-5 rounded-full transition-all hover:bg-[#C1BBB4] shadow-[0_5px_0_0_#9A918C] hover:shadow-[0_3px_0_0_#9A918C] duration-300 cursor-pointer ease-in-out w-full md:w-auto">
            Learn More
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ORB;
