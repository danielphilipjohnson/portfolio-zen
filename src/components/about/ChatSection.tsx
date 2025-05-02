import Text from '../ui/Text';
import { chatTopics } from '@/data/chat-topics';
import { cn } from '@/lib/utils';

const SECTION_STYLES = {
	chatSection: 'mb-4',
	chatBox: 'p-4 mb-6 border bg-white border-[var(--color-stone-200)]',
	chatGrid: 'grid grid-cols-1 gap-4 md:grid-cols-2'
};


export const ChatSection = () => {
	const getBorderColorClass = (index: number) => {
		const colors = [
			'border-[var(--color-moss-500)]',
			'border-[var(--color-clay-600)]',
			'border-[var(--color-water-500)]',
			'border-[var(--color-stone-400)]'
		];
		return colors[index % 4];
	};

	return (
		<div>
			<div className={SECTION_STYLES.chatSection}>
				<span className="mr-2 text-xl">☕</span>
				<h3 className="text-lg font-medium text-[var(--color-stone-700)]">
					Wanna Chat?
				</h3>
			</div>

			<div className={SECTION_STYLES.chatBox}>
				<div className="flex items-start mb-4">
					<div className="w-2 h-2 mt-2 mr-3 rounded-full bg-[var(--color-water-500)]" />
					<Text className="text-[var(--color-stone-600)]">
						@ me on <a
							href="https://twitter.com/danielp_johnson"
							className="transition-colors text-[var(--color-water-600)]"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter profile"
						>
							Twitter
						</a> about any of the following topics! 💬
					</Text>
				</div>
			</div>

			<div className={SECTION_STYLES.chatGrid}>
				{chatTopics.map((item, index) => (
					<div
						key={index}
						className={cn(
							'p-4 border-l-2 bg-white',
							getBorderColorClass(index)
						)}
					>
						<Text as="h4" variant="h5" className="text-[var(--color-stone-700)] mb-2">
							{item.topic}
						</Text>
						<Text variant="body-sm" className="text-[var(--color-stone-600)]">
							{item.description}
						</Text>
					</div>
				))}
			</div>
		</div>
	);
};