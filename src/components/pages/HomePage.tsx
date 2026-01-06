import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Education from "@/components/home/education/Education";
import OnlineCourses from "@/components/home/online-courses/OnlineCourses";
import ContactCard from "@/components/ContactCard";
import Experience from "@/components/experience/Experience";
import { getHomePageJsonLd } from "@/utils/jsonLd";
import StructuredData from "../StructuredData";
import LatestBlogs from "@/components/home/LatestBlogs";

export default function HomePage() {
	const homePageJsonLdData = getHomePageJsonLd();
	return (
		<main>
			<StructuredData data={homePageJsonLdData} id="homepage-jsonld" />
			<Hero />
			<LatestBlogs />
			<About />
			<Experience />
			<Education />
			<OnlineCourses />
			<ContactCard />
		</main>
	);
}
