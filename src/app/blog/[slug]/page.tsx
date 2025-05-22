import { format, parse } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/posts')
const SITE_URL = 'https://www.danielphilipjohnson.com';

export async function generateStaticParams() {
	const files = fs.readdirSync(postsDirectory)
	return files.map((file) => ({
		slug: file.replace(/\.mdx$/, ''),
	}))
}

export async function generateMetadata(
	{ params }: { params: { slug: string } }
): Promise<Metadata> {
	const filePath = path.join(postsDirectory, `${params.slug}.mdx`);
	const fileContents = fs.readFileSync(filePath, 'utf8');
	const { data: frontmatter } = matter(fileContents);

	const postUrl = `${SITE_URL}/blog/${params.slug}`;

	const parsedDate = parse(frontmatter.publishDate, 'dd/MM/yyyy', new Date());
	const formattedDate = format(parsedDate, 'yyyy-MM-dd');

	const isoModifiedDate = parse(frontmatter.modifiedDate, 'dd/MM/yyyy', new Date());

	return {
		title: `${frontmatter.title} | Daniel Philip Johnson`,
		description: frontmatter.excerpt,
		keywords: frontmatter.tags || [],
		alternates: {
			canonical: postUrl,
		},
		openGraph: {
			title: frontmatter.title,
			description: frontmatter.excerpt,
			url: postUrl,
			type: 'article',
			publishedTime: formattedDate,
			modifiedTime: format(isoModifiedDate, 'yyyy-MM-dd'),
			authors: [frontmatter.author || 'Daniel Philip Johnson'],
			images: frontmatter.imageUrl
				? [{
					url: frontmatter.imageUrl.startsWith('http')
						? frontmatter.imageUrl
						: `${SITE_URL}${frontmatter.imageUrl}`,
					alt: frontmatter.imageAlt || frontmatter.title,
				}]
				: [{
					url: `${SITE_URL}/images/og/default-blog-og.jpg`,
					alt: frontmatter.title,
				}],
		},
		twitter: {
			card: 'summary_large_image',
			title: frontmatter.title,
			description: frontmatter.excerpt,
			images: frontmatter.imageUrl
				? [frontmatter.imageUrl.startsWith('http')
					? frontmatter.imageUrl
					: `${SITE_URL}${frontmatter.imageUrl}`]
				: [`${SITE_URL}/images/og/default-blog-og.jpg`],
		},
	};
}

export { default } from "@/components/pages/BlogSinglePage";