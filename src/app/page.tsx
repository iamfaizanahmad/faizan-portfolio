import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Impact } from "@/sections/Impact";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Approach } from "@/sections/Approach";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Page() {
  return (
    <>
      <a
        href="#work"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-[color:var(--fg)] focus:px-3 focus:py-1.5 focus:text-sm focus:text-[color:var(--bg)]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="top">
        <Hero />
        <Impact />
        <Experience />
        <Projects />
        <Skills />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
