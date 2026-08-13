import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Experience />
      <Skills />
      <Education />
      <About />
    </>
  );
}
