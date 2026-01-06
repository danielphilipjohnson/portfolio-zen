import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import { getAllBlogs } from '@/lib/content/getAllBlogs';
import Link from 'next/link';
import { format, isValid, parse } from 'date-fns';

const LatestBlogs = async () => {
	const blogs = await getAllBlogs();

	const latestPosts = blogs
		.map(post => {
			const parsedDate = parse(post.publishDate, 'dd/MM/yyyy', new Date());
			const isDateValid = isValid(parsedDate);
			return {
				...post,
				parsedDate: isDateValid ? parsedDate : new Date(0),
				displayDate: isDateValid ? format(parsedDate, 'dd MMM yyyy') : post.publishDate,
			};
		})
		.sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime())
		.slice(0, 2);

	return (
		<section className="py-16 bg-[var(--color-stone-50)]" aria-label="Latest blog posts">
			<Container>
				<div className="flex flex-wrap items-center justify-between gap-4 mb-10">
					<div>
						<Text as="h2" variant="h2" weight="light" className="text-[var(--color-stone-900)]">
							Latest writing
						</Text>
						<Text variant="body" className="text-[var(--color-stone-600)]">
							Fresh notes on frontend craft and engineering leadership.
						</Text>
					</div>
					<Link
						href="/blog"
						className="text-sm font-medium tracking-wide uppercase text-[var(--color-moss-700)] hover:text-[var(--color-moss-900)]"
					>
						View all articles →
					</Link>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{latestPosts.map(post => (
						<article key={post.id} className="flex flex-col h-full p-6 transition-colors bg-white border rounded-sm border-[var(--color-stone-200)] hover:border-[var(--color-moss-400)]">
							<div className="flex items-center mb-4 text-xs uppercase tracking-wide text-[var(--color-stone-500)]">
								<span>{post.displayDate}</span>
								{post.readTime && <span className="ml-3">{post.readTime}</span>}
							</div>

							<Text as="h3" variant="h3" className="mb-3 text-[var(--color-stone-900)]">
								<Link href={`/blog/${post.slug}`} className="hover:text-[var(--color-moss-600)]">
									{post.title}
								</Link>
							</Text>

							{post.excerpt && (
								<p className="flex-1 mb-6 text-sm leading-relaxed text-[var(--color-stone-700)]">
									{post.excerpt}
								</p>
							)}

							<Link
								href={`/blog/${post.slug}`}
								className="text-sm font-medium text-[var(--color-moss-700)] hover:text-[var(--color-moss-900)]"
							>
								Read article →
							</Link>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
};

export default LatestBlogs;
