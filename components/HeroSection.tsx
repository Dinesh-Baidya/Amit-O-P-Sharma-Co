'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-hero-spectrum opacity-80" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-slate-700/10 blur-3xl" />
      <div className="absolute right-0 top-24 h-60 w-60 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-amber-300/20 bg-white/5 px-5 py-3 text-sm text-slate-100 shadow-soft backdrop-blur-xl">
              <span className="font-semibold text-amber-300">Chartered Accountant Firm in Shillong</span>
              <span className="text-slate-500">•</span>
              <span>Trusted tax, GST, audit and business compliance</span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Trusted Chartered Accountant Firm in Shillong for Tax, GST, Audit & Business Compliance
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Providing expert tax, GST, audit, accounting, and business advisory services to individuals, startups, and businesses across Meghalaya.
            </p>

            <div className="grid gap-4 sm:grid-cols-[1.5fr_auto]">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-glow transition-transform duration-300 hover:-translate-y-1"
              >
                Get Free Consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+919436103734"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-6 py-4 text-sm font-semibold text-white transition hover:border-amber-300/40"
                >
                  <Phone className="mr-2 h-4 w-4 text-amber-300" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919436103734?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20CA%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-6 py-4 text-sm font-semibold text-white transition hover:border-emerald-300/40"
                >
                  <MessageSquare className="mr-2 h-4 w-4 text-emerald-300" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Experience</p>
                <p className="mt-4 text-3xl font-semibold text-white">15+ Years</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Clients</p>
                <p className="mt-4 text-3xl font-semibold text-white">250+ served</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Location</p>
                <p className="mt-4 text-3xl font-semibold text-white">Shillong</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute inset-x-0 top-16 h-72 rounded-[2.5rem] bg-gradient-to-br from-amber-300/10 via-transparent to-slate-900/10 blur-3xl" />
            <div className="glass-card relative overflow-hidden rounded-[2.5rem] border border-white/10 p-8 shadow-glass">
              <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
              <div className="relative z-10 grid gap-6">
                <div className="space-y-4 rounded-[2rem] bg-slate-950/95 p-8 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.28em] text-amber-300/80">Premium Advisory</p>
                  <h2 className="text-3xl font-semibold text-white">Financial clarity for Meghalaya businesses.</h2>
                  <p className="text-slate-300 leading-7">
                    We combine local compliance experience with strategic financial planning so your company stays ahead of risk and regulatory change.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-5 shadow-soft">
                    <p className="text-sm text-slate-400">GST Accuracy</p>
                    <p className="mt-3 text-xl font-semibold text-white">99.8%</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-5 shadow-soft">
                    <p className="text-sm text-slate-400">Audit Readiness</p>
                    <p className="mt-3 text-xl font-semibold text-white">On time every time</p>
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
