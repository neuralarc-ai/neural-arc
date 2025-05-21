"use client";

import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import Hero from "@/components/layout/hero-section";
import DNA from "@/components/layout/dna";
import FAQ from "@/components/layout/faq";
import LLM from "@/components/layout/llm";
import CaseStudies from "@/components/layout/case-studies";
import Orb from "@/components/layout/orb";
import OrbFeatures from "@/components/layout/orb-features";
import Nod from "@/components/layout/nod";
import CaseStudiesMobile from "@/components/layout/case-studies-mobile";
import Suite from "@/components/layout/suite";
import OrbFeaturesMobile from "@/components/layout/orb-features-mobile";
import AiServices from "@/components/layout/ai-services";

// Enhanced animation variants
const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 20,
    filter: "blur(8px)"
  },
  animate: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      filter: { duration: 0.6 }
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Smooth scroll progress indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8DA571] via-[#C6AEA3] to-[#2F2C28] origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Enhanced scroll section with intersection observer
interface EnhancedScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

const EnhancedScrollSection: React.FC<EnhancedScrollSectionProps> = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-10% 0px -10% 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }
      } : { opacity: 0, y: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {

  return (
    <>
      <ScrollProgress />
      <motion.main 
        className="max-w-[1920px] mx-auto md:px-8 px-4 relative"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Subtle background gradient animation */}
        <motion.div 
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
          
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#8DA571] via-[#C6AEA3] to-[#2F2C28] animate-gradient" />
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="relative z-10"
        >
          <Hero />
        </motion.div>
        
        <EnhancedScrollSection>
          <Orb />
        </EnhancedScrollSection>
        
        <EnhancedScrollSection>
          <OrbFeatures />
        </EnhancedScrollSection>
        
        <EnhancedScrollSection>
          <OrbFeaturesMobile />
        </EnhancedScrollSection>
        
        <EnhancedScrollSection>
          <LLM />
        </EnhancedScrollSection>
        
        <EnhancedScrollSection>
          <Nod />
        </EnhancedScrollSection>
        
        <EnhancedScrollSection>
          <CaseStudies />
        </EnhancedScrollSection>
        
        <EnhancedScrollSection>
          <CaseStudiesMobile />
        </EnhancedScrollSection>
        
        <EnhancedScrollSection>
          <Suite />
        </EnhancedScrollSection>
        
        <EnhancedScrollSection>
          <AiServices />
        </EnhancedScrollSection>

        <EnhancedScrollSection>
          <DNA />
        </EnhancedScrollSection>

        <EnhancedScrollSection>
          <FAQ />
        </EnhancedScrollSection>
      </motion.main>
    </>
  );
}
