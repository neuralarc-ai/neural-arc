"use client";

import { motion } from "framer-motion";
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
import ScrollSection from "@/components/ui/scroll-section";

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <motion.main 
      className="max-w-[1920px] mx-auto md:px-8 px-4"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>
        <Hero />
      </motion.div>
      
      <ScrollSection>
        <Orb />
      </ScrollSection>
      
      <ScrollSection>
        <OrbFeatures />
      </ScrollSection>
      
      <ScrollSection>
        <OrbFeaturesMobile />
      </ScrollSection>
      
      <ScrollSection>
        <LLM />
      </ScrollSection>
      
      <ScrollSection>
        <Nod />
      </ScrollSection>
      
      <ScrollSection>
        <CaseStudies />
      </ScrollSection>
      
      <ScrollSection>
        <CaseStudiesMobile />
      </ScrollSection>
      
      <ScrollSection>
        <Suite />
      </ScrollSection>
      
      <ScrollSection>
        <DNA />
      </ScrollSection>
      
      <ScrollSection>
        <FAQ />
      </ScrollSection>
    </motion.main>
  );
}
