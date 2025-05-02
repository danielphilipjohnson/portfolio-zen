import { cn } from "@/lib/utils";

interface ImageCardProps {
	src: string;
	alt: string;
	caption: string;
}

const CORNER_STYLES = "absolute w-4 h-4 border-[var(--color-clay-300)]";
const IMAGE_CARD_STYLES = "relative p-4 bg-white border border-[var(--color-stone-200)]";

export const ImageCard = ({ src, alt, caption }: ImageCardProps) => (
	<figure className={IMAGE_CARD_STYLES}>
		<div className={cn(CORNER_STYLES, "top-0 left-0 border-t border-l")}></div>
		<div className={cn(CORNER_STYLES, "top-0 right-0 border-t border-r")}></div>
		<div className={cn(CORNER_STYLES, "bottom-0 left-0 border-b border-l")}></div>
		<div className={cn(CORNER_STYLES, "bottom-0 right-0 border-b border-r")}></div>

		<div className="mb-2">
			<img
				src={src}
				alt={alt}
				className="w-full h-auto"
			/>
		</div>

		<figcaption className="py-2 text-xs text-center text-[var(--color-stone-500)]">
			{caption}
		</figcaption>
	</figure>
);
