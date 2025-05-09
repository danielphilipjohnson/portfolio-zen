import Grid from '@/components/ui/Grid';
import GridItem from '@/components/ui/GridItem';
import Blockquote from '@/components/ui/Blockquote';
import Container from '@/components/ui/Container';
import { ABOUT_INFO, SKILL_CATEGORIES } from '@/data/about-intro';
import Text from '../ui/Text';
import AboutInfoItem from './AboutInfoItem';
import { SkillCategory } from './SkillCategory';
import { Button } from '../ui/Button';

const About = () => {
	return (
		<div className=" bg-[var(--color-stone-50)]">

			<section className="relative">
				<div className="relative overflow-hidden">
					<div className="absolute inset-0 z-0">
						<img
							src="/images/about-hero.png"
							alt="Blog Hero"
							className="object-cover w-full h-full"
						/>
						<div className="absolute inset-0 bg-[var(--color-stone-900)] opacity-70" />
					</div>

					<div className="container relative z-10 px-6 py-32 mx-auto mt-16 md:pt-48 md:pb-48">
						<div className="absolute top-0 left-0 w-1/3 h-1 bg-[var(--color-moss-500)]" />

						<div className="relative mb-6">
							<div className="absolute top-0 bottom-0 w-1 -left-4 bg-[var(--color-moss-500)]" />
							<Text as="h1" variant="hero" className="text-[var(--color-stone-50)]">
								About
							</Text>
						</div>
						<Text as="h2" variant="subtitle" className="max-w-2xl text-[var(--color-stone-50)]">
							A journey of deliberate growth and thoughtful development, both personal and professional.
						</Text>
					</div>

					<div className="absolute inset-0 bg-gradient-to-b from-[var(--color-stone-950)]/40 to-[var(--color-stone-950)]/30"></div>		
				</div>
				
				<Container className="relative">
					<div className="absolute overflow-hidden border-4 rounded-full -top-16 left-8 border-[var(--color-moss-50)]">
						<img
							src="/images/profile.webp"
							alt="Daniel Philip Johnson"
							className="object-cover w-32 h-32"
						/>
					</div>
				</Container>	
			</section>

			<section className="pt-20 pb-16 bg-[var(--color-stone-50)]">
				<Container>
					<div className="pb-4 mb-8 border-b border-[var(--color-stone-200)]">
						<Text as='h1' variant='h2' weight={'light'} className="mb-4 text-[var(--color-stone-800)]">
							Daniel Philip Johnson
						</Text>

						<div className="flex flex-col md:flex-row md:justify-between md:items-end">
							<div>
								<Text as='h2' variant='h4' className="mb-2 text-[var(--color-moss-600)]">
									Full-stack developer
								</Text>

								<Text as='p' variant='body-sm' className="mb-2 text-[var(--color-stone-800)]">
									👨‍💻 I work remote 🏠 in Cornwall
								</Text>
								
							</div>

							<div className="mt-4 md:mt-0">
								<Button
									variant="outline"
									size="md"
									asChild
								>
									<a
										href="/resume/Daniel-Philip-Johnson-Resume.pdf"
										download
										className="inline-flex items-center"
									>
										<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
										<span>Resume PDF</span>
									</a>
								</Button>
							</div>
						</div>
					</div>

					<Grid cols={12} gap="lg" className="lg:grid-cols-12">
						<GridItem span={12} className="lg:col-span-7">
							<div
								className="p-6 mb-8 border-l-2 border-[var(--color-moss-500)] bg-[var(--color-moss-50)]"
							>

								<Text as='h3' variant='h5' className="mb-3 text-[var(--color-stone-800)]">
									Personal Philosophy
								</Text>
						
								<Text as='p' variant='body' className="text-[var(--color-stone-800)]">
									My personal goal is to help others get their first programming job and work my way towards becoming a senior.
									Like the art of bonsai cultivation, I believe in patience, precision, and mindful growth in both my personal
									journey and in nurturing others along their paths.
								</Text>
							</div>

							<div className="mb-8">
								<Text as='h3' variant='h5' className="flex items-center mb-4 text-xl font-light text-[var(--color-stone-800)]">
									<div className="w-6 h-px mr-3 bg-[var(--color-clay-400)]"></div>
									About Me
								</Text>
								
								<ul className="pl-6 space-y-4">
									{ABOUT_INFO.map((item) => (
										<AboutInfoItem key={item.label} {...item} />
									))}
								</ul>
							</div>

							<div className="mb-8">
								<Text as='h3' variant='h5' className="flex items-center mb-4 text-xl font-light text-[var(--color-stone-800)]">
									<div className="w-6 h-px mr-3 bg-[var(--color-clay-400)]"></div>
									My Linux Journey
								</Text>

								<div
									className="p-6 border border-[var(--color-stone-200)] bg-white"
								>
									<Text as='p' variant='body-sm' className="text-[var(--color-stone-800)]">
										<span className="font-semibold">⚡ Fun fact:</span> I started programming with Basic on Commodore 64 (CBM 64) but never owned a PC until Windows Vista in 2008 😑. My desktop 🖥️ was Packard Bell iMedia x2414 with an enormous amount of RAM totalling 2GB. It did not take too long for me to consider my options and use Ubuntu 9.04 (Jaunty Jackalope). From there, I have used Linux ever since and yes, I use KDE for my GUI &quot;you know what they say old habits die hard.&quot;
									</Text>
								</div>
							</div>
						</GridItem>

						<GridItem span={12} className="lg:col-span-5">
							<div className="mb-8">
								<Text as='h3' variant='h5' weight={'light'} className="mb-4 text-[var(--color-stone-800)]">
									Tools & Technologies
								</Text>

								<div className="p-6 border border-[var(--color-stone-200)] bg-white">
									{SKILL_CATEGORIES.map((category) => (
										<SkillCategory key={category.title} {...category} />
									))}
								</div>
							</div>

							<Blockquote
								borderSize='sm'
								content="Like a skilled bonsai artist shapes a tree with patience and purpose, I approach code with the same mindfulness—cultivating elegant solutions by carefully pruning away complexity."
								attribution="— My Development Philosophy"
							/>
						</GridItem>
					</Grid>
				</Container>
			</section>
		</div>
	);
};

export default About;