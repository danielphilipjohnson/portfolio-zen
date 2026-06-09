import { SITE_URL } from "@/lib/constants";
import { getPageSEO } from "@/utils/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const seoData = getPageSEO('/tao');

	if (!seoData || !seoData.title) {
		return {
			title: 'Tao of Software Engineering | Daniel Johnson',
			description: 'Guiding principles for building software with clarity, intention, and resilience.',
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
			canonical: `${SITE_URL}/tao`,
		},
	};
}

export { default } from "@/components/pages/TaoPage";
