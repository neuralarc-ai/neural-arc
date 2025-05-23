"use client";
import Image from "next/image";

interface UseCaseItem {
  title: string;
  description: string;
}

interface UseCaseProps {
  title: string;
  image: string;
  mobileImage?: string;
  imageAlt?: string;
  items: UseCaseItem[];
}

export default function UseCase({ title, image, mobileImage, imageAlt = "Use Case Illustration", items }: UseCaseProps) {
  return (
    <section className="w-full max-w-[1858px] mx-auto px-4 md:px-8 py-12">
      <div className="relative bg-[#DEDED1] rounded-[24px] px-6 lg:px-12 py-12 lg:py-20 flex flex-col justify-between overflow-hidden 2xl:h-[1054px]">
        {/* Mobile absolute BG image */}
        {mobileImage && (
          <div className="lg:hidden block absolute top-0 left-0 right-0 w-full mx-auto md:w-[50%] h-[390px] z-0 mt-16 scale-100 overflow-visible">
            <Image src={mobileImage} alt={imageAlt} fill className="object-cover overflow-visible" priority />
          </div>
        )}
        {/* Title and Image */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between relative z-10 mb-32 lg:mb-0">
          <h2 className="font-bold text-[#232323] tracking-tight mb-8 xl:mb-0 text-[32px] xl:text-[72px] leading-tight max-w-[90%] md:max-w-md xl:max-w-3xl z-10 text-shadow-lg">
            {title}
          </h2>
          {/* Image: absolute for xl+, static for below lg */}
          <div className="hidden lg:block absolute -top-46 lg:-right-28 xl:-right-12 z-0 lg:w-[340px] lg:h-[380px] xl:w-[840px] xl:h-[640px]">
            <Image src={image} alt={imageAlt} fill className="object-contain" priority />
          </div>
        </div>
        {/* Grid of Items */}
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-8 mt-4 xl:mt-12 z-10 relative">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col lg:mb-12 mb-4 text-shadow-md">
              <h3 className="text-2xl xl:text-[40px] text-balance max-w-[80%] font-semibold lg:mb-12 text-[#232323] leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm xl:text-2xl text-[#232323] leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 