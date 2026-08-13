export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Application Development",
    items: ["React", "React Native", "Flutter", "Kotlin", "Android"],
  },
  {
    title: "Backend",
    items: ["Laravel", "PHP", "Python", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MySQL", "SQL"],
  },
  {
    title: "Testing",
    items: ["Robot Framework", "Playwright"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "MinIO"],
  },
  {
    title: "Programming Languages",
    items: ["Java", "C++", "Python", "Dart", "Go"],
  },
  {
    title: "Machine Learning / Research",
    items: ["Machine Learning", "Deep Learning", "Multitask Learning"],
  },
];
