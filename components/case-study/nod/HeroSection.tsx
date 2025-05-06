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
    <section className="w-full rounded-3xl bg-[#232323] bg-[url('/images/case-study/hero-bg.png')] bg-cover bg-center relative h-[770px] lg:h-[824px] overflow-hidden lg:mb-16 mb-8">
      {/* Left: Text */}
      <div className="relative z-10 flex flex-col lg:justify-center md:justify-start items-start text-left md:pl-12 px-10 xl:pl-24 h-full max-w-xl lg:max-w-3xl xl:max-w-4xl lg:pt-12 pt-10">
        <h1 className="text-white text-[32px] lg:text-5xl xl:text-[80px] font-bold mb-4 leading-tight tracking-tighter text-balance drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]">{title}</h1>
        <h2 className="text-white text-base lg:text-4xl font-semibold mb-6 drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]">{subtitle}</h2>
        <p className="text-[#E4E4E4] text-sm lg:text-2xl mb-8 text-balance drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]">{description}</p>
        <div className="hidden lg:block">
          <button
            className="px-8 py-4 bg-[#C1BBB4] cursor-pointer text-[#232323] rounded-full font-semibold shadow-[0_5px_0_0_#6B5B4D] hover:shadow-[0_3px_0_0_#6B5B4D] transition"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>

      {/* Desktop Image */}
      <div className="absolute top-0 right-0 xl:-right-20 2xl:right-0 lg:-right-125 w-full xl:w-1/2 h-full hidden lg:block">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Image Container */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-1/2">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent z-10" />
        
        {/* Mobile Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain -translate-x-5 translate-y-10"
          priority
        />
      </div>

      {/* Mobile Button */}
      <div className="lg:hidden w-full justify-center absolute bottom-8 left-0 right-0 z-20 flex items-center">
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