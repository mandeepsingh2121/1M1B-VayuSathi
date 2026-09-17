import { useState } from "react";
import { Badge, Container, Section, SectionHeader } from "./ui";

const workflows = [
  {
    id: "P1",
    title: "AQI Explainer",
    purpose: "Turn any AQI value into plain EN + Hindi meaning.",
    prompt:
      "Role: explain any AQI value in plain words.\nSlots: {aqi} {place} {hour} {rag_band_guidance}\nSteps: map band → 1-line breathing meaning → 3 do's/don'ts (RAG only)\n→ 2-line Hindi summary → source line. No medical claims. Grade-6 language.",
    inputs: "AQI 268 · Gomti Nagar · 8 AM · CPCB Poor-band chunk",
    processing: "Band mapping → RAG summary → Hindi render → contract check",
    user: "Explain AQI 268 at Gomti Nagar, 8 AM.",
    aqi: 268,
    band: "POOR",
    answer:
      "What it means: heavy dust/smoke — a long morning walk can leave you breathless.\n\nRecommendation: avoid 6–9 AM exertion → indoor walk, or after 4 PM if AQI < 200. Safer option: mask + low-traffic lane + water. At home: windows shut 7–10 AM.",
    hindi: "Subah bahar lambi sair na karein. Ghar me walk karein. Bahar jayein to mask lagayein.",
    tip: "Clean-air tip: metro / carpool today; no idling.",
    source: "CPCB Poor-band guidance",
    guardrail: "No diagnosis • band + source cited • stale data would be declared, never gap-filled.",
  },
  {
    id: "P2",
    title: "Personal Advisory",
    purpose: "Risk-matched precautions for six sensitivity profiles — same risk logic, adapted guidance.",
    prompt:
      "Profiles: student | child | elderly | asthma | outdoor_worker | athlete\nrisk = f(band, profile, duration) → Low / Moderate / High / Very High\nSteps: classify → profile precautions (≤3) → escalation line → Hindi tone-match.\nNever diagnose. Never ask for medical history.",
    inputs: "Asthma student · AQI 268 · Hazratganj · 1 hr outdoors",
    processing: "Poor × 1 hr × asthma → HIGH → precaution template → safety line",
    user: "I'm an asthma student. AQI 268, out for 1 hour — precautions?",
    aqi: 268,
    band: "POOR",
    answer:
      "Risk for asthma profile: HIGH (Poor × 1-hr outdoor).\n\n① Carry inhaler/medicine; avoid jam roads and exhaust side. ② Split the trip (30 min + indoor break); fitted mask; sip water. ③ If wheezing/breathless — stop, rest, see a doctor promptly.",
    hindi: "Asthma walo ke liye aaj risk ZYADA. Dawa saath, mask, bheed wali sadak se bachein.",
    tip: "General info only, not medical advice.",
    source: "CPCB Poor-band + WHO sensitive-group pattern",
    guardrail: "Fairness: identical risk engine for all profiles — only precautions and language adapt. Doctor-escalation line is mandatory.",
  },
  {
    id: "P3",
    title: "48-Hour Outlook",
    purpose: "Rank best/worst time windows and raise early warnings before Very-Poor spells.",
    prompt:
      "Slots: {today_slots[6]} {tomorrow_slots[6]} {weather} {activity}\nSteps: rank windows → verdict (go / shift / indoor-swap)\n→ if any slot ≥301: EARLY WARNING + night precautions.\nState uncertainty (“likely”, “may change”). Forecast ≠ measured fact.",
    inputs: "Cricket · today 210–280 · tomorrow 140–200 (improving)",
    processing: "Window ranking → best slot → alert check (max 280: no Very-Poor alert)",
    user: "Cricket practice in Lucknow — today or tomorrow? When is best?",
    aqi: 280,
    band: "POOR",
    answer:
      "Verdict: skip today morning → best window Tue 2–5 PM (likely Moderate 140–150).\n\nToday: Poor all day — indoor fitness; ground session 30 min with breaks. Tomorrow: improving after 12 PM — nets 2–5 PM, water, indoor warm-up. Watch: haze thickens or >300 → fully indoors.",
    hindi: "Aaj maidan me lamba khel na karein. Kal 2–5 baje behtar sambhavna — wahi slot rakhein.",
    tip: "Forecast indicative, may change · Team carpool/metro tip",
    source: "48-hour trend model",
    guardrail: "Uncertainty is always stated; the full 48-hour trend visual lives on the city dashboard.",
    demo: true,
  },
  {
    id: "P4",
    title: "Commute Planner",
    purpose: "Jointly minimise smoke exposure and emissions — the SDG 11 + SDG 13 link in one answer.",
    prompt:
      "Slots: {origin} {destination} {time} {aqi_now} {options}\nSteps: rank by (exposure × duration), then emissions → timing shift?\n→ 1-line low-carbon nudge.\nWalk/cycle on Poor+ days: mask + low-traffic route required, else recommend against.",
    inputs: "Aliganj → University · 9 AM · AQI 240 · metro / shared auto / bike",
    processing: "Exposure ranking → 9:40 shift check → nudge selection",
    user: "Aliganj to University at 9 AM. AQI 240 — best option?",
    aqi: 240,
    band: "POOR",
    answer:
      "Best today: Metro + 8-min walk (masked) — lowest smoke + lowest carbon.\n\nRank: ① Metro + short walk ② Shared auto / carpool ③ Solo two-wheeler — avoid (max exhaust). Timing: 9:40 if possible; dodge the 8–9 jam peak. On foot/cycle: inner lane, mask, steady pace, water break.",
    hindi: "Aaj metro + thodi paidal (mask ke saath) sabse behtar. Jaam se bachein.",
    tip: "No-idling tip",
    source: "CPCB Poor-band + exposure heuristic",
    guardrail: "Active-travel advice is conditional on band + mask + route — never a blanket “cycle more” on red days.",
  },
  {
    id: "P5",
    title: "School Advisory Card",
    purpose: "A printable morning card + assembly text — a zero-hardware bad-air SOP for schools.",
    prompt:
      "Rule table: ≤100 Normal · 101–200 Shortened · 201–300 Indoors · 301+ Suspended\nSlots: {date} {campus} {aqi_morning} {forecast}\nSteps: status → 40-word assembly text (EN + Hindi line) → card fields\n(date, AQI, colour, decision, 3 instructions).",
    inputs: "Univ. of Lucknow campus · 18 Nov · AQI 285 · poor all day",
    processing: "285 → INDOORS → announcement draft → instruction pick",
    user: "Morning card for campus, 18 Nov. AQI 285, poor all day.",
    aqi: 285,
    band: "POOR",
    answer:
      "CAMPUS ADVISORY · 18 Nov · AQI 285 POOR → Sports: INDOORS. PT inside; no morning jog on the main ground.\n\nAssembly text: “Air quality is Poor today. Indoor games and hall practice only. If you go out, wear a mask and drink water.”\n\nInstructions: ① Windows shut 8–10 AM ② Asthma students keep medicine + inform teachers ③ Evening clubs → 3–4 PM, subject to update.",
    hindi: "Aaj hawa kharab hai — bahar khel-kood na karein, andar khelein.",
    tip: "Demo — verify with CPCB reading",
    source: "CPCB Poor-band + campus rule table",
    guardrail: "Human-in-the-loop: cards are marked “verify before assembly” — the school, not the model, makes the final call.",
  },
];

export default function Workflows() {
  const [active, setActive] = useState(0);
  const w = workflows[active];

  return (
    <Section id="workflows" dark>
      <Container>
        <SectionHeader
          eyebrow="§13 · Prototype"
          title="Five prompt workflows, end to end"
          subtitle="Each workflow shows the system prompt, live inputs, AI processing and the exact output contract VayuSathi enforces."
          badges={["DEMO DATA"]}
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {workflows.map((wf, i) => (
            <button
              key={wf.id}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
                active === i
                  ? "border-emerald-400 bg-emerald-400 text-slate-950"
                  : "border-white/15 text-slate-300 hover:border-emerald-400/60 hover:text-emerald-300"
              }`}
            >
              {wf.id} · {wf.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-[11px] leading-relaxed text-emerald-300">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500"># System prompt (excerpt)</div>
              <pre className="whitespace-pre-wrap">{w.prompt}</pre>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Purpose</div>
              <p className="mt-1 text-sm text-slate-300">{w.purpose}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Inputs</div>
              <p className="mt-1 text-sm text-slate-300">{w.inputs}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Processing</div>
              <p className="mt-1 text-sm text-slate-300">{w.processing}</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-[10px] font-black text-slate-950">
                    VS
                  </span>
                  VayuSathi
                </div>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold text-slate-950"
                  style={{ backgroundColor: w.aqi <= 200 ? "#f4c430" : w.aqi <= 300 ? "#f5893a" : "#e0453c" }}
                >
                  {w.aqi} · {w.band}
                </span>
              </div>
              <div className="space-y-4 p-5">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-500/20 px-4 py-3 text-sm text-emerald-100">
                  {w.user}
                </div>
                <div className="max-w-[95%] rounded-2xl rounded-tl-sm bg-white/[0.05] px-4 py-3 text-sm leading-relaxed text-slate-200">
                  <p className="whitespace-pre-line">{w.answer}</p>
                  <div className="mt-3 rounded-lg border border-violet-400/20 bg-violet-400/5 p-2 text-xs text-violet-200">
                    <span className="font-bold">Hindi — </span>{w.hindi}
                  </div>
                  <div className="mt-2 text-xs text-emerald-300">🌿 {w.tip}</div>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-2 text-[11px] text-slate-500">
                    <span>Source: {w.source}</span>
                    <span>Was this helpful? Yes / No</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-2 rounded-xl border border-rose-400/20 bg-rose-400/5 p-3 text-xs text-rose-200">
              <span>🛡</span>
              <span>
                <span className="font-bold">Safety guardrail — </span>
                {w.guardrail}
              </span>
            </div>
            {w.demo && (
              <div className="mt-3">
                <Badge label="DEMO DATA" />
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
