import React, { memo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Memoize the Hero component to prevent unnecessary re-renders
const Hero = memo(() => {
  const { scrollY } = useScroll();
  
  // Optimize transform calculations by using more efficient ranges
  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  const illustrationY = useTransform(scrollY, [0, 300], [0, -40]);
  const topLeftY = useTransform(scrollY, [0, 300], [0, -25]);
  const topRightY = useTransform(scrollY, [0, 300], [0, -35]);
  
  // Optimize rotation values
  const topLeftRotate = useTransform(scrollY, [0, 300], [0, -5]);
  const topRightRotate = useTransform(scrollY, [0, 300], [0, 5]);

  return (
    <div className="relative w-full max-h-[384px] md:max-h-[1019px] px-8 pt-6 mx-auto lg:rounded-[32px] rounded-[16px] bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center -mt-3 overflow-hidden">
      {/* Top Left Illustration */}
      <motion.div 
        initial={{ opacity: 0, x: -20, y: -20, rotate: -15, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
        style={{ y: topLeftY, rotate: topLeftRotate }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute top-0 hidden xl:block -ml-8"
      >
        <Image
          src="/images/hero/top-left.png"
          alt="Decorative illustration"
          width={560}
          height={460}
          className="w-auto h-auto object-contain"
          priority={false}
          loading="lazy"
          quality={85}
        />
      </motion.div>

      {/* Top Right Illustration */}
      <motion.div 
        initial={{ opacity: 0, x: 20, y: -20, rotate: 15, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
        style={{ y: topRightY, rotate: topRightRotate }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="absolute top-[60px] lg:top-[20px] xl:top-[60px] right-[160px] lg:right-[60px] xl:right-[160px] hidden xl:block -mr-8"
      >
        <Image
          src="/images/hero/top-right.png"
          alt="Decorative illustration"
          width={340}
          height={320}
          className="w-auto h-auto object-contain"
          priority={false}
          loading="lazy"
          quality={85}
        />
      </motion.div>

      <motion.div 
        style={{ y: textY }}
        className="xl:mt-37 lg:mt-20 mt-5"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
          className="text-3xl lg:text-7xl font-semibold text-white max-w-full md:max-w-md lg:max-w-4xl mx-auto text-center text-shadow-[0_0_40px_rgba(255,255,255,0.35)] leading-tight tracking-tight"
        >
          The Cognitive Engine for Business Evolution
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
          className="text-sm lg:text-lg text-white lg:max-w-lg md:max-w-md max-w-full mx-auto text-center mt-2 text-balance"
        >
          Where Neural Networks Become NeuralArc
          Transcending the limits of traditional analytics through neural intelligence.
        </motion.p>
      </motion.div>

      <div className="w-full mx-auto flex justify-center items-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ y: illustrationY }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          className="hidden sm:block"
        >
          <Image
            src="/images/hero/hero-illustration.png"
            alt="hero"
            width={500}
            height={1200}
            className="xl:w-auto xl:h-auto lg:w-[500px] w-[200px] object-contain"
            priority={true}
            quality={90}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ y: illustrationY }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          className="block sm:hidden"
        >
          <Image
            src="/images/hero/hero-illustration-mobile.png"
            alt="hero"
            width={600}
            height={1200}
            className="z-50 w-[150px] object-contain"
            priority={true}
            quality={90}
          />
        </motion.div>
      </div>

      {/* Bottom Left Illustration */}
      <motion.div 
        initial={{ opacity: 0, y: 30, rotate: -10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
        className="absolute bottom-0 -left-14 z-30 lg:left-[-60px] xl:left-[50px] 2xl:left-[200px] hidden xl:block"
      >
        <Image
          src="/images/hero/bottom-left.svg"
          alt="Decorative illustration"
          width={120}
          height={120}
          className="w-auto h-auto object-contain"
          priority={false}
          loading="lazy"
        />
      </motion.div>

      {/* Bottom Right Illustration */}
      <motion.div 
        initial={{ opacity: 0, y: 30, rotate: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
        className="absolute bottom-0 right-[150px] 2xl:right-[300px] hidden xl:block opacity-80"
      >
        <Image
          src="/images/hero/bottom-right.svg"
          alt="Decorative illustration"
          width={120}
          height={120}
          className="w-auto h-auto object-contain"
          priority={false}
          loading="lazy"
        />
      </motion.div>

      {/* Right Bottom Illustration */}
      <motion.div 
        initial={{ opacity: 0, y: 30, rotate: 5, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
        className="absolute bottom-0 lg:-bottom-16 right-0 hidden xl:block -mr-8"
      >
        <Image
          src="/images/hero/right.svg"
          alt="Decorative illustration"
          width={150}
          height={120}
          className="w-auto h-auto object-contain"
          priority={false}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;