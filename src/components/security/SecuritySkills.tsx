import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import Grid from '@/components/ui/Grid';
import GridItem from '@/components/ui/GridItem';
import { SECURITY_SKILLS, SecuritySkill } from '@/data/security';
import { SectionHeader } from '@/components/about/SectionHeader';

interface SkillCategoryProps {
	skillCategory: SecuritySkill;
}

const SkillCategoryCard = ({ skillCategory }: SkillCategoryProps) => {
	return (
		<div className="p-6 border border-[var(--color-stone-200)] bg-[var(--color-stone-50)] rounded-lg h-full">
			<div className="flex items-center mb-4">
				<span className="text-2xl mr-3">{skillCategory.icon}</span>
				<Text as="h3" variant="h6" className="text-[var(--color-stone-800)]">
					{skillCategory.category}
				</Text>
			</div>
			
			<div className="space-y-2">
				{skillCategory.skills.map((skill, index) => (
					<div
						key={index}
						className="px-3 py-2 bg-white border border-[var(--color-stone-200)] rounded-md text-sm transition-all hover:border-[var(--color-moss-300)] hover:bg-[var(--color-moss-50)]"
					>
						<Text as="span" variant="body-sm" className="text-[var(--color-stone-700)]">
							{skill}
						</Text>
					</div>
				))}
			</div>
		</div>
	);
};

const SecuritySkills = () => {
	return (
		<section className="py-16 bg-[var(--color-stone-50)]">
			<Container>
				<SectionHeader 
					icon="⚡" 
					title="Security Skill Areas" 
					variant="h2"
				/>
				
				<div className="mb-12">
					<Text as="p" variant="body" className="max-w-4xl text-[var(--color-stone-700)]">
						My security expertise spans across frontend, backend, and DevOps domains, providing comprehensive protection 
						for modern web applications throughout the entire development lifecycle.
					</Text>
				</div>

				<Grid cols={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-3">
					{SECURITY_SKILLS.map((skillCategory, index) => (
						<GridItem key={index} span={1} className="flex">
							<SkillCategoryCard skillCategory={skillCategory} />
						</GridItem>
					))}
				</Grid>

				<div className="mt-12 p-8 bg-white border-l-4 border-[var(--color-moss-500)] rounded-r-lg">
					<Text as="h3" variant="h5" className="mb-4 text-[var(--color-stone-800)]">
						Security-First Development Approach
					</Text>
					<Text as="p" variant="body" className="text-[var(--color-stone-700)] mb-4">
						Security isn't an afterthought—it's integrated into every step of my development process. 
						From initial architecture decisions to deployment configurations, I ensure that security 
						considerations are baked into the foundation of every application.
					</Text>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
						<div className="text-center">
							<div className="text-2xl font-bold text-[var(--color-moss-600)]">100%</div>
							<Text as="p" variant="body-sm" className="text-[var(--color-stone-600)]">OWASP Coverage</Text>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-[var(--color-moss-600)]">5+</div>
							<Text as="p" variant="body-sm" className="text-[var(--color-stone-600)]">Secured Projects</Text>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-[var(--color-moss-600)]">8+</div>
							<Text as="p" variant="body-sm" className="text-[var(--color-stone-600)]">Security Headers</Text>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-[var(--color-moss-600)]">15+</div>
							<Text as="p" variant="body-sm" className="text-[var(--color-stone-600)]">Vulnerabilities Found</Text>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default SecuritySkills;
