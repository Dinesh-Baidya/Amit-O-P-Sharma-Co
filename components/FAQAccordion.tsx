'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQAccordionProps = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-soft">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open ? <p className="mt-5 text-slate-300 leading-7">{answer}</p> : null}
    </div>
  );
}
