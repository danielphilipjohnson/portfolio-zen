import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";

export default function ZenIntentionPrinciplePage() {
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
              Principle 2
            </p>
            <Text
              as="h1"
              variant="hero"
              weight="light"
              className="max-w-4xl text-[color:var(--color-stone-50)]"
            >
              Less Code. More Intention.
            </Text>
            <Text className="mt-6 max-w-3xl text-[color:var(--color-stone-200)]">
              Write less code, but make every line count. Architecture should
              express purpose, not noise.
            </Text>

            <div className="mt-8 max-w-3xl rounded-2xl border border-[color:var(--color-moss-700)]/60 bg-[color:var(--color-stone-900)]/60 p-5 backdrop-blur-sm">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-moss-300)]">
                Core Idea
              </p>
              <p className="text-[color:var(--color-stone-100)]">
                Healthy systems scale when engineers reduce surface area,
                introduce abstractions slowly, and optimize for clarity.
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
                Modern software development often celebrates output: more
                features, more abstractions, more frameworks, more code.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                But over time, experienced engineers begin to notice something
                uncomfortable: the systems that survive longest are rarely the
                most complex ones. They are the ones designed with intention.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                A healthy codebase does not grow by accumulating code. It grows
                by expressing ideas clearly with the smallest possible surface
                area.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                Intentional engineering is not about minimalism for its own
                sake. It is about building systems where architecture expresses
                purpose rather than noise.
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
                Why More Code Often Means More Problems
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  In many engineering teams, complexity does not appear
                  suddenly. It accumulates. A helper function becomes a utility
                  library. A simple module becomes a layered abstraction. A
                  feature becomes a framework.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Each decision may be justified in isolation, but over time
                  the system becomes harder to understand.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  The real cost of excess code is cognitive load.
                </Text>
                <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
                  <li>another concept developers must understand</li>
                  <li>another dependency that must be maintained</li>
                  <li>another place where bugs can hide</li>
                </ul>
                <Text className="text-[color:var(--color-stone-700)]">
                  Eventually the codebase stops communicating intent and starts
                  communicating history. Engineers are no longer reading a
                  design. They are deciphering an archaeological record of
                  decisions.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                The Cost of Over-Abstraction
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Abstraction is one of the most powerful tools in software
                  design, but it is easy to misuse. Many systems suffer not
                  from a lack of abstraction but from too much of it.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Excessive abstraction often appears as:
                </Text>
                <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
                  <li>generic utility layers with unclear purpose</li>
                  <li>premature frameworks for hypothetical future needs</li>
                  <li>deeply nested architecture that obscures behavior</li>
                </ul>
                <Text className="text-[color:var(--color-stone-700)]">
                  In these systems, engineers spend more time navigating the
                  structure than understanding the logic.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Intentional architecture asks one question before adding
                  abstraction: does this make the system easier to understand
                  today?
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Simple Systems Scale Better
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  There is a common belief that simple systems are fragile and
                  complexity is required for scale. In practice, the opposite is
                  often true.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Systems that scale successfully tend to share:
                </Text>
                <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
                  <li>clear boundaries between components</li>
                  <li>predictable behaviour</li>
                  <li>minimal hidden dependencies</li>
                  <li>straightforward execution paths</li>
                </ul>
                <Text className="text-[color:var(--color-stone-700)]">
                  These qualities emerge from simplicity. Complex systems may
                  look powerful initially, but they often become brittle under
                  growth. Simple systems adapt and leave room for evolution.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Designing Intentional Architecture
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Intentional architecture is less about rigid rules and more
                  about disciplined thinking. Engineers focus on expressing
                  system purpose clearly through structure.
                </Text>
                <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
                  <li>Prioritize clarity over cleverness</li>
                  <li>Introduce abstractions slowly</li>
                  <li>Reduce surface area with smaller APIs and boundaries</li>
                  <li>Design for humans first</li>
                </ul>
                <Text className="text-[color:var(--color-stone-700)]">
                  These practices encourage deliberate systems, not accidental
                  ones. The result is software that communicates purpose rather
                  than obscuring it.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                The Principle in Practice
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Less Code. More Intention. is not a call for minimalism. It
                  is a call for deliberate engineering.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  When code expresses intent clearly:
                </Text>
                <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
                  <li>onboarding becomes easier</li>
                  <li>debugging becomes faster</li>
                  <li>architectural evolution becomes safer</li>
                </ul>
                <Text className="text-[color:var(--color-stone-700)]">
                  Over time, the codebase remains understandable even as it
                  grows. Write less, but design more carefully.
                </Text>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
