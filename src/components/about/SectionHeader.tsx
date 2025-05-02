import Text from '../ui/Text';

const SECTION_STYLES = {
	header: 'flex items-center pb-4 mb-8 border-b border-[var(--color-stone-200)]',
	icon: 'mr-3 text-2xl',
	title: 'text-[var(--color-stone-800)]'
};

export const SectionHeader = ({ icon, title, variant = 'h2' }: { icon: string; title: string; variant?: 'h2' | 'h3' }) => (
	<div className={SECTION_STYLES.header}>
		<span className={SECTION_STYLES.icon}>{icon}</span>
		<Text as={variant} className={SECTION_STYLES.title} variant={variant}>
			{title}
		</Text>
	</div>
);