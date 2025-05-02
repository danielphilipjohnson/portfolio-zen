import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const projectDirectory = path.join(process.cwd(), 'content', 'projects');

export async function getAllProjects() {
	try {
		const filenames = await fs.readdir(projectDirectory);

		const projects = await Promise.all(
			filenames.map(async (filename) => {
				const filePath = path.join(projectDirectory, filename);
				const fileContents = await fs.readFile(filePath, 'utf8');

				const { data } = matter(fileContents);

				return {
					id: data.slug || filename.replace(/\.mdx$/, ''),
					slug: data.slug || filename.replace(/\.mdx$/, ''),
					title: data.title,
					publishDate: data.publishDate,
					readTime: data.readTime,
					imageUrl: data.imageUrl,
					imageAlt: data.imageAlt,
					excerpt: data.excerpt,
					description: data.description || null,
					technologies: data.technologies || [],
					categories: data.categories || [],
					featured: data.featured || false,
					url: data.url || null,
					githubUrl: data.githubUrl || null,
				};
			})
		);

		// Build category counts
		const categoryCounts: Record<string, number> = {};
		projects.forEach((project) => {
			project.categories?.forEach((category: { slug: string }) => {
				if (category.slug) {
					categoryCounts[category.slug] = (categoryCounts[category.slug] || 0) + 1;
				}
			});
		});

		// Build final categories array
		const categories = [
			{ name: 'All', slug: 'all', count: projects.length },
			...Object.entries(categoryCounts).map(([slug, count]) => ({
				name: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()), // Prettify
				slug,
				count,
			}))
		];

		return { projects, categories };
	} catch (error) {
		console.error('Error reading project posts:', error);
		return { projects: [], categories: [] };
	}
}
