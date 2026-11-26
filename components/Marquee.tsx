const words = [
  "Musculação",
  "Fitness",
  "Treinamentos",
  "Gympass disponível",
  "Planos a partir de R$ 89,90",
  "Sarandi-PR",
];

export function Marquee() {
  const row = (
    <ul className="flex shrink-0 items-center gap-10 pr-10">
      {words.map((w) => (
        <li
          key={w}
          className="flex items-center gap-10 font-display text-2xl font-extrabold uppercase tracking-wide text-black sm:text-3xl"
        >
          {w}
          <span aria-hidden="true" className="text-brand-red">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div
      className="overflow-hidden border-y border-black/20 bg-brand-yellow py-3"
      role="presentation"
    >
      <div className="flex w-max animate-marquee">
        {row}
        <div aria-hidden="true">{row}</div>
      </div>
    </div>
  );
}
