import type { Metadata } from "next";
import MCPExtraContent from "@/components/mcp-extra-content";

export const metadata: Metadata = {
  title: "MCP Deep Dive | Daniel Johnson",
  description:
    "Advanced technical reference for Model Context Protocol architecture, primitives, lifecycle, and implementation patterns.",
  alternates: {
    canonical: "https://www.danielphilipjohnson.com/mcp/deep-dive",
  },
};

export default function MCPDeepDiveRoutePage() {
  return <MCPExtraContent />;
}
