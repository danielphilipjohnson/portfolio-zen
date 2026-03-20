import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";

export default function ZenUnderstandingPrinciplePage() {
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
              Principle 4
            </p>
            <Text
              as="h1"
              variant="hero"
              weight="light"
              className="max-w-4xl text-[color:var(--color-stone-50)]"
            >
              Understand Before You Build
            </Text>
            <Text className="mt-6 max-w-3xl text-[color:var(--color-stone-200)]">
              Clarity before implementation creates systems that are simpler,
              safer, and easier to evolve.
            </Text>

            <div className="mt-8 max-w-3xl rounded-2xl border border-[color:var(--color-moss-700)]/60 bg-[color:var(--color-stone-900)]/60 p-5 backdrop-blur-sm">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-moss-300)]">
                Core Idea
              </p>
              <p className="text-[color:var(--color-stone-100)]">
                Understanding constraints and trade-offs before coding produces
                architecture that remains resilient under growth.
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
                Modern engineering environments often reward speed. New
                features appear quickly, pull requests are merged rapidly, and
                systems evolve through constant iteration.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                While this pace can be valuable, it also creates a subtle risk:
                building solutions before fully understanding the problem.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                In Zen practice, stillness is not inactivity. It is the moment
                of clarity before action. Engineering benefits from the same
                discipline.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                Understanding is not a delay in progress. It is the foundation
                of thoughtful construction.
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
                Why Rushed Engineering Decisions Fail
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Rushed decisions rarely fail immediately. They fail gradually.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  A system designed without sufficient understanding may work in
                  early stages, but assumptions break down as it grows.
                  Performance limits appear, boundaries blur, and new
                  requirements demand complex workarounds.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Engineering decisions are durable. Once a pattern is
                  introduced, dependencies form around it and changing direction
                  becomes expensive.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Taking time to understand the system first prevents fragile
                  foundations from forming.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Understanding the Real Problem
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Many engineering challenges look simple on the surface but
                  reveal deeper complexity when examined.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Understanding the real problem requires stepping back from
                  implementation details and considering the wider context:
                </Text>
                <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
                  <li>How does this system interact with other services?</li>
                  <li>
                    What constraints exist around performance, reliability, or
                    compliance?
                  </li>
                  <li>How might this design behave as the system grows?</li>
                </ul>
                <Text className="text-[color:var(--color-stone-700)]">
                  Before shaping the system, the engineer studies its
                  environment.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Architecture Trade-Off Thinking
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Every architectural decision involves trade-offs.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  A design optimized for flexibility may add complexity. A
                  performance-first design may reduce ease of change. A
                  distributed system may increase resilience while adding
                  operational overhead.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Strong decisions come from understanding which trade-offs are
                  acceptable for a specific context.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Architecture does not eliminate trade-offs. It makes them
                  explicit.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Designing Before Implementing
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Thoughtful engineers rarely start by coding immediately. They
                  sketch the system first through diagrams, documents, or
                  discussions.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  This clarifies boundaries and reveals risks before
                  implementation. Problems that appear complex in code often
                  simplify when viewed at system level.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  The goal of design is not to predict everything. It is to
                  develop enough understanding that the first implementation
                  step moves in the right direction.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  In Zen philosophy, stillness precedes movement. In
                  engineering, understanding precedes building.
                </Text>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
