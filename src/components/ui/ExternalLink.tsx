interface ExternalLinkProps {
	href: string;
	children: React.ReactNode;
}


const LINK_STYLES = "mx-1 underline hover:no-underline text-[var(--color-water-600)]";

export const ExternalLink = ({ href, children }: ExternalLinkProps) => (
	<a
		href={href}
		className={LINK_STYLES}
		target="_blank"
		rel="noopener noreferrer"
	>
		{children}
	</a>
);