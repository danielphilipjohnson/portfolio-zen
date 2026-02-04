import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

export async function getAllProjects() {
	try {
		const filenames = await fs.readdir(projectsDirectory);

		const projects = await Promise.all(
			filenames.map(async (filename) => {
				const filePath = path.join(projectsDirectory, filename);
				const fileContents = await fs.readFile(filePath, 'utf8');

				const { data } = matter(fileContents);

				const slug = data.slug || filename.replace(/\.mdx?$/, '');

				return { slug };
			})
		);

		return projects;
	} catch (error) {
		console.error('Error reading projects slugs:', error);
		return [];
	}
}
