import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";

export default function ZenLongTermPrinciplePage() {
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
              Principle 6
            </p>
            <Text
              as="h1"
              variant="hero"
              weight="light"
              className="max-w-4xl text-[color:var(--color-stone-50)]"
            >
              Design for the Long Term
            </Text>
            <Text className="mt-6 max-w-3xl text-[color:var(--color-stone-200)]">
              Strong systems are built to evolve across changing teams,
              requirements, and technologies.
            </Text>

            <div className="mt-8 max-w-3xl rounded-2xl border border-[color:var(--color-moss-700)]/60 bg-[color:var(--color-stone-900)]/60 p-5 backdrop-blur-sm">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-moss-300)]">
                Core Idea
              </p>
              <p className="text-[color:var(--color-stone-100)]">
                Think in seasons: prioritize longevity, maintainability, and
                adaptability over short-term optimization.
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
                Many systems are built as if they will be temporary. Deadlines
                encourage quick decisions, prototypes evolve into production,
                and teams assume improvements can come later.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                But successful software usually lives far longer than expected.
                A system built today may still support users in five or ten
                years.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                Teams change, requirements evolve, and technologies shift.
                Systems designed only for immediate needs struggle to survive
                these transitions.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                Architecture should be designed not just for this moment, but
                for the seasons the system will pass through.
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
                Why Short-Term Engineering Fails
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Short-term thinking often creates fragile systems.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  A quick solution can become a long-term liability. Tight
                  coupling makes changes difficult. Hidden dependencies trigger
                  unexpected failures. Early performance assumptions stop
                  holding as scale increases.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  These issues appear gradually as architecture decisions spread
                  through the codebase and become expensive to reverse.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Strong decisions consider not only whether something works
                  now, but whether it remains workable as the system grows.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Longevity in Software Architecture
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Longevity is not perfect prediction. It is the ability to
                  adapt when conditions change.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Clear service boundaries, defined interfaces, and modular
                  components let parts evolve independently without destabilizing
                  the whole system.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Simpler systems with fewer assumptions are easier to evolve
                  than those built on dense interdependencies.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  The goal is not to avoid change. It is to make change
                  manageable.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Maintainability as a Design Principle
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Maintainability does not emerge automatically after shipping.
                  It must be designed from the start.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  In maintainable systems, engineers can understand component
                  interactions, make safe changes, and diagnose issues without
                  excessive investigation.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Clarity over cleverness, explicit interfaces, and constrained
                  dependencies reduce ripple effects and keep systems
                  understandable.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Teams working in such systems spend less energy fighting
                  complexity and more energy improving product outcomes.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Building Systems That Age Well
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Systems that age well often become easier to work with over
                  time, not harder.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  This happens when teams continuously refine architecture,
                  remove unnecessary complexity, and maintain strong boundaries
                  between components.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  New engineers ramp faster, changes ship with less fear, and
                  improvements accumulate naturally without disruptive rewrites.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Longevity comes from a mindset that values sustainability over
                  speed. In software architecture, thinking in seasons builds
                  systems that remain useful long after the original code is
                  written.
                </Text>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
