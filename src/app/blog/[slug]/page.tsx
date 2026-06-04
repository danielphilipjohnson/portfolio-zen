import { format, parse } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';
import path from 'path';
import { OG_IMAGE, SITE_URL } from '@/lib/constants';

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function generateStaticParams() {
	const files = fs.readdirSync(postsDirectory)
	return files.map((file) => ({
		slug: file.replace(/\.mdx$/, ''),
	}))
}
type Params = Promise<{ slug: string }>;

export async function generateMetadata(
	{ params }: { params: Params }
): Promise<Metadata> {
	const { slug } = await params;
	const filePath = path.join(postsDirectory, `${slug}.mdx`);
	const fileContents = fs.readFileSync(filePath, 'utf8');
	const { data: frontmatter } = matter(fileContents);

	const postUrl = `${SITE_URL}/blog/${slug}`;

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
					url: OG_IMAGE.DEFAULT_BLOG,
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
				: [OG_IMAGE.DEFAULT_BLOG],
		},
	};
}

export { default } from "@/components/pages/BlogSinglePage";