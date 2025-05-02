import About from "@/components/about/AboutHeader";
import FocusAndTechnologies from "@/components/about/FocusAndTechnologies";
import ZenValuesMission from "@/components/about/ValuesMission";
import DeveloperJourney from "@/components/about/DeveloperJourney";
import MissionStatement from "@/components/about/MissionStatement";
import { FutureSection } from "../about/FutureSection";
import { ContactSection } from "../about/ContactSection";


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
		</main>
	)
}