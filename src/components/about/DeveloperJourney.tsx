import Container from '../ui/Container';
import Link from 'next/link';
import Text from '../ui/Text';
import { ExternalLink } from '../ui/ExternalLink';
import { ImageCard } from '../ui/ImageCard';


const DeveloperJourney = () => {
	return (
		<section className="py-16 bg-[var(--color-stone-100)]" aria-label="Developer Journey">
			<Container>
				<header className="flex items-center pb-4 mb-8 border-b border-[var(--color-stone-200)]">
					<span className="mr-3 text-2xl" role="img" aria-label="Notebook">📔</span>
					<Text variant="h2" weight="light" className="text-[var(--color-stone-800)]">
						My Developer Journey
					</Text>
				</header>

				<article className="flex flex-col gap-8 mb-12 lg:flex-row">
					<div className="lg:w-1/4">
						<ImageCard
							src="/images/about/about-kid.webp"
							alt="4 year old Daniel Johnson playing in the garden"
							caption="4 year old Daniel Johnson playing in the garden"
						/>
					</div>

					<div className="lg:w-3/4">
						<div className="mb-6 text-[var(--color-stone-700)]">
							<Text variant="body" weight="medium" className="mb-4 text-stone-900">
								When did I discover programming:
							</Text>
							<Text variant="body" className="mb-4 text-stone-900">
								Well, when I was a young child, my mother, in her spare time would copy code from a manual to
								make games run on the <ExternalLink href="https://en.wikipedia.org/wiki/Commodore_64">
									Commodore 64 (CBM 64)
								</ExternalLink> but putting them into memory. She kept this console for quite some
								time it was the closest thing we had to a computer. The first game I
								remember helping run was <ExternalLink href="https://www.retrogamer.net/retro_games80/blue-meanies-from-outer-space/">
									Blue Meanies from Outer Space
								</ExternalLink>.
							</Text>
							<Text variant="body" className="mt-4 text-stone-900">
								It was so exciting to see it running, however, not so for my mom.
								She claimed all that time for a space invaders clone.
							</Text>
						</div>

						<div className="inline-block px-6 py-4 mb-6 border-l-2 bg-[var(--color-stone-100)] border-[var(--color-moss-500)]">
							<div className="flex items-center">
								<span className="mr-2" role="img" aria-label="Pointing right">👉</span>
								<Text variant="body" className="text-stone-900">
									If you want to know more about me:
									<Link
										href="/about/my-story"
										className="ml-2 font-medium transition-colors text-[var(--color-moss-600)]"
									>
										Read my story
									</Link>
								</Text>
							</div>
						</div>
					</div>
				</article>

				<article className="flex flex-col gap-8 mb-12 lg:flex-row">
					<div className="order-2 lg:w-3/4 lg:order-1">
						<div className="relative leading-relaxed text-stone-900">
							<Text variant="body" className="mb-4">
								Span a few years to one year before I started college. I needed to
								buy a PC to submit my assignments. So during the summer of 2008, I
								worked so hard cleaning hotels with my mother. I now had enough
								money to buy my first computer a <ExternalLink href="https://www.mrmemory.co.uk/memory-ram-upgrades/packard-bell/imedia/x2414">
									Packard Bell iMedia x2414
								</ExternalLink> with an enormous amount of Ram totalling 2GB and an intel Celeron
								with duo cores. The best part was it was running everyone&apos;s
								favourite Windows version <ExternalLink href="https://en.wikipedia.org/wiki/Windows_Vista">
									Windows Vista
								</ExternalLink>.
							</Text>

							<Text variant="body" className="mb-4">
								It was so hard to get any work done. Then one fatal evening
								windows broke the <ExternalLink href="https://social.technet.microsoft.com/Forums/windows/en-US/69029855-21c1-411d-bdd3-b864222eefb6/dhcp-on-vista-has-stopped-running?forum=itprovistasetup">
									DHCP no longer worked
								</ExternalLink> I had no clue how to fix it and no other device to search how to fix
								it. I was then forced to use the library to find a solution get a
								windows disc this seemed almost impossible. I started to ask what is
								Windows and is there an alternative. The answer was Yes! <ExternalLink href="https://wiki.ubuntu.com/JauntyJackalope">
									Ubuntu 9.04 (Jaunty Jackalope)
								</ExternalLink>.
							</Text>

							<Text variant="body" className="mb-4">
								I encountered problems I was unable to download the ISO. So I
								asked canonical for a disc and enclosed a cheque to cover the
								shipping. From that day I have used Linux ever since. The distros I
								commonly use now are <ExternalLink href="https://kubuntu.org/">
									Kubuntu 20.10
								</ExternalLink>, <ExternalLink href="https://manjaro.org/">
									Manjaro
								</ExternalLink> and <ExternalLink href="https://archlinux.org/">
									Arch Linux
								</ExternalLink>. I use <ExternalLink href="https://kde.org/">
									KDE
								</ExternalLink> as my GUI &ldquo;you know what they say old habits die hard.&rdquo;
							</Text>

							<Text variant="body" className="mb-4">
								Yes, I occasionally use Windows. After I built my next PC, I got
								<ExternalLink href="https://en.wikipedia.org/wiki/Windows_7">
									Windows 7
								</ExternalLink> and came across <ExternalLink href="https://en.wikipedia.org/wiki/Microsoft_XNA_Game_Studio">
									XNA Game Studio 3.0
								</ExternalLink>. The idea of making games for Xbox seemed great. It gave me a
								moment of nostalgia with my mom. Which lead me to learn C# from
								<ExternalLink href="https://docs.microsoft.com/en-us/learn/">
									Microsoft Academy
								</ExternalLink> and eventually built an <ExternalLink href="https://sourceforge.net/projects/xnarpgtoolkit/">
									RPG game from the toolkit
								</ExternalLink> they provided.
							</Text>

							<Text variant="body">
								I progressed onto making an <ExternalLink href="https://ubuntu.com/server">
									Ubuntu Linux server
								</ExternalLink> out of interest as well as a samba server. All in my free time.
								During my final year of studies, I was responsible for creating
								experiments with python and using libraries such as <ExternalLink href="https://pandas.pydata.org/">
									pandas
								</ExternalLink>, <ExternalLink href="https://numpy.org/">
									NumPy
								</ExternalLink> and <ExternalLink href="https://matplotlib.org/">
									matplotlib
								</ExternalLink> to plot and analysis data. Now I found my calling with web
								development and love every moment I get using JavaScript and
								React.js
							</Text>
						</div>
					</div>

					<div className="order-1 lg:w-1/4 lg:order-2">
						<ImageCard
							src="/images/about/about-moving.webp"
							alt="A selfie of me with the sea the st ives sea behind."
							caption="Moving to Cornwall"
						/>

						<div className="hidden mt-8 ml-4 lg:block">
							<div className="w-px h-48 ml-4 bg-[var(--color-moss-300)]"></div>
							<div
								className="flex items-center justify-center w-8 h-8 text-sm rounded-full bg-[var(--color-moss-50)] text-[var(--color-moss-700)] border border-[var(--color-moss-300)]"
							>
								Now
							</div>
						</div>
					</div>
				</article>

				<div className="max-w-2xl p-6 text-center border-l-2 bg-[var(--color-stone-100)] border-[var(--color-clay-400)]">
					<Text variant="quote">
						My journey in technology has been like cultivating a bonsai—starting with small, careful steps and gradually shaping a path of continuous learning and growth. Each experience has been a deliberate cut, each technology a new branch, all coming together to form something meaningful and purposeful.
					</Text>
				</div>
			</Container>
		</section>
	);
};

export default DeveloperJourney;