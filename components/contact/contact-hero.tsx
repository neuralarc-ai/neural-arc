import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactHero = () => {
  return (
    <section className="relative mx-auto px-4 md:px-8 2xl:px-20">
      {/* Background Image */}
      <div className="absolute top-0 right-0 xl:w-8/12 w-7/12 h-full pointer-events-none -z-10">
        <Image
          src="/images/contact/contact-hero.png"
          alt="Contact Hero Background"
          width={1000}
          height={1000}
          priority
          className="w-full h-auto object-contain opacity-90 -translate-y-10 translate-x-12"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 xl:h-[610px]">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl font-semibold text-[#55493D] mb-12 tracking-tighter">
          Step Into the Neural Flow
        </h1>
        <p className="text-base xl:text-lg text-[#55493D] mb-20 max-w-[553px] leading-tight">
          Whether you are curious about our products, or dreaming of joining the
          Neural Paths team — we are here to connect.
        </p>
        <Link 
          href="/contact#contact-form"
          className="flex items-center gap-4 bg-[#2F2C28] text-white px-10 py-4 rounded-full w-fit transition-all hover:bg-[#2F2C28] hover:shadow-[0_5px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out"
        >
          Get In Touch
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
        </Link>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-12 mt-20">
        {/* Product & Platform Support Card */}
        <div className="bg-[#E2E7DD] rounded-3xl flex flex-col h-full relative overflow-hidden" role="region" aria-label="Product Support Section">
          {/* Background Image */}
          <div className="absolute top-0 right-0 h-full w-full pointer-events-none translate-x-50 -translate-y-40">
            <Image
              src="/images/contact/product-bg.svg"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="2xl:px-24 2xl:pt-16 xl:p-12 lg:p-8 md:p-6 flex-1 relative">
            <Image
              src="/images/contact/product.svg"
              alt="Neural Paths Product Support Illustration"
              width={276}
              height={276}
              className="2xl:mb-15 mb-10"
              priority
            />
            <h2 className="text-2xl 2xl:text-6xl lg:text-4xl font-semibold text-[#343434]/70 mb-4 tracking-tight">
              Product & Platform Support
            </h2>
            <p className="text-[#55493D] 2xl:text-2xl text-lg font-light tracking-tight">
              Have questions about Neural Nexus or our MicroSaaS suite?
            </p>
          </div>
          <div className="2xl:px-24 2xl:pb-12 xl:p-12 lg:p-8 md:p-6 bg-[#D7DDCF] rounded-b-3xl mt-auto relative">
            <div className="flex flex-col xl:grid xl:grid-cols-2 justify-between gap-2">
              <p className="2xl:text-lg lg:text-sm text-[#55493D] text-balance">
                Our product specialists are ready to assist you.
              </p>
              <div className="flex xl:flex-col gap-1">
                <p className="2xl:text-2xl lg:text-sm text-black font-semibold">
                  Email us at:
                </p>
                <a
                  href="mailto:product@neuralpaths.ai"
                  className="2xl:text-2xl lg:text-sm text-[#2F2C28] font-semibold"
                  aria-label="Contact Neural Paths Product Support Team"
                >
                  product@neuralpaths.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* General Inquiries Card */}
        <div className="bg-[#D5C9BC] rounded-3xl flex flex-col h-full relative overflow-hidden" role="region" aria-label="General Inquiries Section">
          {/* Background Image */}
          <div className="absolute top-0 right-0 h-full w-full pointer-events-none translate-x-60 -translate-y-40">
            <Image
              src="/images/contact/inquiries-bg.svg"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="2xl:px-24 2xl:pt-16 xl:p-12 lg:p-8 md:p-6 flex-1 relative">
            <Image
              src="/images/contact/inquiries.svg"
              alt="Neural Paths General Inquiries Illustration"
              width={323}
              height={276}
              className="2xl:mb-15 mb-10"
              priority
            />
            <h2 className="text-2xl 2xl:text-6xl lg:text-4xl font-semibold text-[#343434]/70 mb-4 tracking-tight max-w-[30%]">
              General Inquiries
            </h2>
            <p className="text-[#55493D] 2xl:text-2xl text-lg font-light tracking-tight">
              Not sure where to begin?
            </p>
          </div>
          <div className="2xl:px-24 2xl:pb-12 xl:p-12 lg:p-8 md:p-6 bg-[#CDBCAD] rounded-b-3xl mt-auto relative">
            <div className="flex flex-col xl:grid xl:grid-cols-2 justify-between gap-2">
              <p className="2xl:text-lg lg:text-sm text-[#55493D] text-balance">
                We will make sure your message finds the right team.
              </p>
              <div className="flex xl:flex-col gap-1">
                <p className="2xl:text-2xl lg:text-sm text-black font-semibold">
                  Email us at:
                </p>
                <a
                  href="mailto:product@neuralpaths.ai"
                  className="2xl:text-2xl lg:text-sm text-[#2F2C28] font-semibold"
                  aria-label="Contact Neural Paths General Inquiries Team"
                >
                  product@neuralpaths.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
