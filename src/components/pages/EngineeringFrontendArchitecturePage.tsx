import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Link from "next/link";
import { getAllBlogs } from "@/lib/content/getAllBlogs";
import { parse, isValid, format } from "date-fns";

// ! consider its use
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

  return (
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
          <Text className="text-lg max-w-3xl">
            Patterns, principles, and systems thinking for building frontend
            applications that scale across teams, devices, and years.
          </Text>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl md:text-3xl tracking-tight font-sans mb-8 text-[var(--color-stone-800)]">
            Topics
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
  );
}
