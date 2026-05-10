export type NewsItem = {
  title: string;
  date: string;
  summary: string;
  category: "Publication" | "Project" | "Event" | "Announcement";
};

export const newsItems: NewsItem[] = [
  {
    title: "GAIT Lab website first version prepared",
    date: "2026-05-11",
    summary: "Placeholder announcement for the new lab website. Replace with an official launch update.",
    category: "Announcement"
  },
  {
    title: "Time series forecasting publication added",
    date: "2026-02-01",
    summary: "Publication record added for learnable Fourier-driven periodicity in time series forecasting.",
    category: "Publication"
  },
  {
    title: "New student project placeholders added",
    date: "2025-10-15",
    summary: "Replace this update with real lab milestones, student defenses, grants, workshops, or demos.",
    category: "Project"
  }
];
