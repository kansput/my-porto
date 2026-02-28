export const Marquee = ({ text }: { text: string }) => {
  // Pecah teks berdasarkan keyword "OPEN FOR WORK"
  const renderContent = (content: string) => {
    return content.split(/(OPEN FOR WORK)/g).map((part, i) =>
      part === "OPEN FOR WORK" ? (
        <span 
          key={i} 
          className="bg-neo-yellow text-neo-black px-3 py-1 border-2 border-black mx-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const content = renderContent(text);

  return (
    <div className="border-b-4 border-black bg-neo-blue py-3 relative z-20 overflow-hidden">
      <div className="flex items-center whitespace-nowrap animate-scroll font-mono font-bold text-2xl text-white w-max">
        <span className="mx-4">{content}</span>
        <span className="mx-4">{content}</span>
        <span className="mx-4">{content}</span> {/* */}
      </div>
    </div>
  );
};