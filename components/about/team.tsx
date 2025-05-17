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
    role: "SDE - I",
    image: "/images/about/pratik.png",
  },
  {
    name: "Komal",
    role: "Visualizer",
    image: "/images/about/komal.png",
  },
  {
    name: "Sahil",
    role: "SDE - I",
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
    role: "AI Developer",
    image: "/images/about/aman.png",
  },
  {
    name: "Pranav",
    role: "AI Developer",
    image: "/images/about/pranav.png",
  },
  {
    name: "Aditya",
    role: "AI Developer",
    image: "/images/about/aditya.png",
  },
  {
    name: "Utkarsh",
    role: "AI Developer",
    image: "/images/about/utkarsh.png",
  },
];

const Team = () => {
  return (
    <section className="relative w-full bg-[url('/images/about/team.png')] bg-cover bg-center py-24 rounded-4xl">
      <div className="mx-auto px-12 xl:px-30">
        {/* Header Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 mb-24 relative">
          {/* Left Content */}
          <div className="flex flex-col justify-end">
            <h2 className="text-4xl 2xl:text-7xl font-semibold text-white mb-8 text-balance">
              The Architects of Intelligence
            </h2>
            <p className="text-2xl text-[#BAB6B6] xl:max-w-[500px] text-pretty">
              NeuralArc is a team of visionary minds reimagining AI. We create bold, accessible 
              technology that empowers businesses to unlock intelligent insights quickly and efficiently.
            </p>
          </div>

          {/* Separator Line */}
          <div className="hidden xl:block w-[3px] h-[465px] bg-[#FFFFFF]/25 absolute left-[33%] top-1/2 -translate-y-1/2"></div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            {/* Aniket's Card */}
            <div className="flex flex-col items-center">
              <div className="w-full h-full overflow-hidden xl:max-w-[408px]">
                <Image
                  src="/images/about/aniket.png"
                  alt="Aniket Tapre"
                  width={308}
                  height={308}
                  className="xl:w-full xl:h-full h-[200px] object-contain"
                />
              </div>
              <h3 className="text-[40px] text-white font-semibold mt-4">Aniket Tapre</h3>
              <p className="text-xl text-[#BAB6B6]">Founder & CEO</p>
            </div>

            {/* Michael's Card */}
            <div className="flex flex-col items-center">
              <div className="w-full h-full overflow-hidden xl:max-w-[408px]">
                <Image
                  src="/images/about/michael.png"
                  alt="Michael Orleando"
                  width={308}
                  height={308}
                  className="xl:w-full xl:h-full h-[200px] object-contain"
                />
              </div>
              <h3 className="text-[40px] text-white font-semibold mt-4">Michael Orlando</h3>
              <p className="text-xl text-[#BAB6B6]">Co-Founder</p>
            </div>
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="w-full h-[3px] bg-[#FFFFFF]/25 my-24"></div>

        {/* Team Grid - Responsive: 2 cols below xl, 5 cols xl+ */}
        <div className="grid grid-cols-2 xl:grid-cols-5 gap-8 mb-16">
          {teamMembers.map((member, idx) => (
            <div key={member.name + idx} className="flex flex-col items-center">
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
      </div>
    </section>
  )
}

export default Team