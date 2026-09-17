import { Badge, Card, Container, Section, SectionHeader } from "./ui";

const exists = [
  "5 prompt workflows + contracts",
  "RAG design + knowledge plan",
  "8-layer architecture",
  "Agentic loop logic",
  "Mobile + web UI mockups",
  "Sample outputs + test scenarios",
];

const conceptual = [
  "Live AQI API binding",
  "Production forecasting",
  "WhatsApp + voice",
  "Clinical validation",
  "Deployment statistics",
];

const fallbacks = [
  { when: "AQI missing", resp: "“Data unavailable” + seasonal guidance", why: "Never invents a number" },
  { when: "AQI stale >3 hr", resp: "Uncertainty banner + cautious advice", why: "Freshness is declared" },
  { when: "Invalid location", resp: "Asks user to clarify area", why: "No silent wrong-city answers" },
  { when: "Hindi / Hinglish query", resp: "Hindi-first response, same logic", why: "Fairness across languages" },
  { when: "Very-Poor forecast (≥300)", resp: "Early warning + indoor default", why: "Protection before exposure" },
  { when: "Breathing difficulty mentioned", resp: "General info + “see a doctor promptly”", why: "Hard medical boundary" },
];

const never = [
  "No invented AQI values",
  "No medical diagnosis",
  "No false certainty",
  "No blaming outdoor workers",
  "No hidden personal profiling",
  "No silent stale data",
];

const pillars = [
  { title: "Fairness", body: "Same risk logic, all users. Only precautions & language adapt. EN/HI gap monitored." },
  { title: "Transparency", body: "Every answer shows its basis — AQI + band + source cited; forecasts marked “likely”." },
  { title: "Safety", body: "No medical diagnosis. Breathing difficulty → doctor line, always." },
  { title: "Privacy", body: "Minimal, session-only. No name/phone; area-level location; no history asked." },
  { title: "Data freshness", body: "Stale data is declared. >3 hr → banner + seasonal fallback." },
  { title: "Human oversight", body: "Verifiable decisions — school cards checked before assembly." },
];

export default function Trust() {
  return (
    <Section id="trust" dark>
      <Container>
        <SectionHeader
          eyebrow="§16 · Credibility Over Hype"
          title="Live vs prototype, and the fallback matrix"
          subtitle="Nothing on the “conceptual” list is presented as done anywhere in this report."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Card>
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">✓ Exists now</div>
            <ul className="mt-3 space-y-2">
              {exists.map((e) => (
                <li key={e} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-0.5 text-emerald-400">✓</span>
                  {e}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <div className="text-xs font-bold uppercase tracking-wide text-pink-400">○ Conceptual / future scope</div>
            <ul className="mt-3 space-y-2">
              {conceptual.map((e) => (
                <li key={e} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-0.5 text-pink-400">○</span>
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <Badge label="FUTURE SCOPE" />
            </div>
          </Card>
        </div>

        <div className="mt-10">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Failure & fallback matrix — tested, not assumed
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-white/[0.04] text-left text-xs uppercase tracking-wide text-slate-400">
                  <th className="px-4 py-3 font-semibold">When this happens</th>
                  <th className="px-4 py-3 font-semibold">VayuSathi responds</th>
                  <th className="px-4 py-3 font-semibold text-emerald-400">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {fallbacks.map((f, i) => (
                  <tr key={f.when} className={i % 2 ? "bg-white/[0.015]" : ""}>
                    <td className="px-4 py-3 text-slate-200">{f.when}</td>
                    <td className="px-4 py-3 text-slate-400">{f.resp}</td>
                    <td className="px-4 py-3 text-emerald-300">{f.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-xs font-bold uppercase tracking-wide text-slate-400">→ Next step</div>
          <p className="mt-2 text-sm text-slate-300">
            Campus pilot (4–6 weeks): live AQI feed, web chat, 1 campus + 1 school, Yes/No feedback loop,
            end-season survey.
          </p>
        </div>

        <div className="mt-20">
          <SectionHeader
            eyebrow="§17 · Mandatory — and Central to the Design"
            title="Responsible AI trust layer"
            subtitle="Responsible AI is enforced in every prompt — not bolted on afterwards."
          />
          <Card className="border-rose-400/20 bg-rose-400/[0.03]">
            <div className="text-xs font-bold uppercase tracking-wide text-rose-400">What VayuSathi will never do</div>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {never.map((n) => (
                <div key={n} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-0.5 text-rose-400">✕</span>
                  {n}
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <Card key={p.title}>
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">{p.title}</div>
                <p className="mt-2 text-sm text-slate-400">{p.body}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs font-semibold uppercase tracking-wide text-slate-300">
            {["Input", "Validate", "Retrieve trusted guidance", "Check freshness", "Generate", "Safety check", "Cite source", "Friendly output"].map(
              (s, i, arr) => (
                <span key={s} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">{s}</span>
                  {i < arr.length - 1 && <span className="text-slate-600">→</span>}
                </span>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
