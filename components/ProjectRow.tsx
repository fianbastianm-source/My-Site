import Image from "next/image";
import type { Project } from "@/data/project";

export default function ProjectRow({
  project,
  reverse,
  visual,
}: {
  project: Project;
  reverse: boolean;
  visual?: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 md:gap-16`}
    >
      <div className="w-full md:w-1/2">
        {visual ? (
          visual
        ) : (
            <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-xl border border-[var(--card-border)] transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </a>
        )}
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="text-3xl font-bold text-[var(--text-heading)] mb-4">
          {project.title}
        </h3>
        <p className="text-[var(--text-body)] leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-[var(--accent)] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] font-medium underline underline-offset-4 hover:text-[var(--accent-hover)] transition-colors"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}