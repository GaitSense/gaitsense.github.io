export type TeamMember = {
  name: string;
  role: "Current Members" | "Alumni";
  title: string;
  bio?: string;
  interests: string[];
  image?: string;
  email?: string;
  profileUrl?: string;
  scholarUrl?: string;
  linkedinUrl?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Asma Ahmad",
    role: "Current Members",
    title: "Lab Head and Supervisor",
    bio: "Associate Professor at FAST-NUCES Lahore and PhD approved supervisor.",
    interests: ["Medical Imaging", "Smart Sensing", "Deep Learning"],
    image: "/images/team/asma-ahmad.png",
    email: "asma.ahmad@nu.edu.pk",
    profileUrl: "https://lhr.nu.edu.pk/fsc/facultyProfile/4335"
  },
  {
    name: "Hamad Ul Qudous",
    role: "Current Members",
    title: "Lecturer, FAST-NUCES Lahore",
    interests: ["Machine Learning", "Deep Learning", "Applied AI"],
    image: "/images/team/hamad-ul-qudous.jpeg",
    email: "hamad.ulqudous@nu.edu.pk",
    profileUrl: "https://lhr.nu.edu.pk/fsc/facultyProfile/6307",
    scholarUrl: "https://scholar.google.com/citations?user=dZp6IEoAAAAJ&hl=en"
  },
  {
    name: "Mamoona Akbar",
    role: "Current Members",
    title: "PhD Student",
    interests: ["Artificial Intelligence", "Machine Learning", "Computing"],
    image: "/images/team/mamoona-akbar.jpeg",
    email: "mamoona.akbar@nu.edu.pk",
    profileUrl: "https://lhr.nu.edu.pk/fsc/facultyProfile/6253"
  },
  {
    name: "Moazzam Umer",
    role: "Current Members",
    title: "Research Assistant, FAST-NUCES Lahore",
    interests: ["Generative AI", "Time Series Analysis", "Applied AI"],
    image: "/images/team/moazzam-umer.png",
    profileUrl: "https://moazzamumer.github.io/",
    scholarUrl: "https://scholar.google.com/citations?hl=en&user=o3AbkR8AAAAJ"
  },
  {
    name: "Muhammad Hassan",
    role: "Alumni",
    title: "Alumni Researcher",
    bio: "ML Engineer at Orydex, working on biomarker-based prediction models for cancer research and healthcare AI.",
    interests: ["Healthcare AI", "Medical Imaging", "Machine Learning"],
    linkedinUrl: "https://www.linkedin.com/in/muhammad-hassan-871523226/"
  },
  {
    name: "Rehan Shafique",
    role: "Alumni",
    title: "Alumni Researcher",
    bio: "AI-focused master's student at EPITECH Paris with experience in LLM evaluation, RAG pipelines, and agent systems.",
    interests: ["LLM Evaluation", "RAG Systems", "Medical Imaging"],
    linkedinUrl: "https://www.linkedin.com/in/rehanshafique/"
  }
];
