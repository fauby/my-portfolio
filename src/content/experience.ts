export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "praisindo",
    company: "PT Praisindo Teknologi",
    role: "Frontend Software Developer",
    start: "2025-06",
    end: "present",
    period: "June 2025 - Present",
    summary:
      "Working across two products: Customer Portfolio Management (CPM), a React Native mobile app I've built from the ground up, and the Portfolio Management System (PMS) for CIMB Bank, a React web platform with the automated testing framework behind it.",
    points: [
      "Build Customer Portfolio Management (CPM) from the ground up as a React Native mobile app, with Playwright-based automated testing.",
      "Build and fix frontend issues on the Portfolio Management System (PMS), a React web platform for CIMB Bank, as the product evolves in production.",
      "Develop and maintain an automated testing framework for PMS using Robot Framework with Playwright.",
      "Develop modular components for complex, data-heavy financial dashboards across both products.",
      "Integrate end-to-end testing workflows into the day-to-day development cycle.",
      "Optimize frontend performance, responsive layouts, and data fetching for real-time tracking.",
    ],
    tags: ["React", "React Native", "Robot Framework", "Playwright"],
  },
  {
    id: "pln",
    company: "PT PLN Persero",
    role: "Software Engineer Intern",
    start: "2024-07",
    end: "2024-08",
    period: "July 2024 - August 2024",
    summary:
      "Implemented object storage infrastructure and the Laravel application used to monitor it.",
    points: [
      "Implemented and configured MinIO object storage using Docker.",
      "Developed a Laravel-based client application for monitoring backup processes and system status.",
      "Created technical documentation, including architecture diagrams, backup and recovery procedures, and user manuals.",
    ],
    tags: ["MinIO", "Docker", "Laravel"],
  },
  {
    id: "bangkit",
    company: "Bangkit Academy",
    role: "Android Development Path",
    start: "2024-02",
    end: "2024-07",
    period: "February 2024 - July 2024",
    summary:
      "Selected for the Bangkit program run by Google, GoTo, Tokopedia, and Traveloka, specializing in Android development.",
    points: [
      "Specialized in Android development using Kotlin, covering UI/UX, API integration, and mobile architecture.",
      "Collaborated on a multidisciplinary capstone team building a disease detection mobile application.",
      "Integrated a machine learning model into the Android application.",
      "Worked with Android Studio, Firebase, and Git in a team development workflow.",
    ],
    tags: ["Kotlin", "Android", "Firebase", "Machine Learning"],
  },
];
