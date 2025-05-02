import { getAllBlogs } from '@/lib/content/getAllBlogs';
import BlogPageClient from '@/components/blog/BlogPageClient';

const BlogPage = async () => {
	const blogPosts = await getAllBlogs();
	return <BlogPageClient initialBlogPosts={blogPosts} />;
};

export default BlogPage;
