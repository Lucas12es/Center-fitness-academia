/**
 * Cálculo do status "Aberto agora / Fechado" no fuso America/Sao_Paulo.
 * Domingo não consta nos horários divulgados, então o status é "unknown"
 * (nunca afirmamos que está aberto ou fechado).
 */

type Interval = readonly [number, number]; // minutos desde 00:00

const toMin = (s: string): number => {
  const [h, m] = s.split(":").map(Number);
  return h * 60 + m;
};

const WEEKDAY: Interval[] = [
  [toMin("05:30"), toMin("12:00")],
  [toMin("14:00"), toMin("22:00")],
];
const SATURDAY: Interval[] = [[toMin("09:00"), toMin("12:00")]];

/** 0 = domingo ... 6 = sábado */
function intervalsFor(day: number): Interval[] | null {
  if (day >= 1 && day <= 5) return WEEKDAY;
  if (day === 6) return SATURDAY;
  return null;
}

const fmt = (min: number): string => {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
};

const DAY_NAMES = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
];

export type OpenStatus =
  | { state: "open"; label: string }
  | { state: "closed"; label: string }
  | { state: "unknown"; label: string };

export function getSaoPauloNow(date: Date = new Date()): {
  day: number;
  minutes: number;
} {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return {
    day: map[get("weekday")] ?? 0,
    minutes: (Number(get("hour")) % 24) * 60 + Number(get("minute")),
  };
}

export function getOpenStatus(date: Date = new Date()): OpenStatus {
  const { day, minutes } = getSaoPauloNow(date);
  const today = intervalsFor(day);

  if (!today) {
    return { state: "unknown", label: "Domingo: consulte pelo WhatsApp" };
  }

  const current = today.find(([s, e]) => minutes >= s && minutes < e);
  if (current) {
    return { state: "open", label: `Aberto agora · fecha às ${fmt(current[1])}` };
  }

  const later = today.find(([s]) => minutes < s);
  if (later) {
    return { state: "closed", label: `Fechado · abre hoje às ${fmt(later[0])}` };
  }

  // próximo dia com horário divulgado
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const next = intervalsFor(d);
    if (next) {
      const when = i === 1 ? "amanhã" : DAY_NAMES[d];
      return { state: "closed", label: `Fechado · abre ${when} às ${fmt(next[0][0])}` };
    }
  }
  return { state: "unknown", label: "Consulte pelo WhatsApp" };
}
