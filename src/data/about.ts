import { AboutProps } from "@/types/about";

export const defaultAboutProps: AboutProps = {
	title: "About Me",
	summary: "Senior Frontend Engineer with 5+ years of experience building and improving complex applications across mortgage lending, fintech, e-commerce, and SaaS.",
	details: [
		"I focus on frontend architecture, developer experience, performance, accessibility, and maintainability — especially in systems where product complexity, reliability, and user trust matter.",
		"A lot of my work involves stepping into frontend systems that are starting to feel strain: unclear data flow, inconsistent patterns, performance bottlenecks, fragile user journeys, or developer workflows that slow teams down.",
		"I help teams introduce more structure through clearer boundaries, better standards, thoughtful tooling, and frontend systems that are easier to understand, extend, and operate over time."
	],
	philosophyTitle: "My Engineering Philosophy",
	philosophyPoints: [
		{
			title: "Mindful Minimalism",
			description: "Great software often comes from restraint. Like pruning a bonsai, I remove unnecessary complexity so the core system becomes clearer, calmer, and easier to work with."
		},
		{
			title: "Patience in Process",
			description: "I favour thoughtful iteration over flashy shortcuts. Strong engineering comes from steady improvement: clearer patterns, better feedback loops, and decisions that hold up over time."
		},
		{
			title: "Web-Native Thinking",
			description: "I build with the grain of the platform — using web standards, performance, accessibility, and progressive enhancement as foundations rather than afterthoughts."
		}
	],
	imageSrc: "/images/about/me.jpg",
	imageAlt: "Daniel Philip Johnson tending to a bonsai tree"
};
