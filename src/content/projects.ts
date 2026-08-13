export type CaseStudy = {
  overview: string;
  role: string;
  technology: string[];
  engineering: string;
  outcome: string;
  reflection: string;
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  titleLines?: string[];
  category: string;
  featured: boolean;
  description: string;
  contribution: string;
  technologies: string[];
  year: string;
  confidential?: boolean;
  caseStudy?: CaseStudy;
  diagram?: string[];
  frame?: "wide" | "phone";
  imageAspect?: string;
  imageFit?: "cover" | "contain";
};

export const projects: Project[] = [
  {
    slug: "customer-portfolio-management",
    number: "01",
    name: "Customer Portfolio Management (CPM)",
    titleLines: ["Customer", "Portfolio", "Management"],
    category: "Enterprise Mobile Application",
    featured: true,
    year: "2025",
    confidential: true,
    description:
      "A customer portfolio management mobile app I've built from the ground up as a React Native frontend engineer, with Playwright-based automated testing.",
    contribution:
      "Built the application from the ground up as the frontend engineer, including its React Native architecture and automated testing setup.",
    technologies: ["React Native", "Playwright"],
    frame: "phone",
    imageAspect: "aspect-[386/792]",
    imageFit: "contain",
    diagram: ["REACT NATIVE", "  |", "  +-- UI COMPONENTS", "  |", "  +-- PLAYWRIGHT TESTS"],
    caseStudy: {
      overview:
        "Customer Portfolio Management (CPM) is a React Native mobile app for tracking customer portfolio data. Unlike other products I've joined mid-development, CPM is one I've built from the ground up as the frontend engineer. Because this is a commercial product built for a client, specific business details and internal screens are kept confidential here.",
      role:
        "I'm the frontend engineer building CPM from its initial architecture onward: setting up the React Native project structure, building out screens and components as features are defined, and building the Playwright-based automated testing around it.",
      technology: ["React Native", "TypeScript", "Playwright"],
      engineering:
        "Starting a mobile app from zero means the early architectural decisions, navigation structure, state management, component boundaries, carry through the rest of the product's life. I've focused on keeping that foundation consistent as new screens are added, and on setting up Playwright-based automated tests early rather than retrofitting them once the app grows.",
      outcome:
        "CPM is under active development, with new features built on the foundation established from the start of the project.",
      reflection:
        "Building a product from its first commit is a different discipline from extending an existing one. It's taught me to think ahead about how today's component structure will hold up once a dozen more screens depend on it, and to treat test coverage as part of that foundation rather than something added later.",
    },
  },
  {
    slug: "portfolio-management-system",
    number: "02",
    name: "Portfolio Management System (CIMB Bank)",
    titleLines: ["Portfolio", "Management", "System"],
    category: "Enterprise Web Application",
    featured: true,
    year: "2025",
    confidential: true,
    description:
      "A Portfolio Management System (PMS) built for CIMB Bank, a React web platform with data-heavy financial dashboards and the Robot Framework test automation behind it.",
    contribution:
      "Frontend development and bug fixing across the web platform, plus the automated testing framework built on Robot Framework with Playwright.",
    technologies: ["React", "Robot Framework", "Playwright"],
    frame: "wide",
    diagram: [
      "REACT (WEB)",
      "  |",
      "  +-- DASHBOARDS",
      "  |",
      "  +-- TEST AUTOMATION",
      "        ROBOT FRAMEWORK",
      "        + PLAYWRIGHT",
    ],
    caseStudy: {
      overview:
        "The Portfolio Management System (PMS) is a React web platform built for CIMB Bank to track and present financial data. The product involves data-heavy dashboards and real-time tracking, built for enterprise use. Because this is a commercial banking product, specific business details and internal screens are kept confidential here.",
      role:
        "I work on the React web platform, focused on frontend development and fixing issues as the product evolves in production, plus the automated testing infrastructure around it. I build modular components for the financial dashboards, integrate data from backend APIs, and maintain the Robot Framework test suite.",
      technology: ["React", "TypeScript", "Robot Framework", "Playwright"],
      engineering:
        "The interfaces are data-heavy, so a large part of the work is keeping complex dashboards consistent and maintainable as the product evolves, while fixing frontend issues that surface once real usage stresses the UI. I developed a test automation framework using Robot Framework with Playwright as its browser driver, giving the team readable, keyword-based test cases for the web platform that catch regressions before they reach review.",
      outcome:
        "The system is in active use at CIMB Bank, with the platform under continuous development. The Robot Framework and Playwright test suite is now a standard part of the development cycle, running against new features before they ship.",
      reflection:
        "This project is where I learned to treat testing as part of the architecture rather than an afterthought. Setting up Robot Framework on top of Playwright also taught me how to balance a readable, keyword-driven test format against the flexibility of writing automation directly in code, and how to keep a growing financial dashboard maintainable as it evolves.",
    },
  },
  {
    slug: "secure-object-storage",
    number: "03",
    name: "Secure Object Storage / Backup System",
    titleLines: ["Secure Backup", "Infrastructure"],
    category: "Infrastructure / Backend",
    featured: true,
    year: "2024",
    confidential: true,
    description:
      "Object storage infrastructure and a monitoring client built during my internship at PT PLN Persero.",
    contribution:
      "Configured MinIO object storage in Docker and built the Laravel application used to monitor backup processes and system status.",
    technologies: ["MinIO", "Docker", "Laravel"],
    frame: "wide",
    diagram: ["APPLICATION", "  |", "  v", "LARAVEL", "  |", "  v", "MINIO", "  |", "  v", "OBJECT STORAGE"],
    caseStudy: {
      overview:
        "During my internship at PT PLN Persero, I worked on infrastructure for object storage and backup monitoring. The goal was a reliable storage layer with a client application to observe backup health and system status.",
      role:
        "I implemented and configured MinIO object storage running in Docker, and built the Laravel-based client application used to monitor backup processes. I also wrote the technical documentation covering the architecture, backup and recovery procedures, and user manuals for the system.",
      technology: ["MinIO", "Docker", "Laravel", "PHP"],
      engineering:
        "The core of the work was setting up MinIO as a self-hosted, S3-compatible object storage layer inside Docker containers, then building a Laravel application on top that surfaced backup status in a way non-technical staff could read. Documentation was treated as a deliverable, not an afterthought: architecture diagrams and recovery procedures needed to be clear enough that someone unfamiliar with the setup could operate or recover it.",
      outcome:
        "The storage and monitoring setup, along with its documentation, was handed over as part of the internship deliverables at PLN.",
      reflection:
        "This was my first hands-on experience with infrastructure outside of application code, and it shaped how I think about reliability. Object storage and backup systems fail quietly if you're not paying attention, and writing the recovery documentation forced me to actually understand the failure modes, not just the happy path.",
    },
  },
  {
    slug: "ddos-detection-research",
    number: "04",
    name: "DDoS Detection Using Multitask Learning",
    titleLines: ["DDoS", "Detection"],
    category: "Machine Learning / Cybersecurity / Research",
    featured: true,
    year: "2025",
    description:
      "My final-year thesis on detecting DDoS attacks using a multitask deep learning approach, presented at ICAIIC 2025.",
    contribution:
      "Independent research project: problem framing, implementation, and experimentation, completed as my undergraduate thesis.",
    technologies: ["Python", "Deep Learning", "Multitask Learning"],
    frame: "wide",
    imageAspect: "aspect-[1018/975]",
    imageFit: "contain",
    diagram: ["NETWORK TRAFFIC", "  |", "  v", "MULTITASK LEARNING", "  |", "  v", "DETECTION"],
    caseStudy: {
      overview:
        "\"Distributed Denial-of-Service (DDoS) Detection Using Multitask Learning and Deep Learning\" was my undergraduate thesis at Telkom University, exploring how a multitask deep learning approach can be used to detect DDoS attacks. The work was presented at ICAIIC 2025, an international AI and communications conference held in Japan.",
      role:
        "This was an independent research project. I framed the research problem, implemented the detection approach in Python, and ran the experimentation behind the thesis, under academic supervision at Telkom University.",
      technology: ["Python", "Deep Learning", "Multitask Learning"],
      engineering:
        "The project applies a multitask learning framework to DDoS detection: rather than training a single model for one classification task, a multitask approach lets the model learn related detection objectives together. Specific architecture and dataset details are documented in the full thesis and conference paper rather than reproduced here, to avoid misrepresenting the technical specifics outside their original context.",
      outcome:
        "The work was accepted and presented at ICAIIC 2025 (International Conference on Artificial Intelligence in Information and Communication), held in Japan.",
      reflection:
        "This project pushed me from applying machine learning to actually researching it: framing a problem, defending a methodology, and presenting it to an academic audience. It's also where my interest in cybersecurity and applied ML started to take shape as a real direction, not just a course requirement.",
    },
  },
  {
    slug: "disease-detection-android",
    number: "05",
    name: "Disease Detection Android Application",
    titleLines: ["Disease", "Detection"],
    category: "Mobile / Machine Learning",
    featured: true,
    year: "2024",
    description:
      "A multidisciplinary Bangkit Academy capstone project: a disease detection mobile app with an integrated machine learning model.",
    contribution:
      "Android development, machine learning model integration, and API/mobile architecture as part of a capstone team.",
    technologies: ["Kotlin", "Android", "Firebase", "Machine Learning"],
    frame: "wide",
    imageAspect: "aspect-[862/486]",
    imageFit: "contain",
    diagram: ["ANDROID APP", "  |", "  +-- ML MODEL", "  |", "  +-- FIREBASE"],
    caseStudy: {
      overview:
        "A capstone project built during Bangkit Academy, a program run by Google, GoTo, Tokopedia, and Traveloka. The team built a mobile application for disease detection, combining a native Android app with an integrated machine learning model.",
      role:
        "I worked on the Android side of the capstone team, handling UI/UX implementation, API integration, and mobile architecture, and integrating the machine learning model produced by the team's ML track into the Android application.",
      technology: ["Kotlin", "Android Studio", "Firebase", "Machine Learning", "Git"],
      engineering:
        "The application needed to run a trained detection model within an Android app and present results through a usable mobile interface. I focused on the integration layer between the ML model and the app, plus the surrounding architecture: navigation, API calls, and Firebase for backend services, working across a multidisciplinary team split between mobile, machine learning, and cloud tracks.",
      outcome:
        "Delivered as the final capstone project for the Bangkit Academy program.",
      reflection:
        "Bangkit was my introduction to structured Android development and to working on a multidisciplinary team with a hard deadline. Integrating a machine learning model into a mobile app also gave me an early, practical sense of where ML meets the constraints of a real device.",
    },
  },
  {
    slug: "atlas-marketplace",
    number: "06",
    name: "Atlas Marketplace",
    category: "Web Development",
    featured: false,
    year: "2023",
    description:
      "A web marketplace application built with Laravel, PHP, MySQL, and Bootstrap.",
    contribution:
      "Web application development covering backend logic, database design, and frontend interface.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  },
  {
    slug: "atlas-marketplace-android",
    number: "07",
    name: "Atlas Marketplace (Android)",
    category: "Mobile Application",
    featured: false,
    year: "2023",
    description:
      "The Android companion application for Atlas Marketplace, built with Flutter and connected to the same Laravel backend.",
    contribution: "Mobile application development using Flutter, integrated with a Laravel PHP backend.",
    technologies: ["Flutter", "Dart", "Laravel", "PHP"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
