import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { getAllBlogs } from './blogs/getAllBlogs.js';
import { getAllProjects } from './projects/getAllProjects.js';

const BASE_URL = 'https://danielphilipjohnson.com';

async function generateSitemap() {
	const sitemap = new SitemapStream({ hostname: BASE_URL });

	// Write sitemap.xml to public/
	const sitemapPath = path.resolve('public', 'sitemap.xml');
	const writeStream = createWriteStream(sitemapPath);
	sitemap.pipe(writeStream);

	// Static pages
	const staticPages = [
		'',
		'about',
		'contact',
		'projects',
		'blog',
		'zen',
		'mcp',
		'engineering'
	];

	for (const page of staticPages) {
		sitemap.write({ url: `/${page}`, changefreq: 'monthly', priority: 0.8 });
	}

	// Blog posts from MDX
	const blogPosts = await getAllBlogs();

	blogPosts.forEach((post) => {
		sitemap.write({
			url: `/blog/${post.slug}`,
			changefreq: 'weekly',
			priority: 0.7
		});
	});

	// Project posts from MDX
	const projectPosts = await getAllProjects();

	projectPosts.forEach((post) => {
		sitemap.write({
			url: `/projects/${post.slug}`,
			changefreq: 'weekly',
			priority: 0.7
		});
	});


	sitemap.end();

	await streamToPromise(sitemap);
	console.log('✅ sitemap.xml generated with', staticPages.length + blogPosts.length + projectPosts.length, 'entries');
}

generateSitemap().catch(console.error);
