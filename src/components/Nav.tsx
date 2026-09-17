import { useEffect, useState } from "react";

const links = [
  { id: "summary", label: "Summary" },
  { id: "problem", label: "Problem" },
  { id: "personas", label: "Users" },
  { id: "ai", label: "AI Engine" },
  { id: "architecture", label: "Architecture" },
  { id: "workflows", label: "Prototype" },
  { id: "ui", label: "UI" },
  { id: "trust", label: "Trust" },
  { id: "impact", label: "Impact" },
  { id: "closing", label: "Closing" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "border-b border-white/10 bg-slate-950/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 text-sm font-black text-slate-950">
            VS
          </span>
          <span className="text-sm font-bold tracking-wide text-white">
            Vayu<span className="text-emerald-400">Sathi</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-xs font-medium uppercase tracking-wide text-slate-400 transition hover:text-emerald-400"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
