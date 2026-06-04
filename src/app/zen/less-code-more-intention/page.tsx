import { OG_IMAGE, SITE_URL } from "@/lib/constants";
import { getPageSEO } from "@/utils/seo";
import type { Metadata } from "next";
import ZenIntentionPrinciplePage from "@/components/pages/ZenIntentionPrinciplePage";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = getPageSEO("/zen/less-code-more-intention");
  const canonicalUrl =
    `${SITE_URL}/zen/less-code-more-intention`;
  const fallbackImage =
    OG_IMAGE.ENGINEERING;

  if (!seoData || !seoData.title) {
    return {
      title: "Less Code. More Intention. | Daniel Johnson",
      description: "Principle 2 of calm software engineering.",
      alternates: {
        canonical: canonicalUrl,
      },
      twitter: {
        card: "summary_large_image",
        title: "Less Code. More Intention. | Daniel Johnson",
        description: "Principle 2 of calm software engineering.",
        images: [fallbackImage],
      },
    };
  }

  const ogImages =
    seoData.openGraph?.images?.map((image) =>
      image.url.startsWith("http")
        ? image.url
        : `${SITE_URL}${image.url}`,
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

export default ZenIntentionRoutePage;

function ZenIntentionRoutePage() {
  return <ZenIntentionPrinciplePage />;
}
