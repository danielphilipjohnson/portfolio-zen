import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ContactCard from "@/components/ContactCard";
import Experience from "@/components/experience/Experience";
import { getHomePageJsonLd } from "@/utils/jsonLd";
import StructuredData from "../StructuredData";
import LatestBlogs from "@/components/home/LatestBlogs";
import Recommended from "../home/Recommended";
import SelectedImpact from "../home/SelectedImpact";
import Section from "../ui/Section";

export default function HomePage() {
	const homePageJsonLdData = getHomePageJsonLd();
	return (
		<main>
			<StructuredData data={homePageJsonLdData} id="homepage-jsonld" />
			<Hero />
			<Section bg="muted">
				<Recommended />
			</Section>
			<Section>
				<SelectedImpact />
			</Section>
			<Section bg="muted" overflowHidden>
				<About />
			</Section>
			<Section>
				<Experience />
			</Section>
			<LatestBlogs />
			<ContactCard />
		</main>
	);
}
