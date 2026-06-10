import { ExperienceItem } from "@/types/experience";

export const defaultExperiences: ExperienceItem[] = [
  {
    id: "exp-loan",
    role: "Senior Front End Engineer",
    company: "Loan.co.uk",
    period: "August 2024–Present",
    location: "Remote",
    technologies: ["TypeScript", "Next.js", "React Server Components", "Zustand", "Storybook", "WCAG 2.1 AA", "Zod", "Tailwind CSS"],
    description:
      "Modernised a legacy Create React App into a Next.js App Router + React Server Components architecture, and engineered a deterministic Zustand-based task engine for complex mortgage journeys.",
    highlights: [
      "Modernised a legacy Create React App into a Next.js App Router + React Server Components architecture, introducing server/client boundaries, caching rules, and rendering patterns that dramatically improved performance and established a scalable foundation for future features.",
      "Engineered the dashboard task engine using a deterministic Zustand-based state architecture, unifying multi-source task data (uploads, fact-find, credit checks, document reads, debt consolidation) into a predictable flow that improved clarity, correctness, and reliability for advisors and customers.",
      "Collaborated with design on a full dashboard and customer-app redesign, advising on technical feasibility, performance implications, and UX trade-offs to ensure proposed solutions were intuitive, fast, and realistic to implement.",
      "Built a unified frontend platform including a token-driven design system (Storybook, WCAG 2.1 AA), feature-flagging system, Zod-powered form engines, analytics middleware, and typed API clients reducing UI inconsistency by 75% and increasing developer velocity across teams.",
      "Drove a multi-quarter performance initiative, implementing parallel data fetching, server-first rendering, cache boundaries, bundle analysis, and strict code-splitting which cut app load time by 45%.",
      "Spearheaded frontend security and compliance, reducing 400+ CVEs to 12, enforcing dependency governance, and integrating audit logging into React/Next.js interaction flows.",
      "Designed and shipped an AI-powered chat interface with real-time streaming, optimistic updates, and state-machine-driven UI flows delivering a fast, reliable customer support experience.",
      "Improved engineering culture by defining coding standards, frontend conventions, architectural guidelines, and documentation practices that enhanced consistency and long-term maintainability."
    ]
  },
  {
    id: "exp-idhl",
    role: "Front End Engineer Bigcommerce",
    company: "IDHL",
    period: "July 2023–August 2024",
    location: "Remote · Hayle, UK",
    technologies: [
      "BigCommerce", "React", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "Storybook"
    ],
    description:
      "Defined React and Next.js architectural foundations for enterprise commerce platforms and engineered high-performance PWAs using React Server Components.",
    highlights: [
      "Defined the React and Next.js architectural foundations for two enterprise commerce platforms, introducing durable component patterns, rendering rules, and performance constraints that increased team velocity and improved project margins by 15%.",
      "Engineered a Next.js-powered PWA using React Server Components, modular components, and structured hydration boundaries, and documented the patterns in Storybook to unify UI behaviours across teams.",
      "Created shared React data-fetching primitives (GraphQL wrappers, typed hooks, caching strategies) that reduced integration overhead by 55% and eliminated duplicated logic across teams.",
      "Engineered performance and caching improvements across the storefront, including GraphQL caching and edge-oriented rendering for the checkout, delivering faster TTFB, smoother buyer journeys, and more stable performance at scale.",
      "Collaborated with product designers to shape high-conversion storefront and checkout experiences, advising on feasibility, performance trade-offs, and component-level UX improvements."
    ]
  },
  {
    id: "exp-hiyield",
    role: "Fullstack developer",
    company: "hiyield",
    period: "July 2021– July 2023",
    location: "St. Austell, UK",
    technologies: [
      "React", "Next.js", "GraphQL", "Prismic CMS", "Storybook", "TypeScript", "Google Cloud", "Firebase", "Stripe"
    ],
    description:
      "Designed and delivered headless eCommerce architectures and engineered Google Cloud data pipelines for real-time dashboards.",
    highlights: [
      "Designed and delivered a headless eCommerce architecture using React/Next.js, GraphQL, and Prismic CMS, supported by a shared Storybook component library that improved scalability and reduced page load times by 35%.",
      "Rebuilt a plugin-heavy WordPress platform into a React + TypeScript JAMstack application with Firebase auth, serverless APIs, and Stripe integration, replacing brittle legacy code with a fast, secure, and maintainable modern foundation.",
      "Engineered Google Cloud pipelines (Pub/Sub → Compute → Elasticsearch) that processed 2M+ records per quarter, enabling real-time dashboards and powering low-latency search experiences across React-based customer interfaces.",
      "Built a React customer portal that unified account management, bookings, collection requests, and storage tracking, fully integrated with warehouse and logistics systems to deliver accurate, real-time updates to customers.",
      "Collaborated with designers to refine user flows and component patterns, ensuring new features across eCommerce and logistics products were intuitive, performant, and consistent with evolving design system standards."
    ]
  },
  {
    id: "exp-codecareer",
    role: "Founding Front End Engineer",
    company: "codecareer.io",
    period: "2020–2021",
    location: "Remote",
    technologies: ["React", "Python", "MongoDB", "Tailwind CSS"],
    description:
      "As a founding developer, built a React-based job board platform from the ground up and implemented Python automation for multi-source data fetching.",
    highlights: [
      "As a founding developer, built the React-based frontend for a job board platform from the ground up including search interface, job filters, pagination, and real-time data display supporting 3,000+ daily listings and reducing page load time to under 1.2s on average.",
      "Designed Python automation to pull job data from 5+ APIs, storing parsed entries in MongoDB reducing API costs by 50% and improving listing freshness and frontend accuracy."
    ]
  },
  {
    id: "exp-freelance",
    role: "React Developer (Freelance)",
    company: "Self-Employed",
    period: "February 2019 – August 2020",
    location: "Remote",
    technologies: ["React", "Python", "MongoDB"],
    description:
      "Developed custom React frontends and automated data collection workflows for various clients.",
    highlights: [
      "As a founding developer, built the React-based frontend for a job board platform from the ground up including search interface, job filters, pagination, and real-time data display supporting 3,000+ daily listings and reducing page load time to under 1.2s on average.",
      "Designed Python automation to pull job data from 5+ APIs, storing parsed entries in MongoDB reducing API costs by 50% and improving listing freshness and frontend accuracy."
    ]
  }
];
