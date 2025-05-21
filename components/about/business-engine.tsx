import React from 'react'
import Image from 'next/image'

const features = [
  "Zero setup headaches",
  "ROI in days, not quarters",
  "Vertical insights included",
  "Capital-light architecture",
  "Scalable dual-revenue model"
];

const BusinessEngine = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-[1441px] mx-auto px-4">
        {/* Centered Heading */}
        <h2 className="text-4xl lg:text-7xl font-semibold text-[#373737] mb-24 text-center">
          More Than AI—A Business Engine
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 flex justify-start">
            <Image
              src="/images/about/business-engine.png"
              alt="Business Engine"
              width={584}
              height={560}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 flex justify-end">
            <div className="max-w-[500px]">
              {/* Features List */}
              <div className="space-y-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-[2px] h-6 bg-[#6A5D4D]"></div>
                    <p className="text-xl lg:text-3xl text-[#6A5D4D]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessEngine;