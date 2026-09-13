import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-blue-500/30">
      <Hero />
      <Projects />
    </main>
  );
}