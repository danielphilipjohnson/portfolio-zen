import { getAllBlogs } from '@/lib/content/getAllBlogs';
import BlogPageClient from '@/components/blog/BlogPageClient';
import { format, isValid, parse } from 'date-fns';
import { getBlogListingPageJsonLd } from '@/utils/jsonLd';
import StructuredData from '../StructuredData';

const BlogPage = async () => {
	const blogPosts = await getAllBlogs();

	const postSummaries = blogPosts.map(post => {
		const date = parse(post.publishDate, 'dd/MM/yyyy', new Date());
		return {
			slug: post.slug,
			title: post.title,
			publishDate: isValid(date) ? format(date, 'yyyy-MM-dd') : 'Invalid date',
			imageUrl: post.imageUrl,
			excerpt: post.excerpt,
		};
	});
	const blogListingJsonLdData = getBlogListingPageJsonLd(postSummaries);

	return (
		<>
			<StructuredData data={blogListingJsonLdData} id="blog-listing-jsonld" />
			<BlogPageClient initialBlogPosts={blogPosts} />
		</>
	); };

export default BlogPage;
