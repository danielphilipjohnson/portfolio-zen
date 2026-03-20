import { getPageSEO } from "@/utils/seo";
import type { Metadata } from "next";
import ZenClarityPrinciplePage from "@/components/pages/ZenClarityPrinciplePage";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = getPageSEO("/zen/clarity-scales-across-teams");
  const canonicalUrl =
    "https://www.danielphilipjohnson.com/zen/clarity-scales-across-teams";
  const fallbackImage =
    "https://www.danielphilipjohnson.com/images/og/engineering-og.jpg";

  if (!seoData || !seoData.title) {
    return {
      title: "Clarity Scales Across Teams | Daniel Johnson",
      description: "Principle 7 of calm software engineering.",
      alternates: {
        canonical: canonicalUrl,
      },
      twitter: {
        card: "summary_large_image",
        title: "Clarity Scales Across Teams | Daniel Johnson",
        description: "Principle 7 of calm software engineering.",
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

export default ZenClarityRoutePage;

function ZenClarityRoutePage() {
  return <ZenClarityPrinciplePage />;
}
