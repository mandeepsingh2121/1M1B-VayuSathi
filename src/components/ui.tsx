import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

const badgeStyles: Record<string, string> = {
  "DEMO DATA": "bg-amber-500/15 text-amber-300 border-amber-400/40",
  "PROJECTED TARGET": "bg-sky-500/15 text-sky-300 border-sky-400/40",
  "CONCEPTUAL UI": "bg-violet-500/15 text-violet-300 border-violet-400/40",
  "PROPOSED ARCHITECTURE": "bg-slate-500/15 text-slate-300 border-slate-400/40",
  "FUTURE SCOPE": "bg-pink-500/15 text-pink-300 border-pink-400/40",
};

export function Badge({ label }: { label: keyof typeof badgeStyles | string }) {
  const style = badgeStyles[label] ?? "bg-emerald-500/15 text-emerald-300 border-emerald-400/40";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${style}`}
    >
      ◆ {label}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
      <span className="h-px w-8 bg-emerald-400/60" />
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  badges,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  badges?: string[];
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-400">{subtitle}</p>}
      {badges && badges.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((b) => (
            <Badge key={b} label={b} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.05] ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
  dark = false,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section id={id} className={`relative scroll-mt-20 py-20 sm:py-28 ${dark ? "bg-slate-950" : ""} ${className}`}>
      {children}
    </section>
  );
}

const aqiBands = [
  { label: "Good", range: "0–50", color: "#3fb950" },
  { label: "Satisfactory", range: "51–100", color: "#8fd14f" },
  { label: "Moderate", range: "101–200", color: "#f4c430" },
  { label: "Poor", range: "201–300", color: "#f5893a" },
  { label: "Very Poor", range: "301–400", color: "#e0453c" },
  { label: "Severe", range: "401+", color: "#8b1e2e" },
];

export function AQIScale({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full">
      <div className="flex h-3 w-full overflow-hidden rounded-full">
        {aqiBands.map((b) => (
          <div key={b.label} style={{ backgroundColor: b.color }} className="h-full flex-1" />
        ))}
      </div>
      {!compact && (
        <div className="mt-3 grid grid-cols-3 gap-x-2 gap-y-2 text-[11px] text-slate-400 sm:grid-cols-6">
          {aqiBands.map((b) => (
            <div key={b.label} className="flex items-center gap-1.5">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: b.color }} />
              <span className="font-medium text-slate-300">{b.label}</span>
              <span className="text-slate-500">{b.range}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function aqiColor(aqi: number) {
  if (aqi <= 50) return "#3fb950";
  if (aqi <= 100) return "#8fd14f";
  if (aqi <= 200) return "#f4c430";
  if (aqi <= 300) return "#f5893a";
  if (aqi <= 400) return "#e0453c";
  return "#8b1e2e";
}

export function aqiLabel(aqi: number) {
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Satisfactory";
  if (aqi <= 200) return "Moderate";
  if (aqi <= 300) return "Poor";
  if (aqi <= 400) return "Very Poor";
  return "Severe";
}

export function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
      <div className="text-2xl font-bold text-emerald-400">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">{label}</div>
    </div>
  );
}
