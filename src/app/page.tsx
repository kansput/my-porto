import { Hero } from "@/components/features/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { AboutMe } from "@/components/features/AboutMe";
import { TechStack } from "@/components/features/TechStack";
import { Certificates } from "@/components/features/Certificates";
import { Projects } from "@/components/features/Projects"; // Import wadah besarnya
import { Experience } from "@/components/features/Experience";
import { Contact } from "@/components/features/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee text="/// OPEN FOR WORK /// SOFTWARE ENGINEER /// API SECURITY SPECIALIST /// BUG HUNTER /// " />
      <AboutMe />
      <TechStack />
      <Certificates />
      <Projects />
      <Experience />
      <Marquee text="/// OPEN FOR WORK /// SOFTWARE ENGINEER /// API SECURITY SPECIALIST /// BUG HUNTER /// " />
      <Contact />
    </main>
  );
}