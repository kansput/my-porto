"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          // Gunakan koordinat asli, centering diurus oleh CSS translate(-50%, -50%)
          cursorRef.current!.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        });
      }
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest('a, button, input, [role="button"]'));
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference rounded-full border-2 border-black transition-[width,height,background-color] duration-200 ease-out
        ${isHovered ? 'w-10 h-10 bg-neo-green' : 'w-6 h-6 bg-white'}`}
      style={{ 
        willChange: "transform",
        // PENTING: Jangan ada transisi di transform agar tidak lag/mental
        transitionProperty: "width, height, background-color, border-radius" 
      }}
    />
  );
}