import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Link from "next/link";
import { getAllBlogs } from "@/lib/content/getAllBlogs";
import { parse, isValid, format } from "date-fns";

const WEB_PERFORMANCE_TAG = "web performance";

const topics = [
  {
    title: "Frontend Performance Architecture",
    description: "A model of elimination, efficiency, and scheduling for understanding what work the system makes users wait for.",
  },
  {
    title: "React Performance",
    description: "Memoisation, render optimisation, state boundaries, and avoiding unnecessary re-renders in component trees.",
  },
  {
    title: "Core Web Vitals",
    description: "LCP, INP, and CLS as diagnostic signals — understanding what they measure and how to improve them.",
  },
  {
    title: "Dashboard Performance",
    description: "Optimising data-heavy interfaces with virtualisation, progressive loading, and stale-while-revalidate patterns.",
  },
  {
    title: "Caching Strategies",
    description: "Stale-while-revalidate, placeholder data, request deduplication, and cache freshness trade-offs.",
  },
  {
    title: "Route Transitions",
    description: "Prefetching, persistent state across navigations, and eliminating redundant data fetching between routes.",
  },
  {
    title: "Rendering Performance",
    description: "Server components, streaming, hydration cost, and choosing the right rendering strategy for each surface.",
  },
  {
    title: "Third-Party Script Cost",
    description: "Auditing, deferring, and removing scripts that accumulate silently across teams and ownership boundaries.",
  },
  {
    title: "Performance Trade-offs in Fintech",
    description: "Balancing speed with freshness, compliance, and trust in high-stakes financial interfaces.",
  },
];

const relatedTopics = [
  { name: "Frontend Architecture", href: "/engineering/frontend-architecture" },
  { name: "React", href: "/blog/tag/react" },
  { name: "Software Architecture", href: "/engineering" },
  { name: "Fintech", href: "/blog/tag/fintech" },
];

async function getRelatedPosts() {
  const blogPosts = await getAllBlogs();
  return blogPosts
    .filter(post =>
      post.tags?.some((tag: string) => tag.toLowerCase() === WEB_PERFORMANCE_TAG)
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

export default async function WebPerformancePage() {
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
            Web Performance
          </h1>
          <Text className="text-lg max-w-3xl">
            Understanding what work the system makes users wait for, eliminating
            unnecessary work, making necessary work cheaper, and scheduling work
            out of the critical path.
          </Text>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <Text className="text-lg max-w-3xl mb-8">
            Frontend performance is not a checklist of optimisations. It is a way of
            understanding what work the system is doing, why it is doing it, and who
            is waiting for it. These articles explore performance as an architectural
            concern — from React rendering and hydration trade-offs to caching
            strategies, Core Web Vitals, and the organisational dynamics that make
            systems slow.
          </Text>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-8 text-[var(--color-stone-800)]">
            Featured Web Performance Articles
          </h2>
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
            Why Web Performance Matters
          </h2>
          <Text className="text-lg max-w-3xl">
            Performance is a property of the entire system, not a layer owned by
            frontend engineers. It affects conversion, trust, accessibility,
            support volume, and operational flow. In fintech especially, latency
            is not just a UX issue — it affects confidence in financial decisions,
            increases drop-off during regulated journeys, and creates hidden
            operational drag as internal tools become slower under pressure.
          </Text>
          <Text className="text-lg max-w-3xl mt-4">
            The best performance work is not about shaving milliseconds from a
            component. It is about understanding which work matters, which work
            is waste, and which trade-offs are acceptable for the product, the
            user, and the domain.
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
