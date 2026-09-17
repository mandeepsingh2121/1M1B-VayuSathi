import { AQIScale, Badge, Card, Container, Section, SectionHeader } from "./ui";

const storyCols = [
  {
    tag: "§2–§4",
    title: "The air problem",
    body: "Lucknow's pollution, gaps & data",
  },
  {
    tag: "§5–§6",
    title: "The human pain",
    body: "Personas, journey & SDGs",
  },
  {
    tag: "§7–§15",
    title: "How the AI works",
    body: "Features, architecture, RAG, UI",
  },
  {
    tag: "§16–§21",
    title: "Impact & future",
    body: "Honesty layer, outcomes, roadmap, scale",
  },
];

export default function Summary() {
  return (
    <Section id="summary">
      <Container>
        <SectionHeader
          eyebrow="§1 · Executive Summary"
          title="VayuSathi at a glance"
          subtitle="Lucknow's winter air regularly turns Poor–Very Poor. People see an AQI number — VayuSathi tells them what to do about it: when to go out, how to commute, where to exercise, in Hindi or English."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <Card>
            <div className="text-xs font-bold uppercase tracking-wider text-rose-400">Problem</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              AQI data exists. Actionable guidance doesn't. “AQI 268” confuses more than it helps — no
              personalisation, no Hindi, no plan.
            </p>
          </Card>
          <Card>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-400">AI</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              LLM + RAG + prompt engineering. IBM Granite-class models, grounded in CPCB / WHO / IMD
              guidance with citations.
            </p>
          </Card>
          <Card>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Solution</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              AI converts AQI + context into personal action. Understand → Personalise → Plan → Act, in
              30 seconds.
            </p>
          </Card>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Card>
            <div className="text-xs font-bold uppercase tracking-wider text-violet-400">Language</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              English + Hindi, Hinglish friendly. Every answer ships with a Hindi summary. Voice-ready,
              low-text cards.
            </p>
          </Card>
          <Card>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Users</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Students · families · workers · athletes · schools. Six personas, one assistant — including
              Hindi-first outdoor workers.
            </p>
          </Card>
          <Card>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-400">Impact</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Safer routines + cleaner mobility. Fewer high-exposure hours, smarter commutes, informed
              communities. <Badge label="PROJECTED TARGET" />
            </p>
          </Card>
        </div>

        <div className="mt-14">
          <div className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-400">
            The story this report tells
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {storyCols.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs font-bold text-emerald-400">{s.tag}</div>
                <div className="mt-2 text-base font-bold text-white">{s.title}</div>
                <div className="mt-1 text-sm text-slate-400">{s.body}</div>
                {i < storyCols.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-lg text-slate-600 lg:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/5 px-4 py-3 text-center text-sm font-semibold text-emerald-300">
            ✓ CONCEPT — Personas, journey &amp; SDGs
          </div>
          <div className="rounded-xl border border-sky-400/30 bg-sky-400/5 px-4 py-3 text-center text-sm font-semibold text-sky-300">
            ✓ PROTOTYPE — Prompts + UI + architecture
          </div>
          <div className="rounded-xl border border-pink-400/30 bg-pink-400/5 px-4 py-3 text-center text-sm font-semibold text-pink-300">
            NEXT · PILOT — Campus + school → city playbook
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold text-white">Lucknow · Nov · AQI 285 · POOR</span>
            <Badge label="DEMO DATA" />
          </div>
          <AQIScale />
        </div>
      </Container>
    </Section>
  );
}
