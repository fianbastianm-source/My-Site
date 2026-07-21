export type Achievement = {
  title: string;
  event: string;
  description: string;
  tags: string[];
};

export const achievements: Achievement[] = [
  {
    title: "SightLine",
    event: "QUT Sport Innovation ProtoComp 2026",
    description:
      "Selected for the 10-week ProtoComp Build Program after pitching at the hackathon. Built a sports-streaming platform combining real-time visual tracking, AI-generated commentary, and interactive learning tools to help viewers understand the game as they watch, with a broadcast-partnership model to help leagues grow viewership.",
    tags: ["Backend Engineering", "Real-Time Data", "Streaming", "AI", "Sports Tech"],
  },
];