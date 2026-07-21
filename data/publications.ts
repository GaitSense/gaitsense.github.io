export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  category: "Journal" | "Review" | "Conference" | "Preprint";
  doi?: string;
  url?: string;
};

export const publications: Publication[] = [
  {
    title: "Interpretable PM2.5 Forecasting for Urban Air Quality: A Comparative Study of Operational Time-Series Models",
    authors: "Moazzam Umer Gondal, Hamad ul Qudous, Asma Ahmad Farhan, and Sultan Alamri",
    venue: "arXiv preprint arXiv:2603.25495",
    year: 2026,
    category: "Preprint",
    url: "https://arxiv.org/abs/2603.25495"
  },
  {
    title: "Enhancing time series forecasting by learnable Fourier-driven periodicity",
    authors: "Qureshi, T.S., Farhan, A.A.",
    venue: "Signal, Image and Video Processing 20, 135",
    year: 2026,
    category: "Journal",
    doi: "10.1007/s11760-026-05223-7",
    url: "https://doi.org/10.1007/s11760-026-05223-7"
  },
  {
    title: "Automated Cobb's angle measurement for scoliosis diagnosis using deep learning techniques",
    authors: "Asbah Khalid, Asma Ahmad Farhan, Kashif Zafar, and Maria Tamoor",
    venue: "Intelligent Data Analysis 30, no. 3: 694",
    year: 2026,
    category: "Journal",
    doi: "10.1177/1088467X251358150",
    url: "https://doi.org/10.1177/1088467X251358150"
  },
  {
    title: "Beyond the Hype: Comparing Lightweight and Deep Learning Models for Air Quality Forecasting",
    authors: "Moazzam Umer Gondal, Hamad ul Qudous, and Asma Ahmad Farhan",
    venue: "arXiv preprint arXiv:2512.09076",
    year: 2025,
    category: "Preprint",
    url: "https://arxiv.org/abs/2512.09076"
  },
  {
    title: "From Pixels to Posts: Retrieval-Augmented Fashion Captioning and Hashtag Generation",
    authors: "Moazzam Umer Gondal, Hamad Ul Qudous, Daniya Siddiqui, and Asma Ahmad Farhan",
    venue: "arXiv preprint arXiv:2511.19149",
    year: 2025,
    category: "Preprint",
    url: "https://arxiv.org/abs/2511.19149"
  },
  {
    title:
      "A systematic literature review on human activity recognition using smart devices: advances, challenges, and future directions",
    authors: "Qureshi, Tayyab Saeed, Muhammad Haris Shahid, Asma Ahmad Farhan, and Sultan Alamri",
    venue: "Artificial Intelligence Review 58, no. 9: 276",
    year: 2025,
    category: "Review"
  },
  {
    title: "Segmentation simplified: Lumbar spine MRI segmentation via a tailored U-Net architecture",
    authors: "Hassan, Muhammad, Rehan Shafique, and Asma Ahmad Farhan",
    venue: "Signal, Image and Video Processing 19, no. 8: 657",
    year: 2025,
    category: "Journal",
    doi: "10.1007/s11760-025-04175-8",
    url: "https://doi.org/10.1007/s11760-025-04175-8"
  },
  {
    title: "Enhancing smartphone security with human centric bimodal fallback authentication leveraging sensors",
    authors: "Asma A. Farhan, A. Basharat, N. Allheeib, S. Kanwal",
    venue: "Scientific Reports 14(1), 1-11",
    year: 2024,
    category: "Journal"
  },
  {
    title: "DiscHAR: A Discrete Approach to Enhance Human Activity Recognition in Cyber Physical Systems: Smart Homes",
    authors: "I. Fatima, Asma A. Farhan, M. Tamoor, S. ur Rehman, H.A. Alhulayyil, F. Tariq",
    venue: "Computers 13, 300",
    year: 2024,
    category: "Journal"
  },
  {
    title: "Entropy and Memory-aware Active Transfer Learning in Smart Sensing Systems",
    authors: "U. Alam, Asma A. Farhan, S. Kanwal, N. Allheeib",
    venue: "IEEE Access",
    year: 2024,
    category: "Journal"
  },
  {
    title: "Speech emotion recognition using feature fusion: a hybrid approach to deep learning",
    authors: "W.A. Khan, H. ul Qudous, Asma A. Farhan",
    venue: "Multimedia Tools and Applications",
    year: 2024,
    category: "Journal"
  },
  {
    title: "Fuzzy knowledge based intelligent decision support system for ground based air defence",
    authors: "Adnan Ahmad, Rawan Amjad, Amna Basharat, Asma Ahmad Farhan, and Ali Ezad Abbas",
    venue: "Journal of Ambient Intelligence and Humanized Computing 15, no. 4: 2317",
    year: 2024,
    category: "Journal",
    doi: "10.1007/s12652-024-04757-3",
    url: "https://doi.org/10.1007/s12652-024-04757-3"
  },
  {
    title: "Recent progress in sign language recognition: a review",
    authors: "Aamir Wali, Roha Shariq, Sajdah Shoaib, Sukhan Amir, and Asma Ahmad Farhan",
    venue: "Machine Vision and Applications 34, no. 6",
    year: 2023,
    category: "Review",
    doi: "10.1007/s00138-023-01479-y",
    url: "https://doi.org/10.1007/s00138-023-01479-y"
  },
  {
    title: "Less is more: Efficient behavioral context recognition using Dissimilarity-Based Query Strategy",
    authors: "Atia Akram, Asma Ahmad Farhan, and Amna Basharat",
    venue: "PLOS ONE 18, no. 6: e0286919",
    year: 2023,
    category: "Journal",
    doi: "10.1371/journal.pone.0286919",
    url: "https://doi.org/10.1371/journal.pone.0286919"
  },
  {
    title: "Thermal Comfort Model for HVAC Buildings Using Machine Learning",
    authors: "Muhammad Fayyaz, Asma Ahmad Farhan, and Abdul Rehman Javed",
    venue: "Arabian Journal for Science and Engineering 47, no. 2: 2045",
    year: 2022,
    category: "Journal",
    doi: "10.1007/s13369-021-06156-8",
    url: "https://doi.org/10.1007/s13369-021-06156-8"
  },
  {
    title: "Personal productivity monitoring through smartphones",
    authors: "Soban Ahmed Khan, Asma Ahmad Farhan, Labiba Gillani Fahad, and Syed Fahad Tahir",
    venue: "Journal of Ambient Intelligence and Smart Environments 12, no. 4: 327",
    year: 2020,
    category: "Journal",
    doi: "10.3233/AIS-200567",
    url: "https://doi.org/10.3233/AIS-200567"
  }
];
