import { getPageSEO } from "@/utils/seo";
import type { Metadata } from "next";
import MCPPage from "@/components/mcp";
import StructuredData from "@/components/StructuredData";
import { getMcpPageJsonLd } from "@/utils/jsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = getPageSEO("/mcp");
  const canonicalUrl = "https://www.danielphilipjohnson.com/mcp";
  const fallbackImage = "https://www.danielphilipjohnson.com/images/og/home-og.jpg";

  if (!seoData || !seoData.title) {
    return {
      title: "MCP | Daniel Johnson",
      description: "Model Context Protocol deep dive page.",
      alternates: {
        canonical: canonicalUrl,
      },
      twitter: {
        card: "summary_large_image",
        title: "MCP | Daniel Johnson",
        description: "Model Context Protocol deep dive page.",
        images: [fallbackImage],
      },
    };
  }

  const ogImages =
    seoData.openGraph?.images?.map((image) =>
      image.url.startsWith("http")
        ? image.url
        : `https://www.danielphilipjohnson.com${image.url}`,
    ) ?? [fallbackImage];

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: seoData.openGraph
      ? {
          title: seoData.openGraph.title || seoData.title,
          description: seoData.openGraph.description || seoData.description,
          images: seoData.openGraph.images,
          type: seoData.openGraph.type as "website" | "profile" | "article",
          url: seoData.openGraph.url,
        }
      : undefined,
    twitter: {
      card: "summary_large_image",
      title: seoData.openGraph?.title || seoData.title,
      description: seoData.openGraph?.description || seoData.description,
      images: ogImages,
    },
  };
}

export default function MCPRoutePage() {
  const mcpPageJsonLdData = getMcpPageJsonLd();

  return (
    <>
      <StructuredData data={mcpPageJsonLdData} id="mcp-page-jsonld" />
      <MCPPage />
    </>
  );
}
