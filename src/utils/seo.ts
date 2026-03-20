export type SeoPagePath =
	| '/'
	| '/about'
	| '/projects'
	| '/blog'
	| '/contact'
	| '/engineering'
	| '/zen'
	| '/mcp'
	| '/zen/cultivate-systems-dont-rush-code'
	| '/zen/less-code-more-intention'
	| '/zen/prune-systems-with-care'
	| '/zen/understand-before-you-build'
	| '/zen/calm-software-builds-trust'
	| '/zen/design-for-the-long-term'
	| '/zen/clarity-scales-across-teams';

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
		}, '/engineering': {
			title: 'Software Architecture, AI Systems & Frontend Architecture | Daniel Johnson',
			description: 'Engineering articles on software architecture, AI systems, AI security, frontend architecture, and distributed systems. Learn how modern production systems are designed.',
			keywords: [
				'software architecture',
				'system design',
				'ai systems architecture',
				'ai security engineering',
				'frontend architecture',
				'distributed systems design',
				'llm architecture',
				'rag architecture',
				'engineering blog',
				'production systems',
				'software system design'
			],
			openGraph: {
				title: 'Software Architecture, AI Systems & Frontend Architecture',
				description: 'Deep dives into software architecture, AI systems, frontend platforms, and distributed system design.',
				images: [{ url: '/images/og/engineering-og.jpg' }],
				type: 'website',
				url: 'https://www.danielphilipjohnson.com/engineering',
			},
		},
		'/mcp': {
			title: 'MCP Deep Dive | Daniel Johnson',
			description: 'A practical deep dive into Model Context Protocol (MCP): architecture, threat model, use cases, and expert concepts.',
			keywords: ['mcp', 'model context protocol', 'ai tools', 'llm architecture', 'agent engineering'],
			openGraph: {
				title: 'MCP Deep Dive | Daniel Johnson',
				description: 'Model Context Protocol explained from a systems and product engineering perspective.',
				images: [{ url: '/images/og/home-og.jpg' }],
				type: 'website',
				url: 'https://www.danielphilipjohnson.com/mcp',
			},
		},
		'/zen/cultivate-systems-dont-rush-code': {
			title: "Cultivate Systems, Don't Rush Code | Daniel Johnson",
			description: 'Principle 1 of calm software engineering: how long-term cultivation, architectural pruning, and deliberate system design create software that ages well.',
			keywords: [
				'software architecture',
				'engineering philosophy',
				'calm software',
				'long term system design',
				'maintainable software',
				'technical debt',
				'bonsai software metaphor',
			],
			openGraph: {
				title: "Cultivate Systems, Don't Rush Code",
				description: 'A deep dive into Principle 1: software systems should be cultivated over time, not rushed into complexity.',
				images: [{ url: '/images/og/engineering-og.jpg' }],
				type: 'article',
				url: 'https://www.danielphilipjohnson.com/zen/cultivate-systems-dont-rush-code',
			},
		},
		'/zen/less-code-more-intention': {
			title: 'Less Code. More Intention. | Daniel Johnson',
			description: 'Principle 2 of calm software engineering: reduce cognitive load, avoid premature abstraction, and design intentional systems that scale.',
			keywords: [
				'less code more intention',
				'software architecture',
				'engineering clarity',
				'cognitive load in software',
				'over abstraction',
				'maintainable systems',
				'calm software engineering',
			],
			openGraph: {
				title: 'Less Code. More Intention.',
				description: 'A deep dive into Principle 2: intentional architecture, lower surface area, and clearer systems.',
				images: [{ url: '/images/og/engineering-og.jpg' }],
				type: 'article',
				url: 'https://www.danielphilipjohnson.com/zen/less-code-more-intention',
			},
		},
		'/zen/prune-systems-with-care': {
			title: 'Prune Systems with Care | Daniel Johnson',
			description: 'Principle 3 of calm software engineering: reduce complexity through continuous refactoring, pruning abstractions, and deliberate maintenance.',
			keywords: [
				'prune systems with care',
				'software refactoring',
				'technical debt',
				'software architecture maintenance',
				'remove unnecessary abstraction',
				'calm software engineering',
				'codebase stewardship',
			],
			openGraph: {
				title: 'Prune Systems with Care',
				description: 'A deep dive into Principle 3: why simplification, refactoring, and pruning keep systems healthy.',
				images: [{ url: '/images/og/engineering-og.jpg' }],
				type: 'article',
				url: 'https://www.danielphilipjohnson.com/zen/prune-systems-with-care',
			},
		},
		'/zen/understand-before-you-build': {
			title: 'Understand Before You Build | Daniel Johnson',
			description: 'Principle 4 of calm software engineering: clarify constraints and trade-offs before implementation to avoid fragile architecture.',
			keywords: [
				'understand before you build',
				'software architecture tradeoffs',
				'system design thinking',
				'engineering constraints',
				'design before implementation',
				'calm software engineering',
			],
			openGraph: {
				title: 'Understand Before You Build',
				description: 'A deep dive into Principle 4: stillness before action, explicit trade-offs, and deliberate architecture.',
				images: [{ url: '/images/og/engineering-og.jpg' }],
				type: 'article',
				url: 'https://www.danielphilipjohnson.com/zen/understand-before-you-build',
			},
		},
		'/zen/calm-software-builds-trust': {
			title: 'Calm Software Builds Trust | Daniel Johnson',
			description: 'Principle 5 of calm software engineering: predictable behavior, resilient interfaces, and frontend architecture that builds user trust.',
			keywords: [
				'calm software builds trust',
				'frontend architecture',
				'predictable interfaces',
				'resilient ui design',
				'user trust in software',
				'design systems consistency',
				'calm software engineering',
			],
			openGraph: {
				title: 'Calm Software Builds Trust',
				description: 'A deep dive into Principle 5: how predictable and resilient software experiences create user confidence.',
				images: [{ url: '/images/og/engineering-og.jpg' }],
				type: 'article',
				url: 'https://www.danielphilipjohnson.com/zen/calm-software-builds-trust',
			},
		},
		'/zen/design-for-the-long-term': {
			title: 'Design for the Long Term | Daniel Johnson',
			description: 'Principle 6 of calm software engineering: build systems that adapt across years through maintainable architecture and long-term design thinking.',
			keywords: [
				'design for the long term',
				'long term software architecture',
				'maintainable systems',
				'software longevity',
				'architectural sustainability',
				'engineering for growth',
				'calm software engineering',
			],
			openGraph: {
				title: 'Design for the Long Term',
				description: 'A deep dive into Principle 6: longevity, maintainability, and architecture that ages well.',
				images: [{ url: '/images/og/engineering-og.jpg' }],
				type: 'article',
				url: 'https://www.danielphilipjohnson.com/zen/design-for-the-long-term',
			},
		},
		'/zen/clarity-scales-across-teams': {
			title: 'Clarity Scales Across Teams | Daniel Johnson',
			description: 'Principle 7 of calm software engineering: clear architecture and explicit boundaries help teams collaborate and scale without chaos.',
			keywords: [
				'clarity scales across teams',
				'software architecture collaboration',
				'engineering team scalability',
				'system boundaries',
				'software understandability',
				'technical leadership',
				'calm software engineering',
			],
			openGraph: {
				title: 'Clarity Scales Across Teams',
				description: 'A deep dive into Principle 7: architecture that enables collaboration, ownership, and scalable team velocity.',
				images: [{ url: '/images/og/engineering-og.jpg' }],
				type: 'article',
				url: 'https://www.danielphilipjohnson.com/zen/clarity-scales-across-teams',
			},
		},
	};
	return pages[pathname as SeoPagePath];
}
