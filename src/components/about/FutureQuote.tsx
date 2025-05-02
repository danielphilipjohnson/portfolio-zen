import Text from '../ui/Text';

const SECTION_STYLES = {
	quote: 'max-w-2xl p-6 mx-auto mb-8 text-center border bg-white border-[var(--color-stone-200)]',
};

export const FutureQuote = () => (
	<div className={SECTION_STYLES.quote}>
		<Text variant="quote" className="text-[var(--color-stone-700)]">
			&ldquo;The future, like a bonsai&apos;s growth, unfolds one careful day at a time. Every contribution,
			every collaboration, shapes the direction of what will become.&rdquo;
		</Text>
	</div>
);