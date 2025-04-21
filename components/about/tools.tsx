import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const tools = [
  {
    icon: "/icons/kashew.svg",
    name: "Kashew",
    title: "AI for Invoicing",
    description: "Kashew generates professional invoices instantly with AI precision, streamlining your billing process effortlessly.",
    link: "",
    isComingSoon: true
  },
  {
    icon: "/icons/lawbit.svg",
    name: "Lawbit",
    title: "AI for Legal Intelligence",
    description: "LawBit simplifies contract creation and analysis with AI-powered accuracy. Effortlessly draft, review, and optimize legal documents in seconds.",
    link: "https://lawbit.ai",
    isComingSoon: false
  },
  {
    icon: "/icons/rovyk.svg",
    name: "Rovyk",
    title: "AI Powerhouse",
    description: "Rovyk lets you seamlessly switch between ten AI models—all in one place, effortlessly making your workflow smoother and more efficient.",
    link: "https://rovyk.com",
    isComingSoon: false
  },
  {
    icon: "/icons/spider.svg",
    name: "Spider",
    title: "AI Pitch Deck Analyzer",
    description: "Spider offers insights on structure, content, and design, boosting your chances of success. Simplify your pitch prep and wow investors with data-driven recommendations that enhance your storytelling.",
    link: "",
    isComingSoon: true
  }
];

const Tools = () => {
  return (
    <section className="w-full mx-auto py-16 ">
      {/* Header */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl lg:text-7xl font-semibold text-[#373737] mb-4">
          Tools That Think With You
        </h2>
        <p className="text-lg lg:text-2xl text-[#6A6A6A]">
          Targeted, plug-and-play tools solving critical business problems
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 max-w-[1713px] mx-auto">
        {tools.map((tool, index) => (
          <div key={tool.name} className="flex flex-col relative">
            <div className="flex flex-col items-start md:w-[370px]">
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="w-17 h-18"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-4xl font-semibold text-[#2A2A2A]">
                  {tool.name}
                </h3>
                <h4 className="text-2xl font-semibold text-[#343434]">
                  {tool.title}
                </h4>
                <p className="text-[#343434] text-lg leading-relaxed lg:h-[184px] lg:w-[289px]">
                  {tool.description}
                </p>
              </div>

              {/* Try Now Button */}
              {tool.isComingSoon ? (
                <div className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-[#E9E9E9] text-[#868686] rounded-full cursor-not-allowed">
                  Coming Soon
                </div>
              ) : (
                <Link 
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-[#D8D4CE] text-[#2F2C28] rounded-full hover:shadow-[0_5px_0_0_#C6AEA3] transition-all duration-300 cursor-pointer ease-in-out"
                >
                  Try Now
                </Link>
              )}
            </div>
            {/* Separator Line - Only show between items except last in row */}
            {((index + 1) % 4 !== 0) && (index !== tools.length - 1) && (
              <div className="hidden xl:block absolute right-[-2rem] top-0 w-[1px] h-[389px] bg-[#BAB6B6]" />
            )}
            {((index + 1) % 2 !== 0) && (index !== tools.length - 1) && (
              <div className="hidden lg:block xl:hidden absolute right-[-2rem] top-0 w-[1px] h-[389px] bg-[#BAB6B6]" />
            )}
          </div>
        ))}
      </div>

      {/* Neural Nexus Section */}
      <div className="mt-24 bg-[#E2D7CF] lg:h-[355px] rounded-3xl p-4 lg:p-12 flex flex-col lg:flex-row items-center lg:gap-12">
        <div className="lg:w-1/3 flex flex-col justify-center order-1 lg:order-1">
          <h2 className="text-4xl lg:text-7xl font-semibold text-[#8A7E73] mb-8">
            NeuralNOD
          </h2>
          <Link
            href="#"
            className="flex items-center md:gap-8 gap-2 w-fit bg-[#2F2C28] text-white px-8 py-4 rounded-full transition-all hover:shadow-[0_5px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out order-3 lg:order-2"
          >
            Join the waitlist
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
        
        {/* Separator */}
        <div className="w-full lg:w-[3px] h-[2px] lg:h-[209px] bg-[#C4B1A3] self-center order-2 lg:order-2 my-6 lg:my-0"></div>

        <div className="lg:w-2/3 flex items-center order-2 lg:order-3">
          <p className="text-base lg:text-2xl text-[#515151] leading-normal text-balance text-center lg:text-start">
            NeuralNOD is a powerful platform that helps businesses
            —especially those without dedicated data teams—to make smarter decisions, faster.
            Built on powerful LLM infrastructure, NeuralNOD transforms raw data into real-time,
            industry-specific insights, reducing the path from data to action from months to days.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Tools