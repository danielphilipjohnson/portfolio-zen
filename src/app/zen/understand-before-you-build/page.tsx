import { getPageSEO } from "@/utils/seo";
import type { Metadata } from "next";
import ZenUnderstandingPrinciplePage from "@/components/pages/ZenUnderstandingPrinciplePage";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = getPageSEO("/zen/understand-before-you-build");
  const canonicalUrl =
    "https://www.danielphilipjohnson.com/zen/understand-before-you-build";
  const fallbackImage =
    "https://www.danielphilipjohnson.com/images/og/engineering-og.jpg";

  if (!seoData || !seoData.title) {
    return {
      title: "Understand Before You Build | Daniel Johnson",
      description: "Principle 4 of calm software engineering.",
      alternates: {
        canonical: canonicalUrl,
      },
      twitter: {
        card: "summary_large_image",
        title: "Understand Before You Build | Daniel Johnson",
        description: "Principle 4 of calm software engineering.",
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

export default ZenUnderstandingRoutePage;

function ZenUnderstandingRoutePage() {
  return <ZenUnderstandingPrinciplePage />;
}
