import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';

const ObservabilitySupplyChain = () => {
	return (
		<section className="py-16 bg-white">
			<Container>
				<div className="mb-16">
					<div className="flex items-center mb-8">
						<span className="text-2xl mr-3">📊</span>
						<div>
							<Text as="h2" variant="h3" className="text-[var(--color-stone-800)]">
								Observability & Supply Chain
							</Text>
						</div>
					</div>

					<div className="grid gap-8 lg:grid-cols-2">
						<div className="p-6 border border-[var(--color-stone-200)] rounded-lg bg-[var(--color-stone-50)]">
							<div className="flex items-center mb-4">
								<span className="text-xl mr-3">👁️</span>
								<Text as="h3" variant="h5" className="text-[var(--color-stone-800)]">
									#observability — Logging & Monitoring
								</Text>
							</div>
							
							<Text as="p" variant="body" className="mb-6 text-[var(--color-stone-700)]">
								Frontend security isn&apos;t just about prevention — it&apos;s also about visibility.
							</Text>

							<div className="space-y-3">
								<div className="flex items-start">
									<span className="text-sm mr-3 mt-1">•</span>
									<Text as="span" variant="body-sm" className="text-[var(--color-stone-700)]">
										Track client-side errors with Sentry or PostHog.
									</Text>
								</div>
								<div className="flex items-start">
									<span className="text-sm mr-3 mt-1">•</span>
									<Text as="span" variant="body-sm" className="text-[var(--color-stone-700)]">
										Redact sensitive data before logging.
									</Text>
								</div>
								<div className="flex items-start">
									<span className="text-sm mr-3 mt-1">•</span>
									<Text as="span" variant="body-sm" className="text-[var(--color-stone-700)]">
										Monitor suspicious behaviors (failed logins, repeated retries).
									</Text>
								</div>
							</div>

							{/*<div className="mt-6">
								<a
									href="/blog/owasp-logging-monitoring"
									className="inline-flex items-center text-sm font-medium text-[var(--color-moss-600)] hover:text-[var(--color-moss-700)] transition-colors"
								>
									<span>Learn more in our OWASP Logging & Monitoring Guide</span>
									<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</a>
							</div>*/}
						</div>

						{/* Supply Chain Card */}
						<div className="p-6 border border-[var(--color-stone-200)] rounded-lg bg-[var(--color-stone-50)]">
							<div className="flex items-center mb-4">
								<span className="text-xl mr-3">🔗</span>
								<Text as="h3" variant="h5" className="text-[var(--color-stone-800)]">
									#supply-chain — Dependencies & Third-Party Risk
								</Text>
							</div>
							
							<Text as="p" variant="body" className="mb-6 text-[var(--color-stone-700)]">
								Every npm install adds potential risk. Secure your frontend supply chain by:
							</Text>

							<div className="space-y-3">
								<div className="flex items-start">
									<span className="text-sm mr-3 mt-1">•</span>
									<Text as="span" variant="body-sm" className="text-[var(--color-stone-700)]">
										Running regular audits (<code className="px-1 py-0.5 bg-[var(--color-stone-200)] rounded text-xs">npm audit</code>, <code className="px-1 py-0.5 bg-[var(--color-stone-200)] rounded text-xs">yarn audit</code>, <code className="px-1 py-0.5 bg-[var(--color-stone-200)] rounded text-xs">Snyk</code>).
									</Text>
								</div>
								<div className="flex items-start">
									<span className="text-sm mr-3 mt-1">•</span>
									<Text as="span" variant="body-sm" className="text-[var(--color-stone-700)]">
										Locking dependency versions with <code className="px-1 py-0.5 bg-[var(--color-stone-200)] rounded text-xs">package-lock.json</code> or <code className="px-1 py-0.5 bg-[var(--color-stone-200)] rounded text-xs">pnpm-lock.yaml</code>.
									</Text>
								</div>
								<div className="flex items-start">
									<span className="text-sm mr-3 mt-1">•</span>
									<Text as="span" variant="body-sm" className="text-[var(--color-stone-700)]">
										Using Subresource Integrity (SRI) for third-party scripts.
									</Text>
								</div>
								<div className="flex items-start">
									<span className="text-sm mr-3 mt-1">•</span>
									<Text as="span" variant="body-sm" className="text-[var(--color-stone-700)]">
										Reviewing abandoned or unmaintained packages.
									</Text>
								</div>
							</div>

							{/*<div className="mt-6">
								<a
									href="/blog/owasp-outdated-components"
									className="inline-flex items-center text-sm font-medium text-[var(--color-moss-600)] hover:text-[var(--color-moss-700)] transition-colors"
								>
									<span>See examples in OWASP Outdated Components Guide</span>
									<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</a>
							</div>*/}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ObservabilitySupplyChain;
