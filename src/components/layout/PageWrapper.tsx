import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const pageVariants: Variants = {
  initial: { opacity: 0, y: 15, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' }, transitionEnd: { filter: 'none', transform: 'none' } },
  exit: { opacity: 0, scale: 0.98, filter: 'blur(5px)', transition: { duration: 0.3, ease: 'easeIn' } }
};

export default function PageWrapper({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
}
