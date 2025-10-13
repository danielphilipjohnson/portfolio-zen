import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import Grid from '@/components/ui/Grid';
import GridItem from '@/components/ui/GridItem';
import { OWASP_KEY_LEARNINGS, OWASPLearning } from '@/data/security';
import { SectionHeader } from '@/components/about/SectionHeader';

interface LearningCardProps {
	learning: OWASPLearning;
}

const LearningCard = ({ learning }: LearningCardProps) => {
	return (
		<div className="h-full p-6 border border-[var(--color-stone-200)] bg-white rounded-lg transition-all hover:shadow-lg hover:border-[var(--color-moss-300)]">
			<div className="flex items-center mb-4">
				<span className="text-3xl mr-3">{learning.icon}</span>
				<Text as="h3" variant="h6" className="text-[var(--color-stone-800)]">
					{learning.title}
				</Text>
			</div>
			
			<Text as="p" variant="body-sm" className="mb-4 text-[var(--color-stone-700)] leading-relaxed">
				{learning.description}
			</Text>

			<div className="mt-auto">
				<div className="p-4 bg-[var(--color-moss-50)] rounded-lg border-l-2 border-[var(--color-moss-400)]">
					<Text as="p" variant="body-sm" className="text-[var(--color-stone-800)] font-medium mb-1">
						Practical Application:
					</Text>
					<Text as="p" variant="body-sm" className="text-[var(--color-stone-700)]">
						{learning.practicalApplication}
					</Text>
				</div>
			</div>
		</div>
	);
};

const OWASPLearnings = () => {
	return (
		<section id="owasp-learnings" className="py-16 bg-white">
			<Container>
				<SectionHeader 
					icon="🔍" 
					title="OWASP Security Expertise" 
					variant="h2"
				/>
				
				<div className="mb-12">
					<Text as="p" variant="body" className="max-w-4xl text-[var(--color-stone-700)] mb-6">
						Through comprehensive OWASP training, I&apos;ve developed expertise in identifying, preventing, and mitigating 
						the most critical web application security risks. Here are the key areas where I can add value to your projects:
					</Text>
				</div>

				<Grid cols={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-3">
					{OWASP_KEY_LEARNINGS.map((learning) => (
						<GridItem key={learning.id} span={1} className="flex">
							<LearningCard learning={learning} />
						</GridItem>
					))}
				</Grid>

				<div className="mt-16 text-center">
					<div className="inline-flex items-center px-6 py-3 bg-[var(--color-stone-100)] rounded-full">
						<span className="mr-2 text-lg">🏆</span>
						<Text as="span" variant="body-sm" className="font-medium text-[var(--color-stone-800)]">
							100% OWASP Top 10 Coverage
						</Text>
						<span className="mx-3 text-[var(--color-stone-400)]">•</span>
						<Text as="span" variant="body-sm" className="font-medium text-[var(--color-stone-800)]">
							Practical Implementation Focus
						</Text>
						<span className="mx-3 text-[var(--color-stone-400)]">•</span>
						<Text as="span" variant="body-sm" className="font-medium text-[var(--color-stone-800)]">
							Frontend Security Specialist
						</Text>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default OWASPLearnings;
