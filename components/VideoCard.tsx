"use client";

import { useState } from "react";

export default function VideoCard() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="h-full">
      {isPlaying ? (
        <video
          src="/sightline.mp4"
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="relative w-full h-full min-h-[240px] group overflow-hidden"
        >
          <img
            src="/thumbnail.png"
            alt="SightLine demo video"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />

          <span className="absolute top-4 left-4 text-xs uppercase tracking-widest text-white/90 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
            Watch Demo
          </span>

          <span className="absolute inset-0 flex items-center justify-center">
  <span className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/40 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[var(--accent)]/60 transition-all duration-300">
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--accent-contrast,#241b3d)] ml-1"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </span>
</span>

          <span className="absolute bottom-4 left-4 text-white text-sm font-medium drop-shadow-md">
            Live Demo
          </span>
        </button>
      )}
    </div>
  );
}