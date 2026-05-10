import {
  BrainCircuit,
  Cpu,
  Dna,
  FileText,
  ImageIcon,
  LineChart,
  Network,
  Radar
} from "lucide-react";

export type ResearchDomain = {
  title: string;
  description: string;
  icon: typeof BrainCircuit;
};

export const researchDomains: ResearchDomain[] = [
  {
    title: "Internet of Things",
    description:
      "Connected sensing, cyber-physical systems, energy-aware intelligence, and deployed IoT analytics.",
    icon: Network
  },
  {
    title: "Machine Learning and Deep Learning",
    description:
      "Learning systems for classification, prediction, representation learning, and real-world decision support.",
    icon: BrainCircuit
  },
  {
    title: "Digital Image Processing",
    description:
      "Image enhancement, segmentation, feature extraction, and computational imaging for applied domains.",
    icon: ImageIcon
  },
  {
    title: "Generative Artificial Intelligence",
    description:
      "Generative models for healthcare, multimedia, speech, synthetic data, and intelligent content creation.",
    icon: Dna
  },
  {
    title: "Medical Imaging",
    description:
      "Computer-aided diagnosis, MRI and X-ray analysis, lesion segmentation, and clinical AI workflows.",
    icon: Radar
  },
  {
    title: "NLP",
    description:
      "Text summarization, technical document understanding, information extraction, and language applications.",
    icon: FileText
  },
  {
    title: "Time Series Analysis",
    description:
      "Forecasting, sensor streams, periodicity modeling, biomedical signals, and temporal pattern mining.",
    icon: LineChart
  },
  {
    title: "Smart Sensing Systems",
    description:
      "Thermal sensing, human activity recognition, smartphone authentication, and context-aware intelligence.",
    icon: Cpu
  }
];
