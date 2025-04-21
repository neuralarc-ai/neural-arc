import React from 'react'

const Purpose = () => {
  return (
    <section className="xl:h-[1418px] rounded-4xl flex items-center justify-center py-25 bg-[url('/images/about/purpose-mobile.png')] lg:bg-[url('/images/about/purpose.png')] bg-cover bg-no-repeat">
        <div className="flex text-white flex-col gap-6 xl:p-22 self-center w-fit rounded-2xl bg-[url('/images/about/inner.png')] bg-no-repeat bg-cover">
            <h3 className='font-light text-2xl'>Our Philosophy</h3>
            <h2 className='font-semibold text-7xl mb-6'>Guided by Purpose. <br /> Built for People</h2>
            <p className='text-sm xl:text-2xl max-w-[757px]'>
            At NeuralARC, we believe that intelligence—both artificial and human—should be a force multiplier, not a barrier. We are here to break down the walls between innovation and access, building tools that don&apos;t just analyze data, but empower the people behind it.
            <br /><br />
            We design with empathy, build with clarity, and move with intent. Every product we launch starts with a single question: &quot;Will this make it easier for someone to think, decide, or create?&quot; If the answer is yes, we double down.
            <br /><br />
            Our philosophy blends the precision of technology with the unpredictability of human ambition. We are not chasing hype we are shaping habits. In a world racing toward automation, NeuralARC is focused on augmentation elevating everyday decisions with intelligence that feels intuitive.
            We are early, we are ambitious, and we are building the kind of future we want to work in.
            </p>
        </div>
    </section>
  )
}

export default Purpose