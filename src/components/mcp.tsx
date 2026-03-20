"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import { LinkButton } from "@/components/ui/LinkButton";

type Chapter = {
  id: number;
  emoji: string;
  chapterLabel: string;
  title: string;
  colorClass: string;
  tintClass: string;
  story: string;
  bigIdea?: string;
  visual?: string[];
  isFramework?: boolean;
};

const chapters: Chapter[] = [
  {
    id: 1,
    emoji: "🤖",
    chapterLabel: "The Problem",
    title: "AI is brilliant - but trapped",
    colorClass: "text-[color:var(--color-danger-700)]",
    tintClass: "bg-[color:var(--color-danger-50)] border-[color:var(--color-danger-200)]",
    story:
      "Imagine you have a genius friend who knows everything. You ask them: \"Can you check my calendar and book me a dentist appointment?\"\n\nThey say: \"I would love to help, but I'm stuck inside this box. I can't reach your calendar. I can't touch your email. I can only talk to you through this chat window.\"\n\nThat's exactly what AI was like before MCP.",
    bigIdea:
      "AI is incredibly smart, but completely cut off from your real apps and data.",
    visual: [
      "🤖 Claude",
      "💬 Can talk",
      "❌ Cannot touch your calendar",
      "❌ Cannot read your emails",
      "❌ Cannot search your files",
    ],
  },
  {
    id: 2,
    emoji: "🔧",
    chapterLabel: "The Old Way",
    title: "Every connection was a nightmare",
    colorClass: "text-[color:var(--color-warning-700)]",
    tintClass: "bg-[color:var(--color-warning-50)] border-[color:var(--color-warning-200)]",
    story:
      "Before MCP, if you wanted AI to connect to Gmail, a developer had to write custom code just for Gmail.\n\nThen if you wanted Calendar, Slack, or Dropbox, each one needed more custom code.\n\nEvery connection was a new door built from scratch. Slow, expensive, and hard to maintain.",
    bigIdea:
      "Every new tool needed its own hand-crafted integration. There was no standard.",
    visual: [
      "🤖 AI",
      "-> custom code -> Gmail",
      "-> custom code -> Calendar",
      "-> custom code -> Slack",
      "-> custom code -> Files",
    ],
  },
  {
    id: 3,
    emoji: "🔌",
    chapterLabel: "The Breakthrough",
    title: "Then came the universal plug",
    colorClass: "text-[color:var(--color-water-700)]",
    tintClass: "bg-[color:var(--color-water-50)] border-[color:var(--color-water-200)]",
    story:
      "Before USB, devices had different plug shapes. USB changed that with one standard.\n\nMCP is that same moment for AI tools: one standard way for AI to connect to many systems.\n\nMCP means Model Context Protocol. You can think of it as the universal plug for AI.",
    bigIdea:
      "MCP is like USB: one shared standard so AI can plug into many tools.",
    visual: [
      "Before: many incompatible plugs",
      "After: one standard connector",
      "MCP does the same for AI integrations",
    ],
  },
  {
    id: 4,
    emoji: "🍽️",
    chapterLabel: "How It Works",
    title: "Use the restaurant analogy",
    colorClass: "text-[color:var(--color-clay-700)]",
    tintClass: "bg-[color:var(--color-clay-50)] border-[color:var(--color-clay-200)]",
    story:
      "You tell a waiter what you want. The waiter talks to the kitchen. Food comes back to you.\n\nIn MCP terms:\n- You are the person chatting\n- Claude is the assistant\n- MCP is the waiter\n- Apps like Gmail and Calendar are the kitchen",
    bigIdea:
      "AI talks to MCP, MCP talks to apps, apps do the work, results come back.",
    visual: [
      "You chat with Claude",
      "Claude asks MCP",
      "MCP calls app servers",
      "Result returns to you",
    ],
  },
  {
    id: 5,
    emoji: "🌍",
    chapterLabel: "Real Life",
    title: "What this feels like",
    colorClass: "text-[color:var(--color-success-700)]",
    tintClass: "bg-[color:var(--color-success-50)] border-[color:var(--color-success-200)]",
    story:
      "You ask: \"What meetings do I have tomorrow and do any clash with my train?\"\n\nWithout MCP, the assistant cannot access your calendar.\n\nWith MCP, it reads your schedule through a calendar server, checks timing, and responds with a concrete recommendation.",
    bigIdea:
      "MCP makes AI feel like a real assistant that can act, not only talk.",
    visual: [
      "Check calendar",
      "Check train time",
      "Find clash",
      "Explain clearly",
      "Offer to fix",
    ],
  },
  {
    id: 6,
    emoji: "🧠",
    chapterLabel: "Remember Forever",
    title: "Your memory shortcut",
    colorClass: "text-[color:var(--color-moss-700)]",
    tintClass: "bg-[color:var(--color-moss-50)] border-[color:var(--color-moss-200)]",
    story: "",
    isFramework: true,
  },
];

const memoryItems = [
  {
    icon: "🔌",
    headline: "USB for AI",
    body: "MCP is the standard connector between AI hosts and tools.",
  },
  {
    icon: "🍽️",
    headline: "Waiter in the middle",
    body: "MCP carries requests between the assistant and external systems.",
  },
  {
    icon: "🎯",
    headline: "From talk to action",
    body: "MCP turns assistants into systems that can actually execute tasks.",
  },
];

export default function MCPPage() {
  const [current, setCurrent] = useState(0);
  const chapter = chapters[current];

  return (
    <main className="min-h-screen bg-[color:var(--color-stone-50)] pt-28 pb-20">
      <Container className="max-w-4xl">
        <section className="mb-8 rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm md:p-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-moss-700)]">
            Beginner Track
          </p>
          <Text as="h1" variant="h1" weight="light" className="mb-3 text-[color:var(--color-stone-900)]">
            MCP for Beginners
          </Text>
          <Text className="mb-5 text-[color:var(--color-stone-700)]">
            A chapter-by-chapter walkthrough of MCP with plain language and simple mental models.
          </Text>
          <LinkButton href="/mcp/deep-dive" variant="outline">
            Prefer technical depth? Open deep dive
          </LinkButton>
        </section>

        <section className="mb-6 flex flex-wrap justify-center gap-2">
          {chapters.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-8 w-8 rounded-full border text-xs font-semibold transition-colors ${
                index === current
                  ? "border-[color:var(--color-moss-700)] bg-[color:var(--color-moss-700)] text-white"
                  : index < current
                    ? "border-[color:var(--color-stone-300)] bg-[color:var(--color-stone-200)] text-[color:var(--color-stone-700)]"
                    : "border-[color:var(--color-stone-300)] bg-white text-[color:var(--color-stone-600)] hover:bg-[color:var(--color-stone-100)]"
              }`}
              aria-label={`Go to chapter ${item.id}`}
            >
              {item.id}
            </button>
          ))}
        </section>

        <section className="mb-4">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] ${chapter.tintClass} ${chapter.colorClass}`}
          >
            Chapter {chapter.id} - {chapter.chapterLabel}
          </span>
        </section>

        {!chapter.isFramework ? (
          <section className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm md:p-8">
            <p className="mb-3 text-4xl" aria-hidden="true">
              {chapter.emoji}
            </p>
            <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
              {chapter.title}
            </Text>

            <div className="mb-5 rounded-xl border border-[color:var(--color-stone-200)] bg-[color:var(--color-stone-50)] p-4">
              {chapter.story.split("\n").map((line, index) =>
                line.trim() ? (
                  <p
                    key={index}
                    className={`text-[color:var(--color-stone-700)] ${index === 0 ? "mt-0" : "mt-3"}`}
                  >
                    {line}
                  </p>
                ) : null,
              )}
            </div>

            <div className={`mb-5 rounded-xl border p-4 ${chapter.tintClass}`}>
              <p className={`mb-3 font-mono text-xs uppercase tracking-[0.14em] ${chapter.colorClass}`}>
                Picture it
              </p>
              <div className="space-y-2">
                {chapter.visual?.map((item) => (
                  <p
                    key={item}
                    className="rounded-md bg-white/70 px-3 py-2 text-sm text-[color:var(--color-stone-700)]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="mb-6 rounded-xl bg-[color:var(--color-moss-700)] p-4 text-white">
              <p className="mb-1 font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-moss-100)]">
                The Big Idea
              </p>
              <p className="text-sm md:text-base">{chapter.bigIdea}</p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                disabled={current === 0}
                onClick={() => setCurrent((value) => Math.max(0, value - 1))}
                className="rounded-lg border border-[color:var(--color-stone-300)] px-4 py-2 text-sm text-[color:var(--color-stone-700)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setCurrent((value) => Math.min(chapters.length - 1, value + 1))}
                className="rounded-lg bg-[color:var(--color-moss-700)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--color-moss-800)]"
              >
                {current < chapters.length - 1 ? "Next chapter" : "Get memory key"}
              </button>
            </div>
          </section>
        ) : (
          <section className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm md:p-8">
            <p className="mb-3 text-4xl" aria-hidden="true">
              🧠
            </p>
            <Text as="h2" variant="h3" className="mb-2 text-[color:var(--color-stone-900)]">
              Your Forever Memory Key
            </Text>
            <Text className="mb-5 text-[color:var(--color-stone-700)]">
              Three simple ideas that make MCP stick.
            </Text>

            <div className="space-y-3">
              {memoryItems.map((item) => (
                <article
                  key={item.headline}
                  className="rounded-xl border border-[color:var(--color-stone-200)] bg-[color:var(--color-stone-50)] p-4"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">
                      {item.icon}
                    </span>
                    <p className="font-medium text-[color:var(--color-stone-900)]">{item.headline}</p>
                  </div>
                  <Text className="text-[color:var(--color-stone-700)]">{item.body}</Text>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-[color:var(--color-ink-950)] p-5 text-center">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-300)]">
                Say this to remember
              </p>
              <p className="text-[color:var(--color-ink-50)]">
                MCP is the universal plug that lets AI reach outside its box and do real work.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setCurrent(0)}
                className="rounded-lg border border-[color:var(--color-stone-300)] px-4 py-2 text-sm text-[color:var(--color-stone-700)]"
              >
                Read from the start
              </button>
              <LinkButton href="/mcp/deep-dive" variant="secondary">
                Continue to deep dive
              </LinkButton>
            </div>
          </section>
        )}

        <p className="mt-4 text-center text-xs text-[color:var(--color-stone-500)]">
          {current + 1} of {chapters.length} - {chapter.chapterLabel}
        </p>
      </Container>
    </main>
  );
}
