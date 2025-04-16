"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface StarRatingProps {
  rating: number;
}

interface TestimonialCardProps {
  rating: number;
  quote: string;
  name: string;
  className?: string;
}

interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  name: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`md:w-7 md:h-7 w-4 h-4 ${i < rating ? "text-[#55493D]" : "text-[#C6C9C1]"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ rating, quote, name, className }) => (
  <div className={`bg-[#E9E7E1] lg:p-18 p-8 rounded-4xl h-full flex flex-col gap-6 ${className}`}>
    <StarRating rating={rating} />
    <p className="mt-4 text-[#232121] flex-grow md:text-2xl text-sm">&quot;{quote}&quot;</p>
    <p className="mt-4 text-[#8B6B43] md:text-xl text-2xl">{name}</p>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 4,
      quote:
        "Rovyk streamlined our entire AI workflow. No more switching between platforms or paying for separate tools—everything we need is built in, easy to use, and far more affordable. It’s like having a complete AI toolkit in one place.",
      name: "Nina R.",
    },
    {
      id: 2,
      rating: 3,
      quote:
        "LawBit generated contracts in minutes that used to take our legal team days. It’s been a total game changer for scaling fast without bottlenecks. We’ve cut legal overhead and accelerated our deal flow—without compromising quality.",
      name: "Tanya P.",
    },
    {
      id: 3,
      rating: 4,
      quote:
        "Kashew took us from Excel chaos to real-time financial clarity. We’re now saving over 20 hours a month on manual tracking—and finally making decisions with up-to-date insights",
      name: "David K.",
    },
    {
      id: 4,
      rating: 4,
      quote:
        "We plugged Spider into our investor outreach and matched with 3 VCs in just a week. The deck scoring system is scary accurate—it gave us clear, actionable feedback that actually moved the needle. It felt like having a seasoned pitch coach and warm intro engine rolled into one.",
      name: "Josh T.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Define slider options outside of the hook
  const sliderOptions = isMobile
    ? {
        loop: true,
        slides: {
          perView: 1.2,
          spacing: 20,
        },
      }
    : {
        loop: false,
        slides: {
          perView: 2,
          spacing: 24,
        },
      };

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(sliderOptions);

  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="w-full mx-auto lg:px-4 relative grain-hero translate-x-8 lg:translate-x-0">
      {/* Mobile Layout: Image and Carousel */}
      {isMobile ? (
        <>
          <div className="flex justify-center mb-12 -translate-x-8">
            <Image
              src="/images/illustrations/quotes.png"
              alt="What Are People Saying"
              width={500}
              height={500}
              className="h-auto w-auto object-contain"
            />
          </div>
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((t) => (
              <div key={t.id} className="keen-slider__slide">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </>
      ) : (
        // Desktop Layout: Grid-based layout
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <Image
              src="/images/illustrations/quotes.png"
              alt="What Are People Saying"
              width={500}
              height={500}
              className="2xl:w-[575px] h-auto object-contain lg:-mt-24"
            />
          </div>

          <div className="col-span-12 md:col-span-6">
            <TestimonialCard {...testimonials[1]} />
          </div>

          <div className="col-span-12 md:col-span-6 lg:-mt-24 relative z-10">
            <TestimonialCard {...testimonials[0]} />
          </div>

          <div className="col-span-12 md:col-span-6">
            <TestimonialCard {...testimonials[2]} />
          </div>

          <div className="col-span-12">
            <TestimonialCard {...testimonials[3]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
