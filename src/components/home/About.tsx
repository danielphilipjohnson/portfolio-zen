import Text from "@/components/ui/Text"
import Container from "@/components/ui/Container"
import PhilosophyPoints from "@/components/PhilosophyPoints"
import { defaultAboutProps } from '@/data/about';

const About = () => {
	const {
		title,
		summary,
		details,
		philosophyTitle,
		philosophyPoints,
		imageSrc,
		imageAlt
	} = defaultAboutProps;

	return (
		<section 
			className="relative py-16 overflow-hidden md:py-24 "
			aria-label="About section"
		>
			<div className="absolute bottom-0 right-0 w-1/3 rounded-tl-full h-1/3 bg-moss-50 opacity-70"></div>
			<div className="absolute w-64 h-64 border rounded-full -left-16 -top-16 border-stone-200 opacity-20"></div>

			<Container>
				<div className="items-start gap-12 md:flex lg:gap-16">
					<div className="mb-10 md:w-3/5 md:mb-0">
						<div className="relative mb-8">
							<div className="absolute w-8 h-px -left-4 top-1/2 bg-clay-400"></div>
							<Text
								variant="h2"
								weight="light"
								className="text-stone-800"
							>
								{title}
							</Text>
						</div>

						<Text
							variant="h4"
							weight="light"
							className="mb-6 text-moss-700"
						>
							{summary}
						</Text>

						<div className="mb-10 space-y-4">
							{details.map((paragraph, index) => (
								<Text
									key={index}
									variant="body"
									className="text-stone-700"
								>
									{paragraph}
								</Text>
							))}
						</div>

						<PhilosophyPoints 
							title={philosophyTitle}
							points={philosophyPoints}
						/>
					</div>

					<div className="relative md:w-2/5">
						<div className="aspect-[3/4] relative z-10">
							<div className="relative h-full overflow-hidden bg-white border-2 border-stone-200 shadow-soft">
								<div className="absolute inset-0 flex items-center justify-center bg-stone-100">
									<img
										src={imageSrc}
										alt={imageAlt}
										className="object-cover w-full h-full"
										loading="lazy"
									/>
								</div>

								<div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-moss-400 opacity-70"></div>
								<div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-moss-400 opacity-70"></div>
							</div>

							<div className="absolute z-0 w-full h-full border-2 border-dashed -bottom-4 -right-4 border-clay-300 opacity-40"></div>
						</div>

						<div className="absolute transform -right-2 -bottom-10 opacity-80 -rotate-6">
							<Text
								as="div"
								variant="h1"
								weight="thin"
								className="text-5xl text-stone-400 md:text-6xl"
								aria-hidden="true"
							>
								自然
							</Text>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default About;