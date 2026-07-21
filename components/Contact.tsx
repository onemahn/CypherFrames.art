'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { contactLinks } from '@/lib/data';
import { Reveal } from './Reveal';

const channels = [
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    sub: 'Fastest response',
    href: contactLinks.whatsapp,
  },
  {
    Icon: Mail,
    label: 'Email',
    sub: 'hello@cypherframes.com',
    href: contactLinks.email,
  },
  {
    Icon: Instagram,
    label: 'Instagram',
    sub: '@cypherframes',
    href: contactLinks.instagram,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090909] py-24 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(201,162,39,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1100px] px-5 text-center md:px-10">
        <Reveal>
          <span className="font-sans text-[11px] uppercase tracking-luxe text-accent">
            Get in Touch
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-light leading-[1.1] text-white text-balance md:text-6xl lg:text-7xl">
            Let&apos;s Create Something
            <br />
            <span className="italic text-accent">Beautiful Together.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-md font-sans text-sm leading-relaxed text-white/50">
            Tell us about your story. We respond to every enquiry within 24
            hours.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {channels.map(({ Icon, label, sub, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex flex-1 items-center gap-4 rounded-sm border border-white/10 bg-[#0c0c0c] px-6 py-5 text-left transition-colors duration-400 hover:border-accent/40 sm:max-w-[280px]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-accent transition-colors duration-400 group-hover:border-accent group-hover:bg-accent/10">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-sans text-[11px] uppercase tracking-wide-luxe text-white">
                    {label}
                  </span>
                  <span className="mt-0.5 block truncate font-sans text-xs text-white/40">
                    {sub}
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mx-auto mt-14 flex max-w-md flex-col items-center gap-6 border-t border-white/10 pt-10 sm:flex-row sm:justify-center sm:gap-12">
            <div className="flex items-center gap-3 text-white/50">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="font-sans text-xs tracking-wide-luxe">
                Dubai · Worldwide
              </span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <Clock className="h-4 w-4 text-accent" />
              <span className="font-sans text-xs tracking-wide-luxe">
                Mon — Sat · 9–18
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
