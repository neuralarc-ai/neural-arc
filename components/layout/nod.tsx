import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JoinWaitlistDialog from "./JoinWaitlistDialog";

const NOD = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  return (
    <section className="relative mx-auto lg:px-8 px-4 2xl:px-20 py-10 mt-10">
      <div className="flex flex-col items-center text-center">
        {/* NOD Logo */}
        <Image
          src="/images/nod/nod.svg"
          alt="NOD Logo"
          width={100}
          height={100}
          className="2xl:w-[120px] 2xl:h-[130px] w-[70px] h-[70px] object-contain mb-6"
        />

        {/* NOD Title */}
        <h2 className="text-[#76716E] text-3xl font-semibold mb-2">NOD</h2>

        {/* Acronym */}
        <h1 className="text-[#373737] text-2xl lg:text-5xl font-normal mb-2">
          <span className="font-bold">N</span>avigate.{" "}
          <span className="font-bold">O</span>ptimize.{" "}
          <span className="font-bold">D</span>isrupt.
        </h1>

        {/* Subtitle */}
        <h3 className="text-[#8DA571] text-base font-semibold lg:text-3xl mb-6">
          Introducing Cognitive Fabric Engine
        </h3>

        {/* Description */}
        <p className="text-[#181A1A] text-base lg:text-2xl px-4 font-light mb-12">
          Unlock the potential of neural intelligence tailored for your
          business. NOD analyzes over 14 billion parameters in real-time,
          revealing insights beyond traditional analytics. Our unique
          architecture adapts to your industry&apos;s patterns, learning from
          375,000 decision NODes to uncover correlations that human analysts
          might overlook. With the ability to process 8.7 million data points
          per second, we turn complexity into clarity, empowering you to
          anticipate tomorrow&apos;s opportunities.
        </p>

        {/* Illustrations - Desktop and Mobile */}
        <div className="w-full mb-12">
          <Image
            src="/images/nod/nod-illustration-web.png"
            alt="NOD Analytics Dashboard"
            width={1200}
            height={400}
            className="hidden lg:block w-full h-auto object-contain"
          />
          <Image
            src="/images/nod/nod-illustration-mobile.png"
            alt="NOD Analytics Dashboard"
            width={400}
            height={400}
            className="lg:hidden w-full h-auto object-contain"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button
            className="flex items-center gap-4 bg-[#2F2C28] text-white px-8 py-5 rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out w-full md:w-auto"
            onClick={() => setWaitlistOpen(true)}
          >
            Join the waitlist
            <ArrowRight className="w-6 h-6" />
          </button>
          <Link href="/nod">
            <button className="flex items-center gap-4 justify-center bg-[#C1BBB4] text-[#2F2C28] px-8 py-5 rounded-full transition-all hover:bg-[#C1BBB4] shadow-[0_5px_0_0_#9A918C] hover:shadow-[0_3px_0_0_#9A918C] duration-300 cursor-pointer ease-in-out w-full md:w-auto">
              Learn More
              <ArrowRight className="w-6 h-6" />
            </button>
          </Link>
        </div>
        <JoinWaitlistDialog open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
      </div>
    </section>
  );
};

export default NOD;
