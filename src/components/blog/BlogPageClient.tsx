"use client"
import BlogArticles from '@/components/blog/BlogArticles';
import BlogHero from '@/components/blog/BlogHero';
import { useState, useMemo } from 'react';

interface BlogPost {
	id: string;
	title: string;
	slug: string;
	imageUrl: string;
	imageAlt: string;
	category: string;
	tags?: string[];
	excerpt?: string;
	publishDate?: string;
	readTime?: string;
}

interface BlogPageClientProps {
	initialBlogPosts: BlogPost[];
	categories: { name: string; slug: string }[];
}

const BlogPageClient = ({ initialBlogPosts, categories }: BlogPageClientProps) => {
	const [activeCategory, setActiveCategory] = useState("All");
	const filteredBlogPosts = useMemo(() => {
		if (activeCategory === "All") return initialBlogPosts;
		return initialBlogPosts.filter(post => 
			post.tags?.some(tag => tag.toLowerCase() === activeCategory.toLowerCase())
		);
	}, [activeCategory, initialBlogPosts]);

	const handleCategoryChange = (categorySlug: string) => {
		setActiveCategory(categorySlug);
	};

	return (
		<main>
			<BlogHero
				title="Latest Blogs"
				notification="⚡ Here are my current collection of blogs"
				description="On this page, you will see a list of my blogs."
				backgroundImageUrl="/images/blogs/hero.png"
				categories={categories}
				activeCategory={activeCategory}
				onCategoryChange={handleCategoryChange}
			/>

			<div className="container px-6 mx-auto">
				<BlogArticles
					articles={filteredBlogPosts}
					columns={2}
					showExcerpt={true}
				/>
			</div>
		</main>
	);
};

export default BlogPageClient; 