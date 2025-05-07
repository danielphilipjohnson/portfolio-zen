import { getPageSEO } from "@/utils/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const seoData = getPageSEO('/about');

	if (!seoData || !seoData.title) {
		console.error("Error: SEO data is missing or has no title for path '/'");
		return {
			title: 'Error: Title Not Loaded - Check Config',
			description: 'Error loading description.',
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
	};
}



export { default } from "@/components/pages/AboutPage";
