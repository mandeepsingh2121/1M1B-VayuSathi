import { Card, Container, Section, SectionHeader } from "./ui";

const capFlow = [
  { title: "Input", body: "AQI · Location · Activity · Time · User profile · Weather. Free text, taps, or an AQI screenshot value." },
  { title: "AI layer", body: "Intelligence · Classification · Summarisation · Decision support. IBM Granite-class LLM + grounded retrieval." },
  { title: "Output", body: "Understand → Personalise → Plan → Act → Alert. 3 bullets + Hindi + low-carbon tip + source." },
];

const capGrid = [
  { title: "Prediction", body: "Safe windows, 48 hrs ahead. Best/worst slots; Very Poor early warnings." },
  { title: "Automation", body: "Zero-effort personal routines. Morning alerts, school cards, commute plans." },
  { title: "Insight", body: "Data → meaning in seconds. “268” becomes breathing + schedule sense." },
  { title: "Scale", body: "One engine, every profile. 6 personas × 2 languages × infinite questions." },
];

const features1 = [
  {
    id: "F1",
    title: "AQI Explainer",
    purpose: "Turn any AQI value into plain EN + Hindi meaning.",
    flow: "AQI + place + hour → band mapping + RAG summary → 3 do's/don'ts + Hindi + source.",
    example:
      "“AQI 268 at Gomti Nagar, 8 AM” → Poor — avoid 6–9 AM exertion; mask + low-traffic lane if out; windows shut till 10.",
  },
  {
    id: "F2",
    title: "Personal Health Advisory",
    purpose: "Risk-matched precautions for 6 sensitivity profiles.",
    flow: "AQI + profile + duration → risk = f(band, profile, time) → HIGH/MODERATE verdict + precautions + doctor line.",
    example:
      "Asthma student, 1 hr out → HIGH: inhaler + split trip + mask + traffic-road avoid; breathless → see doctor.",
  },
  {
    id: "F3",
    title: "48-Hour Outlook & Early Warning",
    purpose: "Find best/worst windows; warn before Very-Poor spells.",
    flow: "48-hr slots + activity → window ranking + alert check → go / shift / indoor verdict with uncertainty stated.",
    example: "Cricket slots → Skip today; best Tue 2–5 PM (140–150, Moderate). Forecast indicative.",
    demo: true,
  },
];

const features2 = [
  {
    id: "F4",
    title: "Sustainable Commute Planner",
    purpose: "Jointly minimise smoke exposure and emissions.",
    flow: "Origin + destination + time + AQI → exposure × duration ranking → metro/carpool/walk plan + timing shift + low-carbon nudge.",
    example: "Aliganj → University, 9 AM, AQI 240 → Metro + 8-min masked walk; leave 9:40 to dodge the jam peak.",
  },
  {
    id: "F5",
    title: "School & Campus Mode",
    purpose: "A standard bad-air protocol for schools — zero hardware.",
    flow: "Date + campus + morning AQI → rule table (100 normal … 301+ suspend) → printable card + 40-word assembly text.",
    example: "18 Nov, AQI 285 → INDOORS. PT inside; windows shut 8–10; asthma students alert teachers.",
  },
  {
    id: "F6",
    title: "Civic Helper",
    purpose: "Connect citizens, RWAs and the city on dust & burning.",
    flow: "Free-text complaints → ward-wise summarisation → weekly awareness post + routed complaint digest.",
    example: "40 mixed complaints → Ward summary: 18 dust / 12 burning / 10 genset + draft notice-board post.",
  },
];

function FeatureCard({ f }: { f: (typeof features1)[number] & { demo?: boolean } }) {
  return (
    <Card>
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/15 text-xs font-bold text-emerald-400">
          {f.id}
        </span>
        <div className="text-sm font-bold text-white">{f.title}</div>
      </div>
      <div className="mt-3 text-xs text-slate-400">
        <span className="font-semibold text-slate-300">Purpose — </span>{f.purpose}
      </div>
      <div className="mt-2 text-xs text-slate-400">
        <span className="font-semibold text-slate-300">Input → AI → Out — </span>{f.flow}
      </div>
      <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-xs text-slate-300">
        <span className="font-semibold text-emerald-400">Example — </span>{f.example}
      </div>
    </Card>
  );
}

export default function AICapability() {
  return (
    <Section id="ai" dark>
      <Container>
        <SectionHeader
          eyebrow="§7 · Why AI Is Needed"
          title="AI capability map"
          subtitle="Inputs change hourly — AQI, weather, user, language, activity — and the answer must be personal, contextual and conversational. Static charts and rule-based SMS cannot do this."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {capFlow.map((c, i) => (
            <div key={c.title} className="relative">
              <Card>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">{c.title}</div>
                <p className="mt-2 text-sm text-slate-400">{c.body}</p>
              </Card>
              {i < capFlow.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-lg text-slate-600 md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {capGrid.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">{c.title}</div>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-400">{c.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-4xl text-xs leading-relaxed text-slate-500">
          Allowed AI components in use (guideline §4): Prompt engineering • IBM Granite-class models /
          watsonx-style orchestration • RAG • agentic workflow • entity extraction &amp; summarisation •
          multimodal input • conversational UI. Logic and workflow design are the prototype — no advanced
          coding claimed.
        </p>

        <div className="mt-20">
          <SectionHeader
            eyebrow="§8 · Meet VayuSathi — Features I"
            title="Six features, one assistant"
          />
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {features1.map((f) => (
              <FeatureCard key={f.id} f={f} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-400">
            §8 · Features II — Planning, campus & civic action
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {features2.map((f) => (
              <FeatureCard key={f.id} f={f} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
