import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_URL = 'https://danielphilipjohnson.com';

const TARGETS = [
	{ sourceDir: 'content/posts', outDir: 'out/blog', urlPrefix: '/blog' },
	{ sourceDir: 'content/notes', outDir: 'out/notes', urlPrefix: '/notes' }
];

function cleanStaleMirrors(outDir, validSlugs) {
	if (!fs.existsSync(outDir)) return;
	for (const file of fs.readdirSync(outDir)) {
		if (!file.endsWith('.md')) continue;
		const slug = file.replace(/\.md$/, '');
		if (!validSlugs.has(slug)) {
			fs.unlinkSync(path.join(outDir, file));
			console.log(`🧹 removed stale mirror: ${file}`);
		}
	}
}

function renderMarkdown({ slug, urlPrefix, data, content }) {
	const title = data.title || slug;
	const body = content
		.split('\n')
		.filter((line) => !/^\s*(import|export)\s/.test(line))
		.join('\n')
		.trim();

	const lines = [`# ${title}`, ''];
	lines.push(`> Canonical URL: ${BASE_URL}${urlPrefix}/${slug}`);
	lines.push('');
	if (data.publishDate) lines.push(`Published: ${data.publishDate}`);
	if (data.category) lines.push(`Category: ${data.category}`);
	if (Array.isArray(data.tags) && data.tags.length > 0) {
		lines.push(`Tags: ${data.tags.join(', ')}`);
	}
	if (data.publishDate || data.category || data.tags) lines.push('');
	lines.push(body);
	lines.push('');

	return lines.join('\n');
}

function generateMarkdownMirrors() {
	let count = 0;

	for (const { sourceDir, outDir, urlPrefix } of TARGETS) {
		const srcPath = path.resolve(sourceDir);
		if (!fs.existsSync(srcPath)) continue;

		fs.mkdirSync(outDir, { recursive: true });

		const files = fs
			.readdirSync(srcPath)
			.filter((file) => /\.mdx?$/.test(file));
		const validSlugs = new Set();

		for (const file of files) {
			const filePath = path.join(srcPath, file);
			const raw = fs.readFileSync(filePath, 'utf8');
			const { data, content } = matter(raw);
			const slug = data.slug || file.replace(/\.mdx?$/, '');
			validSlugs.add(slug);

			const markdown = renderMarkdown({
				slug,
				urlPrefix,
				data,
				content
			});
			fs.writeFileSync(
				path.join(outDir, `${slug}.md`),
				markdown
			);
			count += 1;
		}

		cleanStaleMirrors(outDir, validSlugs);
	}

	console.log(`✅ generated ${count} markdown mirrors`);
}

generateMarkdownMirrors();
