import { Container, Section } from "./ui";

const grid = [
  { title: "Problem", body: "Air data is hard to act on" },
  { title: "AI solution", body: "LLM + RAG + planning" },
  { title: "Sustainability", body: "Healthier habits + cleaner mobility" },
  { title: "Users", body: "Students · families · workers · athletes · schools" },
  { title: "Outputs", body: "Advice · alerts · windows · commute plans" },
  { title: "Status → Next", body: "Conceptual prototype → campus pilot" },
];

export default function Closing() {
  return (
    <Section id="closing" dark className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>
      <Container className="relative text-center">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">Closing · VayuSathi</div>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">
          “From AQI numbers to everyday action.”
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-400">
          VayuSathi — helping Lucknow breathe better. A thoughtfully designed AI companion: personal,
          predictive, Hindi-first, and safe by construction.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((g) => (
            <div key={g.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-xs font-bold uppercase tracking-wide text-emerald-400">{g.title}</div>
              <div className="mt-1 text-sm text-slate-300">{g.body}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-base font-bold text-white">Mandeep Singh</div>
          <div className="mt-1 text-sm text-slate-400">University of Lucknow · Lucknow, India</div>
          <div className="mt-3 text-xs uppercase tracking-wide text-slate-500">
            1M1B × IBM SkillsBuild × AICTE
          </div>
          <div className="text-xs text-slate-500">AI for Sustainability Virtual Internship · Final Project · Jul–Sep 2026</div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-slate-600">
          VayuSathi · From AQI numbers to everyday action.
        </div>
      </Container>
    </Section>
  );
}
