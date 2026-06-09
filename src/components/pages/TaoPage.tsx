import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";

interface Principle {
  title: string;
  description: string[];
  topics: string[];
}

const principles: Principle[] = [
  {
    title: "Simplicity",
    description: [
      "Complexity is the default state of software. Simplicity requires deliberate effort and constant defence.",
      "The simplest solution that meets the constraints is almost always the right starting point. Add complexity only when it earns its place.",
    ],
    topics: [
      "Avoid premature abstraction",
      "Prefer obvious code over clever code",
      "Reduce surface area",
      "Question every dependency",
      "Small modules, clear boundaries",
    ],
  },
  {
    title: "Clarity",
    description: [
      "Code is read far more often than it is written. Clear code communicates intent without requiring comments.",
      "Names matter. Structure matters. Consistency matters. If a system is hard to understand, it will be hard to maintain.",
    ],
    topics: [
      "Meaningful naming over brevity",
      "Explicit over implicit",
      "Consistent patterns across codebases",
      "Document decisions, not mechanics",
      "Predictable control flow",
    ],
  },
  {
    title: "Resilience",
    description: [
      "Software fails. Resilient systems are designed to fail gracefully, recover predictably, and degrade without cascading.",
      "Plan for failure at every boundary: network calls, user input, third-party services, and state mutations.",
    ],
    topics: [
      "Fail gracefully, not silently",
      "Defensive boundaries at system edges",
      "Observability over guesswork",
      "Graceful degradation",
      "Recovery without data loss",
    ],
  },
  {
    title: "Intentionality",
    description: [
      "Every line of code is a decision. Every dependency is a liability. Every abstraction is a bet.",
      "Build with purpose. Know why a pattern exists before adopting it, and be ready to remove it when it no longer earns its keep.",
    ],
    topics: [
      "Architecture as deliberate choice",
      "Dependencies as liabilities",
      "Prefer buying over building — until you must build",
      "Remove what no longer earns its place",
      "Technical debt as tracked decisions",
    ],
  },
  {
    title: "Consistency",
    description: [
      "Consistent systems are predictable systems. When developers can anticipate how a codebase behaves, they make fewer mistakes.",
      "Convention over configuration, standardised patterns, and clear interfaces reduce cognitive load across teams.",
    ],
    topics: [
      "One way to do things",
      "Standardised interfaces and patterns",
      "Convention over configuration",
      "Consistent error handling",
      "Uniform code style and structure",
    ],
  },
  {
    title: "Modularity",
    description: [
      "Systems decompose along natural boundaries. Each module has a single responsibility and a well-defined interface.",
      "Modular design enables parallel work, independent testing, and the ability to replace components without rewriting everything.",
    ],
    topics: [
      "Separation of concerns",
      "Cohesion within, loose coupling between",
      "Well-defined API surfaces",
      "Replaceable components",
      "Independent testability",
    ],
  },
  {
    title: "Long-Term Thinking",
    description: [
      "Production systems outlive frameworks, teams, and original requirements. Design for the system you will have in three years, not just today.",
      "Short-term speed often creates long-term drag. Invest in architecture, testing, and documentation proportionally to the system's expected lifetime.",
    ],
    topics: [
      "Architectural runway",
      "Evolutionary design over upfront perfection",
      "Testing as investment, not cost",
      "Documentation for future maintainers",
      "Deprecation and migration strategies",
    ],
  },
];

export default function TaoPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-stone-50)] pt-28 pb-20">
      <section className="pb-10">
        <Container>
          <div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-8 shadow-sm md:p-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--color-moss-700)]">
              Tao of Software Engineering
            </p>
            <Text
              as="h1"
              variant="h1"
              weight="light"
              className="mb-5 text-[color:var(--color-stone-900)]"
            >
              Tao
            </Text>
            <blockquote className="mb-6 border-l-4 border-[color:var(--color-moss-400)] bg-[color:var(--color-stone-50)] px-5 py-4 italic text-[color:var(--color-stone-800)]">
              The Tao that can be told is not the eternal Tao. The name that can be named is not the eternal name.
            </blockquote>
            <div className="space-y-4">
              <Text className="text-[color:var(--color-stone-700)]">
                Every engineer accumulates principles over time. Some are learned through failure, others through observation. This is a collection of mine.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                These are not rules. They are heuristics shaped by experience, and they evolve as the craft evolves. What holds true today may shift tomorrow.
              </Text>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="mb-8">
            <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-moss-700)]">
              Principles
            </h2>
            <Text className="max-w-4xl text-[color:var(--color-stone-700)]">
              These principles guide how I think about systems, code, and the craft of software engineering.
            </Text>
          </div>

          <div className="space-y-6">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm md:p-7"
              >
                <Text
                  as="h3"
                  variant="h4"
                  className="mb-4 text-[color:var(--color-stone-900)]"
                >
                  {principle.title}
                </Text>

                <div className="mb-5 space-y-3">
                  {principle.description.map((paragraph) => (
                    <Text
                      key={paragraph}
                      className="text-[color:var(--color-stone-700)]"
                    >
                      {paragraph}
                    </Text>
                  ))}
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-[color:var(--color-stone-800)]">
                    In practice:
                  </p>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {principle.topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-lg border border-[color:var(--color-stone-200)] bg-[color:var(--color-stone-50)] px-3 py-2 text-sm text-[color:var(--color-stone-700)]"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
