import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Link from "next/link";
import { getAllBlogs } from "@/lib/content/getAllBlogs";
import { parse, isValid, format } from "date-fns";

const FRONTEND_ARCHITECTURE_TAG = "frontend architecture";

const topics = [
  {
    title: "Frontend System Design",
    description: "Designing frontend systems that remain understandable, adaptable, and safe to change as a product grows.",
  },
  {
    title: "React Architecture",
    description: "Component composition, state boundaries, server vs client components, and patterns that scale across teams.",
  },
  {
    title: "Component Boundaries",
    description: "Clear separation of concerns, public APIs vs internal implementation, and reducing coupling between surfaces.",
  },
  {
    title: "State Management",
    description: "Local state, shared state, server state, URL state — choosing the right model for each concern.",
  },
  {
    title: "Performance Architecture",
    description: "Elimination, efficiency, and scheduling as a mental model for frontend performance at scale.",
  },
  {
    title: "Caching Strategies",
    description: "Stale-while-revalidate, request deduplication, persistent state, and cache freshness trade-offs.",
  },
  {
    title: "Route Transitions",
    description: "Layout preservation, prefetching, persistent data across navigations, and reducing redundant work between routes.",
  },
  {
    title: "Hybrid Frontend Applications",
    description: "Combining server-rendered and client-rendered surfaces, micro-frontends, and gradual migration strategies.",
  },
  {
    title: "Frontend Complexity",
    description: "Understanding accidental vs essential complexity, and which abstractions are worth the cost.",
  },
  {
    title: "Design Systems",
    description: "Token architecture, component libraries, cross-team alignment, and preventing design system drift.",
  },
  {
    title: "Dashboard Architecture",
    description: "Data-heavy interfaces, progressive loading, widget composition, and performance under operational pressure.",
  },
  {
    title: "Technical Debt",
    description: "Identifying, communicating, and retiring architectural debt before it compounds across the system.",
  },
  {
    title: "Architecture Decision-Making",
    description: "Making trade-offs explicit, writing ADRs, and building shared understanding across engineering teams.",
  },
  {
    title: "Frontend Architecture in Fintech",
    description: "Regulated journeys, dashboard performance, data freshness requirements, and building trust through reliable interfaces.",
  },
];

const relatedTopics = [
  { name: "Web Performance", href: "/blog/tag/web-performance" },
  { name: "React", href: "/blog/tag/react" },
  { name: "Software Architecture", href: "/engineering" },
  { name: "Fintech", href: "/blog/tag/fintech" },
  { name: "State Management", href: "/blog/tag/state-management" },
];

async function getRelatedPosts() {
  const blogPosts = await getAllBlogs();
  return blogPosts
    .filter(post =>
      post.tags?.some((tag: string) => tag.toLowerCase() === FRONTEND_ARCHITECTURE_TAG)
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

export default async function FrontendArchitectureTagPage() {
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
            Frontend Architecture
          </h1>
          <Text className="text-lg max-w-3xl">
            Frontend architecture is not just about choosing a framework, folder
            structure, or state management library. It is about designing frontend
            systems that remain understandable, adaptable, performant, and safe to
            change as a product grows.
          </Text>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <Text className="text-lg max-w-3xl mb-8">
            These articles explore frontend architecture from the perspective of real
            production systems: React applications, fintech dashboards, customer
            journeys, hybrid frontend stacks, state management, caching, routing,
            component boundaries, performance trade-offs, and the organisational
            decisions that shape software over time.
          </Text>
          <Text className="text-lg max-w-3xl">
            The focus is on engineering judgement rather than rigid patterns. Good
            frontend architecture is not about applying the same solution everywhere.
            It is about understanding the context, making trade-offs explicit, and
            designing systems that reduce unnecessary complexity for the people
            building and using them.
          </Text>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-8 text-[var(--color-stone-800)]">
            Featured Frontend Architecture Articles
          </h2>
          <Text className="text-lg max-w-3xl mb-8">
            Explore articles on frontend system design, React architecture, performance
            architecture, state management, caching strategies, routing boundaries,
            dashboard design, and the trade-offs behind maintainable frontend systems.
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
                className="rounded-lg border border-[var(--color-stone-200)] bg-white p-6"
              >
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
          <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-4 text-[var(--color-stone-800)]">
            Why Frontend Architecture Matters
          </h2>
          <Text className="text-lg max-w-3xl">
            Frontend applications rarely become difficult to work with because of
            one bad decision. They usually become difficult through accumulation:
            one extra provider, one extra abstraction, one extra data dependency,
            one extra workaround, one extra route boundary, one extra state model,
            one extra component that knows too much.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            Each decision may look reasonable in isolation. The cost appears when
            those decisions interact.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            Good frontend architecture helps teams manage that cost. It gives
            engineers clearer boundaries, more predictable data flow, fewer hidden
            dependencies, better performance characteristics, and a stronger shared
            model of how the system behaves.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            For Senior and Principal frontend engineers, architecture is not only
            about writing cleaner code. It is about helping teams make better
            decisions. Which complexity belongs inside the module, and which
            complexity leaks to the caller? Which data should be local, shared,
            cached, or derived? Which work should happen on the client, server,
            edge, or in the background? Which abstractions are helping, and which
            are quietly becoming infrastructure debt?
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            Those questions matter because frontend architecture directly affects
            delivery speed, product quality, user experience, and team confidence.
          </Text>
        </Container>
      </section>

      <section className="py-12 bg-white">
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
