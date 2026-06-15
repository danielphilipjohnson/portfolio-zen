import { SITE_URL } from "@/lib/constants";
import { getPageSEO } from "@/utils/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = getPageSEO('/blog/tag/frontend-architecture');

  if (!seoData || !seoData.title) {
    return {
      title: 'Frontend Architecture | Daniel Johnson',
      description: 'Frontend system design, React architecture, and architectural patterns for production applications.',
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
      canonical: `${SITE_URL}/blog/tag/frontend-architecture`,
    },
  };
}

export { default } from "@/components/pages/FrontendArchitectureTagPage";
