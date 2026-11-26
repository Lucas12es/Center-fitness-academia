import { OpenStatus } from "@/components/OpenStatus";

const rows = [
  { label: "Segunda a sexta", value: ["5h30 às 12h", "14h às 22h"] },
  { label: "Sábados e feriados", value: ["9h às 12h"] },
];

export function HorariosSection() {
  return (
    <div className="rounded-[6px] border border-line bg-surface p-8 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-4xl">Horários</h3>
        <OpenStatus />
      </div>
      <dl className="mt-8 divide-y divide-line">
        {rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
            <dt className="font-display text-2xl font-bold uppercase tracking-wide text-brand-yellow">
              {r.label}
            </dt>
            <dd className="font-display text-3xl font-bold uppercase">
              {r.value.map((v, i) => (
                <span key={v}>
                  {i > 0 && <span className="px-2 text-white/30">·</span>}
                  {v}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm text-muted">
        Para domingo ou horários especiais, consulte a equipe pelo WhatsApp.
      </p>
    </div>
  );
}
