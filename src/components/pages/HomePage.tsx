import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Education from "@/components/home/education/Education";
import OnlineCourses from "@/components/home/online-courses/OnlineCourses";
import ContactSection from "@/components/Contact";
import Experience from "@/components/experience/Experience";

export default function HomePage() {
	return (
		<main>
			<Hero />
			<About />
			<Experience />
			<Education />
			<OnlineCourses />
			<ContactSection />
		</main>
	);
}
