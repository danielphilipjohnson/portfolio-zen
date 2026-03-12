import { getPageSEO } from "@/utils/seo";
import type { Metadata } from "next";
import ZenLongTermPrinciplePage from "@/components/pages/ZenLongTermPrinciplePage";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = getPageSEO("/zen/design-for-the-long-term");
  const canonicalUrl =
    "https://www.danielphilipjohnson.com/zen/design-for-the-long-term";
  const fallbackImage =
    "https://www.danielphilipjohnson.com/images/og/engineering-og.jpg";

  if (!seoData || !seoData.title) {
    return {
      title: "Design for the Long Term | Daniel Johnson",
      description: "Principle 6 of calm software engineering.",
      alternates: {
        canonical: canonicalUrl,
      },
      twitter: {
        card: "summary_large_image",
        title: "Design for the Long Term | Daniel Johnson",
        description: "Principle 6 of calm software engineering.",
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

export default ZenLongTermRoutePage;

function ZenLongTermRoutePage() {
  return <ZenLongTermPrinciplePage />;
}
