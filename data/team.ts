export type TeamMember = {
  name: string;
  role: "Faculty" | "PhD Students" | "MS Students" | "FYP Students" | "Alumni";
  title: string;
  interests: string[];
  image: string;
  // TODO: Replace placeholder profile links and emails with official details.
  email?: string;
  profileUrl?: string;
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
    name: "Placeholder MS Student",
    role: "MS Students",
    title: "MS Researcher",
    interests: ["Skin Lesion Segmentation", "Generative AI"],
    image: "/images/person-placeholder.svg"
  },
  {
    name: "Placeholder FYP Team",
    role: "FYP Students",
    title: "Final Year Project Group",
    interests: ["Smart Agriculture", "Computer Vision"],
    image: "/images/person-placeholder.svg"
  },
  {
    name: "Placeholder Alumni",
    role: "Alumni",
    title: "Former Research Student",
    interests: ["Human Activity Recognition"],
    image: "/images/person-placeholder.svg"
  }
];
