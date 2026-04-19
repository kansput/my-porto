"use client";
import { useRef } from "react";
import { ProjectCard } from "../ui/ProjectCard";
import { RiArrowLeftSLine, RiArrowRightSLine, RiTerminalWindowLine } from "react-icons/ri";

const allProjects = [
  {
    title: "Kyuverse",
    description: "Creative Web Developer for Artists, Cosplayers, and Creative Communities. Developed by Kanda Putra.",
    tags: ["Next.js", "LandingPage", "Frontend", "Creative", "community", "Commission"],
    image: "/images/kyuverse.webp",
    link: "https://www.kyuverse.my.id/",
    slug: "kyuverse"
  },
  {
    title: "Rilyverse",
    description: "Ririlily's digital world. Creative portfolio and exclusive merch platform. Built with Next.js.",
    tags: ["Next.js", "LandingPage", "Frontend", "Creative", "Personal", "cosplay"],
    image: "/images/rilyverse.webp",
    link: "https://www.rilyverse.my.id/",
    slug: "rilyverse"
  },
  {
    title: "Sirindu",
    description: "SI RINDU - Digital platform for elderly insomnia solutions using 5-finger hypnosis techniques. Health-tech development by Kanda Putra.",
    tags: ["Next.js", "LandingPage", "Frontend", "HealthTech", "Insomnia", "SleepAid"],
    image: "/images/sirindu.webp",
    link: "https://sirindu.com/",
    slug: "sirindu"
  },
  {
    title: "Smart Lansia",
    description: "Digital health ecosystem for elderly wellness monitoring and health education. Developed by Kanda Putra.",
    tags: ["Next.js", "HealthTech", "ElderlyCare", "Frontend", "Monitoring"],
    image: "/images/smart.webp",
    link: "https://smartlansia.web.id/",
    slug: "smart-lansia"
  },
  {
    title: "SIBO",
    description: "Sistem Informasi Bimbingan Online - Integrated platform for digital academic guidance and consultation management.",
    tags: ["Next.js", "Dashboard", "SystemInformation", "Education", "Fullstack"],
    image: "/images/sibo.webp",
    link: "https://sibo.web.id/",
    slug: "sibo"
  },
  {
    title: "Re-Krendisial ",
    description: "Internal dashboard for RS St. Carolus nursing unit re-credentialing. Streamlining medical bureaucracy.",
    tags: ["Next.js", "Dashboard", "Frontend", "Healthcare", "Nursing", "Credentialing"],
    image: "/images/rek.webp",
    link: "/credential",
    slug: "re-kre",
    isBlurred: true
  },
  {
    title: "Bank Sampah Anambas",
    description: "Digital platform for waste management in Anambas Islands. Environmental software by Kanda Putra.",
    tags: ["Next.js", "Supabase", "Fullstack", "Environmental", "Community", "WasteManagement"],
    image: "/images/bank-sampah-anambas.webp",
    link: "https://anambas.my.id/",
    slug: "bank-sampah-anambas"
  },
  {
    title: "Rantaibiru",
    description: "Supply chain ecosystem for sustainable waste management. Integrating admins and collectors.",
    tags: ["Next.js", "Supabase", "Fullstack", "Environmental", "Community", "WasteManagement"],
    image: "/images/rantai.webp",
    link: "https://rantaibiru.com/",
    slug: "rantaibiru"
  },
];

export const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24 bg-neo-yellow border-y-8 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-neo-black text-white px-3 py-1 mb-4 border-2 border-black shadow-hard rotate-[-1deg]">
              <RiTerminalWindowLine className="text-neo-green" />
              <span className="font-mono text-xs font-bold uppercase">KANDA_WORKS.exe </span>
            </div>
            <h2 className="text-7xl md:text-9xl font-black uppercase text-white tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '3px black' }}>
              Works
              <span className="sr-only">. Portfolio of Software Engineering and Freelance Web Development projects by Kanda Putra.</span>
            </h2>
          </div>

          <nav className="flex gap-4" aria-label="Project Navigation">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center text-4xl shadow-hard hover:bg-neo-blue hover:text-white active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
            >
              <RiArrowLeftSLine aria-hidden="true" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-16 h-16 bg-neo-black text-white border-4 border-black flex items-center justify-center text-4xl shadow-hard hover:bg-neo-pink active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
            >
              <RiArrowRightSLine aria-hidden="true" />
            </button>
          </nav>
        </header>

        <div
          ref={scrollRef}
          role="region"
          aria-label="Software Projects Carousel"
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12 transition-all"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allProjects.map((project) => (
            <div key={project.slug} className="flex-shrink-0 w-[85vw] md:w-[500px] snap-center">
              <article>
                <ProjectCard {...project} />
                <span className="sr-only">Project title: {project.title}. Tech stack: {project.tags.join(', ')}.</span>
              </article>
            </div>
          ))}
        </div>

        <footer className="mt-8 border-t-4 border-black pt-4 flex justify-between font-mono text-xs font-bold uppercase text-black/60">
          <span>Explore Kanda Putra's Web Development Projects</span>
          <span>Total_Nodes: {allProjects.length}</span>
        </footer>
      </div>
    </section>
  );
};