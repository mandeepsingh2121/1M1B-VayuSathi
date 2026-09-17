import { Badge, Card, Container, Section, SectionHeader } from "./ui";

function PhoneFrame({
  time,
  title,
  children,
}: {
  time: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[2rem] border-4 border-slate-800 bg-slate-900 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between bg-slate-950 px-4 py-2 text-[10px] text-slate-400">
        <span>{time}</span>
        <span>5G ▮▮▮ 82%</span>
      </div>
      <div className="flex items-center justify-between bg-slate-900 px-4 py-2 text-[11px] font-bold text-white">
        <span>{title}</span>
        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] text-emerald-300">EN | HI</span>
      </div>
      <div className="min-h-[360px] space-y-3 bg-slate-950 p-4">{children}</div>
    </div>
  );
}

export default function UIConcepts() {
  return (
    <Section id="ui">
      <Container>
        <SectionHeader
          eyebrow="§14 · Product UI Concept"
          title="Mobile experience"
          subtitle="Six connected screens — the 30-second experience from a raw AQI number to a personal, cited, bilingual action."
          badges={["CONCEPTUAL UI"]}
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <PhoneFrame time="8:04 AM" title="Gomti Nagar · Lucknow">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <div className="text-[10px] uppercase text-slate-400">Current AQI · 8 AM · 24°C Haze</div>
                <div className="mt-1 text-3xl font-black text-orange-400">268</div>
                <div className="text-xs font-bold text-orange-300">POOR</div>
                <p className="mt-2 text-[11px] text-slate-400">
                  Heavy dust/smoke. Long outdoor exertion can leave you breathless.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-[11px] text-emerald-100">
                <div className="font-bold text-emerald-300">Recommendation</div>
                Avoid 6–9 AM outdoor exercise → indoor walk or after 4 PM.
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-[11px] text-slate-300">
                <div className="font-bold text-slate-100">Safer option</div>
                Mask + low-traffic lane + water if you must go.
              </div>
              <button className="w-full rounded-full bg-emerald-400 py-2 text-[11px] font-bold text-slate-950">
                Ask VayuSathi →
              </button>
            </PhoneFrame>
            <p className="mt-3 text-center text-xs font-semibold text-slate-400">1 · Home — AQI + verdict in 10 seconds</p>
          </div>

          <div>
            <PhoneFrame time="8:05 AM" title="Ask VayuSathi">
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-emerald-500/20 px-3 py-2 text-[11px] text-emerald-100">
                Morning walk safe near Gomti Nagar?
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-3 py-2 text-[11px] text-slate-200">
                AQI 268 Poor. Walk indoors today — or after 4 PM if AQI &lt; 200.
                <div className="mt-1 text-violet-300">Subah bahar walk na karein; ghar me walk karein.</div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["Cycling 7 AM?", "Best window?", "Asthma tips"].map((c) => (
                  <span key={c} className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-slate-300">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
                <span className="flex-1 text-[10px] text-slate-500">Type… school, asthma, travel…</span>
                <span className="text-emerald-400">➤</span>
              </div>
            </PhoneFrame>
            <p className="mt-3 text-center text-xs font-semibold text-slate-400">2 · Ask — chat in Hindi or English</p>
          </div>

          <div>
            <PhoneFrame time="8:06 AM" title="Personal Advisory">
              <div className="flex flex-wrap gap-1.5">
                {["Student", "Worker", "Child", "Asthma", "Athlete"].map((p) => (
                  <span
                    key={p}
                    className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                      p === "Asthma" ? "bg-emerald-400 text-slate-950" : "border border-white/10 text-slate-400"
                    }`}
                  >
                    {p}
                  </span>
                ))}
              </div>
              <div className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-3">
                <div className="text-[10px] uppercase text-rose-300">Risk for asthma · 1 hr out</div>
                <div className="mt-1 text-xl font-black text-rose-300">HIGH</div>
                <p className="mt-1 text-[11px] text-rose-100/80">AQI 268 Poor × 1-hr outdoor exposure.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-[11px] text-slate-300">
                <div className="font-bold text-slate-100">Precautions</div>
                ① Inhaler + avoid jam roads ② Split trip + mask ③ Breathless? See a doctor.
              </div>
              <p className="text-[10px] text-slate-500">General info only — not medical advice.</p>
            </PhoneFrame>
            <p className="mt-3 text-center text-xs font-semibold text-slate-400">3 · Personal — risk matched to you</p>
          </div>

          <div>
            <PhoneFrame time="7:30 AM" title="48-Hour Planner">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-[11px] text-slate-300">
                <div className="font-bold text-slate-100">Cricket · Lucknow</div>
                <div className="mt-1 text-orange-300">Today · POOR 210–280</div>
                <div className="mt-1 text-emerald-300">Best: Tue 2–5 PM (140–150, Moderate)</div>
              </div>
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-[11px] text-emerald-100">
                <div className="font-bold text-emerald-300">Verdict</div>
                Skip today morning → indoor fitness; nets tomorrow 2–5 PM.
              </div>
              <p className="text-[10px] text-slate-500">Forecast indicative, may change.</p>
              <button className="w-full rounded-full border border-white/15 py-2 text-[11px] font-bold text-white">
                Set alert →
              </button>
            </PhoneFrame>
            <p className="mt-3 text-center text-xs font-semibold text-slate-400">4 · Planner — best windows, 48 hrs</p>
          </div>

          <div>
            <PhoneFrame time="8:50 AM" title="Commute">
              <div className="text-[11px] text-slate-300">Aliganj → University · AQI 240 · POOR · 9 AM</div>
              <div className="space-y-2">
                <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-2 text-[11px] text-emerald-100">
                  ① Metro + 8-min walk (masked) — lowest smoke + carbon
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-[11px] text-slate-300">
                  ② Shared auto / carpool
                </div>
                <div className="rounded-lg border border-rose-400/20 bg-rose-400/5 p-2 text-[11px] text-rose-200">
                  ③ Solo bike — avoid (max exhaust)
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-[11px] text-slate-300">
                <span className="font-bold text-slate-100">Timing — </span>Leave 9:40 to dodge the 8–9 jam peak.
              </div>
              <p className="text-[10px] text-emerald-400">Tip: engine idle off; fix a carpool.</p>
            </PhoneFrame>
            <p className="mt-3 text-center text-xs font-semibold text-slate-400">5 · Commute — cleaner + safer rank</p>
          </div>

          <div>
            <PhoneFrame time="7:00 AM" title="School Card">
              <div className="text-[11px] text-slate-300">City School · 18 Nov · AQI 285 · POOR</div>
              <div className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-3 text-center">
                <div className="text-lg font-black text-rose-300">INDOORS</div>
                <p className="mt-1 text-[10px] text-rose-100/80">PT inside. No morning jog on main ground.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-[11px] italic text-slate-300">
                “Aaj hawa kharab hai — bahar khel kood na karein, andar khelein…”
              </div>
              <div className="text-[10px] text-slate-400">
                Windows shut 8–10 • inhalers ready • clubs → 3–4 PM.
              </div>
              <button className="w-full rounded-full bg-emerald-400 py-2 text-[11px] font-bold text-slate-950">
                Print / Share →
              </button>
            </PhoneFrame>
            <p className="mt-3 text-center text-xs font-semibold text-slate-400">6 · School — print-ready SOP card</p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">EN · English</div>
            <p className="mt-2 text-sm text-slate-300">
              AQI 268 · Poor. Avoid 6–9 AM outdoor walk. Walk indoors, or after 4 PM if AQI drops below 200.
              Mask + water if you go out.
            </p>
          </Card>
          <Card>
            <div className="text-xs font-bold uppercase tracking-wide text-violet-400">HI · Hindi</div>
            <p className="mt-2 text-sm text-slate-300">
              AQI 268 · Kharab. Subah bahar lambi sair na karein. Ghar me walk karein ya 4 baje ke baad
              jayein. Bahar jayein to mask + paani saath rakhein.
            </p>
          </Card>
        </div>

        <div className="mt-20">
          <SectionHeader
            eyebrow="§15 · Web Concept for Campuses & RWAs"
            title="City dashboard concept"
            subtitle="vayusathi.in/lucknow — a conceptual command view for schools, campuses and ward officials."
            badges={["CONCEPTUAL UI", "DEMO DATA"]}
          />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-1">
              <div className="text-xs uppercase text-slate-400">Lucknow · Now · 8 AM</div>
              <div className="mt-1 text-4xl font-black text-orange-400">268</div>
              <div className="text-sm font-bold text-orange-300">POOR</div>
              <p className="mt-2 text-xs text-slate-400">
                PM2.5 high · haze · wind 8 km/h. Meaning: prolonged outdoor exertion can cause breathing
                discomfort.
              </p>
            </Card>
            <Card>
              <div className="text-xs uppercase text-slate-400">48-hour trend</div>
              <p className="mt-2 text-sm text-slate-300">
                Improving tomorrow PM — best outdoor window Tue 2–5 PM.
              </p>
            </Card>
            <Card>
              <div className="text-xs uppercase text-slate-400">School alert status</div>
              <div className="mt-1 text-sm font-bold text-rose-300">INDOORS · 12 schools notified</div>
              <p className="mt-2 text-xs text-slate-400">Morning cards issued 7 AM. Next review 3 PM.</p>
            </Card>
            <Card>
              <div className="text-xs uppercase text-slate-400">Hotspots · ward heat (concept)</div>
              <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-300">
                {["Hazratganj", "Gomti Ngr", "Aliganj", "Jankipuram"].map((w) => (
                  <span key={w} className="rounded-full border border-white/10 px-2 py-1">
                    {w}
                  </span>
                ))}
              </div>
            </Card>
            <Card>
              <div className="text-xs uppercase text-slate-400">Sensitive groups</div>
              <p className="mt-2 text-xs text-slate-400">
                Asthma: HIGH • Children: Moderate–High • Elderly: High • Outdoor workers: Hindi advisories
                pushed.
              </p>
            </Card>
            <Card>
              <div className="text-xs uppercase text-slate-400">Transport suggestion</div>
              <p className="mt-2 text-xs text-slate-400">Metro +8% expected on alert days.</p>
              <Badge label="PROJECTED TARGET" />
            </Card>
          </div>
          <Card className="mt-4">
            <div className="text-xs uppercase text-slate-400">Recommended actions</div>
            <p className="mt-2 text-sm text-slate-300">
              ① Shift outdoor sports indoors ② Metro/carpool nudges ON ③ Dust complaint drive: 18 open ④
              RWA awareness post ready →
            </p>
          </Card>
          <p className="mt-4 text-xs text-slate-500">
            Conceptual prototype — illustrative data. A production dashboard would bind to live CPCB feeds
            + IMD models (pilot scope).
          </p>
        </div>
      </Container>
    </Section>
  );
}
