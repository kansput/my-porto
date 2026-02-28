"use client";
import {
  SiNextdotjs, SiPostgresql, SiTypescript, SiPython, SiNodedotjs,
  SiTailwindcss, SiMysql, SiPhp, SiCodeigniter, SiGooglecloud, SiBootstrap, SiGithub, SiGit,SiVercel
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { DiMsqlServer } from "react-icons/di";

import { RiShieldKeyholeLine, RiBugLine } from "react-icons/ri";

const skills = [
  { name: "Next.js", type: "Framework", icon: <SiNextdotjs />, color: "hover:bg-white" },
  { name: "PostgreSQL", type: "Data", icon: <SiPostgresql />, color: "hover:bg-neo-blue" },
  { name: "TypeScript", type: "Language", icon: <SiTypescript />, color: "hover:bg-neo-pink" },
  { name: "GCP", type: "Cloud", icon: <SiGooglecloud />, color: "hover:bg-neo-yellow" }, // [cite: 2026-02-23]
  { name: "Python", type: "Language", icon: <SiPython />, color: "hover:bg-neo-blue" },
  { name: "Node.js", type: "Backend", icon: <SiNodedotjs />, color: "hover:bg-neo-green" },
  { name: "Tailwind", type: "Styling", icon: <SiTailwindcss />, color: "hover:bg-neo-orange" },
  { name: "MySQL", type: "Data", icon: <SiMysql />, color: "hover:bg-neo-purple" },
  { name: "PHP", type: "Language", icon: <SiPhp />, color: "hover:bg-neo-pink" },
  { name: "CodeIgniter", type: "Framework", icon: <SiCodeigniter />, color: "hover:bg-neo-red" },
  { name: "Bootstrap", type: "Styling", icon: <SiBootstrap />, color: "hover:bg-neo-purple" },
  { name: "SQL Server", type: "Database", icon: <DiMsqlServer />, color: "hover:bg-neo-blue" },
  { name: "Vercel", type: "Deployment", icon: <SiVercel />, color: "hover:bg-black hover:text-white" },
  { name: "React", type: "Frontend", icon: <RiReactjsLine />, color: "hover:bg-neo-blue" },
  { name: "Github", type: "Ops", icon: <SiGithub />, color: "hover:bg-white" },
  { name: "Git", type: "Version", icon: <SiGit />, color: "hover:bg-neo-orange" },
];

export const TechStack = () => {
  return (
    <section id="skills" className="py-20 bg-neo-black text-neo-white border-y-4 border-black relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4">
          <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter">
            TECH<span className="text-neo-green">_STACK</span>
          </h2>
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <p className="font-mono text-neo-green text-sm font-bold">/// SYSTEM_OPTIMIZED</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start border-t-2 border-l-2 border-white/10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-[12.5%] h-32 border-r-2 border-b-2 border-white/10 
              bg-neo-black transition-all duration-200 hover:z-10 relative flex flex-col items-center justify-center p-4 cursor-pointer ${skill.color} hover:text-black`}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {skill.icon}
              </div>
              <div className="text-neo-green group-hover:text-black font-mono text-[10px] mb-1 opacity-50 uppercase tracking-tighter">
                {`>_ ${skill.type}`}
              </div>
              <div className="font-black font-display text-sm uppercase text-center leading-tight">
                {skill.name}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-4 border-white mt-8 pt-4 flex justify-between font-mono text-xs text-gray-500 uppercase">
          <span>Total_Nodes: {skills.length}</span>
          <span>Security_Level: High </span>
          <span>Status: Verified_Engineer </span>
        </div>
      </div>
    </section>
  );
};