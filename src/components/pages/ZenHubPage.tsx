import Link from "next/link";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";

interface PrincipleCard {
  id: string;
  label: string;
  title: string;
  description: string;
  deepDiveHref?: string;
}

const principleCards: PrincipleCard[] = [
  {
    id: "cultivation",
    label: "Principle 01",
    title: "Cultivate, do not rush",
    description:
      "Observe systems like living bonsai: shape with patience, presence, and continuous care.",
    deepDiveHref: "/zen/cultivate-systems-dont-rush-code",
  },
  {
    id: "intention",
    label: "Principle 02",
    title: "Intention over volume",
    description:
      "Favor fewer, clearer abstractions so the codebase breathes with purpose.",
    deepDiveHref: "/zen/less-code-more-intention",
  },
  {
    id: "pruning",
    label: "Principle 03",
    title: "Prune with respect",
    description:
      "Ask what can be simplified today to honour tomorrow’s contributors.",
    deepDiveHref: "/zen/prune-systems-with-care",
  },
  {
    id: "stillness",
    label: "Principle 04",
    title: "Stillness guides action",
    description:
      "Pause to understand constraints and consequences before shipping.",
    deepDiveHref: "/zen/understand-before-you-build",
  },
  {
    id: "calm-software",
    label: "Principle 05",
    title: "Calm is a feature",
    description:
      "Design flows that feel predictable, supportive, and quietly confident.",
    deepDiveHref: "/zen/calm-software-builds-trust",
  },
  {
    id: "long-term",
    label: "Principle 06",
    title: "Think in seasons",
    description:
      "Favor longevity and maintainability so teams can grow with the system.",
    deepDiveHref: "/zen/design-for-the-long-term",
  },
  {
    id: "why-it-matters",
    label: "Principle 07",
    title: "Clarity for the whole team",
    description: "Lead with simplicity so chaos has less room to grow.",
    deepDiveHref: "/zen/clarity-scales-across-teams",
  },
];

const relatedLinks = [
  { href: "/engineering", label: "Engineering Hub" },
  { href: "/engineering/frontend-architecture", label: "Frontend Architecture" },
  { href: "/engineering/ai-systems", label: "AI Systems" },
  { href: "/engineering/ai-security", label: "AI Security" },
  { href: "/engineering/distributed-systems", label: "Distributed Systems" },
];

export default function ZenHubPage() {
  return (
    <main className="bg-[color:var(--color-stone-50)] pb-20 pt-28">
      <section className="py-12">
        <Container>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--color-moss-700)]">
            Engineering Philosophy
          </p>
          <Text
            as="h1"
            variant="h1"
            weight="light"
            className="mb-6 text-[color:var(--color-stone-900)]"
          >
            Zen Principles for Software Engineering
          </Text>

          <blockquote className="mb-2 border-l-4 border-[color:var(--color-moss-400)] bg-white px-5 py-4 italic text-[color:var(--color-stone-800)]">
            “Perfection is achieved not when there is nothing more to add, but
            when there is nothing left to take away.”
          </blockquote>
          <p className="mb-6 text-sm text-[color:var(--color-stone-600)]">
            — Antoine de Saint-Exupéry
          </p>

          <div className="space-y-4">
            <Text className="text-[color:var(--color-stone-700)]">
              Software engineering is often approached as a process of adding
              more: more features, more abstractions, more layers, more
              complexity. This page explores a different approach.
            </Text>
            <Text className="text-[color:var(--color-stone-700)]">
              Inspired by Zen, bonsai, and long-term systems thinking, these
              principles shape how I approach software architecture, frontend
              engineering, system design, and product development.
            </Text>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-8 shadow-sm md:p-10">
            <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
              A Root Philosophy
            </Text>
            <div className="space-y-4">
              <Text className="text-[color:var(--color-stone-700)]">
                This page is the foundation of how I think about software
                engineering. From it branch my views on frontend architecture,
                state management, user experience, system design, performance,
                and resilience.
              </Text>
              <Text className="text-[color:var(--color-stone-700)]">
                I do not approach software as something to build quickly and
                abandon. I approach it more like a bonsai: shaped over time,
                guided with care, and improved through deliberate pruning.
              </Text>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="mb-8">
            <Text as="h2" variant="h3" className="mb-3 text-[color:var(--color-stone-900)]">
              Seven Principles of Calm Software
            </Text>
            <Text className="text-[color:var(--color-stone-700)]">
              These principles summarise the engineering philosophy behind this
              page. Each one links to a deeper section below.
            </Text>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {principleCards.map((card) => (
              <article
                key={card.id}
                className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm"
              >
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-stone-500)]">
                  {card.label}
                </p>
                <Text as="h3" variant="h4" className="mb-2 text-[color:var(--color-stone-900)]">
                  {card.title}
                </Text>
                <p className="mb-4 text-sm text-[color:var(--color-stone-700)]">
                  {card.description}
                </p>
                <a
                  href={`#${card.id}`}
                  className="text-sm font-medium text-[color:var(--color-water-700)] underline decoration-[color:var(--color-water-300)] underline-offset-4 transition-colors hover:text-[color:var(--color-water-800)]"
                >
                  Read principle
                </a>
                {card.deepDiveHref && (
                  <div className="mt-2">
                    <Link
                      href={card.deepDiveHref}
                      className="text-sm font-medium text-[color:var(--color-water-700)] underline decoration-[color:var(--color-water-300)] underline-offset-4 transition-colors hover:text-[color:var(--color-water-800)]"
                    >
                      Deep dive
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="cultivation" className="py-12">
        <Container>
          <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
            Programming as Cultivation, Not Construction
          </Text>
          <div className="space-y-4">
            <Text className="text-[color:var(--color-stone-700)]">
              A bonsai is not rushed. It is shaped gradually, with restraint,
              patience, and respect for natural form. Programming, to me, is
              the same.
            </Text>
            <Text className="text-[color:var(--color-stone-700)]">
              Software is not just assembled. It is cultivated. Systems grow,
              requirements shift, and codebases take on pressure from the
              environments around them.
            </Text>
          </div>
        </Container>
      </section>

      <section id="intention" className="bg-white py-12">
        <Container>
          <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
            Less Code. More Intention.
          </Text>
          <Text className="mb-4 text-[color:var(--color-stone-700)]">
            Zen teaches that clarity comes from removal, not addition. In
            software engineering, that often means resisting the urge to
            overbuild.
          </Text>
          <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
            <li>Fewer abstractions, used deliberately</li>
            <li>Smaller components with clear responsibilities</li>
            <li>Simple data flows that are easy to reason about</li>
            <li>Decisions made consciously, not reactively</li>
          </ul>
        </Container>
      </section>

      <section id="pruning" className="py-12">
        <Container>
          <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
            Pruning Is as Important as Growth
          </Text>
          <Text className="mb-4 text-[color:var(--color-stone-700)]">
            A bonsai grows continuously, but it must also be pruned. Software
            is no different.
          </Text>
          <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
            <li>What no longer serves the system?</li>
            <li>What added value once, but now adds friction?</li>
            <li>What can be simplified without losing meaning?</li>
          </ul>
        </Container>
      </section>

      <section id="stillness" className="bg-white py-12">
        <Container>
          <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
            Stillness Before Action
          </Text>
          <Text className="mb-4 text-[color:var(--color-stone-700)]">
            Zen practice emphasises stillness before movement. In engineering,
            that means understanding before implementation.
          </Text>
          <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
            <li>The real problem, not just the requested solution</li>
            <li>The technical and product constraints of the system</li>
            <li>The future cost of today’s decisions</li>
          </ul>
        </Container>
      </section>

      <section id="calm-software" className="py-12">
        <Container>
          <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
            Software That Feels Calm to Use
          </Text>
          <Text className="mb-4 text-[color:var(--color-stone-700)]">
            This philosophy extends beyond code and into user experience. I
            care deeply about software that feels predictable, understandable,
            and respectful of the person using it.
          </Text>
          <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
            <li>Predictable behaviour</li>
            <li>Clear feedback</li>
            <li>Interfaces that do not fight the user</li>
            <li>Systems that fail gracefully</li>
          </ul>
        </Container>
      </section>

      <section id="long-term" className="bg-white py-12">
        <Container>
          <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
            A Long-Term View
          </Text>
          <Text className="mb-4 text-[color:var(--color-stone-700)]">
            A bonsai is shaped with years in mind. I design software the same
            way.
          </Text>
          <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
            <li>Longevity over trends</li>
            <li>Maintainability over cleverness</li>
            <li>Systems designed for teams, not just individuals</li>
          </ul>
        </Container>
      </section>

      <section id="why-it-matters" className="py-12">
        <Container>
          <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
            Why This Matters
          </Text>
          <Text className="mb-4 text-[color:var(--color-stone-700)]">
            In fast-moving teams and growing companies, software can become
            chaotic very quickly.
          </Text>
          <ul className="list-disc space-y-2 pl-6 text-[color:var(--color-stone-800)]">
            <li>Clarity where there is noise</li>
            <li>Focus where there is overload</li>
            <li>Simplicity where there is unnecessary complexity</li>
          </ul>
        </Container>
      </section>

      <section className="border-t border-[color:var(--color-stone-200)] bg-white py-12">
        <Container>
          <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
            How These Principles Show Up in Engineering
          </Text>
          <ul className="space-y-2">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[color:var(--color-water-700)] underline decoration-[color:var(--color-water-300)] underline-offset-4 transition-colors hover:text-[color:var(--color-water-800)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
