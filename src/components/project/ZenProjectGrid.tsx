"use client"
import  { useState } from 'react';
import { cn } from '@/lib/utils';
import Text from '../ui/Text';
import { Button } from '../ui/Button';


interface ProjectCategory {
	name: string | { name: string; slug: string };
	slug: string;
	count?: number;
}

interface ProjectItem {
	id: string;
	title: string;
	slug: string;
	imageUrl: string;
	imageAlt?: string;
	description?: string;
	categories?: { name: string; slug: string }[];
	technologies?: string[];
	featured?: boolean;
	url?: string;
	githubUrl?: string;
}

interface ZenProjectGridProps {
	projects: ProjectItem[];
	categories?: ProjectCategory[];
	showFilters?: boolean;
}

const ZenProjectGrid = ({
	projects = [],
	categories = [
		{ name: "All", slug: "all", count: 12 },
		{ name: "Web Applications", slug: "web-applications", count: 5 },
		{ name: "Design Systems", slug: "design-systems", count: 3 },
		{ name: "Frontend", slug: "frontend", count: 8 },
		{ name: "Backend", slug: "backend", count: 4 }
	],
	showFilters = true
}: ZenProjectGridProps) => {
	// State for active category
	const [activeCategory, setActiveCategory] = useState('all');

	// Filter projects based on active category
	const filteredProjects = activeCategory === 'all'
		? projects
		: projects.filter(project =>
			project.categories?.some(category => category.slug === activeCategory)
		);
	// Handle category selection
	const handleCategoryChange = (slug: string) => {
		setActiveCategory(slug);
	};

	return (
		<section className="py-16 bg-stone-50">
			<div className="container px-6 mx-auto">
				<div className="max-w-3xl mb-12">
					<div className="flex items-center mb-4">
						<div className="w-8 h-px mr-4 bg-[var(--color-moss-500)]"/>
						<Text as="h2" variant="h4" weight={'light'} className="text-[var(--color-stone-800)]">
							Cultivated Projects
						</Text>
					</div>
					<Text as="p" variant="h6" className="text-[var(--color-stone-800)]">
						Each project represents a carefully tended digital ecosystem, pruned and shaped with intention.
						Like bonsai trees, they embody balance, purpose, and meticulous attention to detail.
					</Text>
				</div>

				{showFilters && (
					<div className="mb-12">
						<div className="flex flex-wrap gap-2">
							{categories.map((category) => (
								<button
									key={category.slug}
									onClick={() => handleCategoryChange(category.slug)}
									className={cn(
										"flex items-center px-4 py-2 text-sm transition-all border",
										activeCategory === category.slug
											? "bg-[var(--color-moss-600)] text-[var(--color-stone-50)] border-[var(--color-moss-600)]"
											: "bg-transparent text-[var(--color-stone-700)] border-[var(--color-stone-300)]"
									)}
								>
									<span>{typeof category.name === 'object' ? (category.name as { name: string; slug: string }).name : category.name}</span>
									{category.count && (
										<span
											className={cn(
												"ml-2 px-1.5 py-0.5 text-xs rounded-full",
												activeCategory === category.slug
													? "bg-[var(--color-moss-700)] text-[var(--color-stone-50)]"
													: "bg-[var(--color-stone-200)] text-[var(--color-stone-700)]"
											)}
										>
											{category.count}
										</span>
									)}
								</button>
							))}
						</div>
					</div>
				)}

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{filteredProjects.map((project) => (
						<article
							key={project.id}
							className={cn(
								"group transition-all duration-300",
								project.featured && "lg:col-span-2"
							)}
						>
							<div
								className="flex flex-col h-full overflow-hidden transition-all duration-300 border border-[var(--color-stone-200)] hover:shadow-md bg-white"
							>
								<div
								
									className="relative block overflow-hidden min-h-72 aspect-video"
								>
									<img
										src={project.imageUrl}
										alt={project.imageAlt || project.title}
										loading="lazy"
										className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
									/>
									{project.featured && (
										<div
											className="absolute px-2 py-1 text-xs top-3 right-3 bg-[var(--color-clay-400)] text-white"
										>
											Featured
										</div>
									)}

									{project.categories && project.categories.length > 0 && (
										<div
											className="absolute bottom-0 left-0 right-0 p-3 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 bg-[var(--color-stone-800)]/80"
										>
											<div className="flex flex-wrap gap-1">
												{project.categories.map((category, index) => (
													<span
														key={index}
														className="px-2 py-1 text-xs rounded-sm bg-[var(--color-moss-700)] text-[var(--color-stone-50)]"
													>
														<span>
															{typeof category.name === 'object' 
																? (category.name as { name: string; slug: string }).name 
																: category.name}
														</span>
													</span>
												))}
											</div>
										</div>
									)}
								</div>

								<div className="flex flex-col justify-end flex-grow p-6">

									<Text as="h3" variant="h5" weight="medium" className="text-[var(--color-stone-800)]">
										<a
											href={`/projects/${project.slug}`}
											className="transition-colors hover:text-[var(--color-moss-600)]"
										>
											{project.title}
										</a>
									</Text>
								
									
									{project.description && (
										<Text as="p" variant="body-sm" className="mb-4 line-clamp-3 text-[var(--color-stone-800)]">
											{project.description}
										</Text>
									)}

									{project.technologies && project.technologies.length > 0 && (
										<div className="mb-4">
											<Text as="h4" variant="body-sm" weight="medium" className="uppercase text-[var(--color-stone-800)]">
												Technologies
											</Text>
											
											<div className="flex flex-wrap gap-1">
												{project.technologies.map((tech, index) => (
													<span
														key={index}
														className="px-2 py-1 text-xs border bg-[var(--color-stone-50)] border-[var(--color-stone-200)] text-[var(--color-stone-700)]"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									)}

									<div className="flex items-center pt-4 mt-4 border-t border-[var(--color-stone-100)]">
										{project.url && (
										<a
											href={project.url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center mr-4 text-sm font-medium transition-colors text-[var(--color-moss-600)]"
										>
											<span>View Details</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-4 h-4 ml-1"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={1.5}
													d="M13 7l5 5m0 0l-5 5m5-5H6"
												/>
											</svg>
										</a>
										)}

										{project.githubUrl && (
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center text-sm transition-colors text-[var(--color-stone-800)]"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="w-4 h-4 mr-1"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg>
												<span>GitHub</span>
											</a>
										)}
									</div>
								</div>
							</div>
						</article>
					))}
				</div>

				{filteredProjects.length === 0 && (
					<div
						className="py-16 text-center text-[var(--color-stone-800)]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-16 h-16 mx-auto mb-4 opacity-20"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1}
								d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
							/>
						</svg>
						<Text as="h3" variant="h4" weight="light" className="mb-2">
							Technologies
						</Text>
						<Text as="p" variant="body" className="max-w-md mx-auto">
							Technologies
						</Text>
						
						<Button
							variant="primary"
							size="md"
							onClick={() => setActiveCategory('all')}
							className="mt-6"
						>
							View all projects
						</Button>
					</div>
				)}
			</div>
		</section>
	);
};

export default ZenProjectGrid;