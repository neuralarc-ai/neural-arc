import React from 'react'
import Link from 'next/link'

const Careers = () => {
  return (
    <section className="relative mt-10">
      <div className="bg-[#F3F3F3] rounded-4xl px-4 md:px-8 xl:px-20 py-16 xl:py-10 max-w-[1700px] mx-auto">
        {/* Main Content */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-4xl lg:text-5xl xl:text-[64px] font-semibold text-[#373737] mb-4 tracking-tighter">
            Careers at Neural Paths
          </h2>
          <p className="text-xl text-[#6A6A6A]">
            We are not riding the AI wave—we are laying the tracks.
          </p>
        </div>

        {/* Description and CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 px-12 py-10">
          <div className="max-w-[1012px] flex flex-col gap-6">
            <p className="text-2xl lg:text-3xl text-[#55493D] font-semibold tracking-tight">
              We love meeting bold thinkers, contributors, and future teammates.
              Tell us about yourself or inquire about open positions.
            </p>
            <a 
              href="mailto:careers@neuralpaths.ai"
              className="text-2xl text-[#2F2C28] font-semibold hover:text-[#55493D] transition-colors duration-300"
            >
              careers@neuralpaths.ai
            </a>
          </div>
          <div className="flex flex-row flex-shrink-0 items-center gap-6">
            <Link 
              href="/careers"
              className="flex items-center gap-2 bg-[#2F2C28] text-white px-8 py-4 rounded-full transition-all hover:shadow-[0_5px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out"
            >
              View Open Roles
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