"use client";
import { useState } from "react";
import Image from "next/image";
import {
  RiShieldFlashLine,
  RiTerminalLine,
  RiHashtag,
  RiLinkedinBoxFill,
  RiDiscordFill,
  RiInstagramFill,
  RiGithubFill,
  RiMailSendFill
} from "react-icons/ri";
import { SiSteam, SiRiotgames } from "react-icons/si";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-neo-white my-12 shadow-hard-lg relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-neo-yellow opacity-10 rounded-full blur-3xl" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        {/* KOLOM FOTO & SOCIALS */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
          <div className="aspect-square bg-neo-blue border-4 border-black relative shadow-hard-lg group overflow-hidden">
            <Image
              src="/images/kanda.jpg"
              alt="Kanda Putra - Freelance Software Engineer & Web Developer"
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 30vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            <div className="absolute top-4 left-4 bg-neo-red text-white px-3 py-1 font-mono text-xs border-2 border-black -rotate-12 shadow-hard">
              KANDA.SYS
            </div>
            <div className="absolute bottom-4 right-4 bg-neo-green text-black px-3 py-1 font-mono text-xs border-2 border-black rotate-6 shadow-hard font-bold">
              VERIFIED_DEV
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white border-4 border-black p-4 shadow-hard rotate-1">
              <p className="font-mono text-[10px] font-black uppercase mb-3 border-b-2 border-black pb-1 italic">
                // Professional_Sync
              </p>
              <nav className="flex flex-col gap-3">
                <a href="https://github.com/kansput" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-black text-sm bg-neo-black text-white px-4 py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" aria-label="Github Portfolio Kanda Putra">
                  <RiGithubFill className="text-xl" /> GITHUB_REPO
                </a>
                <a href="https://www.linkedin.com/in/kanda-putra-hibatullah-96a032241" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-black text-sm bg-neo-blue text-white px-4 py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" aria-label="LinkedIn Kanda Putra">
                  <RiLinkedinBoxFill className="text-xl" /> LINKEDIN_PROFILE
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kandaputrah@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-black text-sm bg-neo-yellow text-black px-4 py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" aria-label="Email Kanda Putra">
                  <RiMailSendFill className="text-xl" /> SEND_MAIL
                </a>
              </nav>
            </div>

            <div className="bg-white border-4 border-black p-4 shadow-hard -rotate-1">
              <p className="font-mono text-[10px] font-black uppercase mb-3 border-b-2 border-black pb-1 italic">
                // Social_Sync
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between w-full bg-neo-purple text-white px-4 py-2 border-2 border-black shadow-hard-sm rotate-1">
                  <div className="flex items-center gap-2 font-black text-sm">
                    <RiDiscordFill className="text-xl" />
                    OBSCURITEEE
                  </div>
                  <RiHashtag className="text-lg opacity-50" />
                </div>
                <a href="https://www.instagram.com/kandaputrah/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-black text-sm bg-neo-pink text-black px-4 py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  <RiInstagramFill className="text-xl" /> INSTAGRAM
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a href="https://steamcommunity.com/profiles/76561198325594710/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#171a21] text-[#66c0f4] py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-black text-xs">
                    <SiSteam className="text-xl" /> STEAM
                  </a>
                  <a href="https://tracker.gg/valorant/profile/riot/Iryss%231945" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#eb0029] text-white py-2 border-2 border-black shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-black text-xs">
                    <SiRiotgames className="text-xl" /> RIOT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KOLOM KONTEN UTAMA */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-neo-pink border-2 border-black px-4 py-1 mb-6 shadow-hard -rotate-1 self-start">
            <RiTerminalLine className="text-xl" />
            <span className="font-mono font-bold uppercase">System_Identity</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black uppercase mb-6 leading-none text-black">
            I am <span className="text-neo-blue">Kanda.</span>
            <span className="sr-only"> Freelance Web Developer & Cloud Engineer based in Indonesia.</span>
          </h2>

          <div className="space-y-6 text-black">
            <p className="font-mono text-xl md:text-2xl leading-relaxed">
              Currently pursuing Software Engineering at <span className="underline decoration-neo-red decoration-8 font-bold">Bina Sarana Informatika University</span>.
              I am a professional specialist in building <span className="bg-neo-blue text-white px-2 border-2 border-black mx-1 inline-block rotate-1 shadow-hard-sm font-bold">Fullstack applications</span>
              and robust <span className="bg-neo-green text-black px-2 border-2 border-black mx-1 inline-block -rotate-1 shadow-hard-sm font-bold">Cloud solutions</span>.
            </p>

            {/* PROFILE DATA (STACK & LEARNING) */}
            <div className="bg-neo-yellow/20 border-4 border-black border-dashed p-6 relative">
              <div className="absolute -top-4 left-4 bg-neo-yellow border-2 border-black px-3 py-1 font-mono font-black text-xs">
                PROFILE_DATA.txt
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2">
                <div className="flex items-start gap-4">
                  <div className="bg-neo-purple p-2 border-2 border-black shadow-hard flex-shrink-0">
                    <RiTerminalLine className="text-2xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black uppercase text-sm mb-1">Web Coding Stack</h3>
                    <p className="font-mono text-xs opacity-70 italic mb-3">Core tools for high-performance software engineering.</p>
                    <div className="flex flex-col gap-3">
                      <div className="group flex items-center gap-3 bg-neo-blue text-white text-[10px] px-3 py-1.5 border-2 border-black font-bold shadow-hard-sm rotate-1 hover:rotate-0 transition-all">
                        <span className="bg-black text-white px-1.5 py-0.5 text-[8px]">FW</span>
                        <span>NEXT.JS</span>
                      </div>
                      <div className="group flex items-center gap-3 bg-neo-yellow text-black text-[10px] px-3 py-1.5 border-2 border-black font-bold shadow-hard-sm -rotate-1 hover:rotate-0 transition-all">
                        <span className="bg-black text-white px-1.5 py-0.5 text-[8px]">JS</span>
                        <span>JAVASCRIPT</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-neo-green p-2 border-2 border-black shadow-hard flex-shrink-0">
                    <RiShieldFlashLine className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black uppercase text-sm mb-1">Current Focus</h3>
                    <p className="font-mono text-xs opacity-70 italic mb-3">Cybersecurity and system architecture.</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <div className="bg-neo-pink text-black text-[10px] font-bold px-3 py-1.5 border-2 border-black shadow-hard-sm -rotate-2 hover:rotate-0 transition-all"># BUG_HUNTING</div>
                      <div className="bg-neo-yellow text-black text-[10px] font-bold px-3 py-1.5 border-2 border-black shadow-hard-sm rotate-1 hover:rotate-0 transition-all"># API_SECURITY</div>
                      <div className="bg-neo-purple text-white text-[10px] font-bold px-3 py-1.5 border-2 border-black shadow-hard-sm -rotate-1 hover:rotate-0 transition-all"># CLOUD_COMPUTING</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="border-l-4 border-neo-green pl-4 py-2 bg-gray-50 border-r-2 border-y-2 border-black">
                <div className="flex items-center gap-2 font-black uppercase text-sm mb-1"><RiShieldFlashLine className="text-neo-green text-lg" /> SYSTEM_STABILITY</div>
                <p className="font-mono text-xs text-gray-600">Building reliable digital architectures for enterprise systems.</p>
              </div>
              <div className="border-l-4 border-neo-purple pl-4 py-2 bg-gray-50 border-r-2 border-y-2 border-black">
                <div className="flex items-center gap-2 font-black uppercase text-sm mb-1"><RiHashtag className="text-neo-purple text-lg" /> FULLSTACK_DEV</div>
                <p className="font-mono text-xs text-gray-600">Developing modern platforms like Waste Bank Management systems.</p>
              </div>
            </div>

            <div className="relative mt-10 p-6 border-4 border-black bg-white shadow-hard rotate-1">
              <div className="absolute -top-4 -left-4 bg-black text-white px-2 py-1 text-[10px] font-mono">BIO.EXE</div>
              <div className="space-y-4">
                <p className="font-mono text-sm md:text-lg italic leading-snug">
                  "I am a software engineer focused on building solutions for real-world problems—from digitalizing nurse credentials to waste management ecosystems."
                </p>
                <div className="pt-4 border-t-2 border-black border-dashed">
                  <p className="font-mono text-[10px] font-black uppercase mb-2">// Projects_Portfolio:</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.kyuverse.my.id/" target="_blank" className="bg-neo-green text-black text-[10px] font-bold px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">KYUVERSE.EXE</a>
                    <a href="https://www.rilyverse.my.id/" target="_blank" className="bg-neo-blue text-white text-[10px] font-bold px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">RILYVERSE.EXE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};