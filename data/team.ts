export type TeamMember = {
  name: string;
  role: "Faculty" | "PhD Students" | "MS Students" | "FYP Students" | "Alumni";
  title: string;
  bio?: string;
  interests: string[];
  image: string;
  // TODO: Replace placeholder profile links and emails with official details.
  email?: string;
  profileUrl?: string;
  linkedinUrl?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Asma Ahmad",
    role: "Faculty",
    title: "Core Faculty",
    interests: ["Medical Imaging", "Smart Sensing", "Deep Learning"],
    image: "/images/person-placeholder.svg",
    email: "asma.ahmad@example.edu",
    profileUrl: "https://example.com/faculty/asma-ahmad"
  },
  {
    name: "Dr. Aamir Wali",
    role: "Faculty",
    title: "Core Faculty",
    interests: ["IoT", "Machine Learning", "Intelligent Systems"],
    image: "/images/person-placeholder.svg",
    email: "aamir.wali@example.edu",
    profileUrl: "https://example.com/faculty/aamir-wali"
  },
  {
    name: "Dr. Asma Naseer",
    role: "Faculty",
    title: "Core Faculty",
    interests: ["Generative AI", "Image Processing", "Applied AI"],
    image: "/images/person-placeholder.svg",
    email: "asma.naseer@example.edu",
    profileUrl: "https://example.com/faculty/asma-naseer"
  },
  {
    name: "Muhammad Hassan",
    role: "Alumni",
    title: "Alumni Researcher",
    bio: "ML Engineer at Orydex, working on biomarker-based prediction models for cancer research and healthcare AI.",
    interests: ["Healthcare AI", "Medical Imaging", "Machine Learning"],
    image: "/images/person-placeholder.svg",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-hassan-871523226/"
  },
  {
    name: "Rehan Shafique",
    role: "Alumni",
    title: "Alumni Researcher",
    bio: "AI-focused master's student at EPITECH Paris with experience in LLM evaluation, RAG pipelines, and agent systems.",
    interests: ["LLM Evaluation", "RAG Systems", "Medical Imaging"],
    image: "/images/person-placeholder.svg",
    linkedinUrl: "https://www.linkedin.com/in/rehanshafique/"
  }
];
