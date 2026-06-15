import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Link from "next/link";
import { getAllBlogs } from "@/lib/content/getAllBlogs";
import { parse, isValid, format } from "date-fns";

const ENGINEERING_PRINCIPLES_TAG = "engineering principles";

const topics = [
  {
    title: "Engineering Judgement",
    description: "Developing the ability to weigh trade-offs, choose the right level of abstraction, and know when principles apply.",
  },
  {
    title: "Technical Restraint",
    description: "Knowing when not to build, when not to abstract, and when the discipline of deletion is more valuable than addition.",
  },
  {
    title: "Software Complexity",
    description: "Understanding accidental vs essential complexity, and which abstractions are worth the cost they introduce.",
  },
  {
    title: "Frontend Architecture Principles",
    description: "Separation of concerns, component boundaries, state ownership, and designing for change over time.",
  },
  {
    title: "Performance Trade-offs",
    description: "Elimination, efficiency, and scheduling as a mental model for understanding what work matters and what can be moved or removed.",
  },
  {
    title: "Fintech Engineering",
    description: "Building frontend systems where latency affects trust, confidence, conversion, support volume, and compliance risk.",
  },
  {
    title: "Systems Thinking",
    description: "Understanding how parts connect, where interactions create cost, and why performance failures often cross ownership boundaries.",
  },
  {
    title: "Technical Debt",
    description: "Identifying, communicating, and retiring architectural debt before it compounds across the system.",
  },
  {
    title: "Long-term Maintainability",
    description: "Designing systems that remain understandable, adaptable, and safe to change as a product grows over years.",
  },
  {
    title: "Calm Decision-Making",
    description: "Making architectural decisions from a place of clarity rather than urgency, and distinguishing real pressure from perceived pressure.",
  },
  {
    title: "Simplicity and Clarity",
    description: "Choosing the solution that reduces cognitive load for the next person, even when a more complex solution is more interesting to build.",
  },
  {
    title: "Developer Experience",
    description: "Designing codebases, APIs, and abstractions that respect the time and attention of the engineers who work with them daily.",
  },
  {
    title: "Product and Engineering Trade-offs",
    description: "Navigating the tension between speed, quality, scope, and risk — and making those trade-offs explicit rather than accidental.",
  },
  {
    title: "Zen and Software Engineering",
    description: "Attention, clarity, and reducing unnecessary noise — what Zen practice teaches about seeing what is actually in front of you.",
  },
  {
    title: "Bonsai as an Engineering Metaphor",
    description: "Pruning, shaping, patience, and long-term maintenance — how deliberate, repeated interventions create healthy systems over time.",
  },
  {
    title: "Taoist Ideas in Technical Leadership",
    description: "Working with the grain of a system rather than forcing it, and finding the path with the least unnecessary resistance.",
  },
];

const questions = [
  "When is the simplest solution actually the strongest one?",
  "How do you move quickly without creating avoidable technical debt?",
  "What should an engineer eliminate instead of optimise?",
  "How do small decisions shape the long-term health of a frontend system?",
  "When should a team accept complexity, and when should it push back?",
  "How do you design systems that are easy to change under pressure?",
  "What can bonsai teach us about pruning, shaping, patience, and long-term software maintenance?",
  "What can Zen teach us about attention, clarity, and reducing unnecessary noise?",
  "What can Taoist thinking teach us about working with the grain of a system rather than forcing it?",
  "How do these principles apply when building fintech products where trust, accuracy, and operational flow matter?",
];

const relatedTopics = [
  { name: "Frontend Architecture", href: "/blog/tag/frontend-architecture" },
  { name: "Web Performance", href: "/blog/tag/web-performance" },
  { name: "Software Architecture", href: "/engineering" },
  { name: "Fintech", href: "/blog/tag/fintech" },
  { name: "Technical Leadership", href: "/blog/tag/technical-leadership" },
  { name: "State Management", href: "/blog/tag/state-management" },
];

async function getRelatedPosts() {
  const blogPosts = await getAllBlogs();
  return blogPosts
    .filter(post =>
      post.tags?.some((tag: string) => tag.toLowerCase() === ENGINEERING_PRINCIPLES_TAG)
    )
    .map(post => {
      const date = parse(post.publishDate, "dd/MM/yyyy", new Date());
      return {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        publishDate: isValid(date) ? format(date, "yyyy-MM-dd") : "",
      };
    })
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export default async function EngineeringPrinciplesTagPage() {
  const relatedPosts = await getRelatedPosts();

  return (
    <main className="min-h-screen bg-[var(--color-stone-50)]">
      <section className="pt-24 pb-12">
        <Container>
          <Link
            href="/blog"
            className="mb-6 inline-block text-sm text-[var(--color-moss-600)] hover:text-[var(--color-moss-800)] transition-colors"
          >
            &larr; Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl tracking-tight leading-tight font-sans mb-4 text-[var(--color-stone-800)]">
            Engineering Principles
          </h1>
          <Text className="text-lg max-w-3xl">
            Engineering principles are not just abstract ideas. They shape how we
            make decisions, manage complexity, handle trade-offs, and build systems
            that can survive real use.
          </Text>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <Text className="text-lg max-w-3xl mb-8">
            These articles explore software engineering through a mix of technical
            experience, fintech product work, systems thinking, Zen practice, bonsai,
            and Taoist philosophy. The focus is on principles that help engineers
            build calmly, deliberately, and with respect for the long-term shape of
            the system.
          </Text>
          <Text className="text-lg max-w-3xl">
            In fintech, this matters because software is rarely just software. A
            small frontend decision can affect customer confidence, internal
            operations, compliance risk, support volume, and the trust users place
            in a product. The best engineering principles help teams move quickly
            without becoming reckless, simplify without becoming naive, and optimise
            without losing sight of the human experience.
          </Text>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-8 text-[var(--color-stone-800)]">
            Featured Engineering Principles Articles
          </h2>
          <Text className="text-lg max-w-3xl mb-8">
            Explore articles on engineering judgement, technical restraint, frontend
            architecture, performance trade-offs, complexity, maintainability, system
            design, and the human side of building software in fintech environments.
          </Text>
          {relatedPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-lg border border-[var(--color-stone-200)] bg-white p-6 transition-colors hover:border-[var(--color-moss-300)] h-full"
                  >
                    <h3 className="text-lg font-sans font-medium mb-2 group-hover:text-[var(--color-moss-700)] text-[var(--color-stone-800)]">
                      {post.title}
                    </h3>
                    <Text className="text-sm mb-3">{post.excerpt}</Text>
                    <span className="text-xs text-[var(--color-stone-400)]">
                      {post.publishDate}
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <Text className="text-[var(--color-stone-500)]">
              No articles found.
            </Text>
          )}
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-8 text-[var(--color-stone-800)]">
            Topics Covered
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-lg border border-[var(--color-stone-200)] bg-white p-6 relative"
              >
                <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-[var(--color-stone-400)] font-medium">
                  Coming Soon
                </span>
                <h3 className="text-lg font-sans font-medium mb-2 text-[var(--color-stone-800)]">
                  {topic.title}
                </h3>
                <Text className="text-sm">{topic.description}</Text>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-8 text-[var(--color-stone-800)]">
            Questions These Articles Explore
          </h2>
          <div className="space-y-4">
            {questions.map((question, i) => (
              <div
                key={i}
                className="rounded-lg border border-[var(--color-stone-200)] bg-white p-5"
              >
                <Text className="text-base italic text-[var(--color-stone-700)]">
                  {question}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-4 text-[var(--color-stone-800)]">
            Why Engineering Principles Matter
          </h2>
          <Text className="text-lg max-w-3xl">
            Engineering principles matter because codebases do not become difficult
            all at once. They become difficult gradually.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            One extra abstraction. One rushed workaround. One unclear boundary. One
            duplicated state model. One dependency added because it was convenient.
            One performance issue ignored because the page still technically worked.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            Each decision may seem harmless in isolation. Over time, those decisions
            shape the system.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            Good engineering principles help teams notice that accumulation earlier.
            They create a shared language for deciding what to simplify, what to
            protect, what to defer, and what not to build at all.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            This is where ideas from Zen, bonsai, and Taoist thinking become useful
            engineering metaphors.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            Zen encourages attention. It asks us to see what is actually in front of
            us, rather than reacting to noise. In software, that means understanding
            the real problem before reaching for a pattern, library, framework, or
            optimisation.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            Bonsai teaches deliberate shaping over time. A healthy tree is not
            created by one dramatic cut. It is shaped through repeated, careful
            interventions. Software systems work the same way. Architecture is not
            only made in large rewrites. It is shaped through small decisions,
            refactors, boundaries, naming, deletion, and restraint.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            Taoist thinking reminds us that forcing a system often creates more
            resistance. Sometimes the better engineering move is not to push harder,
            but to understand the existing flow of the product, the team, the users,
            and the architecture. Good technical leadership often means finding the
            path with the least unnecessary force.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            In fintech, these principles become practical. A calm, well-shaped system
            is easier to reason about, easier to audit, easier to change, and less
            likely to surprise the people who depend on it. That matters when users
            are completing applications, reviewing financial information, uploading
            documents, waiting for decisions, or relying on internal teams to handle
            cases accurately.
          </Text>
          <Text className="text-lg max-w-3xl mt-4 font-medium text-[var(--color-stone-800)]">
            Engineering principles are not decoration. They are how teams protect
            quality under pressure.
          </Text>
        </Container>
      </section>

      <section className="py-12 border-t border-[var(--color-stone-200)]">
        <Container>
          <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-8 text-[var(--color-stone-800)]">
            Related Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedTopics.map((topic) => (
              <Link
                key={topic.name}
                href={topic.href}
                className="inline-block px-4 py-2 text-sm rounded-lg border border-[var(--color-stone-200)] bg-white text-[var(--color-stone-800)] hover:border-[var(--color-moss-300)] hover:text-[var(--color-moss-700)] transition-colors"
              >
                {topic.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
