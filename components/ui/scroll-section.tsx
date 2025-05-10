'use client';

import { motion, useInView } from "framer-motion";
import { useRef, RefObject } from "react";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  margin?: string;
  forwardedRef?: RefObject<HTMLDivElement>;
}

const ScrollSection = ({ 
  children, 
  className = "w-full", 
  margin = "-30% 0px -30% 0px",
  forwardedRef
}: ScrollSectionProps) => {
  const localRef = useRef<HTMLDivElement>(null);
  const ref = forwardedRef || localRef;
  const isInView = useInView(ref as RefObject<Element>, { 
    once: true,
    // @ts-expect-error - framer-motion types are incorrect for margin
    margin
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection; 