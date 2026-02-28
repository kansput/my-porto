"use client";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiDiscordFill,
  RiHeartFill,
  RiTerminalBoxLine,
  RiArrowUpLine,
  RiSteamFill,
  RiGhostLine,
  RiCodeSSlashLine,
} from "react-icons/ri";
import { SiRiotgames } from "react-icons/si";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neo-black text-white py-12 px-4 border-t-8 border-black font-mono relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Floating Interactive Badge */}
      <button
        onClick={scrollToTop}
        className="absolute top-8 right-8 bg-neo-yellow text-black p-3 border-4 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all z-20 group"
      >
        <RiArrowUpLine className="text-2xl group-hover:animate-bounce" />
      </button>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Ticker - Footer Version */}
        <div className="mb-12 border-y-2 border-white/20 py-2 overflow-hidden">
          <div className="flex whitespace-nowrap animate-scroll font-black text-[10px] uppercase tracking-[0.2em] text-neo-green">
            <span className="mx-8">System_Status: Stable </span>
            <span className="mx-8">Current_Project: Sirindu.com</span>
            <span className="mx-8">Location: East Jakarta </span>
            <span className="mx-8">Focus:  </span>
            {/* Loop */}
            <span className="mx-8">System_Status: Stable</span>
            <span className="mx-8">Current_Project: Bug Hunting Kyou.id</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6 bg-neo-green text-black px-4 py-2 border-2 border-black shadow-hard self-start inline-flex rotate-[-1deg]">
              <RiTerminalBoxLine className="text-2xl" />
              <h2 className="text-2xl font-black uppercase tracking-tighter">KANDA.EXE</h2>
            </div>
            <div className="space-y-4 font-mono font-bold uppercase tracking-tighter mb-8">
              <div className="flex flex-col gap-3">
                {/* Status Line */}
                <div className="flex items-center gap-3 group">
                  <span className="bg-neo-blue text-white px-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-1 group-hover:rotate-0 transition-transform">
                    STATUS_LOG
                  </span>
                  <p className="text-gray-400 text-xs">Software Engineering Student @ UBSI </p>
                </div>

                {/* Current Role Line */}
                <div className="flex items-center gap-3 group">
                  <span className="bg-neo-green text-black px-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1 group-hover:rotate-0 transition-transform">
                    CURRENT_OPS
                  </span>
                  <p className="text-gray-400 text-xs">Freelance Dev @ Sirindu.com</p>
                </div>

                {/* Focus Line */}
                <div className="flex items-center gap-3 group">
                  <span className="bg-neo-yellow text-black px-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-2 group-hover:rotate-0 transition-transform">
                    FOCUS_POINT
                  </span>
                  <p className="text-gray-400 text-xs">API Security & Static Systems</p>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 border border-white/20 text-[10px] font-bold">
              <span className="w-2 h-2 bg-neo-green rounded-full animate-pulse"></span>
              AVAILABLE_FOR_NEW_SIDE_QUESTS
            </div>
          </div>

          {/* Directory */}
          <div className="md:col-span-3">
            <h3 className="font-black text-neo-blue mb-6 border-b-2 border-white/10 pb-2 uppercase text-xl flex items-center gap-2">
              <RiGhostLine /> Directory
            </h3>
            <ul className="space-y-3 text-gray-300 font-bold text-sm">
              <li><a href="#about" className="hover:text-neo-yellow transition-colors flex items-center gap-2 group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">{">"}</span> / ABOUT_ME
              </a></li>
              <li><a href="#experience" className="hover:text-neo-yellow transition-colors flex items-center gap-2 group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">{">"}</span> / EXPERIENCE
              </a></li>
              <li><a href="#skills" className="hover:text-neo-pink transition-colors flex items-center gap-2 group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">{">"}</span> / TECH_STACK
              </a></li>
              <li><a href="#projects" className="hover:text-neo-blue transition-colors flex items-center gap-2 group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">{">"}</span> / PROJECTS
              </a></li>
              <li><a href="#certificates" className="hover:text-neo-blue transition-colors flex items-center gap-2 group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">{">"}</span> / CERTIFICATES
              </a></li>
            </ul>
          </div>

          {/* Socials Section di Footer.tsx */}
          <div className="md:col-span-4">
            <h3 className="font-black text-neo-pink mb-6 border-b-2 border-white/10 pb-2 uppercase text-xl">
              Let's Connect
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <a href="https://github.com/kansput" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-black py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-black text-xs uppercase">
                <RiGithubFill className="text-xl" /> GITHUB
              </a>

              <a href="https://www.linkedin.com/in/kanda-putra-hibatullah-96a032241" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-neo-blue text-white py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-black text-xs uppercase">
                <RiLinkedinBoxFill className="text-xl" /> LINKEDIN
              </a>

              <a href="https://www.instagram.com/kandaputrah/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-neo-pink text-black py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-black text-xs uppercase">
                <RiInstagramFill className="text-xl" /> INSTAGRAM
              </a>

              <a href="https://discord.com/users/691286350388920361" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-neo-purple text-white py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-black text-xs uppercase">
                <RiDiscordFill className="text-xl" /> DISCORD
              </a>

              <a href="https://steamcommunity.com/profiles/76561198325594710/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#171a21] text-[#66c0f4] py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-black text-xs uppercase">
                <RiSteamFill className="text-xl" /> STEAM
              </a>

              <a href="https://tracker.gg/valorant/profile/riot/Iryss%231945/overview" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#eb0029] text-white py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-black text-xs uppercase">
                <SiRiotgames className="text-xl" /> RIOT
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[9px] font-black uppercase tracking-[0.3em]">
          <p>© 2026 KANDA // ALL_RIGHTS_RESERVED</p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-1 rounded-full">
              BUILT WITH NEXT.JS 
            </div>
            {/* Collaborator Credit */}
            <a
              href="https://github.com/Arham43-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-neo-yellow transition-colors"
            >
              <RiCodeSSlashLine className="text-sm" /> Credit: @ARHAM43-OPS
            </a>
          </div>

          <div className="flex gap-4">
            <span className="text-neo-yellow">STABLE_BUILD_v4.2.0</span>
            <span className="text-neo-green">PING: 24MS</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-social-link {
          @apply flex items-center gap-3 px-4 py-3 border-2 border-black font-black uppercase text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all;
        }
      `}</style>
    </footer>
  );
};