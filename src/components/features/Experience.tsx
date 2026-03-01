import { Experience as ExpType } from '@/lib/types';

const experiences: ExpType[] = [
  {
    role: "Fullstack Engineer Intern",
    company: "RS St. Carolus Jakarta",
    period: "September 2025 - December 2025",
    points: [
      "Digitizing the Nursing Unit Re-Credentialing platform from a manual to a digital system.",
      "Utilizing Next.js and SQL Server for nurse data management."
    ],
    color: "bg-neo-yellow"
  },
  {
    role: "Freelance Fullstack Developer",
    company: "Ravelware / Yayasan Lestari Mulia",
    period: "October 2025 - December 2025",
    points: [
      "Building a digital platform to integrate foundation admins and collector networks.",
      "Developing a transparent and efficient supply chain ecosystem."
    ],
    color: "bg-neo-purple"
  },
  {
    role: "Freelance Fullstack Developer",
    company: "ParongpongrawLab & Anambas Foundation",
    period: "October 2025 - January 2026",
    points: [
      "Developing a waste bank platform for CBO projects and startups.",
      "Implementing core features using Next.js and PostgreSQL."
    ],
    color: "bg-neo-green"
  },
  {
    role: "Web Developer (Freelance)",
    company: "Sirindu.com",
    period: "2025 - Present",
    points: [
      "Developing a high-performance health-tech landing page focused on non-pharmacological sleep therapy for the elderly.",
      "Implementing a responsive and accessible UI using Next.js to ensure a seamless experience for all age groups.",
      "Integrating secure static form handling to streamline user inquiries and lead generation."
    ],
    color: "bg-neo-green"
  },
  {
    "role": "Software Engineering Student",
    "company": "Bina Sarana Informatika University",
    "period": "Undergraduate",
    "points": [
      "Focusing on full-stack development and system architecture.",
      "Actively involved in software lifecycle management and system analysis."
    ],
    "color": "bg-neo-blue"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <header>
        <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter text-center">
          Experience<span className="text-neo-red">_Log</span>
          <span className="sr-only">. Professional Journey of Kanda Putra, Software Engineer and Cloud Specialist.</span>
        </h2>
      </header>

      <ol className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12 list-none p-0">
        {experiences.map((exp, idx) => (
          <li key={idx} className="relative pl-8 md:pl-16">
            <article>
              <div className={`absolute -left-[14px] top-2 w-6 h-6 border-4 border-black ${exp.color}`}></div>
              <div className="bg-white border-4 border-black p-6 shadow-hard hover:shadow-hard-lg transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                  <h3 className="text-3xl font-black uppercase">
                    {exp.role}
                    <span className="sr-only"> at {exp.company}</span>
                  </h3>
                  <span className="font-mono font-bold bg-neo-black text-white px-2 py-1">{exp.period}</span>
                </div>
                <p className="font-mono text-xl mb-2 font-bold uppercase">@ {exp.company}</p>
                <ul className="list-disc list-inside font-mono text-gray-700 space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};