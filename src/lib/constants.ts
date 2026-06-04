export const SITE_URL = 'https://danielphilipjohnson.com';

export const OG_IMAGE = {
  HOME: `${SITE_URL}/images/og/home-og.jpg`,
  ENGINEERING: `${SITE_URL}/images/og/engineering-og.jpg`,
  BLOG: `${SITE_URL}/images/og/blog-og.jpg`,
  PROJECTS: `${SITE_URL}/images/og/projects-og.jpg`,
  ABOUT: `${SITE_URL}/images/og/about-og.png`,
  CONTACT: `${SITE_URL}/images/og/contact-og.jpg`,
  DEFAULT_BLOG: `${SITE_URL}/images/og/default-blog-og.jpg`,
} as const;

export const ROUTE = {
  BLOG: '/blog',
  ZEN: '/zen',
  MCP: '/mcp',
  PROJECTS: '/projects',
} as const;

export const OG_PATH = {
  HOME: '/images/og/home-og.jpg',
  ENGINEERING: '/images/og/engineering-og.jpg',
  BLOG: '/images/og/blog-og.jpg',
  PROJECTS: '/images/og/projects-og.jpg',
  ABOUT: '/images/og/about-og.png',
  CONTACT: '/images/og/contact-og.jpg',
  DEFAULT_BLOG: '/images/og/default-blog-og.jpg',
} as const;
