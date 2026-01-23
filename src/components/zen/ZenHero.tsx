import Text from "@/components/ui/Text";

const ZenHero = () => {
	return (
		<section className="relative bg-[var(--color-stone-50)]">
			<div className="relative overflow-hidden">
				<div className="absolute inset-0 z-0">
					<img
						src="/images/about-hero.png"
						alt="Zen garden texture"
						className="object-cover w-full h-full"
					/>
					<div className="absolute inset-0 bg-[var(--color-stone-900)] opacity-70" />
				</div>

				<div className="container relative z-10 px-6 py-32 mx-auto mt-16 md:pt-48 md:pb-48">
					<div className="absolute top-0 left-0 w-1/3 h-1 bg-[var(--color-moss-500)]" />

					<div className="relative mb-6">
						<div className="absolute top-0 bottom-0 w-1 -left-4 bg-[var(--color-moss-500)]" />
						<Text as="p" variant="caption" className="mb-4 uppercase tracking-[0.25em] text-[var(--color-moss-200)]">
							Focus 04 / Zen Hub
						</Text>
						<Text as="h1" variant="hero" className="text-[var(--color-stone-50)]">
							Zen Hub
						</Text>
					</div>

					<Text as="h2" variant="subtitle" className="max-w-3xl text-[var(--color-stone-100)]">
						My zen philosophy of programming: cultivating resilient systems with patience, pruning, and intention.
					</Text>

					<Text variant="body" className="mt-6 max-w-2xl text-[var(--color-stone-100)]">
						Like the About page hero, this space honors slow craftsmanship. Every principle in this hub builds on that same calm foundation.
					</Text>
				</div>

			<div className="absolute inset-0 bg-gradient-to-b from-[var(--color-stone-950)]/40 to-[var(--color-stone-950)]/30" />
		</div>
		</section>
	);
};

export default ZenHero;
