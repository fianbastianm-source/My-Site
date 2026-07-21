import type { Achievement } from "@/data/achievement";

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--accent)]/40 relative overflow-hidden">
      <span className="absolute top-4 right-4 text-xs uppercase tracking-widest text-[var(--accent)]">
        Hackathon
      </span>

      <h3 className="text-xl font-bold text-[var(--text-heading)] mb-1">
        {achievement.title}
      </h3>
      <p className="text-sm text-[var(--accent)] mb-3">{achievement.event}</p>

      <p className="text-[var(--text-body)] text-sm leading-relaxed mb-4">
        {achievement.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {achievement.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}