import Image from "next/image";
import React from "react";

const DNA = () => {
  return (
    <section className="md:bg-[url('/images/dna/dna-bg.png')] bg-[url('/images/dna/dna-bg-mobile.png')] bg-cover bg-center bg-no-repeat rounded-[24px] lg:max-h-[1054px] overflow-hidden mb-10 grain-hero px-10 flex items-center justify-center">
      <div className="z-20 w-1/2">
        <Image
          src="/images/dna/dna-illustration.svg"
          alt="dna"
          width={100}
          height={100}
          className="w-auto h-auto translate-y-15"
        />
      </div>
      <div className="max-w-[836px] 2xl:-translate-x-20 xl:-translate-x-14 w-1/2">
        <div className="bg-[#2F2C28] rounded-[16px] 2xl:py-22 2xl:px-22 xl:px-22 xl:py-22 px-11 py-11 text-white flex flex-col gap-8">
          <h2 className="2xl:text-7xl xl:text-4xl lg:text-3xl font-semibold tracking-tight">
            Weaving Intelligence Into Business DNA
          </h2>
          <p className="2xl:text-2xl xl:text-md lg:text-sm font-light">
            Neural Paths democratizes business intelligence through Neural
            Nexus—our platform that transforms raw data into actionable insights
            without requiring data engineers. While traditional solutions see
            numbers, we see patterns; where others need months, we deliver in
            days. <br />
            <br />
            We&aps;ve also launched five specialized AI MicroSaaS tools that serve
            as cognitive extensions of your team, automating complex tasks
            across legal, marketing, finance, and development domains. By making
            enterprise-grade AI accessible to companies of all sizes, we&apos;re
            ensuring the neural revolution benefits everyone, not just tech
            giants with unlimited resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DNA;
