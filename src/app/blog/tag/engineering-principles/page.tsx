import { SITE_URL } from "@/lib/constants";
import { getPageSEO } from "@/utils/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = getPageSEO('/blog/tag/engineering-principles');

  if (!seoData || !seoData.title) {
    return {
      title: 'Engineering Principles | Daniel Johnson',
      description: 'Engineering principles for frontend performance, system design, and production software architecture.',
    };
  }

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: seoData.openGraph ? {
      title: seoData.openGraph.title || seoData.title,
      description: seoData.openGraph.description || seoData.description,
      images: seoData.openGraph.images,
      type: seoData.openGraph.type as 'website' | 'profile',
      url: seoData.openGraph.url,
    } : undefined,
    alternates: {
      canonical: `${SITE_URL}/blog/tag/engineering-principles`,
    },
  };
}

export { default } from "@/components/pages/EngineeringPrinciplesTagPage";
