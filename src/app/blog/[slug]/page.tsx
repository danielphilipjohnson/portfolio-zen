import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function generateStaticParams() {
	const files = fs.readdirSync(postsDirectory)
	return files.map((file) => ({
		slug: file.replace(/\.mdx$/, ''),
	}))
}

export { default } from "@/components/pages/BlogSinglePage";