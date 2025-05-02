import InfoPanel from '../ui/InfoPanel';
import { supportItems } from '@/data/support-Items';

const SECTION_STYLES = {
	grid: 'grid grid-cols-1 gap-6 md:grid-cols-2'
};

export const SupportGrid = () => {
	return (
		<div className={SECTION_STYLES.grid}>
			{supportItems.map((item, index) => (
				<InfoPanel
					key={index}
					title={item.title}
					borderColor="moss.500"
					backgroundColor="moss.50"
				>
					{item.content}
				</InfoPanel>
			))}
		</div>
	);
};