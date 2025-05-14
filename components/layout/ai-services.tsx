import React from 'react';
import Link from 'next/link';

export default function AiServices() {
  return (
    <div className="w-full min-h-[400px] rounded-2xl p-6 md:p-12 flex flex-col gap-8 relative overflow-hidden bg-[url('/images/grain/hero-grain.svg')] bg-cover bg-center bg-[#b7a692] shadow-lg">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 w-full">
        {/* Left: Headline & Subheadline */}
        <div className="flex-1 flex flex-col gap-4 min-w-[220px]">
          <div className="text-lg lg:text-[40px] text-[#7c766e] font-medium">Tailored AI Solutions</div>
          <div className="text-3xl lg:text-6xl font-semibold text-[#3d3935] leading-tight">
            Build the AI You&apos;ve Been Imagining
          </div>
        </div>
        {/* Right: Description & Button */}
        <div className="flex-1 flex flex-col gap-4 min-w-[220px] max-w-xl">
          <div className="text-[#3d3935] text-base lg:text-2xl font-normal">
            From concept to launch, we design intelligent solutions tailored to your business. Let&apos;s turn bold ideas into powerful, scalable tools—with AI that&apos;s made for you.
          </div>
          <Link href="https://neuralpaths.ai/ai-solutions">
            <button className="mt-2 bg-[#26221c] text-white px-6 py-2 rounded-full font-medium text-base flex items-center gap-2 hover:bg-[#3d3935] transition w-max">
              Start Your Project <span aria-hidden>→</span>
            </button>
          </Link>
        </div>
      </div>
      {/* Bottom Section: Pills */}
      <div className="flex flex-col lg:flex-row gap-4 mt-2 w-full">
        <div className="flex flex-col lg:flex-row gap-4">
          <button className="w-fit lg:w-auto rounded-full bg-[#ece7e1] px-6 py-3 text-2xl font-bold shadow-md transition">AI Micro-Apps</button>
          <button className="w-fit lg:w-auto rounded-full bg-[#ece7e1] px-6 py-3 text-2xl font-bold shadow-md transition">Workflow Automation</button>
          <button className="w-fit lg:w-auto rounded-full bg-[#ece7e1] px-6 py-3 text-2xl font-bold shadow-md transition">Intelligent UI/UX</button>
        </div>
      </div>
    </div>
  );
}
