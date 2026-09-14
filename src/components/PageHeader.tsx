export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="gradient-hero px-4 py-12 text-center md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-3xl font-extrabold md:text-4xl">{title}</h1>
        {subtitle && <p className="text-base leading-relaxed text-gray-400 md:text-lg">{subtitle}</p>}
      </div>
    </div>
  );
}
