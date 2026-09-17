import { Card, Container, Section, SectionHeader } from "./ui";

const personas = [
  {
    name: "Aarav, 20",
    role: "Student · walks to campus",
    q: "“Should I walk to campus today?”",
    pain: "AQI numbers confuse; misses class or over-exerts.",
    need: "Go / postpone verdict + safe-hour finder.",
    ai: "2-line verdict + Hindi + commute tip.",
  },
  {
    name: "Salman, 29",
    role: "Delivery rider · 8 hrs outdoors",
    q: "“How can I work more safely?”",
    pain: "Can't “stay indoors”; least informed.",
    need: "Hindi harm-reduction that respects work.",
    ai: "Mask / break / route tips. No shaming.",
  },
  {
    name: "Meera, 34",
    role: "Parent · two children",
    q: "“Can my child play outside?”",
    pain: "Fear vs guesswork; no school guidance.",
    need: "Child-safe windows aligned with school.",
    ai: "Child mode + shareable school card.",
  },
  {
    name: "Kabir, 22",
    role: "Athlete · cricket trainee",
    q: "“When should I train?”",
    pain: "Fitness loss vs health-risk dilemma.",
    need: "Best training slots + indoor swaps.",
    ai: "48-hour practice planner.",
  },
  {
    name: "Ramesh, 68",
    role: "Elderly · asthma-sensitive",
    q: "“Should I avoid going out?”",
    pain: "Highest risk; generic alerts cause anxiety.",
    need: "Calm, specific precautions.",
    ai: "High-sensitivity profile + doctor line.",
  },
  {
    name: "City School",
    role: "School / campus · 1,200 students",
    q: "“Should outdoor sports shift?”",
    pain: "No standard protocol for bad-air days.",
    need: "Rule + assembly announcement text.",
    ai: "One-click printable morning card.",
  },
];

const journey = [
  { n: "1", title: "Wake up", body: "Morning alert — Very Poor? push warning", ai: true },
  { n: "2", title: "Check air", body: "AQI + weather — interpreted, not raw", ai: true },
  { n: "3", title: "Ask", body: "Hindi / English chat — entities extracted", ai: true },
  { n: "4", title: "Understand", body: "Risk classified: Low → Very High", ai: true },
  { n: "5", title: "Receive", body: "Personal advice — profile matched", ai: true },
  { n: "6", title: "Choose", body: "Safer time / route — plan + commute", ai: true },
  { n: "7", title: "Act", body: "Go / shift / indoor — alerts if risk rises", ai: true },
  { n: "8", title: "Feedback", body: "Was this helpful? Yes/No → tuning", ai: true },
];

const sdgs = [
  {
    tag: "PRIMARY · SDG 11",
    title: "Sustainable Cities & Communities",
    body: "Target 11.6 — cut cities' per-capita environmental impact, incl. air quality. Safe-time planning + cleaner-commute nudges + campus monitoring culture.",
  },
  {
    tag: "SUPPORTING · SDG 3",
    title: "Good Health & Well-being",
    body: "Target 3.9 — reduce illness from air pollution. Personal advisories for asthma, children, elderly; early warnings; school mode.",
  },
  {
    tag: "SUPPORTING · SDG 13",
    title: "Climate Action",
    body: "Target 13.3 — climate education & awareness. Every advisory ends with a low-carbon tip — metro, carpool, no idling, no burning.",
  },
];

const compare = [
  ["AQI number", "✓", "✓"],
  ["Plain-language explanation", "Limited", "✓ EN + Hindi, every answer"],
  ["Personalisation by profile", "Limited", "✓ 6 profiles (student → athlete)"],
  ["Hindi-first access", "Limited", "✓ summary + low-text cards"],
  ["48-hour safe-window planning", "Limited", "✓ go / shift / indoor verdicts"],
  ["Sustainable commute advice", "Limited", "✓ metro / carpool / walk-window"],
  ["School / campus mode", "—", "✓ printable morning card + SOP"],
  ["RAG-grounded, cited guidance", "—", "✓ CPCB / WHO / IMD sources cited"],
  ["Responsible-AI guardrails", "Limited", "✓ fairness, transparency, safety, privacy"],
];

export default function Personas() {
  return (
    <Section id="personas">
      <Container>
        <SectionHeader
          eyebrow="§5 · Human-Centred Design"
          title="Personas & daily journey"
          subtitle="Six personas, one assistant — the same AI core adapts guidance, tone and language to who is asking."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <Card key={p.name}>
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-white">{p.name}</div>
              </div>
              <div className="text-xs uppercase tracking-wide text-emerald-400">{p.role}</div>
              <p className="mt-3 text-sm italic text-slate-300">{p.q}</p>
              <div className="mt-3 space-y-2 text-xs text-slate-400">
                <div><span className="font-semibold text-rose-400">Pain — </span>{p.pain}</div>
                <div><span className="font-semibold text-sky-400">Need — </span>{p.need}</div>
                <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-2">
                  <span className="font-semibold text-emerald-400">VayuSathi — </span>
                  <span className="text-slate-300">{p.ai}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-400">
            User journey — AI intervenes at every step
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {journey.map((j) => (
              <div key={j.n} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
                  <span>{j.n} · {j.title}</span>
                  {j.ai && <span title="AI touchpoint">◆</span>}
                </div>
                <div className="mt-2 text-[11px] leading-snug text-slate-400">{j.body}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-[11px] text-slate-500">◆ = AI touchpoint</div>
        </div>

        <div className="mt-20" id="sdg">
          <SectionHeader
            eyebrow="§6 · Purpose & Positioning"
            title="SDG alignment & why VayuSathi is different"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {sdgs.map((s) => (
              <Card key={s.tag}>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">{s.tag}</div>
                <div className="mt-2 text-base font-bold text-white">{s.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.body}</p>
              </Card>
            ))}
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-white/[0.04] text-left text-xs uppercase tracking-wide text-slate-400">
                  <th className="px-4 py-3 font-semibold">Capability</th>
                  <th className="px-4 py-3 font-semibold">Typical AQI app</th>
                  <th className="px-4 py-3 font-semibold text-emerald-400">VayuSathi</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr key={row[0]} className={i % 2 ? "bg-white/[0.015]" : ""}>
                    <td className="px-4 py-3 text-slate-300">{row[0]}</td>
                    <td className="px-4 py-3 text-slate-500">{row[1]}</td>
                    <td className="px-4 py-3 font-medium text-emerald-300">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-slate-500">
            Generic comparison, no named competitors.
          </p>
        </div>
      </Container>
    </Section>
  );
}
