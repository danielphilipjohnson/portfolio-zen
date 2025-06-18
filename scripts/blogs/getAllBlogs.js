import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content', 'posts');

export async function getAllBlogs() {
	try {
		const filenames = await fs.readdir(blogDirectory);

		const blogs = await Promise.all(
			filenames.map(async (filename) => {
				const filePath = path.join(blogDirectory, filename);
				const fileContents = await fs.readFile(filePath, 'utf8');

				const { data } = matter(fileContents);

				const slug = data.slug || filename.replace(/\.mdx?$/, '');

				return { slug };
			})
		);

		return blogs;
	} catch (error) {
		console.error('Error reading blog slugs:', error);
		return [];
	}
}
