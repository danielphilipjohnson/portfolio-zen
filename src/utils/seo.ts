export type SeoPagePath =
	| '/'
	| '/about'
	| '/projects'
	| '/blog'
	| '/contact';

export interface SEOData {
	title: string;
	description: string;
	keywords: string[];
	openGraph: {
		title: string;
		description: string;
		images: { url: string }[];
		type: 'website' | 'profile' | 'article';
		url?: string;
	};
}



export function getPageSEO(pathname: string): SEOData {
	const pages: Record<SeoPagePath, SEOData> = {
		'/': {
			title: 'Daniel Philip Johnson | Full-stack Developer',
			description: 'Full-stack developer specializing in React, Next.js, and modern web technologies, working remotely from Cornwall.',
			keywords: ['developer', 'fullstack', 'frontend', 'react', 'nextjs', 'javascript', 'typescript', 'tailwind'], // Keywords should be an array
			openGraph: { 
				title: 'Daniel Philip Johnson | Full-stack Developer',
				description: 'Full-stack developer specializing in React, Next.js, and modern web technologies, working remotely from Cornwall.',
				images: [{ url: '/images/og/home-og.jpg' }],
				type: 'website',
				url: 'https://www.danielphilipjohnson.com',
			},
		},
		'/about': {
			title: 'About Daniel Johnson | Full-stack Developer',
			description: 'Learn more about Daniel Philip Johnson, a full-stack developer with expertise in frontend technologies and a passion for creating elegant user experiences.',
			keywords: ['about Daniel Johnson', 'developer biography', 'software engineer', 'React developer', 'web developer background'],
			openGraph: {
				title: 'About Daniel Johnson | Full-stack Developer',
				description: 'Learn more about Daniel Philip Johnson, a full-stack developer with expertise in frontend technologies and a passion for creating elegant user experiences.',
				images: [{ url: '/images/og/about-og.png' }],
				type: 'profile',
				url: 'https://www.danielphilipjohnson.com/about',
			},
		},
		'/projects': {
			title: 'Projects | Daniel Johnson - Full-stack Developer',
			description: 'Explore my portfolio of web development projects using React, Next.js, Node.js, and other modern technologies.',
			keywords: ['web development projects', 'React applications', 'Next.js website', 'developer portfolio', 'coding projects'],
			openGraph: {
				title: 'Projects | Daniel Johnson - Full-stack Developer',
				description: 'Explore my portfolio of web development projects using React, Next.js, Node.js, and other modern technologies.',
				images: [{ url: '/images/og/projects-og.jpg' }],
				type: 'website',
				url: 'https://www.danielphilipjohnson.com/projects',
			},
		},
		'/blog': {
			title: 'Blog | Daniel Johnson - Full-stack Developer',
			description: 'Thoughts, tutorials and insights on frontend development, React, JavaScript, and modern web technologies.',
			keywords: ['developer blog', 'React tutorials', 'JavaScript tips', 'web development articles', 'coding tutorials'],
			openGraph: {
				title: 'Blog | Daniel Johnson - Full-stack Developer',
				description: 'Thoughts, tutorials and insights on frontend development, React, JavaScript, and modern web technologies.',
				images: [{ url: '/images/og/blog-og.jpg' }],
				type: 'website',
				url: 'https://www.danielphilipjohnson.com/blog',
			},
		},
		'/contact': {
			title: 'Contact | Daniel Johnson - Full-stack Developer',
			description: 'Get in touch with Daniel Philip Johnson for project inquiries, collaborations, or questions about web development.',
			keywords: ['contact developer', 'hire React developer', 'frontend developer contact', 'web development services'],
			openGraph: {
				title: 'Contact | Daniel Johnson - Full-stack Developer',
				description: 'Get in touch with Daniel Philip Johnson for project inquiries, collaborations, or questions about web development.',
				images: [{ url: '/images/og/contact-og.jpg' }],
				type: 'website',
				url: 'https://www.danielphilipjohnson.com/contact',
			},
		},
	};
	return pages[pathname as SeoPagePath];
}