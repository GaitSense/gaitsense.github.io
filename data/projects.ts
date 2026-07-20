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
  },
  {
    title: "SONIC: Multimodal Mood Detection",
    slug: "sonic-multimodal-mood-detection",
    category: "Multimedia",
    summary:
      "A multimodal mood detection application that analyzes audio, images, and song lyrics, then recommends Spotify tracks matched to the detected emotional state.",
    description:
      "SONIC is a multimodal mood detection application that analyzes user-provided audio, images, and lyrics to identify emotional states and support personalized music discovery. The system connects detected moods to stored music labels and recommends matching songs through Spotify integration.\n\nFor image inputs, the backend classifies six moods: aggressive, calm, energetic, joyful, romantic, and sad. The application also includes dedicated pipelines for audio and lyric analysis, providing several ways for users to reach a mood-aware recommendation.\n\nThe project is delivered as a Python and Flask backend for model inference and service integration, paired with a cross-platform Flutter frontend for the user interface. It includes account flows, prediction views, recommendation screens, and Spotify connection support.",
    image: "/images/projects/sonic-mood-detection.svg",
    status: "Completed",
    statusBadges: ["Student Project"],
    tags: ["Multimodal AI", "Emotion Recognition", "Music Recommendation", "Computer Vision", "NLP"],
    technologies: ["Python", "Flask", "Flutter", "Dart", "Spotify API", "Machine Learning"],
    links: {
      github: "https://github.com/ZemCS/SONIC"
    }
  },
  {
    title: "NephroScan: Kidney Anomaly Analysis",
    slug: "nephroscan-kidney-anomaly-analysis",
    category: "Medical Imaging",
    summary:
      "A deep learning clinical decision-support application for classifying kidney CT anomalies and segmenting tumor regions in both 2D scans and 3D NIfTI volumes.",
    description:
      "NephroScan is a deep learning system for automatic kidney anomaly classification and tumor segmentation from CT scans. It identifies Normal, Cyst, Stone, and Tumor cases, supports 2D image inputs and 3D NIfTI volumes, and presents results through a browser-based interface for clinical decision support.\n\nThe 2D classification pipeline evaluates VGG16, ResNet50, and a hybrid VGG16-ResNet50 classifier. For tumor cases, the system conditionally performs segmentation with DeepLabV3+ and UNet models to localize kidney and tumor regions.\n\nFor 3D scans, NephroScan adapts the 2D classifier through multi-view soft voting across axial and coronal slices, and uses a 2.5D DeepLabV3+ approach for volumetric tumor segmentation. The accompanying Flask application provides authentication, analysis history, confidence scores, and color-coded segmentation overlays. Results are intended to support, not replace, qualified radiologist review.",
    image: "/images/projects/nephroscan-kidney-analysis.svg",
    status: "Completed",
    statusBadges: ["Student Project"],
    tags: ["Kidney CT", "Tumor Segmentation", "Medical AI", "2D Classification", "3D Imaging"],
    contributors: ["Eisha Shafiq", "Emaan Munib", "Fizza Zaitoon"],
    datasets: ["Kidney CT dataset (Kaggle)", "KiTS23"],
    technologies: ["Python", "PyTorch", "torchvision", "Flask", "SQLite", "VGG16", "ResNet50", "DeepLabV3+", "MobileNetV2", "UNet", "nibabel", "OpenCV"],
    links: {
      github: "https://github.com/Fizza-Awan/Kidney-Anomaly-Classification-and-Segmentation",
      video: "https://github.com/Fizza-Awan/Kidney-Anomaly-Classification-and-Segmentation/blob/main/Final_Demo.mp4"
    }
  },
  {
    title: "Cross-Attention Vocal Activity Recognition",
    slug: "cross-attention-vocal-activity-recognition",
    category: "IoT and Smart Sensing",
    summary:
      "A multimodal earbud-based vocal activity recognition model that fuses audio and inertial sensor signals through bidirectional cross-attention.",
    description:
      "This project advances vocal activity recognition with earbuds by replacing the concatenation-based EarVAS fusion baseline with bidirectional cross-attention between audio and IMU features. The approach is designed to better separate acoustically similar activities, including Blow Nose and Sniff or Cough and Throat Clear.\n\nThe model uses an EfficientNet-B0 audio encoder over bi-channel log-mel spectrograms and a 1D CNN IMU encoder over six-axis sensor data. Its bidirectional cross-attention fusion learns interactions between the two modalities, while focal loss handles substantial class imbalance.\n\nEvaluated on EarSAVAS, a 160,611-sample dataset spanning nine classes and 42 users, the cross-attention model achieved 94.99% accuracy and 0.723 macro F1. The repository also includes lightweight model variants, distillation, pruning, INT8 quantization, and ONNX export pathways for on-earbud deployment.",
    image: "/images/projects/crossattn-vocal-recognition.svg",
    status: "Completed",
    statusBadges: ["Student Project"],
    tags: ["Vocal Activity Recognition", "Wearable AI", "Audio", "IMU", "Cross-Attention", "Edge AI"],
    datasets: ["EarSAVAS"],
    technologies: ["Python", "PyTorch", "torchaudio", "EfficientNet-B0", "Hydra", "librosa", "ONNX Runtime", "Scikit-learn"],
    links: {
      github: "https://github.com/Menaal23/CrossAttn-VAR"
    }
  },
  {
    title: "Cross-Domain HAR with Frozen LLMs",
    slug: "cross-domain-har-frozen-llms",
    category: "IoT and Smart Sensing",
    summary:
      "A cross-domain human activity recognition framework that adapts wearable IMU signals to frozen LLM representations with minimal trainable parameters.",
    description:
      "This project investigates whether frozen large language model backbones can generalize human activity recognition features across different wearable-sensor datasets without retraining the main transformer weights. The pipeline transforms six-channel accelerometer and gyroscope windows into position-augmented patch tokens for the LLM representation space.\n\nThe approach combines sensor-specific normalization, Conv1D patch embedding, learnable positional encoding, gated cross-attention reprogramming with activity prototypes, and a two-stage training process for sensor alignment and activity classification. Only LayerNorm parameters are fine-tuned, while the LLM backbone is proportionally truncated to retain more transferable shallow layers.\n\nExperiments cover 12 cross-domain transfer pairs across UCI HAR, Shoaib, MotionSense, and HHAR. The strongest reported configuration, Qwen-1.5B with two-stage training, reached 81.55% accuracy and 74.48% macro F1, improving macro F1 by 3.06 percentage points over the cited LLM4HAR baseline.",
    image: "/images/projects/llm-har.svg",
    status: "Completed",
    statusBadges: ["Student Project"],
    tags: ["Human Activity Recognition", "Large Language Models", "Wearable Sensing", "Cross-Domain Learning", "IMU", "Transfer Learning"],
    datasets: ["UCI HAR", "Shoaib", "MotionSense", "HHAR"],
    technologies: ["Python", "PyTorch", "Transformers", "Hugging Face", "Conv1D", "Qwen", "Llama", "Scikit-learn"],
    links: {
      github: "https://github.com/Shehroz-Mir/llm-har"
    }
  }
];
