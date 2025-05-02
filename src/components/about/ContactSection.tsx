import Container from '../ui/Container';
import Text from '../ui/Text';

import { SectionHeader } from './SectionHeader';
import { WebPresence } from './WebPresence';
import { ChatSection } from './ChatSection';

const SECTION_STYLES = {
	contactBox: 'inline-block p-6 mb-12 border-l-2 bg-[var(--color-moss-50)] border-[var(--color-moss-500)]',
};

export const ContactSection = () => (
	<section className="py-12 bg-[var(--color-stone-50)]">
		<Container className="max-w-4xl">
			<SectionHeader icon="📫" title="Contact Me" variant="h3" />

			<div className={SECTION_STYLES.contactBox}>
				<div className="flex items-center">
					<span className="mr-2">👉</span>
					<Text className="text-[var(--color-stone-700)]">
						If you want to talk with me you can contact me
						<a
							href="/contact"
							className="ml-1 font-medium transition-colors text-[var(--color-moss-600)]"
							aria-label="Contact page"
						>
							here
						</a>
					</Text>
				</div>
			</div>

			<WebPresence />
			<ChatSection />
		</Container>
	</section>
);
