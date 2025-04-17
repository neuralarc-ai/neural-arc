import React from 'react'
import Image from 'next/image'

const Mission = () => {
  const cards = [
    {
      image: '/images/careers/high-impact.svg',
      title: 'High-Impact, Rapid Environment',
      description: 'Ship real products, solve real problems, and grow with every sprint. Build with purpose, backed by data and driven by impact.'
    },
    {
      image: '/images/careers/learn.svg',
      title: 'Learn, Explore, and Evolve',
      description: 'Continuous learning, creative freedom, and space to take smart risks — all in an environment that values curiosity, ownership, and bold thinking.'
    },
    {
      image: '/images/careers/collaborative.svg',
      title: 'Collaborative, No-Ego Culture',
      description: 'We believe the best ideas win—and we build them together. Collaboration, open feedback, and shared ownership drive everything we create.'
    }
  ]

  return (
    <section className='mx-auto py-10'>
      <div>
        <p className='text-2xl font-semibold text-[#6A6A6A] text-center mb-4'>A Mission That Matters</p>
        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-semibold text-[#373737] tracking-tighter text-center mb-4">
          Why Work With Us
        </h2>
        <p className="text-2xl text-[#6A6A6A] text-center max-w-[1200px] mx-auto mb-12 font-semibold">
          We believe in a world where every business—no matter the size—can access the power of AI.
          At Neural Paths, you will work on real problems, shape real products, and make a real impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-10 flex flex-col justify-between h-[600px] ${
                index === 0 ? 'bg-[#E3D9CF]' : 
                index === 1 ? 'bg-[#E4E0DE]' : 
                'bg-[#D5DACF]'
              }`}
            >
              <div className="flex items-center justify-center">
                <div className="relative w-[475px] h-[306px] flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt=""
                    width={344}
                    height={273}
                    className="w-auto h-auto"
                    priority
                  />
                </div>
              </div>
              <div className='min-h-[138px]'>
                <h3 className="text-3xl font-semibold text-[#242820] mb-4">
                  {card.title}
                </h3>
                <p className="text-lg text-[#141212] font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission