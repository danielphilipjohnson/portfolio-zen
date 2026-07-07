import Text from "@/components/ui/Text"
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

const cards = [
	{
		title: "Performance architecture",
		body: "Improved frontend performance by identifying bottlenecks in rendering, loading, and user journeys, then shaping more efficient patterns around data fetching, page structure, and interaction flow.",
		focus: "Core Web Vitals, rendering performance, loading strategy, frontend architecture.",
	},
	{
		title: "State management and data flow",
		body: "Worked on complex product flows where unclear state ownership and inconsistent data patterns made features harder to reason about, test, and extend. Introduced clearer frontend boundaries and more predictable data flow to improve reliability and maintainability.",
		focus: "State management, data fetching, validation, React, TanStack Query, Zod.",
	},
	{
		title: "Frontend standards and developer experience",
		body: "Helped move frontend work toward shared conventions, clearer review practices, better documentation, and reusable patterns that made delivery safer and more consistent across teams.",
		focus: "Developer experience, frontend standards, maintainability, mentoring.",
	},
	{
		title: "High-trust product flows",
		body: "Built and improved frontend systems for fintech, mortgage lending, and e-commerce products where performance, accessibility, security, and user confidence directly affect the product experience.",
		focus: "Fintech, regulated workflows, accessibility, secure frontend architecture.",
	},
];

const SelectedImpact = () => {
	return (
		<Container>
				<div className="max-w-2xl mb-12">
					<Text
						as="h2"
						variant="h2"
						weight="light"
						className="mb-6 text-stone-800"
					>
						Selected impact
					</Text>
					<Text
						variant="body"
						weight="light"
						className="text-stone-700"
					>
						Examples of where I&rsquo;ve helped improve complex frontend systems — from performance and data flow to standards, reliability, and developer experience.
					</Text>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{cards.map((card) => (
						<Card key={card.title}>
							<Text
								as="h3"
								variant="h5"
								weight="medium"
								className="mb-3 text-moss-700"
							>
								{card.title}
							</Text>
							<Text
								variant="body-sm"
								weight="light"
								className="mb-3 text-stone-600"
							>
								{card.body}
							</Text>
							<Text
								variant="caption"
								weight="medium"
								className="text-stone-500"
							>
								<strong className="text-stone-700">Focus:</strong> {card.focus}
							</Text>
						</Card>
					))}
				</div>
		</Container>
	);
};

export default SelectedImpact;
