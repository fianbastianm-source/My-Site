export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Brisbane Airport Management System",
    description:
      "A C# console application modeling airport operations, including flight scheduling, seat allocation, delays, and frequent-flyer points across three distinct user roles, built with clean object-oriented design.",
    tags: ["C#", "OOP", "Console App"],
    link: "https://github.com/fianbastianm-source/brisbane-airport-system",
  },
  {
    title: "Property Rentals Platform",
    description:
      "A full-stack rental marketplace built for a university web development unit. Features property search and filtering, JWT-based authentication, user profiles, and a star-rating and comments system, backed by a documented REST API.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    link: "https://github.com/fianbastianm-source/Property-Rentals",
  },
  {
    title: "LifeSync AI",
    description:
      "A JavaFX desktop app built with a six-person team that helps students build better timetables by interpreting lifestyle constraints in natural language and generating ranked, explainable schedule recommendations. I led the recommendation validation layer, ensuring generated timetables were conflict-free and consistent before scoring.",
    tags: ["Java", "JavaFX", "SQLite", "Claude API"],
    link: "#",
  },
];