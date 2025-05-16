'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Suite = () => {
  return (
    <section className="w-full relative lg:h-[802px] mb-12 rounded-3xl bg-[url('/images/suite/suite-bg-mobile.png')] lg:bg-[url('/images/suite/suite-bg.png')] bg-no-repeat bg-cover bg-center">

      {/* Content */}
      <div className="relative z-10 max-w-[1858px] mx-auto px-4 py-8 flex flex-col items-center text-center">
        <h2 className="text-[32px] lg:text-[60px] font-semibold text-[#373737] mb-2 tracking-tight">
          NeuralPaths Micro SaaS Suite
        </h2>
        <h3 className="text-base lg:text-[32px] text-[#373737]/75 font-semibold tracking-tight mb-2">
          Small Tools. Massive Impact.
        </h3>
        <p className="text-[#373737] text-base lg:text-2xl max-w-[1560px] px-4lg:px-8 mb-8 font-light tracking-tight">
          NeuralArc delivers AI-powered MicroSaaS tools built for real business impact. From legal automation to marketing, finance, and competitor intelligence—each product runs on Neural Nexus, offering fast results with zero complexity.
        </p>

        <Link
          href="https://neuralpaths.ai"
          className="inline-flex items-center gap-2 z-20 px-8 py-4 bg-[#2F2C28] text-white rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 cursor-pointer ease-in-out"
        >
          Learn More <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Logos */}
        <div className="relative w-full flex items-center justify-center">
          <Image
            src="/images/suite/suite-logos.png"
            alt="Suite Logos"
            width={800}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Bottom Text */}
        <p className="text-[#2F2C28] text-2xl -mt-12 z-20 hidden lg:block">
          The suite is growing. Real needs. Lasting impact.
        </p>
      </div>
    </section>
  )
}

export default Suite
