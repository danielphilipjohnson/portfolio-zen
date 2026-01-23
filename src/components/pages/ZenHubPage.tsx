import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import Quote from "@/components/ui/Quote";
import SectionHeader from "@/components/ui/SectionHeader";
import ZenHero from "@/components/zen/ZenHero";
import { cn } from "@/lib/utils";

interface ZenSectionBlock {
  type: "paragraph" | "list";
  content?: string;
  title?: string;
  items?: string[];
  variant?: "default" | "questions";
}

interface ZenSection {
  id: string;
  title: string;
  blocks: ZenSectionBlock[];
}

const sections: ZenSection[] = [
  {
    id: "cultivation",
    title: "Programming as Cultivation, Not Construction",
    blocks: [
      {
        content:
          "I don't approach software as something to build quickly and abandon. I approach it the way one tends a bonsai.",
        type: "paragraph",
      },
      {
        content:
          "A bonsai is not rushed. It is shaped over time, with restraint, patience, and respect for natural form.",
        type: "paragraph",
      },
      { content: "Programming, to me, is the same.", type: "paragraph" },
      {
        content:
          "Good systems aren't forced into shape. They are observed, guided, and carefully pruned.",
        type: "paragraph",
      },
    ],
  },
  {
    id: "intention",
    title: "Less Code. More Intention.",
    blocks: [
      {
        content: "Zen teaches that clarity comes from removal, not addition.",
        type: "paragraph",
      },
      { content: "In my work, this shows up as:", type: "paragraph" },
      {
        type: "list",
        items: [
          "Fewer abstractions, used deliberately",
          "Smaller components with clear responsibilities",
          "Simple data flows that are easy to reason about",
          "Decisions made consciously, not reactively",
        ],
      },
      {
        content:
          "I believe complexity is something you earn, not something you start with.",
        type: "paragraph",
      },
      {
        content:
          "When a system feels calm to work in, it's usually because unnecessary noise has been removed.",
        type: "paragraph",
      },
    ],
  },
  {
    id: "pruning",
    title: "Pruning Is as Important as Growth",
    blocks: [
      {
        content:
          "A bonsai grows continuously, but it must also be pruned. Software is no different.",
        type: "paragraph",
      },
      { content: "I regularly ask:", type: "paragraph" },
      {
        type: "list",
        variant: "questions",
        items: [
          "What no longer serves the system?",
          "What added value once, but now adds friction?",
          "What can be simplified without losing meaning?",
        ],
      },
      {
        content:
          "Refactoring isn't a clean-up task. It's a form of respect for the codebase and for the people who will work in it next.",
        type: "paragraph",
      },
    ],
  },
  {
    id: "stillness",
    title: "Stillness Before Action",
    blocks: [
      {
        content: "Zen practice emphasises stillness before movement.",
        type: "paragraph",
      },
      {
        content: "Before writing code, I spend time understanding:",
        type: "paragraph",
      },
      {
        type: "list",
        items: [
          "The real problem (not just the ticket)",
          "The constraints of the system",
          "The future cost of today's decisions",
        ],
      },
      {
        content:
          "This leads to fewer rewrites, fewer regrets, and calmer execution.",
        type: "paragraph",
      },
      {
        content:
          "When the direction is clear, implementation becomes almost effortless.",
        type: "paragraph",
      },
    ],
  },
  {
    id: "calm-software",
    title: "Software That Feels Calm to Use",
    blocks: [
      {
        content: "The philosophy extends beyond code and into user experience.",
        type: "paragraph",
      },
      { content: "I care deeply about:", type: "paragraph" },
      {
        type: "list",
        items: [
          "Predictable behaviour",
          "Clear feedback",
          "Interfaces that do not fight the user",
          "Systems that fail gracefully",
        ],
      },
      {
        content:
          "If a user feels confused or rushed, something upstream is out of balance. Calm software invites trust.",
        type: "paragraph",
      },
    ],
  },
  {
    id: "long-term",
    title: "A Long-Term View",
    blocks: [
      {
        content:
          "A bonsai is shaped with years in mind. I design software the same way:",
        type: "paragraph",
      },
      {
        type: "list",
        items: [
          "With longevity over trends",
          "With maintainability over cleverness",
          "With teams in mind, not just individual brilliance",
        ],
      },
      {
        content:
          "The goal isn't to impress in the moment. It's to create systems that age well.",
        type: "paragraph",
      },
    ],
  },
  {
    id: "why-it-matters",
    title: "Why This Matters",
    blocks: [
      {
        content:
          "In fast-moving teams and growing companies, it's easy for software to become chaotic.",
        type: "paragraph",
      },
      { content: "My zen-inspired approach brings:", type: "paragraph" },
      {
        type: "list",
        items: [
          "Clarity where there is noise",
          "Focus where there is overload",
          "Simplicity where there is unnecessary complexity",
        ],
      },
      {
        content:
          "Not by slowing things down, but by removing what doesn't belong.",
        type: "paragraph",
      },
    ],
  },
];

const principleCards = [
  {
    id: "cultivation",
    label: "Principle 01",
    title: "Cultivate, do not rush",
    description:
      "Observe systems like living bonsai: shape with patience, presence, and continuous care.",
  },
  {
    id: "intention",
    label: "Principle 02",
    title: "Intention over volume",
    description:
      "Favor fewer, clearer abstractions so the codebase breathes with purpose.",
  },
  {
    id: "pruning",
    label: "Principle 03",
    title: "Prune with respect",
    description:
      "Ask what can be simplified today to honor tomorrow's contributors.",
  },
  {
    id: "stillness",
    label: "Principle 04",
    title: "Stillness guides action",
    description:
      "Pause to understand constraints and consequences before shipping.",
  },
  {
    id: "calm-software",
    label: "Principle 05",
    title: "Calm is a feature",
    description:
      "Design flows that feel predictable, supportive, and quietly confident.",
  },
  {
    id: "long-term",
    label: "Principle 06",
    title: "Think in seasons",
    description:
      "Favor longevity and maintainability so teams can grow with the system.",
  },
  {
    id: "why-it-matters",
    label: "Principle 07",
    title: "Clarity for the whole team",
    description: "Lead with simplicity so chaos has less room to grow.",
  },
];

const ZenHubPage = () => {
  return (
    <main className="">
      <ZenHero />

      <section className="bg-white py-16 border-y border-color-stone-200">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] items-start">
            <div className="space-y-6">
              <Text as="h2" variant="h2" className="text-stone-900">
                A Root Philosophy
              </Text>
              <Text variant="body" className="text-color-stone-700">
                This page is the root of how I think about software.
              </Text>
              <Text variant="body-medium" className="text-stone-800">
                From here branch my philosophies on:
              </Text>
              <ul className="list-disc space-y-2 pl-6 text-color-stone-800">
                <li>React and modern frontend frameworks</li>
                <li>State management and data flow</li>
                <li>UI architecture and component design</li>
                <li>Performance, accessibility, and resilience</li>
              </ul>
              <Text variant="body" className="text-stone-700">
                All of them are grounded in the same idea:
              </Text>
              <Text variant="h4" className="text-moss-700">
                Software, like a bonsai, is shaped over time — not forced into
                form.
              </Text>
              <Text variant="body" className="text-stone-700">
                Each principle below is simply a branch of this trunk.
              </Text>
            </div>
            <Quote className="text-left bg-color-stone-50 shadow-sm">
              <Text variant="quote" className="mb-2 text-stone-800">
                “The art is not in adding more, but in knowing what to remove.”
              </Text>
              <Text variant="caption" className="text-stone-600">
                — Zen hub philosophy
              </Text>
            </Quote>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-stone-50">
        <Container>
          <SectionHeader
            title="Introduction"
            subtitle="This section captures the core principles that guide how I approach software."
          />
          <div className="mb-12 space-y-4 text-center">
            <Text
              variant="body"
              className="max-w-3xl text-[color:var(--color-stone-700)]"
            >
              They are not rules or dogma. They are ways of thinking—shaped by
              experience, iteration, and long-term responsibility.
            </Text>
            <Text
              variant="body"
              className="max-w-3xl text-[color:var(--color-stone-700)]"
            >
              Each principle explores a different aspect of how mindful
              engineering leads to calmer systems, clearer code, and products
              that age well.
            </Text>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mb-10 text-center">
            <Text as="h2" variant="h3" className="text-stone-900">
              Principles in Practice
            </Text>
            <Text
              variant="body"
              className="mx-auto max-w-3xl text-[color:var(--color-stone-700)]"
            >
              Each section below explores a practical expression of the
              philosophy above.
            </Text>
            <Text
              variant="body"
              className="mx-auto max-w-3xl text-[color:var(--color-stone-700)]"
            >
              These principles show how mindful engineering translates into real
              decisions — in code, architecture, and product design.
            </Text>
          </div>
        </Container>
        <div className="">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className={cn(
                "py-28 px-6 border-t border-color-stone-200",
                index % 2 === 0 ? "bg-white" : "bg-stone-50",
              )}
            >
              <Container>
                <SectionHeader title={section.title} subtitle="" />

                <div className="space-y-4">
                  {section.blocks.map((block, idx) => {
                    if (block.type === "paragraph" && block.content) {
                      return (
                        <Text
                          key={`${section.id}-p-${idx}`}
                          variant="body"
                          className="text-[color:var(--color-stone-700)]"
                        >
                          {block.content}
                        </Text>
                      );
                    }

                    if (block.type === "list" && block.items) {
                      return (
                        <div key={`${section.id}-list-${idx}`}>
                          {block.title && (
                            <Text
                              variant="body"
                              className="mb-2 text-stone-600"
                            >
                              {block.title}
                            </Text>
                          )}
                          <ul
                            className={
                              block.variant === "questions"
                                ? "list-disc space-y-2 pl-6 italic text-stone-800"
                                : "list-disc space-y-2 pl-6 text-stone-800"
                            }
                          >
                            {block.items.map((item, itemIdx) => (
                              <li
                                key={`${section.id}-list-${idx}-item-${itemIdx}`}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </Container>
            </section>
          ))}
        </div>
      </section>
      <section className="border-t border-[color:var(--color-stone-200)] bg-[color:var(--color-stone-100)] py-16">
        <Container>
          <div className="mb-8">
            <Text as="h2" variant="h3" className="text-stone-900">
              Future Cards for Each Principle
            </Text>
            <Text
              variant="body"
              className="max-w-3xl text-[color:var(--color-stone-700)]"
            >
              This hub will eventually link each card to deeper dives,
              exercises, and production examples. For now, these summaries act
              as anchors so navigation and IA are ready when the cards go live.
            </Text>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {principleCards.map((card) => (
              <div
                key={card.id}
                className="flex h-full flex-col justify-between rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm"
              >
                <div>
                  <Text
                    variant="caption"
                    className="mb-2 uppercase tracking-[0.2em] text-[color:var(--color-stone-500)]"
                  >
                    {card.label}
                  </Text>
                  <Text as="h3" variant="h4" className="mb-2 text-stone-900">
                    {card.title}
                  </Text>
                  <Text
                    variant="body"
                    className="text-[color:var(--color-stone-700)]"
                  >
                    {card.description}
                  </Text>
                </div>
                <Button variant="outline" className="mt-6 w-full" disabled>
                  Coming soon
                </Button>
              </div>
            ))}
          </div>
        </Container>

        <section className="relative max-w-3xl mx-auto px-6 py-20">
          <span className="absolute left-0 top-20 h-24 w-px bg-moss-300" />

          <h2 className="text-2xl font-medium text-stone-900 mb-6 pl-6">
            Less Code. More Intention.
          </h2>

          <div className="pl-6 space-y-5 text-stone-900">
            <p>Zen teaches that clarity comes from removal, not addition.</p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                fewer abstractions, introduced only when pressure demands them
              </li>
              <li>components that do one thing clearly</li>
              <li>data flows that are easy to trace</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ZenHubPage;
