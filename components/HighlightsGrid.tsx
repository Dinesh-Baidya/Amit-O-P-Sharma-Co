'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

type Highlight = {
  label: string;
  detail: string;
};

type HighlightsGridProps = {
  items: Highlight[];
};

export default function HighlightsGrid({ items }: HighlightsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, idx) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: idx * 0.08 }}
          className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft"
        >
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-gold-400 to-amber-300 text-slate-950 shadow-lg">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-white">{item.label}</h3>
          <p className="mt-3 text-slate-300">{item.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}
