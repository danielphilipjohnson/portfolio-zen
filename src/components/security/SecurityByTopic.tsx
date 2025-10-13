import Container from '@/components/ui/Container';
import Text from '@/components/ui/Text';
import { SectionHeader } from '@/components/about/SectionHeader';

interface TopicSection {
	title: string;
	description: string;
	icon: string;
	guides: Array<{
		title: string;
		href: string;
	}>;
}

const topicSections: TopicSection[] = [
	{
		title: "OWASP Series",
		description: "Learn how the OWASP Top 10 applies directly to frontend engineering. These guides map each vulnerability to real issues in React and Next.js projects.",
		icon: "🔐",
		guides: [
			{ title: "OWASP Top 10 for Frontend Developers", href: "/blog/owasp-top-10-frontend" },
			{ title: "React OWASP Top 10", href: "/blog/react-owasp-top-10" },
			{ title: "Why Frontend Devs Must Care About OWASP", href: "/blog/why-frontend-devs-must-care-about-owasp" }
		]
	},
	{
		title: "Attack Vectors Explained",
		description: "Understand the most common attack paths — and how to shut them down in your apps.",
		icon: "⚔️",
		guides: [
			{ title: "React XSS Prevention", href: "/blog/react-xss-prevention" },
			{ title: "CSRF vs CORS: The Real Difference", href: "/blog/csrf-vs-cors-explained" }
		]
	},
	{
		title: "Authentication & State",
		description: "Frontend apps often mishandle authentication and caching. Learn secure patterns for handling tokens, cookies, and client state.",
		icon: "🔑",
		guides: [
			{ title: "Next.js Authentication Security", href: "/blog/nextjs-auth-security" },
			{ title: "Securing React State with TanStack Query & Zustand", href: "/blog/securing-react-state-zustand-tanstack" }
		]
	},
	{
		title: "Validation as Security",
		description: "Input validation is your first defense. With tools like Zod and React Hook Form, you can enforce contracts and block malicious payloads before they spread.",
		icon: "✅",
		guides: [
			{ title: "Zod: Why Validation Is a Security Boundary", href: "/blog/zod-validation-security" }
		]
	},
	{
		title: "Tools & Checklists",
		description: "Ship safer apps with automated audits and CI checks.",
		icon: "🛠️",
		guides: [
			{ title: "Dependency audits (npm audit, Snyk)", href: "#tools" },
			{ title: "Security headers & CSP with Helmet", href: "#tools" },
			{ title: "Continuous scanning with Dependabot or Renovate", href: "#tools" },
			{ title: "Download the Frontend Security Checklist (PDF)", href: "#checklist" }
		]
	}
];

interface TopicCardProps {
	topic: TopicSection;
}

const TopicCard = ({ topic }: TopicCardProps) => {
	return (
		<div className="p-6 border border-[var(--color-stone-200)] rounded-lg bg-white">
			<div className="flex items-center mb-4">
				<span className="text-2xl mr-3">{topic.icon}</span>
				<Text as="h3" variant="h5" className="text-[var(--color-stone-800)]">
					{topic.title}
				</Text>
			</div>
			
			<Text as="p" variant="body" className="mb-6 text-[var(--color-stone-700)]">
				{topic.description}
			</Text>

			<div className="space-y-3">
				{topic.guides.map((guide, index) => (
					<a
						key={index}
						href={guide.href}
						className="block p-3 rounded border border-[var(--color-stone-100)] bg-[var(--color-stone-50)] hover:border-[var(--color-moss-300)] hover:bg-[var(--color-moss-50)] transition-all group"
					>
						<div className="flex items-center justify-between">
							<Text as="span" variant="body-sm" className="text-[var(--color-stone-700)] group-hover:text-[var(--color-moss-700)]">
								{guide.title}
							</Text>
							<svg 
								xmlns="http://www.w3.org/2000/svg" 
								className="w-4 h-4 text-[var(--color-stone-400)] group-hover:text-[var(--color-moss-600)] transition-colors" 
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
		</div>
	);
};

const SecurityByTopic = () => {
	return (
		<section className="py-16 bg-[var(--color-stone-50)]">
			<Container>
				<SectionHeader 
					icon="🧩" 
					title="Security by Topic" 
					variant="h2"
				/>
				
				<div className="grid gap-8 lg:grid-cols-2">
					{topicSections.map((topic, index) => (
						<TopicCard key={index} topic={topic} />
					))}
				</div>

				{/* Content Notice */}
				<div className="mt-12 p-6 bg-[var(--color-moss-50)] border-l-4 border-[var(--color-moss-500)] rounded-r-lg">
					<Text as="h3" variant="h6" className="mb-2 text-[var(--color-stone-800)]">
						📚 Content Development in Progress
					</Text>
					<Text as="p" variant="body" className="text-[var(--color-stone-700)]">
						I&apos;m actively writing comprehensive guides for each of these topics. The content will be published incrementally over the next few weeks. 
						<a href="/contact" className="ml-1 text-[var(--color-moss-600)] hover:text-[var(--color-moss-700)] underline">
							Subscribe to get notified
						</a> when new security guides go live.
					</Text>
				</div>
			</Container>
		</section>
	);
};

export default SecurityByTopic;
