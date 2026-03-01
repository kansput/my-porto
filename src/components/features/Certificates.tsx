"use client";
import { useState } from "react";
import Image from "next/image";
import { RiAwardFill, RiShieldCheckFill, RiArrowLeftSLine, RiArrowRightSLine, RiExternalLinkLine, RiGoogleFill } from "react-icons/ri";

const certifications = [
  { title: "Google Cloud Architecture", issuer: "Dicoding", date: "2025", image: "/certs/Google-Cloud-Architecture.webp", color: "bg-neo-yellow" },
  { title: "Cloud Gen AI AWS", issuer: "Dicoding", date: "2025", image: "/certs/Cloud-Gen-AI-AWS.webp", color: "bg-neo-green" },
  { title: "Google Cloud Engineer", issuer: "Dicoding", date: "2025", image: "/certs/Google-Cloud-Engineer.webp", color: "bg-neo-blue" },
  { title: "Back-end Javascript", issuer: "Dicoding", date: "2025", image: "/certs/Back-end-Javascript.webp", color: "bg-neo-pink" },
  { title: "Penerapan Machine Learning Google Cloud", issuer: "Dicoding", date: "2025", image: "/certs/penerapan-machine-learning.webp", color: "bg-neo-purple" },
  { title: "Generative AI", issuer: "Dicoding", date: "2025", image: "/certs/Generative-AI.webp", color: "bg-neo-orange" },
  { title: "Google Cloud Computing Foundations Certificate", issuer: "Google Cloud", date: "2024", image: "/certs/gcc1.webp", color: "bg-neo-blue" },
  { title: "Google Cloud Cybersecurity Certificate", issuer: "Google Cloud", date: "2024", image: "/certs/gccyber.webp", color: "bg-neo-red" },
  { title: "DevOps Fundamentals", issuer: "Dicoding", date: "2025", image: "/certs/Fundamental-DevOps.webp", color: "bg-neo-green" },
  { title: "Data Classification and Summarization", issuer: "Hacktive", date: "2025", image: "/certs/Data-Classification.webp", color: "bg-neo-yellow" },
  { title: "Fundamental Python", issuer: "Dicoding", date: "2025", image: "/certs/fundementalpython.webp", color: "bg-neo-pink" },
  { title: "Aplication-Web-React", issuer: "Dicoding", date: "2025", image: "/certs/Aplication-Web-React.webp", color: "bg-neo-black text-white" },
];


export const Certificates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  const currentItems = certifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="certificates" className="py-24 px-4 max-w-7xl mx-auto border-b-8 border-black">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <header>
          <div className="inline-flex items-center gap-2 bg-neo-black text-white px-3 py-1 mb-4 border-2 border-black shadow-hard rotate-[-2deg]">
            <RiShieldCheckFill className="text-neo-green text-xl" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest">KANDA_VERIFIED </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            CERTIF_<span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px black' }}>ICATES</span>
            <span className="sr-only">. Professional certifications of Kanda Putra, Freelance Software Engineer and Cloud Specialist.</span>
          </h2>
        </header>
        <div className="bg-neo-yellow border-4 border-black p-4 shadow-hard rotate-2">
          <p className="font-mono text-[10px] font-black uppercase leading-tight">
            // Total_Validated_Nodes: {certifications.length} <br />
            // Status: Freelance Software Engineer
          </p>
        </div>
      </div>

      {/* GRID DISPLAY - Menggunakan UL/LI untuk SEO List Structure */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
        {currentItems.map((cert, index) => (
          <li
            key={index}
            className={`group relative ${cert.color} border-4 border-black p-2 shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200`}
          >
            <article>
              <div className="bg-white border-b-4 border-black p-3 mb-2 flex justify-between items-center">
                <RiAwardFill className="text-2xl" aria-hidden="true" />
                <span className="font-mono text-[10px] font-black uppercase">{cert.date}</span>
              </div>
              <div className="relative aspect-video border-2 border-black bg-black overflow-hidden mb-4">
                <Image
                  src={cert.image}
                  alt={`Certificate for ${cert.title} issued by ${cert.issuer} to Kanda Putra`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="px-2 pb-4">
                <h3 className="font-black text-xl uppercase leading-tight mb-1 group-hover:underline">
                  {cert.title}
                  <span className="sr-only"> by {cert.issuer}</span>
                </h3>
                <p className="font-mono text-[9px] font-bold text-black/60 uppercase">
                  ISSUED_BY: {cert.issuer}
                </p>
                {/* Hidden text for SEO context linkage */}
                <p className="sr-only">Kanda Putra's expertise in {cert.title} for software engineering and cloud solutions.</p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* TERMINAL-STYLE NAVIGATION */}
      <div className="mt-20 flex flex-col items-center gap-6">
        <nav className="flex items-center gap-4 bg-white border-4 border-black p-2 shadow-hard" aria-label="Certificates pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            aria-label="Previous Page"
            className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black disabled:opacity-30 hover:bg-neo-red transition-all active:translate-y-0.5"
          >
            <RiArrowLeftSLine className="text-3xl" />
          </button>

          <div className="flex gap-2 px-4 font-mono font-black text-xl">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                aria-label={`Go to page ${i + 1}`}
                aria-current={currentPage === i + 1 ? "page" : undefined}
                className={`w-10 h-10 flex items-center justify-center border-2 border-black transition-all ${currentPage === i + 1 ? 'bg-neo-blue text-white shadow-hard' : 'hover:bg-gray-100'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            aria-label="Next Page"
            className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black disabled:opacity-30 hover:bg-neo-green hover:text-black transition-all active:translate-y-0.5"
          >
            <RiArrowRightSLine className="text-3xl" />
          </button>
        </nav>

        <p className="font-mono text-[10px] font-bold text-gray-500 uppercase animate-pulse">
          Page {currentPage} of {totalPages} // Browse Credentials
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <a
            href="https://drive.google.com/drive/folders/1FY35R883F9oOd5miWJEhauB7GrAkAZD0?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-neo-orange text-black px-8 py-4 border-4 border-black font-black uppercase text-sm shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
          >
            BROWSE_MORE_CERTIFICATES
            <RiExternalLinkLine className="text-xl group-hover:rotate-45 transition-transform" />
          </a>

          <a
            href="https://www.credly.com/users/kanda-putra-hibatullah"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-neo-blue text-white px-8 py-4 border-4 border-black font-black uppercase text-sm shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
          >
            <RiGoogleFill className="text-xl" />
            MORE_GOOGLE_CLOUD
            <RiExternalLinkLine className="text-xl group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};