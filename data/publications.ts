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
    title: "Enhancing time series forecasting by learnable Fourier-driven periodicity",
    authors: "Qureshi, T.S., Farhan, A.A.",
    venue: "Signal, Image and Video Processing 20, 135",
    year: 2026,
    category: "Journal",
    doi: "10.1007/s11760-026-05223-7",
    url: "https://doi.org/10.1007/s11760-026-05223-7"
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
  }
];
