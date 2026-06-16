import Container from "@/components/ui/Container";
import Text from "@/components/ui/Text";
import { LinkButton } from "@/components/ui/LinkButton";

interface ProjectCategory {
	name: string | { name: string; slug: string };
	slug: string;
}

interface ProjectSinglePageProps {
	project: {
		title: string;
		description?: string;
		imageUrl: string;
		imageAlt?: string;
		technologies?: string[];
		categories?: ProjectCategory[];
		url?: string;
		githubUrl?: string;
		content: string;
	};
	children?: React.ReactNode;
}

export default function ProjectSinglePage({ project, children }: ProjectSinglePageProps) {
	return (
		<main className="min-h-screen bg-stone-50 pt-28 pb-20">
			<Container>
				<div className="mb-8">
					<LinkButton href="/projects" variant="outline" size="sm" className="mb-6">
						← Back to Projects
					</LinkButton>
					
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
						<div className="max-w-2xl">
							<Text as="h1" variant="h1" weight="light" className="mb-4 text-stone-900">
								{project.title}
							</Text>
							{project.description && (
								<Text variant="h6" className="text-stone-600">
									{project.description}
								</Text>
							)}
						</div>
						
						<div className="flex flex-wrap gap-3">
							{project.url && (
								<LinkButton href={project.url} target="_blank" rel="noopener noreferrer">
									Visit Site
								</LinkButton>
							)}
							{project.githubUrl && (
								<LinkButton href={project.githubUrl} variant="outline" target="_blank" rel="noopener noreferrer">
									View Source
								</LinkButton>
							)}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					<div className="lg:col-span-2">
						<div className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm mb-12">
							<img
								src={project.imageUrl}
								alt={project.imageAlt || project.title}
								className="w-full h-auto object-contain bg-stone-100"
							/>
						</div>

						<div className="prose prose-stone prose-lg max-w-none bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
							{children}
						</div>
					</div>

					<div className="space-y-8">
						<div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
							<Text as="h3" variant="h5" weight="medium" className="mb-4 text-stone-900">
								Technologies
							</Text>
							<div className="flex flex-wrap gap-2">
								{project.technologies?.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 text-sm border bg-stone-50 border-stone-200 text-stone-700 rounded-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{project.categories && project.categories.length > 0 && (
							<div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
								<Text as="h3" variant="h5" weight="medium" className="mb-4 text-stone-900">
									Categories
								</Text>
								<div className="flex flex-wrap gap-2">
									{project.categories.map((category, index) => (
										<span
											key={index}
											className="px-3 py-1 text-sm bg-moss-50 text-moss-700 rounded-sm"
										>
											{typeof category.name === 'object' ? category.name.name : category.name}
										</span>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</Container>
		</main>
	);
}
