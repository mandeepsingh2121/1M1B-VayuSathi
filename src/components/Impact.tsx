import { Badge, Card, Container, Section, SectionHeader } from "./ui";

const impactCols = [
  {
    title: "Health",
    sub: "Breathe safer, act earlier",
    items: ["25–35% fewer long outings on Poor+ days", "80%+ recall their safe window", "Earlier care-seeking for breathlessness"],
  },
  {
    title: "Social",
    sub: "Access for everyone",
    items: ["40%+ users in Hindi mode", "2 schools adopt the morning-card SOP", "Worker-friendly, zero-shame guidance"],
  },
  {
    title: "Environment",
    sub: "Cleaner trips, less smoke",
    items: ["15–20% metro/carpool on alert days", "Less idling via timing nudges", "100+ dust/burning complaints routed"],
  },
  {
    title: "Institutional",
    sub: "A reusable playbook",
    items: ["Campus SOP + RWA awareness kits", "Data-to-action culture for heat/rain/waste", "Helpfulness Yes-rate ≥ 75%"],
  },
];

const logic = [
  { title: "Inputs", body: "AI · AQI data · Trusted guidance · User context" },
  { title: "Activities", body: "Explain · Personalise · Predict · Plan · Alert" },
  { title: "Outputs", body: "Advisories · Alerts · Commute plans · School cards" },
  { title: "Outcomes", body: "Safer decisions · Reduced exposure · Cleaner transport" },
  { title: "Long-term", body: "Healthier · Informed · Sustainable cities" },
];

const kpis = [
  { metric: "Long outdoor exposure on Poor+ days", target: "25–35% ↓", method: "In-chat poll + end-season survey" },
  { metric: "Safe-window recall", target: "≥ 80%", method: "3-question recall survey" },
  { metric: "Metro / carpool on alert days", target: "15–20%", method: "Commute-mode poll on alert days" },
  { metric: "Hindi-mode usage", target: "≥ 40%", method: "Session language analytics" },
  { metric: "School SOP adoption", target: "2 schools", method: "Signed morning-card logbook" },
  { metric: "Helpfulness Yes-rate", target: "≥ 75%", method: "“Was this helpful?” votes" },
];

const phases = [
  { tag: "Phase 1 · 4–6 wks", title: "Campus pilot", body: "Live AQI · web chat · campus + school · feedback loop" },
  { tag: "Phase 2 · Scale", title: "City-ready", body: "WhatsApp · Hindi voice · ward dashboard · heat module" },
  { tag: "Phase 3 · Playbook", title: "Open city kit", body: "RAG template · prompt pack · multi-city · more languages" },
];

const design = [
  { n: "1", title: "Empathize", body: "8 people + 3 apps → “Number samajh nahi aata” → plain Hindi guidance" },
  { n: "2", title: "Define", body: "HMW × 6 users → Data-rich, insight-poor → personal + predictive" },
  { n: "3", title: "Ideate", body: "12 ideas scored → Impact × feasibility → chat + RAG + planner" },
  { n: "4", title: "Prototype", body: "5 prompts + UI → Nov + Jul scenarios → fallbacks added" },
  { n: "5", title: "Test", body: "Role-plays → Asthma + rider tests → shorter, safer answers" },
];

const traceability = [
  { pain: "AQI confusion", insight: "Need simple guidance", feature: "F1 Explainer", ai: "RAG + summarisation", impact: "Faster decisions" },
  { pain: "Generic warnings", insight: "Risk differs by person", feature: "F2 Advisory", ai: "Classification", impact: "Protected sensitive groups" },
  { pain: "Guessed timings", insight: "Need safe windows", feature: "F3 Outlook", ai: "Prediction", impact: "Shifted exposure hours" },
  { pain: "No school protocol", insight: "Need a standard rule", feature: "F5 Campus mode", ai: "Decision support", impact: "Safer school routines" },
];

const accessibility = ["Hindi / English", "Large text", "Short sentences", "Voice-ready", "Low-text cards", "Colour + text AQI (never colour alone)"];

const sources = [
  { name: "CPCB", body: "AQI bands, breakpoints & band precautions (paraphrased). Basis of all demo logic." },
  { name: "WHO", body: "Global air-quality guideline values; sensitive-group patterns." },
  { name: "IMD", body: "Lucknow seasonal & weather patterns (inversion, dust phases)." },
  { name: "Municipal guidance", body: "Dust-control & waste-burning advisory patterns; complaint categories." },
  { name: "UN SDGs", body: "Targets 11.6, 3.9, 13.3 mapped throughout the report." },
  { name: "Internship guideline", body: "1M1B project-creation doc §1–9; deliverables mapped to this report." },
];

export default function Impact() {
  return (
    <Section id="impact">
      <Container>
        <SectionHeader
          eyebrow="§18 · If Piloted — One Winter, ~5,000 Users"
          title="Impact dashboard"
          badges={["PROJECTED TARGET"]}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactCols.map((c) => (
            <Card key={c.title}>
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">{c.title}</div>
              <div className="mt-1 text-sm font-semibold text-white">{c.sub}</div>
              <ul className="mt-3 space-y-2 text-xs text-slate-400">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-400">•</span>
                    {it}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Impact logic model — how inputs become outcomes
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {logic.map((l, i) => (
              <div key={l.title} className="flex flex-1 items-center gap-3">
                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">{l.title}</div>
                  <div className="mt-1 text-xs text-slate-400">{l.body}</div>
                </div>
                {i < logic.length - 1 && <span className="hidden text-slate-600 lg:block">→</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader eyebrow="§19 · From Pilot to Playbook" title="Measurement, pilot roadmap & scale" />
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-white/[0.04] text-left text-xs uppercase tracking-wide text-slate-400">
                  <th className="px-4 py-3 font-semibold">Metric</th>
                  <th className="px-4 py-3 font-semibold text-emerald-400">Target</th>
                  <th className="px-4 py-3 font-semibold">Measurement method</th>
                </tr>
              </thead>
              <tbody>
                {kpis.map((k, i) => (
                  <tr key={k.metric} className={i % 2 ? "bg-white/[0.015]" : ""}>
                    <td className="px-4 py-3 text-slate-200">{k.metric}</td>
                    <td className="px-4 py-3 font-semibold text-emerald-300">{k.target}</td>
                    <td className="px-4 py-3 text-slate-400">{k.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">Projected pilot targets — not results.</p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {phases.map((p) => (
              <Card key={p.tag}>
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">{p.tag}</div>
                <div className="mt-1 text-base font-bold text-white">{p.title}</div>
                <p className="mt-2 text-sm text-slate-400">{p.body}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs font-semibold text-slate-300">
            {["Lucknow", "Campus", "Schools", "Neighbourhoods", "Other cities", "Multi-hazard (air · heat · rain · waste · climate)"].map(
              (s, i, arr) => (
                <span key={s} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">{s}</span>
                  {i < arr.length - 1 && <span className="text-slate-600">→</span>}
                </span>
              )
            )}
            <Badge label="FUTURE SCOPE" />
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader eyebrow="§20 · How the Solution Was Found" title="Design process, traceability & accessibility" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
            {design.map((d) => (
              <div key={d.n} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs font-bold text-emerald-400">{d.n} · {d.title}</div>
                <div className="mt-1 text-[11px] text-slate-400">{d.body}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-white/[0.04] text-left text-xs uppercase tracking-wide text-slate-400">
                  <th className="px-4 py-3 font-semibold">User pain</th>
                  <th className="px-4 py-3 font-semibold">Insight</th>
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">AI capability</th>
                  <th className="px-4 py-3 font-semibold text-emerald-400">Impact</th>
                </tr>
              </thead>
              <tbody>
                {traceability.map((t, i) => (
                  <tr key={t.pain} className={i % 2 ? "bg-white/[0.015]" : ""}>
                    <td className="px-4 py-3 text-slate-300">{t.pain}</td>
                    <td className="px-4 py-3 text-slate-400">{t.insight}</td>
                    <td className="px-4 py-3 text-slate-300">{t.feature}</td>
                    <td className="px-4 py-3 text-slate-400">{t.ai}</td>
                    <td className="px-4 py-3 text-emerald-300">{t.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
              Accessibility — an inclusive-design strategy
            </div>
            <div className="flex flex-wrap gap-2">
              {accessibility.map((a) => (
                <span key={a} className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-200">
                  {a}
                </span>
              ))}
            </div>
            <p className="mt-3 max-w-3xl text-xs text-slate-500">
              Every choice serves a persona: low-text cards for riders, voice-ready lines for elderly users,
              colour-plus-text AQI for colour-blind users, WhatsApp formats for feature-phone households.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader eyebrow="§21 · Annexure" title="Transparency & sources" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sources.map((s) => (
              <Card key={s.name}>
                <div className="text-sm font-bold text-white">{s.name}</div>
                <p className="mt-2 text-xs text-slate-400">{s.body}</p>
              </Card>
            ))}
          </div>
          <Card className="mt-6">
            <div className="text-xs font-bold uppercase tracking-wide text-amber-400">Demo-data disclaimer</div>
            <p className="mt-2 text-sm text-slate-400">
              Every AQI number, forecast slot and chart in this report is illustrative demo data inspired by
              typical Lucknow seasonal patterns — labelled <Badge label="DEMO DATA" /> wherever shown. Not
              live monitoring; not measurements.
            </p>
          </Card>
          <Card className="mt-4">
            <div className="text-xs font-bold uppercase tracking-wide text-rose-400">What was NOT fabricated</div>
            <p className="mt-2 text-sm text-slate-400">
              No real-time readings, adoption, clinical, accuracy, API integration or deployment claims
              appear anywhere. Targets are <Badge label="PROJECTED TARGET" />; UI is{" "}
              <Badge label="CONCEPTUAL UI" />; architecture is <Badge label="PROPOSED ARCHITECTURE" />.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
