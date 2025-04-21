import React from "react";

const AboutHero = () => {
  return (
    <section className="mx-auto w-full">
      <div className="h-[618px] lg:h-auto flex rounded-4xl mb-10 flex-col gap-6 py-54 text-center mx-auto bg-[url('/images/about/about-hero-mobile.png')] lg:bg-[url('/images/about/about-hero.png')] bg-cover bg-no-repeat">
        <h2 className="text-[#868686] font-semibold lg:text-5xl text-lg">NeuralArc</h2>
        <h1 className="text-[92px] font-semibold text-[#C0B3A6] mb-4">
          NeuralNod
        </h1>
        <h1 className="text-white font-semibold lg:text-7xl text-3xl text-shadow-[0_0_40px_rgba(255,255,255,0.35)]">AI That Works for You</h1>
        <p className="text-white text-sm lg:text-lg mx-auto px-4 text-balance md:max-w-[50%] lg:max-w-[1245px]">
          NeuralArc is breaking down the barriers to AI adoption. With our
          NeuralNod platform and MicroSaaS suite, we deliver powerful,
          industry-specific insights to businesses that don&apos;t have data
          teams—so you can make smarter decisions, faster.
        </p>
      </div>
      <div className="h-[520px] mb-10 rounded-3xl bg-[url('/images/about/smarter-business-mobile.png')] xl:bg-[url('/images/about/smarter-business.png')] bg-cover bg-no-repeat flex lg:items-center lg:px-25 px-8 py-10 xl:py-0">
        <div className="max-w-[693px] flex flex-col items-center lg:justify-center gap-6 tracking-tighter text-center xlg:text-start">
            <h3 className="text-[#392E26] xl:text-7xl text-3xl font-semibold">
                Smarter Business for Everyone
            </h3>
            <p className="text-[#392E26] text-lg xl:text-2xl font-semibold">We are here to make enterprise-grade AI accessible to every business—without the complexity or cost.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
