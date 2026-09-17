import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Problem from "./components/Problem";
import Personas from "./components/Personas";
import AICapability from "./components/AICapability";
import Architecture from "./components/Architecture";
import Workflows from "./components/Workflows";
import UIConcepts from "./components/UIConcepts";
import Trust from "./components/Trust";
import Impact from "./components/Impact";
import Closing from "./components/Closing";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 antialiased">
      <Nav />
      <main>
        <Hero />
        <Summary />
        <Problem />
        <Personas />
        <AICapability />
        <Architecture />
        <Workflows />
        <UIConcepts />
        <Trust />
        <Impact />
        <Closing />
      </main>
    </div>
  );
}
