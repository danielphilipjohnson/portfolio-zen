import SecurityContentHero from '@/components/security/SecurityContentHero';
import QuickStartGuides from '@/components/security/QuickStartGuides';
import SecurityByTopic from '@/components/security/SecurityByTopic';
import ObservabilitySupplyChain from '@/components/security/ObservabilitySupplyChain';
import SecurityConsultationCTA from '@/components/security/SecurityConsultationCTA';
import ContactCard from '@/components/ContactCard';
import StructuredData from '@/components/StructuredData';
import { getSecurityPageJsonLd } from '@/utils/jsonLd';

export default function SecurityPage() {
	const securityPageJsonLdData = getSecurityPageJsonLd();
	
	return (
		<main>
			<StructuredData data={securityPageJsonLdData} id="security-page-jsonld" />
			<SecurityContentHero />
			<QuickStartGuides />
			<SecurityByTopic />
			<ObservabilitySupplyChain />
			<SecurityConsultationCTA />
			<ContactCard />
		</main>
	);
}
