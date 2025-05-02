import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

// Path to your blog folder
const blogDirectory = path.join(process.cwd(), 'content', 'posts');

export async function getAllBlogs() {
	try {
		const filenames = await fs.readdir(blogDirectory);

		const blogs = await Promise.all(
			filenames.map(async (filename) => {
				const filePath = path.join(blogDirectory, filename);
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
					categories: (data.categories || []).map((category: string) => ({
						name: category,
						slug: category.toLowerCase().replace(/\s+/g, '-'),
					})),
				};
			})
		);

		return blogs;
	} catch (error) {
		console.error('Error reading blog posts:', error);
		return [];
	}
}
