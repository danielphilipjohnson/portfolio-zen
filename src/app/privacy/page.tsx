import { SITE_URL } from "@/lib/constants";
import { getPageSEO } from "@/utils/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const seoData = getPageSEO('/privacy');

	if (!seoData || !seoData.title) {
		console.error("Error: SEO data is missing or has no title for path '/privacy'");
		return {
			title: 'Error: Title Not Loaded - Check Config',
			description: 'Error loading description.',
		};
	}

	return {
		title: seoData.title,
		description: seoData.description,
		keywords: seoData.keywords,
		openGraph: seoData.openGraph ? {
			title: seoData.openGraph.title || seoData.title,
			description: seoData.openGraph.description || seoData.description,
			images: seoData.openGraph.images,
			type: seoData.openGraph.type as 'website' | 'profile',
			url: seoData.openGraph.url,
		} : undefined,
		alternates: {
			canonical: `${SITE_URL}/privacy`,
		},
	};
}

const LAST_UPDATED = "25 August 2026";
const CONTACT_EMAIL = "daniel.phil.johnson@google.com";

interface Section {
	heading: string;
	paragraphs: string[];
}

const SECTIONS: Section[] = [
	{
		heading: "Overview",
		paragraphs: [
			"This is the personal website of Daniel Philip Johnson, a full-stack developer based in Truro, Cornwall, United Kingdom. The site publishes my portfolio, engineering articles, notes, and contact details. It is a static website: pages are pre-built HTML files served through Cloudflare. There are no user accounts, no comment systems, and no server-side application processing your data.",
		],
	},
	{
		heading: "What this site does not do",
		paragraphs: [
			"This site does not run advertising, does not embed third-party analytics or tracking scripts, and does not set marketing or profiling cookies. Nothing you read here is linked back to you as an identified person. There is no login, so there are no credentials to store, and there is no form submission backend, so nothing you type into this website is transmitted anywhere.",
		],
	},
	{
		heading: "Server logs",
		paragraphs: [
			"Serving this site involves automated processing of standard web request data. Requests pass through Cloudflare's network, which records information such as your IP address, browser user agent, the URL requested, and the timestamp, in order to deliver content, defend against abuse, and maintain security. Cloudflare acts as an independent controller for these logs under its own privacy policy, which you can read at cloudflare.com/legal/privacy-policy. This site does not use those logs for profiling or marketing.",
		],
	},
	{
		heading: "Email correspondence",
		paragraphs: [
			"If you contact me by email using the address published on the contact page, I will process your email address and the contents of your message for the sole purpose of reading and replying to you. Correspondence is kept only as long as it remains useful for our conversation or for ordinary record-keeping, after which it is deleted. Your details are never added to a mailing list, never shared with third parties, and never used for marketing.",
		],
	},
	{
		heading: "Third-party links",
		paragraphs: [
			"Pages on this site link to external websites and profiles such as GitHub, LinkedIn, and Bluesky. When you follow those links you leave this website and become subject to the privacy practices of the destination service. I encourage you to review their policies separately.",
		],
	},
	{
		heading: "Your rights",
		paragraphs: [
			"As a visitor from the UK or EU, you have rights over personal data relating to you, including access, rectification, erasure, and objection, under the UK GDPR and related law. Because this site collects almost no data, the practical scope of a request will usually be limited to email correspondence. To exercise any right, or to ask a question about this policy, email me and I will respond within a reasonable time frame.",
		],
	},
	{
		heading: "Changes to this policy",
		paragraphs: [
			"If the way this site operates changes materially, for example if analytics or a contact form are ever introduced, this policy will be updated to describe the change, and the revision date below will be amended accordingly.",
		],
	},
];

export default function PrivacyPage() {
	return (
		<main className="min-h-screen bg-[var(--color-stone-50)]">
			<article className="max-w-2xl px-6 py-16 mx-auto md:py-24">
				<h1 className="mb-4 font-serif text-4xl text-[var(--color-moss-700)]">
					Privacy Policy
				</h1>
				<p className="mb-12 text-sm text-[var(--color-stone-500)]">
					Last updated: {LAST_UPDATED}
				</p>

				<div className="space-y-10">
					{SECTIONS.map((section) => (
						<section key={section.heading}>
							<h2 className="mb-3 font-serif text-xl text-[var(--color-stone-800)]">
								{section.heading}
							</h2>
							{section.paragraphs.map((paragraph, index) => (
								<p
									key={index}
									className="mb-3 leading-relaxed text-[var(--color-stone-700)]"
								>
									{paragraph}
								</p>
							))}
						</section>
					))}

					<section>
						<h2 className="mb-3 font-serif text-xl text-[var(--color-stone-800)]">
							Contact
						</h2>
						<p className="leading-relaxed text-[var(--color-stone-700)]">
							Questions about this policy can be sent to{" "}
							<a
								href={`mailto:${CONTACT_EMAIL}`}
								className="underline hover:text-[var(--color-moss-600)]"
							>
								{CONTACT_EMAIL}
							</a>
							.
						</p>
					</section>
				</div>
			</article>
		</main>
	);
}
