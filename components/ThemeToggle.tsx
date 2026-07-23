"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === "undefined") return false;
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
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full border border-[var(--accent)] bg-[var(--bg)] flex items-center justify-center text-lg hover:scale-110 transition-all duration-200"
    >
      {isLight ? "☀️" : "⚫️"}
    </button>
  );
}