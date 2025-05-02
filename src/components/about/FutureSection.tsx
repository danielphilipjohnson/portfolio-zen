import Container from '../ui/Container';
import Text from '../ui/Text';

import { SectionHeader } from './SectionHeader';
import { SupportGrid } from './SupportGrid';
import { FutureQuote } from './FutureQuote';

const SECTION_STYLES = {
	subtitle: 'mb-4 text-[var(--color-stone-700)] font-medium',
};

export const FutureSection = () => (
	<section className="py-8 bg-[var(--color-stone-100)]">
		<Container className="max-w-4xl">
			<SectionHeader icon="💚" title="The Future" />
			<div className="mb-12">
				<Text as="h3" variant="h4" className={SECTION_STYLES.subtitle}>
					Ways to support my journey, values and mission
				</Text>
				<SupportGrid />
			</div>
			<FutureQuote />
		</Container>
	</section>
);