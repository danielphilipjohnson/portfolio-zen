import React from 'react';
import { format, parse, isValid } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { kebabCase } from 'change-case';
import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import Link from 'next/link';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const MARGIN_CLASSES: Record<HeadingLevel, string> = {
	1: 'mt-10 mb-5',
	2: 'mt-8 mb-4',
	3: 'mt-6 mb-3',
	4: 'mt-5 mb-2',
	5: 'mt-4 mb-2',
	6: 'mt-3 mb-2',
};

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level: HeadingLevel;
	children: React.ReactNode;
}

const Heading = ({ level, children, ...props }: HeadingProps) => {
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

interface Note {
	slug: string;
	title: string;
	publishDate: string;
	excerpt: string | null;
	tags: string[];
	content: string;
}

interface NoteSinglePageProps {
	note: Note;
}

export default function NoteSinglePage({ note }: NoteSinglePageProps) {
	const date = parse(note.publishDate, 'dd/MM/yyyy', new Date());
	const formattedDate = isValid(date) ? format(date, 'MMMM d, yyyy') : note.publishDate;

	return (
		<main className="min-h-screen bg-[color:var(--color-stone-50)] pt-28 pb-20">
			<section className="pb-10">
				<Container>
					<Link
						href="/notes"
						className="inline-flex items-center gap-1.5 mb-6 text-sm text-[color:var(--color-stone-500)] hover:text-[color:var(--color-moss-600)] transition-colors"
					>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
						Back to notes
					</Link>

					<article className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-8 shadow-sm md:p-10">
						<header className="mb-8">
							<time className="text-sm text-[color:var(--color-stone-500)]">{formattedDate}</time>
							<Text
								as="h1"
								variant="h1"
								weight="light"
								className="mt-2 mb-4 text-[color:var(--color-stone-900)]"
							>
								{note.title}
							</Text>
							{note.tags.length > 0 && (
								<div className="flex flex-wrap gap-2">
									{note.tags.map(tag => (
										<span
											key={tag}
											className="px-2.5 py-1 text-xs font-medium rounded-full bg-[color:var(--color-stone-100)] text-[color:var(--color-stone-600)]"
										>
											{tag}
										</span>
									))}
								</div>
							)}
						</header>

						<div>
							<MDXRemote
								source={note.content}
								options={{
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
								}}
								components={{
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
									blockquote: (props) => (
										<blockquote className="border-l-4 border-[var(--color-moss-400)] pl-4 py-2 my-6 italic text-[var(--color-stone-700)]" {...props} />
									),
									strong: (props) => <strong className="font-semibold text-[var(--color-stone-900)]" {...props} />,
								}}
							/>
						</div>
					</article>
				</Container>
			</section>
		</main>
	);
}