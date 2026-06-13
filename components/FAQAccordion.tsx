'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type FAQAccordionProps = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-soft transition hover:border-amber-300/30">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 rounded-[2rem] px-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <ChevronDown className={`h-5 w-5 text-amber-300 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false} mode="wait">
        {open ? (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="px-6 pb-6"
          >
            <p className="text-slate-300 leading-7">{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
