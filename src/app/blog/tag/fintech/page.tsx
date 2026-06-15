import { SITE_URL } from "@/lib/constants";
import { getPageSEO } from "@/utils/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = getPageSEO('/blog/tag/fintech');

  if (!seoData || !seoData.title) {
    return {
      title: 'Fintech | Daniel Johnson',
      description: 'Fintech frontend engineering: architecture, performance, and reliability in financial products.',
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
      canonical: `${SITE_URL}/blog/tag/fintech`,
    },
  };
}

export { default } from "@/components/pages/FintechTagPage";
