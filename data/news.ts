export type NewsItem = {
  title: string;
  date: string;
  summary: string;
  category: "Publication" | "Project" | "Event" | "Announcement";
};

export const newsItems: NewsItem[] = [
  {
    title: "Preprint released on interpretable PM2.5 forecasting",
    date: "2026-03-26",
    summary:
      "GAIT Lab researchers released a preprint comparing lightweight operational models for hourly PM2.5 forecasting in Beijing.",
    category: "Publication"
  },
  {
    title: "Fashion captioning and hashtag generation preprint shared",
    date: "2025-11-24",
    summary:
      "A retrieval-augmented approach to visually grounded fashion captioning and hashtag generation was shared as an arXiv preprint.",
    category: "Publication"
  },
  {
    title: "Automated scoliosis assessment research published",
    date: "2025-07-24",
    summary:
      "Research on automated Cobb's angle measurement for scoliosis diagnosis using deep learning techniques was published online.",
    category: "Publication"
  }
];
