import { RelatedPost } from '@/types/blog-post';
import { getAllBlogs } from './getAllBlogs';

export async function getRelatedPosts(
	currentSlug: string,
	currentTags: string[]
): Promise<RelatedPost[]> {
	const allPosts = await getAllBlogs();

	const scored = allPosts
		.filter((p) => p.slug !== currentSlug)
		.map((p) => {
			const sharedTags = (currentTags ?? []).filter((tag) =>
				(p.tags ?? []).some(
					(pt: string) => pt.toLowerCase() === tag.toLowerCase()
				)
			).length;
			return { post: p, sharedTags };
		})
		.sort((a, b) => b.sharedTags - a.sharedTags)
		.slice(0, 3);

	return scored.map(({ post }) => ({
		id: post.id,
		title: post.title,
		summary: post.excerpt || '',
		publishDate: post.publishDate,
		readingTime: post.readTime,
		image: post.imageUrl,
		category: post.categories?.[0]?.name || '',
		url: `/blog/${post.slug}`,
	}));
}
