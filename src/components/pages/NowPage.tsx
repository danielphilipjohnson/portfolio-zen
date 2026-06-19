import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import Link from "next/link";

export default function NowPage() {
	const lastUpdated = "June 2026";

	return (
		<main className="min-h-screen bg-[color:var(--color-stone-50)] pt-28 pb-20">
			<section className="pb-10">
				<Container>
					<div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-8 shadow-sm md:p-10">
						<p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--color-moss-700)]">
							What I’m Focused On
						</p>
						<Text
							as="h1"
							variant="h1"
							weight="light"
							className="mb-5 text-[color:var(--color-stone-900)]"
						>
							Now
						</Text>
						<p className="mb-6 text-sm text-[color:var(--color-stone-500)]">
							<a
								href="https://nownownow.com/about"
								target="_blank"
								rel="noopener noreferrer"
								className="underline decoration-[color:var(--color-stone-300)] underline-offset-4 transition-colors hover:decoration-[color:var(--color-moss-500)]"
							>
								What’s a /now page?
							</a>
							{" "}— Last updated: {lastUpdated}
						</p>

						<div className="space-y-4">
							<Text className="text-[color:var(--color-stone-700)]">
								I’m currently focused on building calm, scalable frontend systems — mostly with React, Next.js, TypeScript, and modern CSS.
							</Text>
							<Text className="text-[color:var(--color-stone-700)]">
								My work is centred around frontend architecture, performance, and sustainable engineering practices: the kind of patterns that help teams move quickly without creating noise, fragility, or unnecessary complexity.
							</Text>
						</div>
					</div>
				</Container>
			</section>

			<section className="py-10">
				<Container>
					<div className="mb-8">
						<h2 className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-moss-700)]">
							Professional Focus
						</h2>
						<Text className="text-[color:var(--color-stone-700)]">
							Right now, I’m deepening my work around:
						</Text>
					</div>

					<div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm">
						<ul className="space-y-3">
							{[
								"Frontend architecture patterns for scalable React and Next.js applications",
								"Web performance, including Core Web Vitals, bundle optimisation, rendering strategies, and perceived speed",
								"AI-assisted development workflows, especially practical uses of MCP integrations",
								"Writing about calm software engineering through the lenses of Zen and Tao",
							].map((item) => (
								<li key={item} className="flex items-start gap-3 text-[color:var(--color-stone-700)]">
									<span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--color-moss-400)]" />
									<Text>{item}</Text>
								</li>
							))}
						</ul>
					</div>

					<Text className="mt-5 text-[color:var(--color-stone-700)]">
						I’m especially interested in systems that feel simple from the outside because the underlying structure has been carefully considered.
					</Text>
				</Container>
			</section>

			<section className="bg-white py-10">
				<Container>
					<h2 className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-moss-700)]">
						Current Projects
					</h2>

					<div className="space-y-6">
						{[
							{
								title: "Portfolio rebuild",
								body: [
									"I’m rebuilding this site with Next.js 15, the App Router, Tailwind v4, and an MDX-powered blog.",
									"The goal is not just a refreshed portfolio, but a quieter, more useful home for writing, projects, notes, and experiments.",
								],
							},
							{
								title: "Component library",
								body: [
									"I’m extracting reusable patterns from client work into a personal design system.",
									"This is partly practical and partly reflective: a way to capture the components, interaction patterns, and architectural decisions that keep showing up across projects.",
								],
							},
							{
								title: "Rust and WebAssembly",
								body: [
									"I’m learning Rust and WebAssembly with an eye toward performance-critical frontend workloads.",
									"I’m not rushing this. The aim is to understand where these tools genuinely help, rather than treating them as another thing to chase.",
								],
							},
						].map((project) => (
							<article
								key={project.title}
								className="rounded-2xl border border-[color:var(--color-stone-200)] bg-[color:var(--color-stone-50)] p-6 shadow-sm md:p-7"
							>
								<Text
									as="h3"
									variant="h4"
									className="mb-3 text-[color:var(--color-stone-900)]"
								>
									{project.title}
								</Text>
								<div className="space-y-3">
									{project.body.map((paragraph) => (
										<Text
											key={paragraph}
											className="text-[color:var(--color-stone-700)]"
										>
											{paragraph}
										</Text>
									))}
								</div>
							</article>
						))}
					</div>
				</Container>
			</section>

			<section className="py-10">
				<Container>
					<div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm md:p-7">
						<h2 className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-moss-700)]">
							Reading & Learning
						</h2>
						<Text className="mb-4 text-[color:var(--color-stone-700)]">
							Currently on my desk:
						</Text>
						<ul className="mb-5 space-y-3">
							{[
								"Designing Data-Intensive Applications by Martin Kleppmann — a re-read",
								"The Staff Engineer’s Path by Tanya Reilly",
								"Papers and notes on CRDTs, local-first software, and collaborative systems",
							].map((item) => (
								<li key={item} className="flex items-start gap-3 text-[color:var(--color-stone-700)]">
									<span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--color-water-400)]" />
									<Text>{item}</Text>
								</li>
							))}
						</ul>
						<Text className="text-[color:var(--color-stone-700)]">
							A lot of my current reading circles around the same theme: building software that can scale technically without becoming harder to reason about.
						</Text>
					</div>
				</Container>
			</section>

			<section className="bg-white py-10">
				<Container>
					<div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-[color:var(--color-stone-50)] p-6 shadow-sm md:p-7">
						<h2 className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-blossom-600)]">
							Not Doing Right Now
						</h2>
						<Text className="mb-4 text-[color:var(--color-stone-700)]">
							I’m intentionally not spending time on:
						</Text>
						<ul className="space-y-3">
							{[
								"Side projects without a clear purpose",
								"Chasing every new JavaScript framework release",
								"Meetings without agendas",
								"Optimising for visibility at the expense of useful work",
							].map((item) => (
								<li key={item} className="flex items-start gap-3 text-[color:var(--color-stone-700)]">
									<svg className="mt-1 h-4 w-4 flex-shrink-0 text-[color:var(--color-blossom-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
									<Text>{item}</Text>
								</li>
							))}
						</ul>
						<Text className="mt-4 text-[color:var(--color-stone-700)]">
							I’m trying to leave more room for deep work, good writing, thoughtful collaboration, and the occasional long walk by the sea.
						</Text>
					</div>
				</Container>
			</section>

			<section className="py-10">
				<Container>
					<div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm md:p-7">
						<h2 className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-moss-700)]">
							Location & Routine
						</h2>
						<div className="space-y-3">
							<Text className="text-[color:var(--color-stone-700)]">
								I’m based in Cornwall, UK, and work remotely.
							</Text>
							<Text className="text-[color:var(--color-stone-700)]">
								Most days are shaped around deep work in the mornings, calls and collaboration in the afternoons, and coastal walks whenever the weather cooperates.
							</Text>
						</div>
					</div>
				</Container>
			</section>

			<section className="bg-white py-10">
				<Container>
					<div className="rounded-2xl border border-[color:var(--color-stone-200)] bg-white p-6 shadow-sm md:p-7">
						<h2 className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-water-600)]">
							Get in Touch
						</h2>
						<div className="space-y-3">
							<Text className="text-[color:var(--color-stone-700)]">
								I’m open to interesting conversations about frontend architecture, web performance, AI-assisted development, local-first software, and calm engineering.
							</Text>
							<Text className="text-[color:var(--color-stone-700)]">
								Reach out if something here overlaps with what you’re thinking about.
							</Text>
							<Text className="text-[color:var(--color-stone-700)]">
								You can also find me on{" "}
								<Link
									href="/social"
									className="text-[color:var(--color-water-700)] underline decoration-[color:var(--color-water-300)] underline-offset-4 transition-colors hover:text-[color:var(--color-water-800)]"
								>
									/social
								</Link>
								.
							</Text>
						</div>
					</div>
				</Container>
			</section>

			<section className="pt-10">
				<Container>
					<p className="text-center text-sm text-[color:var(--color-stone-500)]">
						Inspired by{" "}
						<a
							href="https://nownownow.com/about"
							target="_blank"
							rel="noopener noreferrer"
							className="underline decoration-[color:var(--color-stone-300)] underline-offset-4 transition-colors hover:decoration-[color:var(--color-moss-500)]"
						>
							Derek Sivers’ now page movement
						</a>
						.
					</p>
				</Container>
			</section>
		</main>
	);
}