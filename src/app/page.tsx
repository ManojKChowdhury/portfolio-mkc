import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Summary />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <FloatingNav />
    </main>
  );
}
