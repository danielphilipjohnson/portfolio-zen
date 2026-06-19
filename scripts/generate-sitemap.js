import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import { getAllBlogs } from './blogs/getAllBlogs.js';
import { getAllProjects } from './projects/getAllProjects.js';

const BASE_URL = 'https://danielphilipjohnson.com';

async function generateSitemap() {
	const sitemap = new SitemapStream({ hostname: BASE_URL });

	// Write sitemap.xml to public/
	const sitemapPath = path.resolve('public', 'sitemap.xml');
	const writeStream = fs.createWriteStream(sitemapPath);
	sitemap.pipe(writeStream);

	// Static pages
	const staticPages = [
		'',
		'about',
		'contact',
		'projects',
		'blog',
		'zen',
		'tao',
		'mcp',
		'engineering',
		'engineering/frontend-architecture',
		'mcp/deep-dive',
		'blog/tag/web-performance',
		'blog/tag/frontend-architecture',
		'blog/tag/engineering-principles',
		'blog/tag/fintech',
		'zen/calm-software-builds-trust',
		'zen/clarity-scales-across-teams',
		'zen/cultivate-systems-dont-rush-code',
		'zen/design-for-the-long-term',
		'zen/less-code-more-intention',
		'zen/prune-systems-with-care',
		'zen/understand-before-you-build',
		'social',
		'now',
		'notes',
	];

	for (const page of staticPages) {
		sitemap.write({ url: `/${page}`, changefreq: 'monthly', priority: 0.8 });
	}

	// Note pages from MDX
	try {
		const noteFiles = fs.readdirSync(path.resolve('content/notes'));
		noteFiles.forEach((file) => {
			const slug = file.replace(/\.mdx$/, '');
			sitemap.write({ url: `/notes/${slug}`, changefreq: 'monthly', priority: 0.6 });
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
