interface SectionProps {
	children: React.ReactNode;
	bg?: "muted" | "white";
	className?: string;
	overflowHidden?: boolean;
}

const BG_MAP: Record<NonNullable<SectionProps["bg"]>, string> = {
	muted: "bg-stone-50",
	white: "bg-white",
};

const Section = ({
	children,
	bg,
	className = "",
	overflowHidden = false,
}: SectionProps) => {
	const bgClass = bg ? BG_MAP[bg] : "";
	return (
		<section
			className={`relative py-16 md:py-24 ${bgClass} ${overflowHidden ? "overflow-hidden" : ""} ${className}`}
		>
			{children}
		</section>
	);
};

export default Section;
