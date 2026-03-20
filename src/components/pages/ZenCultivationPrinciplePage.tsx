import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";

export default function ZenCultivationPrinciplePage() {
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
              Principle 1
            </p>
            <Text
              as="h1"
              variant="hero"
              weight="light"
              className="max-w-4xl text-[color:var(--color-stone-50)]"
            >
              Cultivate Systems, Don&apos;t Rush Code
            </Text>
            <Text className="mt-6 max-w-3xl text-[color:var(--color-stone-200)]">
              Software architecture should be shaped over time through patient,
              intentional care, not rushed through short-term implementation
              pressure.
            </Text>

            <div className="mt-8 max-w-3xl rounded-2xl border border-[color:var(--color-moss-700)]/60 bg-[color:var(--color-stone-900)]/60 p-5 backdrop-blur-sm">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-moss-300)]">
                Core Idea
              </p>
              <p className="text-[color:var(--color-stone-100)]">
                Treat systems like bonsai: cultivate, prune, and guide growth so
                the architecture stays coherent as complexity increases.
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
                Modern software culture often celebrates speed. Ship quickly.
                Move fast. Deploy today and fix tomorrow. In early stages of a
                product this mindset can be useful, but when it becomes the
                default approach to engineering, systems slowly lose their
                shape.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                Software systems are not static artifacts. They behave more like
                living structures. They evolve through use, adaptation, and
                care. When treated only as a series of rapid implementations,
                they accumulate complexity that eventually overwhelms the teams
                responsible for maintaining them.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                A healthier way to think about software architecture is through
                cultivation.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                Just as a bonsai tree requires patience, careful pruning, and
                attention over time, software systems benefit from deliberate
                shaping. Architecture is not something created once during the
                design phase. It is something that develops gradually as the
                system grows.
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
                Why Software Systems Need Time to Mature
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Most meaningful software systems live for many years. Over
                  time they absorb new features, integrate with additional
                  services, and adapt to changing user needs. Each change
                  subtly alters the structure of the system.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  If those changes are made without reflection, complexity
                  compounds quickly. Dependencies multiply, boundaries blur, and
                  architectural intent becomes difficult to recognise.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Systems need time to mature because good structure rarely
                  appears in the first iteration. Early versions often
                  prioritise speed and experimentation. As the system grows,
                  engineers must gradually refine its shape.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  This maturation process is what turns an early prototype into
                  a reliable platform.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  The mistake many teams make is assuming architecture should be
                  finalised before development begins. In practice, architecture
                  emerges through cycles of building, observing, and refining.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Programming as Cultivation
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  The bonsai metaphor offers a useful way to think about this
                  process.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  A bonsai tree is not forced into shape all at once. It is
                  guided over time. Branches are pruned carefully. Growth is
                  redirected. The tree is allowed to develop while maintaining
                  its form.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Software systems benefit from the same approach.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Engineers shape systems through a series of small, intentional
                  actions:
                </Text>
                <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
                  <li>removing unnecessary complexity</li>
                  <li>improving boundaries between components</li>
                  <li>refining interfaces between services</li>
                  <li>simplifying abstractions that have grown unwieldy</li>
                </ul>
                <Text className="text-[color:var(--color-stone-700)]">
                  These changes are rarely dramatic. Most architectural
                  improvements happen through consistent maintenance rather than
                  sweeping rewrites.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Cultivation focuses on long-term health rather than immediate
                  appearance. A system that looks productive today but
                  accumulates hidden complexity will eventually slow the entire
                  organisation.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Architecture That Evolves Over Time
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  In healthy systems, architecture evolves alongside the
                  product.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  New requirements expose weaknesses in the current design.
                  Engineers respond by strengthening boundaries, clarifying
                  responsibilities between components, or introducing new
                  abstractions.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  This evolution is gradual. The system retains continuity while
                  adapting to new pressures.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  The goal is not to prevent change but to make change
                  manageable.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Architectural thinking therefore becomes a continuous
                  practice. It involves observing how the system behaves in
                  production, understanding where complexity accumulates, and
                  deciding where small interventions will have the greatest
                  effect.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  In this sense, architecture resembles gardening more than
                  construction.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                How Rushed Systems Collapse
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  When teams rush development without cultivating structure,
                  systems often exhibit predictable symptoms.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Dependencies become tangled as services interact without clear
                  boundaries. Components accumulate responsibilities beyond their
                  original purpose. Changes in one part of the system trigger
                  unexpected behaviour elsewhere.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Over time, the cost of modifying the system increases.
                  Engineers become hesitant to make improvements because the
                  risk of unintended consequences grows.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Eventually the system reaches a point where progress slows
                  dramatically. At that stage organisations often attempt a
                  large rewrite.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Yet many rewrites fail for the same reason the original system
                  degraded: they prioritise speed over cultivation.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Without continuous care, complexity returns.
                </Text>
              </div>
            </article>

            <article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-7 shadow-sm md:p-9">
              <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
                Designing Systems That Age Well
              </Text>
              <div className="space-y-4">
                <Text className="text-[color:var(--color-stone-700)]">
                  Systems that age well share several characteristics.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  They have clear boundaries between major components. Their
                  interfaces are simple enough that engineers can understand how
                  pieces interact. Responsibilities are distributed
                  intentionally rather than accumulating by accident.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Most importantly, the team responsible for the system sees
                  architecture as an ongoing responsibility.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Maintaining architectural clarity requires small but regular
                  acts of pruning. Removing unnecessary abstractions.
                  Simplifying workflows. Clarifying the intent of components
                  that have drifted from their original purpose.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  These activities may appear minor compared to new feature
                  development, yet they determine whether a system remains
                  adaptable over time.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  The goal is not perfection. No system is perfectly designed.
                  The goal is steady cultivation so that the system continues to
                  support the people building and using it.
                </Text>
                <Text className="text-[color:var(--color-stone-700)]">
                  Just like a bonsai tree, the shape of the system reflects the
                  care invested in its growth.
                </Text>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
