import React from 'react'
import Image from 'next/image'

const LLM = () => {
  return (
    <section className="relative w-full mx-auto py-16 my-12 overflow-hidden rounded-3xl bg-[#F0EFEC]">
      {/* Background Images */}
      <Image
        src="/images/llm/bottom-left.svg"
        alt=""
        width={500}
        height={500}
        className="absolute bottom-0 left-0 z-0 pointer-events-none select-none"
      />
      <Image
        src="/images/llm/top-right.svg"
        alt=""
        width={500}
        height={500}
        className="absolute top-0 right-0 z-0 pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1713px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="-mb-24">
          <h3 className="text-xl lg:text-[40px] text-[#62523E]/75 mb-4">
            Fusion-Driven Intelligence
          </h3>
          <h2 className="text-4xl lg:text-6xl font-semibold text-[#4A3C2A] mb-6">
            LLM Coalition Power
          </h2>
          <p className="text-lg lg:text-2xl text-[#000000] max-w-[862px] text-balance">
            The integration of industry-leading Large Language Models (LLMs) empowers the platform with advanced intelligence and dynamic adaptability. This forward-looking approach guarantees scalable, flexible, and frictionless access to state-of-the-art AI capabilities enabling seamless deployment across diverse and evolving use cases.
          </p>
        </div>

        {/* LLM Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1095px] ml-auto">
          {/* First Row - Last Two Logos */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="flex items-center justify-center p-6 bg-transparent rounded-full border-3 border-black">
            <Image
              src="/images/llm/deepseek.png"
              alt="Deepseek"
              width={200}
              height={60}
              className="h-11 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-transparent rounded-full border-3 border-black">
            <Image
              src="/images/llm/open-router.png"
              alt="OpenRouter"
              width={200}
              height={60}
              className="h-11 w-auto object-contain"
            />
          </div>

          {/* Second Row - Last Three Logos */}
          <div className="hidden lg:block"></div>
          <div className="flex items-center justify-center p-6 bg-transparent rounded-full border-3 border-black">
            <Image
              src="/images/llm/gemini.png"
              alt="Gemini"
              width={200}
              height={60}
              className="h-11 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-transparent rounded-full border-3 border-black">
            <Image
              src="/images/llm/grok.png"
              alt="Grok"
              width={200}
              height={60}
              className="h-11 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-transparent rounded-full border-3 border-black">
            <Image
              src="/images/llm/mistral.png"
              alt="Mistral AI"
              width={200}
              height={60}
              className="h-11 w-auto object-contain"
            />
          </div>

          {/* Third Row - All Logos */}
          <div className="flex items-center justify-center p-6 bg-transparent rounded-full border-3 border-black">
            <Image
              src="/images/llm/openai.png"
              alt="OpenAI"
              width={200}
              height={60}
              className="h-11 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-transparent rounded-full border-3 border-black">
            <Image
              src="/images/llm/claude.png"
              alt="Claude"
              width={200}
              height={60}
              className="h-11 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-transparent rounded-full border-3 border-black">
            <Image
              src="/images/llm/hugging-face.png"
              alt="Hugging Face"
              width={200}
              height={60}
              className="h-11 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-transparent rounded-full border-3 border-black">
            <Image
              src="/images/llm/llama.png"
              alt="LLaMA"
              width={200}
              height={60}
              className="h-11 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LLM