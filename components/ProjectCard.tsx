import type { Project } from "@/data/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-[var(--text-heading)] mb-2">
        {project.title}
      </h3>
      <p className="text-[var(--text-body)] text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}