import { AboutProps } from "@/types/about";

export const defaultAboutProps: AboutProps = {
	title: "About Me",
	summary: "Hi, I’m Daniel – a full-stack frontend engineer blending architecture, design systems, and product thinking to scale high-performance applications.",
	details: [
		"With over 5 years of experience—from fintech and e-commerce to internal tools—I specialize in modern React ecosystems (RSCs, TypeScript, Tailwind) and bring backend fluency with Node.js and Fastify.",
		"I build interfaces that scale with intention, ship with confidence, and empower teams with better tooling, documentation, and systems.",
		"Whether it’s designing dynamic forms for financial workflows, leading security audits, or architecting AI-powered chat systems, I bring clarity, speed, and a collaborative mindset to every project."
	],
	philosophyTitle: "My Engineering Philosophy",
	philosophyPoints: [
		{
			title: "Mindful Minimalism",
			description: "Great software comes from restraint. Like pruning a bonsai, I remove noise so the core experience shines—clean code, purposeful interactions, focused systems."
		},
		{
			title: "Patience in Process",
			description: "I favor thoughtful iteration over flashy shortcuts. Whether architecting a design system or debugging legacy code, I work with clarity, intention, and care."
		},
		{
			title: "Web-Native Thinking",
			description: "I design with the grain of the platform—embracing standards, optimizing for performance, and ensuring accessibility is baked in from day one."
		}
	],
	imageSrc: "/images/about/me.jpg",
	imageAlt: "Daniel Philip Johnson tending to a bonsai tree"
};
