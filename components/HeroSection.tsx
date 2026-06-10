'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-hero-spectrum opacity-90" />
      <div className="container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 shadow-soft backdrop-blur-lg">
              <span className="text-gold-300">Premium Chartered Accountant Services</span>
              <span className="text-slate-500">•</span>
              <span>Trusted advisory in Shillong</span>
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Trusted Chartered Accountants in Shillong
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Delivering expert taxation, accounting, audit and business advisory services with professionalism and integrity.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-glow transition-transform duration-300 hover:-translate-y-1"
              >
                Book Consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-8 py-4 text-base font-semibold text-slate-100 transition hover:border-slate-400 hover:text-white"
              >
                Contact Us
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Rating</p>
                <p className="mt-3 text-3xl font-semibold text-white">5.0 ★</p>
                <p className="mt-1 text-sm text-slate-400">6 Reviews</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Location</p>
                <p className="mt-3 text-3xl font-semibold text-white">Police Bazar</p>
                <p className="mt-1 text-sm text-slate-400">Shillong, Meghalaya</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-slate-700/30 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-24 w-24 rounded-full bg-amber-400/15 blur-3xl" />
            <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-soft">
              <div className="absolute inset-x-0 top-0 h-60 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_55%)]" />
              <div className="relative z-10 grid gap-6">
                <div className="rounded-3xl bg-slate-950/95 p-6 shadow-glow">
                  <p className="text-sm uppercase tracking-[0.28em] text-amber-200/80">Service Spotlight</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Corporate finance with clarity.</h2>
                  <p className="mt-3 text-slate-300">Holistic accounting, advisory and compliance delivered by a trusted team.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5 shadow-soft">
                    <p className="text-sm text-slate-400">Business Hours</p>
                    <p className="mt-3 text-xl font-semibold text-white">Open until 8 PM</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5 shadow-soft">
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="mt-3 text-xl font-semibold text-white">+91 94361 03734</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
