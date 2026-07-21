'use client';

import { useCallback, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MenuPanel, MenuToggle } from '@/components/MenuPanel';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const handleNavigate = useCallback((href: string) => {
    setMenuOpen(false);
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <main id="top" className="relative min-h-screen bg-[#090909]">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[95] h-[2px] w-full origin-left bg-accent"
      />

      <MenuToggle open={menuOpen} onToggle={() => setMenuOpen((v) => !v)} />
      <MenuPanel
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      <Hero onNavigate={handleNavigate} />
      <Portfolio />
      <About />
      <Services />
      <Contact />
      <Footer onNavigate={handleNavigate} />
    </main>
  );
}
