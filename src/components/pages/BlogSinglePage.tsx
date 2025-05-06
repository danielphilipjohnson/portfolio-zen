import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Text } from '@/components/ui/Text';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { CalloutBox } from '@/components/CalloutBox';
import InfoPanel from '@/components/ui/InfoPanel';
import Grid from '@/components/ui/Grid';
import GridItem from '@/components/ui/GridItem';
import { BlogPost } from '@/types/blog-post';
import { BlogPage } from '@/components/layouts/BlogPageLayout';
import { getSingleBlogPostJsonLd } from '@/utils/jsonLd';
import { format, parse } from 'date-fns';
import StructuredData from '../StructuredData';
import { Metadata } from 'next';

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


export default async function BlogPostPage({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params;
	const filePath = path.join(postsDirectory, `${slug}.mdx`)
	const source = fs.readFileSync(filePath, 'utf8')
	const { content, data } = matter(source)
	const postData = {
		...data,
		imageUrl: data.imageUrl,
		imageAlt: data.title,
		excerpt: data.excerpt,
	} as BlogPost;


	const parsedDate = parse(data.publishDate, 'dd/MM/yyyy', new Date());
	const formattedDate = format(parsedDate, 'yyyy-MM-dd');


	const blogPostJsonLdData = getSingleBlogPostJsonLd({
		slug: slug[0],
		title: data.title,
		publishDate: formattedDate,
		imageUrl: data.imageUrl,
		excerpt: data.excerpt,
		content: data.content,
	});

	const mdxContent = await MDXRemote({
		source: content,
		components: {
			h1: (props) => <Text as="h1" variant="h1" className="mt-12 mb-6 text-[var(--color-stone-800)]" {...props} />,
			h2: (props) => <Text as="h2" variant="h2" className="mt-10 mb-5 text-[var(--color-stone-800)]" {...props} />,
			h3: (props) => <Text as="h3" variant="h3" className="mt-8 mb-4 text-[var(--color-stone-800)]" {...props} />,
			h4: (props) => <Text as="h4" variant="h4" className="mt-6 mb-3 text-[var(--color-stone-800)]" {...props} />,
			h5: (props) => <Text as="h5" variant="h5" className="mt-5 mb-2 text-[var(--color-stone-800)]" {...props} />,
			h6: (props) => <Text as="h6" variant="h6" className="mt-4 mb-2 text-[var(--color-stone-800)]" {...props} />,
			p: (props) => <Text as="p" variant="body" className="mb-4 text-[var(--color-stone-600)]" {...props} />,
			ul: (props) => <ul className="pl-6 mb-4 space-y-2 list-disc text-[var(--color-stone-600)]" {...props} />,
			ol: (props) => <ol className="pl-6 mb-4 space-y-2 list-decimal text-[var(--color-stone-600)]" {...props} />,
			li: (props) => <li className="ml-2" {...props} />,
			CodeBlock,
			Text,
			CalloutBox,
			InfoPanel,
			Grid,
			GridItem
		}
	});

	return <>
		<StructuredData data={blogPostJsonLdData} id="blog-page-jsonld" />
		<BlogPage post={postData} content={mdxContent} />
	</>
}