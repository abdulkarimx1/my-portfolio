import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] selection:bg-white selection:text-black">
      <Hero />
      <Projects />
    </main>
  );
}
