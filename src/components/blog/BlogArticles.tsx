import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/utils';

interface BlogCategory {
	name: string;
	slug: string;
}

interface BlogPost {
	id: string;
	title: string;
	slug: string;
	imageUrl: string;
	imageAlt: string;
	categories?: BlogCategory[];
	excerpt?: string;
	publishDate?: string;
	readTime?: string;
}

interface BlogArticlesProps {
	articles: BlogPost[];
	columns?: 1 | 2 | 3;
	showExcerpt?: boolean;
}

const BlogArticles = ({
	articles = [],
	columns = 2,
	showExcerpt = false
}: BlogArticlesProps) => {
	const gridCols = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
	};

	return (
		<section className={cn('grid', gridCols[columns], 'gap-8 mb-16')}>
			{articles.map((article) => (
				<article key={article.id} className="w-full">
					<div className="h-full overflow-hidden transition-all duration-300 bg-white rounded-[3px] border border-[var(--color-stone-200)]">
						<a
							href={`/blog/${article.slug}`}
							className="relative block overflow-hidden aspect-video"
						>
							<img
								src={article.imageUrl}
								alt={article.imageAlt || article.title}
								loading="lazy"
								className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
							/>
							<div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-stone-950 hover:opacity-10"></div>
						</a>

						<div className="p-6">
							{(article.publishDate || article.readTime) && (
								<div className="flex items-center mb-3">
									{article.publishDate && (
										<span className="mr-3 text-xs text-[var(--color-stone-600)]">
											{article.publishDate}
										</span>
									)}

									{article.readTime && (
										<span className="text-xs text-[var(--color-stone-600)]">
											{article.readTime}
										</span>
									)}
								</div>
							)}

							<Text variant="h2" as="h2" className="mb-3 text-xl font-light leading-tight transition-colors md:text-2xl hover:text-[var(--color-moss-600)] text-[var(--color-stone-800)]">
								<a href={`/blog/${article.slug}`} className="block">
									{article.title}
								</a>
							</Text>
								
							
							{showExcerpt && article.excerpt && (
								<p className="mb-4 text-sm line-clamp-3 text-[var(--color-stone-600)]">
									{article.excerpt}
								</p>
							)}

							<div className="flex items-center pt-3 border-t border-[var(--color-stone-100)]">
								<ul className="flex flex-wrap gap-1">
									{article.categories?.map((category, index) => (
										<li key={index}>
											<a
												href={`/blog/category/${category.slug}`}
												className="inline-block px-2 py-1 text-xs transition-colors rounded-sm bg-[var(--color-moss-50)] text-[var(--color-moss-700)]"
											>
												{category.name}
											</a>
										</li>
									))}
								</ul>

								<a
									href={`/blog/${article.slug}`}
									className="px-3 py-1 ml-auto text-xs transition-colors rounded-sm bg-[var(--color-moss-600)] text-white"
									aria-label={`Read full article: ${article.title}`}
								>
									Read article
								</a>
							</div>
						</div>
					</div>
				</article>
			))}
		</section>
	);
};

export default BlogArticles;