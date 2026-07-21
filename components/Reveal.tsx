'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

const variants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      custom={y}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  children,
  delay = 0,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      custom={28}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
