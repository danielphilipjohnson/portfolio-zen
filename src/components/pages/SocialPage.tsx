import { socialLinks } from "@/data/social-links";

export default function SocialPage() {
	return (
		<main className="min-h-screen flex items-center justify-center px-4 py-12 bg-stone-50 dark:bg-ink-950">
			<div className="w-full max-w-md">
				<div className="text-center mb-10">
					<div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-moss-500 to-bamboo-500 flex items-center justify-center shadow-lg">
						<svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
						</svg>
					</div>
					<h1 className="text-3xl font-bold text-ink-900 dark:text-stone-50 mb-2">Daniel Philip Johnson</h1>
					<p className="text-stone-600 dark:text-stone-400 text-lg">Full-stack Developer • Cornwall, UK</p>
				</div>

				<div className="space-y-4" role="list" aria-label="Social links">
					{socialLinks.map((link) => (
						<a
							key={link.id}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-ink-900 border border-stone-200 dark:border-ink-800 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-moss-500 focus:ring-offset-2 dark:focus:ring-offset-ink-950"
							role="listitem"
							aria-label={`Visit ${link.name}`}
						>
							<div className="w-12 h-12 rounded-lg bg-stone-100 dark:bg-ink-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 text-stone-700 dark:text-stone-300">
								{link.icon}
							</div>
							<div className="flex-1 text-left">
								<span className="text-lg font-semibold text-ink-900 dark:text-stone-50 group-hover:text-moss-600 dark:group-hover:text-moss-400 transition-colors">
									{link.name}
								</span>
							</div>
							<svg className="w-5 h-5 text-stone-400 group-hover:text-stone-600 dark:group-hover:text-stone-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					))}
				</div>

				<div className="mt-10 text-center">
					<a
						href="https://danielphilipjohnson.com"
						className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-moss-600 dark:hover:text-moss-400 transition-colors text-sm font-medium"
					>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
						</svg>
						View full portfolio →
					</a>
				</div>
			</div>
		</main>
	);
}