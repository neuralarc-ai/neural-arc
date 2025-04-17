import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Openings = () => {
  const positions = [
    {
      title: "Product Designer",
      description: "In-Office • Full-time",
      illustration: "/images/careers/product-designer.png"
    },
    {
      title: "Full Stack Engineer (AI-First)",
      description: "In-Office • Full-time",
      illustration: "/images/careers/full-stack-engineer.png"
    },
    {
      title: "Machine Learning Research Intern",
      description: "In-Office • Full-time",
      illustration: "/images/careers/machine-learning.png"
    },
    {
      title: "Growth & Partnerships Associate",
      description: "In-Office • Full-time",
      illustration: "/images/careers/growth-partnerships.png"
    },
    {
      title: "MicroSaaS Product Manager",
      description: "In-Office • Contract",
      illustration: "/images/careers/microsaas.png"
    }
  ];

  return (
    <section className='mx-auto grain-texture py-20'>
      <div className="">
        <p className='text-2xl font-semibold text-[#6A6A6A] text-center mb-4'>A Mission That Matters</p>
        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-semibold text-[#373737] tracking-tighter text-center mb-4">
          Current Openings
        </h2>
        <p className="text-2xl text-[#6A6A6A] font-semibold text-center mb-16">
          We are still shaping our team—so if you don&apos;t see a perfect role, we still want to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ">
          {positions.map((position, index) => (
            <Link 
              href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="group relative bg-[#6B5B4D] rounded-2xl px-12 py-12 flex flex-col min-h-[238px] overflow-hidden cursor-pointer justify-center"
            >
              {/* Background Illustration */}
              <div className="absolute inset-0">
                <Image
                  src={position.illustration}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold text-white mb-4">
                    {position.title}
                  </h3>
                  <p className="text-xl text-white/80">
                    {position.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <Image
                    src="/images/careers/arrow.svg"
                    alt=""
                    width={80}
                    height={24}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </Link>
          ))}
          
          {/* Don't see your role card */}
          <Link 
            href="/careers/apply"
            className="group rounded-2xl px-12 py-12 flex flex-col justify-center cursor-pointer"
          >
            <div className="flex-1 text-center">
              <h3 className="text-6xl font-semibold text-[#373737]/50 mb-4">
                Don&apos;t see your role?
              </h3>
              <p className="text-2xl text-black/50">
                Scroll down and tell us why you belong here.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Openings;