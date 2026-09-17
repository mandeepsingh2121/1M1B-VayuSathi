import { AQIScale, Badge, Card, Container, Section, SectionHeader, StatPill } from "./ui";

const gaps = [
  "No personalisation by profile",
  "No local-language guidance",
  "No forward 48-hr planning",
  "No actionable commute advice",
  "No school / campus protocol",
];

const steps = [
  { n: "1", title: "Understand", body: "AQI 268 “Poor”: what it means for breathing" },
  { n: "2", title: "Personalise", body: "Risk for you — asthma, child, rider, athlete…" },
  { n: "3", title: "Plan", body: "Best windows, commute & indoor swaps" },
  { n: "4", title: "Act", body: "Hindi summary + low carbon tip + alert" },
];

const ecosystem = [
  { title: "Sources", items: ["Traffic", "Construction", "Dust · Burning", "Regional haze"] },
  { title: "Air", items: ["AQI", "PM2.5 · PM10", "measured, but not understood"] },
  { title: "People", items: ["Students · Children", "Elderly · Workers", "Athletes · Families"] },
  { title: "Daily life", items: ["Breathing risk", "Commute smoke", "Cancelled play & sport"] },
  { title: "Decisions", items: ["Exercise · Travel", "School timings", "Exposure · Commute"] },
];

export default function Problem() {
  return (
    <Section id="problem" dark>
      <Container>
        <SectionHeader
          eyebrow="§2 · The Core Narrative"
          title="From a scary number to a clear plan"
          subtitle="The entire project in one storyboard: what happens today, what is missing, and how VayuSathi closes the gap."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Card>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Today</div>
            <div className="mt-3 text-3xl font-black" style={{ color: "#f5893a" }}>
              AQI 268
            </div>
            <div className="text-sm font-semibold uppercase tracking-wide text-orange-400">Poor</div>
            <p className="mt-3 text-sm text-slate-400">
              User sees a number in an app — in English, with a colour dot.
            </p>
            <p className="mt-3 text-sm italic text-slate-500">
              “What should I actually do? Walk? Mask? Metro? Reschedule?” Nobody says.
            </p>
          </Card>

          <Card>
            <div className="text-xs font-bold uppercase tracking-wider text-rose-400">The Gap</div>
            <ul className="mt-3 space-y-2">
              {gaps.map((g) => (
                <li key={g} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-0.5 text-rose-400">✕</span>
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Result: the most exposed people — riders, vendors, children, athletes — improvise.
            </p>
          </Card>

          <Card className="border-emerald-400/30 bg-emerald-400/[0.04]">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">VayuSathi</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {steps.map((s) => (
                <div key={s.n} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-xs font-bold text-emerald-400">{s.n} · {s.title}</div>
                  <div className="mt-1 text-xs text-slate-400">{s.body}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-14">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Lucknow · Nov 285 · Poor
            </div>
            <Badge label="DEMO DATA" />
          </div>
          <AQIScale />
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
            How might we…?
          </div>
          <p className="max-w-4xl text-lg font-medium leading-relaxed text-white">
            …use AI to translate complex, fast-changing air-quality data into clear, personal,
            local-language health and mobility guidance — so that students, families, workers and schools in
            Lucknow can reduce harmful exposure and live more sustainably?
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Card>
            <div className="text-sm font-bold text-white">What drives poor air — and what it disrupts</div>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <div>
                <span className="font-semibold text-slate-200">Sources —</span> Traffic · Construction dust ·
                Waste burning · Seasonal haze. Vehicles, road &amp; site dust, gensets, biomass, regional
                haze.
              </div>
              <div>
                <span className="font-semibold text-slate-200">Air quality —</span> Poor–Very Poor winters,
                AQI 200–350+ across Oct–Feb <Badge label="DEMO DATA" />
              </div>
            </div>
          </Card>
          <Card>
            <div className="text-sm font-bold text-white">Scope boundary</div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              VayuSathi builds no sensors and replaces no official forecast — it is a decision-support and
              awareness layer over CPCB / IMD public data, giving general preventive information only
              (never diagnosis).
            </p>
          </Card>
        </div>

        <div className="mt-10">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Pollution ecosystem — why guidance must connect everything
          </div>
          <div className="flex flex-wrap items-stretch gap-3">
            {ecosystem.map((e, i) => (
              <div key={e.title} className="flex items-center gap-3">
                <div className="w-40 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">{e.title}</div>
                  <ul className="mt-2 space-y-1 text-[11px] text-slate-400">
                    {e.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
                {i < ecosystem.length - 1 && <span className="text-slate-600">→</span>}
              </div>
            ))}
            <span className="text-slate-600">→</span>
            <div className="flex w-48 items-center rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-300">VayuSathi</div>
                <div className="mt-2 text-[11px] text-emerald-200">
                  Personalised guidance — the missing link between data &amp; decisions
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              §4 · Air Quality in Numbers
            </div>
            <Badge label="DEMO DATA" />
          </div>
          <p className="max-w-3xl text-sm text-slate-400">
            Illustrative seasonal patterns for Lucknow (inspired by typical CPCB trends) — showing when
            guidance matters most. All values on this page are illustrative — not live monitoring.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Card>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Jul · Satisfactory</div>
              <div className="mt-2 text-3xl font-black text-lime-400">95</div>
              <p className="mt-2 text-sm text-slate-400">
                Seasonal AQI: October–February forms a sustained high-risk window where daily guidance
                matters most.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Nov · Poor</div>
              <div className="mt-2 text-3xl font-black text-orange-400">285</div>
              <p className="mt-2 text-sm text-slate-400">
                Mornings run worst in winter — the same routine needs different timing by season.
              </p>
            </Card>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatPill value="215 / 365" label="days above Satisfactory" />
            <StatPill value="Oct–Feb" label="high-risk window" />
            <StatPill value="AQI 200–350+" label="typical winter peak" />
            <StatPill value="Year-round" label="guidance need" />
          </div>
          <div className="mt-8">
            <AQIScale />
          </div>
        </div>
      </Container>
    </Section>
  );
}
