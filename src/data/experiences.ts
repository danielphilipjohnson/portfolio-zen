import { ExperienceItem } from "@/types/experience";

export const defaultExperiences: ExperienceItem[] = [
  {
    id: "exp-loan",
    role: "Frontend Engineer",
    company: "Loan.co.uk",
    period: "Sep 2024 – Present",
    location: "Remote",
    technologies: ["TypeScript", "PHP", "node", "Symfony", "Next.js", "Tailwind CSS", "React", "Storybook"],
    description:
      "Led the end-to-end modernization of the consumer-facing platform, owning frontend architecture from initial system design through to production delivery. Contributed across discovery, scoping, design system strategy, documentation, and cross-team delivery.",
    highlights: [
      "Architected a scalable frontend system using Next.js and Storybook, aligning design, engineering, and business needs.",
      "Delivered production-ready UI from flow diagrams and component maps, ensuring consistency across dynamic mortgage journeys.",
      "Created onboarding guides, architecture diagrams, and coding standards to support scaling the frontend team and accelerating developer ramp-up.",
      "Drove cross-functional planning, collaborating with product and backend teams to scope and prioritize features.",
      "Elevated velocity and maintainability by introducing reusable design patterns, lean component logic, and system-first documentation."
    ]
  },
  {
    id: "exp-idhl",
    role: "Frontend Developer",
    company: "IDHL",
    period: "Jul 2023 – Aug 2024",
    location: "Remote · Hayle, UK",
    technologies: [
      "BigCommerce", "Stencil.js", "React", "Next.js", "TypeScript", "Tailwind CSS"
    ],
    description:
      "Led the development of custom BigCommerce storefronts and Next.js-powered PWAs, balancing high-quality code with client-focused leadership. Championed estimation accuracy, scalable architecture, and mentorship across project teams.",
    highlights: [
      "Delivered projects on time and within budget by owning scope, estimates, and quality assurance",
      "Acted as the primary technical lead for client queries, unblockers, and escalation points across multiple projects",
      "Wrote clear technical specs, broke down work for junior and mid-level devs, and ensured delivery aligned with business goals",
      "Architected and implemented custom BigCommerce extensions to meet complex client needs",
      "Contributed to evolving internal development standards and driving team-wide adoption of best practices"
    ]
  },

  {
    id: "exp-hiyield",
    role: "Full Stack Engineer",
    company: "Hiyield",
    period: "Jul 2021 – Jul 2023",
    location: "St. Austell, UK",
    technologies: [
      "Vue 3", "Nuxt 3", "Prismic", "Storyblok", "Tailwind CSS",
      "Node.js", "Django REST", "PostgreSQL", "Docker", "GCP", "Stripe"
    ],
    description:
      "Built and deployed web apps across marketing and e-commerce domains, integrating CMS, APIs, and secure payment workflows.",
    highlights: [
      "Led integrations with Firebase, Stripe, Mailchimp, and Google Cloud Functions",
      "Delivered robust headless e-commerce solutions using BigCommerce",
      "Mentored junior devs and implemented modern DevOps practices"
    ]
  },
  {
    id: "exp-codecareer",
    role: "React Developer",
    company: "CodeCareer.io",
    period: "Oct 2020 – Apr 2021",
    location: "Remote",
    technologies: ["React.js", "Tailwind CSS", "MongoDB", "Express.js", "Python"],
    description:
      "Maintained and optimized a job board platform by building custom hooks, automations, and performance enhancements.",
    highlights: [
      "Implemented CRUD UI for job listings with clean, modular components",
      "Automated data fetching and normalization with Python scripts",
      "Reduced frontend rendering bottlenecks by optimizing the critical rendering path"
    ]
  }
];
