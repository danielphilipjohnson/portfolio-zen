import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import NoteSinglePage from '@/components/pages/NoteSinglePage';

interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const notesDirectory = path.join(process.cwd(), 'content', 'notes');
	try {
		const filenames = await fs.readdir(notesDirectory);
		return filenames.map((filename) => ({
			slug: filename.replace(/\.mdx$/, ''),
		}));
	} catch {
		return [];
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const notesDirectory = path.join(process.cwd(), 'content', 'notes');
	try {
		const fileContents = await fs.readFile(path.join(notesDirectory, `${slug}.mdx`), 'utf8');
		const { data } = matter(fileContents);
		return {
			title: `${data.title} | Notes`,
			description: data.excerpt || `Note about ${data.title}`,
		};
	} catch {
		return {
			title: 'Note not found',
		};
	}
}

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const notesDirectory = path.join(process.cwd(), 'content', 'notes');
	const fileContents = await fs.readFile(path.join(notesDirectory, `${slug}.mdx`), 'utf8');
	const { data, content } = matter(fileContents);

	const note = {
		slug,
		title: data.title,
		publishDate: data.publishDate,
		excerpt: data.excerpt || null,
		tags: data.tags || [],
		content,
	};

	return <NoteSinglePage note={note} />;
}