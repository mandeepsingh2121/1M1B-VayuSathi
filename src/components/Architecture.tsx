import { Badge, Card, Container, Section, SectionHeader } from "./ui";

const pipeline = [
  { title: "Data", body: "AQI · Weather · Location · Activity · Profile" },
  { title: "Intelligence", body: "RAG · AI reasoning · Risk classification · Forecast analysis" },
  { title: "Action", body: "Avoid · Shift · Indoor · Commute · Alert" },
  { title: "Impact", body: "Health · Sustainability · Awareness · Community resilience" },
];

const layers = [
  {
    n: 1,
    title: "User inputs",
    body: "Text (Hindi/English) • location • time • activity • AQI screenshot value • user profile",
  },
  {
    n: 2,
    title: "Input processing",
    body: "Entity extraction (place + time + activity) • validation • context detection. Invalid location → clarify.",
  },
  {
    n: 3,
    title: "Data sources (RAG knowledge base)",
    body: "CPCB bands • WHO guidance • IMD patterns • municipal norms • school rule table. 6–10 curated chunks.",
  },
  {
    n: 4,
    title: "RAG — retrieve → rank → validate → cite",
    body: "Top-3 chunks retrieved, band-checked, cited in the answer. Stale >3 hr → declared, never hidden.",
  },
  {
    n: 5,
    title: "AI engine",
    body: "IBM Granite-class LLM with watsonx-style orchestration. No fine-tuning claimed.",
  },
  {
    n: 6,
    title: "Decision logic",
    body: "Assess risk (Low → Very High) • personalise by profile • plan windows & routes • generate advisory.",
  },
  {
    n: 7,
    title: "Safety & Responsible AI — trust layer",
    body: "Fairness • transparency • privacy • medical boundary • data freshness • fallbacks.",
  },
  {
    n: 8,
    title: "Outputs",
    body: "Chat answer • Hindi summary • alerts • commute plan • school card • 48-hour planner.",
  },
];

const ragSteps = [
  { n: 1, title: "Trusted sources", body: "CPCB · WHO · IMD · municipal · school rules" },
  { n: 2, title: "Chunking → knowledge base", body: "Short, band-tagged guidance chunks" },
  { n: 3, title: "Retrieval + AQI validation", body: "Top-3 chunks; band match checked" },
  { n: 4, title: "LLM generation + citation", body: "Answer cites its source band" },
  { n: 5, title: "Safety filter → response", body: "Contract check, then Hindi summary" },
];

const contract = [
  "Max 3 action bullets",
  "1 Hindi summary",
  "1 low-carbon tip",
  "Source cited (band + origin)",
  "“Helpful? Yes/No” feedback",
  "Medical safety line when relevant",
];

export default function Architecture() {
  return (
    <Section id="architecture">
      <Container>
        <SectionHeader
          eyebrow="§9 · One Platform"
          title="Feature ecosystem & signature pipeline"
          subtitle="The six features share one AI core — same live context, same trusted guidance, same safety rules."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {pipeline.map((p, i) => (
            <div key={p.title} className="relative">
              <Card>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">{p.title}</div>
                <p className="mt-2 text-sm text-slate-400">{p.body}</p>
              </Card>
              {i < pipeline.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-lg text-slate-600 md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm text-slate-400">
          Each stage is independently testable: data freshness is declared, intelligence is cited, actions
          are bounded by the prompt contract, and impact is measured by the KPI framework — never claimed
          in advance.
        </p>

        <div className="mt-20">
          <SectionHeader
            eyebrow="§10 · Technical Architecture"
            title="System architecture — eight layers"
            subtitle="Every user question flows top-to-bottom through eight testable layers, then back up through a feedback loop."
            badges={["PROPOSED ARCHITECTURE"]}
          />
          <div className="space-y-3">
            {layers.map((l) => (
              <div
                key={l.n}
                className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:gap-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-bold text-emerald-400">
                  {l.n}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{l.title}</div>
                  <div className="text-xs text-slate-400">{l.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 text-xs text-emerald-200">
            ↺ Feedback loop — every answer ends with a “Was this helpful? Yes / No” vote. Votes +
            corrections feed a weekly prompt review (LEARN → MONITOR), closing the agentic loop.
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="§11 · Grounding & Agency" title="RAG pipeline" />
            <div className="space-y-3">
              {ragSteps.map((s) => (
                <div key={s.n} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/15 text-xs font-bold text-sky-300">
                    {s.n}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{s.title}</div>
                    <div className="text-xs text-slate-400">{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs italic text-slate-300">
              “If data is missing or stale, VayuSathi does not invent an AQI value.” It says so — and falls
              back to seasonal guidance.
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Agentic decision loop" title="Monitor → Assess → Plan → Learn" />
            <div className="flex flex-wrap gap-2">
              {["MONITOR", "ASSESS", "PERSONALISE", "PLAN", "ALERT", "LEARN"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-400">
              One full cycle per question • a fallback at every step • 1 LLM call + 1 retrieval per
              workflow — pilot-ready on low-cost tiers.
            </p>
            <div className="mt-4">
              <Badge label="PROPOSED ARCHITECTURE" />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader eyebrow="§12 · For Technical Evaluators" title="Under the hood" />
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.05] p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">The AI equation</div>
            <p className="mt-2 text-sm font-medium text-white">
              LLM + prompt engineering + RAG + entity extraction + risk classification + agentic workflow +
              safety guardrails = VayuSathi
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Each term is visible in the workflows — nothing is a black box.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Card>
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">Tech stack</div>
              <dl className="mt-3 space-y-2 text-sm text-slate-300">
                <div><dt className="inline font-semibold text-slate-100">AI — </dt><dd className="inline text-slate-400">IBM Granite-class model · watsonx-style assistant</dd></div>
                <div><dt className="inline font-semibold text-slate-100">Knowledge — </dt><dd className="inline text-slate-400">CPCB · WHO · IMD · municipal guidance</dd></div>
                <div><dt className="inline font-semibold text-slate-100">Methods — </dt><dd className="inline text-slate-400">Prompt eng. · RAG · summarisation · entity extraction · decision support</dd></div>
                <div><dt className="inline font-semibold text-slate-100">Interface — </dt><dd className="inline text-slate-400">Conversational UI (Hindi/English) · mobile / web</dd></div>
              </dl>
              <p className="mt-3 text-xs text-slate-500">
                No fine-tuning claimed. Sources stay inspectable in the knowledge base.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">Prompt contract — every answer</div>
              <ul className="mt-3 space-y-2">
                {contract.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-0.5 text-emerald-400">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
