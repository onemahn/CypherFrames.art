'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from './Reveal';

const portrait =
  'https://images.pexels.com/photos/22742255/pexels-photo-22742255.jpeg?auto=compress&cs=tinysrgb&w=1200';

const stats = [
  { value: '12+', label: 'Years Behind the Lens' },
  { value: '300+', label: 'Stories Captured' },
  { value: '40+', label: 'Destinations' },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="about" className="relative overflow-hidden bg-[#090909] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <motion.img
                style={{ y }}
                src={portrait}
                alt="Professional portrait of the CypherFrames photographer"
                loading="lazy"
                className="absolute inset-0 h-[115%] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-2 z-10 hidden border border-white/10 bg-[#0c0c0c] px-8 py-5 backdrop-blur-md md:block">
              <p className="font-serif text-3xl font-light text-accent">Est. 2012</p>
            </div>
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal>
              <span className="font-sans text-[11px] uppercase tracking-luxe text-accent">
                About the Studio
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-white md:text-6xl">
                Every frame
                <br />
                <span className="italic text-white/80">tells a story.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-white/60">
                At CypherFrames, we capture emotions, moments and memories with
                a cinematic approach that transforms ordinary scenes into
                timeless visuals.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-white/60">
                Each composition is guided by light, intention and patience —
                crafted to be felt as much as seen.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-3xl font-light text-white md:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-2 font-sans text-[10px] uppercase tracking-wide-luxe text-white/40">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
