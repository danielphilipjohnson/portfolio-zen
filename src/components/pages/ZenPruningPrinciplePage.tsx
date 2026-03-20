import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";

export default function ZenPruningPrinciplePage() {
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
              Principle 3
            </p>
            <Text
              as="h1"
              variant="hero"
              weight="light"
              className="max-w-4xl text-[color:var(--color-stone-50)]"
            >
              Prune Systems with Care
            </Text>
            <Text className="mt-6 max-w-3xl text-[color:var(--color-stone-200)]">
              Systems stay healthy when growth is guided by steady
              simplification, not unchecked accumulation.
            </Text>

            <div className="mt-8 max-w-3xl rounded-2xl border border-[color:var(--color-moss-700)]/60 bg-[color:var(--color-stone-900)]/60 p-5 backdrop-blur-sm">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-moss-300)]">
                Core Idea
              </p>
              <p className="text-[color:var(--color-stone-100)]">
                Simplification is stewardship. Continuous pruning prevents
                complexity from becoming the dominant force in the codebase.
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
                Software systems rarely fail because they grow too slowly. More
                often, they fail because they grow without restraint.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                As products evolve, codebases accumulate layers of decisions
                made under different constraints: deadlines, changing product
                requirements, new team members, and emerging technologies.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                Each layer adds value at the time it is written, but over months
                and years those layers begin to obscure the original structure
                of the system. Without deliberate maintenance, complexity
                quietly becomes the dominant force in the codebase.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                In nature, trees grow continuously. Without pruning, branches
                compete for light and structure becomes tangled. Software needs
                the same discipline. Simplification is not destruction; it is
                stewardship.
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
                Why Software Accumulates Complexity
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Complexity is rarely the result of careless engineers. It is
                  usually the result of successful systems adapting to new
                  demands.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  A feature that was once simple becomes connected to additional
                  workflows. A service designed for one purpose begins to serve
                  several. Temporary abstractions become permanent
                  infrastructure.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Each decision makes sense in isolation. Over time, these
                  incremental additions compound and engineers spend more time
                  navigating structure than improving product outcomes.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Complexity does not disappear on its own. It must be reduced
                  intentionally.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Refactoring as Respect for the Codebase
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Refactoring is often treated as secondary work, done only when
                  there is spare time. In reality, it is one of the primary
                  ways systems remain sustainable.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Each time an engineer simplifies a confusing abstraction,
                  clarifies a boundary, or removes unnecessary code, they make
                  the system easier for future contributors to understand.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  This is an act of respect. Future engineers will not have full
                  historical context, so architecture must communicate intent on
                  its own.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Small improvements accumulate and prevent the slow decay that
                  leads to brittle systems.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                When to Remove Abstractions
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  One of the most common sources of complexity in mature
                  systems is unnecessary abstraction. Abstractions are valuable,
                  but they become harmful when they outlive their usefulness.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  A layer introduced for flexibility may no longer serve a real
                  purpose. A generic interface may now have only one
                  implementation. A framework may obscure straightforward logic.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Removing outdated abstractions can significantly simplify the
                  system. The key is recognizing when an abstraction has become
                  a liability rather than an asset.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Healthy engineering cultures question architectural choices,
                  even those once considered essential.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                The Role of Technical Debt
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Technical debt is often described as the cost of moving
                  quickly. In practice, it is better understood as deferred
                  maintenance.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Some debt is unavoidable, especially during experimentation.
                  The risk appears when debt is ignored indefinitely.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Unmanaged debt compounds like financial debt. Each feature
                  becomes harder to ship because engineers must navigate an
                  increasingly complex environment.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Disciplined teams avoid risky rewrites by pruning continuously:
                  refactoring, simplifying, and removing outdated patterns in
                  small increments.
                </Text>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
