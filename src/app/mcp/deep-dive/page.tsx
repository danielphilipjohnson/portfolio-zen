import type { Metadata } from "next";
import MCPExtraContent from "@/components/mcp-extra-content";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "MCP Deep Dive | Daniel Johnson",
  description:
    "Advanced technical reference for Model Context Protocol architecture, primitives, lifecycle, and implementation patterns.",
  alternates: {
    canonical: `${SITE_URL}/mcp/deep-dive`,
  },
};

export default function MCPDeepDiveRoutePage() {
  return <MCPExtraContent />;
}
