import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";

export default function ZenCalmSoftwarePrinciplePage() {
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
              Principle 5
            </p>
            <Text
              as="h1"
              variant="hero"
              weight="light"
              className="max-w-4xl text-[color:var(--color-stone-50)]"
            >
              Calm Software Builds Trust
            </Text>
            <Text className="mt-6 max-w-3xl text-[color:var(--color-stone-200)]">
              Predictable behaviour, clear feedback, and resilient interfaces
              make software feel dependable.
            </Text>

            <div className="mt-8 max-w-3xl rounded-2xl border border-[color:var(--color-moss-700)]/60 bg-[color:var(--color-stone-900)]/60 p-5 backdrop-blur-sm">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-moss-300)]">
                Core Idea
              </p>
              <p className="text-[color:var(--color-stone-100)]">
                Calm interfaces reduce friction, increase confidence, and build
                trust through consistency under real-world conditions.
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
                Most software is judged not by how impressive it appears, but by
                how it behaves when people rely on it.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                A financial dashboard that loads consistently. A form that never
                surprises the user. A system that responds clearly when
                something goes wrong. These experiences rarely attract
                attention, yet they shape how users perceive reliability.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                Calm software does not demand constant attention. It behaves in
                ways that feel stable, predictable, and supportive.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                Calm is not accidental. It emerges from thoughtful architecture.
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
                What Calm Software Feels Like
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  When software is calm, users rarely think about the interface
                  itself. Their attention stays on the task.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Actions behave as expected. Feedback appears immediately.
                  Errors are explained clearly instead of surfacing as
                  mysterious failures.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  This experience feels effortless, but it depends on consistent
                  component behaviour, predictable state management, and clear
                  feedback loops.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Why Predictability Matters
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Unpredictable software creates cognitive friction.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Inconsistent buttons, unreliable loading states, and vague
                  error messages force users to pause and re-evaluate each step.
                  Those pauses accumulate into frustration.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Predictability reduces friction. Consistent interaction
                  patterns help users form a mental model so outcomes feel
                  understandable and expected.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Consistency is not a visual preference. It is a trust-building
                  mechanism.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Designing Resilient Interfaces
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Calm systems handle failure gracefully. Real software runs in
                  unpredictable conditions: networks fail, services slow down,
                  and data arrives late.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Resilient interfaces anticipate this reality. They provide
                  clear loading states, meaningful error feedback, and recovery
                  paths that let users continue without losing context.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Even when systems struggle underneath, the experience remains
                  controlled and understandable.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Frontend Architecture and User Trust
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Behind every calm interface is a structured frontend system.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Component libraries drive consistency, design systems define
                  interaction patterns, and state management prevents conflicting
                  UI updates.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  With strong foundations, teams can add features without
                  introducing behavioural drift. The product grows while
                  preserving trust.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Calm software rarely announces itself. It simply works, and
                  that quiet reliability is one of the most valuable properties
                  a system can have.
                </Text>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
