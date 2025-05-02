import Container from '@/components/ui/Container';
import Blockquote from '@/components/ui/Blockquote';
import { Text } from '@/components/ui/Text';

const MissionStatement = () => {
	return (
		<section className=" py-16 bg-[var(--color-stone-100)]">
			<Container>
				<div className="relative mb-8">
					<div
						className="absolute top-1/2 -left-4 w-8 h-px transform -translate-y-1/2 bg-[var(--color-moss-500)]"
					></div>
					<Text
						as="h2"
						variant="h3"
						className="text-[var(--color-stone-800)]"
					>
						Mission Statement
					</Text>
				</div>

				<div
					className="p-8 mb-8 relative bg-[var(--color-stone-50)]"
				>
					<div
						className="absolute -top-4 -right-4 text-6xl opacity-10 text-[var(--color-moss-900)]"
					>
						使
					</div>

					<Blockquote
						content="Mission-driven full-stack engineer crafting performant, scalable apps that blend design, function, and impact."
						attribution="— Daniel Philip Johnson | Mission Statement"
						borderColor="moss.500"
					/>
				</div>

				<div className="relative">
					<div className="absolute top-0 left-0 w-16 h-px bg-[var(--color-clay-400)]"></div>

					<Text
						variant="body"
						className="pt-6 text-[var(--color-stone-600)]"
					>
						I’m a full-stack and frontend engineer who designs and builds scalable, modern web applications using technologies like React, Next.js, Node.js, and Tailwind. I’m passionate about architecture, performance, and developer experience—whether that’s leading frontend rebuilds, integrating AI-driven features, or implementing security-first DevOps workflows. I care deeply about writing maintainable code, improving team velocity, and building user experiences that are fast, intuitive, and reliable.
					</Text>

					<div className="flex mt-8">
						<div
							className="w-1 mr-4 rounded-full bg-[var(--color-water-300)]"
						></div>
						<Text
							variant="body-sm"
							className="text-[var(--color-stone-600)]"
						>
							Each technology in my stack has been intentionally chosen, like branches in a
							bonsai tree—pruned and shaped to create balanced, elegant solutions that serve
							a specific purpose within the larger ecosystem.
						</Text>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default MissionStatement;