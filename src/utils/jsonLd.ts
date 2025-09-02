import type {
	Person,
	Organization,
	WebSite,
	WebPage,
	BreadcrumbList,
	ImageObject,
	SearchAction,
	EntryPoint,
	ListItem,
	BlogPosting,
	Blog,
	SoftwareApplication,
	CollectionPage,
} from 'schema-dts';

type SchemaOrgObject = Person | Organization | WebSite | WebPage | BreadcrumbList | ImageObject | SearchAction | EntryPoint | ListItem | BlogPosting | Blog | SoftwareApplication | CollectionPage;

export interface SchemaOrgGraphItem {
	"@type": string;
	"@id"?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export interface BlogPostDetail {
	slug: string;
	title: string;
	publishDate: string; // In yyyy-MM-dd
	imageUrl?: string;
	excerpt?: string;
	content?: string; // Optional full content
}

export interface BlogPostSummary {
	slug: string;
	title: string;
	publishDate: string;
	imageUrl?: string;
	excerpt?: string;
}

export const SITE_URL = 'https://www.danielphilipjohnson.com';
export const PERSON_SCHEMA_ID = `${SITE_URL}/#/schema/person/danielphilipjohnson`;
export const ORGANIZATION_SCHEMA_ID = `${SITE_URL}/#/schema/organization/danielphilipjohnson`;
export const WEBSITE_SCHEMA_ID = `${SITE_URL}/#website`;


export function getBaseSiteJsonLd(): { "@context": "https://schema.org"; "@graph": SchemaOrgObject[] } {
	const organizationSchema: Organization = {
		"@type": "Organization",
		"name": "Daniel Philip Johnson",
		"@id": ORGANIZATION_SCHEMA_ID,
		"url": SITE_URL,
		"sameAs": [
			"https://www.instagram.com/danielphilipjohnson/",
			"https://www.linkedin.com/in/daniel-philip-johnson/",
			"https://twitter.com/danielp_johnson",
			"https://dev.to/danielphilipjohnson",
			"https://github.com/danielphilipjohnson",
			"https://www.polywork.com/danielpjohnson",
		],
		"logo": {
			"@type": "ImageObject",
			"@id": `${SITE_URL}/images/logo.png`,
			"url": `${SITE_URL}/images/logo.png`,
			"contentUrl": `${SITE_URL}/images/logo.png`,
			"caption": "Daniel Philip Johnson Logo",
			"inLanguage": "en-GB"
		},
		"image": {
			"@type": "ImageObject",
			"url": `${SITE_URL}/images/logo.png`
		}
	};

	const localImageUrl = `${SITE_URL}/images/about/me.jpg`;




	const personSchema: Person = {
		"@type": "Person",
		"@id": PERSON_SCHEMA_ID,
		"name": "Daniel Philip Johnson",
		"url": SITE_URL,
		"image": {
			"@type": "ImageObject",
			"inLanguage": "en-GB",
			"url": localImageUrl,
			"contentUrl": localImageUrl,
			"caption": "Daniel Philip Johnson"
		},
		"description": "Daniel Philip Johnson is a full-stack developer who blends thoughtful design with scalable code. He builds calm, maintainable systems using React and modern frameworks, focusing on clarity, simplicity, and long-term value.",
		"sameAs": [
			SITE_URL,
			"https://twitter.com/danielp_johnson",
			"https://www.linkedin.com/in/daniel-philip-johnson/",
			"https://github.com/danielphilipjohnson"
		],
		"jobTitle": "Full-Stack Developer",
		"worksFor": {
			"@type": "Organization",
			"@id": ORGANIZATION_SCHEMA_ID
		}
	};

	const websiteSchema: WebSite = {
		"@type": "WebSite",
		"@id": WEBSITE_SCHEMA_ID,
		"url": SITE_URL,
		"name": "Daniel Philip Johnson - Portfolio & Blog",
		"description": "Portfolio and blog of Daniel Philip Johnson, a full-stack web developer.",
		"publisher": {
			"@type": "Organization",
			"@id": ORGANIZATION_SCHEMA_ID
		},
		"inLanguage": "en-GB"
	};

	return {
		"@context": "https://schema.org",
		"@graph": [
			organizationSchema,
			personSchema,
			websiteSchema,
		],
	};
}

export function getAboutPageJsonLd(): { "@context": "https://schema.org"; "@graph": SchemaOrgObject[] } {
	const baseJsonLd = getBaseSiteJsonLd();

	const aboutPageSchema: WebPage = {
		"@type": "WebPage",
		"@id": `${SITE_URL}/about/#webpage`,
		"url": `${SITE_URL}/about/`,
		"name": "About | Daniel Philip Johnson",
		"description": "Learn more about Daniel Philip Johnson, a full-stack developer focused on React, Next.js, and modern web platforms.",
		"isPartOf": {
			"@type": "WebSite",
			"@id": WEBSITE_SCHEMA_ID
		},
		"about": {
			"@type": "Person",
			"@id": PERSON_SCHEMA_ID
		},
		"inLanguage": "en-GB"
	};

	const aboutBreadcrumb: BreadcrumbList = {
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
			{ "@type": "ListItem", "position": 2, "name": "About", "item": `${SITE_URL}/about/` }
		]
	};

	const graph: SchemaOrgObject[] = [
		...baseJsonLd["@graph"],
		aboutPageSchema,
		aboutBreadcrumb
	];

	return {
		...baseJsonLd,
		"@graph": graph
	};
}


export function getHomePageJsonLd(): { "@context": "https://schema.org"; "@graph": SchemaOrgObject[] } {
	const baseJsonLd = getBaseSiteJsonLd();

	const homePageSchema: WebPage = {
		"@type": "WebPage",
		"@id": `${SITE_URL}/#homepage`,
		"url": SITE_URL,
		"name": "Daniel Philip Johnson | Full-Stack Developer - Home",
		"description": "Welcome to the portfolio of Daniel Philip Johnson, a full-stack developer specializing in React, Next.js, and modern web technologies.",
		"isPartOf": { 
			"@type": "WebSite",
			"@id": WEBSITE_SCHEMA_ID
		},
		"about": { 
			"@type": "Person",
			"@id": PERSON_SCHEMA_ID
		},
		"inLanguage": "en-GB",
		"primaryImageOfPage": {
			"@type": "ImageObject",
			"url": `${SITE_URL}/images/og/home-og.jpg`
		}
	};

	const homeBreadcrumb: BreadcrumbList = {
		"@type": "BreadcrumbList",
		"itemListElement": [{
			"@type": "ListItem",
			"position": 1,
			"name": "Home",
			"item": SITE_URL 
		}]
	};

	const graph = [...baseJsonLd["@graph"], homePageSchema, homeBreadcrumb];

	return {
		...baseJsonLd,
		"@graph": graph
	};
}

export function getBlogListingPageJsonLd(posts: BlogPostSummary[]): { "@context": "https://schema.org"; "@graph": SchemaOrgObject[] } {
	const baseJsonLd = getBaseSiteJsonLd();

	const blogListingPageSchema: WebPage = {
		"@type": "WebPage",
		"@id": `${SITE_URL}/blog/#webpage`,
		"url": `${SITE_URL}/blog/`,
		"name": "Blog | Daniel Philip Johnson",
		"description": "Latest articles on web development, Next.js, React by Daniel Philip Johnson.",
		"isPartOf": { "@type": "WebSite", "@id": WEBSITE_SCHEMA_ID },
		"inLanguage": "en-GB",
		"publisher": { "@type": "Organization", "@id": ORGANIZATION_SCHEMA_ID }
	};

	const blogPostSummaries: BlogPosting[] = posts.map((post): BlogPosting => ({ 
		"@type": "BlogPosting",
		"@id": `${SITE_URL}/blog/${post.slug}/#article`,
		"mainEntityOfPage": `${SITE_URL}/blog/${post.slug}/`,
		"headline": post.title,
		"name": post.title,
		"url": `${SITE_URL}/blog/${post.slug}/`,
		"datePublished": post.publishDate,
		"author": { "@type": "Person", "@id": PERSON_SCHEMA_ID },
		"publisher": { "@type": "Organization", "@id": ORGANIZATION_SCHEMA_ID },
		...(post.imageUrl && {
			"image": {
				"@type": "ImageObject",
				"url": post.imageUrl.startsWith('http') ? post.imageUrl : `${SITE_URL}${post.imageUrl}`
			} as ImageObject
		}),
		...(post.excerpt && { "description": post.excerpt }),
	}));

	const blogSchema: Blog = {
		"@type": "Blog",
		"@id": `${SITE_URL}/blog/#blog-main`,
		"mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/blog/#webpage` }, 
		"name": "Daniel Philip Johnson's Blog",
		"description": "A collection of articles and insights on modern web development.",
		"publisher": { "@type": "Organization", "@id": ORGANIZATION_SCHEMA_ID },
		"blogPost": blogPostSummaries,
		"url": `${SITE_URL}/blog/`,
		"inLanguage": "en-GB",
	};

	const blogBreadcrumb: BreadcrumbList = {
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
			{ "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog/` }
		]
	};

	const graph = [...baseJsonLd["@graph"], blogListingPageSchema, blogSchema, blogBreadcrumb];

	return {
		...baseJsonLd,
		"@graph": graph as SchemaOrgObject[]
	};
}

export function getSingleBlogPostJsonLd(post: BlogPostDetail): { "@context": "https://schema.org"; "@graph": SchemaOrgObject[] } {
	const baseJsonLd = getBaseSiteJsonLd();
	const blogUrl = `${SITE_URL}/blog/${post.slug}/`;

	const blogPageSchema: WebPage = {
		"@type": "WebPage",
		"@id": `${blogUrl}#webpage`,
		"url": blogUrl,
		"name": post.title,
		"description": post.excerpt || '',
		"isPartOf": { "@type": "WebSite", "@id": WEBSITE_SCHEMA_ID },
		"inLanguage": "en-GB",
		"publisher": { "@type": "Organization", "@id": ORGANIZATION_SCHEMA_ID },
		"about": { "@type": "Person", "@id": PERSON_SCHEMA_ID }
	};

	const blogPostSchema: BlogPosting = {
		"@type": "BlogPosting",
		"@id": `${blogUrl}#article`,
		"mainEntityOfPage": { "@type": "WebPage", "@id": `${blogUrl}#webpage` },
		"url": blogUrl,
		"headline": post.title,
		"name": post.title,
		"datePublished": post.publishDate,
		"author": { "@type": "Person", "@id": PERSON_SCHEMA_ID },
		"publisher": { "@type": "Organization", "@id": ORGANIZATION_SCHEMA_ID },
		...(post.imageUrl && {
			"image": {
				"@type": "ImageObject",
				"url": post.imageUrl.startsWith('http') ? post.imageUrl : `${SITE_URL}${post.imageUrl}`
			} as ImageObject
		}),
		...(post.excerpt && { "description": post.excerpt }),
		...(post.content && { "articleBody": post.content })
	};

	const breadcrumbSchema: BreadcrumbList = {
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
			{ "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog/` },
			{ "@type": "ListItem", "position": 3, "name": post.title, "item": blogUrl }
		]
	};

	const graph: SchemaOrgObject[] = [
		...baseJsonLd["@graph"],
		blogPageSchema,
		blogPostSchema,
		breadcrumbSchema
	];

	return {
		...baseJsonLd,
		"@graph": graph
	};
}
// ! here
export function getContactPageJsonLd(): { "@context": "https://schema.org"; "@graph": SchemaOrgObject[] } {
	const baseJsonLd = getBaseSiteJsonLd();

	const contactPageSchema: WebPage = {
		"@type": "WebPage",
		"@id": `${SITE_URL}/contact/#webpage`,
		"url": `${SITE_URL}/contact/`,
		"name": "Contact | Daniel Philip Johnson",
		"description": "Get in touch with Daniel Philip Johnson for collaboration, freelance inquiries, or general questions.",
		"isPartOf": {
			"@type": "WebSite",
			"@id": WEBSITE_SCHEMA_ID
		},
		"about": {
			"@type": "Person",
			"@id": PERSON_SCHEMA_ID
		},
		"inLanguage": "en-GB"
	};

	const contactBreadcrumb: BreadcrumbList = {
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
			{ "@type": "ListItem", "position": 2, "name": "Contact", "item": `${SITE_URL}/contact/` }
		]
	};

	const graph: SchemaOrgObject[] = [
		...baseJsonLd["@graph"],
		contactPageSchema,
		contactBreadcrumb
	];

	return {
		...baseJsonLd,
		"@graph": graph
	};
}


export interface ProjectSummary {
	slug: string;
	title: string;
	imageUrl?: string;
	excerpt?: string;
	applicationCategory?: string;
}


export function getProjectsListingPageJsonLd(projects: ProjectSummary[]): { "@context": "https://schema.org"; "@graph": SchemaOrgGraphItem[] } {
  const baseJsonLd = getBaseSiteJsonLd();

  const projectsListingPageSchema: WebPage = {
    "@type": "WebPage",
		"@id": `${SITE_URL}/projects/#webpage`,
		"url": `${SITE_URL}/projects/`,
		"name": "Projects | Daniel Philip Johnson",
		"description": "Explore a collection of projects by Daniel Philip Johnson, showcasing skills in web development, Next.js, React, and more.",
		"isPartOf": { "@type": "WebSite", "@id": WEBSITE_SCHEMA_ID },
		"inLanguage": "en-GB",
		"publisher": { "@type": "Organization", "@id": ORGANIZATION_SCHEMA_ID }
	};

	const projectSummariesSchema: SoftwareApplication[] = projects.map((project): SoftwareApplication => ({
		"@type": "SoftwareApplication",
		"@id": `${SITE_URL}/projects/${project.slug}/#project`,
		"name": project.title,
		"url": `${SITE_URL}/projects/${project.slug}/`,
		"description": project.excerpt,
		...(project.imageUrl && {
			"image": {
				"@type": "ImageObject",
				"url": project.imageUrl.startsWith('http') ? project.imageUrl : `${SITE_URL}${project.imageUrl}`
			} as ImageObject
		}),
		"author": { "@type": "Person", "@id": PERSON_SCHEMA_ID },
		...(project.applicationCategory && { "applicationCategory": project.applicationCategory }),
		"operatingSystem": "Web-based"
	}));

	const collectionPageSchema: CollectionPage = {
		"@type": "CollectionPage",
		"@id": `${SITE_URL}/projects/#collection`,
		"mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/projects/#webpage` },
		"name": "My Projects Collection",
		"description": "A curated list of software development projects.",
		// hasPart expects CreativeWork[], SoftwareApplication is a CreativeWork
		"hasPart": projectSummariesSchema,
		"publisher": { "@type": "Organization", "@id": ORGANIZATION_SCHEMA_ID },
		"creator": { "@type": "Person", "@id": PERSON_SCHEMA_ID }
	};

	const projectsBreadcrumb: BreadcrumbList = {
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
			{ "@type": "ListItem", "position": 2, "name": "Projects", "item": `${SITE_URL}/projects/` }
		]
	};

	const graph: SchemaOrgGraphItem[] = [
		...(baseJsonLd["@graph"] as SchemaOrgGraphItem[]),
		projectsListingPageSchema,
		collectionPageSchema,
		projectsBreadcrumb,
	];

	return {
		...baseJsonLd,
		"@graph": graph
	};
}

export function getSecurityPageJsonLd(): { "@context": "https://schema.org"; "@graph": SchemaOrgObject[] } {
	const baseJsonLd = getBaseSiteJsonLd();

	const securityPageSchema: WebPage = {
		"@type": "WebPage",
		"@id": `${SITE_URL}/security/#webpage`,
		"url": `${SITE_URL}/security/`,
		"name": "Web Security & OWASP | Daniel Philip Johnson",
		"description": "Learn about Daniel Philip Johnson's security expertise including OWASP certification, XSS prevention, secure authentication, and frontend security best practices.",
		"isPartOf": {
			"@type": "WebSite",
			"@id": WEBSITE_SCHEMA_ID
		},
		"about": {
			"@type": "Person",
			"@id": PERSON_SCHEMA_ID
		},
		"inLanguage": "en-GB"
	};

	const securityBreadcrumb: BreadcrumbList = {
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
			{ "@type": "ListItem", "position": 2, "name": "Security", "item": `${SITE_URL}/security/` }
		]
	};

	const graph: SchemaOrgObject[] = [
		...baseJsonLd["@graph"],
		securityPageSchema,
		securityBreadcrumb
	];

	return {
		...baseJsonLd,
		"@graph": graph
	};
}

export function getPhilosophyPageJsonLd(): { "@context": "https://schema.org"; "@graph": SchemaOrgObject[] } {
	const baseJsonLd = getBaseSiteJsonLd();

	const philosophyPageSchema: WebPage = {
		"@type": "WebPage",
		"@id": `${SITE_URL}/philosophy/#webpage`,
		"url": `${SITE_URL}/philosophy/`,
		"name": "Bonsai Coding: My Philosophy of Software | Daniel Philip Johnson",
		"description": "Discover bonsai coding: a philosophy of frontend architecture shaped by Stoicism, Taoism, and classical strategy. Build minimal, secure, and scalable React & Next.js apps.",
		"isPartOf": {
			"@type": "WebSite",
			"@id": WEBSITE_SCHEMA_ID
		},
		"about": {
			"@type": "Person",
			"@id": PERSON_SCHEMA_ID
		},
		"inLanguage": "en-GB",
		"keywords": ["bonsai coding", "software minimalism", "frontend philosophy", "React architecture", "software development philosophy", "Stoic programming", "minimalist code"]
	};

	const philosophyBreadcrumb: BreadcrumbList = {
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
			{ "@type": "ListItem", "position": 2, "name": "Philosophy", "item": `${SITE_URL}/philosophy/` }
		]
	};

	const graph: SchemaOrgObject[] = [
		...baseJsonLd["@graph"],
		philosophyPageSchema,
		philosophyBreadcrumb
	];

	return {
		...baseJsonLd,
		"@graph": graph
	};
}

export function getServicesPageJsonLd(): { "@context": "https://schema.org"; "@graph": SchemaOrgObject[] } {
	const baseJsonLd = getBaseSiteJsonLd();

	const servicesPageSchema: WebPage = {
		"@type": "WebPage",
		"@id": `${SITE_URL}/services/#webpage`,
		"url": `${SITE_URL}/services/`,
		"name": "React & Next.js Consulting Services | Daniel Philip Johnson",
		"description": "Hire a React/Next.js consultant in the UK. Services include OWASP security audits, frontend architecture reviews, and scalable design system strategy.",
		"isPartOf": {
			"@type": "WebSite",
			"@id": WEBSITE_SCHEMA_ID
		},
		"about": {
			"@type": "Person",
			"@id": PERSON_SCHEMA_ID
		},
		"inLanguage": "en-GB",
		"keywords": ["React consultant UK", "Next.js security audit", "frontend architecture consultant", "React design system consulting", "OWASP frontend audit"]
	};

	const servicesBreadcrumb: BreadcrumbList = {
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
			{ "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services/` }
		]
	};

	const graph: SchemaOrgObject[] = [
		...baseJsonLd["@graph"],
		servicesPageSchema,
		servicesBreadcrumb
	];

	return {
		...baseJsonLd,
		"@graph": graph
	};
}
