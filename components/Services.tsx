'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  User,
  Briefcase,
  PartyPopper,
  Sparkles,
  Film,
} from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  {
    Icon: Heart,
    title: 'Wedding Photography',
    desc: 'Timeless, emotion-driven coverage of your most precious day — from the first look to the last dance.',
  },
  {
    Icon: User,
    title: 'Portrait Photography',
    desc: 'Character-defining portraits with a cinematic approach to light, mood and composition.',
  },
  {
    Icon: Briefcase,
    title: 'Commercial Photography',
    desc: 'Brand-grade imagery for campaigns, products and editorial — crafted to convert.',
  },
  {
    Icon: PartyPopper,
    title: 'Events',
    desc: 'Full coverage of corporate, private and milestone events with a documentary eye.',
  },
  {
    Icon: Sparkles,
    title: 'Creative Shoots',
    desc: 'Concept-led sessions where imagination, styling and atmosphere meet the frame.',
  },
  {
    Icon: Film,
    title: 'Cinematic Films',
    desc: 'Short-form cinematic films and highlight reels that move with the rhythm of your story.',
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative border-y border-white/5 bg-[#0b0b0b] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-16 text-center">
          <span className="font-sans text-[11px] uppercase tracking-luxe text-accent">
            What We Offer
          </span>
          <h2 className="mt-5 font-serif text-4xl font-light text-white md:text-6xl lg:text-7xl">
            Services
          </h2>
          <p className="mx-auto mt-5 max-w-md font-sans text-sm leading-relaxed text-white/50">
            Considered, cinematic coverage for every kind of story.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#0b0b0b] p-8 transition-colors duration-500 hover:bg-[#111111] md:p-10"
            >
              <div className="relative z-10">
                <s.Icon className="h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mt-6 font-serif text-2xl font-light text-white">
                  {s.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/50">
                  {s.desc}
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px w-0 bg-gradient-to-r from-accent/0 via-accent to-accent/0 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
