import React from 'react'
import Link from 'next/link'

const Careers = () => {
  return (
    <section className="w-full mx-auto py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-7xl font-semibold text-[#373737] mb-6 tracking-tight">
          Careers at Neural Paths
        </h1>
        <p className="text-lg lg:text-2xl font-semibold text-[#55493D] mx-auto px-20 tracking-tight">
          We are building a mission-driven team to transform how businesses harness and apply AI. If you are curious, ambitious, and passionate about creating intelligent systems that solve real-world challenges, we would love to connect
        </p>
      </div>

      {/* Contact Box */}
      <div className="mx-auto bg-[#E3D9CF] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#000000]/50 mb-6">
            Introduce yourself
          </h2>
          <p className="text-lg lg:text-3xl">
            careers@neuralpaths.ai
          </p>
        </div>
        <Link
          href="/open-roles"
          className="flex items-center gap-2 md:gap-8 w-fit bg-[#2F2C28] text-white px-8 py-5 rounded-full transition-all hover:shadow-[0_5px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out"
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
    </section>
  )
}

export default Careers