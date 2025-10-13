import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import { SectionHeader } from '@/components/about/SectionHeader';

interface QuickGuide {
	title: string;
	href: string;
	isExternal?: boolean;
}

const quickGuides: QuickGuide[] = [
	{
		title: "OWASP Top 10 for Frontend Developers",
		href: "/blog/owasp-top-10-frontend" 
	},
	{
		title: "React XSS Prevention Guide", 
		href: "/blog/react-xss-prevention"
	},
	{
		title: "Next.js Authentication Security",
		href: "/blog/nextjs-auth-security"
	},
	{
		title: "CSRF vs CORS Explained",
		href: "/blog/csrf-vs-cors-explained"
	}
];

const QuickStartGuides = () => {
	return (
		<section className="py-16 bg-white">
			<Container>
				<SectionHeader 
					icon="⚡" 
					title="Quick Start: Popular Guides" 
					variant="h2"
				/>
				
				<div className="mb-8">
					<Text as="p" variant="body" className="max-w-3xl text-[var(--color-stone-700)]">
						Not sure where to begin? Start with the most requested frontend security topics:
					</Text>
				</div>

				<div className="grid gap-4 md:grid-cols-2">
					{quickGuides.map((guide, index) => (
						<a
							key={index}
							href={guide.href}
							className="block p-6 border border-[var(--color-stone-200)] rounded-lg bg-[var(--color-stone-50)] transition-all hover:border-[var(--color-moss-300)] hover:bg-[var(--color-moss-50)] hover:shadow-md group"
						>
							<div className="flex items-center justify-between">
								<Text as="h3" variant="h6" className="text-[var(--color-stone-800)] group-hover:text-[var(--color-moss-700)]">
									{guide.title}
								</Text>
								<svg 
									xmlns="http://www.w3.org/2000/svg" 
									className="w-5 h-5 text-[var(--color-stone-400)] group-hover:text-[var(--color-moss-600)] transition-colors" 
									fill="none" 
									viewBox="0 0 24 24" 
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</div>
						</a>
					))}
				</div>

				{/* Coming Soon Note */}
				<div className="mt-8 p-4 bg-[var(--color-moss-50)] border border-[var(--color-moss-200)] rounded-lg">
					<Text as="p" variant="body-sm" className="text-[var(--color-stone-700)] text-center">
						📝 <strong>Content Coming Soon:</strong> These guides are currently being written and will be published over the coming weeks. 
						<a href="/contact" className="ml-1 text-[var(--color-moss-600)] hover:text-[var(--color-moss-700)] underline">
							Get notified when they&apos;re live
						</a>
					</Text>
				</div>
			</Container>
		</section>
	);
};

export default QuickStartGuides;
