import React from 'react'
import Image from 'next/image'

const teamMembers = [
  // First Row
  {
    name: "Yogesh",
    role: "Infrastructure & Tech", 
    image: "/images/about/yogesh.png",
  },
  {
    name: "Sharon",
    role: "IP & Legal",
    image: "/images/about/sharon.png",
  },
  {
    name: "Pratik",
    role: "AI Coder",
    image: "/images/about/pratik.png",
  },
  {
    name: "Komal",
    role: "Visualizer",
    image: "/images/about/komal.png",
  },
  {
    name: "Sahil",
    role: "AI Coder",
    image: "/images/about/sahil.png",
  },
  // Second Row
  {
    name: "Aishwarya",
    role: "User Experience",
    image: "/images/about/aishwarya.png",
  },
  {
    name: "Aman",
    role: "AI Coder",
    image: "/images/about/aman.png",
  },
  {
    name: "Pranav",
    role: "AI Developer",
    image: "/images/about/pranav.png",
  },
];

const Team = () => {
  return (
    <section className="relative w-full bg-[url('/images/about/team.png')] bg-cover bg-center py-24 rounded-4xl">
      <div className="mx-auto px-15 xl:px-30">
        {/* Header Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 mb-24 relative">
          {/* Left Content */}
          <div className="flex flex-col justify-end">
            <h2 className="text-4xl 2xl:text-7xl font-semibold text-white mb-8 text-balance">
              The Architects of Intelligence
            </h2>
            <p className="text-2xl text-[#BAB6B6] xl:max-w-[500px]">
              Neural Paths is a team of visionary minds reimagining AI. We create bold, accessible 
              technology that empowers businesses to unlock intelligent insights quickly and efficiently.
            </p>
          </div>

          {/* Separator Line */}
          <div className="hidden xl:block w-[3px] h-[420px] bg-[#FFFFFF]/25 absolute left-[33%] top-1/2 -translate-y-1/2"></div>

          {/* Center and Right Content Wrapper */}
          <div className="flex flex-col lg:flex-row gap-8 xl:col-span-2">
            {/* Center Image */}
            <div className="w-full h-full overflow-hidden xl:max-w-[408px] ml-auto">
              <Image
                src="/images/about/aniket.png"
                alt="Aniket Tapre"
                width={408}
                height={408}
                className="xl:w-full xl:h-full w-[200px] h-[200px] object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-end max-w-[485px]">
              <p className="text-2xl text-[#BAB6B6] mb-4 text-balance">
                I believe in creating AI that empowers businesses to think smarter and act 
                faster. Our mission is to make intelligence accessible to all, not just a 
                select few.
              </p>
              <h3 className="text-[40px] text-white font-semibold mb-2">Aniket Tapre</h3>
              <p className="text-xl text-[#BAB6B6]">Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="w-full h-[3px] bg-[#FFFFFF]/25 my-24"></div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {teamMembers.slice(0, 5).map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="xl:w-[200px] overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl text-white font-semibold mb-1">{member.name}</h3>
              <p className="text-[#BAB6B6]">{member.role}</p>
            </div>
          ))}
          <div></div> {/* Empty div for 6th column */}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Team Members */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2 col-start-1">
            {teamMembers.slice(5).map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="xl:w-[200px] overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl text-white font-semibold mb-1">{member.name}</h3>
                <p className="text-[#BAB6B6]">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Text Section */}
          <div className="lg:col-span-3 lg:col-start-4">
            <h2 className="lg:text-4xl xl:text-6xl text-[#BAB6B6] font-semibold leading-tight">
              We are focused on building for the long haul, with the right foundation.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team