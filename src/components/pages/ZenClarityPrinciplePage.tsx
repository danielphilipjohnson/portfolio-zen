import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";

export default function ZenClarityPrinciplePage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-stone-50)] pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.png"
            alt="Textured zen garden background"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[color:var(--color-stone-950)]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--color-stone-950)]/20 to-[color:var(--color-stone-950)]/80" />
        </div>

        <Container>
          <div className="relative z-10 pb-20 pt-36 md:pb-24 md:pt-44">
            <Link
              href="/zen"
              className="mb-8 inline-block text-sm text-[color:var(--color-stone-200)] underline decoration-[color:var(--color-moss-400)] underline-offset-4 transition-colors hover:text-white"
            >
              Back to Zen Principles
            </Link>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--color-moss-300)]">
              Principle 7
            </p>
            <Text
              as="h1"
              variant="hero"
              weight="light"
              className="max-w-4xl text-[color:var(--color-stone-50)]"
            >
              Clarity Scales Across Teams
            </Text>
            <Text className="mt-6 max-w-3xl text-[color:var(--color-stone-200)]">
              As systems and teams grow, clarity becomes the architecture
              property that preserves momentum.
            </Text>

            <div className="mt-8 max-w-3xl rounded-2xl border border-[color:var(--color-moss-700)]/60 bg-[color:var(--color-stone-900)]/60 p-5 backdrop-blur-sm">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-moss-300)]">
                Core Idea
              </p>
              <p className="text-[color:var(--color-stone-100)]">
                Clear boundaries, understandable systems, and explicit ownership
                let engineering organizations scale without chaos.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="-mt-8 py-10 relative z-10">
        <Container>
          <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-10">
            <div className="space-y-4">
              <Text className="text-[color:var(--color-stone-700)]">
                A small engineering team can survive a surprising amount of
                complexity because context is shared through memory and
                conversation.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                As teams grow, that informal knowledge fades. New engineers
                join, projects expand, and multiple teams work in parallel.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                At that point architecture must do more than support
                functionality. It must support collaboration.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                Clarity becomes the most important property of the system.
              </Text>
            </div>
          </article>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="space-y-10">
            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Why Team Complexity Breaks Systems
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Many issues attributed to technology are actually coordination
                  problems.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  As more engineers contribute to the same codebase, unclear
                  dependencies and ambiguous ownership create hesitation.
                  Engineers slow down because they fear breaking another team’s
                  work.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  The system may still run technically, but progress degrades
                  because architecture no longer supports collaboration.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Large systems fail not only from technical complexity, but
                  from human complexity overwhelming them.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Architecture That Supports Collaboration
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Architecture has a social role in addition to performance and
                  reliability. It shapes how teams interact with the system and
                  with each other.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Clear component boundaries, explicit interfaces, and defined
                  ownership allow teams to work independently without constant
                  cross-team coordination.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  When architecture supports collaboration, engineers can focus
                  on improving their area while trusting surrounding components.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  That trust is what enables organizations to scale engineering
                  effort.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Designing Understandable Systems
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Clarity starts with understandability.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  A new engineer should quickly answer:
                </Text>
                <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
                  <li>What does this component do?</li>
                  <li>How does it interact with the rest of the system?</li>
                  <li>Where should new behavior be implemented?</li>
                </ul>
                <Text className="text-[color:var(--color-stone-700)]">
                  If these questions require deep investigation, the architecture
                  is already too complex.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Straightforward patterns, clear intent, and practical
                  documentation help shared understanding spread across teams.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Engineering Clarity as Leadership
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Clarity does not emerge automatically. It is cultivated by
                  engineers who prioritize simplicity and shared understanding.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Technical leaders influence this through architecture
                  decisions, standards, and examples: clear abstractions, good
                  boundaries, and well-documented systems.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  The result is an environment where engineers can contribute
                  confidently, collaborate effectively, and scale without chaos.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  In engineering organizations, clarity of systems is what keeps
                  teams calm and focused as complexity grows.
                </Text>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
