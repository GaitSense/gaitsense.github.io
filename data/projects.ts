export type ProjectCategory =
  | "Generative AI"
  | "Medical Imaging"
  | "IoT and Smart Sensing"
  | "NLP"
  | "Signal Processing"
  | "Agriculture"
  | "Security"
  | "Multimedia";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  image: string;
  status: "Active" | "Completed" | "Exploratory";
  tags: string[];
  // TODO: Replace placeholder links with real code, demo, paper, and video URLs when available.
  links: {
    github?: string;
    demo?: string;
    paper?: string;
    video?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Smart Agriculture",
    slug: "smart-agriculture",
    category: "Agriculture",
    summary: "AI and sensing workflows for monitoring agricultural conditions and crop health.",
    description:
      "Placeholder project description. Replace this with goals, sensors used, datasets, models, student contributors, and outcomes.",
    image: "/images/project-agriculture.svg",
    status: "Exploratory",
    tags: ["IoT", "Computer Vision", "Smart Sensing"],
    links: { github: "https://github.com/placeholder/smart-agriculture", demo: "https://example.com/demo" }
  },
  {
    title: "Occupancy Detection via Thermal Sensors",
    slug: "occupancy-detection-thermal-sensors",
    category: "IoT and Smart Sensing",
    summary: "Thermal sensing for occupancy estimation and energy consumption reduction.",
    description:
      "Placeholder project description. Add room setup, thermal sensor specifications, energy metrics, model details, and deployment notes.",
    image: "/images/project-sensing.svg",
    status: "Active",
    tags: ["Thermal Sensors", "Energy", "Activity Tracking"],
    links: { github: "https://github.com/placeholder/occupancy-detection" }
  },
  {
    title: "Technical Content Summarization",
    slug: "technical-content-summarization",
    category: "NLP",
    summary: "Deep learning techniques for summarizing technical and academic content.",
    description:
      "Placeholder project description. Replace with corpus details, summarization approach, evaluation metrics, and sample outputs.",
    image: "/images/project-nlp.svg",
    status: "Active",
    tags: ["NLP", "Summarization", "Deep Learning"],
    links: { github: "https://github.com/placeholder/technical-summarization", demo: "https://example.com/demo" }
  },
  {
    title: "Brain-Computer Interface using EEG",
    slug: "brain-computer-interface-eeg",
    category: "Signal Processing",
    summary: "EEG headset based control for object movement and interaction experiments.",
    description:
      "Placeholder project description. Add headset model, signal pipeline, classification task, control interface, and student names.",
    image: "/images/project-eeg.svg",
    status: "Exploratory",
    tags: ["EEG", "BCI", "Signal Classification"],
    links: { video: "https://example.com/video" }
  },
  {
    title: "Medical Image Augmentation with GANs",
    slug: "medical-image-augmentation-gan",
    category: "Generative AI",
    summary: "A GAN-based augmentation pipeline to improve diagnosis of diseases from medical images.",
    description:
      "Placeholder project description. Replace with modality, disease target, GAN architecture, augmentation protocol, and diagnosis results.",
    image: "/images/project-medical-ai.svg",
    status: "Active",
    tags: ["GAN", "Medical Imaging", "Augmentation"],
    links: { github: "https://github.com/placeholder/medical-gan", paper: "https://example.com/paper" }
  },
  {
    title: "Computer-Aided Brain Tumor Diagnosis",
    slug: "brain-tumor-diagnosis-cnn",
    category: "Medical Imaging",
    summary: "Performance evaluation of deep learner CNNs using augmented brain MRI.",
    description:
      "Placeholder project description. Add MRI dataset, augmentation strategy, CNN baselines, metrics, and clinical relevance.",
    image: "/images/project-brain-mri.svg",
    status: "Completed",
    tags: ["Brain MRI", "CNN", "Diagnosis"],
    links: { paper: "https://example.com/paper" }
  },
  {
    title: "Computer-Aided COVID-19 Diagnosis",
    slug: "covid-19-diagnosis-cxr",
    category: "Medical Imaging",
    summary: "Comparing deep learners for COVID-19 diagnosis using augmented chest X-rays.",
    description:
      "Placeholder project description. Add CXR dataset, augmentation details, model comparison table, and publication links.",
    image: "/images/project-cxr.svg",
    status: "Completed",
    tags: ["Chest X-ray", "COVID-19", "Deep Learning"],
    links: { paper: "https://example.com/paper" }
  },
  {
    title: "GANs for Speech Synthesis",
    slug: "gans-for-speech-synthesis",
    category: "Multimedia",
    summary: "Generative adversarial networks for expressive speech synthesis research.",
    description:
      "Placeholder project description. Replace with dataset, acoustic features, model design, evaluation method, and audio samples.",
    image: "/images/project-speech.svg",
    status: "Exploratory",
    tags: ["GAN", "Speech", "Multimedia"],
    links: { demo: "https://example.com/demo" }
  },
  {
    title: "Automated Cobb Angle Estimation",
    slug: "automated-cobb-angle-estimation",
    category: "Medical Imaging",
    summary: "U-Net empowered automated Cobb angle estimation for scoliosis assessment.",
    description:
      "Placeholder project description. Add spine image dataset, U-Net segmentation details, angle estimation method, and validation outcomes.",
    image: "/images/project-spine.svg",
    status: "Active",
    tags: ["U-Net", "Scoliosis", "Segmentation"],
    links: { github: "https://github.com/placeholder/cobb-angle" }
  },
  {
    title: "Active Transfer Learning in Smart Sensing",
    slug: "active-transfer-learning-smart-sensing",
    category: "IoT and Smart Sensing",
    summary: "Entropy and memory-aware active transfer learning for smart sensing systems.",
    description:
      "Placeholder project description. Add sensing domain, transfer setup, memory constraints, entropy strategy, and evaluation results.",
    image: "/images/project-transfer.svg",
    status: "Completed",
    tags: ["Transfer Learning", "Entropy", "Smart Sensing"],
    links: { paper: "https://example.com/paper" }
  },
  {
    title: "Unobtrusive Smartphone Authentication",
    slug: "unobtrusive-smartphone-authentication",
    category: "Security",
    summary: "Sensor-driven human-centric authentication for smartphone security.",
    description:
      "Placeholder project description. Replace with sensor modalities, authentication protocol, fallback method, and usability study notes.",
    image: "/images/project-security.svg",
    status: "Completed",
    tags: ["Smartphone", "Authentication", "Sensors"],
    links: { paper: "https://example.com/paper" }
  },
  {
    title: "Skin Lesion Segmentation with Generative AI",
    slug: "skin-lesion-segmentation-generative-ai",
    category: "Generative AI",
    summary: "Generative AI assisted segmentation workflows for skin lesion analysis.",
    description:
      "Placeholder project description. Add dataset, lesion classes, generative method, segmentation model, and benchmark metrics.",
    image: "/images/project-skin.svg",
    status: "Active",
    tags: ["Skin Lesion", "Segmentation", "Generative AI"],
    links: { github: "https://github.com/placeholder/skin-lesion-segmentation" }
  },
  {
    title: "Skin Cancer Classification",
    slug: "skin-cancer-classification",
    category: "Medical Imaging",
    summary: "Deep learning models for classifying skin cancer from clinical images.",
    description:
      "Placeholder project description. Replace with image source, classes, model architecture, validation approach, and clinical caveats.",
    image: "/images/project-skin.svg",
    status: "Active",
    tags: ["Dermatology", "Classification", "Deep Learning"],
    links: { demo: "https://example.com/demo" }
  },
  {
    title: "Weed Detection and Classification",
    slug: "weed-detection-classification",
    category: "Agriculture",
    summary: "Computer vision for detecting and classifying weeds in agricultural scenes.",
    description:
      "Placeholder project description. Add crop setting, image collection method, detection model, weed classes, and field results.",
    image: "/images/project-agriculture.svg",
    status: "Exploratory",
    tags: ["Object Detection", "Agriculture", "Classification"],
    links: { github: "https://github.com/placeholder/weed-detection" }
  },
  {
    title: "3D Avatar Construction",
    slug: "3d-avatar-construction-generative-ai",
    category: "Generative AI",
    summary: "3D avatar construction using generative AI and deep learning.",
    description:
      "Placeholder project description. Add input modality, reconstruction pipeline, generative model, renderer, and example outputs.",
    image: "/images/project-avatar.svg",
    status: "Exploratory",
    tags: ["3D", "Generative AI", "Deep Learning"],
    links: { video: "https://example.com/video" }
  }
];
