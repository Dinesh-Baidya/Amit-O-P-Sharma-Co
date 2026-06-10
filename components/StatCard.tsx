type StatCardProps = {
  label: string;
  value: string;
};

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{label}</p>
      <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
    </div>
  );
}
