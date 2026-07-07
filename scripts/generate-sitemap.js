import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import { getAllBlogs } from './blogs/getAllBlogs.js';

const BASE_URL = 'https://danielphilipjohnson.com';

async function generateSitemap() {
	const sitemap = new SitemapStream({ hostname: BASE_URL });

	const sitemapPath = path.resolve('public', 'sitemap.xml');

	const staticPages = [
		{ url: '', priority: 1.0, changefreq: 'weekly' },
		{ url: '/about', priority: 0.9, changefreq: 'monthly' },
		{ url: '/contact', priority: 0.6, changefreq: 'monthly' },
		{ url: '/projects', priority: 0.9, changefreq: 'weekly' },
		{ url: '/blog', priority: 0.9, changefreq: 'weekly' },
		{ url: '/zen', priority: 0.9, changefreq: 'weekly' },
		{ url: '/tao', priority: 0.9, changefreq: 'weekly' },
		{ url: '/mcp', priority: 0.9, changefreq: 'weekly' },
		{ url: '/engineering', priority: 0.9, changefreq: 'weekly' },
		{ url: '/engineering/frontend-architecture', priority: 0.8, changefreq: 'monthly' },
		{ url: '/mcp/deep-dive', priority: 0.8, changefreq: 'monthly' },
		{ url: '/blog/tag/web-performance', priority: 0.5, changefreq: 'monthly' },
		{ url: '/blog/tag/frontend-architecture', priority: 0.5, changefreq: 'monthly' },
		{ url: '/blog/tag/engineering-principles', priority: 0.5, changefreq: 'monthly' },
		{ url: '/blog/tag/fintech', priority: 0.5, changefreq: 'monthly' },
		{ url: '/zen/calm-software-builds-trust', priority: 0.8, changefreq: 'monthly' },
		{ url: '/zen/clarity-scales-across-teams', priority: 0.8, changefreq: 'monthly' },
		{ url: '/zen/cultivate-systems-dont-rush-code', priority: 0.8, changefreq: 'monthly' },
		{ url: '/zen/design-for-the-long-term', priority: 0.8, changefreq: 'monthly' },
		{ url: '/zen/less-code-more-intention', priority: 0.8, changefreq: 'monthly' },
		{ url: '/zen/prune-systems-with-care', priority: 0.8, changefreq: 'monthly' },
		{ url: '/zen/understand-before-you-build', priority: 0.8, changefreq: 'monthly' },
		{ url: '/social', priority: 0.5, changefreq: 'monthly' },
		{ url: '/now', priority: 0.6, changefreq: 'monthly' },
		{ url: '/notes', priority: 0.9, changefreq: 'weekly' },
	];

	for (const page of staticPages) {
		sitemap.write({ url: page.url, changefreq: page.changefreq, priority: page.priority });
	}

	// Note pages from MDX
	try {
		const noteFiles = fs.readdirSync(path.resolve('content/notes'));
		noteFiles.forEach((file) => {
			const slug = file.replace(/\.mdx$/, '');
			sitemap.write({ url: `/notes/${slug}`, changefreq: 'weekly', priority: 0.7 });
		});
	} catch {
		// notes directory might not exist
	}

	// Blog posts from MDX
	const blogPosts = await getAllBlogs();

	blogPosts.forEach((post) => {
		sitemap.write({
			url: `/blog/${post.slug}`,
			changefreq: 'weekly',
			priority: 0.8
		});
	});

	sitemap.end();

	let xml = await streamToPromise(sitemap);
	xml = xml.toString();

	// Strip unused XML namespaces
	xml = xml
		.replace(/\s+xmlns:news="[^"]*"/g, '')
		.replace(/\s+xmlns:xhtml="[^"]*"/g, '')
		.replace(/\s+xmlns:image="[^"]*"/g, '')
		.replace(/\s+xmlns:video="[^"]*"/g, '');

	fs.writeFileSync(sitemapPath, xml);

	console.log('✅ sitemap.xml generated with', staticPages.length + blogPosts.length, 'entries');
}

generateSitemap().catch(console.error);
