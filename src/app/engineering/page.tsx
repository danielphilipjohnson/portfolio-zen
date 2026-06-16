import { getPageSEO } from "@/utils/seo";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
	const seoData = getPageSEO('/engineering');
	const canonicalUrl = `${SITE_URL}/engineering`;

	if (!seoData || !seoData.title) {
		console.error("Error: SEO data is missing or has no title for path '/engineering'");
		return {
			title: 'Engineering | Daniel Philip Johnson',
			description: 'Software architecture, AI systems, and frontend engineering.',
			alternates: {
				canonical: canonicalUrl,
			},
		};
	}

	return {
		title: seoData.title,
		description: seoData.description,
		keywords: seoData.keywords,
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: seoData.openGraph ? {
			title: seoData.openGraph.title || seoData.title,
			description: seoData.openGraph.description || seoData.description,
			images: seoData.openGraph.images,
			type: seoData.openGraph.type as 'website' | 'profile',
			url: seoData.openGraph.url,
		} : undefined,
	};
}

export { default } from "@/components/pages/EngineeringPage";
