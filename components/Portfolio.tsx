'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  categories,
  portfolioImages,
  type Category,
  type PortfolioImage,
} from '@/lib/data';
import { Reveal } from './Reveal';

type Filter = 'All' | Category;
const filters: Filter[] = ['All', ...categories];

const spanClass: Record<PortfolioImage['span'], string> = {
  tall: 'md:row-span-2',
  wide: 'md:col-span-2',
  normal: '',
};

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = useMemo(
    () =>
      filter === 'All'
        ? portfolioImages
        : portfolioImages.filter((img) => img.category === filter),
    [filter],
  );

  const openLightbox = (img: PortfolioImage) => {
    const idx = visible.findIndex((v) => v.id === img.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i + 1) % visible.length,
      ),
    [visible.length],
  );

  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + visible.length) % visible.length,
      ),
    [visible.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, next, prev]);

  const current =
    lightboxIndex !== null ? visible[lightboxIndex] : null;

  return (
    <section id="portfolio" className="relative bg-[#090909] py-24 md:py-32">
      <div className="mx-auto max-w-[1800px] px-5 md:px-10">
        <Reveal className="mb-14 text-center md:mb-20">
          <span className="font-sans text-[11px] uppercase tracking-luxe text-accent">
            Selected Work
          </span>
          <h2 className="mt-5 font-serif text-4xl font-light text-white md:text-6xl lg:text-7xl">
            The Portfolio
          </h2>
          <p className="mx-auto mt-5 max-w-md font-sans text-sm leading-relaxed text-white/50">
            A curated collection of frames — each one a story waiting to be
            told.
          </p>
        </Reveal>

        <div className="no-scrollbar mb-12 flex justify-start gap-2 overflow-x-auto pb-2 md:justify-center md:overflow-visible">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="relative shrink-0 rounded-full px-5 py-2.5 font-sans text-[11px] uppercase tracking-wide-luxe transition-colors duration-300 md:text-xs"
            >
              <span
                className={
                  filter === f ? 'text-[#090909]' : 'text-white/60 hover:text-white'
                }
              >
                {f}
              </span>
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((img) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => openLightbox(img)}
                className={`group relative block overflow-hidden rounded-sm bg-[#111111] ${
                  spanClass[img.span]
                } aspect-[4/5] md:aspect-auto`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out will-change-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-sans text-[10px] uppercase tracking-wide-luxe text-accent">
                    {img.category}
                  </span>
                  <p className="mt-1 font-serif text-xl font-light text-white">
                    {img.title}
                  </p>
                </div>
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <button
              aria-label="Close"
              onClick={closeLightbox}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent md:right-8 md:top-8"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-accent hover:text-accent md:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-accent hover:text-accent md:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={current.id}
              className="relative flex max-h-[88vh] max-w-[92vw] flex-col items-center"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src.replace(/w=\d+&h=\d+/, 'w=1800')}
                alt={current.alt}
                className="max-h-[78vh] w-auto rounded-sm object-contain"
              />
              <div className="mt-4 text-center">
                <span className="font-sans text-[10px] uppercase tracking-wide-luxe text-accent">
                  {current.category}
                </span>
                <p className="mt-1 font-serif text-2xl font-light text-white">
                  {current.title}
                </p>
                <span className="mt-2 block font-sans text-[10px] text-white/40 tabular-nums">
                  {lightboxIndex! + 1} / {visible.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
