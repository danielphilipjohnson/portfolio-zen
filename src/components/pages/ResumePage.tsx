import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Education from "@/components/home/education/Education";
import FocusAndTechnologies from "@/components/about/FocusAndTechnologies";
import Experience from "@/components/experience/Experience";
// import Image from "next/image";


const STRENGTHS = [
  "Frontend architecture",
  "React, TypeScript, Next.js",
  "Developer experience and engineering standards",
  "State management and data flow",
  "Performance and accessibility",
  "Fintech and high-trust product flows",
  "Secure frontend architecture",
  "Mentoring and cross-functional collaboration",
];

const ACHIEVEMENTS = [
  "Improved frontend standards and shared implementation patterns across product teams.",
  "Worked on secure AI-driven workflow systems with clearer boundaries around user input, model execution, and automation.",
  "Built funnel tracking and experimentation tooling to improve visibility into customer journeys.",
  "Designed frontend logic for complex fintech document workflows.",
  "Improved performance and maintainability across complex frontend systems.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-moss-700)]">
      {children}
    </p>
  );
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[var(--color-stone-50)] pt-28 pb-20">
      {/* Header — zen resume intro */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-moss-400)] via-[var(--color-clay-300)] to-transparent" />
        
        {/* Decorative Japanese characters */}
        <div className="absolute top-20 right-20 opacity-10 lg:opacity-20 pointer-events-none">
          <span className="text-6xl md:text-8xl font-serif text-[var(--color-stone-300)]" aria-hidden="true">
            小さな改善
          </span>
        </div>
        <div className="absolute top-40 right-8 opacity-10 lg:opacity-20 pointer-events-none">
          <span className="text-6xl md:text-8xl font-serif text-[var(--color-stone-300)]" aria-hidden="true">
            大きな影響
          </span>
        </div>
        
        {/* Decorative seal */}
        <div className="absolute bottom-0 right-0 opacity-10 lg:opacity-20 pointer-events-none">
          <div className="w-32 h-32 rounded-full bg-[var(--color-clay-200)] flex items-center justify-center border-2 border-[var(--color-clay-400)]">
            <span className="text-4xl text-[var(--color-clay-700)] font-serif" aria-hidden="true">印</span>
          </div>
        </div>
        
        <Container>
          <div className="relative py-16 md:py-20">
            {/* Section label */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-moss-700)] bg-[var(--color-moss-50)] rounded-full border border-[var(--color-moss-200)]">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2V22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16C12 16 8 13 8 10V7L12 6L16 7V10C16 13 12 16 12 16Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Resume
              </span>
            </div>

            {/* Hero content with potential image area */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8">
                <Text as="h1" variant="hero" weight="light" className="text-[var(--color-stone-900)] mb-2">
                  Daniel Philip Johnson
                </Text>
                <Text as="p" variant="h3" weight="extralight" className="text-[var(--color-moss-700)] mb-4">
                  Senior Frontend Engineer
                </Text>
                
                {/* Skills/tags */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[var(--color-stone-600)] mb-6">
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[var(--color-moss-500)]">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    Frontend Architecture
                  </span>
                  <span className="text-[var(--color-stone-300)]" aria-hidden="true">·</span>
                  <span>Developer Experience</span>
                  <span className="text-[var(--color-stone-300)]" aria-hidden="true">·</span>
                  <span>Fintech</span>
                  <span className="text-[var(--color-stone-300)]" aria-hidden="true">·</span>
                  <span>Technical Leadership</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-[var(--color-stone-500)] mb-8">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M12 2v4M12 18v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span>Cornwall, UK</span>
                  <span className="text-[var(--color-stone-300)]" aria-hidden="true">·</span>
                  <span>Remote</span>
                </div>
                <div className="max-w-2xl mb-8">
                  <Text variant="body" className="text-[var(--color-stone-700)] leading-relaxed">
                    I help teams turn frontend complexity into clear, maintainable systems — improving performance, reliability, developer experience, and delivery confidence across high-trust product environments.
                  </Text>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a href="/resume/Daniel-Philip-Johnson-Resume.pdf" download
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[var(--color-moss-600)] hover:bg-[var(--color-moss-700)] transition-colors rounded-lg shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 15V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Download Resume
                  </a>
                  <a href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--color-stone-700)] bg-[var(--color-stone-100)] hover:bg-[var(--color-stone-200)] transition-colors rounded-lg border border-[var(--color-stone-200)]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Contact Me
                  </a>
                  <a href="https://linkedin.com/in/danielphilipjohnson" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--color-stone-700)] bg-[var(--color-stone-100)] hover:bg-[var(--color-stone-200)] transition-colors rounded-lg border border-[var(--color-stone-200)]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="2" y="9" width="4" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/danielphilipjohnson" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--color-stone-700)] bg-[var(--color-stone-100)] hover:bg-[var(--color-stone-200)] transition-colors rounded-lg border border-[var(--color-stone-200)]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    GitHub
                  </a>
                </div>

               
              </div>

              {/* Bonsai image placeholder - spans 4 columns */}
              {/* To add your bonsai image: */}
              {/* 1. Place image at: /public/images/resume/bonsai.webp */}
              {/* 2. Uncomment the Image component below */}
              <div className="hidden lg:flex lg:col-span-4 items-center justify-center">
                {/* <Image
                  src="/images/resume/bonsai.webp"
                  alt="Bonsai tree - symbol of patience and growth"
                  width={400}
                  height={600}
                  className="w-full max-w-md h-auto rounded-2xl shadow-lg object-cover"
                  priority
                /> */}
                <div className="relative w-full max-w-md aspect-[3/4] bg-gradient-to-b from-[var(--color-moss-100)] to-[var(--color-stone-100)] rounded-2xl border border-[var(--color-stone-200)] shadow-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20 text-[var(--color-moss-500)] opacity-50">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-[var(--color-stone-500)] italic">
                    bonsai image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Strengths */}
      <section className="bg-white py-10">
        <Container>
          <div className="mb-8">
            <SectionLabel>Core Strengths</SectionLabel>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {STRENGTHS.map((strength) => (
              <div
                key={strength}
                className="rounded-xl border border-[var(--color-stone-200)] bg-[var(--color-stone-50)] p-4 shadow-sm"
              >
                <Text className="text-[var(--color-stone-800)]">{strength}</Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact Highlights */}
      <section className="bg-white py-10">
        <Container>
          <div className="max-w-2xl mb-12">
            <Text as="h2" variant="h2" weight="light" className="mb-4 text-[var(--color-stone-800)]">
              Impact Highlights
            </Text>
            <Text variant="body" weight="light" className="text-[var(--color-stone-600)]">
              Outcomes that matter for users, teams, and the business.
            </Text>
          </div>

          <div className="space-y-4">
            {/* Performance Architecture */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-[var(--color-stone-200)] bg-white shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-moss-50)] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--color-moss-600)]">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.68.94 6.36 2.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <Text as="h3" variant="h5" weight="medium" className="text-[var(--color-stone-800)]">
                    Performance Architecture
                  </Text>
                  <Text variant="body-sm" className="text-[var(--color-stone-600)]">
                    Improved Core Web Vitals and application responsiveness across key journeys.
                  </Text>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Text variant="h4" weight="semibold" className="text-[var(--color-moss-700)]">
                  45%
                </Text>
                <Text variant="body-sm" className="text-[var(--color-stone-500)]">
                  Faster load time
                </Text>
              </div>
            </div>

            {/* Developer Experience */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-[var(--color-stone-200)] bg-white shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-moss-50)] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--color-moss-600)]">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <Text as="h3" variant="h5" weight="medium" className="text-[var(--color-stone-800)]">
                    Developer Experience
                  </Text>
                  <Text variant="body-sm" className="text-[var(--color-stone-600)]">
                    Unified standards, templates, and shared tooling for more consistent delivery.
                  </Text>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Text variant="h4" weight="semibold" className="text-[var(--color-moss-700)]">
                  75%
                </Text>
                <Text variant="body-sm" className="text-[var(--color-stone-500)]">
                  Less UI inconsistency
                </Text>
              </div>
            </div>

            {/* Security Governance */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-[var(--color-stone-200)] bg-white shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-moss-50)] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--color-moss-600)]">
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <Text as="h3" variant="h5" weight="medium" className="text-[var(--color-stone-800)]">
                    Security Governance
                  </Text>
                  <Text variant="body-sm" className="text-[var(--color-stone-600)]">
                    Reduced dependency risk and improved frontend compliance posture.
                  </Text>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Text variant="h4" weight="semibold" className="text-[var(--color-moss-700)]">
                  400+ &rarr; 12
                </Text>
                <Text variant="body-sm" className="text-[var(--color-stone-500)]">
                  CVEs reduced
                </Text>
              </div>
            </div>

            {/* Product Systems */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-[var(--color-stone-200)] bg-white shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-moss-50)] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--color-moss-600)]">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <Text as="h3" variant="h5" weight="medium" className="text-[var(--color-stone-800)]">
                    Product Systems
                  </Text>
                  <Text variant="body-sm" className="text-[var(--color-stone-600)]">
                    Built a deterministic mortgage journey task engine for complex advisor workflows.
                  </Text>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Text variant="h4" weight="semibold" className="text-[var(--color-moss-700)]">
                  System
                </Text>
                <Text variant="body-sm" className="text-[var(--color-stone-500)]">
                  Workflow engine
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Experience />

      {/* Selected Achievements */}
      <section className="bg-white py-10">
        <Container>
          <div className="mb-8">
            <SectionLabel>Selected Achievements</SectionLabel>
          </div>
          <div className="rounded-2xl border border-[var(--color-stone-200)] bg-white p-6 shadow-sm md:p-7">
            <ul className="space-y-3">
              {ACHIEVEMENTS.map((achievement) => (
                <li key={achievement} className="flex items-start gap-3 text-[var(--color-stone-700)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-water-400)]" />
                  <Text>{achievement}</Text>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FocusAndTechnologies />

      <Education />
    </main>
  );
}
