import { AboutProps } from "@/types/about";

export const defaultAboutProps: AboutProps = {
	title: "About Me",
	summary: "Senior Frontend Engineer with 5+ years of experience delivering scalable, production-grade applications in regulated industries, including mortgage lending, fintech, and SaaS.",
	details: [
		"Expert in React, TypeScript, and Next.js (including Server Components), with strong capabilities in state management, performance optimisation, and design systems.",
		"Proven track record building clean, accessible UIs, secure frontend architectures, and high-quality developer tooling in cross-functional teams.",
		"Passionate about great UX, robust engineering practices, and DX-focused workflows that help teams ship faster and safer."
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
