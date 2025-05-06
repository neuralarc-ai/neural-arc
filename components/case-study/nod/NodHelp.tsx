"use client";
import Image from "next/image";

interface NodHelpSection {
  title: string;
  description: string;
}

interface NodHelpProps {
  image: string;
  imageAlt?: string;
  sections: NodHelpSection[];
}

export default function NodHelp({ image, imageAlt = "NOD Illustration", sections }: NodHelpProps) {
  return (
    <section className="w-full max-w-[1716px] mx-auto px-4 md:px-8 py-12">
      {/* Desktop: grid-cols-2, Mobile: flex-col */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-[320px] lg:h-full">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
        {/* Text Sections */}
        <div className="flex flex-col space-y-12 xl:space-y-24 max-w-[689px] ml-auto">
          {sections.map((section, idx) => (
            <div key={idx} className="">
              <h3 className="text-2xl xl:text-5xl font-semibold mb-4 text-[#3E3E3E] tracking-tight">
                {section.title}
              </h3>
              <p className="text-sm xl:text-base text-[#232323] leading-tight">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 