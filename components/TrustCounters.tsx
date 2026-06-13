'use client';

import { useEffect, useState } from 'react';

type CounterItem = {
  label: string;
  target: number;
  suffix?: string;
};

const counterItems: CounterItem[] = [
  { label: 'Years Experience', target: 15, suffix: '+' },
  { label: 'Clients Served', target: 250, suffix: '+' },
  { label: 'Compliance Focus', target: 100, suffix: '%' },
  { label: 'Personalized Guidance', target: 1, suffix: 'K+' }
];

export default function TrustCounters() {
  const [counts, setCounts] = useState(counterItems.map(() => 0));

  useEffect(() => {
    const steps = 40;
    const interval = window.setInterval(() => {
      setCounts((current) =>
        current.map((value, index) => {
          const target = counterItems[index].target;
          const nextValue = Math.min(target, value + Math.ceil(target / steps));
          return nextValue;
        })
      );
    }, 25);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {counterItems.map((item, idx) => (
        <div key={item.label} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
          <p className="mt-5 text-4xl font-semibold text-white">
            {counts[idx]}
            {item.suffix}
          </p>
        </div>
      ))}
    </div>
  );
}
