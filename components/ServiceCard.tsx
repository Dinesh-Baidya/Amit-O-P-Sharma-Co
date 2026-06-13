'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  FileCheck,
  Gift,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Zap,
  TrendingUp,
  FileText,
  CalendarCheck,
  DollarSign
} from 'lucide-react';

const icons = {
  FileCheck: FileCheck,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Briefcase: Briefcase,
  Users: Users,
  Wallet: Wallet,
  Gift: Gift,
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
  FileText: FileText,
  CalendarCheck: CalendarCheck,
  DollarSign: DollarSign
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
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft transition-all duration-300 hover:border-amber-300/20 hover:bg-slate-900"
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-300 to-gold-400 text-slate-950 shadow-lg">
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-slate-300 leading-7">{description}</p>
      <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition duration-300 group-hover:text-gold-200">
        Explore Service <ArrowRight className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
