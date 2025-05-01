import Text from "@/components/ui/Text"
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';


const Hero = () => {
	return (
		<section className="relative py-16 overflow-hidden bg-[color:var(--color-stone-50)] md:py-24">
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-0 right-0 w-1/2 rounded-full h-1/2 bg-[color:var(--color-moss-100)] -translate-y-1/4 translate-x-1/4 blur-3xl"></div>
				<div className="absolute bottom-0 left-0 w-1/2 rounded-full h-1/2 bg-[color:var(--color-water-100)] translate-y-1/4 -translate-x-1/4 blur-3xl"></div>
			</div>

			<div className="absolute inset-0 opacity-[0.15]">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), 
                      linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
						backgroundSize: '24px 24px'
					}}
				></div>
			</div>

			<Container>
				<div className="items-center justify-between md:flex">
					<div className="mb-8 md:w-3/5 md:mb-0">
						<div className="mb-4 opacity-20">
							<Text
								as="div"
								variant="h1"
								weight="thin"
								className="text-6xl text-[color:var(--color-moss-500)] md:text-9xl"
							>
								松
							</Text>
						</div>

						<div className="relative mb-6">
							<div className="absolute top-0 bottom-0 w-1 -left-8 bg-[color:var(--color-clay-400)]"></div>
							<Text
								as="h1"
								variant="h1"
								weight="light"
								className="text-[color:var(--color-stone-800)]"
							>
								Fullstack Engineer @ <span className="text-[color:var(--color-moss-600)]">Loan.co.uk</span>
							</Text>
						</div>

						<Text
							as="h2"
							variant="h3"
							weight="extralight"
							className="mb-6 tracking-wide text-[color:var(--color-moss-700)]"
						>
							I scale frontend systems that feel intuitive, perform fast, and ship with confidence.
						</Text>

						<Text
							variant="body"
							weight="light"
							className="max-w-lg text-[color:var(--color-stone-600)]"
						>
							With 5+ years in fintech and e-commerce, I bridge design systems, developer experience, and backend fluency — turning complex product flows into performant, accessible, and maintainable interfaces.
						</Text>


						<div className="mt-8">
							<Button variant="primary" size={'lg'}>
								View Collection
							</Button>
						</div>
					</div>

					<div className="relative md:w-2/5">
						<div className="relative">
							<div className="absolute inset-0 transform rotate-45 translate-x-4 translate-y-4">
								<div className="w-full h-full border-2 border-dashed rounded-lg border-[color:var(--color-moss-200)] opacity-50"></div>
							</div>

							<div className="relative overflow-hidden border-4 rounded-full aspect-square border-[color:var(--color-stone-200)] bg-[color:var(--color-stone-100)] shadow-lg">
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-stone-100)] to-white opacity-90"></div>

									<div className="relative z-10 flex items-center justify-center w-3/4 h-3/4 p-8 rounded-full bg-[color:var(--color-stone-50)] shadow-inner">
										<svg className="w-full h-full text-[color:var(--color-moss-500)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M12 16C12 16 8 13 8 10V7L12 6L16 7V10C16 13 12 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>

									<div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[color:var(--color-moss-300)] rounded-tl-lg"></div>
									<div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[color:var(--color-moss-300)] rounded-tr-lg"></div>
									<div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[color:var(--color-moss-300)] rounded-bl-lg"></div>
									<div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[color:var(--color-moss-300)] rounded-br-lg"></div>
								</div>
							</div>

							<div className="absolute -bottom-3 -right-3">
								<div className="w-16 h-16 bg-[color:var(--color-clay-50)] rounded-full opacity-50 blur-sm"></div>
							</div>

							<div className="absolute top-1/4 -left-6 w-12 h-12 rounded-full border border-[color:var(--color-moss-200)] bg-[color:var(--color-stone-50)] shadow-sm opacity-70"></div>
							<div className="absolute -bottom-2 right-1/3 w-8 h-8 rounded-full border border-[color:var(--color-water-200)] bg-[color:var(--color-stone-50)] shadow-sm opacity-60"></div>
						</div>
					</div>
				</div>
			</Container>

			<div className="absolute bottom-0 left-0 right-0 h-5 bg-[linear-gradient(to_right,transparent,_var(--color-moss-300),_transparent)] dark:bg-[linear-gradient(to_right,transparent,_var(--color-moss-700),_transparent)]" />
		</section>
	);
};

export default Hero;