import { getAllBlogs } from './getAllBlogs';
import { format, isValid, parse } from 'date-fns';

export interface LatestPost {
	id: string;
	slug: string;
	title: string;
	publishDate: string;
	readTime: string;
	imageUrl: string;
	imageAlt: string;
	excerpt: string;
	tags: string[];
	displayDate: string;
}

export async function getLatestPosts(count: number = 3): Promise<LatestPost[]> {
	const blogs = await getAllBlogs();

	const withParsed = blogs.map(post => {
		const parsedDate = parse(post.publishDate, 'dd/MM/yyyy', new Date());
		const isDateValid = isValid(parsedDate);
		return {
			post,
			parsedDate: isDateValid ? parsedDate : new Date(0),
			displayDate: isDateValid ? format(parsedDate, 'dd MMM yyyy') : post.publishDate,
		};
	});

	withParsed.sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime());

	return withParsed.slice(0, count).map(p => ({
		...p.post,
		displayDate: p.displayDate,
	}));
}
