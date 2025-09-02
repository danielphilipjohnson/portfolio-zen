import PhilosophyHero from "@/components/philosophy/PhilosophyHero";
import PhilosophyIntro from "@/components/philosophy/PhilosophyIntro";
import PrincipleSection from "@/components/philosophy/PrincipleSection";
import PhilosophyClosing from "@/components/philosophy/PhilosophyClosing";
import StructuredData from "@/components/StructuredData";
import { getPhilosophyPageJsonLd } from "@/utils/jsonLd";

const principlesData = [
  {
    emoji: "✂️",
    title: "Principle 1: Mindful Minimalism",
    definition: "Great software comes from restraint. Every feature, abstraction, or dependency must earn its place.",
    caseTitle: "Case Example:",
    caseDescription: "On a recent fintech project, a dynamic form system ballooned into a tangled mess of state, validation, and conditional logic. By pruning — splitting into composable steps, enforcing Zod validation, and removing unnecessary abstractions — the system became simpler, faster, and easier to maintain.",
    philosophicalRoots: [
      {
        source: "Lao Tzu, Tao Te Ching",
        quote: "To attain knowledge, add things every day. To attain wisdom, remove things every day."
      },
      {
        source: "The Kybalion (Principle of Balance)",
        quote: "Excess creates disharmony; simplicity restores equilibrium."
      },
      {
        source: "Jung, Man and His Symbols",
        quote: "Symbols gain meaning when uncluttered — the same applies to code."
      }
    ],
    takeaway: "Minimalism isn't about doing less. It's about doing what matters, and nothing more."
  },
  {
    emoji: "🕰",
    title: "Principle 2: Patience in Process",
    definition: "Software grows through careful iteration. Quick hacks create technical debt; patient refinement creates resilience.",
    caseTitle: "Case Example:",
    caseDescription: "While modernizing an internal loan system, instead of rewriting everything in one go, I introduced phased refactors: improve one form, one API, one test suite at a time. It wasn't glamorous, but it avoided outages and kept the team shipping.",
    philosophicalRoots: [
      {
        source: "Marcus Aurelius, Meditations",
        quote: "No great thing is created suddenly."
      },
      {
        source: "Plato, The Republic",
        quote: "Justice is achieved when parts work in harmony — not when one part dominates."
      },
      {
        source: "Seneca, Letters from a Stoic",
        quote: "Patience isn't passivity; it's the discipline to choose timing wisely."
      },
      {
        source: "Sun Tzu, Art of War",
        quote: "Victory comes from knowing when to advance and when to hold."
      }
    ],
    takeaway: "In code, patience is a performance multiplier."
  },
  {
    emoji: "🌐",
    title: "Principle 3: Web-Native Thinking",
    definition: "Work with the grain of the web, not against it. Embrace standards, performance, and accessibility as defaults.",
    caseTitle: "Case Example:",
    caseDescription: "Instead of overengineering authentication into client-side state, I used HttpOnly cookies + SameSite policies — leveraging browser standards. Instead of reinventing UI primitives, I built on accessible HTML + ARIA patterns. This kept the system lean, fast, and secure.",
    philosophicalRoots: [
      {
        source: "Aristotle",
        quote: "Know the nature of a thing before designing with it — cause and purpose matter."
      },
      {
        source: "Lao Tzu, Tao Te Ching",
        quote: "The wise adapt themselves to circumstances, as water molds itself to the pitcher."
      },
      {
        source: "The Prince (Machiavelli)",
        quote: "Strategy must adapt to terrain. In software, the terrain is the web."
      },
      {
        source: "The Kybalion (Correspondence)",
        quote: "As above, so below. A principle true in backend should harmonize in frontend."
      }
    ],
    takeaway: "Web-native design isn't trendy — it's timeless."
  },
  {
    emoji: "⚖️",
    title: "Principle 4: Strategic Awareness",
    definition: "Architecture is politics in code — a balance of trade-offs, influence, and clarity of purpose.",
    caseTitle: "Case Example:",
    caseDescription: "When advising on React Server Components vs client-side rendering, I framed the decision not as \"what's new\", but as a trade-off matrix: performance vs developer experience, security vs complexity. Strategy was about aligning the team, not chasing hype.",
    philosophicalRoots: [
      {
        source: "Machiavelli, The Prince",
        quote: "Leaders must balance pragmatism with principle — the same in software leadership."
      },
      {
        source: "Sun Tzu, Art of War",
        quote: "He will win who knows when to fight and when not to fight. — in code, this means choosing when to refactor and when to ship."
      },
      {
        source: "Plato, The Republic",
        quote: "Guardians lead not by force but by reason — technical leadership is no different."
      }
    ],
    takeaway: "Strategy in architecture isn't just technical — it's human."
  }
];

export default function PhilosophyPage() {
  const philosophyPageJsonLdData = getPhilosophyPageJsonLd();
  
  return (
    <main>
      <StructuredData data={philosophyPageJsonLdData} id="philosophy-page-jsonld" />
      <PhilosophyHero />
      <PhilosophyIntro />
      
      {principlesData.map((principle, index) => (
        <PrincipleSection
          key={index}
          emoji={principle.emoji}
          title={principle.title}
          definition={principle.definition}
          caseTitle={principle.caseTitle}
          caseDescription={principle.caseDescription}
          philosophicalRoots={principle.philosophicalRoots}
          takeaway={principle.takeaway}
        />
      ))}
      
      <PhilosophyClosing />
    </main>
  );
}
