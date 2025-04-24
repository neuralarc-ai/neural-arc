'use client'

import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto pb-12">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* ORB Card */}
        <div className="bg-[#E0E4DC] rounded-4xl p-8 xl:p-12 flex flex-col h-full">
          {/* Top Section */}
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between w-full border-b border-[#71717133] pb-12">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/orb/orb.svg"
                  alt="ORB"
                  width={64}
                  height={64}
                  className="object-contain w-10 xl:w-16"
                />
                <h2 className="text-[40px] xl:text-[60px] font-bold text-[#465855]">ORB</h2>
              </div>
              <p className="text-[#255B47]/45 font-semibold text-base xl:text-xl">
                {"{Outlast. Reimagine. Build.}"}
              </p>
            </div>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 bg-[#2F2C28] text-white px-6 py-3 rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 whitespace-nowrap mt-6 xl:mt-auto"
            >
              Join the waitlist
              <Image
                src="/icons/arrow.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Description */}
          <p className="text-[#2F2C28] text-lg leading-relaxed pt-12">
            In an era where market dynamics change every 24 hours and 90% of strategic moves can mean the difference between dominance and obsolescence, ORB emerges as your indispensable ally. Engineered by Neural Arc, ORB is the ultimate AI-driven Competitor Intelligence Platform, tailored specifically for ambitious startups and rapidly scaling mid-sized companies hungry for sustained success.
          </p>
        </div>

        {/* NOD Card */}
        <div className="bg-[#E1DBD4] rounded-4xl p-8 xl:p-12 flex flex-col h-full">
          {/* Top Section */}
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between w-full border-b border-[#71717133] pb-12">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/nod/nod.svg"
                  alt="NOD"
                  width={64}
                  height={64}
                  className="object-contain w-10 xl:w-16"
                />
                <h2 className="text-[40px] xl:text-[60px] font-bold text-[#5F554F]">NOD</h2>
              </div>
              <p className="text-[#584F48]/75 font-semibold text-base xl:text-xl">
                {"{Navigate. Optimize. Disrupt.}"}
              </p>
            </div>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 bg-[#2F2C28] text-white px-6 py-3 rounded-full transition-all hover:bg-[#2F2C28] shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] duration-300 whitespace-nowrap mt-6 xl:mt-auto"
            >
              Join the waitlist
              <Image
                src="/icons/arrow.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Description */}
          <p className="text-[#2F2C28] text-lg leading-relaxed pt-12">
            NOD is an enterprise-grade AI analytics platform that empowers businesses especially those without dedicated data teams to make smarter decisions, faster. Built on powerful LLM infrastructure, NOD transforms raw data into real-time, industry-specific insights, reducing the path from data to action from months to days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
