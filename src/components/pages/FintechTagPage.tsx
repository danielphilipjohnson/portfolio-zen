import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Link from "next/link";
import { getAllBlogs } from "@/lib/content/getAllBlogs";
import { parse, isValid, format } from "date-fns";

const FINTECH_TAG = "fintech";

const topics = [
  {
    title: "Fintech Frontend Architecture",
    description: "Designing frontend systems for financial products where trust, accuracy, and timing are foundational concerns.",
  },
  {
    title: "Customer Application Journeys",
    description: "Keeping high-friction multi-step journeys clear, fast, and trustworthy across devices and network conditions.",
  },
  {
    title: "Internal Dashboards",
    description: "Building operational interfaces that stay usable under pressure, with progressive loading and clear data hierarchies.",
  },
  {
    title: "Affordability Checks",
    description: "Designing interfaces and data flows that help customers and internal teams navigate complex financial assessments.",
  },
  {
    title: "Document Uploads",
    description: "Reliable upload flows with progress visibility, error recovery, and clear state communication.",
  },
  {
    title: "Payments and Confirmation Flows",
    description: "Building interfaces where timing, accuracy, and clear confirmation states protect user trust.",
  },
  {
    title: "Data Freshness",
    description: "Understanding when stale data is acceptable and when freshness is a regulatory or trust requirement.",
  },
  {
    title: "Caching and Stale-While-Revalidate",
    description: "Applying SWR patterns in fintech contexts where the trade-off between speed and freshness varies by screen.",
  },
  {
    title: "Compliance-Aware UX",
    description: "Designing interfaces that meet regulatory requirements without sacrificing clarity or performance.",
  },
  {
    title: "Operational Workflows",
    description: "Supporting case handlers, brokers, and advisors with interfaces that reduce context switching and duplicated work.",
  },
  {
    title: "Trust and Latency",
    description: "Understanding how perceived performance affects confidence, conversion, and the user's sense of reliability.",
  },
  {
    title: "Frontend Performance in Fintech",
    description: "Elimination, efficiency, and scheduling applied to financial interfaces where milliseconds affect trust.",
  },
  {
    title: "State Management in Financial Products",
    description: "Managing application state across multi-step journeys with clear ownership, persistence, and recovery.",
  },
  {
    title: "React Dashboards",
    description: "Composing data-heavy interfaces with virtualisation, caching, and predictable update patterns.",
  },
  {
    title: "Architecture Trade-offs in Regulated Systems",
    description: "Making trade-offs visible across frontend, backend, product, compliance, and operations teams.",
  },
];

const questions = [
  "How do you keep high-friction customer journeys clear, fast, and trustworthy?",
  "What data can be cached, and what data needs stricter freshness guarantees?",
  "How do you design internal dashboards that stay usable under operational pressure?",
  "When does stale-while-revalidate improve responsiveness, and when does it create risk?",
  "How should frontend teams think about affordability checks, document uploads, payment states, and decision flows?",
  "How do you reduce repeated work across multi-step application journeys?",
  "How do route transitions, state management, and API design affect perceived performance?",
  "How do you make trade-offs visible across frontend, backend, product, compliance, and operations?",
  "How do you build financial interfaces that users can trust when the stakes are high?",
];

const relatedTopics = [
  { name: "Frontend Architecture", href: "/blog/tag/frontend-architecture" },
  { name: "Web Performance", href: "/blog/tag/web-performance" },
  { name: "React", href: "/blog/tag/react" },
  { name: "Software Architecture", href: "/engineering" },
  { name: "State Management", href: "/blog/tag/state-management" },
  { name: "Engineering Principles", href: "/blog/tag/engineering-principles" },
];

async function getRelatedPosts() {
  const blogPosts = await getAllBlogs();
  return blogPosts
    .filter(post =>
      post.tags?.some((tag: string) => tag.toLowerCase() === FINTECH_TAG)
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

export default async function FintechTagPage() {
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
            Fintech
          </h1>
          <Text className="text-lg max-w-3xl">
            Fintech software is not just another product category with financial
            data attached. It is software built around trust, accuracy, timing,
            regulation, and high-friction user journeys.
          </Text>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <Text className="text-lg max-w-3xl mb-8">
            These articles explore fintech engineering from the perspective of
            frontend architecture, web performance, customer application flows,
            internal dashboards, data freshness, state management, and the
            technical trade-offs behind reliable financial products.
          </Text>
          <Text className="text-lg max-w-3xl">
            The focus is on real production systems: applications where latency
            affects confidence, stale data can create risk, poor dashboard
            performance slows internal teams down, and small frontend decisions
            can influence conversion, support volume, operational flow, and user
            trust.
          </Text>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-8 text-[var(--color-stone-800)]">
            Featured Fintech Articles
          </h2>
          <Text className="text-lg max-w-3xl mb-8">
            Explore articles on frontend architecture, fintech dashboards, customer
            journeys, web performance, data freshness, caching strategies,
            application flows, compliance-aware interfaces, and engineering
            trade-offs in financial products.
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
            Why Fintech Engineering Matters
          </h2>
          <Text className="text-lg max-w-3xl">
            Fintech products operate in a different kind of pressure.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            A slow page is not always just a slow page. It can make a customer
            hesitate during an application, refresh during a document upload, lose
            confidence in a payment confirmation, or contact support because the
            system feels uncertain.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            For internal teams, slow or confusing dashboards can create operational
            drag. Case handlers, support teams, brokers, or advisors may need to
            move quickly between applications, documents, customer records,
            affordability data, and decision states. When the interface makes them
            wait, the cost is not only technical. It becomes repeated context
            switching, duplicated work, and slower customer outcomes.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            Good fintech engineering means designing with these pressures in mind.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            It means understanding where speed matters, where accuracy matters more,
            where freshness is critical, and where the interface can safely reuse,
            cache, defer, or background work. It means treating frontend architecture
            as part of the trust layer of the product, not just the presentation layer.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            The best fintech systems do not only process financial data correctly.
            They help users and internal teams understand what is happening, what has
            changed, what is safe to act on, and what still needs attention.
          </Text>
          <Text className="text-lg max-w-3xl mt-4 font-medium text-[var(--color-stone-800)]">
            That is where frontend engineering becomes part of product reliability.
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
