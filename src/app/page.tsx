import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#141714]">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
