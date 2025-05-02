import About from "@/components/about/AboutHeader";
import FocusAndTechnologies from "@/components/about/FocusAndTechnologies";
import ZenValuesMission from "@/components/about/ValuesMission";
import DeveloperJourney from "@/components/about/DeveloperJourney";
import MissionStatement from "@/components/about/MissionStatement";
import { FutureSection } from "@/components/about/FutureSection";
import { ContactSection } from "@/components/about/ContactSection";
import ContactCard from "@/components/ContactCard";


export default function AboutPage() {
	return (
		<main>
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