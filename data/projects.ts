export type ProjectCategory =
  | "Generative AI"
  | "Medical Imaging"
  | "IoT and Smart Sensing"
  | "NLP"
  | "Time Series Analysis"
  | "Signal Processing"
  | "Agriculture"
  | "Security"
  | "Multimedia";

export type ProjectStatus =
  | "Active"
  | "Completed"
  | "Exploratory"
  | "Funded"
  | "Student Project"
  | "Placeholder"
  | "Submitted"
  | "Preprint";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  image: string;
  status: ProjectStatus;
  statusBadges?: ProjectStatus[];
  tags: string[];
  contributors?: string[];
  datasets?: string[];
  technologies?: string[];
  gallery?: string[];
  relatedPublications?: Array<{
    title: string;
    year?: number;
    url?: string;
  }>;
  links: {
    github?: string;
    demo?: string;
    paper?: string;
    video?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Retrieval-Augmented Fashion Captioning and Hashtag Generation",
    slug: "retrieval-augmented-fashion-captioning-hashtag-generation",
    category: "Generative AI",
    summary:
      "A retrieval-augmented pipeline that uses garment detection, attribute reasoning, CLIP-FAISS retrieval, and LLM prompting to generate grounded fashion captions and hashtags.",
    description:
      "This project introduces a retrieval-augmented framework for automatic fashion caption and hashtag generation. The system combines multi-garment detection, visual attribute reasoning, and Large Language Model prompting to produce visually grounded, descriptive, and stylistically relevant text for fashion imagery.\n\nThe pipeline uses a YOLO-based detector for multi-garment localization, k-means clustering for dominant color extraction, and a CLIP-FAISS retrieval module for fabric and gender attribute inference from a structured product index. These retrieved attributes and style examples form an evidence pack that guides the LLM toward human-like captions and contextually rich hashtags.\n\nA fine-tuned BLIP model is used as a supervised baseline. Experiments show that the YOLO detector reaches mAP@0.5 of 0.71 across nine garment categories, while the RAG-LLM pipeline achieves mean attribute coverage of 0.80 and full coverage at the 50% threshold for hashtag generation. Compared with BLIP, the retrieval-augmented approach improves factual grounding, reduces hallucination, and generalizes better across fashion domains.",
    image: "/images/projects/fashion-rag-captioning.png",
    status: "Preprint",
    statusBadges: ["Submitted", "Preprint", "Student Project"],
    tags: ["Retrieval-Augmented Generation", "Fashion AI", "LLM Prompting", "YOLO", "CLIP", "FAISS", "BLIP"],
    contributors: ["Moazzam Umer Gondal", "Hamad Ul Qudous", "Daniya Siddiqui", "Asma Ahmad Farhan"],
    datasets: ["Structured fashion product index", "Multi-garment fashion imagery"],
    technologies: ["Python", "Transformers", "TensorFlow", "YOLO", "CLIP", "FAISS", "BLIP", "K-means clustering"],
    relatedPublications: [
      {
        title: "From Pixels to Posts: Retrieval-Augmented Fashion Captioning and Hashtag Generation",
        year: 2025,
        url: "https://arxiv.org/abs/2511.19149"
      }
    ],
    links: {
      paper: "https://arxiv.org/abs/2511.19149"
    }
  }
];
