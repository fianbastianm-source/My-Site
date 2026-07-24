"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === "undefined") return true;
    return document.documentElement.classList.contains("light");
  });

  function toggleTheme() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      suppressHydrationWarning
      className="fixed top-6 right-6 z-50 w-16 h-9 rounded-full p-1 flex items-center bg-[var(--card-bg)] border border-[var(--card-border)] transition-colors duration-300"
    >
      <span
        className={`w-7 h-7 rounded-full bg-[var(--accent)] flex items-center justify-center shadow-md transition-transform duration-300 ${
          isLight ? "translate-x-0" : "translate-x-7"
        }`}
      >
        {isLight ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-contrast)" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="var(--accent-contrast)" className="w-4 h-4">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        )}
      </span>
    </button>
  );
}