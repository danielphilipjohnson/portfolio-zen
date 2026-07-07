import Text from "@/components/ui/Text"
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { recommendedCards } from '@/data/recommended';

const Recommended = () => {
	return (
		<Container>
				<div className="max-w-2xl mb-12">
					<Text
						as="h2"
						variant="h2"
						weight="light"
						className="mb-6 text-stone-800"
					>
						What I bring to complex frontend systems
					</Text>
					<Text
						variant="body"
						weight="light"
						className="text-stone-700"
					>
						I focus on the parts of frontend engineering that start to matter most as products, teams, and codebases grow: architecture, reliability, developer experience, and delivery confidence.
					</Text>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{recommendedCards.map((card) => (
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
								className="text-stone-600"
							>
								{card.body}
							</Text>
						</Card>
					))}
				</div>
		</Container>
	);
};

export default Recommended;
