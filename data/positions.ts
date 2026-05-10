export type Position = {
  title: string;
  category: "MS Thesis" | "Final Year Project" | "Research Assistant" | "Collaboration";
  summary: string;
  requirements: string[];
  status: "Open" | "Rolling" | "Placeholder";
};

export const positions: Position[] = [
  {
    title: "MS Thesis: Generative AI for Medical Imaging",
    category: "MS Thesis",
    summary: "Placeholder opening for students interested in generative models, segmentation, and diagnosis support.",
    requirements: ["Python experience", "Basic deep learning knowledge", "Interest in medical AI"],
    status: "Placeholder"
  },
  {
    title: "FYP: Smart Sensing for Activity Recognition",
    category: "Final Year Project",
    summary: "Placeholder FYP topic for IoT sensing, thermal sensors, and activity recognition workflows.",
    requirements: ["Embedded or IoT interest", "Python or MATLAB", "Willingness to collect data"],
    status: "Placeholder"
  },
  {
    title: "Research Assistant: NLP and Technical Summarization",
    category: "Research Assistant",
    summary: "Placeholder RA opportunity for literature mining, summarization, and technical content analysis.",
    requirements: ["Strong writing skills", "NLP fundamentals", "PyTorch or TensorFlow experience"],
    status: "Rolling"
  },
  {
    title: "Industry and Clinical Collaborations",
    category: "Collaboration",
    summary: "Placeholder invitation for partners interested in applied AI, healthcare imaging, sensing, or forecasting.",
    requirements: ["Defined problem area", "Data access or deployment context", "Shared publication or prototype goals"],
    status: "Rolling"
  }
];
