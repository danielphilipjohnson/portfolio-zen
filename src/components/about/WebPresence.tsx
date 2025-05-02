import Text from '../ui/Text';

const SECTION_STYLES = {
	webSection: 'mb-12',
	webHeader: 'flex items-center mb-4',
	webList: 'pl-8 space-y-3',
}

export const WebPresence = () => {
	const webItems = [
		"Sharing useful programming resources on LinkedIn 💼",
		"Tinkering with my projects on Codepen 🏓",
		"Showing my work in progress on Instagram 📹🤳"
	];

	return (
		<div className={SECTION_STYLES.webSection}>
			<div className={SECTION_STYLES.webHeader}>
				<span className="mr-2 text-xl">🌎</span>
				<Text className="text-[var(--color-stone-700)] font-medium" as="h3" variant="h4">
					Find me around the web:
				</Text>
			</div>

			<ul className={SECTION_STYLES.webList}>
				{webItems.map((item, index) => (
					<li key={index} className="flex items-start">
						<div className="w-2 h-2 mt-2 mr-3 rounded-full bg-[var(--color-clay-400)]" />
						<Text className="text-[var(--color-stone-600)]">{item}</Text>
					</li>
				))}
			</ul>
		</div>
	);
};
