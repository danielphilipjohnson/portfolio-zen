import React from 'react';
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
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { kebabCase } from 'change-case';
import Quote from '@/components/ui/Quote';

const postsDirectory = path.join(process.cwd(), 'content/posts')

interface TableOfContentsItem {
	id: string;
	title: string;
	level: number;
}

const extractTableOfContents = (content: string): TableOfContentsItem[] => {
	const headingRegex = /^(#{1,6})\s+(.+)$/gm;
	const items: TableOfContentsItem[] = [];
	let match;

	while ((match = headingRegex.exec(content)) !== null) {
		const level = match[1].length;
		if (level === 2) {
			const title = match[2].trim();
			const id = kebabCase(title);

			items.push({
				id,
				title,
				level,
			});
		}
	}

	return items;
};

export async function generateStaticParams() {
	const files = fs.readdirSync(postsDirectory)
	return files.map((file) => ({
		slug: file.replace(/\.mdx$/, ''),
	}))
}


type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level: HeadingLevel;
	children: React.ReactNode;
}

const MARGIN_CLASSES: Record<HeadingLevel, string> = {
	1: 'mt-12 mb-6',
	2: 'mt-10 mb-5',
	3: 'mt-8 mb-4',
	4: 'mt-6 mb-3',
	5: 'mt-5 mb-2',
	6: 'mt-4 mb-2',
};

const Heading = ({ level, children, ...props }: HeadingProps) => {
	// Convert children to string for aria-label and href
	const headingText = React.Children.toArray(children)
		.map(child => {
			if (typeof child === 'string') return child;
			if (React.isValidElement(child)) {
				const element = child as React.ReactElement<{ children?: string }>;
				return element.props.children || '';
			}
			return '';
		})
		.join('')
		.trim();

	// Generate id from heading text if not provided
	const headingId = props.id || kebabCase(headingText);

	return (
		<Text
			as={`h${level}`}
			variant={`h${level}`}
			className={`${MARGIN_CLASSES[level]} text-[var(--color-stone-800)] group`}
			id={headingId}
			{...props}
		>
			{children}
			<a
				href={`#${headingId}`}
				className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[var(--color-moss-500)] no-underline"
				aria-label={`Link to ${headingText}`}
			>
				#
			</a>
		</Text>
	);
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string[] }> }) {
	const { slug } = await params;
	const filePath = path.join(postsDirectory, `${slug}.mdx`)
	const source = fs.readFileSync(filePath, 'utf8')
	const { content, data } = matter(source)

	// Generate table of contents from content
	const tableOfContents = extractTableOfContents(content);

	const postData = {
		...data,
		imageUrl: data.imageUrl,
		imageAlt: data.title,
		excerpt: data.excerpt,
		tableOfContents, // Add the generated table of contents
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
		options: {
			mdxOptions: {
				rehypePlugins: [
					[rehypeAutolinkHeadings, {
						behavior: 'prepend',
						properties: {
							className: ['anchor'],
							ariaLabel: 'Link to section',
						},
					}],
				],
			},
		},
		components: {
			h1: (props) => <Heading level={1} {...props} />,
			h2: (props) => <Heading level={2} {...props} />,
			h3: (props) => <Heading level={3} {...props} />,
			h4: (props) => <Heading level={4} {...props} />,
			h5: (props) => <Heading level={5} {...props} />,
			h6: (props) => <Heading level={6} {...props} />,
			p: (props) => <Text as="p" variant="body" className="mb-4 text-[var(--color-stone-800)]" {...props} />,
			ul: (props) => <ul className="pl-6 mb-4 space-y-2 list-disc text-[var(--color-stone-800)]" {...props} />,
			ol: (props) => <ol className="pl-6 mb-4 space-y-2 list-decimal text-[var(--color-stone-800)]" {...props} />,
			li: (props) => <li className="ml-2" {...props} />,
			CodeBlock,
			Text,
			CalloutBox,
			InfoPanel,
			Grid,
			GridItem,
			Quote
		}
	});

	return <>
		<StructuredData data={blogPostJsonLdData} id="blog-page-jsonld" />
		<BlogPage post={postData} content={mdxContent} />
	</>
}