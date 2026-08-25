import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import matter from 'gray-matter';
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
		{ url: '/engineering/frontend-architecture', priority: 0.9, changefreq: 'weekly' },
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
		{ url: '/privacy', priority: 0.3, changefreq: 'yearly' },
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

const LLMS_PAGES = [
	{ path: '/', title: 'Home', description: 'Portfolio overview and selected work' },
	{ path: '/about', title: 'About', description: 'Background, experience and approach' },
	{ path: '/projects', title: 'Projects', description: 'Selected projects and case studies' },
	{
		path: '/blog',
		title: 'Blog',
		description: 'All articles on frontend architecture, web performance and engineering principles'
	},
	{ path: '/notes', title: 'Notes', description: 'Short engineering notes' },
	{ path: '/engineering', title: 'Engineering', description: 'Engineering guides' },
	{ path: '/mcp', title: 'MCP', description: 'Model Context Protocol explained with analogies' },
	{ path: '/mcp/deep-dive', title: 'MCP Deep Dive', description: 'Deeper look at the Model Context Protocol' },
	{ path: '/zen', title: 'Zen', description: 'Zen principles applied to software craft' },
	{ path: '/tao', title: 'Tao', description: 'The Tao of Programming' },
	{ path: '/now', title: 'Now', description: 'What Daniel is currently working on' },
	{ path: '/social', title: 'Social', description: 'Links and profiles' },
	{ path: '/contact', title: 'Contact', description: 'How to get in touch' },
	{
		path: '/privacy',
		title: 'Privacy Policy',
		description:
			'How this site handles data: no analytics, no tracking cookies, no ads'
	}
];

async function generateLlmsTxt() {
	const lines = [];
	lines.push('# Daniel Philip Johnson');
	lines.push('');
	lines.push(
		'> Full-stack developer specialising in frontend architecture, web performance and calm, maintainable systems. This file is a markdown index of the site for AI agents.'
	);
	lines.push('');
	lines.push('## Pages');
	lines.push('');
	for (const page of LLMS_PAGES) {
		lines.push(`- [${page.title}](${BASE_URL}${page.path}): ${page.description}`);
	}

	try {
		const notesDir = path.resolve('content/notes');
		const noteFiles = fs
			.readdirSync(notesDir)
			.filter((file) => file.endsWith('.mdx'));
		if (noteFiles.length > 0) {
			lines.push('', '## Notes', '');
			for (const file of noteFiles) {
				const slug = file.replace(/\.mdx$/, '');
				let title = slug;
				try {
					const { data } = matter(
						fs.readFileSync(path.join(notesDir, file), 'utf8')
					);
					if (data.title) title = data.title;
				} catch {
					// fall back to slug as title
				}
				lines.push(`- [${title}](${BASE_URL}/notes/${slug}) ([markdown](${BASE_URL}/notes/${slug}.md))`);
			}
		}
	} catch {
		// notes directory might not exist
	}

	const blogPosts = await getAllBlogs();
	if (blogPosts.length > 0) {
		lines.push('', '## Blog posts', '');
		for (const post of blogPosts) {
			lines.push(`- [${post.title}](${BASE_URL}/blog/${post.slug}) ([markdown](${BASE_URL}/blog/${post.slug}.md))`);
		}
	}

	fs.writeFileSync(path.resolve('public', 'llms.txt'), lines.join('\n') + '\n');

	console.log('✅ llms.txt generated');
}

generateLlmsTxt().catch(console.error);
