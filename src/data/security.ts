export interface SecurityCertification {
	title: string;
	provider: string;
	completedDate: string;
	description: string;
	credentialUrl?: string;
	badgeUrl?: string;
}

export interface OWASPLearning {
	id: string;
	title: string;
	description: string;
	icon: string;
	practicalApplication: string;
}

export interface SecuritySkill {
	category: string;
	skills: string[];
	icon: string;
}

export const SECURITY_CERTIFICATIONS: SecurityCertification[] = [
	{
		title: "Mastering OWASP",
		provider: "LinkedIn Learning",
		completedDate: "2024",
		description: "Comprehensive certification covering OWASP Top 10 vulnerabilities with focus on secure frontend and backend development practices.",
		// Add actual credential URL when available
		credentialUrl: "#",
		// Add actual badge URL when available  
		badgeUrl: "/images/certificates/linkedin-owasp-badge.png"
	}
];

export const OWASP_KEY_LEARNINGS: OWASPLearning[] = [
	{
		id: "xss-prevention",
		title: "XSS Prevention & Input Sanitization",
		description: "Advanced techniques for preventing Cross-Site Scripting attacks in React and modern web applications through proper input validation, output encoding, and Content Security Policy implementation.",
		icon: "🛡️",
		practicalApplication: "Implemented CSP headers, input sanitization libraries, and secure coding practices in React applications to prevent XSS vulnerabilities."
	},
	{
		id: "authentication-security",
		title: "Secure Authentication & Session Management",
		description: "Best practices for implementing secure authentication flows, JWT token handling, session management, and protection against common auth vulnerabilities.",
		icon: "🔐",
		practicalApplication: "Designed secure authentication systems with proper token storage, refresh mechanisms, and session timeout implementations."
	},
	{
		id: "secure-headers",
		title: "Security Headers & Browser Protection",
		description: "Implementation of critical security headers including HSTS, CSP, X-Frame-Options, and other browser-level security mechanisms to protect against various attack vectors.",
		icon: "🔒",
		practicalApplication: "Configured comprehensive security headers in Next.js applications, improving security posture and achieving A+ security ratings."
	},
	{
		id: "csrf-protection",
		title: "CSRF Protection & API Security",
		description: "Understanding and implementing Cross-Site Request Forgery protection mechanisms, secure API design patterns, and proper CORS configuration.",
		icon: "⚔️",
		practicalApplication: "Implemented CSRF tokens, secure API endpoints, and proper CORS policies to protect against unauthorized requests."
	},
	{
		id: "dependency-management",
		title: "Secure Dependency Management",
		description: "Best practices for managing third-party dependencies, vulnerability scanning, and maintaining secure supply chain practices in modern web development.",
		icon: "📦",
		practicalApplication: "Integrated automated dependency vulnerability scanning and established secure dependency update workflows."
	}
];

export const SECURITY_SKILLS: SecuritySkill[] = [
	{
		category: "Frontend Security",
		icon: "🎯",
		skills: [
			"XSS Prevention",
			"Content Security Policy (CSP)",
			"Secure Authentication Flows",
			"Input Validation & Sanitization",
			"Secure Cookie Handling",
			"Browser Security Features"
		]
	},
	{
		category: "API & Backend Security", 
		icon: "🔧",
		skills: [
			"CSRF Protection",
			"JWT Security Best Practices",
			"Secure API Design",
			"CORS Configuration",
			"Rate Limiting",
			"Input Validation"
		]
	},
	{
		category: "DevOps Security",
		icon: "⚡",
		skills: [
			"Security Headers Configuration",
			"HTTPS/TLS Implementation",
			"Dependency Vulnerability Scanning",
			"Secure CI/CD Pipelines",
			"Environment Security",
			"Security Monitoring"
		]
	}
];

export const SECURITY_STATS = {
	owaspTopTenCoverage: 100,
	practicalProjectsSecured: 5,
	securityHeadersImplemented: 8,
	vulnerabilitiesIdentified: 15
};

export const SECURITY_CTA = {
	title: "Need a Frontend Engineer Who Prioritizes Security?",
	subtitle: "Let's build secure, robust applications that protect your users and business.",
	primaryAction: {
		text: "Discuss Security Needs",
		href: "/contact"
	},
	secondaryAction: {
		text: "View Security Projects",
		href: "/projects?filter=security"
	}
};
