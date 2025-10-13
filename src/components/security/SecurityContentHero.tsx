import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';

const SecurityContentHero = () => {
	return (
		<section className="pt-24 pb-16 bg-[var(--color-stone-50)]">
			<Container>
				<div className="max-w-4xl mx-auto text-center">
					{/* Main Title */}
					<Text as="h1" variant="hero" className="mb-6 text-[var(--color-stone-800)]">
						Frontend Security for React & Next.js Developers
					</Text>

					{/* Subheading */}
					<Text as="p" variant="body" className="mb-8 text-lg leading-relaxed text-[var(--color-stone-700)]">
						Secure your frontend apps with OWASP-driven, practical guides for React, Next.js, and modern JavaScript. 
						From XSS prevention to CSRF protection, authentication patterns, and secure state management, this hub gives 
						you the tools to build safer SPAs, SSR, and edge-rendered apps.
					</Text>

					{/* CTA Button */}
					<div className="mb-16">
						<Button
							variant="primary"
							size="lg"
							asChild
							className="bg-[var(--color-moss-600)] hover:bg-[var(--color-moss-700)] text-white"
						>
							<a href="#checklist" className="inline-flex items-center">
								<span className="mr-2">👉</span>
								<span>Get the Free Frontend Security Checklist (PDF)</span>
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
							</a>
						</Button>
					</div>

					{/* Trust Indicators */}
					<div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--color-stone-600)]">
						<div className="flex items-center">
							<span className="mr-2 text-lg">🏅</span>
							<span>OWASP Certified</span>
						</div>
						<div className="flex items-center">
							<span className="mr-2 text-lg">⚡</span>
							<span>React & Next.js Focus</span>
						</div>
						<div className="flex items-center">
							<span className="mr-2 text-lg">🛡️</span>
							<span>Practical Guides</span>
						</div>
						<div className="flex items-center">
							<span className="mr-2 text-lg">📚</span>
							<span>Always Updated</span>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default SecurityContentHero;
