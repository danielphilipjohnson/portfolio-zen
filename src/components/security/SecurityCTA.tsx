import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { SECURITY_CTA } from '@/data/security';

const SecurityCTA = () => {
	return (
		<section className="py-20 bg-[var(--color-stone-900)]">
			<Container>
				<div className="text-center">
					<Text as="h2" variant="h2" className="mb-6 text-[var(--color-stone-50)]">
						{SECURITY_CTA.title}
					</Text>
					<Text as="p" variant="body" className="max-w-2xl mx-auto mb-10 text-[var(--color-stone-300)]">
						{SECURITY_CTA.subtitle}
					</Text>

					<div className="flex flex-col gap-4 sm:flex-row sm:gap-6 sm:justify-center">
						<Button
							variant="primary"
							size="lg"
							asChild
							className="bg-[var(--color-moss-600)] hover:bg-[var(--color-moss-700)] text-white"
						>
							<a href={SECURITY_CTA.primaryAction.href} className="inline-flex items-center">
								<span>{SECURITY_CTA.primaryAction.text}</span>
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
								</svg>
							</a>
						</Button>
						<Button
							variant="outline"
							size="lg"
							asChild
						>
							<a href={SECURITY_CTA.secondaryAction.href} className="inline-flex items-center text-[var(--color-stone-50)] border-[var(--color-stone-50)] hover:bg-[var(--color-stone-50)] hover:text-[var(--color-stone-900)]">
								<span>{SECURITY_CTA.secondaryAction.text}</span>
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
							</a>
						</Button>
					</div>

					<div className="mt-16 pt-8 border-t border-[var(--color-stone-700)]">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="text-center">
								<div className="mb-3">
									<span className="text-3xl">🔒</span>
								</div>
								<Text as="h3" variant="h6" className="mb-2 text-[var(--color-stone-50)]">
									Secure by Default
								</Text>
								<Text as="p" variant="body-sm" className="text-[var(--color-stone-400)]">
									Every application built with security-first principles and OWASP best practices
								</Text>
							</div>
							<div className="text-center">
								<div className="mb-3">
									<span className="text-3xl">⚡</span>
								</div>
								<Text as="h3" variant="h6" className="mb-2 text-[var(--color-stone-50)]">
									Performance & Security
								</Text>
								<Text as="p" variant="body-sm" className="text-[var(--color-stone-400)]">
									Security implementations that don&apos;t compromise on user experience
								</Text>
							</div>
							<div className="text-center">
								<div className="mb-3">
									<span className="text-3xl">📋</span>
								</div>
								<Text as="h3" variant="h6" className="mb-2 text-[var(--color-stone-50)]">
									Compliance Ready
								</Text>
								<Text as="p" variant="body-sm" className="text-[var(--color-stone-400)]">
									Built to meet industry standards and regulatory requirements
								</Text>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default SecurityCTA;
