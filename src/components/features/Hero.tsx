"use client";
import { RiShieldKeyholeLine, RiTerminalLine, RiCloudLine } from "react-icons/ri";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-28 pb-10 relative overflow-hidden border-b-8 border-black bg-neo-white">
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

      {/* 2. Floating Giant Text (Background) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[25vw] text-black/[0.03] whitespace-nowrap select-none uppercase pointer-events-none">
        Fullstack_Engineer
      </div>

      {/* 3. Decorative Shapes & Icons */}
      <div className="absolute top-[15%] left-[5%] w-20 h-20 bg-neo-yellow border-4 border-black shadow-hard -rotate-12 animate-bounce hidden md:block" />
      <div className="absolute top-[20%] right-[8%] p-4 bg-neo-green border-4 border-black shadow-hard rotate-6 animate-pulse hidden md:flex items-center gap-2">
        <RiShieldKeyholeLine className="text-2xl" />
        <span className="font-mono font-bold text-xs">SECURITY_STRICT</span>
      </div>
      <div className="absolute bottom-[20%] left-[8%] p-4 bg-neo-blue border-4 border-black shadow-hard -rotate-6 hidden md:flex items-center gap-2">
        <RiCloudLine className="text-2xl text-white" />
        <span className="font-mono font-bold text-xs text-white">CLOUD</span>
      </div>

      {/* 4. Main Content */}
      <div className="relative z-10 text-center max-w-6xl">
        {/* Status Badges Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="bg-white border-2 border-black px-4 py-1 shadow-hard -rotate-1">
            <span className="font-mono font-bold uppercase text-sm">📍 Jakarta, ID</span>
          </div>
          <div className="bg-neo-black text-white border-2 border-black px-4 py-1 shadow-hard rotate-1 flex items-center gap-2">
            <div className="w-2 h-2 bg-neo-green rounded-full animate-ping" />
            <span className="font-mono font-bold uppercase text-sm">Available for Hire</span>
          </div>
        </div>

        <h1 className="text-[14vw] md:text-[11vw] leading-[0.75] font-black uppercase tracking-tighter mb-8 italic">
          Software<br />
          <span className="text-white drop-shadow-[6px_6px_0_rgba(0,0,0,1)]"
            style={{ WebkitTextStroke: '3px black' }}>Engineer</span>
        </h1>

        <div className="relative inline-block">
          <p className="font-mono text-lg md:text-2xl max-w-2xl mx-auto bg-neo-pink border-4 border-black p-6 shadow-hard-lg rotate-[-1deg] mb-10">
            I build high-performance web systems with a focus on <b>Fullstack Engineering</b> and <b>Scalable </b>
          </p>
          {/* Bug Hunter Badge overlaying the description */}
          <div className="absolute -right-6 -bottom-6 bg-neo-black text-neo-green border-2 border-black px-3 py-1 font-mono font-bold rotate-12 flex items-center gap-1 shadow-hard">
            <RiTerminalLine /> FULLSTACK_DEV
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          <a href="#projects" className="bg-neo-green text-black border-4 border-black px-8 py-4 text-2xl font-black uppercase shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            View_Projects
          </a>
          <a href="#about" className="bg-white text-black border-4 border-black px-8 py-4 text-2xl font-black uppercase shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            Get_In_Touch
          </a>
        </div>
      </div>
    </section>
  );
};