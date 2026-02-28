"use client";
import { useRef } from "react";
import { ProjectCard } from "../ui/ProjectCard";
import { RiArrowLeftSLine, RiArrowRightSLine, RiTerminalWindowLine } from "react-icons/ri";

const allProjects = [
  {
    title: "Kyuverse",
    description: "Creative Web Developer for Artists, Cosplayers, and Creative Communities, Design and build portfolio websites, commission platforms, and community spaces for artists and cosplayers to showcase artwork and cosplay projects, manage commissions, and grow their audience online.",
    tags: ["Next.js", "LandingPage", "Frontend", "Creative", "community", "Commission"],
    image: "/images/kyuverse.webp",
    link: "https://www.kyuverse.my.id/",
    slug: "kyuverse"
  },
  {
    title: "Rilyverse",
    description: "Rirlyverse Ririlily's little digital world. ririlily Come check out my cute cosplays, special creations, and exclusive merch — all with that super kawaii vibe that'll totally melt your heart",
    tags: ["Next.js", "LandingPage", "Frontend", "Creative", "Personal", "cosplay"],
    image: "/images/rilyverse.webp",
    link: "https://www.rilyverse.my.id/",
    slug: "rilyverse"
  },
  {
    title: "Sirindu",
    description: "SI RINDU adalah platform digital terdepan yang dirancang khusus untuk memberikan solusi komprehensif bagi lansia yang mengalami masalah insomnia. Kami mengintegrasikan teknik Hipnosis 5 Jari yang terbukti secara ilmiah untuk membantu mencapai kualitas tidur yang optimal.",
    tags: ["Next.js", "LandingPage", "Frontend", "HealthTech", "Insomnia", "SleepAid"],
    image: "/images/sirindu.webp",
    link: "https://sirindu.com/",
    slug: "sirindu"
  },
  {
    title: "Re-Krendisial ",
    description: "Dashboard internal yang menyederhanakan alur birokrasi verifikasi izin praktik dan kompetensi perawat ke dalam satu sistem yang terorganisir dan transparan.",
    tags: ["Next.js", "Dashboard", "Frontend", "Healthcare", "Nursing", "Credentialing"],
    image: "/images/rek.webp",
    link: "/credential", // Link diubah sesuai permintaan
    slug: "re-kre",
    isBlurred: true // Flag untuk efek blur & toast
  },
  {
    title: "Bank Sampah Anambas",
    description: "A digital platform to manage waste banks in the Anambas Islands, facilitating community recycling, tracking transactions, and raising environmental awareness through user-friendly technology.",
    tags: ["Next.js", "Supabase", "Fullstack", "Environmental", "Community", "WasteManagement"],
    image: "/images/bank-sampah-anambas.webp",
    link: "https://anambas.my.id/",
    slug: "bank-sampah-anambas"
  },
  {
    title: "Rantaibiru",
    description: "Building a digital platform to integrate foundation admins and collector networks into a transparent and efficient supply chain ecosystem. This platform will facilitate real-time tracking of waste collection, streamline communication between stakeholders, and promote sustainable waste management practices in the community.",
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
        {/* Header dengan Navigasi Kanan-Kiri */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-neo-black text-white px-3 py-1 mb-4 border-2 border-black shadow-hard rotate-[-1deg]">
              <RiTerminalWindowLine className="text-neo-green" />
              <span className="font-mono text-xs font-bold uppercase">KANDA_WORKS.exe </span>
            </div>
            <h2 className="text-7xl md:text-9xl font-black uppercase text-white tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '3px black' }}>
              Works
            </h2>
          </div>

          {/* Tombol Navigasi Brutal */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center text-4xl shadow-hard hover:bg-neo-blue hover:text-white active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
            >
              <RiArrowLeftSLine />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-16 h-16 bg-neo-black text-white border-4 border-black flex items-center justify-center text-4xl shadow-hard hover:bg-neo-pink active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
            >
              <RiArrowRightSLine />
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12 transition-all"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allProjects.map((project) => (
            <div key={project.slug} className="flex-shrink-0 w-[85vw] md:w-[500px] snap-center">
              {/* Data isBlurred otomatis dikirim ke ProjectCard */}
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Status Bar */}
        <div className="mt-8 border-t-4 border-black pt-4 flex justify-between font-mono text-xs font-bold uppercase text-black/60">
          <span>Scroll to explore more projects </span>
          <span>Total_Nodes: {allProjects.length}</span>
        </div>
      </div>
    </section>
  );
};