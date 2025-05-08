'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  margin?: string;
}

const ScrollSection = ({ 
  children, 
  className = "", 
  margin = "-30% 0px -30% 0px" 
}: ScrollSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
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