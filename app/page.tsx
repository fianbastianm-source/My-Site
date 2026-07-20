import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-20 bg-[var(--bg)] relative overflow-hidden transition-colors duration-300">
      <div className="blob-1 absolute top-[-5%] left-[5%] w-[500px] h-[500px] bg-[#86e0cc] rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="blob-2 absolute top-[25%] right-[-5%] w-[450px] h-[450px] bg-[#4b6079] rounded-full blur-[90px] opacity-50 pointer-events-none" />
      <div className="blob-3 absolute bottom-[-15%] left-[30%] w-[500px] h-[500px] bg-[#e1fbf1] rounded-full blur-[100px] opacity-25 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="max-w-2xl text-center">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-4 fade-in">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl font-bold mb-4 text-[var(--text-heading)] fade-in-delay-1 min-h-[1.2em]">
            <Typewriter />
          </h1>

          <p className="text-lg text-[var(--text-body)] leading-relaxed mb-8 fade-in-delay-2">
            Turning "it works on my machine" into things that actually ship.
            I'm studying IT (Computer Science) at QUT, and currently debugging my way
            toward a full-stack career (p.s. bugs are welcome, deadlines less so).
          </p>

          <div className="flex justify-center gap-4">
            <a href="https://github.com/fianbastianm-source" className="px-5 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] hover:scale-105 transition-all duration-200">GitHub</a>
            <a href="https://linkedin.com/in/fian-molanza/" className="px-5 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] hover:scale-105 transition-all duration-200">LinkedIn</a>
            <a href="mailto:fian.molanza@outlook.com" className="px-5 py-2 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] hover:bg-[var(--accent-hover)] hover:scale-105 transition-all duration-200">Contact</a>
          </div>
        </div>

        <div className="marquee-container w-full max-w-4xl overflow-hidden mt-16 mb-4">
          <div className="marquee-track flex gap-12 w-max">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Java",
              "Python", "MySQL", "Tailwind CSS", "Git",
              "React", "Next.js", "TypeScript", "Node.js", "Java",
              "Python", "MySQL", "Tailwind CSS", "Git",
            ].map((tech, i) => (
              <span
                key={i}
                className="text-lg font-medium text-[var(--tech-text)] whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <section className="w-full max-w-5xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}