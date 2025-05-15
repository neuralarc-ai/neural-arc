'use client'

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import JoinWaitlistDialog from '@/components/layout/JoinWaitlistDialog';

const NodWaitlist = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section className="rounded-[32px] w-full my-6 lg:my-12 px-8 2xl:px-24 py-10 lg:py-16 lg:h-[464px] bg-[url('/images/nod/waitlist-bg.png')] bg-no-repeat lg:bg-right bg-cover">
      {/* Waitlist Dialog */}
      <JoinWaitlistDialog 
        open={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />

      <div className="flex flex-col lg:flex-row items-center justify-center 2xl:gap-24 gap-8 lg:h-[330px] py-8">
        {/* Left Column */}
        <div className="flex flex-col justify-between flex-shrink-0 h-full">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/nod/nod-waitlist.png"
              alt="Nod Logo"
              width={255}
              height={70}
              className="w-[188px] lg:w-[255px] h-auto"
            />
            <h3 className="text-[#313131]/50 text-xl lg:text-2xl font-medium">
              {"{Navigate. Optimize. Disrupt.}"}
            </h3>
          </div>

          <button 
            onClick={() => setIsWaitlistOpen(true)}
            className="hidden flex-shrink-0 lg:inline-flex items-center justify-center text-base lg:text-xl gap-4 mt-10 px-8 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 ease-in-out"
          >
            Join the waitlist <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[3px] h-full bg-[#E1E1E1]" />

        <div className="lg:hidden block w-full h-[3px] bg-[#E1E1E1]" />

        {/* Right Column */}
        <div className="text-[#515151] max-w-4xl h-full flex flex-col justify-between">
          <h2 className="text-base lg:text-2xl leading-normal">
            Whether you&apos;re integrating with Shopify, Snowflake, Salesforce, or SQL—our connectors get you running in less than a day.
          </h2>

          <ul className="mt-6 space-y-2 text-base lg:text-2xl lg:py-4 lg:px-4">
            <li>• No-code dashboard interface</li>
            <li>• Secure cloud-based deployment</li>
            <li>• Dedicated onboarding team</li>
          </ul>
        </div>

        <button 
          onClick={() => setIsWaitlistOpen(true)}
          className="lg:hidden inline-flex w-full justify-center items-center text-xl gap-4 px-6 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 ease-in-out"
        >
          Join the waitlist <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default NodWaitlist;
