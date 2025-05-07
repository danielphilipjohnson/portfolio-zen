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
}

const BlogPageClient = ({ initialBlogPosts }: BlogPageClientProps) => {
	const [activeCategory, setActiveCategory] = useState("all");
	const filteredBlogPosts = useMemo(() => {
		if (activeCategory === "all") return initialBlogPosts;
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
				categories={[
					{ name: "All", slug: "all", isDefault: true },
					{ name: "Technology", slug: "technology" },
					{ name: "Reflection", slug: "reflection" },
					{ name: "Frontend", slug: "frontend" },
				]}
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