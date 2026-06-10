interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-amber-300/90">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
    </div>
  );
}
