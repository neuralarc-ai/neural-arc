"use client";
import Image from "next/image";

interface DashboardProps {
  title: string;
  subtitle: string;
  bullets: string[];
  buttonText: string;
  onButtonClick?: () => void;
  image: string;
  mobileImage?: string;
  imageAlt?: string;
}

export default function Dashboard({
  title,
  subtitle,
  bullets,
  buttonText,
  onButtonClick,
  image,
  mobileImage,
  imageAlt = "Dashboard Illustration",
}: DashboardProps) {
  return (
    <section className="w-full max-w-[1640px] mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 text-[#232323]">{title}</h2>
      <p className="text-lg md:text-xl text-center mb-10 text-[#7A7A7A]">{subtitle}</p>
      <div className="bg-[url('/images/case-study/dashboard-bg.png')] overflow-hidden bg-cover bg-center rounded-3xl flex flex-col xl:flex-row gap-8 xl:h-[680px]">
        {/* Left: Bullets, Image (mobile), and Button */}
        <div className="w-full xl:w-[549px] h-fit flex-shrink-0 flex flex-col items-center justify-center xl:items-center xl:justify-center p-4 md:p-8 my-auto">
          <ul className="mb-8 flex flex-col gap-6 text-white text-lg 2xl:text-[32px] lg:text-2xl list-disc list-inside pl-2">
            {bullets.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          {/* Mobile Image: show between list and button for below xl */}
          <div className="xl:hidden w-full flex justify-center mb-8">
            <div className="relative w-full max-w-[420px] h-[220px]">
              <Image src={mobileImage || image} alt={imageAlt} fill className="object-contain" priority />
            </div>
          </div>
          {/* Button for below xl screens (below image) */}
          <div className="xl:hidden w-full flex justify-center mb-4">
            <button
              className="px-8 py-4 bg-[#C1BBB4] cursor-pointer text-[#232323] rounded-full font-semibold shadow-[0_5px_0_0_#6B5B4D] hover:shadow-[0_3px_0_0_#6B5B4D] transition mx-auto"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
          {/* Button for xl and above (bottom of text) */}
          <button
            className="hidden xl:block px-8 py-4 cursor-pointer bg-[#C1BBB4] text-[#232323] rounded-full font-semibold shadow-[0_5px_0_0_#6B5B4D] hover:shadow-[0_3px_0_0_#6B5B4D] transition mt-auto self-start xl:mx-0"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
        {/* Right: Image (desktop only) */}
        <div className="hidden xl:block w-full items-center justify-center relative pt-8 pr-8">
          {/* Desktop Image - absolutely bottom right */}
          <div className="absolute bottom-0 right-0 xl:-right-30 xl:-bottom-10 2xl:right-10 2xl:-bottom-20 w-full h-full">
            <Image src={image} alt={imageAlt} fill className="object-contain xl:scale-150 2xl:scale-100" priority />
          </div>
        </div>
      </div>
    </section>
  );
} 