"use client";
import { useState, useEffect } from "react";
import { RiMenu3Fill, RiCloseFill, RiTerminalBoxLine, RiShieldCheckLine } from "react-icons/ri";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll saat menu mobile terbuka agar tidak bocor
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "TECH", href: "#skills" },
    { name: "CERTIFS", href: "#certificates" },
    { name: "WORKS", href: "#projects" },
    { name: "LOGS", href: "#experience" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        
        {/* LOGO AREA - Menonjolkan identitas Kanda sebagai Engineer */}
        <div className="flex flex-col gap-1">
          <a
            href="#"
            className="bg-neo-black text-neo-green border-4 border-black px-4 py-1 text-2xl font-black shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2"
          >
            <RiTerminalBoxLine className="animate-pulse" />
            KANDA.EXE
          </a>
          <div className="hidden lg:flex items-center gap-2 bg-white border-2 border-black px-2 py-0.5 text-[10px] font-mono font-bold shadow-hard rotate-[-1deg]">
            <RiShieldCheckLine className="text-neo-green" />
            <span>SYS_STATUS: <span className="text-neo-green">UP TO DATE</span></span>
          </div>
        </div>

        {/* DESKTOP MENU - Lengkap sesuai urutan page.tsx */}
        <div className="hidden xl:flex items-center gap-2 bg-white border-4 border-black p-1 shadow-hard-lg font-mono font-bold text-xs">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="px-3 py-1 hover:bg-black hover:text-white border-2 border-transparent hover:border-black transition-all"
            >
              /{link.name}
            </a>
          ))}
          <div className="w-[2px] h-6 bg-black mx-1" />
          <a 
            href="#contact" 
            className="px-4 py-1 bg-neo-green border-2 border-black hover:bg-neo-pink transition-all shadow-hard hover:shadow-none font-black"
          >
            HIRE_ME
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden w-14 h-14 bg-neo-yellow border-4 border-black flex items-center justify-center text-3xl shadow-hard active:shadow-none active:translate-x-1 active:translate-y-1 transition-all z-[101]"
        >
          {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </button>
      </div>

      {/* MOBILE OVERLAY MENU - "Meriah" Version */}
      <div className={`fixed inset-0 bg-neo-white z-[99] transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} xl:hidden border-b-8 border-black pointer-events-auto`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

        <div className="h-full flex flex-col justify-center items-center gap-6 relative z-10 p-6">
          <div className="bg-neo-black text-white px-6 py-2 border-4 border-black shadow-hard rotate-[-2deg] mb-4">
            <p className="font-mono font-bold tracking-tighter text-sm italic">
              // SOFTWARE_ENGINEER_NAV_v2 
            </p>
          </div>

          <div className="flex flex-col gap-4 text-center w-full max-w-xs">
            {[...navLinks, { name: 'CONTACT', href: '#contact' }].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl sm:text-5xl font-black uppercase hover:text-neo-blue transition-colors border-b-4 border-transparent hover:border-black inline-block leading-none"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Decorative Footer for Mobile Menu */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <div className="w-4 h-4 bg-neo-red border-2 border-black rounded-full animate-bounce" />
              <div className="w-4 h-4 bg-neo-yellow border-2 border-black rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-4 h-4 bg-neo-green border-2 border-black rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
            <p className="font-mono text-[10px] font-black opacity-50 uppercase tracking-widest">
              Bina Sarana Informatika Univ. Student [cite: 2026-02-23]
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};