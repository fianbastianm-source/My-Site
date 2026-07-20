"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Ian's Here!",
  "QUT Student.",
  "Bali Native.",
  "Coffee Addict.",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}