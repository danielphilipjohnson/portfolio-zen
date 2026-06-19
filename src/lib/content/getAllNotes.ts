import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const notesDirectory = path.join(process.cwd(), 'content', 'notes');

export async function getAllNotes() {
	try {
		const filenames = await fs.readdir(notesDirectory);

		const notes = await Promise.all(
			filenames.map(async (filename) => {
				const filePath = path.join(notesDirectory, filename);
				const fileContents = await fs.readFile(filePath, 'utf8');

				const { data } = matter(fileContents);

				return {
					id: data.slug || filename.replace(/\.mdx$/, ''),
					slug: data.slug || filename.replace(/\.mdx$/, ''),
					title: data.title,
					publishDate: data.publishDate,
					excerpt: data.excerpt || null,
					tags: data.tags || [],
				};
			})
		);

		return notes;
	} catch (error) {
		console.error('Error reading notes:', error);
		return [];
	}
}

export async function getNote(slug: string) {
	try {
		const filePath = path.join(notesDirectory, `${slug}.mdx`);
		const fileContents = await fs.readFile(filePath, 'utf8');
		const { data, content } = matter(fileContents);

		return {
			slug: data.slug || slug,
			title: data.title,
			publishDate: data.publishDate,
			excerpt: data.excerpt || null,
			tags: data.tags || [],
			content,
		};
	} catch (error) {
		console.error(`Error reading note ${slug}:`, error);
		return null;
	}
}