import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold text-maroon md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-ink/75 md:text-base">{description}</p> : null}
    </div>
  );
}
