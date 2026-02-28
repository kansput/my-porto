"use client";

import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { toast } from "sonner";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  isOffset?: boolean;
  isBlurred?: boolean; // Prop baru untuk kontrol blur & akses
}

export const ProjectCard = ({
  title,
  description,
  tags,
  image,
  link,
  isOffset,
  isBlurred
}: ProjectProps) => {

  const handleAction = (e: React.MouseEvent) => {
    if (isBlurred) {
      e.preventDefault();
      toast.error(
        // Judul dibuat super tebal di sini
        <span className="font-[900] text-lg tracking-tighter">AKSES_TERBATAS</span>,
        {
          description: (
            <span className="font-bold block mt-1 text-white uppercase opacity-90">
              Sistem Internal. Akses Ditolak.
            </span>
          ),
          duration: 4000,
          style: {
            borderRadius: '0px',
            border: '4px solid black',
            backgroundColor: '#FF3333',
            color: 'white',
            padding: '16px',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '8px 8px 0px rgba(0,0,0,1)',
          },
        }
      );
      return;
    }
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <article className={`group bg-white border-4 border-black p-4 shadow-hard transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 ${isOffset ? 'mt-0 md:mt-20' : ''}`}>
      {/* Header Card: Terminal Style */}
      <div className="flex justify-between items-center mb-4 border-b-2 border-black pb-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full border border-black" />
          <div className="w-2 h-2 bg-yellow-500 rounded-full border border-black" />
        </div>
        <span className="font-mono text-[10px] font-black uppercase tracking-tighter">
          Project_Ref: {title.slice(0, 3).toUpperCase()} // {isBlurred ? 'LOCKED' : 'v1.0'}
        </span>
      </div>

      {/* Image Area */}
      <div className="bg-black border-2 border-black aspect-video relative overflow-hidden mb-6">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-500 group-hover:scale-110 
    ${isBlurred ? 'blur-xl opacity-50 grayscale' : 'opacity-100 group-hover:opacity-80 grayscale-0 group-hover:grayscale'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span className="text-white font-mono text-[10px] font-bold uppercase">
            {isBlurred ? "STATUS: PRIVATE_ACCESS" : "STATUS: DEPLOYED_ONLINE"}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="space-y-4">
        <div>
          <h3 className="text-3xl font-black uppercase mb-2 group-hover:text-neo-blue transition-colors leading-none">
            {title}
          </h3>
          <p className="font-mono text-xs text-gray-700 leading-tight h-12 overflow-hidden">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 font-mono text-[9px] font-bold flex-wrap">
          {tags.map(tag => (
            <span key={tag} className="bg-neo-black text-white px-2 py-0.5 border border-black uppercase">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={handleAction}
          className={`flex items-center justify-between w-full px-4 py-3 border-2 border-black font-black uppercase text-sm shadow-hard-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all 
            ${isBlurred ? 'bg-neo-pink text-white' : 'bg-neo-green text-black'}`}
        >
          {isBlurred ? "PRIVATE_ACCESS" : "Explore_Live_Site"}
          <RiArrowRightUpLine className={`text-xl transition-transform ${isBlurred ? '' : 'group-hover:rotate-45'}`} />
        </button>
      </div>
    </article>
  );
};