'use client';

import { motion } from 'framer-motion';
import { Briefcase, FileCheck, Gift, ShieldCheck, Sparkles, Users, Wallet, Zap } from 'lucide-react';

const icons = {
  FileCheck: FileCheck,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Briefcase: Briefcase,
  Users: Users,
  Wallet: Wallet,
  Gift: Gift,
  Sparkles: Sparkles
};

type ServiceCardProps = {
  title: string;
  description: string;
  icon: keyof typeof icons;
  index: number;
};

export default function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const IconComponent = icons[icon] ?? Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass-card group rounded-[2rem] border border-white/10 p-8 shadow-soft"
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-300 to-gold-400 text-slate-950 shadow-lg">
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-slate-300 leading-7">{description}</p>
      <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition group-hover:text-gold-200">
        Learn More <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </motion.div>
  );
}
