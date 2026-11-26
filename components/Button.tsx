import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "red" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-yellow text-black hover:bg-white shadow-[0_10px_30px_-10px_rgba(255,196,0,0.6)]",
  red: "bg-brand-red text-white hover:bg-brand-red-dark",
  ghost:
    "border border-white/25 text-ink hover:border-brand-yellow hover:text-brand-yellow",
};

type Props = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Button({
  href,
  variant = "primary",
  children,
  className,
  external,
  ...rest
}: Props) {
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[4px] px-6 py-3 font-display text-lg font-bold uppercase tracking-wide transition-all duration-300 ease-out active:scale-[0.98]",
    styles[variant],
    className,
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
