import { cn } from "@/lib/cn";

type Props = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "mb-4 flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.2em] text-brand-yellow",
          align === "center" && "justify-center",
        )}
      >
        {index && <span className="text-white/40">{index}</span>}
        <span aria-hidden="true" className="h-px w-8 bg-brand-yellow" />
        {eyebrow}
      </p>
      <Tag className="text-5xl sm:text-6xl lg:text-7xl">{title}</Tag>
      {lead && (
        <p className="mt-6 text-lg leading-relaxed text-muted">{lead}</p>
      )}
    </div>
  );
}
