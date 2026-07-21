'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Instagram, Mail, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import { contactLinks } from '@/lib/data';

const links = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'Instagram', href: contactLinks.instagram, Icon: Instagram },
  { label: 'WhatsApp', href: contactLinks.whatsapp, Icon: MessageCircle },
  { label: 'Email', href: contactLinks.email, Icon: Mail },
];

interface MenuPanelProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export function MenuPanel({ open, onClose, onNavigate }: MenuPanelProps) {
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col justify-between border-l border-white/10 bg-[#0c0c0c] px-8 py-10 md:px-12"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl tracking-wide-luxe text-accent">
                CypherFrames
              </span>
              <button
                aria-label="Close menu"
                onClick={onClose}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-accent hover:text-accent"
              >
                <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => onNavigate(link.href)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-4 py-3 text-left"
                >
                  <span className="font-sans text-xs tabular-nums text-white/30 transition-colors group-hover:text-accent">
                    0{i + 1}
                  </span>
                  <span className="font-serif text-4xl font-light text-white transition-all duration-500 group-hover:translate-x-2 group-hover:text-accent md:text-5xl">
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-auto"
            >
              <div className="mb-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="flex items-center gap-6">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
              <p className="mt-6 font-sans text-xs uppercase tracking-luxe text-white/40">
                Let&apos;s create something beautiful
              </p>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export function MenuToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <motion.button
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onToggle}
      className="group fixed right-5 top-5 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-black/60 md:right-8 md:top-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.span
            key="x"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <X className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Menu className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
