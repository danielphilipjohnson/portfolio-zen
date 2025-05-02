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
import { BlogPage } from '../layouts/BlogPageLayout';

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function generateStaticParams() {
	const files = fs.readdirSync(postsDirectory)
	return files.map((file) => ({
		slug: file.replace(/\.mdx$/, ''),
	}))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
	const filePath = path.join(postsDirectory, `${params.slug}.mdx`)
	const source = fs.readFileSync(filePath, 'utf8')
	const { content, data } = matter(source)
	console.log("data", data)
	const postData = {
		...data,
		imageUrl: data.imageUrl,
		imageAlt: data.title,
		excerpt: data.excerpt,
	} as BlogPost;

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

	return <BlogPage post={postData} content={mdxContent} />
}