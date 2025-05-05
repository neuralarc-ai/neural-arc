import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative w-full max-h-[384px] md:max-h-[1019px] px-8 pt-6 mx-auto lg:rounded-[32px] rounded-[16px] bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center -mt-3 overflow-hidden">
        {/* Top Left Illustration */}
        <div className="absolute top-0 hidden xl:block -ml-8">
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
          <h1 className="text-3xl lg:text-7xl font-semibold text-white max-w-full md:max-w-md lg:max-w-4xl mx-auto text-center text-shadow-[0_0_40px_rgba(255,255,255,0.35)] leading-tight tracking-tight">
            The Cognitive Engine for Business Evolution
          </h1>
          <p className="text-sm lg:text-lg text-white lg:max-w-lg md:max-w-md max-w-full mx-auto text-center mt-2 text-balance">
          Where Neural Networks Become NeuralArc
          Transcending the limits of traditional analytics through neural intelligence.
          </p>
        </div>
        <div className="w-full mx-auto flex justify-center items-center mt-10 ">
          <Image
            src="/images/hero/hero-illustration.png"
            alt="hero"
            width={500}
            height={1200}
            className="xl:w-auto xl:h-auto lg:w-[500px] w-[200px] object-contain hidden sm:block"
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
        <div className="absolute bottom-0 -left-14 z-30 lg:left-[-60px] xl:left-[50px] 2xl:left-[200px] hidden xl:block">
          <Image
            src="/images/hero/bottom-left.svg"
            alt="Decorative illustration"
            width={120}
            height={120}
            className="w-auto h-auto object-contain"
          />
        </div>

        {/* Bottom Right Illustration */}
        <div className="absolute bottom-0 right-[150px] 2xl:right-[300px] hidden xl:block opacity-80">
          <Image
            src="/images/hero/bottom-right.svg"
            alt="Decorative illustration"
            width={120}
            height={120}
            className="w-auto h-auto object-contain"
          />
        </div>

        {/* Right Bottom Illustration */}
        <div className="absolute bottom-0 lg:-bottom-16 right-0 hidden xl:block -mr-8">
          <Image
            src="/images/hero/right.svg"
            alt="Decorative illustration"
            width={150}
            height={120}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;