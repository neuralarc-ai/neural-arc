import React from 'react'
import Link from 'next/link'

const Careers = () => {
  return (
    <section className="relative mt-10">
      <div className="bg-[#F3F3F3] rounded-4xl px-4 md:px-8 xl:px-20 py-8 lg:py-16 xl:py-10  mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:items-center lg:text-center mb-10">
          <h2 className="text-2xl 2xl:text-6xl lg:text-4xl font-semibold text-[#343434] mb-4 tracking-tight">
            Careers at NeuralArc
          </h2>
          <p className="text-lg lg:text-xl text-[#6A6A6A]">
          We are not just riding the AI wave, we are building the rails beneath it.
          </p>
        </div>

        {/* Description and CTA */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 lg:px-12 py-10">
          <div className="max-w-[1012px] flex flex-col gap-6">
            <p className="text-xl lg:text-3xl text-[#55493D] font-semibold tracking-tight">
            Bold thinkers, creators, and future teammates we want to hear from you. Let’s connect and explore how you could be part of our journey.
            </p>
            <a
              href="mailto:careers@neuralarc.ai"
              className="text-[#2F2C28] text-lg lg:text-[32px] font-semibold hover:text-[#2F2C28] hover:underline transition-all duration-300"
            >
              careers@neuralarc.ai
            </a>
          </div>
          <div className="flex flex-row flex-shrink-0 items-center gap-6">
            <Link 
              href="/careers"
              className="w-full lg:w-fit flex justify-center items-center gap-2 bg-[#2F2C28] text-white px-8 py-4 rounded-full transition-all shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out"
            >
              Your Next Adventure
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
        </div>
      </div>
    </section>
  )
}

export default Careers