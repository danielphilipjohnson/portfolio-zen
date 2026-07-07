export interface RecommendedCard {
	title: string;
	body: string;
}

export const recommendedCards: RecommendedCard[] = [
	{
		title: "Frontend Architecture",
		body: "Creating clear boundaries, maintainable UI systems, predictable data flow, and frontend structures that can scale as product complexity grows.",
	},
	{
		title: "Developer Experience",
		body: "Improving the way teams build, test, validate, review, and ship frontend work through better standards, tooling, documentation, and shared patterns.",
	},
	{
		title: "Performance & Reliability",
		body: "Reducing bottlenecks, improving user experience, and making frontend systems more dependable through architecture, measurement, and careful trade-offs.",
	},
	{
		title: "High-Trust Products",
		body: "Working across fintech and e-commerce systems where accessibility, security, reliability, and user confidence are part of the product experience.",
	},
];
