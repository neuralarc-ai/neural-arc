'use client';
import Image from 'next/image';

export default function HeroSection({
  title,
  subtitle,
  description,
  buttonText = 'Try Now',
  onButtonClick,
  image,
}: {
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  image: string;
}) {
  return (
    <section className="w-full rounded-3xl bg-[#232323] bg-[url('/images/case-study/hero-bg.png')] bg-cover bg-center px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[824px]">
      {/* Left: Text */}
      <div className="flex flex-col justify-center items-start text-left lg:pl-16 xl:pl-24">
        <h1 className="text-white text-[32px] lg:text-5xl 2xl:text-[90px] font-semibold mb-4 leading-tight tracking-tight text-balance">{title}</h1>
        <h2 className="text-white text-base lg:text-4xl font-semibold mb-4">{subtitle}</h2>
        <p className="text-[#E4E4E4] text-sm lg:text-2xl font-light mb-8 max-w-3xl">{description}</p>
        <div className="hidden lg:block">
          <button
            className="px-12 py-4 bg-[#C1BBB4] cursor-pointer text-[#232323] rounded-full font-semibold shadow-[0_5px_0_0_#6B5B4D] hover:shadow-[0_3px_0_0_#6B5B4D] transition"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex justify-center items-end w-full relative">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-contain h-full w-full"
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute left-0 right-0 bottom-0 h-1/3 w-full pointer-events-none bg-gradient-to-b from-transparent to-[#161616]" />
      </div>
      {/* Mobile Button */}
      <div className="block lg:hidden w-full mt-6 justify-center">
        <button
          className="px-8 py-4 bg-[#C1BBB4] cursor-pointer text-[#232323] rounded-full font-semibold shadow-[0_5px_0_0_#6B5B4D] hover:shadow-[0_3px_0_0_#6B5B4D] transition"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}