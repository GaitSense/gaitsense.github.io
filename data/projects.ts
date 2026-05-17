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
  },
  {
    title: "Interpretable PM2.5 Forecasting",
    slug: "interpretable-pm25-forecasting",
    category: "Time Series Analysis",
    summary:
      "A comparative study of lightweight and interpretable operational time-series models for hourly PM2.5 forecasting in Beijing.",
    description:
      "This project investigates whether lightweight and interpretable forecasting approaches can provide competitive performance for short-term urban air-quality prediction. The study focuses on hourly PM2.5 forecasting in Beijing, China, using multi-year pollutant and meteorological time-series data.\n\nThe workflow is designed to avoid data leakage and includes chronological data partitioning, preprocessing, feature selection, and exogenous-driver modeling under the Perfect Prognosis setting. Three forecasting families are evaluated: SARIMAX, Facebook Prophet, and NeuralProphet.\n\nTo assess practical deployment behavior, the models are tested under weekly walk-forward refitting and frozen forecasting with online residual correction. Results show that Facebook Prophet performs strongly under walk-forward refitting, while corrected SARIMAX achieves the lowest overall error in the frozen-model regime. The findings suggest that lightweight additive forecasting strategies can offer a practical balance between accuracy, interpretability, and computational efficiency for real-world air-quality deployment.",
    image: "/images/projects/pm25-forecasting.png",
    status: "Preprint",
    statusBadges: ["Submitted", "Preprint", "Student Project"],
    tags: [
      "PM2.5 Forecasting",
      "Air Quality",
      "Time Series",
      "SARIMAX",
      "Prophet",
      "NeuralProphet",
      "Residual Correction"
    ],
    contributors: ["Moazzam Umer Gondal", "Hamad ul Qudous", "Asma Ahmad Farhan", "Sultan Alamri"],
    datasets: ["Multi-year pollutant and meteorological time-series data for Beijing, China"],
    technologies: [
      "Python",
      "SARIMAX",
      "Facebook Prophet",
      "NeuralProphet",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Time-series cross-validation"
    ],
    relatedPublications: [
      {
        title:
          "Interpretable PM2.5 Forecasting for Urban Air Quality: A Comparative Study of Operational Time-Series Models",
        year: 2026,
        url: "https://arxiv.org/abs/2603.25495"
      }
    ],
    links: {
      github: "https://github.com/moazzamumer/Adaptive-Air-Quality-Forcasting",
      paper: "https://arxiv.org/abs/2603.25495"
    }
  }
];
