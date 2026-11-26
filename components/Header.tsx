"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { whatsappLink, messages } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-line bg-bg/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-brand-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-black"
      >
        Pular para o conteúdo
      </a>
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — página inicial`}>
          <Image
            src="/images/logo.webp"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full"
            priority
          />
          <span className="hidden font-display text-2xl font-extrabold uppercase leading-none tracking-wide sm:block">
            Center <span className="text-brand-yellow">Fitness</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative py-2 font-display text-lg font-semibold uppercase tracking-wider transition-colors hover:text-brand-yellow",
                    isActive(item.href) ? "text-brand-yellow" : "text-ink/85",
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-brand-yellow" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(messages.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-[4px] bg-brand-yellow px-5 font-display text-lg font-bold uppercase tracking-wide text-black transition hover:bg-white sm:inline-flex"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/20 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-line bg-bg lg:hidden">
          <nav aria-label="Menu mobile" className="container-x py-6">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "flex min-h-14 items-center font-display text-3xl font-bold uppercase tracking-wide",
                      isActive(item.href) && "text-brand-yellow",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(messages.generic)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex min-h-14 items-center justify-center gap-2 rounded-[4px] bg-brand-yellow font-display text-xl font-bold uppercase tracking-wide text-black"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
