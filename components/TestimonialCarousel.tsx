'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Small Business Owner',
    quote: 'Amit O P Sharma & Co transformed our GST compliance process with clear guidance and exceptional service.',
    rating: 5
  },
  {
    name: 'Meera Das',
    role: 'Startup Founder',
    quote: 'Professional support, timely reports and a strong understanding of tax planning for new companies.',
    rating: 5
  },
  {
    name: 'Anil Sharma',
    role: 'Corporate Accountant',
    quote: 'Their audit and bookkeeping work is always accurate, well-presented and easy to rely on.',
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300/90">5-star client experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Professional review cards with smooth transitions.</h2>
        </div>
        <div className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/80 p-3">
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/80 text-slate-100 transition hover:bg-slate-900"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/80 text-slate-100 transition hover:bg-slate-900"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-glow">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              {Array.from({ length: testimonials[index].rating }).map((_, idx) => (
                <Star key={idx} className="h-5 w-5 text-amber-300" />
              ))}
            </div>
            <p className="text-xl leading-9 text-slate-100">“{testimonials[index].quote}”</p>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <p className="text-lg font-semibold text-white">{testimonials[index].name}</p>
              <p className="text-slate-400">{testimonials[index].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
