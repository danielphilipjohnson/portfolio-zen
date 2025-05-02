import { getAllProjects } from "@/lib/content/getAllProjects";
import ZenProjectHero from "../project/ZenProjectHero";
import ZenProjectGrid from "../project/ZenProjectGrid";


export default async function ProjectsPage() {
	const { projects, categories } = await getAllProjects();

	return (
		<main className="min-h-screen bg-stone-50">
			<ZenProjectHero
				title="Projects"
				subtitle="Cultivated digital experiences crafted with intention and purpose"
				backgroundImageUrl="/images/projects/hero.png"
			/>

			<ZenProjectGrid
				projects={projects}
				categories={categories}
				showFilters
			/>
		</main>
	);
}
