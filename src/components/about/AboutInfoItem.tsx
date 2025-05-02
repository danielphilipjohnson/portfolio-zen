import type { AboutInfoItem as AboutInfoItemProps } from "@/types/about-intro";

export const AboutInfoItem = ({ emoji, label, value }: AboutInfoItemProps) => (
	<li className="flex items-start">
		<span className="mr-3 opacity-70 text-[var(--color-stone-700)]">{emoji}</span>
		<div className="text-[var(--color-stone-700)]">
			<span className="font-medium">{label}:</span> {value}
		</div>
	</li>
);

export default AboutInfoItem;