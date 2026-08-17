import { About } from "@/components/about/about";
import { Experience } from "@/components/experience/experience";
import { Hero } from "@/components/hero/hero";
import { Work } from "@/components/work/work";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}