import { focusAreas, technologies } from '@/data/focus-technology';
import Container from '@/components/ui/Container';
import { Text } from '@/components/ui/Text';
import TagList from '@/components/ui/TagList';

const FocusAndTechnologies = () => {
	return (
		<section className="py-16 bg-[var(--color-stone-50))]">
			<Container>
				<div className="mb-12">
					<div className="flex items-center mb-4">
						<div className="w-8 h-px mr-3 bg-[var(--color-moss-500))]" />
						<Text as='h2' variant="h4" weight="light" className="text-[var(--color-stone-900)]">
							Current Focus
						</Text>
					</div>

					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
						{focusAreas.map((focus, index) => (
							<div
								key={index}
								className="flex flex-col items-center p-6 border transition-transform hover:-translate-y-1 bg-[var(--color-white))] border-[var(--color-stone-200)]"
							>
								<span className="mb-3 text-3xl">{focus.icon}</span>
								<span className="text-sm font-medium text-[var(--color-stone-700)]">
									{focus.name}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className="mb-12">
					<div className="flex items-center mb-4">
						<div className="w-8 h-px mr-3 bg-[var(--color-moss-500)]" />
						<Text as='h2' variant="h4" weight="light" className="text-[var(--color-stone-900)]">
							Technologies
						</Text>
					</div>

					<div className="p-6 border bg-[var(--color-white)] border-[var(--color-stone-200)]">
						<TagList 
							heading="Frontend"
							tags={technologies.frontend}
							colorToken="moss"
						/>

						<TagList 
							heading="Backend"
							tags={technologies.backend}
							colorToken="water"
						/>

						<TagList 
							heading="DevOps"
							tags={technologies.devops}
							colorToken="clay"
						/>
					</div>

					<div className="flex mt-8">
						<div className="w-1 mr-4 self-stretch rounded-full bg-[var(--color-moss-300)]" />
						<Text as='p' variant="body-sm" className="text-[var(--color-stone-800)] italic">
							Each technology serves a specific purpose in my development ecosystem, carefully chosen and cultivated like branches in a bonsai tree—balanced, intentional, and harmonious.
						</Text>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default FocusAndTechnologies;