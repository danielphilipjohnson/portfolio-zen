
import Text from '../ui/Text';

const ZenProjectHero = ({
	title = "Portfolio",
	subtitle = "Cultivated digital experiences crafted with intention and purpose",
	backgroundImageUrl = "/images/projects/hero.png",
	backgroundOverlayOpacity = 0.7
}) => {
	return (
		<section className="relative overflow-hidden">
			<div className="absolute inset-0">
				<img
					src={backgroundImageUrl}
					alt=""
					className="absolute inset-0 object-cover w-full h-full"
					role="presentation"
				/>
				<div
					className="absolute inset-0 bg-[var(--color-stone-950)]"
					style={{
						opacity: backgroundOverlayOpacity
					}}
				/>

				<div
					className="absolute inset-0 opacity-30 mix-blend-soft-light"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			<div className="container relative z-10 px-6 pt-32 pb-16 mx-auto mt-16 md:pt-48 md:pb-48">
			
				<div className="absolute right-6 top-24 md:right-12 md:top-32 opacity-10">
					<div className="font-thin text-[var(--color-stone-50)] text-7xl md:text-9xl">
						作
					</div>
				</div>

				<div className="md:w-2/3">
					<div className="relative mb-6">
						<div className="absolute top-0 bottom-0 w-1 -left-4 bg-[var(--color-moss-500)]" />
						<Text as="h1" variant="hero" className="text-[var(--color-stone-50)]">
							{title}
						</Text>
					</div>
					<Text as="p" variant="subtitle" className="max-w-2xl text-[var(--color-stone-50)]">
						{subtitle}
					</Text>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-moss-500)] to-transparent opacity-30"></div>
		</section>
	);
};

export default ZenProjectHero;