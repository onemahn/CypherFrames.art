'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

//const heroImage = '/images/hero.jpg';

interface HeroProps {
  onNavigate: (href: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden"
    >
      <motion.div
        style={{ y: yBg, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/hero.jpg"
          alt="Cinematic mountain landscape at dawn"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#090909]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </motion.div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mb-6 font-sans text-[11px] uppercase tracking-luxe text-accent md:text-xs"
        >
          <span className="mr-3 inline-block h-px w-8 align-middle bg-accent/60" />
          CYPHERFRAMES
          <span className="ml-3 inline-block h-px w-8 align-middle bg-accent/60" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[2.6rem] font-light leading-[1.05] tracking-tight text-white text-balance sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem]"
        >
          Capturing Stories.
          <br />
          <span className="italic text-white/90">Creating Timeless Frames.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-8 max-w-xl font-sans text-sm leading-relaxed text-white/70 md:mt-10 md:text-base"
        >
          Premium photography that transforms moments into timeless visual
          stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:mt-12"
        >
          <button
            onClick={() => onNavigate('#contact')}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-wide-luxe text-[#090909] [...]"
          >
            <span className="relative z-10">Book a Shoot</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
          </button>
          <button
            onClick={() => onNavigate('#portfolio')}
            className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-wide-luxe text-white backdrop-blur-sm [...]"
          >
            <span>View Portfolio</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] uppercase tracking-luxe text-white/40">
            Scroll
          </span>
          <span className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
