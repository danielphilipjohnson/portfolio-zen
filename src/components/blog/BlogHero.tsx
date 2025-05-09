"use client"
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/utils';

interface BlogCategory {
	name: string;
	slug: string;
	isDefault?: boolean;
}

interface BlogHeroProps {
	title?: string;
	notification?: string;
	description?: string;
	backgroundImageUrl?: string;
	categories?: BlogCategory[];
	activeCategory: string;
	onCategoryChange: (slug: string) => void;
}

const BlogHero = ({
	title = "Latest",
	notification = "⚡ Here are my current collection of blogs",
	description = "On this page, you will see a list of my blogs.",
	backgroundImageUrl = "/images/blogs/hero.png",
	categories,
	activeCategory,
	onCategoryChange
}: BlogHeroProps) => {
	return (
		<section className="relative mb-12">
			<div className="relative overflow-hidden">
				<div className="absolute inset-0 z-0">
					<img
						src={backgroundImageUrl}
						alt="Blog Hero"
						className="object-cover w-full h-full"
					/>
					<div
						className="absolute inset-0 bg-[var(--color-stone-950)]"
						style={{
							opacity: 0.8
						}}
					/>

				</div>

				<div className="container relative z-10 px-6 py-32 mx-auto mt-16 md:pt-48 md:pb-48">
					<div className="absolute top-0 left-0 w-1/3 h-1 bg-[var(--color-moss-500)]" />

					<div className="relative mb-6">
						<div className="absolute top-0 bottom-0 w-1 -left-4 bg-[var(--color-moss-500)]" />
						<Text as="h1" variant="hero" className="text-[var(--color-stone-50)]">
							{title}
						</Text>
					</div>

					<Text as="h2" variant="subtitle" className="max-w-2xl text-[var(--color-stone-50)]">
						Cultivating thoughtful insights on design and development
					</Text>
				</div>

				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-moss-500)] to-transparent" />
			</div>

			<div className="container relative z-20 px-6 mx-auto -mt-8 ">
				<div className="max-w-4xl">
					<div className="p-6 mb-8 border border-[var(--color-stone-200)] rounded-sm shadow-sm bg-[var(--color-stone-50)]">
						<Text className='text-[var(--color-stone-800)]' variant={'body-medium'}>
							{notification}
						</Text>
						
						<Text className='text-[var(--color-stone-800)]' variant={'body-sm'}>
							{description}
						</Text>
					</div>

					<div className="mb-8">
						<Text variant="body-sm" weight="medium" as="h2" className="mb-4 text-[var(--color-stone-800)] tracking-wide">
							FILTER BY CATEGORY
						</Text>

						<div className="flex flex-wrap gap-2">
							{categories?.map((category) => (
								<button
									key={category.slug}
									onClick={() => onCategoryChange(category.slug)}
									className={cn(
										'px-4 py-2 text-sm transition-colors border',
										activeCategory === category.slug
											? 'bg-[var(--color-moss-600)] text-[var(--color-stone-50)] border-[var(--color-moss-600)]'
											: 'bg-transparent text-[var(--color-stone-700)] border-[var(--color-stone-300)]'
									)}
								>
									{category.name}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="container px-6 mx-auto">
				<div className="w-16 h-px mb-8 bg-[var(--color-clay-400)]" />
			</div>
		</section>
	);
};

export default BlogHero;