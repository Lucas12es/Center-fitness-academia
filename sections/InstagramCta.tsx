import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { InstagramIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function InstagramCta() {
  return (
    <section className="section-y">
      <div className="container-x">
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-[6px] border border-line bg-surface px-8 py-14 sm:px-14 sm:py-20">
            <span
              aria-hidden="true"
              className="text-outline pointer-events-none absolute -right-4 -top-10 -z-10 select-none font-display text-[12rem] font-extrabold leading-none sm:text-[20rem]"
            >
              GYM
            </span>
            <p className="font-display text-base font-bold uppercase tracking-[0.2em] text-brand-yellow">
              Siga a Center Fitness
            </p>
            <h2 className="mt-4 max-w-2xl text-5xl sm:text-7xl">
              A rotina da academia no <span className="text-brand-yellow">Instagram</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Novidades, treinos e avisos da academia em {site.instagram.handle}.
            </p>
            <Button href={site.instagram.url} external variant="red" className="mt-10">
              <InstagramIcon className="h-5 w-5" />
              {site.instagram.handle}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
