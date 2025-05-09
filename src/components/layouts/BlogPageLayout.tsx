"use client"
import React from 'react'
import Container from '../ui/Container'
import Text from '../ui/Text'
import { BlogFooter } from '../blog/single/BlogFooter';
import { BlogPost } from '@/types/blog-post';
import { BlogSidebar } from '../blog/single/BlogSidebar';

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
								<button className="flex items-center space-x-1 text-sm text-[var(--color-stone-800)]">
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
						{/*<figcaption className="text-sm mt-2 text-center italic text-[var(--color-stone-500)]">
							Image: Zen garden representing the harmony and balance in design {post.imageUrl}
						</figcaption>*/}
					</figure>
				</Container>
			</header>

			<section className="py-12">
				<Container className="container px-6 mx-auto">
					<div className="flex flex-col lg:flex-row">
						<BlogSidebar post={post} />

						

						<article className="lg:w-3/4">
							<div className="mb-8 p-6 bg-[var(--color-moss-50)] border-l-4 border-[var(--color-moss-500)]">
								<Text variant="body" className="text-[var(--color-stone-800)]">
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
