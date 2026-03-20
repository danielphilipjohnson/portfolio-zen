"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import { LinkButton } from "@/components/ui/LinkButton";

type BaseSection = {
  id: string;
  tag: string;
  title: string;
  colorClass: string;
};

type ContentSection = BaseSection & {
  isFramework?: false;
  content: {
    summary: string;
    diagram: string;
    codeNote: string;
    deepDive: string;
  };
};

type FrameworkSection = BaseSection & {
  isFramework: true;
};

type Section = ContentSection | FrameworkSection;

const sections: Section[] = [
  {
    id: "problem",
    tag: "01 // THE PROBLEM",
    title: "The Integration Hell Problem",
    colorClass: "text-[color:var(--color-danger-700)]",
    content: {
      summary:
        "Before MCP, every AI-to-tool integration was a custom one-off implementation. M models x N tools created MxN integrations, which does not scale.",
      diagram: `Claude ---- custom code ----> Gmail API
Claude ---- custom code ----> Slack API
Claude ---- custom code ----> GitHub API
GPT-4  ---- custom code ----> Gmail API  (duplicate)
GPT-4  ---- custom code ----> Slack API  (duplicate)

Result: O(MxN) integrations. Fragile and duplicated.`,
      codeNote:
        "Teams repeatedly reimplemented auth, schema mapping, retries, and error handling.",
      deepDive:
        "LLMs had no shared protocol for expressing intent to external systems, and tools had no shared contract for exposing capabilities to LLM hosts. Every integration solved context injection and response formatting differently.",
    },
  },
  {
    id: "what",
    tag: "02 // WHAT IS MCP",
    title: "MCP as a Client-Server Protocol",
    colorClass: "text-[color:var(--color-water-700)]",
    content: {
      summary:
        "MCP standardizes communication between an LLM host and capability providers. Instead of each pair building custom glue, each side implements the protocol once.",
      diagram: `+-------------+   JSON-RPC over stdio/SSE   +----------------+
| MCP Client  | <-------------------------> | MCP Server     |
| (inside app)|                             | (tool provider)|
+-------------+                             +----------------+

One protocol. Any client. Any server.
O(M+N) instead of O(MxN).`,
      codeNote:
        "MCP covers discovery, capability negotiation, invocation, streaming, and structured error handling.",
      deepDive:
        "At runtime, clients discover what servers expose and use only the declared contracts. This reduces hardcoded integrations and allows hosts to compose capabilities dynamically.",
    },
  },
  {
    id: "architecture",
    tag: "03 // ARCHITECTURE",
    title: "Host, Client, Server",
    colorClass: "text-[color:var(--color-clay-700)]",
    content: {
      summary:
        "MCP usage is easiest to reason about as three layers: host app, embedded MCP client, and external MCP servers.",
      diagram: `HOST APP (user-facing)
  |- MCP CLIENT (routing + protocol lifecycle)
      |- Server A (Gmail)
      |- Server B (Calendar)
      |- Server C (Slack)

Transport: stdio (local) or HTTP/SSE (remote).`,
      codeNote:
        "The host owns policy and orchestration. The client owns protocol handling. Servers own capability logic.",
      deepDive:
        "A typical lifecycle is initialize -> list_tools/list_resources -> call_tool/read_resource -> return structured result. The host then decides what to expose back to the model for the next turn.",
    },
  },
  {
    id: "primitives",
    tag: "04 // PRIMITIVES",
    title: "Tools, Resources, Prompts",
    colorClass: "text-[color:var(--color-success-700)]",
    content: {
      summary:
        "Most MCP designs are clear once these three primitives are clear.",
      diagram: `TOOLS     => callable functions (potential side effects)
RESOURCES => readable data endpoints
PROMPTS   => reusable prompt templates`,
      codeNote:
        "Common mental model: Tools are model-triggered, Resources are app-selected context, Prompts are user-facing templates.",
      deepDive:
        "Tools usually carry JSON Schema contracts for typed inputs. That standard shape gives hosts consistent planning and execution behavior across many servers.",
    },
  },
  {
    id: "lifecycle",
    tag: "05 // LIFECYCLE",
    title: "Single Request Trace",
    colorClass: "text-[color:var(--color-warning-700)]",
    content: {
      summary:
        "A user request usually runs as an agentic loop: choose a tool, execute, observe result, then continue response generation.",
      diagram: `1. User asks: "Schedule a meeting tomorrow at 3pm"
2. Host injects available tool schemas
3. Model emits tool call with structured args
4. Client routes call to Calendar server
5. Server executes provider API request
6. Client returns tool result to host
7. Host injects result into next model turn
8. Model returns final user-facing answer`,
      codeNote:
        "Tool calls are usually invisible to users unless the host chooses to reveal them.",
      deepDive:
        "Complex tasks involve multiple loops and intermediate state checks. Good hosts enforce timeouts, retry policy, and explicit approvals for sensitive operations.",
    },
  },
  {
    id: "build",
    tag: "06 // BUILD",
    title: "Minimal Server Pattern",
    colorClass: "text-[color:var(--color-moss-700)]",
    content: {
      summary:
        "An MCP server is typically a small process that declares capabilities and implements handlers.",
      diagram: `from mcp.server import Server

server = Server("weather")

@server.list_tools()
async def list_tools():
    return [...]

@server.call_tool()
async def call_tool(name, arguments):
    return [...]`,
      codeNote:
        "SDKs handle protocol boilerplate so implementation stays focused on capability logic.",
      deepDive:
        "Production servers should define strict schemas, idempotency expectations, structured errors, and explicit auth boundaries before exposing write-capable tools.",
    },
  },
  {
    id: "mental-model",
    tag: "07 // MENTAL MODEL",
    title: "What to Remember",
    colorClass: "text-[color:var(--color-water-700)]",
    isFramework: true,
  },
];

const frameworkItems = [
  {
    symbol: "LSP",
    label: "LSP pattern",
    desc: "MCP does for model-tool interoperability what LSP did for editor-language interoperability.",
  },
  {
    symbol: "M+N",
    label: "Scale shape",
    desc: "Each model host and each tool server implements once, reducing repeated pairwise integrations.",
  },
  {
    symbol: "3",
    label: "Three primitives",
    desc: "Tools, Resources, Prompts cover most capability designs.",
  },
  {
    symbol: "RPC",
    label: "Protocol core",
    desc: "MCP is a protocol contract on top of JSON-RPC transports, not a new model type.",
  },
];

export default function MCPExtraContent() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const section = sections[current];

  return (
    <main className="min-h-screen bg-[color:var(--color-stone-50)] pt-28 pb-20">
      <Container className="max-w-6xl">
        <section className="mb-8 rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-8 shadow-sm">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-water-700)]">
            Advanced Track
          </p>
          <Text as="h1" variant="h1" weight="light" className="mb-3 text-[color:var(--color-stone-900)]">
            MCP Technical Deep Dive
          </Text>
          <Text className="mb-5 max-w-3xl text-[color:var(--color-stone-700)]">
            This page is the protocol-level reference. If you are new to MCP, start with the beginner page first.
          </Text>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="/mcp" variant="outline">
              Back to Beginner MCP
            </LinkButton>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-4 shadow-sm md:p-5">
          <div className="flex flex-wrap gap-2">
            {sections.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setCurrent(i);
                  setExpanded(false);
                }}
                className={`rounded-lg border px-3 py-1.5 text-xs font-mono transition-colors ${
                  i === current
                    ? "border-[color:var(--color-water-300)] bg-[color:var(--color-water-50)] text-[color:var(--color-water-700)]"
                    : "border-[color:var(--color-stone-200)] text-[color:var(--color-stone-600)] hover:bg-[color:var(--color-stone-100)]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </section>

        {!section.isFramework ? (
          <section className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm md:p-8">
            <p className={`mb-2 font-mono text-xs uppercase tracking-[0.2em] ${section.colorClass}`}>
              {section.tag}
            </p>
            <Text as="h2" variant="h3" className="mb-4 text-[color:var(--color-stone-900)]">
              {section.title}
            </Text>

            <div className="mb-5 rounded-xl border border-[color:var(--color-stone-200)] bg-[color:var(--color-stone-50)] p-4">
              <Text className="text-[color:var(--color-stone-700)]">{section.content.summary}</Text>
            </div>

            <div className="mb-5 overflow-hidden rounded-xl border border-[color:var(--color-stone-300)] bg-[color:var(--color-ink-950)]">
              <div className="border-b border-[color:var(--color-stone-300)] bg-[color:var(--color-ink-900)] px-4 py-2">
                <p className="font-mono text-xs text-[color:var(--color-ink-200)]">diagram.txt</p>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-[color:var(--color-ink-100)]">
                <code>{section.content.diagram}</code>
              </pre>
            </div>

            <div className="mb-5 rounded-xl border border-[color:var(--color-water-200)] bg-[color:var(--color-water-50)] p-4">
              <p className="mb-1 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-water-700)]">
                Note
              </p>
              <Text className="text-[color:var(--color-stone-700)]">{section.content.codeNote}</Text>
            </div>

            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="mb-4 w-full rounded-lg border border-[color:var(--color-stone-200)] px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.12em] text-[color:var(--color-stone-700)] transition-colors hover:bg-[color:var(--color-stone-100)]"
            >
              {expanded ? "Collapse" : "Expand"} deep dive
            </button>

            {expanded && (
              <div className="mb-6 rounded-xl border border-[color:var(--color-stone-200)] bg-[color:var(--color-stone-50)] p-4">
                <Text className="text-[color:var(--color-stone-700)]">{section.content.deepDive}</Text>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                disabled={current === 0}
                onClick={() => {
                  setCurrent((value) => Math.max(0, value - 1));
                  setExpanded(false);
                }}
                className="rounded-lg border border-[color:var(--color-stone-300)] px-4 py-2 text-sm text-[color:var(--color-stone-700)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => {
                  setCurrent((value) => Math.min(sections.length - 1, value + 1));
                  setExpanded(false);
                }}
                className="rounded-lg bg-[color:var(--color-moss-700)] px-4 py-2 text-sm text-white transition-colors hover:bg-[color:var(--color-moss-800)]"
              >
                {current < sections.length - 1 ? "Next" : "Mental model"}
              </button>
            </div>
          </section>
        ) : (
          <section className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm md:p-8">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-water-700)]">
              07 // MENTAL MODEL
            </p>
            <Text as="h2" variant="h3" className="mb-5 text-[color:var(--color-stone-900)]">
              The Framework to Remember It All
            </Text>

            <div className="space-y-3">
              {frameworkItems.map((item) => (
                <article
                  key={item.symbol}
                  className="rounded-xl border border-[color:var(--color-stone-200)] bg-[color:var(--color-stone-50)] p-4"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span className="rounded-md bg-[color:var(--color-water-100)] px-2 py-1 font-mono text-xs text-[color:var(--color-water-700)]">
                      {item.symbol}
                    </span>
                    <p className="text-sm font-medium text-[color:var(--color-stone-900)]">{item.label}</p>
                  </div>
                  <Text className="text-[color:var(--color-stone-700)]">{item.desc}</Text>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[color:var(--color-stone-300)] bg-[color:var(--color-ink-950)] p-5">
              <p className="mb-2 font-mono text-xs text-[color:var(--color-ink-300)]">mental_model.md</p>
              <p className="text-sm leading-relaxed text-[color:var(--color-ink-100)]">
                MCP is to AI tool use what LSP is to IDE language support. One protocol, any model, any tool. O(M+N), not O(MxN).
              </p>
            </div>

            <div className="mt-6">
              <LinkButton href="/mcp" variant="secondary">
                Return to Beginner MCP
              </LinkButton>
            </div>
          </section>
        )}
      </Container>
    </main>
  );
}
