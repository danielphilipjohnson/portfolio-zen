import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';

const SecurityHero = () => {
	return (
		<div className="bg-[var(--color-stone-50)]">
			<section className="relative">
				<div className="relative overflow-hidden">
					<div className="absolute inset-0 z-0">
						<img
							src="/images/security-hero.png"
							alt="Web Security Hero"
							className="object-cover w-full h-full"
						/>
						<div className="absolute inset-0 bg-[var(--color-stone-900)] opacity-75" />
					</div>

					<div className="container relative z-10 px-6 py-32 mx-auto mt-16 md:pt-48 md:pb-48">
						<div className="absolute top-0 left-0 w-1/3 h-1 bg-[var(--color-moss-500)]" />

						<div className="relative mb-6">
							<div className="absolute top-0 bottom-0 w-1 -left-4 bg-[var(--color-moss-500)]" />
							<Text as="h1" variant="hero" className="text-[var(--color-stone-50)]">
								Web Security
							</Text>
						</div>
						<Text as="h2" variant="subtitle" className="max-w-3xl mb-8 text-[var(--color-stone-50)]">
							OWASP-certified developer specializing in secure frontend development and modern web application protection
						</Text>

						<div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
							<Button
								variant="default"
								size="lg"
								asChild
							>
								<a href="/contact" className="inline-flex items-center">
									<span>Discuss Security Needs</span>
									<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</a>
							</Button>
							<Button
								variant="outline"
								size="lg"
								asChild
							>
								<a href="#owasp-learnings" className="inline-flex items-center text-[var(--color-stone-50)] border-[var(--color-stone-50)] hover:bg-[var(--color-stone-50)] hover:text-[var(--color-stone-900)]">
									<span>View Security Expertise</span>
									<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
									</svg>
								</a>
							</Button>
						</div>
					</div>

					<div className="absolute inset-0 bg-gradient-to-b from-[var(--color-stone-950)]/40 to-[var(--color-stone-950)]/30"></div>		
				</div>
				
				<Container className="relative">
					<div className="absolute overflow-hidden border-4 rounded-full -top-16 left-8 border-[var(--color-moss-50)]">
						<div className="flex items-center justify-center w-32 h-32 text-4xl bg-[var(--color-stone-900)]">
							🛡️
						</div>
					</div>
				</Container>	
			</section>
		</div>
	);
};

export default SecurityHero;
