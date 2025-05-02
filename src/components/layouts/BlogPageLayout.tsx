"use client"
import React from 'react'
import Container from '../ui/Container'
import Text from '../ui/Text'
import { BlogFooter } from '../blog/single/BlogFooter';
import { cn } from '@/lib/utils';
import { BlogPost } from '@/types/blog-post';

export const BlogPage = ({ post, content }: { post: BlogPost; content: React.ReactNode }) => {
	return (
		<main className="min-h-screen bg-[var(--color-stone-50)]">
			<header className="pt-24 pb-8">
				<Container className="container px-6 mx-auto mb-4">
					<div className="flex flex-wrap items-center justify-between">
						<div className="flex items-center mb-2 space-x-4 md:mb-0">
							<span className="inline-block px-3 py-1 text-xs bg-[var(--color-moss-100)] text-[var(--color-moss-700)]">
								{post.category}
							</span>
							<span className="text-sm text-[var(--color-stone-500)]">
								{post.readingTime}
							</span>
						</div>

						<div className="flex items-center space-x-4">
							<span className="text-sm text-[var(--color-stone-500)]">
								{post.publishDate}
							</span>

							<div className="relative">
								<button className="flex items-center space-x-1 text-sm text-[var(--color-stone-600)]">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
									</svg>
									<span>Share</span>
								</button>
							</div>
						</div>
					</div>
				</Container>

				<Container className="container px-6 mx-auto mb-8">
					<Text
						variant="h1"
						as="h1"
						className="mb-4 max-w-4xl text-[var(--color-stone-800)]"
					>
						{post.title}
					</Text>
				</Container>

				<Container className="container px-6 mx-auto mb-8">
					<div className="flex items-center">
						<img
							src={post.author.avatar}
							alt={post.author.name}
							className="object-cover w-12 h-12 mr-4 rounded-full"
						/>
						<div>
							<Text
								variant="body-sm"
								weight="medium"
								className="text-[var(--color-stone-800)]"
							>
								{post.author.name}
							</Text>
							<Text
								variant="caption"
								className="text-[var(--color-stone-900)]"
							>
								{post.author.role}
							</Text>
						</div>
					</div>
				</Container>

				<Container>
					<figure>
						<img
							src={post.imageUrl}
							alt="Hero"
							className="w-full h-auto object-cover max-h-[500px]"
						/>
						<figcaption className="text-sm mt-2 text-center italic text-[var(--color-stone-500)]">
							Image: Zen garden representing the harmony and balance in design {post.imageUrl}
						</figcaption>
					</figure>
				</Container>
			</header>

			<section className="py-12">
				<Container className="container px-6 mx-auto">
					<div className="flex flex-col lg:flex-row">

						<aside className="mb-8 lg:w-1/4 lg:pr-8 lg:mb-0">
							<div className="sticky top-24">
								<div className="p-6 mb-6 bg-white border border-[var(--color-stone-200)]">
									<Text
										variant="h5"
										as="h2"
										className="mb-4 text-[var(--color-moss-700)]"
									>
										Table of Contents
									</Text>

									<nav>
										<ul className="space-y-3">
											{post.tableOfContents.map((item) => (
												<li
													key={item.id}
													className={cn(`ml-${(item.level - 1) * 4}`)}
												>
													<a
														href={`#${item.id}`}
														className="block text-sm transition-colors hover:underline"
													>
														{item.title}
													</a>
												</li>
											))}
										</ul>
									</nav>
								</div>

								<div className="p-6 mb-6 bg-white border border-[var(--color-stone-200)]">
									<Text
										variant="h5"
										as="h2"
										className="mb-4 text-[var(--color-moss-700)]"
									>
										Tags
									</Text>

									<div className="flex flex-wrap gap-2">
										{post.tags.map((tag, index) => (
											<a
												key={index}
												href={`/blog/tag/${tag.toLowerCase().replace(/ /g, '-')}`}
												className="inline-block px-3 py-1 text-xs transition-colors bg-[var(--color-stone-100)] text-[var(--color-stone-600)]"
											>
												{tag}
											</a>
										))}
									</div>
								</div>

								<div className="p-6 bg-white border border-[var(--color-stone-200)]">
									<Text
										variant="h5"
										as="h2"
										className="mb-4 text-[var(--color-moss-700)]"
									>
										Share This Article
									</Text>

									<div className="flex gap-3">
										<a
											href="#"
											className="w-9 h-9 flex items-center justify-center rounded-full transition-colors bg-[var(--color-stone-100)] text-[var(--color-stone-600)]"
											onClick={(e) => {
												e.preventDefault();
												window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank');
											}}
										>
											<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
												<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
											</svg>
										</a>
										<a
											href="#"
											className="w-9 h-9 flex items-center justify-center rounded-full transition-colors bg-[var(--color-stone-100)] text-[var(--color-stone-600)]"
											onClick={(e) => {
												e.preventDefault();
												window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
											}}
										>
											<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
												<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</aside>

						<article className="lg:w-3/4">
							<div className="mb-8 p-6 bg-[var(--color-moss-50)] border-l-4 border-[var(--color-moss-500)]">
								<Text variant="body" className="text-[var(--color-stone-600)]">
									{post.excerpt}
								</Text>
							</div>

							<div>
								{content}
							</div>

						</article>
					</div>
					<BlogFooter post={post}   />
				</Container>
			</section>
		</main>
	)
}
