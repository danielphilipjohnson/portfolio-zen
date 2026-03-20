import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Link from "next/link";

interface ThemeSection {
  title: string;
  description: string[];
  topics: string[];
  example?: {
    title: string;
    summary: string;
    href?: string;
  };
}

const themeSections: ThemeSection[] = [
  {
    title: "AI Systems",
    description: [
      "Large language models are quickly becoming part of modern software architecture. However, the model itself is only one component in a much larger system.",
      "Real AI products combine prompts, retrieval, orchestration, tool interfaces, memory systems, and application logic. Once these components connect, challenges shift from model behavior to system design.",
    ],
    topics: [
      "Model Context Protocol (MCP)",
      "Tool-using LLM architectures",
      "Retrieval-augmented generation (RAG)",
      "Agent orchestration",
      "AI system design patterns",
      "Trust boundaries in AI applications",
    ],
    example: {
      title: "Model Context Protocol (MCP)",
      summary:
        "A deep dive into the protocol that standardizes how AI systems interact with external tools and data sources.",
      href: "/mcp",
    },
  },
  {
    title: "AI Security",
    description: [
      "Introducing AI into production systems significantly expands the attack surface.",
      "Prompt injection, data leakage, tool misuse, and context poisoning emerge at boundaries between system components.",
    ],
    topics: [
      "OWASP Top 10 for LLM Applications",
      "Prompt injection threat models",
      "AI system trust boundaries",
      "Securing tool-using agents",
      "Retrieval and context poisoning",
      "AI infrastructure risk management",
    ],
    example: {
      title: "The LLM Attack Surface in Fintech",
      summary:
        "A breakdown of where AI security vulnerabilities appear across real fintech architectures.",
    },
  },
  {
    title: "Frontend Architecture",
    description: [
      "Modern frontend systems include rendering strategy, state management, design systems, performance constraints, and accessibility considerations.",
      "As applications grow, frontend becomes a system in its own right and requires architectural thinking similar to backend services.",
    ],
    topics: [
      "Component system design",
      "Design systems and design tokens",
      "State management patterns",
      "Rendering and data-fetching architecture",
      "Performance optimization",
      "Scalable frontend architecture",
    ],
  },
  {
    title: "Distributed Systems",
    description: [
      "Many modern products behave as distributed systems, whether teams explicitly describe them that way or not.",
      "When services, jobs, event pipelines, and async workflows combine, reliability and failure handling become core engineering concerns.",
    ],
    topics: [
      "Event-driven architectures",
      "API design and service boundaries",
      "Observability and reliability",
      "Asynchronous workflows",
      "Data consistency and trade-offs",
      "Failure modes in distributed systems",
    ],
  },
];

const whatYouWillFind = [
  "Architecture breakdowns of real systems",
  "Explanations of engineering trade-offs",
  "Perspectives on AI infrastructure and security",
  "Frontend architecture analysis",
  "Distributed systems thinking applied to practical problems",
  "Conceptual models for modern production software",
];

export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-stone-50)] pt-28 pb-20">
      <section className="pb-10">
        <Container>
          <div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-8 shadow-sm md:p-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--color-moss-700)]">
              Engineering Hub
            </p>
            <Text
              as="h1"
              variant="h1"
              weight="light"
              className="mb-5 text-[color:var(--color-stone-900)]"
            >
              Engineering
            </Text>
            <blockquote className="mb-6 border-l-4 border-[color:var(--color-moss-400)] bg-[color:var(--color-stone-50)] px-5 py-4 italic text-[color:var(--color-stone-800)]">
              Perfection is achieved not when there is nothing more to add, but
              when there is nothing left to take away.
            </blockquote>
            <div className="space-y-4">
              <Text className="text-[color:var(--color-stone-700)]">
                Engineering is often taught as tools, frameworks, and techniques.
                In practice, it is a craft of understanding system behavior,
                failure points, and the trade-offs behind architecture choices.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                This hub focuses on architecture, production thinking, and
                engineering decisions across frontend systems, distributed
                services, and modern AI applications.
              </Text>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="mb-8">
            <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-moss-700)]">
              What This Section Covers
            </h2>
            <Text className="max-w-4xl text-[color:var(--color-stone-700)]">
              The content is organized around core themes where modern software
              complexity tends to appear.
            </Text>
          </div>

          <div className="space-y-6">
            {themeSections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm md:p-7"
              >
                <Text
                  as="h3"
                  variant="h4"
                  className="mb-4 text-[color:var(--color-stone-900)]"
                >
                  {section.title}
                </Text>

                <div className="mb-5 space-y-3">
                  {section.description.map((paragraph) => (
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
                    Topics explored:
                  </p>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {section.topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-lg border border-[color:var(--color-stone-200)] bg-[color:var(--color-stone-50)] px-3 py-2 text-sm text-[color:var(--color-stone-700)]"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {section.example && (
                  <div className="mt-5 rounded-xl border border-[color:var(--color-water-200)] bg-[color:var(--color-water-50)] p-4">
                    <p className="mb-1 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-water-700)]">
                      Example Article
                    </p>
                    {section.example.href ? (
                      <Link
                        href={section.example.href}
                        className="mb-1 inline-block font-medium text-[color:var(--color-water-700)] underline decoration-[color:var(--color-water-300)] underline-offset-4 transition-colors hover:text-[color:var(--color-water-800)]"
                      >
                        {section.example.title}
                      </Link>
                    ) : (
                      <p className="mb-1 font-medium text-[color:var(--color-stone-900)]">
                        {section.example.title}
                      </p>
                    )}
                    <p className="text-sm text-[color:var(--color-stone-700)]">
                      {section.example.summary}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-8 shadow-sm">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-moss-700)]">
              Why This Content Exists
            </h2>
            <div className="space-y-4">
              <Text className="text-[color:var(--color-stone-700)]">
                Frameworks and tools move fast. The underlying system-design
                ideas last longer.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                This section focuses on architecture fundamentals that remain
                useful as technologies evolve: trade-offs, reliability,
                performance, and security boundaries.
              </Text>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-10">
        <Container>
          <div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-8 shadow-sm">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-moss-700)]">
              What You&apos;ll Find Here
            </h2>
            <ul className="space-y-2">
              {whatYouWillFind.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-moss-500)]" />
                  <span className="text-[color:var(--color-stone-700)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
