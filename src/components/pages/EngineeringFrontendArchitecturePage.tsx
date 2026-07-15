import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Link from "next/link";
import { getAllBlogs } from "@/lib/content/getAllBlogs";
import { parse, isValid, format } from "date-fns";
import { getFrontendArchitectureJsonLd } from "@/utils/jsonLd";
import StructuredData from "@/components/StructuredData";

const FRONTEND_ARCHITECTURE_TAG = "Frontend Architecture";

const topics = [
  {
    title: "Design Systems",
    description: "Component libraries, token architecture, Storybook workflows, and cross-team alignment.",
  },
  {
    title: "Component Architecture",
    description: "Composition patterns, state boundaries, server vs client components, and API design.",
  },
  {
    title: "Performance & Core Web Vitals",
    description: "Bundle optimization, rendering strategies, lazy loading, and metrics-driven decisions.",
  },
  {
    title: "Accessibility",
    description: "Semantic HTML, ARIA patterns, keyboard navigation, and screen reader support as architecture.",
  },
  {
    title: "Developer Experience",
    description: "Tooling, documentation, onboarding flows, and coding standards that scale teams.",
  },
];

async function getRelatedPosts() {
  const blogPosts = await getAllBlogs();
  return blogPosts
    .filter(post =>
      post.tags?.some((tag: string) => tag.toLowerCase() === FRONTEND_ARCHITECTURE_TAG.toLowerCase())
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

export default async function EngineeringFrontendArchitecturePage() {
  const relatedPosts = await getRelatedPosts();

  const jsonLd = getFrontendArchitectureJsonLd(
    relatedPosts.map(p => ({
      slug: p.slug,
      title: p.title,
      publishDate: p.publishDate,
      excerpt: p.excerpt,
    }))
  );

  return (
    <>
      <StructuredData data={jsonLd} id="frontend-architecture-jsonld" />
      <main className="min-h-screen bg-[var(--color-stone-50)]">
        <section className="pt-24 pb-12">
          <Container>
            <Link
              href="/engineering"
              className="mb-6 inline-block text-sm text-[var(--color-moss-600)] hover:text-[var(--color-moss-800)] transition-colors"
            >
              &larr; Back to Engineering
            </Link>
            <h1 className="text-4xl md:text-5xl tracking-tight leading-tight font-sans mb-4 text-[var(--color-stone-800)]">
              Frontend Architecture
            </h1>
          <Text className="text-lg max-w-3xl mb-6">
            Patterns, principles, and systems thinking for building frontend
            applications that scale across teams, devices, and years.
          </Text>
          <Text className="text-[var(--color-stone-600)] max-w-3xl">
            Frontend architecture is the set of decisions that determine how a user interface is structured, how state flows through components, how performance is maintained as complexity grows, and how teams collaborate on a shared codebase. This section collects writing on those decisions — what works, what breaks, and why.
          </Text>
          </Container>
        </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-4 text-[var(--color-stone-800)]">
            Topics
          </h2>
          <Text className="text-[var(--color-stone-600)] mb-8 max-w-3xl">
            Each topic explores a distinct area of frontend architecture — from the design decisions that shape component systems to the performance constraints that influence rendering strategy. These areas overlap in practice, but separating them helps clarify the trade-offs involved.
          </Text>
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

        <section className="py-12 bg-white">
          <Container>
            <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-8 text-[var(--color-stone-800)]">
              Related Writing
            </h2>
            {relatedPosts.length > 0 ? (
              <div className="space-y-6">
                {relatedPosts.map((post) => (
                  <article key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block rounded-lg border border-[var(--color-stone-200)] p-6 transition-colors hover:border-[var(--color-moss-300)]"
                    >
                      <h3 className="text-lg font-sans font-medium mb-1 group-hover:text-[var(--color-moss-700)] text-[var(--color-stone-800)]">
                        {post.title}
                      </h3>
                      <Text className="text-sm">{post.excerpt}</Text>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <Text className="text-[var(--color-stone-500)]">
                No related articles found.
              </Text>
            )}
          </Container>
        </section>
      </main>
    </>
  );
}
