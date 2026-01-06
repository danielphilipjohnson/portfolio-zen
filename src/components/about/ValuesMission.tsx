import Container from '../ui/Container';
import Text from '@/components/ui/Text';

const ZenValuesMission = () => {
	return (
		<section className="py-16 bg-[var(--color-stone-50)]">
			<Container>
				<div className="flex items-center pb-4 mb-8 border-b border-stone-200">
					<span className="mr-3 text-2xl">🏆</span>
					<Text as='h2' variant="h2" className="text-stone-800">
						My Values and Mission
					</Text>
				</div>

				<div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
					<div className="lg:w-3/4">
						<div className="relative mb-6">
							<div className="absolute top-0 left-0 w-1 h-full rounded-full bg-[color:var(--color-moss-300)]" />
							<div className="pl-6">
								<h3 className="mb-3 text-lg font-medium text-stone-700">
									Values
								</h3>
								<Text variant="body" className="mb-4 text-stone-800">
									I always try to leave the world a better place than yesterday. I try
									to give advice related to programming and personal. I always try 99%
									of the time to help the best I can. If I don&apos;t know the answer, I
									will try my hardest to find the answer or find another person that
									can help you. I keep almost all my code 99.9% opensource for others
									to look at and use on <a
										href="https://github.com/danielphilipjohnson"
										className="underline hover:no-underline text-water-600"
									>
										GitHub
									</a>. I want to help you build apps, websites and programs that express
									your ideas.
								</Text>
							</div>
						</div>

						<div className="relative mb-6">
							<div className="absolute top-0 left-0 w-1 h-full rounded-full bg-[color:var(--color-moss-300)] " />

							<div className="pl-6">
								<h3 className="mb-3 text-lg font-medium text-stone-700">
									Accessibility Mission
								</h3>
								<Text variant="body" className="text-stone-800">
									Currently, I&apos;m finishing off my language studies with the Spanish
									language. I know that speaking and reading in the English language
									is a blessing. Many people do not have access to good programming
									content due to it being in English. Providing a language barrier.
									Also, most educational content is not reasonably priced when you
									convert it to other currencies. For instance, Peruvian Soles to
									Dollars it can make courses very expensive. This is something I&apos;m
									serious about addressing and hoping to help with. That&apos;s why I
									volunteer my time and money to help those from South America and
									North America. I want to also make educational content that is
									accessible to as much of the world as possible. If you would like to
									help by converting my future tutorials, blog and books to other
									languages. Please let me know :). I&apos;m happy to give you credit. I
									hope we can all make educational content more accessible to those
									who desire to program can do it.
								</Text>
							</div>
						</div>
					</div>

					<div className="lg:w-1/4">
						<figure className="relative p-4 bg-white border border-stone-200">
							{/* Decorative corner elements */}
							<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-moss-300"></div>
							<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-moss-300"></div>
							<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-moss-300"></div>
							<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-moss-300"></div>

							<div className="mb-2">
								<img
									src="/images/about/about-first-day.webp"
									alt="Daniel Johnson wearing a purple face mask on his first day to work"
									className="w-full h-auto"
								/>
							</div>

							<Text variant="caption" className="py-2 text-center text-stone-700">
								My first day as a Frontend Engineer
							</Text>
						</figure>

						<div className="p-4 mt-6 border-l-2 bg-moss-50 border-moss-500">
							<Text variant="quote" className="text-stone-800">
								Every contribution, like every careful cut in bonsai cultivation, shapes a better future for those seeking knowledge.
							</Text>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ZenValuesMission;