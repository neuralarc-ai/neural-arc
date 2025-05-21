import React, { memo} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = memo(() => {

  return (
    <div className="relative w-full md:min-h-[484px] xl:min-h-[1019px] px-8 pt-6 mx-auto lg:rounded-[32px] rounded-[16px] bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center -mt-3 overflow-hidden">
      {/* Top Left Illustration */}
      <motion.div 
        initial={{ opacity: 0, x: -20, y: -20, rotate: -15, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute top-0 hidden xl:block -ml-8"
      >
        <Image
          src="/images/hero/top-left.png"
          alt="Decorative illustration"
          width={630}
          height={594}
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
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="absolute top-0 -right-50 2xl:right-0  hidden xl:block -mr-8"
      >
        <Image
          src="/images/hero/top-right.png"
          alt="Decorative illustration"
          width={612}
          height={517}
          className="w-auto h-auto object-contain"
          priority={false}
          loading="lazy"
          quality={85}
        />
      </motion.div>

      <motion.div 
        className="xl:mt-37 lg:mt-20 mt-5"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
          className="text-3xl lg:text-7xl font-semibold text-white max-w-full md:max-w-md lg:max-w-4xl mx-auto text-center text-shadow-[0_0_40px_rgba(255,255,255,0.35)] leading-tight tracking-tight"
        >
          The Cognitive Engine for Business Evolution
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.25 }}
          className="text-sm lg:text-lg text-white lg:max-w-lg md:max-w-md max-w-full mx-auto text-center mt-2 text-balance"
        >
          Where Neural Networks Become NeuralArc
          Transcending the limits of traditional analytics through neural intelligence.
        </motion.p>
      </motion.div>

      <div className="w-full mx-auto flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.95 }}
          className="hidden lg:block relative"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate distance from center (normalized to -1 to 1)
            const xDist = (x - centerX) / centerX;
            const yDist = (y - centerY) / centerY;
            
            // Apply subtle movement (repel effect)
            const moveX = xDist * -15; // Invert for repel effect
            const moveY = yDist * -15; // Invert for repel effect
            
            e.currentTarget.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate3d(0, 0, 0)';
          }}
          style={{
            transition: 'transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform',
          }}
        >
          <Image
            src="/images/hero/hero-illustration.png"
            alt="hero"
            width={1100}
            height={1000}
            className="xl:w-[1100] xl:h-[auto] lg:w-[500px] w-[200px] object-contain -mt-10"
            priority={true}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.95 }}
          className="block lg:hidden"
        >
          <Image
            src="/images/hero/hero-illustration-mobile.png"
            alt="hero"
            width={500}
            height={300}
            className="z-50 h-full w-full object-contain md:mt-0"
            priority={true}
            quality={90}
          />
        </motion.div>
      </div>

      {/* Bottom Left Illustration */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
        className="absolute bottom-0 -left-30 2xl:left-20 hidden xl:block"
      >
        <Image
          src="/images/hero/bottom-left.png"
          alt="Decorative illustration"
          width={310}
          height={390}
          className="w-auto h-auto object-contain"
          priority={false}
          loading="lazy"
        />
      </motion.div>

      {/* Right Illustration */}
      <motion.div 
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
        className="absolute bottom-0 lg:-bottom-16 right-0 hidden xl:block -mr-8 mb-30"
      >
        <Image
          src="/images/hero/right.png"
          alt="Decorative illustration"
          width={309}
          height={545}
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