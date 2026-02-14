import { resumeData } from "./data/ExperiencesData";
import ThemeToggle from "./components/ThemeToggle";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
        
        <div className="bg-zinc-900 p-10 text-white">
          <div className="flex justify-end mb-6">
            <ThemeToggle />
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase">{resumeData.name}</h1>
          <p className="text-blue-400 font-bold tracking-widest text-sm mt-1 uppercase">{resumeData.title}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 text-zinc-400 text-sm">
            <a href={`mailto:${resumeData.contact.email}`} className="hover:text-blue-400 transition-colors">
              📧 {resumeData.contact.email}
            </a>
            <p>📞 {resumeData.contact.phone}</p>
            <p>📍 {resumeData.contact.location}</p>
            <a 
              href={resumeData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <svg 
                className="w-4 h-4 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>in/neil-john-selencio</span>
            </a>
          </div>
        </div>

        <div className="p-10 space-y-12">
          <section>
            <h2 className="text-blue-600 dark:text-blue-400 font-black text-xs tracking-[0.3em] uppercase mb-4">Profile</h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">{resumeData.getSummary()}</p>
          </section>

          <section>
            <h2 className="text-blue-600 dark:text-blue-400 font-black text-xs tracking-[0.3em] uppercase mb-8">Professional Experience</h2>
            <div className="space-y-10">
              {resumeData.experience.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l border-zinc-200 dark:border-zinc-700">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 bg-blue-600 rounded-full" />
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-bold text-zinc-900 dark:text-white uppercase">{exp.role}</h3>
                    <span className="text-[10px] font-black text-zinc-400 uppercase">{exp.period}</span>
                  </div>
                  <a 
                    href={exp.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 dark:text-blue-400 text-xs font-bold mb-3 hover:underline inline-block transition-all"
                  >
                    {exp.company} ↗
                  </a>
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2">
                        <span className="text-blue-500">•</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-blue-600 dark:text-blue-400 font-black text-xs tracking-[0.3em] uppercase mb-6">Technical Stack</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map(s => (
                <span key={s} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-xs font-bold border border-blue-100 dark:border-blue-800/30">
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-blue-600 dark:text-blue-400 font-black text-xs tracking-[0.3em] uppercase mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {resumeData.certifications.map((cert, i) => (
                <a 
                  key={i} 
                  href={cert.url} 
                  target="_blank" 
                  className="group p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-500 transition-all flex justify-between items-center"
                >
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500">
                    {cert.name}
                  </span>
                  <span className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW ↗
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
            <h2 className="text-blue-600 dark:text-blue-400 font-black text-xs tracking-[0.3em] uppercase mb-4">Education</h2>
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-white uppercase">{resumeData.education.degree}</h3>
                <p className="text-sm text-zinc-500">{resumeData.education.school}</p>
              </div>
              <span className="text-[10px] font-black text-zinc-400 uppercase">{resumeData.education.period}</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}