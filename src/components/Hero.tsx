import { Badge, Container } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 pb-24 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px]" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">1M1B × IBM SkillsBuild × AICTE</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">AI for Sustainability</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Jul–Sep 2026</span>
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-7xl">
            Vayu<span className="text-emerald-400">Sathi</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium text-emerald-300 sm:text-xl">
            AI for Cleaner Air. Smarter Decisions. Healthier Cities.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            An AI-powered air quality monitoring &amp; health advisory assistant — starting with{" "}
            <span className="text-white">Lucknow, India</span>. Turning a scary AQI number into a clear,
            personal, Hindi-first plan.
          </p>

          <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">SDG 11 · 3 · 13</div>
              <div className="mt-1 text-sm text-slate-300">Sustainable cities · Health · Climate</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Prototype</div>
              <div className="mt-1 text-sm text-slate-300">5 workflows · RAG · 9 UI screens</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Hindi + English</div>
              <div className="mt-1 text-sm text-slate-300">Voice-ready · Low-text cards</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#summary"
              className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300"
            >
              Explore the report ↓
            </a>
            <a
              href="#workflows"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-emerald-400 hover:text-emerald-300"
            >
              See the prototype
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            <Badge label="DEMO DATA" />
            <Badge label="PROJECTED TARGET" />
            <Badge label="CONCEPTUAL UI" />
            <Badge label="PROPOSED ARCHITECTURE" />
            <Badge label="FUTURE SCOPE" />
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
            <span className="font-semibold text-slate-300">Mandeep Singh</span> · University of Lucknow, Uttar Pradesh
          </div>
        </div>
      </Container>
    </section>
  );
}
