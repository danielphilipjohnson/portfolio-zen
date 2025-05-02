import { EducationItem } from '@/types/education';

export const defaultEducationItems: EducationItem[] = [
  {
    id: "edu-1",
    degree: "BSc (Hons) Psychology",
    institution: "University of Plymouth",
    location: "Plymouth, United Kingdom",
    period: "2014 – 2017",
    description:
      "Studied human behavior and cognitive function across development, biology, and social frameworks, with emphasis on mental health, neurobiology, and psychological theory.",
    courses: [
      "Individual Differences & Human Development",
      "Social, Developmental & Cognitive Psychology",
      "Biological Psychology",
      "Neurobiology and Crime",
      "Neuroscience: Mental Imagery and Mental Health",
      "Mental Disorders and Pharmacology"
    ],
    achievements: [
      "Researched how lies form in the brain and their behavioral cues",
      "Explored Alzheimer’s and the role of beta-amyloid plaques",
      "Investigated the role of anxiety in PTSD"
    ],
    logo: "/images/education/university-plymouth-logo.webp"
  },
  {
    id: "edu-2",
    degree: "HND Applied Psychology",
    institution: "University of Plymouth",
    location: "Plymouth, United Kingdom",
    period: "2012 – 2014",
    description:
      "Focused on the origins of behavior from theoretical and practical perspectives. Explored psychological applications across health, performance, education, and environment.",
    courses: [
      "Educational Psychology",
      "Communication and Applied Cognition",
      "Environmental Psychology",
      "Health Psychology",
      "Performance Psychology"
    ],
    achievements: [
      "Gained strong foundation in applied psychological theory",
      "Explored how environmental factors influence mental performance"
    ],
    logo: "/images/education/university-plymouth-logo.webp"
  }
];
