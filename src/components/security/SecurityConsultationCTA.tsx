import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';

const SecurityConsultationCTA = () => {
	return (
		<section className="py-20 bg-[var(--color-stone-900)]">
			<Container>
				<div className="text-center">
					<Text as="h2" variant="h2" className="mb-6 text-[var(--color-stone-50)]">
						💼 Hire Me for Security Reviews
					</Text>
					<Text as="p" variant="body" className="max-w-3xl mx-auto mb-8 text-[var(--color-stone-300)]">
						Modern frontend developers can't afford to ignore security. If your React or Next.js application 
						handles sensitive data, payments, or authentication flows, a <strong>security-first architecture review</strong> is essential.
					</Text>

					<div className="grid gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4 text-left">
						<div className="p-4 bg-[var(--color-stone-800)] rounded-lg">
							<div className="mb-2 text-lg">🔍</div>
							<Text as="h3" variant="h6" className="mb-2 text-[var(--color-stone-50)]">
								OWASP Mapping
							</Text>
							<Text as="p" variant="body-sm" className="text-[var(--color-stone-400)]">
								OWASP mapping for React & Next.js apps
							</Text>
						</div>
						<div className="p-4 bg-[var(--color-stone-800)] rounded-lg">
							<div className="mb-2 text-lg">🔐</div>
							<Text as="h3" variant="h6" className="mb-2 text-[var(--color-stone-50)]">
								Auth & State Audits
							</Text>
							<Text as="p" variant="body-sm" className="text-[var(--color-stone-400)]">
								Authentication & state security audits (JWTs, cookies, session flows)
							</Text>
						</div>
						<div className="p-4 bg-[var(--color-stone-800)] rounded-lg">
							<div className="mb-2 text-lg">🛡️</div>
							<Text as="h3" variant="h6" className="mb-2 text-[var(--color-stone-50)]">
								Header Hardening
							</Text>
							<Text as="p" variant="body-sm" className="text-[var(--color-stone-400)]">
								CSP and header hardening for XSS/Clickjacking protection
							</Text>
						</div>
						<div className="p-4 bg-[var(--color-stone-800)] rounded-lg">
							<div className="mb-2 text-lg">📦</div>
							<Text as="h3" variant="h6" className="mb-2 text-[var(--color-stone-50)]">
								Supply Chain Analysis
							</Text>
							<Text as="p" variant="body-sm" className="text-[var(--color-stone-400)]">
								Dependency & supply-chain risk analysis
							</Text>
						</div>
					</div>

					<div className="flex flex-col gap-4 sm:flex-row sm:gap-6 sm:justify-center">
						<Button
							variant="default"
							size="lg"
							asChild
							className="bg-[var(--color-moss-600)] hover:bg-[var(--color-moss-700)] text-white"
						>
							<a href="/contact?utm_source=security&utm_medium=cta&utm_campaign=security-hub" className="inline-flex items-center">
								<span>👉 Book a consultation</span>
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
								</svg>
							</a>
						</Button>
					</div>

					<div className="mt-16 pt-8 border-t border-[var(--color-stone-700)]">
						<Text as="p" variant="body-sm" className="text-[var(--color-stone-400)]">
							<span className="mr-2">🏆</span>
							<strong>OWASP Certified</strong> • Security-first development approach • 5+ projects secured
						</Text>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default SecurityConsultationCTA;
