import About from "@/components/about/AboutHeader";
import FocusAndTechnologies from "@/components/about/FocusAndTechnologies";
import ZenValuesMission from "@/components/about/ValuesMission";
import DeveloperJourney from "@/components/about/DeveloperJourney";
import MissionStatement from "@/components/about/MissionStatement";
import { FutureSection } from "@/components/about/FutureSection";
import { ContactSection } from "@/components/about/ContactSection";
import ContactCard from "@/components/ContactCard";
import StructuredData from "../StructuredData";
import { getAboutPageJsonLd } from "@/utils/jsonLd";


export default function AboutPage() {
	const aboutPageJsonLdData = getAboutPageJsonLd();
	return (
		<main>
			<StructuredData data={aboutPageJsonLdData} id="about-page-jsonld" />
			<About />
			<MissionStatement />
			<ZenValuesMission />
			<DeveloperJourney />
			<FocusAndTechnologies />
			<FutureSection />
			<ContactSection />
			<ContactCard />
		</main>
	)
}