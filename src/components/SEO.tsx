import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	ogImage?: string;
	ogType?: 'website' | 'article' | 'profile';
	twitterCard?: 'summary' | 'summary_large_image';
	canonicalUrl?: string;
	children?: React.ReactNode;
}

const DEFAULT_TITLE = 'Daniel Philip Johnson | Full-stack Developer';
const DEFAULT_DESCRIPTION = 'Full-stack developer specializing in React, Next.js, and modern web technologies, working remotely from Cornwall.';
const DEFAULT_KEYWORDS = 'developer, fullstack, frontend, react, nextjs, javascript, typescript, tailwind, web development, Cornwall';
const DEFAULT_OG_IMAGE = '/images/og/default-og.jpg';
const SITE_URL = 'https://danielphilipjohnson.com';
const TWITTER_HANDLE = '@danielp_johnson';

export default function SEO({
	title = DEFAULT_TITLE,
	description = DEFAULT_DESCRIPTION,
	keywords = DEFAULT_KEYWORDS,
	ogImage = DEFAULT_OG_IMAGE,
	ogType = 'website',
	twitterCard = 'summary_large_image',
	canonicalUrl,
	children,
}: SEOProps) {
	const router = useRouter();
	const currentPath = router.asPath;
	const siteUrl = SITE_URL;

	// Generate canonical URL if not provided
	const canonical = canonicalUrl || `${siteUrl}${currentPath === '/' ? '' : currentPath}`;

	// Ensure OG image has absolute URL
	const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

	return (
		<Head>
			{/* Basic Metadata */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<link rel="canonical" href={canonical} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content={ogType} />
			<meta property="og:url" content={canonical} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImageUrl} />
			<meta property="og:site_name" content="Daniel Philip Johnson" />

			{/* Twitter */}
			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:site" content={TWITTER_HANDLE} />
			<meta name="twitter:creator" content={TWITTER_HANDLE} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImageUrl} />

			{/* Favicon */}
			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.manifest" />

			{children}
		</Head>
	);
}