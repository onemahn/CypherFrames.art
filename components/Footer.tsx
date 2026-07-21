'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Mail, MessageCircle } from 'lucide-react';
import { contactLinks } from '@/lib/data';

interface FooterProps {
  onNavigate: (href: string) => void;
}

const socials = [
  { Icon: Instagram, href: contactLinks.instagram, label: 'Instagram' },
  { Icon: MessageCircle, href: contactLinks.whatsapp, label: 'WhatsApp' },
  { Icon: Mail, href: contactLinks.email, label: 'Email' },
];

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative border-t border-white/10 bg-[#070707] py-12">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl font-light tracking-wide-luxe text-white">
              CypherFrames
            </p>
            <p className="mt-2 font-sans text-[10px] uppercase tracking-luxe text-white/40">
              Capturing Stories · Creating Timeless Frames
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <motion.button
            onClick={() => onNavigate('#top')}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-sans text-[10px] uppercase tracking-wide-luxe text-white/70 transition-colors hover:border-accent hover:text-accent"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 sm:flex-row">
          <p className="font-sans text-[10px] text-white/30">
            © {new Date().getFullYear()} CypherFrames. All rights reserved.
          </p>
          <p className="font-sans text-[10px] text-white/30">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
