interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-light/60">{subtitle}</p>
      )}
    </div>
  );
}
