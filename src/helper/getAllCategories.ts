import { getAllBlogs } from "@/lib/content/getAllBlogs";

function normalizeSlug(name: string) {
	return name.toLowerCase().replace(/\s+/g, '-');
}

export async function getAllCategories() {
	const blogs = await getAllBlogs();

	const tagMap = new Map<string, { name: string; count: number }>();

	for (const post of blogs) {
		for (const tag of post.tags || []) {
			const name = tag;
			const slug = normalizeSlug(name);

			if (!tagMap.has(slug)) {
				tagMap.set(slug, { name, count: 1 });
			} else {
				tagMap.get(slug)!.count += 1;
			}
		}
	}

	const filtered = Array.from(tagMap.entries())
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		.filter(([_, meta]) => meta.count >= 3)
		.map(([slug, meta]) => ({
			slug,
			name: meta.name,
			count: meta.count,
		}));

	const allCount = blogs.length;

	return [
		{ slug: "all", name: "All", count: allCount },
		...filtered,
	];
}
